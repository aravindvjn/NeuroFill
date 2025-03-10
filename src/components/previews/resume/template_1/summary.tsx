import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";

const SummaryPreview = ({ summary, color }: ResumeInputType) => {
  
  if (!summary) return;

  return (
    <div style={{
      borderColor:color
    }} className="text-[14px] text-center border-b-3 pb-2">
      <div className="bg-[#f3f4f6] my-1 py-1">
        <h3 style={{ color }} className="text-lg font-bold underline">
          PROFILE
        </h3>
      </div>
      <p className="text-[#374151]">{summary}</p>
    </div>
  );
};

export default SummaryPreview;
