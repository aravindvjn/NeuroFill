import { ResumeInputType } from "@/components/forms/resume-form/type";
import { formatDate } from "@/lib/helpers/date";
import React from "react";
import { VscDebugBreakpointData, VscDebugBreakpointLog } from "react-icons/vsc";

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
      <h2 style={{ color }} className="font-bold my-1 text-lg">
        EDUCATION
      </h2>

      {education.map((edu, index) => (
        <div className="mb-4 text-[14px]" key={edu.id || index}>
          {edu.degree && edu.major && (
            <p
              className="flex items-center gap-1 font-semibold text-[16px]"
            >
              <VscDebugBreakpointData color={color} />
              {edu.degree} {edu.degree && edu.major && "in"} {edu.major}
            </p>
          )}
          <p className="text-[#6b7280] pl-4">{edu.universityName}</p>
          {edu?.startDate && edu.endDate && (
            <p className="italic text-[#6b7280] pl-4">
              ({formatDate(edu.startDate)} - {formatDate(edu.endDate)})
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationPreview;
