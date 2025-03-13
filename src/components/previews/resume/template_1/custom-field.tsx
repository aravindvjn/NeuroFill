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
            <div className="bg-[#f3f4f6] my-1 py-1">
              <h3
                style={{ color }}
                className="text-center font-bold underline uppercase"
              >
                {field?.heading}
              </h3>
            </div>
          )}
          <div>
            <p
              style={{ color }}
              className="flex items-center gap-2 font-semibold"
            >
              <VscDebugBreakpointLog />
              {field?.subheading}
            </p>
            <p className="text-[#374151]">{field?.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomFieldPreview;
