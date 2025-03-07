import React from "react";

export type ResumeInputType = {
    id?:string;
    firstName:string;
    lastName:string;
    profession:string;
    address:string;
    phone:string;
    email:string;
    experience:ExperienceType[]
    summary:string;
    color?:string;
    education:EducationType[];
    skills:SkillsType[]

}

export type ExperienceType = {
    id?:string;
    position:string;
    companyName:string;
    city:string;
    state:string;
    startDate:string;
    endDate:string;
    currentlyWorking:boolean;
    workSummary:string
}

export type EducationType = {
    id?:string;
    degree:string;
    universityName:string;
    major:string;
    startDate:string;
    endDate:string;
}


export type SkillsType = {
    id?:string;
    name:string;
    rating:string;
}

export type Props={
    handleChange : (e: React.ChangeEvent<HTMLInputElement>)=>void;
    input?:ResumeInputType
    experience?:ExperienceType;
    handleDelete?:(name:DeleteType,index:number) => void;
    setInput?:React.Dispatch<React.SetStateAction<ResumeInputType>>;

}

export type DeleteType = "experience" | "education" | "skills"

export type PageType =  "Personal Details" | "Professional Experience" | "Skills" | "Summary" | "Education"

export type AiSuggestedSummaryType = {
    experienceLevel:string;
    summary:string
}