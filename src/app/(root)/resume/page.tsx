"use client";
import { cardsItems } from "@/components/cards/contants";
import Resume from "@/components/cards/resume";
import Heading from "@/components/common/heading";
import CreateTitle from "@/components/forms/resume-form/create-title";
import PopUp from "@/components/ui/pop-up";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const page = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

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
          className="border-[2px] rounded-lg overflow-hidden center hover:bg-secondary-background text-border active:translate-y-0.5 border-border"
        >
          <IoMdAdd size={30} />
        </div>
        <Resume thumbnail_url="" title="" />
      </div>
    </div>
  );
};

export default page;
