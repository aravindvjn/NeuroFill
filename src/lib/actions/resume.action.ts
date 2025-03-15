"use server"
import xss from "xss"
import { prisma } from "../db"
import { defaultInputValue } from "@/components/forms/resume-form/constants"
import { currentUserId } from "../get-calls/get-current-user"
import { ResumeInputType } from "@/components/forms/resume-form/type"
import { revalidatePath } from "next/cache"
import { uploadImage } from "./cloudinary.action"

export const createResume = async (title: string, templateId: number) => {
    title = xss(title)

    if (title.length < 3 || title.length > 30) {
        return { success: false, message: "Title must be between 3 and 30 characters long." }
    }

    try {
        const userId = await currentUserId()

        if (!userId || typeof userId !== "string") {
            return { success: false, message: "Please log in." }
        }

        const result = await prisma.resume.create({
            data: {
                ...defaultInputValue,
                title,
                templateId: templateId.toString(),
                authorId: userId,
                experience: { create: [] },
                education: { create: [] },
                skill: { create: [] },
            },
            select: {
                id: true
            }
        })

        return { success: true, id: result.id }
    } catch (error) {
        console.error("Error creating resume:", error)
        return { success: false, message: "Something went wrong. Please try again." }
    }
}


//get resume by id
export const getResumeById = async (resumeId: string) => {
    try {

        const userId = await currentUserId()

        if (!userId) {
            return { success: false, message: "Please Login." }
        }

        const resume = await prisma.resume.findUnique({
            where: { id: resumeId, authorId: userId },
            include: {
                experience: true,
                education: true,
                skill: true,
                customField: true
            }
        });

        if (!resume) {
            return { success: false, message: "Resume not found." };
        }

        return { success: true, data: resume };
    } catch (error) {
        console.error("Error fetching resume:", error);
        return { success: false, message: "Failed to retrieve resume." };
    }
};


//update resume
export const updateResume = async (resume: ResumeInputType) => {
    try {
        const userId = await currentUserId();
        if (!userId) {
            return { success: false, message: "Please Login first" };
        }

        if (!resume.id || resume.authorId !== userId) {
            return { success: false, message: "Invalid Credentials" };
        }
        let image_url;
        if (typeof resume.image !== 'string') {
            image_url = await uploadImage(resume.image);
            if(!image_url) {
                return { success: false, message: "Failed to upload image. Try again." };
            }
        }

        const updatedResume = await prisma.resume.update({
            where: { id: resume.id, authorId: userId },
            data: {
                firstName: resume.firstName,
                lastName: resume.lastName,
                profession: resume.profession,
                address: resume.address,
                phone: resume.phone,
                email: resume.email,
                summary: resume.summary,
                color: resume.color,
                templateId: resume.templateId,
                fontFamily: resume.fontFamily,
                image: image_url,
                experience: {
                    deleteMany: {},
                    create: resume.experience.map(exp => ({
                        position: exp.position,
                        companyName: exp.companyName,
                        city: exp.city,
                        state: exp.state,
                        startDate: exp.startDate,
                        endDate: exp.endDate,
                        currentlyWorking: exp.currentlyWorking,
                        workSummary: exp.workSummary,
                    })),
                },
                education: {
                    deleteMany: {},
                    create: resume.education.map(edu => ({
                        degree: edu.degree,
                        universityName: edu.universityName,
                        major: edu.major,
                        startDate: edu.startDate,
                        endDate: edu.endDate,
                    })),
                },
                skill: {
                    deleteMany: {},
                    create: resume.skill.map(skill => ({
                        name: skill.name,
                        rating: skill.rating,
                    })),
                },
                customField: {
                    deleteMany: {},
                    create: resume.customField.map(field => ({
                        heading: field.heading,
                        subheading: field.subheading,
                        content: field.content
                    })),
                },
            },
        });

        return { success: true, id: updatedResume.id };
    } catch (error) {
        console.error("Error updating resume:", error);
        return { success: false, message: "Failed to update resume." };
    }
};



export const getAllResumes = async () => {
    try {
        const userId = await currentUserId();
        if (!userId) {
            return { success: false, message: "Please log in first." };
        }

        const resumes = await prisma.resume.findMany({
            where: { authorId: userId },
            select: { id: true, title: true, templateId: true },
            orderBy: { updatedAt: "desc" },
        });

        if (!resumes) {
            throw new Error()
        }

        return { success: true, data: resumes };
    } catch {
        return { success: false, message: "Failed to fetch resumes." };
    }
};


export const deleteResume = async (id: string) => {
    try {

        const userId = await currentUserId();
        if (!userId) {
            return { success: false, message: "Please log in first." };
        }

        await prisma.resume.delete({
            where: {
                id,
                authorId: userId
            }
        })
    } catch (error) {
        console.log("Error in deleting a resume :", error)
        return { success: false, message: "Failed to delete" };
    }
    revalidatePath('/resume')
}