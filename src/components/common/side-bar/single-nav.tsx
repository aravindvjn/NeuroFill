import React from "react";
import Link from "next/link";
import { icon } from "./nav-links";

type Props = {
  link: string;
  label: string;
  isActive: boolean;
};

const SingleNav = ({ label, link, isActive }: Props) => {
  const activeClasses = isActive
    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white  "
    : "";

  return (
    <Link
      href={link}
      className={`horizontally-center my-[7px] py-[7px] font-semibold p3 px-[25px] rounded-full hover:bg-black/3 active:translate-y-[2px] ${activeClasses}`}
    >
      {icon[link]}
      {label}
    </Link>
  );
};

export default SingleNav;


