"use client";
import Heading from "@/components/common/heading";
import MediaUploader from "@/components/common/media-uploader";
import TransformedImage from "@/components/common/transformed-image";
import React, { useState } from "react";

const page = () => {
  const [image, setImage] = useState<any>();
  const [render, setRender] = useState<boolean>(false);

  const doTransformHandler = () => {
    console.log("image :", image);
    if (image) {
      setRender(true);
    }
  };
  return (
    <div className="layoutx w-full flex flex-col gap-[20px] sm:pt-[20px] sm:pb-[60px]">
      <Heading
        heading="Generative Fill"
        subheading=" Enhance, Expand & Transform Your Images"
      />

      <div className="flex flex-col md:flex-row gap-[30px]">
        <MediaUploader setImage={setImage} />
        <TransformedImage
          render={render}
          doTransformHandler={doTransformHandler}
          public_id={image?.public_id}
          transformed_url=""
        />
      </div>
    </div>
  );
};

export default page;
