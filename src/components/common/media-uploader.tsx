"use client";

import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-hot-toast";
import Image from "next/image";


type Props = {
  setImage:React.Dispatch<React.SetStateAction<any>>
}

const MediaUploader = ({setImage}:Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onSuccessHandler = (result: any) => {
    const uploadedFile = result?.info;

    if (uploadedFile?.secure_url) {
      setImage(uploadedFile);
      setImageUrl(uploadedFile.secure_url);
      toast.success("Image uploaded successfully!");
    } else {
      toast.error("Upload failed. Please try again.");
    }
  };

  const onErrorHandler = (error: any) => {
    console.error("Upload Error:", error);
    toast.error("An error occurred during upload.");
  };

  return (
    <div className="flex w-full sm:w-2/3 md:w-1/2  flex-col items-center space-y-4">

      {!imageUrl ? (
        <CldUploadWidget
          uploadPreset="neurofill"
          options={{
            multiple: false,
            resourceType: "image",
          }}
          onSuccess={onSuccessHandler}
          onError={onErrorHandler}
        >
          {({ open }) => (
            <div
              onClick={() => open()}
              className="center w-full rounded aspect-square bg-secondary-background border border-border cursor-pointer hover:border-text-secondary duration-300 ease-in-out active:translate-y-0.5 select-none"
            >
              Upload Image
            </div>
          )}
        </CldUploadWidget>
      ) 
      :
       (
        <Image
          height={1000}
          width={1000}
          src={imageUrl}
          alt="Uploaded"
          className="w-full rounded"
        />
      )}

    </div>
  );
};

export default MediaUploader;
