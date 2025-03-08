"use client";
import ResumePreview from "../previews/resume/resume";
import { ResumeInputType } from "@/components/forms/resume-form/type";
import Link from "next/link";
import React, { useRef, useState } from "react";

const ResumePage = ({ resume }: { resume: ResumeInputType }) => {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const printResume = () => {
    if (!pdfRef.current) return;

    setIsPaid(true);
    window.print();
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <div
        ref={pdfRef}
        className="border  p-8 bg-white shadow-lg w-[80%] max-w-3xl text-lg"
      >
        <div className={isPaid ? "print-only" : ""}>
          <ResumePreview noElevation resume={resume} />
        </div>
      </div>
      <div className="horizontally-center mt-6">
        <button
          onClick={printResume}
          className=" bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold"
        >
          Print Resume
        </button>
        <Link
          className=" bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold"
          href={`/v1/resume/${resume.id}/edi`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ResumePage;
