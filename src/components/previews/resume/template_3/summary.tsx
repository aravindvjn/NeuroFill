import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";

const SummaryPreview = ({ summary, color }: ResumeInputType) => {
  
  if (!summary) return;

  return (
    <div style={{
      borderColor:color
    }} className="text-[14px] text-justify my-3 mt-5 pb-2">
        <h2 style={{ color }} className="text-lg font-bold">
          PROFILE
        </h2>
      <p className="text-[#374151]">{summary}</p>
    </div>
  );
};

export default SummaryPreview;
