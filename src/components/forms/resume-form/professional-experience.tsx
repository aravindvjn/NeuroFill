import React, { ChangeEvent, useState } from "react";
import Input from "./input";
import { ProfessionProps, Props } from "./type";
import TextArea from "@/components/ui/text-area";
import { formatDateInput } from "@/lib/helpers/date";
import Button from "@/components/ui/button";
import { generateWithAI } from "@/lib/helpers/get-data-from-ai";
import { createExperiencePrompt } from "./constants";
import toast from "react-hot-toast";
import { generateWorkSummaryValidation } from "@/lib/validations/validate-resume";
import DargAndDrop from "./drag-and-drop";

const ProfessionalExperience = ({
  handleChange,
  experience,
  input,
  handleDelete,
  setExperience,
  setInput,
}: Props & ProfessionProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateWithAI = async () => {
    const isNotValid = generateWorkSummaryValidation(experience);
    if (isNotValid) {
      toast.error(isNotValid);
      return;
    }

    setIsLoading(true);
    const res = await generateWithAI(createExperiencePrompt(experience!));

    if (res.success && res.data[0]?.summary) {
      setExperience((prev) => ({
        ...prev,
        workSummary: res.data[0].summary,
      }));
    } else {
      toast.error("Failed to generate work Summary. Please try again.");
    }
    setIsLoading(false);
  };

  const onDateInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    target.value = formatDateInput(target.value);
  };

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <p className="text-[12px] text-text-secondary">All Fields are required</p>
      <div className="w-full flex items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={experience?.position}
          label="Position Title"
          name="position"
        />
        <Input
          onChange={handleChange}
          value={experience?.companyName}
          label="Company Name"
          name="companyName"
        />
      </div>
      <div className="flex w-full items-center gap-[20px]">
        <Input
          onChange={handleChange}
          value={experience?.city}
          label="City"
          name="city"
        />
        <Input
          onChange={handleChange}
          value={experience?.state}
          label="State"
          name="state"
        />
      </div>
      <div className="flex w-full items-center gap-[20px]">
        <Input
          onInput={onDateInput}
          placeholder="DD-MM-YYYY"
          onChange={handleChange}
          value={experience?.startDate}
          label="Start Date"
          name="startDate"
        />
        <Input
          onInput={onDateInput}
          placeholder="DD-MM-YYYY"
          onChange={handleChange}
          value={experience?.endDate}
          label="End Date"
          name="endDate"
        />
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          name="currentlyWorking"
          onChange={handleChange}
          checked={experience?.currentlyWorking}
        />
        <p>Currently working</p>
      </div>

      <TextArea
        label="Summary"
        name="workSummary"
        value={experience?.workSummary}
        onChange={(e) =>
          handleChange(e as unknown as ChangeEvent<HTMLInputElement>)
        }
      >
        <Button
          type="button"
          disabled={isLoading}
          isLoading={isLoading}
          onClick={handleGenerateWithAI}
          className="!h-[30px] !w-fit absolute right-0 -top-3 mb-2 !px-4"
        >
          Generate with AI
        </Button>
      </TextArea>

      <div>
        <p className="text-lg font-semibold underline">Existing Experience</p>
        <DargAndDrop
          handleDelete={handleDelete!}
          input={input!}
          setInput={setInput!}
          setValue={setExperience}
          name="experience"
        />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
