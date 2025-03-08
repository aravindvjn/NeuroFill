import React, { ChangeEvent } from "react";
import Input from "./input";
import { EducationProps, ExperienceType, Props, SkillProps } from "./type";
import { MdDelete, MdEdit } from "react-icons/md";
import TextArea from "@/components/ui/text-area";
import { formatDateInput } from "@/lib/helpers/date";
import { skillsRatings } from "./constants";

const Skill = ({
  handleChange,
  input,
  handleDelete,
  skill,
  setSkill,
}: Props & SkillProps) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleChange(e as unknown as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-[10px] w-full">

      <p className="text-[12px] text-text-secondary">All Fields are required</p>

      <div className="w-full flex items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={skill?.name}
          label="Skill"
          name="name"
        />

        <div>
          
          <label className="text-sm font-medium text-text">Level</label>
          <select
            name="rating"
            className="p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={skill?.rating}
            onChange={onChange}
          >
            {skillsRatings.map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div>
        <p className="text-lg font-semibold underline">Existing Skills</p>

        <ul className=" my-2 px-[20px]">
          {input?.skill.map((ski, index) => (
            <div
              key={ski.id || index}
              className="li flex items-center justify-between gap-2"
            >
              <li>
                {ski?.name} - {ski.rating}
              </li>
              <div className="horizontally-center">
                <MdEdit
                  onClick={() => {
                    setSkill(ski);
                    handleDelete!("skill", index);
                  }}
                  size={20}
                  className="text-red-500 w-[20px] cursor-pointer"
                />
                <MdDelete
                  onClick={() => handleDelete!("skill", index)}
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

export default Skill;
