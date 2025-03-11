import { ResumeInputType } from "@/components/forms/resume-form/type";
import { formatDate } from "@/lib/helpers/date";
import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";



const ExperiencePreview: React.FC<{ experience: ResumeInputType["experience"],color?: ResumeInputType["color"]  }> = ({ experience ,color}) => {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <div className="mt-2">
        <h2 style={{color}} className="font-bold my-2 text-lg">EXPERIENCE</h2>
      {experience.map((exp, index) => (
        <div className="mb-4 text-[14px]" key={exp.id || index}>
          <div className="flex justify-between items-center pb-1">
            <p style={{color}} className="flex items-center gap-2 font-semibold text-[16px]"><VscDebugBreakpointData/>
              {exp.position} at {exp.companyName}
            </p>
          </div>
          <p className="text-[#4b5563]">
            {exp.city}, {exp.state} ( {formatDate(exp.startDate)} - {exp.currentlyWorking ? "Present" : formatDate(exp.endDate)})
          </p>
          <p className="text-[#374151] text-justify">{exp.workSummary}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
