import React from "react";
import Input from "./input";
import { EducationProps,Props } from "./type";
import { formatDateInput } from "@/lib/helpers/date";
import DargAndDrop from "./drag-and-drop";


const Education = ({
  handleChange,
  input,
  handleDelete,
  education,
  setEducation,
  setInput
}: Props & EducationProps) => {

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
          value={education?.degree}
          label="Degreee"
          name="degree"
        />
        <Input
          onChange={handleChange}
          value={education?.major}
          label="Major"
          name="major"
        />
      </div>
      <div className="flex w-full items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={education?.universityName}
          label="University Name"
          name="universityName"
        />
      </div>
      <div className="flex w-full items-center gap-[20px]">
        <Input
          onInput={onDateInput}
          placeholder="DD-MM-YYYY"
          onChange={handleChange}
          value={education?.startDate}
          label="Start Date"
          name="startDate"
        />
        <Input
          onInput={onDateInput}
          placeholder="DD-MM-YYYY"
          onChange={handleChange}
          value={education?.endDate}
          label="End Date"
          name="endDate"
        />
      </div>

      <div>
        <p className="text-lg font-semibold underline">Existing Education</p>

        <DargAndDrop
          handleDelete={handleDelete!}
          input={input!}
          setInput={setInput!}
          setValue={setEducation}
          name="education"
        />
      </div>
    </div>
  );
};

export default Education;
