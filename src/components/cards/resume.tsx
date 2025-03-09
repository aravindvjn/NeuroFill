"use client";
import React, { useState, useRef, useEffect } from "react";
import type { ResumeType } from "./type";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

const Resume = ({
  thumbnail_url,
  title,
  id,
  setShowOption,
  showOption,
}: ResumeType & {
  setShowOption: React.Dispatch<React.SetStateAction<string>>;
  showOption: string;
}) => {
  const [positionLeft, setPositionLeft] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (optionsRef.current) {
      const { right } = optionsRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (right > screenWidth - 150) {
        setPositionLeft(true);
      } else {
        setPositionLeft(false);
      }
    }
  }, [showOption]);

  return (
    <div className="border-[2px] rounded-lg hover:opacity-90  border-secondary">
      <Image
        className="card-child aspect-square rounded-t-lg"
        height={500}
        width={500}
        src={thumbnail_url || "/images/resume-maker.png"}
        alt={"resume"}
      />
      <div className="px-3 h-[40px] bg-card-background rounded-b-lg border-t-[2px] border-secondary flex items-center justify-between w-full">
        <p className="p3 font-semibold line-clamp-1">{title || "Untitled"}</p>
        <div
          ref={optionsRef}
          onClick={() => setShowOption((prev) => (prev ? "" : id))}
          className="relative"
        >
          <BsThreeDotsVertical />

          {showOption === id && (
            <ul
              className={`absolute top-0 z-50 flex flex-col bg-card-background border border-card-border rounded shadow-md ${
                positionLeft ? "right-full mr-2" : "left-full ml-2"
              }`}
            >
              <Link
                className="px-5 py-2 border-b border-b-card-border hover:bg-card-border"
                href={`/v1/resume/${id}/edit`}
              >
                Edit
              </Link>
              <Link
                className="px-5 py-2 hover:bg-card-border"
                href={`/v1/resume/${id}`}
              >
                View
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
