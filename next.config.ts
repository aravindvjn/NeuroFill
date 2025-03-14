import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com","lh3.googleusercontent.com"]
  }, corePlugins: {
    preflight: false, // Prevents Tailwind from injecting global styles that may cause issues
  },
};

export default nextConfig;
