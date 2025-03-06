import React from "react";
import { CardProps } from "./type";
import Image from "next/image";
import Link from "next/link";

const Card = ({ heading, image_path, subheading, link }: CardProps) => {
  return (
    <Link href={link} className="card-container aspect-[4/5]">
      <Image
        className="card-child"
        height={500}
        width={500}
        src={image_path}
        alt={heading}
      />
      <p className="heading absolute text-center bg-card-background bottom-0 border-t border-secondary p-3 -translate-x-1/2 left-1/2 font-bold scale-105 w-full right-0">
        {heading}
      </p>
      <p className="subheading absolute bg-card-background bottom-0 border-t border-secondary p-3 text-center -translate-x-1/2 left-1/2 w-full scale-105 right-0">
        {subheading}
      </p>
    </Link>
  );
};

export default Card;
