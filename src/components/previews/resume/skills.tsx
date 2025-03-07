import { ResumeInputType } from "@/components/forms/resume-form/type";
import { convertToRatingPercentage } from "@/lib/helpers/conversion";
import React from "react";

const SkillsPreview = ({
  skills,
  color,
}: {
  skills: ResumeInputType["skills"];
  color?: ResumeInputType["color"];
}) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="bg-gray-100 my-2 py-2">
        <p
          style={{ color }}
          className="text-center font-bold underline text-lg"
        >
          SKILLS
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-[20px] text-[14px]">
        {skills.map((skill) => (
          <li key={skill.id} className="flex justify-between pb-1 relative">
            <span>{skill.name}</span>
            <span className="text-gray-500 ">{skill.rating}</span>
            <div className="absolute w-full bottom-0 left-0 h-[4px] bg-gray-200 rounded-md">
              <div
                className="absolute bottom-0 left-0 h-full transition-all"
                style={{
                  width: `${convertToRatingPercentage(skill.rating)}%`,
                  backgroundColor: color || "blue",
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPreview;
