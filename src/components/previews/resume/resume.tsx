import { ResumeInputType } from "@/components/forms/resume-form/type";
import Card from "@/components/ui/card";
import React from "react";
import PersonalDetailsPreview from "./personal-details";
import SummaryPreview from "./summary";
import ExperiencePreview from "./experience";
import EducationPreview from "./education";
import SkillPreview from "./skills";
import CustomFieldPreview from "./custom-field";
import './resume.css'
const ResumePreview = ({
  resume,
  noElevation,
}: {
  resume: ResumeInputType;
  noElevation?: boolean;
}) => {
  return (
    <Card
      className={`p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 resume dark:bg-[#ffffff] bg-[#ffffff] resume text-[#000] ${
        noElevation && "!shadow-none !rounded-none"
      }`}
    >
      <PersonalDetailsPreview {...resume} />
      <SummaryPreview {...resume} />
      <ExperiencePreview {...resume} />
      <EducationPreview {...resume} />
      <SkillPreview {...resume} />
      <CustomFieldPreview {...resume} />
    </Card>
  );
};

export default ResumePreview;
