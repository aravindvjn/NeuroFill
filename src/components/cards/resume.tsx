"use client";
import React, { useState} from "react";
import type { ResumeType } from "./type";
import Image from "next/image";
import ResumeButtons from "./resume-buttons";
import PopUp from "../ui/pop-up";
import { deleteResume } from "@/lib/actions/resume.action";
import toast from "react-hot-toast";
import { templates } from "../banners/template-slider";
import "./card.css";

type Props = {
  activeId: string
  setActiveId: React.Dispatch<React.SetStateAction<string>>
}
const Resume = ({ title, id, templateId,activeId,setActiveId }: ResumeType & Props) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleActive=()=>{
    setActiveId((prev)=>{
      if(prev===id){
        return ""
      }
      return id
    })
  }
  const toggleShowDelete = () => {
    setShowDelete((prev) => !prev);
  };

  //handle delete operation
  const handleDelete = async () => {
    setIsLoading(true);
    const res = await deleteResume(id);
    setIsLoading(false);

    if (res?.success) {
      toast.success("Resume succefully deleted.");
    } else {
      toast.success(res?.message || "Failed to delete resume.");
    }
  };

  return (
    <div onClick={handleActive} className="relative  rounded-lg card">
      <ResumeButtons isActive={activeId === id}  id={id} toggelDelete={toggleShowDelete} />

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
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            {isLoading ? "Deleting..." : "Confirm Delete"}
          </button>
        </div>
      </PopUp>

      <Image
        className="card-child aspect-square rounded-t-lg"
        height={500}
        width={500}
        src={templates[Number(templateId || 0)] || "/images/resume-maker.png"}
        alt={"resume"}
      />

      <div className="px-3 h-[40px] bg-card-background rounded-b-lg border-t-[1px]  flex items-center justify-between w-full">
        <p className="p3 font-semibold line-clamp-1">{title || "Untitled"}</p>
      </div>
    </div>
  );
};

export default Resume;
