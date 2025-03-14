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
              <h3
                style={{ color }}
                className="text-center my-1 font-bold underline-offset-2 underline uppercase"
              >
                {field?.heading}
              </h3>
          )}
          <div>
            <p
              style={{ color }}
              className={`flex gap-2 items-start ${field?.content && "font-semibold"}`}
            >
              <VscDebugBreakpointLog className="mt-[2px]" />
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
