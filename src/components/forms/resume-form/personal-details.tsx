import React from "react";
import { Props } from "./type";
import Input from "./input";

const PersonalDetails = ({ handleChange, input }: Props) => {
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
      <Input
        onChange={handleChange}
        value={input?.profession}
        label="Profession"
        name="profession"
      />
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
