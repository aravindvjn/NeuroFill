import React from "react";
import { motion } from "framer-motion";
import { containerClasses } from "./common";
import { slideAnimation } from "@/lib/helpers/motion";
import Button from "../ui/button";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Point from "../ui/icons/point";

type Props = {
  handleNextPage: (next: boolean) => void;
};
const Features = ({ handleNextPage }: Props) => {
  return (
    <div className={containerClasses}>
      <div></div>

      <motion.div className="px-[20px]" {...slideAnimation("up")}>
        <p className="p1 pb-[30px]">Features You&apos;ll Love</p>
        <ul className="p3 points-ul flex flex-col gap-[10px] text-start">
          <li>
            <Point />
            Generative Fill – Magically fill missing parts of an image with AI.
          </li>
          <li>
            <Point />
            AI Object Removal – Erase unwanted objects seamlessly.
          </li>
          <li>
            <Point />
            Background Replacement – Swap backgrounds in just one click.
          </li>

          <li>
            <Point />
            AI Upscaling – Enhance image resolution without losing quality.
          </li>
          <li>
            <Point />
            Style Transfer – Apply artistic filters powered by AI.
          </li>
        </ul>
      </motion.div>
      <motion.div {...slideAnimation("down")} className="layout center w-full flex-col gap-[10px] text-start">
        <div className="flex w-full items-center justify-around gap-[30px]">
          <Button
            className="w-[150px] sm:w-[180px] md:w-[230px]"
            variant="secondary"
            onClick={() => handleNextPage(false)}
          >
            <IoArrowBack /> Go Back
          </Button>
          <Button
            className="w-[150px] sm:w-[180px] md:w-[230px]"
            onClick={() => handleNextPage(true)}
          >
            Next <IoArrowForward />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
