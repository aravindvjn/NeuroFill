"use client";
import ResumePreview from "../previews/resume/template_1/resume";
import { ResumeInputType } from "@/components/forms/resume-form/type";
import Link from "next/link";
import React, { ChangeEvent, useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import ResumePreview2 from "../previews/resume/template_2/resume";
import ResumePreview3 from "../previews/resume/template_3/resume";
import { dummyResume } from "../previews/resume/dummy";

type SizeType = "small" | "medium" | "large" | "extralarge";

const ResumePage = ({ resume }: { resume: ResumeInputType }) => {
  resume = dummyResume
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [size, setSize] = useState<SizeType>("medium");

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
  };

  return (
    <div className="p-2 sm:p-3 md:p-5 flex flex-col center w-full relative">
      <Link
        href={"/resume"}
        className="absolute left-3 top-6 bg-blue-500 rounded px-3 py-1 text-white horizontally-center"
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
        className="border items-center bg-white shadow-lg w-full max-w-3xl text-lg"
      >
        <div id={size} className={isPaid ? "print-only" : ""}>
          <ResumePreview3 noElevation resume={resume} />
        </div>
      </div>
     
      <div className="flex items-end gap-[20px] mt-6">
        
        <div className="horizontally-center">
          <p>Font Size : </p>
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

        <button
          onClick={printResume}
          className=" bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md text-md font-semibold"
        >
          Print Resume
        </button>

        <Link
          className=" bg-blue-500 text-white px-4 py-2 rounded-md text-md font-semibold"
          href={`/v1/resume/${resume.id}/edit`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ResumePage;
