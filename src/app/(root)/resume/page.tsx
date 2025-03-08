
import ResumeLandingPage from "@/components/works/resume-landing-page";
import { getAllResumes } from "@/lib/actions/resume.action";
import React from "react";


const Page = async() => {

  const res = await getAllResumes()

  return <ResumeLandingPage resumes={res.data || []} />;
};

export default Page;
