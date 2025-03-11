import { ResumeInputType } from "@/components/forms/resume-form/type";
import Card from "@/components/ui/card";
import React from "react";
import PersonalDetailsPreview from "./personal-details";
import ExperiencePreview from "./experience";
import EducationPreview from "./education";
import SkillPreview from "./skills";
import CustomFieldPreview from "./custom-field";
import "../resume.css";
import ContactPreview from "./contact";
import SummaryPreview from "./summary";

const ResumePreview1 = ({
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
      <section className="flex gap-[10px]">
        <div className="w-3/5">
          <SummaryPreview {...resume} />
          <ExperiencePreview {...resume} />
          <CustomFieldPreview {...resume} />
        </div>
        <div className="w-2/5 bg-[#f8fef0] p-4 h-full color-section">
          <ContactPreview {...resume} />
          <EducationPreview {...resume} />
          <SkillPreview {...resume} />
        </div>
      </section>
    </Card>
  );
};

export default ResumePreview1;
