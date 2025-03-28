"use client";
import React, { ChangeEvent, useState } from "react";
import PickColor from "./pick-color";
import PersonalDetails from "./personal-details";
import type {
  CustomFieldType,
  DeleteType,
  EducationType,
  ExperienceType,
  PageType,
  ResumeInputType,
  SkillType,
} from "./type";
import {
  defaultCustomValue,
  defaultEducationValue,
  defaultExperienceValue,
  defaultInputValue,
  defaultSkillValue,
  navigator,
  pages,
} from "./constants";
import Card from "@/components/ui/card";
import ProfessionalExperience from "./professional-experience";
import Summary from "./summary";
import Education from "./education";
import Skill from "./skill";
import Buttons from "./buttons";
import CustomField from "./custom-field";
import Template from "./template";
import Header from "@/components/common/header";
import { fontFamilyValues } from "@/components/common/constants";
import { FontFamilyType } from "@/components/common/type";
import SelectFontFamily from "./select-font";
import toast from "react-hot-toast";
import ResumePreviewer from "@/components/common/resume-preview";

const ResumeForm = ({ resume }: { resume: ResumeInputType }) => {
  //States
  const [input, setInput] = useState<ResumeInputType>(
    resume || defaultInputValue
  );
  const [page, setPage] = useState<PageType>("Personal Details");
  const [experience, setExperience] = useState<ExperienceType>(
    defaultExperienceValue
  );
  const [education, setEducation] = useState<EducationType>(
    defaultEducationValue
  );
  const [customField, setCustomField] =
    useState<CustomFieldType>(defaultCustomValue);
  const [skill, setSkill] = useState<SkillType>(defaultSkillValue);

  //Handle all inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let image: File;
    const { target } = e;
    if (target.type === "file" && target.files && target.files.length > 0) {
      if (!target.files[0].type.includes("image")) {
        toast.error("Please select an image file.");
        return;
      }
      image = target.files[0];
    }
    setInput((prev: ResumeInputType) => {
      return {
        ...prev,
        [target.name]: image || target.value,
      };
    });
  };

  //Handle pages
  const handlePage = (next: boolean) => {
    setPage((prev) => {
      return navigator(prev, next);
    });
  };

  //Handle change in experience
  const handleExperience = (e: ChangeEvent<HTMLInputElement>) => {
    setExperience((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  //Handle change in education
  const handleEducation = (e: ChangeEvent<HTMLInputElement>) => {
    setEducation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //Handle change in education
  const handleCustomField = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //Handle change in skill
  const handleSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //Handle color
  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, color: e.target.value }));
  };

  //Handle delete
  const handleDelete = (name: DeleteType, index: number) => {
    setInput((prev) => ({
      ...prev,
      [name]: prev[name].filter((_, i) => i !== index),
    }));
  };

  //Handle Font Family
  const handleFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (fontFamilyValues.includes(e.target.value)) {
      setInput((prev) => ({
        ...prev,
        fontFamily: e.target.value as FontFamilyType,
      }));
    }
  };

  //Add experience, skils, educations, custom field
  const addItems = () => {
    if (page === pages[2]) {
      setInput((prev) => ({
        ...prev,
        experience: [...prev["experience"], experience],
      }));
      setExperience(defaultExperienceValue);
    } else if (page === pages[3]) {
      setInput((prev) => ({
        ...prev,
        education: [...prev["education"], education],
      }));
      setEducation(defaultEducationValue);
    } else if (page === pages[4]) {
      setInput((prev) => ({
        ...prev,
        skill: [...prev["skill"], skill],
      }));
      setSkill(defaultSkillValue);
    } else if (page === pages[5]) {
      setInput((prev) => ({
        ...prev,
        customField: [...prev["customField"], customField],
      }));
      setCustomField(defaultCustomValue);
    }
  };

  const props = {
    handleDelete: handleDelete,
    input: input,
    setInput: setInput,
  };

  return (
    <div className="layout mt-[60px] text-[14px] md:text-[16px]">
      <Header title="Create Resume" />
      <PickColor
        color={input?.color || "black"}
        handleChangeColor={handleChangeColor}
      />
      <div className="horizontally-center mt-2">
        <Template input={input} setInput={setInput} />{" "}
        <SelectFontFamily
          fontFamily={input.fontFamily}
          handleFontFamily={handleFontFamily}
        />
      </div>

      <section className="grid mt-[20px] md:grid-cols-2 gap-[50px] md:gap-[20px]">
        <form>
          <Card>
            <p className="text-[18px] sm:text-[19px] md:text-[20px] font-semibold pb-2">{page}</p>

            {page === pages[0] && (
              <PersonalDetails input={input} handleChange={handleChange} />
            )}

            {page === pages[1] && (
              <Summary
                setInput={setInput}
                input={input}
                handleChange={handleChange}
              />
            )}

            {page === pages[2] && (
              <ProfessionalExperience
                handleChange={handleExperience}
                setExperience={setExperience}
                experience={experience}
                {...props}
              />
            )}

            {page === pages[3] && (
              <Education
                handleChange={handleEducation}
                education={education}
                setEducation={setEducation}
                {...props}
              />
            )}

            {page === pages[4] && (
              <Skill
                handleChange={handleSkill}
                setSkill={setSkill}
                skill={skill}
                {...props}
              />
            )}

            {page === pages[5] && (
              <CustomField
                handleChange={handleCustomField}
                setCustomField={setCustomField}
                customField={customField}
                {...props}
              />
            )}

            <Buttons
              input={input}
              addItems={addItems}
              handlePage={handlePage}
              page={page}
            />
          </Card>
        </form>
        <div className={`relative ${input.fontFamily || "sans-serif"}`}>
          <p className="absolute px-2 text-red-500 -top-10 text-[12px] md:text-[14px]">
            Note : The preview may vary based on your device&apos;s screen size,
            but the final result will match the thumbnail.
          </p>
          <ResumePreviewer resume={input} />
        </div>
      </section>
    </div>
  );
};

export default ResumeForm;
