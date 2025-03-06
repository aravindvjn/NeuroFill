'use server'
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (base64: string) => {
  try {
    const res = await cloudinary.uploader.upload(base64, {
      folder: "neurofill", 
      resource_type: "image",
    });
    console.log(res.secure_url)
    return res.secure_url; 
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};



