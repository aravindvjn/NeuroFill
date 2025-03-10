import React from "react";

export type ResumeInputType = {
    id?: string;
    title?: string;
    firstName: string;
    lastName: string;
    profession: string;
    address: string;
    phone: string;
    email: string;
    experience: ExperienceType[]
    summary: string;
    color?: string;
    education: EducationType[];
    skill: SkillType[]
    authorId?: string;
    templateId?: string;
    customField:CustomFieldType[]

}
export type CustomFieldType = {
    id?:string;
    heading:string;
    subheading:string;
    content:string
}

export type ExperienceType = {
    id?: string;
    position: string;
    companyName: string;
    city: string;
    state: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    workSummary: string
}

export type EducationType = {
    id?: string;
    degree: string;
    universityName: string;
    major: string;
    startDate: string;
    endDate: string;
}


export type SkillType = {
    id?: string;
    name: string;
    rating: string;
}

export type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    input?: ResumeInputType
    handleDelete?: (name: DeleteType, index: number) => void;
    setInput?: React.Dispatch<React.SetStateAction<ResumeInputType>>;

}

export type ProfessionProps = {
    setExperience: React.Dispatch<React.SetStateAction<ExperienceType>>;
    experience?: ExperienceType;
};

export type EducationProps = {
    setEducation: React.Dispatch<React.SetStateAction<EducationType>>;
    education: EducationType
};

export type CustomFieldProps = {
    setCustomField: React.Dispatch<React.SetStateAction<CustomFieldType>>;
    customField: CustomFieldType
};

export type SkillProps = {
    setSkill: React.Dispatch<React.SetStateAction<SkillType>>;
    skill: SkillType
};

export type TemplateProps = {
    input: ResumeInputType
    setInput: React.Dispatch<React.SetStateAction<ResumeInputType>>;
}
export type DeleteType = "experience" | "education" | "skill" | "customField"

export type PageType = "Personal Details" | "Professional Experience" | "Skills" | "Summary" | "Education" | "Custom Fields"

export type AiSuggestedSummaryType = {
    experienceLevel: string;
    summary: string
}