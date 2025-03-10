"use client";
import React, { useState, useRef, useEffect } from "react";
import type { ResumeType } from "./type";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import ResumeButtons from "./resume-buttons";
import PopUp from "../ui/pop-up";
import { deleteResume } from "@/lib/actions/resume.action";
import toast from "react-hot-toast";

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
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const toggleShowDelete = () => {
    setShowDelete(prev=>!prev);
  };

  //handle delete operation
  const handleDelete = async()=>{
    setIsLoading(true)
    const res = await deleteResume(id)
    setIsLoading(false)

    if(res?.success){
      toast.success("Resume succefully deleted.")
    }else{
      toast.success(res?.message || "Failed to delete resume.")
    }
  }

  //Postion the options dynamically
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
    <div className="border-[2px] rounded-lg   border-indigo-600">

      <PopUp isOpen={showDelete} onClose={toggleShowDelete}>
        <p className="text-lg font-semibold">Are you sure?</p>
        <p className="text-sm text-gray-500">This action cannot be undone.</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={toggleShowDelete}
          >
            Cancel
          </button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            {isLoading ? "Deleting..." : "Confirm Delete"}
          </button>
        </div>
      </PopUp>

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
            <ResumeButtons id={id} toggelDelete={toggleShowDelete} positionLeft={positionLeft} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
