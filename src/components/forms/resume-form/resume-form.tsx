"use client";
import React, { ChangeEvent, useState } from "react";
import PickColor from "./pick-color";
import PersonalDetails from "./personal-details";
import type { ExperienceType, PageType, ResumeInputType } from "./type";
import { defaultExperienceValue, defaultInputValue } from "./constants";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import ProfessionalExperience from "./professional-experience";

const ResumeForm = () => {
  const [color, setColor] = useState<string>("#0000ff");
  const [input, setInput] = useState<ResumeInputType>(defaultInputValue);
  const [page, setPage] = useState<PageType>("Personal Details");
  const [experience, setExperience] = useState<ExperienceType>(
    defaultExperienceValue
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev: ResumeInputType) => {
      if (e.target.name === "experience") {
        return prev;
      }

      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //handle pages
  const handlePage = (next: boolean) => {
    setPage((prev) => {
      if (next) {
        if(prev==='Skills'){
          console.log(input)
        }
        return prev === "Personal Details"
          ? "Professional Experience"
          : "Skills";
      } else {
        return prev === "Skills"
          ? "Professional Experience"
          : "Personal Details";
      }
    });
  };

  //handle experience
  const handleExperience = (e: ChangeEvent<HTMLInputElement>) => {
    setExperience((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
    setExperience(defaultExperienceValue)
  };

  //render button
  const renderButton = () => {
    if (page === "Personal Details") {
      return (
        <Button
          variant="secondary"
          onClick={() => handlePage(true)}
          type="button"
          className="w-fit mt-[15px] !rounded"
        >
          Next
        </Button>
      );
    }
    if (page === "Professional Experience" || page=="Skills") {
      return (
        <div className="flex mt-[15px] justify-between items-center gap-[20px]">
          <div className="flex items-center gap-[20px]">
            <Button
              variant="secondary"
              onClick={() => handlePage(false)}
              type="button"
              className="w-fit !rounded"
            >
              Back
            </Button>
            <Button
              variant="secondary"
              onClick={() => handlePage(true)}
              type="button"
              className="w-fit !rounded"
            >
              Next
            </Button>
          </div>
          <Button
            onClick={addExprience}
            type="button"
            className="w-fit !rounded !bg-blue-500"
          >
            Add
          </Button>
        </div>
      );
    }
  };

  return (
    <div className="layout">
      <p className="p2 mb-4 font-semibold">Create Resume</p>
      <PickColor color={color} setColor={setColor} />

      <section className="grid mt-[20px] md:grid-cols-2 gap-[20px]">
        <form>
          <Card>
            <p className="p2 font-bold pb-2">{page}</p>

            {page === "Personal Details" && (
              <PersonalDetails input={input} handleChange={handleChange} />
            )}
            {page === "Professional Experience" && (
              <ProfessionalExperience
                experience={experience}
                handleChange={handleExperience}
              />
            )}

            {renderButton()}
          </Card>
        </form>
      </section>
    </div>
  );
};

export default ResumeForm;
