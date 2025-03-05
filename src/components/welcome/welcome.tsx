import React from "react";
import type { CurrentPageType } from "./type";
import { setIsWelcomeShown } from "@/lib/helpers/is-welcome-shown";
import { motion } from "framer-motion";
import Button from "../ui/button";
import { slideAnimation } from "@/lib/helpers/motion";
import BrandName from "../ui/brand-name";
import { IoArrowForward } from "react-icons/io5";
import Features from "./features";
import { containerClasses } from "./common";
import Steps from "./steps";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageType>>;
  currentPage: CurrentPageType;
};
const Welcome = ({currentPage,setCurrentPage}:Props) => {

  //handle next page
  const handleNextPage = (next: boolean) => {
    //if next
    if (next) {
      setCurrentPage((prev) => {
        if (prev === "Welcome") return "Features";
        if (prev === "Features") return "Steps";
        setIsWelcomeShown();
        return "AuthPage";
      });
    } else {
      setCurrentPage((prev) => {
        if (prev === "Features") return "Welcome";
        if (prev === "Steps") return "Features";
        return "Welcome";
      });
    }
  };

  if (currentPage === "Features")
    return <Features handleNextPage={handleNextPage} />;

  if (currentPage === "Steps") return <Steps handleNextPage={handleNextPage} />;

  return (
    <div className={containerClasses}>
      <div></div>

      <motion.div {...slideAnimation("left")}>
        <div className="p1">
          Welcome to <BrandName />
        </div>
      </motion.div>

      <motion.div
        {...slideAnimation("down")}
        className="layout center flex-col gap-[10px]"
      >
        <p className="p3">
          Transform your images effortlessly with the power of AI. Whether you
          need to remove objects, extend backgrounds, or enhance photos,
          NeuroFill has got you covered!
        </p>

        <Button onClick={() => handleNextPage(true)}>
          Get Started <IoArrowForward />
        </Button>
      </motion.div>
    </div>
  );
};

export default Welcome;
