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

const ResumePreview3 = ({
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
        <div className="w-1/3 flex flex-col  p-2 pt-4 h-full color-section">
          <ContactPreview {...resume} />
          <EducationPreview {...resume} />
          <SkillPreview {...resume} />
        </div>
        <div style={{
          borderColor:resume.color || "#055BB5"
        }} className="w-2/3 border-l-2 pl-4 flex flex-col ">
          <SummaryPreview {...resume} />
          <ExperiencePreview {...resume} />
          <CustomFieldPreview {...resume} />
        </div>
      </section>
    </Card>
  );
};

export default ResumePreview3;
