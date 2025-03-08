import { ResumeInputType } from "@/components/forms/resume-form/type";
import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const CustomFieldPreview = ({
  customField,
  color,
}: {
  customField: ResumeInputType["customField"];
  color?: ResumeInputType["color"];
}) => {
  if (!customField || customField.length === 0) {
    return null;
  }

  return (
    <>
      {customField?.map((field, index) => (
        <div key={index} className="mt-4">
          {field?.heading && (
            <div className="bg-[#f3f4f6] my-2 py-2">
              <h2
                style={{ color }}
                className="text-center font-bold underline text-lg uppercase"
              >
                {field?.heading}
              </h2>
            </div>
          )}
          <div>
            <p
              style={{ color }}
              className="flex items-center gap-2 font-semibold text-[16px]"
            >
              <VscDebugBreakpointLog />
              {field?.subheading}
            </p>
            <p className="text-[#6b7280]">{field?.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomFieldPreview;
