'use server'
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "../db";

const JWT_SECRET = process.env.JWT_SECRET!

export async function currentUserId(): Promise<string | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return null
    }

    try {
        // Decode and verify the JWT token
        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));

        return payload?.userId as string

    } catch (error) {
        console.error("Invalid token:", error);
        return null
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
