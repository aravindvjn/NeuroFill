"use client";
import Image from "next/image";
import React from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
import resume1 from "../../assets/images/resume1.png";
import resume2 from "../../assets/images/resume2.png";
import resume3 from "../../assets/images/resume3.png";
import resume4 from "../../assets/images/resume4.png";

type Props = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  handleShowPopUp?: () => void;
  selectTemplate?: () => void;
};

export const templates = [resume1, resume2, resume3,resume4];

const TemplateSlider = ({
  index,
  setIndex,
  handleShowPopUp,
  selectTemplate,
}: Props) => {
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % templates.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? templates.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative flex justify-center items-center mt-10 w-full h-[220px] sm:h-[250px] md:mt-14 md:h-[320px] xl:mt-16 xl:h-[370px]">
        {templates.map((template, i) => {
          const isActive = i === index;
          const prevIndex = (index - 1 + templates.length) % templates.length;

          const scale = isActive ? 1.2 : 0.8;
          const opacity = isActive ? 1 : 0.5;
          const zIndex = isActive ? 10 : 5;
          const xOffset = isActive ? "0%" : i === prevIndex ? "-50%" : "50%";
          const rotateY = isActive ? 0 : i === prevIndex ? -25 : 25;

          return (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale, opacity, zIndex, x: xOffset, rotateY }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute"
              style={{
                transformOrigin: "bottom center",
              }}
            >
              <Image
                src={template}
                alt="Resume template"
                className="rounded-t-lg w-[200px] sm:w-[200px] md:[260px] aspect-square origin-top lg:w-[280px]  xl:w-[320px] shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>

      <div className=" flex mb-3 justify-center gap-4">
        <button
          onClick={prevSlide}
          className="h-10 w-10 center rounded-full bg-white cursor-pointer text-blue-600  font-semibold shadow-md hover:bg-gray-200"
        >
          <IoArrowBack />
        </button>

        <button
          onClick={selectTemplate || handleShowPopUp}
          className="h-10 center rounded-full bg-white cursor-pointer text-blue-600  font-semibold shadow-md hover:bg-gray-200 px-5 text-[14px] md:text-[16px]"
        >
          {selectTemplate ? "Select" : "Create Resume"}
        </button>

        <button
          onClick={nextSlide}
          className="h-10 w-10 center rounded-full bg-white cursor-pointer text-blue-600  font-semibold shadow-md hover:bg-gray-200"
        >
          <IoArrowForward />
        </button>
      </div>
    </>
  );
};

export default TemplateSlider;
