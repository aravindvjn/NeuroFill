import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactPreview = ({ email, address, phone, color }: ResumeInputType) => {
  return (
    <div className="flex flex-col  gap-[10px]">
      <h2 style={{ color }} className="font-bold my-1 text-lg">
        CONTACT
      </h2>
      <p className="horizontally-center ">
        <FaPhoneAlt color={color} />
        {phone}
      </p>
      <p className="horizontally-center">
        <MdOutlineMailOutline  color={color}/>
        {email}
      </p>
      <p className="horizontally-center">
        <IoLocationOutline  color={color}/>
        {address}
      </p>
    </div>
  );
};

export default ContactPreview;
