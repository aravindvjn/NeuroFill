import React, { ChangeEvent, useState } from "react";
import Input from "./input";
import { Props } from "./type";
import { MdDelete } from "react-icons/md";
import TextArea from "@/components/ui/text-area";
import { formatDateInput } from "@/lib/helpers/date";

const ProfessionalExperience = ({
  handleChange,
  experience,
  input,
  handleDelete,
}: Props) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e as unknown as ChangeEvent<HTMLInputElement>);
  };

  const onDateInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    target.value = formatDateInput(target.value);
  };

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <p className="text-[12px] text-text-secondary">All Fields are required</p>
      <div className="w-full flex items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={experience?.position}
          label="Position Title"
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
          onInput={onDateInput}
          placeholder="DD-MM-YYYY"
          onChange={handleChange}
          value={experience?.startDate}
          label="Start Date"
          name="startDate"
        />
        <Input
          onInput={onDateInput}
          placeholder="DD-MM-YYYY"
          onChange={handleChange}
          value={experience?.endDate}
          label="End Date"
          name="endDate"
        />
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          name="currentlyWorking"
          onChange={handleChange}
          checked={experience?.currentlyWorking}
        />
        <p>Currently working</p>
      </div>

      <TextArea
        label="summary"
        name="workSummary"
        value={experience?.workSummary}
        onChange={onChange}
      />

      <div>
        <p className="text-lg font-semibold underline">Existing Experience</p>

        <ul className=" my-2 px-[20px]">
          {input?.experience.map((exp, index) => (
            <div key={exp.id || index} className="li flex items-center justify-between gap-2">
              <li>
                {exp?.position} at {exp?.companyName}
              </li>
              <MdDelete
                onClick={() => handleDelete!("experience", index)}
                size={20}
                className="text-red-500 w-[30px] cursor-pointer"
              />
            </div>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ProfessionalExperience;
