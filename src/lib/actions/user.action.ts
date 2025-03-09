'use server'
import { UserInput } from "@/components/forms/auth-form/type";
import { prisma } from "../db";
import crypto from "crypto";
import xss from 'xss'
import { validateUserInput } from "../helpers/validate-user-input";
import { sendVerificationEmail } from "../helpers/send-verification";
import bcrypt from 'bcrypt'

type PrevState = {
    data?: UserInput;
    success: boolean;
    message: string;
};


//Send verification email
export async function createPendingUser(prevState: PrevState, formData: FormData) {
    try {
        const email = xss(formData.get("email") as string);
        const firstName = xss(formData.get("firstName") as string);
        const lastName = xss(formData.get("lastName") as string);
        const profilePic = xss(formData.get("profilePic") as string);
        const password = xss(formData.get("password") as string);

        prevState = {
            ...prevState,
            data: {
                email: { value: email },
                password: { value: password },
                firstName: { value: firstName },
                lastName: { value: lastName },
            },
        };

        for (const key in prevState.data) {

            if (prevState.data[key as keyof UserInput]?.value) {
                validateUserInput(key, prevState.data[key as keyof UserInput]?.value);
            }
        }

        const verificationToken = crypto.randomBytes(32).toString("hex");
        const tokenExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24);

        const isEmailExist = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if (isEmailExist) {
            return {
                ...prevState,
                message: "Email already registered. Try Login!",
            };
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        if (!hashedPassword) {
            throw new Error("Failed to hash the password")
        }

        await prisma.pendingUser.upsert({
            where: { email },
            update: {
                firstName,
                lastName,
                profilePic,
                verificationToken,
                tokenExpiresAt,
                password: hashedPassword
            },
            create: {
                email,
                firstName,
                lastName,
                profilePic,
                verificationToken,
                tokenExpiresAt,
                password: hashedPassword
            },
        });


        await sendVerificationEmail(email, verificationToken)

        return {
            ...prevState,
            data:{
                email: { value: "" },
                password: { value: "" }
            },
            success: true,
            message: "Verification email sent. Please check your inbox.",
        };

        // eslint-disable-next-line
    } catch (error: any) {
        console.error("Error creating pending user:", error);
        return {
            ...prevState,
            data:{
                email: { value: "" },
                password: { value: "" }
            },
            success: false,
            message:"Failed to register. Try again!",
        };
    }
}



//verify email 
export async function verifyEmail(token: string, password: string) {

    try {

        const pendingUser = await prisma.pendingUser.findUnique({
            where: {
                verificationToken: token,
            },
        });

        if (!pendingUser || pendingUser.tokenExpiresAt < new Date()) {
            return { success: false, message: "Invalid or expired token." }
        }

        const isMatch = await bcrypt.compare(password, pendingUser?.password)

        if (!isMatch) {
            return { success: false, message: "Incorrect Password." }
        }

        // Move user from PendingUser to User
        await prisma.user.create({
            data: {
                email: pendingUser.email,
                firstName: pendingUser.firstName || "NeuroFill User",
                lastName: pendingUser.lastName,
                profilePic: pendingUser.profilePic,
                password: pendingUser.password,
            },
        });

        // Delete from PendingUser table
        await prisma.pendingUser.delete({
            where: { id: pendingUser.id },
        });

        return { success: true, message: "Email verified successfully, Try Login!" };
    } catch (error) {

        console.log("Error in Verifying mail id :", error)
        return { success: false, message: "Server not responding." }
    }
}



