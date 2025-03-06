'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInput } from "@/components/forms/auth-form/type";
import xss from "xss";
import { prisma } from "../db";

type PrevState = {
    data?: UserInput;
    success: boolean;
    message: string;
};


//Login 
export async function loginUser(prevState: PrevState, formData: FormData) {
    try {
        const email = xss(formData.get("email") as string);
        const password = xss(formData.get("password") as string);

        prevState = {
            ...prevState,
            data: {
                email: { value: email },
                password: { value: password },
            },
        };

        if (!email || !password) {
            throw new Error("All fields are requied.")
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            throw new Error("Invalid Credentials")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error("Invalid Credentials")
        }


        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: "7d" });

        // Attach token in cookies 
        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
        });

        // eslint-disable-next-line
    } catch (error: any) {
        console.error("Error creating pending user:", error);
        return {
            ...prevState,
            success: false,
            message: typeof error.message === "string" ? error.message : "Failed to login. Try again!",
        };
    }
    redirect("/")
}
