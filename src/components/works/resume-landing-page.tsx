"use client";
import Resume from "@/components/cards/resume";
import { CiFileOff } from "react-icons/ci";
import React, { useState } from "react";
import { ResumeType } from "../cards/type";
import Templates from "../banners/templates";

type Props = {
  resumes: ResumeType[];
};

const ResumeLandingPage = ({ resumes }: Props) => {
  const [showOptions, setShowOptions] = useState<string>("");

  return (
    <div className="layout flex mb-16 flex-col gap-[20px]">
      <Templates />

      <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Recent Works
      </p>
      <p className="text-[12px] leading-0 sm:text-[14px] md:text-[16px] text-text-secondary">
        Your recently created resumes, ready to impress potential employers.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[10px] sm:gap-[20px] cursor-pointer md:gap-[30px]">
        {resumes?.map((resume) => (
          <Resume
            showOption={showOptions}
            setShowOption={setShowOptions}
            key={resume.id}
            thumbnail_url=""
            title={resume.title}
            id={resume.id}
          />
        ))}
      </div>
      {resumes?.length === 0 && (
        <div className="text-text-secondary text-center center py-12 flex-col">
          <CiFileOff size={40}/>
          <p>No resumes yet.</p>
        </div>
      )}
    </div>
  );
};

export default ResumeLandingPage;
