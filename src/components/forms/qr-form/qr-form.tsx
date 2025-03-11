"use client";
import React, { useState, useRef } from "react";
import Input from "../resume-form/input";
import { QRCodeCanvas } from "qrcode.react";
import Button from "@/components/ui/button";

const QRForm = () => {
  const [link, setLink] = useState<string>("");
  const qrRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState("default");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(e.target.value);
  };

  const getQRStyles = () => {
    switch (style) {
      case "blue":
        return { bgColor: "#E0F7FA", fgColor: "#0288D1" };
      case "green":
        return { bgColor: "#E8F5E9", fgColor: "#388E3C" };
      case "dark":
        return { bgColor: "#212121", fgColor: "#FAFAFA" };
      default:
        return { bgColor: "#ffffff", fgColor: "#000000" };
    }
  };

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = "qrcode.png";
        a.click();
      }
    }
  };

  const { bgColor, fgColor } = getQRStyles();

  return (
    <div>
      <Input onChange={handleChange} className="max-w-[400px] mt-5" />
      <select
        value={style}
        onChange={handleStyleChange}
        className="p-2 border border-gray-300 rounded-md mt-3"
      >
        <option value="default">Default (Black & White)</option>
        <option value="blue">Blue Theme</option>
        <option value="green">Green Theme</option>
        <option value="dark">Dark Mode</option>
      </select>

      {link && (
        <>
          <div ref={qrRef} className="my-5 print-only">
            <QRCodeCanvas value={link} size={200} bgColor={bgColor} fgColor={fgColor} />
          </div>
          <Button onClick={handleDownload}>Download</Button>
        </>
      )}
    </div>
  );
};

export default QRForm;
