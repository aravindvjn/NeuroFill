"use client";
import TemplateSlider from "@/components/banners/template-slider";
import PopUp from "@/components/ui/pop-up";
import React, { useState } from "react";
import { HiViewGrid } from "react-icons/hi";
import { TemplateProps } from "./type";


const Template = ({input,setInput}:TemplateProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(Number(input.templateId));

  const onClose = () => {
    setShow(false);
  };

  const selectTemplate=()=>{
    setInput(prev=>({
      ...prev,
      templateId:index.toString()
    }))
    onClose()
  }
  return (
    <>

      <PopUp className="min-w-[80%] bg-card-border md:min-w-[600px]" onClose={onClose} isOpen={show}>
        <TemplateSlider selectTemplate={selectTemplate} index={index} setIndex={setIndex} />
      </PopUp>

      <button onClick={()=>setShow(true)} className="horizontally-center px-3 py-1 rounded border-2 border-primary text-primary">
        <HiViewGrid />
        Change Template
      </button>
    </>
  );
};

export default Template;
