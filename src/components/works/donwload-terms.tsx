"use client";
import React, { useEffect, useState } from "react";
import { PolicyDataType } from "../forms/terms-form/type";
import TermsPreview from "../previews/terms/terms";
import Button from "../ui/button";
import Card from "../ui/card";

const DownloadTerms = () => {
  const [data, setData] = useState<PolicyDataType>();
  const [isLoading,setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    const storedData = localStorage.getItem("policyData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    setIsLoading(false)
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if(isLoading){
    return <div className="h-dvh w-full center">
        <div className="h-6 w-6 border border-secondary border-t-transparent"></div>
    </div>
  }

  if(!data){
    return <div className="h-dvh w-full center">
        <p className="text-red-500 text-3xl">Failed</p>
    </div>
  }
  return (
    <div className="mx-auto border center flex-col overflow-y-scroll">
      <p className="text-center p2 my-3">Click print to download.</p>
      <Card>
        <TermsPreview {...data} />
      </Card>
      <Button variant="normal" className="my-5 !h-[40px] !w-[100px]" onClick={handlePrint}>
        Print
      </Button>
    </div>
  );
};

export default DownloadTerms;
