"use client";
import React, { useState } from "react";
import SideBar from "./side-bar";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import BrandName from "@/components/ui/brand-name";
import { MdMenu } from "react-icons/md";
import { slideAnimation } from "@/lib/helpers/motion";

const ResponsiveSideBar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <div className="hidden sm:flex">
        <SideBar />
      </div>
      <div className="flex sm:hidden">
        <nav className="fixed z-10 bg-white layoutx top-0 left-0 w-full border-b border-primary gap-[10px] h-[50px] shadow flex items-center">
          <MdMenu
            onClick={() => setShowSideBar(true)}
            size={25}
            className="text-primary cursor-pointer"
          />
          <BrandName size={22} />
        </nav>
        {showSideBar &&
          createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowSideBar(false);
              }}
              className="fixed top-0 left-0 bg-black/30 backdrop-blur-sm w-full z-20"
            >
              <motion.div
                {...slideAnimation("left", 0.1)}
                className="w-fit bg-white"
              >
                <SideBar />
              </motion.div>
            </motion.div>,
            document.body
          )}
      </div>
    </AnimatePresence>
  );
};

export default ResponsiveSideBar;
