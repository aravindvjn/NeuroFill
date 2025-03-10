"use client";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";
import "./banner.css";
import { IoQrCode } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideAnimation } from "@/lib/helpers/motion";

type Props = {
  title: string;
  description: string;
  link: string;
  background: string;
  icon: "qr" | "terms" | "invoice" | "resume";
};

export const renderMovingItems = (icon: Props["icon"]) => {
  return [...Array(20)].map((_, i) => {
    const size = Math.random() * 20 + 10;
    const style = {
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      opacity: Math.random() * 0.3 + 0.2,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random()}s`,
    };

    if (icon === "qr")
      return <IoQrCode key={`icon-${i}`} className="animate" style={style} />;
    if (icon === "terms")
      return (
        <MdPrivacyTip key={`icon-${i}`} className="animate" style={style} />
      );
    if (icon === "invoice") {
      return (
        <FaFileInvoice key={`icon-${i}`} className="animate" style={style} />
      );
    }
    return (
      <div key={`ball-${i}`} className="ball aspect-square" style={style}></div>
    );
  });
};

const Banner = ({ title, description, link, background, icon }: Props) => {
  return (
    <motion.div
      {...slideAnimation("down")}
      className={`relative rounded-lg aspect-square w-full flex flex-col items-center px-4 overflow-hidden justify-center text-center text-white ${background} border-t-2 border-background`}
    >
      {renderMovingItems(icon)}
      <div className="center flex-col">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">{title}</h1>
        <p className="text-[14px] md:text-lg xl:text-xl mt-4 max-w-2xl">
          {description}
        </p>
        <Link href={link}>
          <Button
            variant="white"
            className="mt-6 !h-[40px] md:!h-[45px] !px-6 md:!px-10"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Banner;
