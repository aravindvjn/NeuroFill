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
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Education from "./education";
import Skill from "./skill";
import Buttons from "./buttons";
import ResumePreview from "@/components/previews/resume/resume";
import CustomField from "./custom-field";

const ResumeForm = ({ resume }: { resume: ResumeInputType }) => {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev: ResumeInputType) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //handle pages
  const handlePage = (next: boolean) => {
    setPage((prev) => {
      return navigator(prev, next);
    });
  };

  //handle change in experience
  const handleExperience = (e: ChangeEvent<HTMLInputElement>) => {
    setExperience((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  //handle change in education
  const handleEducation = (e: ChangeEvent<HTMLInputElement>) => {
    setEducation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle change in education
  const handleCustomField = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle change in skill
  const handleSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle color
  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, color: e.target.value }));
  };

  //handle delete
  const handleDelete = (name: DeleteType, index: number) => {
    setInput((prev) => ({
      ...prev,
      [name]: prev[name].filter((_, i) => i !== index),
    }));
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
      setSkill(defaultSkillValue);
    }
  };

  const props = {
    handleDelete: handleDelete,
    input: input,
    setInput: setInput,
  };

  return (
    <div className="layout">
      <p className="p1 mb-4 font-semibold text-center">Create Resume</p>

      <div className="horizontally-center">
        <Link
          href={"/resume"}
          className="horizontally-center rounded border-text border-2 px-2 py-1"
        >
          <IoArrowBack /> Back
        </Link>

        <PickColor
          color={input?.color || "black"}
          handleChangeColor={handleChangeColor}
        />
      </div>

      <section className="grid mt-[20px] md:grid-cols-2 gap-[20px]">
        <form>
          <Card>
            <p className="p2 font-bold pb-2">{page}</p>

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

        <ResumePreview resume={input} />
      </section>
    </div>
  );
};

export default ResumeForm;
