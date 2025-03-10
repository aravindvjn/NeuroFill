'use client'
import React from "react";
import { motion } from 'framer-motion'
import { slideAnimation } from "@/lib/helpers/motion";

const WelcomeBanner = () => {
  return (
    <motion.div {...slideAnimation("up")} className="center px-8 py-6 rounded-lg bg-gradient-to-l m-[10px] from-blue-500 to-indigo-700 sm:m-[20px] text-transparent bg-clip-text lg:m-[30px] flex flex-col !mb-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:5xl font-bold text-center">
        Powerful AI Tools for Effortless Productivity
      </h1>
      <p className="text-[16px] md:text-xl text-center mt-2">
        Generate resumes, invoices, QR codes, and privacy policies in seconds
        AI-powered, fast, and free!
      </p>
    </motion.div>
  );
};

export default WelcomeBanner;
