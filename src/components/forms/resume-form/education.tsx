import React, { ChangeEvent } from "react";
import Input from "./input";
import { EducationProps, ExperienceType, Props } from "./type";
import { MdDelete, MdEdit } from "react-icons/md";
import TextArea from "@/components/ui/text-area";
import { formatDateInput } from "@/lib/helpers/date";


const Education = ({
  handleChange,
  input,
  handleDelete,
  education,
  setEducation
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

        <ul className=" my-2 px-[20px]">
          {input?.education.map((edu, index) => (
            <div
              key={edu.id || index}
              className="li flex items-center justify-between gap-2"
            >
              <li>
                {edu?.degree} in {edu?.major}
              </li>
              <div className="horizontally-center">
                <MdEdit
                  onClick={() => {
                    setEducation(edu);
                    handleDelete!("education", index);
                  }}
                  size={20}
                  className="text-red-500 w-[20px] cursor-pointer"
                />
                <MdDelete
                  onClick={() => handleDelete!("education", index)}
                  size={20}
                  className="text-red-500 w-[20px] cursor-pointer"
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
