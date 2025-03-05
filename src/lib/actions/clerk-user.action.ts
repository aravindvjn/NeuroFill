/* eslint-disable @typescript-eslint/no-explicit-any */

'use server'
import { prisma } from "../db";

export async function createUserFromClerk(data: any) {
  try {
    return await prisma.user.create({
      data: {
        clerkId: data.id,
        email: data.email_addresses[0]?.email_address || "",
        firstName: data.first_name || "NeuroFill User",
        lastName: data.last_name || null,
        profilePic: data.image_url || null,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed");
  }
}

export async function updateUserFromClerk(data: any) {
  try {
    return await prisma.user.update({
      where: { clerkId: data.id },
      data: {
        firstName: data.first_name,
        lastName: data.last_name,
        profilePic: data.image_url,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("User update failed");
  }
}

export async function deleteUserFromClerk(clerkId: string) {
  try {
    return await prisma.user.delete({
      where: { clerkId },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("User deletion failed");
  }
}
