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
    <>
      <div className="hidden sm:flex">
        <div className="sm:w-[270px] md:w-[290px] lg:w-[310px]"></div>

        <motion.div {...slideAnimation("left")} className="fixed bg-background left-0 top-0">
          <SideBar />
        </motion.div>
      </div>
      <AnimatePresence>
        <div className="flex sm:hidden">
          <nav className="fixed z-10 bg-background layoutx top-0 left-0 w-full border-b border-primary justify-between gap-[5px] h-[50px] shadow flex items-center">
            <BrandName size={22} />
            <MdMenu
              onClick={() => setShowSideBar(true)}
              size={27}
              className="text-primary cursor-pointer"
            />
          </nav>
          {showSideBar &&
            createPortal(
              <div>
                <motion.div
                  key="mobile-sidebar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowSideBar(false)}
                  className="fixed top-0 right-0 flex justify-end bg-black/50 backdrop-blur-sm w-full z-20"
                >
                  <motion.div
                    {...slideAnimation("right", 0.1)}
                    className="w-fit bg-background"
                  >
                    <SideBar />
                  </motion.div>
                </motion.div>
              </div>,
              document.body
            )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default ResponsiveSideBar;
