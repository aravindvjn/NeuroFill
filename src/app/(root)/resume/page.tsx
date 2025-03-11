
import ResumeLandingPage from "@/components/works/resume-landing-page";
import { getAllResumes } from "@/lib/actions/resume.action";
import { currentUserId } from "@/lib/get-calls/get-current-user";
import React from "react";


const Page = async() => {

  const userId = await currentUserId()
  const res = await getAllResumes()

  return <ResumeLandingPage isLoggedIn={!!userId} resumes={res.data || []} />;
};

export default Page;
