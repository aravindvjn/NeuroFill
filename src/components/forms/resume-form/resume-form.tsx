"use client";
import React, { ChangeEvent, useState } from "react";
import PickColor from "./pick-color";
import PersonalDetails from "./personal-details";
import type {
  DeleteType,
  EducationType,
  ExperienceType,
  PageType,
  ResumeInputType,
  SkillType,
} from "./type";
import {
  defaultEducationValue,
  defaultExperienceValue,
  defaultInputValue,
  defaultSkillValue,
  navigator,
  pages,
} from "./constants";
import Card from "@/components/ui/card";
import ProfessionalExperience from "./professional-experience";
import PersonalDetailsPreview from "@/components/previews/resume/personal-details";
import SummaryPreview from "@/components/previews/resume/summary";
import ExperiencePreview from "@/components/previews/resume/experience";
import EducationPreview from "@/components/previews/resume/education";
import SkillPreview from "@/components/previews/resume/skills";
import Summary from "./summary";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { dummyResume } from "@/components/previews/resume/dummy";
import Education from "./education";
import Skill from "./skill";
import Buttons from "./buttons";

const ResumeForm = () => {
  const [input, setInput] = useState<ResumeInputType>(
    dummyResume || defaultInputValue
  );
  const [page, setPage] = useState<PageType>("Personal Details");
  const [experience, setExperience] = useState<ExperienceType>(
    defaultExperienceValue
  );
  const [education, setEducation] = useState<EducationType>(
    defaultEducationValue
  );

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

  //handle change in skill
  const handleSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle Color
  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, color: e.target.value }));
  };

  const handleDelete = (name: DeleteType, index: number) => {
    setInput((prev) => ({
      ...prev,
      [name]: prev[name].filter((_, i) => i !== index),
    }));
  };

  //Add experience, skils, educations
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

    }
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
                setExperience={setExperience}
                input={input}
                experience={experience}
                handleChange={handleExperience}
                handleDelete={handleDelete}
              />
            )}

            {page === pages[3] && (
              <Education
                education={education}
                handleChange={handleEducation}
                setEducation={setEducation}
                input={input}
                handleDelete={handleDelete}
              />
            )}

            {page === pages[4] && (
              <Skill
                handleChange={handleSkill}
                setSkill={setSkill}
                skill={skill}
                handleDelete={handleDelete}
                input={input}
              />
            )}

            <Buttons addItems={addItems} handlePage={handlePage} page={page} />
          </Card>
        </form>

        <Card className="p-10 bg-white text-black">
          <PersonalDetailsPreview {...input} />
          <SummaryPreview {...input} />
          <ExperiencePreview {...input} />
          <EducationPreview {...input} />
          <SkillPreview {...input} />
        </Card>
        
      </section>
    </div>
  );
};

export default ResumeForm;
