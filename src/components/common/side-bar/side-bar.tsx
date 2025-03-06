"use client";
import BrandName from "@/components/ui/brand-name";
import React from "react";
import { navLinks } from "./nav-links";
import SingleNav from "./single-nav";
import { usePathname } from "next/navigation";

const SideBar = () => {

  const pathname = usePathname();

  return (
    <div className="flex flex-col p-[20px] sm:p-[30px] border-r border-secondary min-h-dvh justify-between shadow sm:min-w-[270px] md:min-w-[290px] lg:min-w-[310px]">
      <div>

        <div className="pb-2 pl-[20px]">
          <BrandName size={25} />
        </div>

        <nav>
          {navLinks.slice(0, 5).map((link) => (
            <SingleNav
              isActive={pathname === link.link}
              key={link.label}
              {...link}
            />
          ))}
        </nav>

      </div>

      <nav>
        {navLinks.slice(5,7).map((link) => (
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
