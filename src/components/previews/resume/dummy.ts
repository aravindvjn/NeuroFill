import { ResumeInputType } from "@/components/forms/resume-form/type";

export const dummyResume: ResumeInputType = {
  id: "1",
  firstName: "Michael",
  lastName: "Smith",
  profession: "Full-Stack Developer",
  address: "456 Elm Street, San Francisco, CA",
  phone: "+1 987 654 3210",
  email: "michael.smith@example.com",
  summary:
    "Innovative full-stack developer with 6+ years of experience designing and building modern web applications. Skilled in React, Next.js, Node.js, and PostgreSQL.",
  color: "#2ecc71",
  experience: [
    {
      id: "exp1",
      position: "Lead Software Engineer",
      companyName: "InnovateTech",
      city: "San Francisco",
      state: "CA",
      startDate: "2019-09-01",
      endDate: "2024-03-01",
      currentlyWorking: true,
      workSummary:
        "Architected and led the development of a scalable SaaS platform, improving performance by 40%. Mentored junior developers and conducted code reviews.",
    },
    {
      id: "exp2",
      position: "Full-Stack Developer",
      companyName: "CodeCrafters",
      city: "Austin",
      state: "TX",
      startDate: "2016-06-01",
      endDate: "2019-08-01",
      currentlyWorking: false,
      workSummary:
        "Developed and optimized RESTful APIs using Node.js and Express. Enhanced frontend applications using React, resulting in a 30% improvement in user engagement.",
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Science",
      universityName: "Stanford University",
      major: "Software Engineering",
      startDate: "2014-08-01",
      endDate: "2016-05-01",
    },
    {
      id: "edu2",
      degree: "Bachelor of Science",
      universityName: "University of Texas",
      major: "Computer Science",
      startDate: "2010-08-01",
      endDate: "2014-05-01",
    },
  ],
  skills: [
    { id: "skill1", name: "React.js", rating: "Expert" },
    { id: "skill2", name: "Next.js", rating: "Advanced" },
    { id: "skill3", name: "Node.js", rating: "Advanced" },
    { id: "skill4", name: "TypeScript", rating: "Advanced" },
    { id: "skill5", name: "PostgreSQL", rating: "Intermediate" },
    { id: "skill6", name: "Docker", rating: "Intermediate" },
  ],
};
