import React from "react";
import { CgEditUnmask } from "react-icons/cg";

const BrandName = ({ size }: { size: number }) => {
  return (
    <p
      style={{
        fontSize: size,
        height: size,
      }}
      className={`font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent gap-1 flex items-center ${
        size ? "" : "brandname"
      }`}
    >
      <CgEditUnmask
        style={{
          fontSize: size - 5,
        }}
        className="text-primary"
      />{" "}
      NeuroFill
    </p>
  );
};

export default BrandName;
