import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"]
  }, corePlugins: {
    preflight: false, // Prevents Tailwind from injecting global styles that may cause issues
  },
};

export default nextConfig;
