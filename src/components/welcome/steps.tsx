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
const Steps = ({ handleNextPage }: Props) => {
  return (
    <div className={containerClasses}>
      <div></div>

      <motion.div className="px-[20px]" {...slideAnimation("up")}>
        <p className="p1 pb-[30px]">Get Started in 3 Simple Steps</p>
        <ul className="p3 points-ul flex flex-col gap-[10px] text-start">
          <li>
            <Point />
            Upload Your Image – Drag and drop or choose from your device.
          </li>
          <li>
            <Point />
            Edit with AI – Use powerful AI tools to enhance, erase, or modify.
          </li>
          <li>
            <Point />
            Download & Share – Save your masterpiece and share it anywhere!
          </li>
        </ul>
      </motion.div>
      <motion.div
        {...slideAnimation("down")}
        className="layout center w-full flex-col gap-[10px] text-start"
      >
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
            Login <IoArrowForward />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Steps;
