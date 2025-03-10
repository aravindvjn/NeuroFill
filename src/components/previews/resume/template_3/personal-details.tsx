import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const PersonalDetailsPreview = ({
  firstName,
  lastName,
  profession,
  address,
  email,
  phone,
  color,
  summary,
}: ResumeInputType) => {
  if (!firstName && !lastName && !profession && !email && !phone && !address)
    return;

  return (
    <div style={{ backgroundColor:color || '#297c74' }} className="text-center center text-white flex-col text-[14px] p-5 uppercase pb-1 gap-[7px]">
      <h1 className="text-2xl">
        {firstName} {lastName}
      </h1>
      <div className="w-[100px] border-b"></div>
      <h3 className="text-[14px] md:text-[15px] mb-1 font-light">{profession}</h3>
    </div>
  );
};

export default PersonalDetailsPreview;
