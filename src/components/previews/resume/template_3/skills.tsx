import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";

const SkillPreview = ({
  skill,
  color,
}: {
  skill: ResumeInputType["skill"];
  color?: ResumeInputType["color"];
}) => {
  if (!skill || skill.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
        <h3
          style={{ color }}
          className="font-semibold my-1"
        >
          SKILLS
        </h3>

      <ul className="flex flex-col gap-[5px] ">
        {skill.map((singleSkill) => (
          <li
            key={singleSkill.id}
            className="flex justify-between"
          >
            <p className="flex items-center gap-1"><VscDebugBreakpointData color={color} />{singleSkill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillPreview;
