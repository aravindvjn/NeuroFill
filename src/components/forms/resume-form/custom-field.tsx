import React, { ChangeEvent } from "react";
import Input from "./input";
import {
  CustomFieldProps,
  Props,
} from "./type";
import TextArea from "@/components/ui/text-area";
import DargAndDrop from "./drag-and-drop";

const CustomField = ({
  handleChange,
  input,
  handleDelete,
  customField,
  setCustomField,
  setInput,
}: Props & CustomFieldProps) => {

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <p className="text-[12px] text-text-secondary">All Fields are required</p>
      <div className="w-full flex items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={customField?.heading}
          label="Heading"
          name="heading"
        />
        <Input
          onChange={handleChange}
          value={customField?.subheading}
          label="Sub Heading"
          name="subheading"
        />
      </div>
      <TextArea
        label="Summary"
        name="content"
        value={customField?.content}
        onChange={(e) =>
          handleChange(e as unknown as ChangeEvent<HTMLInputElement>)
        }
      ></TextArea>

      <div>
        <p className="text-lg font-semibold underline">Existing Custom Field</p>

        <DargAndDrop
          handleDelete={handleDelete!}
          input={input!}
          setInput={setInput!}
          setValue={setCustomField}
          name="customField"
        />
      </div>
    </div>
  );
};

export default CustomField;
