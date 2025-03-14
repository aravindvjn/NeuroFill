'use server'
import bcrypt from 'bcrypt'
import { prisma } from "../db";
import crypto from "crypto";
import { sendResetPassword } from "../helpers/send-verification";


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



        await sendResetPassword(email, resetToken,!!userExists.password);

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
                resetTokenExpiry: true,
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
            where: {
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

