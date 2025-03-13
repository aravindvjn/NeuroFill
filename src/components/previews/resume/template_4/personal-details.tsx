import { ResumeInputType } from "@/components/forms/resume-form/type";
import Image from "next/image";
import React from "react";

const PersonalDetailsPreview = ({
  firstName,
  lastName,
  profession,
  address,
  email,
  phone,
  color,
  image,
}: ResumeInputType) => {
  if (!firstName && !lastName && !profession && !email && !phone && !address)
    return;

  if (image && typeof image !== "string") {
    image = URL.createObjectURL(image);
  }

  const renderImage = () => {
    if (image) {
      return (
        <Image
          className="rounded-full w-[120px] aspect-square border-4 border-white object-cover photo"
          src={image}
          alt="profile"
          width={700}
          height={700}
        />
      );
    }
    return null;
  };

  return (
    <div
      style={{ backgroundColor: color || "#055BB5" }}
      className="text-center flex justify-between text-white  p-5 uppercase gap-[7px]"
    >
      <div >{renderImage()}</div>
      <div>
        <h1 className="font-bold">
          {firstName} {lastName}
        </h1>
        <h5 className="mb-1 font-light">{profession}</h5>
      </div>
    </div>
  );
};

export default PersonalDetailsPreview;
