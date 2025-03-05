import Image from "next/image";
import React from "react";
import pointImg from "../../../assets/icons/point.png";
const Point = () => {
  return <Image className="w-[10px] object-contain md:w-[12px] mt-1.5" height={20} width={20} src={pointImg.src} alt="point" />;
};

export default Point;
