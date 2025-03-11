"use client";
import Resume from "@/components/cards/resume";
import { CiFileOff } from "react-icons/ci";
import React from "react";
import { ResumeType } from "../cards/type";
import Templates from "../banners/templates";
import Link from "next/link";

type Props = {
  resumes: ResumeType[];
  isLoggedIn: boolean;
};

const ResumeLandingPage = ({ resumes, isLoggedIn }: Props) => {
  return (
    <div className="layout relative flex mb-16 flex-col gap-[20px]">
      <Templates />
      {!isLoggedIn && (
        <div  className="w-fit mx-auto px-5 py-2 border border-red-500  rounded-lg bg-red-200 text-red-500 text-[14px] md:text-[16px] flex items-center gap-1 flex-wrap"> 
          <p className="">You must be logged in to create a resume. </p><Link className="text-blue-500 font-semibold underline" href={'/auth'}>Click here to Login</Link>
        </div>
      )}
      <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Recent Works
      </p>
      <p className="text-[12px] leading-0 sm:text-[14px] md:text-[16px] text-text-secondary">
        Your recently created resumes, ready to impress potential employers.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[10px] sm:gap-[20px] cursor-pointer md:gap-[30px]">
        {resumes?.map((resume) => (
          <Resume
            key={resume.id}
            title={resume.title}
            id={resume.id}
            templateId={resume.templateId}
          />
        ))}
      </div>
      {resumes?.length === 0 && (
        <div className="text-text-secondary text-center center py-12 flex-col">
          <CiFileOff size={40} />
          <p>No resumes yet.</p>
        </div>
      )}
    </div>
  );
};

export default ResumeLandingPage;
