"use client";

import React, { useState } from "react";
import { renderMovingItems } from "./banner";
import PopUp from "../ui/pop-up";
import CreateTitle from "../forms/resume-form/create-title";
import TemplateSlider from "./template-slider";


const Templates = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [index, setIndex] = useState(0);

  const handleShowPopUp = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };


  return (
    <div className="text-center pt-10 md:pt-14 bg-gradient-to-b from-blue-500 to-indigo-800 flex justify-between flex-col rounded-lg text-white overflow-hidden md:rounded-xl">
      <PopUp isOpen={showPopUp} onClose={closePopUp}>
        <CreateTitle templateId={index} />
      </PopUp>

      <div className="px-5">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Resume Maker
        </p>
        <p>Create professional resumes in minutes</p>
      </div>
      
      {renderMovingItems("resume")}
      <TemplateSlider handleShowPopUp={handleShowPopUp} setIndex={setIndex} index={index} />
    </div>
  );
};

export default Templates;
