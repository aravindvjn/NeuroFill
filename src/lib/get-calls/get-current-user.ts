"use server";
import { prisma } from "../db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth.config";

export async function currentUserId(): Promise<string | null> {
    try {
        const session = await getServerSession(authOptions); 
        if (!session || !session.user) return null;

        return session.user.id ?? null;

    } catch (error) {
        console.error("Error in getting current user ID:", error);
        return null;
    }
}



//get current user data 

export async function currentUser() {

    try {

        //get user id
        const userId = await currentUserId()

        if (!userId || typeof userId !== 'string') {
            return null
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                email: true,
                firstName: true,
                lastName: true,
                profilePic: true,

            }
        })

        return user || null

    } catch (error) {
        console.error("Invalid token:", error);
        return null
    }
}
