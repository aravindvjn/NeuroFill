"use client";
import BrandName from "@/components/ui/brand-name";
import React from "react";
import { navLinks } from "./nav-links";
import SingleNav from "./single-nav";
import { usePathname } from "next/navigation";

const SideBar = () => {

  const pathname = usePathname();

  return (
    <div className="flex flex-col p-[20px] sm:p-[30px] border-r border-secondary min-h-dvh justify-between shadow sm:w-[270px] md:w-[290px] lg:w-[310px]">
      <div>

        <div className="pb-2 ">
          <BrandName size={25} />
        </div>

        <nav>
          {navLinks.slice(0, 6).map((link) => (
            <SingleNav
              isActive={pathname === link.link}
              key={link.label}
              {...link}
            />
          ))}
        </nav>

      </div>

      <nav>
        {navLinks.slice(6,8).map((link) => (
          <SingleNav
            isActive={pathname === link.link}
            key={link.label}
            {...link}
          />
        ))}
      </nav>

    </div>
  );
};

export default SideBar;
