"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

type Props = {
  title: string;
};
const Header = ({ title }: Props) => {
  const router = useRouter();
  return (
    <div className="text-lg md:text-xl z-10 horizontally-center fixed inset-0 bg-background h-[60px] border-b border-border shadow px-3 font-semibold">
      <button
        onClick={() => router.back()}
        className="horizontally-center  px-2 py-1"
      >
        <IoArrowBack />
      </button>
      <p className=" text-center">{title}</p>
    </div>
  );
};

export default Header;
