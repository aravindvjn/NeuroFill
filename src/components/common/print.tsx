"use client";
import { ResumeInputType } from "@/components/forms/resume-form/type";
import Link from "next/link";
import React, { ChangeEvent, useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import toast from "react-hot-toast";
import { FontFamilyType, SizeType } from "./type";
import SelectFontFamily from "../forms/resume-form/select-font";
import ResumePreviewer from "./resume-preview";

const ResumePage = ({ resume }: { resume: ResumeInputType }) => {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [size, setSize] = useState<SizeType>("medium");
  const [fontFamily, setFontFamily] = useState<FontFamilyType>(
    resume?.fontFamily || "sans-serif"
  );
  //Handle Print
  const printResume = () => {
    if (!pdfRef.current) return;

    setIsPaid(true);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  //Handle size
  const handleSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value as SizeType);
    toast.success("Note : Font Size only reflects in print.");
  };

  const handleFontFamily = (e: ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value as FontFamilyType);
  };

  return (
    <div className="p-2 sm:p-3 md:p-5 flex flex-col center w-full relative">
      <Link
        href={"/resume"}
        className="text-[12px] md:text-[14px] left-3 top-6 bg-blue-500 rounded px-3 py-1 text-white horizontally-center"
      >
        <IoHome />
        Go Home
      </Link>
      <p
        className="p2 font-bold  py-4
      "
      >
        Resume: {resume.title}
      </p>
      <div
        ref={pdfRef}
        className={`border items-center bg-white shadow-lg w-full max-w-3xl text-lg ${fontFamily}`}
      >
        <div id={size} className={isPaid ? "print-only" : ""}>
          <ResumePreviewer resume={resume} noElevation />
        </div>
      </div>

      <div className="center flex-col gap-[20px] mt-6 text-[12px] sm:text-[14px] md:text-[16px]">
        <Link
          className=" bg-blue-500 text-white px-4 py-2 rounded-md text-md font-semibold"
          href={`/v1/resume/${resume.id}/edit`}
        >
          Edit resume
        </Link>
        <p className="p2 font-semibold underline underline-offset-2">
          Download Options
        </p>
        <div className="horizontally-center">
          <div>
            <p>Font Family </p>
            <SelectFontFamily
              fontFamily={fontFamily}
              handleFontFamily={handleFontFamily}
            />
          </div>

          <div>
            <p>Font Size </p>
            <select
              value={size}
              className="self-start px-3 cursor-pointer py-2 capitalize border rounded backdrop-blur-md bg-white/20 "
              onChange={handleSize}
            >
              <option>small</option>
              <option defaultChecked>medium</option>
              <option>large</option>
              <option>extralarge</option>
            </select>
          </div>
        </div>
        <button
          onClick={printResume}
          className=" bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md text-md font-semibold"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumePage;
