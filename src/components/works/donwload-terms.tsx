"use client";
import React, { useEffect, useState } from "react";
import { PolicyDataType } from "../forms/terms-form/type";
import TermsPreview from "../previews/terms/terms";
import Button from "../ui/button";
import Card from "../ui/card";
import { FontFamilyType } from "../common/type";
import SelectFontFamily from "../forms/resume-form/select-font";

const DownloadTerms = () => {
  const [data, setData] = useState<PolicyDataType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fontFamily, setFontFamily] =
    useState<FontFamilyType>("Times-New-Roman");

  //Handle font family
  const handleFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value as FontFamilyType);
  };

  useEffect(() => {
    setIsLoading(true);
    const storedData = localStorage.getItem("policyData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    setIsLoading(false);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="h-dvh w-full center">
        <div className="h-6 w-6 border border-secondary border-t-transparent"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-dvh w-full center">
        <p className="text-red-500 text-3xl">Failed</p>
      </div>
    );
  }
  return (
    <div className="mx-auto border center flex-col overflow-y-scroll">
      <p className="text-center p2 my-3">Click print to download.</p>
      <Card className={fontFamily}>
        <TermsPreview {...data} />
      </Card>

      <div className="horizontally-center my-5"><SelectFontFamily
        fontFamily={fontFamily}
        handleFontFamily={handleFontFamily}
      />

      <Button
        variant="normal"
        className=" !h-[40px] !w-[100px]"
        onClick={handlePrint}
      >
        Print
      </Button></div>
    </div>
  );
};

export default DownloadTerms;
