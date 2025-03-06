export type ResumeInputType = {
    firstName:string;
    lastName:string;
    profession:string;
    address:string;
    phone:string;
    email:string;
    experience:ExperienceType[]
}

export type ExperienceType = {
    position:string;
    companyName:string;
    city:string;
    state:string;
    startDate:string;
    endDate:string
}


export type Props={
    handleChange : (e: React.ChangeEvent<HTMLInputElement>)=>void;
    input?:ResumeInputType
    experience?:ExperienceType

}


export type PageType =  "Personal Details" | "Professional Experience" | "Skills"