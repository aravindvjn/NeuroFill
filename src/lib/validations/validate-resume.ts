import { ExperienceType } from "@/components/forms/resume-form/type";

export const generateWorkSummaryValidation= (experience:ExperienceType | undefined)=>{
    if(!experience || !experience?.position || !experience?.city || !experience?.companyName){
        return "Position, Company Name and City are required to generate a work summary"
    }
    return null
}