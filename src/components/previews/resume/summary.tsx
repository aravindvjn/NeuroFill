import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";

const SummaryPreview = ({ summary, color }: ResumeInputType) => {
  
  if (!summary) return;

  return (
    <div style={{
      borderColor:color
    }} className="text-[14px] text-center border-b-3 pb-2">
      <div className="bg-[#f3f4f6] my-2">
        <h2 style={{ color }} className="text-lg font-bold underline">
          PROFILE
        </h2>
      </div>
      <p className="text-[#374151]">{summary}</p>
    </div>
  );
};

export default SummaryPreview;
