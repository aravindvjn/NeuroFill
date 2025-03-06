"use client";

import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

type Props = {
  transformed_url?: string;
  public_id?: string;
  doTransformHandler: () => void;
  render: boolean;
};

const TransformedImage = ({
  transformed_url,
  public_id,
  doTransformHandler,
  render,
}: Props) => {
  const [loading, setLoading] = useState(false);
  console.log("public id :", public_id);

  const handleImageClick = () => {
    setLoading(true);
    doTransformHandler();
    setLoading(false);
  };

  return (
    <div className="w-full flex sm:w-2/3 md:w-1/2">
      {render && (transformed_url || public_id) ? (
        <CldImage
          src={transformed_url || public_id!}
          width={600}
          height={600}
          crop="fill"
          
          format="png"
          alt="AI "
          className="rounded-lg h-fit border shadow"
        />
      ) : (
        <div
          onClick={handleImageClick}
          className="center w-full rounded aspect-square bg-gray-100 border border-gray-300 cursor-pointer hover:border-gray-500 duration-300 ease-in-out active:translate-y-0.5 select-none flex items-center justify-center"
        >
          {loading ? "Processing..." : "Click to Generate Image"}
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
