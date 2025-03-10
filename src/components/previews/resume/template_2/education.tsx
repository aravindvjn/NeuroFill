import { ResumeInputType } from "@/components/forms/resume-form/type";
import { formatDate } from "@/lib/helpers/date";
import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";

const EducationPreview = ({
  education,
  color,
}: {
  education: ResumeInputType["education"];
  color?: ResumeInputType["color"];
}) => {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
        <h3
          style={{ color }}
          className="font-semibold underline-offset-2 my-1 underline text-lg"
        >
          EDUCATION
        </h3>

      {education.map((edu, index) => (
        <div className="mb-4 text-[14px]" key={edu.id || index}>
          <div className="flex justify-between">

            {edu.degree && edu.major && (
              <p
                style={{ color }}
                className="flex items-center gap-1 font-semibold text-[16px]"
              >
               <VscDebugBreakpointData/> {edu.degree} {edu.degree && edu.major && "in"} {edu.major}
              </p>
            )}

            {edu?.startDate && edu.endDate && (
              <p className="italic text-[#6b7280]">
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
            )}

          </div>
          <p className="text-[#6b7280]">{edu.universityName}</p>
        </div>
      ))}
      
    </div>
  );
};

export default EducationPreview;
