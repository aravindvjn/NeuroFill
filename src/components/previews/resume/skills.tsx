import { ResumeInputType } from "@/components/forms/resume-form/type";
import { convertToRatingPercentage } from "@/lib/helpers/conversion";
import React from "react";

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
      <div className="bg-[#f3f4f6] my-2 py-2">
        <h2
          style={{ color }}
          className="text-center font-bold underline"
        >
          SKILLS
        </h2>
      </div>
      <ul className="grid grid-cols-2 gap-[20px] ">
        {skill.map((singleSkill) => (
          <li
            key={singleSkill.id}
            className="flex justify-between pb-1 relative"
          >
            <p>{singleSkill.name}</p>
            <p className="text-[#6b7280] ">{singleSkill.rating}</p>
            <div className="absolute w-full bottom-0 left-0 h-[4px] bg-[#e5e7eb] rounded-md">
              <div
                className="absolute bottom-0 left-0 h-full transition-all"
                style={{
                  width: `${convertToRatingPercentage(singleSkill.rating)}%`,
                  backgroundColor: color || "#3b82f6",
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillPreview;
