"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { uploadImage } from "@/lib/helpers/upload-media";
import { convertToBase64 } from "@/lib/helpers/conversion";

const MediaUploader = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImage = () => {
    inputRef.current?.click();
  };

  const editImageHandler = async () => {
    if (inputRef.current?.files && inputRef.current.files.length > 0) {
      const file = inputRef.current.files[0];

      // Convert file to Base64
      const base64Image = await convertToBase64(file);

      setLoading(true);

      // Upload the original image to Cloudinary
      const cloudinaryUrl = await uploadImage(base64Image);
      if (!cloudinaryUrl) {
        setLoading(false);
        return;
      }
      setImageUrl(URL.createObjectURL(file));

    }
  };

  return (
    <div className="flex w-full sm:w-2/3 md:w-1/2 flex-col items-center space-y-4">
      {!imageUrl ? (
        <div
          onClick={handleImage}
          className="center w-full rounded aspect-square bg-secondary-background border border-border cursor-pointer hover:border-text-secondary duration-300 ease-in-out active:translate-y-0.5 select-none"
        >
          Upload Image
          <input
            ref={inputRef}
            className="hidden"
            type="file"
            accept="image/*"
            onChange={editImageHandler}
          />
        </div>
      ) : (
        <div className="relative w-full">
          <Image
            height={1000}
            width={1000}
            src={imageUrl}
            alt="Uploaded"
            className="w-full rounded"
          />
          {loading && <p className="text-center">Processing...</p>}
        </div>
      )}
    </div>
  );
};

export default MediaUploader;
