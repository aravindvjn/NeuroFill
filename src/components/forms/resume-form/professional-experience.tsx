import React from "react";
import Input from "./input";
import { Props } from "./type";


const ProfessionalExperience = ({ handleChange,experience }: Props) => {


  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="w-full flex items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={experience?.position}
          label="Positon Title"
          name="position"
        />
        <Input
          onChange={handleChange}
          value={experience?.companyName}
          label="Company Name"
          name="companyName"
        />
      </div>
      <div className="flex w-full items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={experience?.city}
          label="City"
          name="city"
        />
        <Input
          onChange={handleChange}
          value={experience?.state}
          label="State"
          name="state"
        />
      </div>
      <div className="flex w-full items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={experience?.startDate}
          label="Start Date"
          name="startDate"
          
        />
        <Input
          onChange={handleChange}
          value={experience?.endDate}
          label="End Date"
          name="endDate"
          
        />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
