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
    <div style={{ color }} className="text-center border-b-3 pb-1">
      <h1 className="font-bold">
        {firstName} {lastName}
      </h1>
      <p className="font-semibold">{profession}</p>
      <p className="opacity-80">{address}</p>
      <div className="flex opacity-80 items-start justify-between">
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default PersonalDetailsPreview;
