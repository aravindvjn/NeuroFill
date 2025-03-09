"use client";
import BrandName from "@/components/ui/brand-name";
import React, { useEffect, useState } from "react";
import { navLinks } from "./nav-links";
import SingleNav from "./single-nav";
import { usePathname } from "next/navigation";
import { currentUserId } from "@/lib/get-calls/get-current-user";

const SideBar = () => {
  const pathname = usePathname();
  const [isUser,setIsUser] = useState<boolean>(false)
  const [isLoading,setIsLoading] = useState<boolean>(true)

  useEffect(()=>{

    const fetchUser=async()=>{
      const res = await currentUserId()
      setIsUser(!!res)
      setIsLoading(false)
    }

    fetchUser()
  },[pathname])

  return (
    <div className="flex flex-col p-[20px] sm:p-[30px] border-r border-secondary min-h-dvh justify-between shadow-md shadow-border sm:w-[270px] md:w-[290px] lg:w-[310px]">
      <div>
        <div className="pb-2 ">
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
        </nav>
      </div>

      <nav>
        {!isLoading && <SingleNav isActive={pathname === navLinks[isUser ? 5 : 7].link} {...navLinks[isUser ? 5 : 7]} /> }
        <SingleNav isActive={pathname === navLinks[6].link} {...navLinks[6]} />
      </nav>
    </div>
  );
};

export default SideBar;
