import React from "react";
import Banner from "./banner";

const PrivacyBanner = () => {
  return (
    <Banner
      title="Privacy Policy & Terms Generator"
      description="Let AI craft a professional and legally sound Privacy Policy and Terms of Service for your business."
      link="/terms"
      background="bg-gradient-to-b from-purple-800 to-purple-500 "
      icon="terms"
    />
  );
};

export default PrivacyBanner;
