import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactPreview = ({ email, address, phone, color }: ResumeInputType) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h3 style={{ color }} className="font-semibold my-1">
        CONTACT
      </h3>
      <p className="flex items-center gap-1.5">
        <FaPhoneAlt color={color} />
        {phone}
      </p>
      <p className="flex items-center gap-1.5">
        <MdOutlineMailOutline  color={color}/>
        {email}
      </p>
      <p className="flex items-center gap-1.5">
        <IoLocationOutline  color={color}/>
        {address}
      </p>
    </div>
  );
};

export default ContactPreview;
