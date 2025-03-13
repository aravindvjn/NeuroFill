import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";

const PersonalDetailsPreview = ({
  firstName,
  lastName,
  profession,
  address,
  email,
  phone,
  color,
}: ResumeInputType) => {
  if (!firstName && !lastName && !profession && !email && !phone && !address)
    return;

  return (
    <div style={{ backgroundColor:color || '#297c74' }} className="text-center center text-white flex-col p-5 uppercase pb-1 gap-[7px]">
      <h1 className="text-2xl">
        {firstName} {lastName}
      </h1>
      <div className="w-[100px] border-b"></div>
      <h5 className="md:text-[15px] mb-1 font-light">{profession}</h5>
    </div>
  );
};

export default PersonalDetailsPreview;
