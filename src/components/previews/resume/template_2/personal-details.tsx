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
    <div style={{ color }} className="text-start text-[14px]  pb-1">
      <h1 className="text-xl">
        {firstName} {lastName}
      </h1>
      <h3 className="text-lg mb-1 font-light">{profession}</h3>
      <p className="text-justify">{summary}</p>
      <div className="flex mt-3 items-center justify-between py-1 border-b-2 border-t-2 ">
        <p className="horizontally-center ">
          <FaPhoneAlt />
          {phone}
        </p>
        <p className="horizontally-center">
          <MdOutlineMailOutline />
          {email}
        </p>
        <p className="horizontally-center">
          <IoLocationOutline />
          {address}
        </p>
      </div>
    </div>
  );
};

export default PersonalDetailsPreview;
