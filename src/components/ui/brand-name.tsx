import Image from "next/image";
import React from "react";

const BrandName = ({ size }: { size: number }) => {
  return (
    <Image
      style={{
        height: size,
      }}
      objectFit="contain"
      className="object-contain w-fit flex"
      src={"/images/app.png"}
      height={size}
      width={size * 100}
      alt="NeuroFill Logo"
    />
  );
};

export default BrandName;
