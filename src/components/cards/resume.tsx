import React from "react";
import type { ResumeType } from "./type";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

const Resume = ({ thumbnail_url, title }: ResumeType) => {
  return (
    <Link
      href={""}
      className="border-[2px] rounded-lg overflow-hidden hover:opacity-90 active:translate-y-0.5  border-secondary"
    >
      <Image
        className="card-child aspect-square"
        height={500}
        width={500}
        src={thumbnail_url || "/images/resume-maker.png"}
        alt={"resume"}
      />
      <div className="px-3 h-[35px] bg-card-background border-t-[2px] border-secondary flex items-center justify-between w-full">
        <p className="p3 font-semibold line-clamp-1">{title || "Untitiled"}</p>
        <BsThreeDotsVertical />
      </div>
    </Link>
  );
};

export default Resume;
