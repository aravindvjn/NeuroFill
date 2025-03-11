import { ExperienceType, PageType } from "./type"

export const defaultInputValue = {
  title: "",
  address: "",
  email: "",
  experience: [],
  firstName: "",
  lastName: "",
  phone: "",
  profession: "",
  summary: '',
  education: [],
  skill: [],
  fontFamily:"sans-serif"
}


export const defaultExperienceValue = {
  position: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  currentlyWorking: false,
  workSummary: ""
}


export const defaultEducationValue = {
  id: "",
  degree: "",
  universityName: "",
  major: "",
  startDate: "",
  endDate: "",
}

export const defaultSkillValue = {
  name: "",
  rating: "",
}

export const defaultCustomValue = {
  heading: "",
  subheading: "",
  content: ''
}

export const skillsRatings = ["", "Beginner", "Intermediate", "Advanced", "Expert"]

export const pages: PageType[] = [
  "Personal Details",
  "Summary",
  "Professional Experience",
  "Education",
  "Skills",
  "Custom Fields"
];

export const navigator = (prev: PageType, next: boolean) => {


  const currentIndex = pages.indexOf(prev);
  if (next) {
    return pages[currentIndex + 1] || prev;
  } else {
    return pages[currentIndex - 1] || prev;
  }
};



export const createExperiencePrompt = (experience: ExperienceType) => {
  return `Generate a professional experience summary in JSON format based on the given details:
    
  - Position: ${experience?.position}
  - Company name :${experience?.companyName}
  - City :${experience?.city}

  Response format (JSON):
  {
    "experienceLevel": "Mid-Level",
    "summary": "I am a skilled software engineer with expertise in React and Node.js..."
  }
    summary should not exceed 1000 characters
    
  for all levels`
}

