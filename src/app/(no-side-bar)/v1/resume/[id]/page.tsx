import ResumePage from "@/components/common/print";
import { ResumeInputType } from "@/components/forms/resume-form/type";
import { getResumeById } from "@/lib/actions/resume.action";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Resume`,
    description: `View the resume on NeuroFill.`,
  };
}

const page = async ({ params }: Props) => {

  const { id } = await params;
  
  if (!id || typeof id !== "string") {
    notFound();
  }
  const res = await getResumeById(id);

  if (!res.success) {
    notFound();
  }

  return (
    <div>
      <ResumePage resume={res.data as ResumeInputType} />
    </div>
  );
};

export default page;
