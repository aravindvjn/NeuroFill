import { cardsItems } from "@/components/cards/contants";
import Resume from "@/components/cards/resume";
import Heading from "@/components/common/heading";
import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const page = () => {
  return (
    <div className="layout flex flex-col gap-[20px]">
      <Heading
        subheading={cardsItems[0].subheading}
        heading={cardsItems[0].heading}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-[10px] sm:gap-[20px] md:gap-[30px]">
        <Link
          href={"/resume/add"}
          className="border-[2px] rounded-lg overflow-hidden center hover:bg-secondary-background text-border active:translate-y-0.5 border-border"
        >
          <IoMdAdd size={30} />
        </Link>
        <Resume thumbnail_url="" title="" />
      </div>
    </div>
  );
};

export default page;
