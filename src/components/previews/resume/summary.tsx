import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";

const SummaryPreview = ({ summary, color }: ResumeInputType) => {
  
  if (!summary) return;

  return (
    <div className="text-[14px] text-center border-b-3 pb-2">
      <div className="bg-gray-100 my-2">
        <p style={{ color }} className="text-lg font-bold underline">
          PROFILE
        </p>
      </div>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export default SummaryPreview;
