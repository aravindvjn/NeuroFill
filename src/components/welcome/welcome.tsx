'use client'
import React from "react";
import type { CurrentPageType } from "./type";
import { setIsWelcomeShown } from "@/lib/helpers/is-welcome-shown";
import { motion } from "framer-motion";
import Button from "../ui/button";
import { slideAnimation } from "@/lib/helpers/motion";
import BrandName from "../ui/brand-name";
import { IoArrowForward } from "react-icons/io5";
import { containerClasses } from "./common";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageType>>;
  currentPage: CurrentPageType;
};
const Welcome = ({setCurrentPage}:Props) => {

  //handle next page
  const handleNextPage = () => {
    setIsWelcomeShown();
   setCurrentPage("Home")
  };

  return (
    <div className={containerClasses}>
      <div></div>

      <motion.div {...slideAnimation("left")}>
        <div className="p1">
          Welcome to <BrandName size={50} />
        </div>
      </motion.div>

      <motion.div
        {...slideAnimation("down")}
        className="layout center flex-col gap-[10px]"
      >
        <p className="p3">
        AI-Powered Tools for Resumes, Policies, QR Codes & Invoices - Effortless & Instant!
        </p>

        <Button onClick={handleNextPage}>
          Get Started <IoArrowForward />
        </Button>
      </motion.div>
    </div>
  );
};

export default Welcome;
