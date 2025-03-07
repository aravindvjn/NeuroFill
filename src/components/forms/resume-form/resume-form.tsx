"use client";
import React, { ChangeEvent, useState } from "react";
import PickColor from "./pick-color";
import PersonalDetails from "./personal-details";
import type {
  DeleteType,
  ExperienceType,
  PageType,
  ResumeInputType,
} from "./type";
import {
  defaultExperienceValue,
  defaultInputValue,
  navigator,
  pages,
} from "./constants";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import ProfessionalExperience from "./professional-experience";
import PersonalDetailsPreview from "@/components/previews/resume/personal-details";
import SummaryPreview from "@/components/previews/resume/summary";
import ExperiencePreview from "@/components/previews/resume/experience";
import EducationPreview from "@/components/previews/resume/education";
import SkillsPreview from "@/components/previews/resume/skills";
import Summary from "./summary";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const ResumeForm = () => {
  const [input, setInput] = useState<ResumeInputType>(
 defaultInputValue
  );
  const [page, setPage] = useState<PageType>("Personal Details");
  const [experience, setExperience] = useState<ExperienceType>(
    defaultExperienceValue
  );

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

  //handle experience
  const handleExperience = (e: ChangeEvent<HTMLInputElement>) => {
    setExperience((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
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

  const addExprience = () => {
    if (
      !experience.companyName.trim() ||
      !experience.position ||
      !experience.city ||
      !experience.state
    )
      return;
    setInput((prev) => ({
      ...prev,
      experience: [...prev["experience"], experience],
    }));
    setExperience(defaultExperienceValue);
  };

  //render button
  const renderButton = () => {
    if (page === pages[0]) {
      return (
        <Button
          variant="normal"
          onClick={() => handlePage(true)}
          type="button"
          className="w-fit mt-[15px] !rounded"
        >
          Next
        </Button>
      );
    }

    return (
      <div className="flex mt-[15px] justify-between items-center gap-[20px] flex-wrap">
        <div className="flex items-center gap-[20px]">
          <Button
            variant="normal"
            onClick={() => handlePage(false)}
            type="button"
            className="w-fit !rounded"
          >
            Back
          </Button>
          <Button
            variant="normal"
            onClick={() => handlePage(true)}
            type="button"
            className="w-fit !rounded"
          >
            Next
          </Button>
        </div>
        {page !== pages[1] && (
          <Button
            variant="normal"
            onClick={addExprience}
            type="button"
            className="w-fit !rounded !bg-blue-500"
          >
            Add
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="layout">
      <p className="p1 mb-4 font-semibold text-center">Create Resume</p>
      <div className="horizontally-center">
        <Link href={'/resume'} className="horizontally-center rounded border-text border-2 px-2 py-1"><IoArrowBack/> Back</Link>
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
                input={input}
                experience={experience}
                handleChange={handleExperience}
                handleDelete={handleDelete}
              />
            )}

            {renderButton()}
          </Card>
        </form>
        <Card className="p-10 bg-white text-black">
          <PersonalDetailsPreview {...input} />
          <SummaryPreview {...input} />
          <ExperiencePreview {...input} />
          <EducationPreview {...input} />
          <SkillsPreview {...input} />
        </Card>
      </section>
    </div>
  );
};

export default ResumeForm;
