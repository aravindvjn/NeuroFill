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
                className="my-2 font-semibold  uppercase"
              >
                {field?.heading}
              </h3>
          )}
          <div>
            <p
              style={{ color }}
              className={`flex items-start gap-2 ${field?.content && "font-semibold"}`}
            >
              <VscDebugBreakpointLog className="mt-[2px]" />
              {field?.subheading}
            </p>
            <p className="text-[#374151] text-justify">{field?.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomFieldPreview;
