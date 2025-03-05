import React from "react";

const BrandName = ({ size }: { size?: number }) => {
  return (
    <p
      style={{
        fontSize: size,
      }}
      className={`font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${size ? "" : "brandname"}`}
    >
      NeuroFill
    </p>
  );
};

export default BrandName;
