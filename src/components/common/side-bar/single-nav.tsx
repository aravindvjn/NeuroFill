import React from "react";
import { navLinks } from "./nav-links";
import { IoIosImage } from "react-icons/io";
import { CgEditUnmask } from "react-icons/cg";
import { TbObjectScan } from "react-icons/tb";
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import {  MdAccountCircle, MdHome } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import Link from "next/link";

type Props = {
  link: string;
  label: string;
  isActive: boolean;
};

const SingleNav = ({ label, link, isActive }: Props) => {
  const icon = {
    [navLinks[0].link]: <MdHome size={19} />,
    [navLinks[1].link]: <IoIosImage />,
    [navLinks[2].link]: <CgEditUnmask />,
    [navLinks[3].link]: <TbObjectScan />,
    [navLinks[4].link]: <PiSelectionBackgroundDuotone />,
    [navLinks[5].link]: <MdAccountCircle />,
    [navLinks[6].link]: <IoBagHandleSharp />,
  };

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
