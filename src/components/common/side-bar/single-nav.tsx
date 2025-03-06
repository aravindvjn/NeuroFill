import React from "react";
import { navLinks } from "./nav-links";
import {  MdAccountCircle, MdHome, MdOutlineDocumentScanner, MdPrivacyTip } from "react-icons/md";
import { IoBagHandleSharp, IoLogoBuffer, IoQrCode } from "react-icons/io5";
import Link from "next/link";
import { FaFileInvoice } from "react-icons/fa";

type Props = {
  link: string;
  label: string;
  isActive: boolean;
};

const SingleNav = ({ label, link, isActive }: Props) => {
  const icon = {
    [navLinks[0].link]: <MdHome size={19} />,
    [navLinks[1].link]: <MdOutlineDocumentScanner />,
    [navLinks[2].link]: <IoLogoBuffer />,
    [navLinks[3].link]: <FaFileInvoice />,
    [navLinks[4].link]: <MdPrivacyTip />,
    [navLinks[5].link]: <IoQrCode />,
    [navLinks[6].link]: <MdAccountCircle />,
    [navLinks[7].link]: <IoBagHandleSharp />,
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
