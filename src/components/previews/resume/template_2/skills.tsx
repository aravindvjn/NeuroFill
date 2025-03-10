import { ResumeInputType } from "@/components/forms/resume-form/type";
import { convertToRatingPercentage } from "@/lib/helpers/conversion";
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
          className="font-semibold underline-offset-2 my-1 underline"
        >
          SKILLS
        </h3>

      <ul className="grid grid-cols-3 gap-[5px] ">
        {skill.map((singleSkill) => (
          <li
            key={singleSkill.id}
            className="flex justify-between"
          >
            <p className="flex items-center gap-1"><VscDebugBreakpointData />{singleSkill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillPreview;
