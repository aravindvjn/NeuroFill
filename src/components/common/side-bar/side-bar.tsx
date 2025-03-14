"use client";
import BrandName from "@/components/ui/brand-name";
import React from "react";
import { navLinks } from "./nav-links";
import SingleNav from "./single-nav";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const SideBar = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className="flex flex-col p-[20px] sm:p-[30px] border-r border-secondary min-h-dvh shadow-md shadow-border sm:w-[270px] md:w-[290px] lg:w-[310px]">
      <div className="pb-2 ml-1">
        <BrandName size={25} />
      </div>

      <nav>
        {navLinks.slice(0, 5).map((link) => {
          return (
            <SingleNav
              key={link.id}
              isActive={pathname === link.link}
              {...link}
            />
          );
        })}
        {session.status !== "loading" && (
          <SingleNav
            isActive={pathname === navLinks[session.data?.user.id ? 5 : 7].link}
            {...navLinks[session.data?.user.id ? 5 : 7]}
          />
        )}
      </nav>
    </div>
  );
};

export default SideBar;
