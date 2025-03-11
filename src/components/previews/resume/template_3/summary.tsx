import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";

const SummaryPreview = ({ summary, color }: ResumeInputType) => {
  
  if (!summary) return;

  return (
    <div style={{
      borderColor:color
    }} className="text-justify my-3 mt-5 pb-2">
        <h3 style={{ color }} className="text-lg font-semibold">
          PROFILE
        </h3>
      <p className="text-[#374151]">{summary}</p>
    </div>
  );
};

export default SummaryPreview;
