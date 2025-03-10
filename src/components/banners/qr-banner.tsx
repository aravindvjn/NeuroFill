import React from "react";
import Banner from "./banner";

const QRBanner = () => {
  return (
    <Banner
    title="QR Code Generator"
    description="Generate high-quality QR codes for links, texts, and more in seconds."
    link="/qr"
     background="bg-gradient-to-r from-blue-400 to-blue-800"
     icon="qr"
    />
  );
};

export default QRBanner;
