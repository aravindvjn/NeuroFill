'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserInput } from "@/components/forms/auth-form/type";
import xss from "xss";
import { prisma } from "../db";
import crypto from "crypto";
import { sendResetPassword } from "../helpers/send-verification";

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
            return {
                ...prevState,
                message: "All fields are requied.",
            };
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return {
                ...prevState,
                message: "Invalid Credentials",
            };
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return {
                ...prevState,
                message: "Invalid Credentials",
            };
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
            message: "Failed to login. Try again!",
        };
    }
    redirect("/")
}


// Reset Password Request
export const requestResetPassword = async (email: string) => {
    try {
        if (!email) {
            return { success: false, message: "Please provide a valid email address." };
        }

        const resetToken = crypto.randomBytes(32).toString("hex");
        const resetTokenExpiry = new Date(Date.now() + 1000 * 60 * 60);

        if (!resetToken || !resetTokenExpiry) {
            return { success: false, message: "Failed to send verification mail. Please try again." };
        }
        const userExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!userExists) {
            return { success: false, message: "User not found. Please check the email address." };
        }

        await prisma.user.update({
            where: { email },
            data: { resetToken, resetTokenExpiry }
        });



        await sendResetPassword(email, resetToken);

        return { success: true, message: "Password reset link sent successfully. Please check your email." };
    } catch (error) {
        console.error("Error in resetting password:", error);
        return { success: false, message: "An unexpected error occurred. Please try again later." };
    }
};


//reset password

export const resetPassword = async (token: string, password: string) => {

    try {
        if (!password || password.length < 6) {
            return { success: false, message: "Password must be at least 6 characters." }
        }

        if (!token) {
            return { success: false, message: "Invalid Credentials." }
        }

        const user = await prisma.user.findUnique({
            where: {
                resetToken: token,
            },
            select: {
                email: true,
                resetTokenExpiry: true
            }
        })

        if (!user) {
            return { success: false, message: "Invalid Credentials. Please try again." }
        }

        if (!user.resetTokenExpiry || user.resetTokenExpiry < new Date()) {
            return { success: false, message: "Invalid or expired token." }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        if (!hashedPassword) {
            throw new Error("Error in hashing password.")
        }

        await prisma.user.update({
            where: {
                email: user.email
            },
            data: {
                password: hashedPassword
            }
        })

        await prisma.user.update({
            where:{
                resetToken: token,
            },
            data: {
                resetToken: null,
                resetTokenExpiry: null
            }
        })
        
        return { success: true, message: "Your password has been changed successfully!" }

    } catch (error) {
        console.log("Error in reseting password :", error)
        return { success: false, message: "An unexpected error occurred. Please try again later." }
    }
}