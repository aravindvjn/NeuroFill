"use client";
import { cardsItems } from "@/components/cards/contants";
import Resume from "@/components/cards/resume";
import Heading from "@/components/common/heading";
import CreateTitle from "@/components/forms/resume-form/create-title";
import PopUp from "@/components/ui/pop-up";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { ResumeType } from "../cards/type";

type Props = {
    resumes:ResumeType[]
}

const ResumeLandingPage = ({resumes}:Props) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<string>("");
  const handleShowPopUp = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <div className="layout flex flex-col gap-[20px]">

      <PopUp isOpen={showPopUp} onClose={closePopUp}>
        <CreateTitle />
      </PopUp>
      
      <Heading
        subheading={cardsItems[0].subheading}
        heading={cardsItems[0].heading}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-[10px] sm:gap-[20px] cursor-pointer md:gap-[30px]">
        <div
          onClick={handleShowPopUp}
          className={`border-[2px] rounded-lg overflow-hidden center hover:bg-secondary-background text-border active:translate-y-0.5 border-border ${resumes?.length === 0 && "aspect-[6/7]"}`}
        >
          <IoMdAdd size={30} />
        </div>
        {resumes?.map(resume=><Resume showOption={showOptions} setShowOption={setShowOptions} key={resume.id} thumbnail_url="" title={resume.title} id={resume.id} />)}
      </div>
    </div>
  );
};

export default ResumeLandingPage;
