import { PageType } from "./type"

export const defaultInputValue = {
    address: "",
    email: "",
    experience: [],
    firstName: "",
    lastName: "",
    phone: "",
    profession: "",
    summary:'',
    education:[],
    skills:[]
}


export const defaultExperienceValue = {
    position: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    currentlyWorking:false,
    workSummary:""
}


export const defaultEducationValue = {
    id:"",
    degree:"",
    universityName:"",
    major:"",
    startDate:"",
    endDate:"",
}


export const pages: PageType[] = [
    "Personal Details",
    "Summary",
    "Professional Experience",
    "Education",
    "Skills",
  ];

export const navigator = (prev: PageType, next: boolean) => {

  
    const currentIndex = pages.indexOf(prev);
    if (next) {
      return pages[currentIndex + 1] || prev; 
    } else {
      return pages[currentIndex - 1] || prev;
    }
  };
  