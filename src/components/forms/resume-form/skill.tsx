import React, { ChangeEvent } from "react";
import Input from "./input";
import { Props, SkillProps } from "./type";
import { skillsRatings } from "./constants";
import DargAndDrop from "./drag-and-drop";

const Skill = ({
  handleChange,
  input,
  handleDelete,
  skill,
  setSkill,
  setInput
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

        <DargAndDrop
          handleDelete={handleDelete!}
          input={input!}
          setInput={setInput!}
          setValue={setSkill}
          name="skill"
        />
      </div>
    </div>
  );
};

export default Skill;
