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
      <h3 style={{ color }} className="font-semibold my-1">
        EDUCATION
      </h3>

      {education.map((edu, index) => (
        <div className="mb-4" key={edu.id || index}>
          {edu.degree && edu.major && (
            <p
              className="flex items-center gap-1 font-semibold"
            >
              <VscDebugBreakpointData color={color} />
              {edu.degree} {edu.degree && edu.major && "in"} {edu.major}
            </p>
          )}
          <p className="text-[#374151] pl-4">{edu.universityName}</p>
          {edu?.startDate && edu.endDate && (
            <p className=" text-[#374151] pl-4">
              ({formatDate(edu.startDate)} - {formatDate(edu.endDate)})
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationPreview;
