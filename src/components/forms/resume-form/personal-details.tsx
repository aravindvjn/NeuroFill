import React from "react";
import { Props } from "./type";
import Input from "./input";

const PersonalDetails = ({ handleChange, input }: Props) => {
  const imageTemplates = ["3"]
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="w-full flex items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={input?.firstName}
          label="First Name"
          name="firstName"
        />
        <Input
          onChange={handleChange}
          value={input?.lastName}
          label="Last Name"
          name="lastName"
        />
      </div>
      <div className="w-full flex items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={input?.profession}
          label="Profession"
          name="profession"
        />
        {imageTemplates.includes(input?.templateId || "") && (
          <Input
            name="image"
            type="file"
            onChange={handleChange}
            accept="image/*"
            className="cursor-pointer"
            label="Photo"
          />
        )}
      </div>
      <Input
        onChange={handleChange}
        value={input?.address}
        label="Address"
        name="address"
      />
      <div className="flex w-full items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={input?.phone}
          label="Phone Number"
          name="phone"
        />
        <Input
          onChange={handleChange}
          value={input?.email}
          label="Email"
          name="email"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
