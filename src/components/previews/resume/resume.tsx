import { ResumeInputType } from "@/components/forms/resume-form/type";
import Card from "@/components/ui/card";
import React from "react";
import PersonalDetailsPreview from "./personal-details";
import SummaryPreview from "./summary";
import ExperiencePreview from "./experience";
import EducationPreview from "./education";
import SkillPreview from "./skills";
import CustomFieldPreview from "./custom-field";

const ResumePreview = ({
  resume,
  noElevation,
}: {
  resume: ResumeInputType;
  noElevation?: boolean;
}) => {
  return (
    <Card
      className={`p-10 bg-[#ffffff]  text-[#000] ${
        noElevation && "!shadow-none !rounded-none"
      }`}
    >
      <PersonalDetailsPreview {...resume} />
      <SummaryPreview {...resume} />
      <ExperiencePreview {...resume} />
      <EducationPreview {...resume} />
      <CustomFieldPreview {...resume} />
      <SkillPreview {...resume} />
    </Card>
  );
};

export default ResumePreview;
