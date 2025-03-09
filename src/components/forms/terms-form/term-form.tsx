"use client";
import React, { ChangeEvent, useState } from "react";
import { PrivacyPolicyInput } from "./type";
import { defaultPrivacyPolicyValues } from "./constants";
import Input from "../resume-form/input";
import Button from "@/components/ui/button";
import { generateWithAI } from "@/lib/helpers/get-data-from-ai";
import { privacyPromptGenerator } from "@/lib/helpers/prompts";
import toast from "react-hot-toast";

const TermForm = () => {
  const [input, setInput] = useState<PrivacyPolicyInput>(
    defaultPrivacyPolicyValues
  );
  const [results,setResults] = useState<string[]>([])
  const [isLoading,setIsLoading] = useState<boolean>(false)

  //handle change event
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setInput(prev=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
  }

  //generate Data with Ai 
  const generateTerms = async()=>{
    setIsLoading(true)
    const res = await generateWithAI(privacyPromptGenerator(input))

    if(res.success && Array.isArray(res.data)){
        setResults(res.data[0])
    }else{
        toast.error("Failed to generate a Privacy Policy")
    }

    setIsLoading(false)
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[10px] sm:gap-[20px] my-5">
        <Input onChange={handleChange} value={input?.appName} name="appName" label="App Name" />
        <Input onChange={handleChange} value={input?.websiteURL} name="websiteURL" label="Website URL" />
        <Input onChange={handleChange} value={input?.businessType} name="businessType" label="Business Type" />
        <Input onChange={handleChange} value={input?.dataCollection} name="dataCollection" label="Data Collection" />
        <Input onChange={handleChange} value={input?.dataUsage} name="dataUsage" label="Data Usage" />
        <Input onChange={handleChange} value={input?.thirdPartyServices} name="thirdPartyServices" label="Third Party Services" />
        <Input onChange={handleChange} value={input?.governingLaw} name="governingLaw" label="Governing Law" />
        <Input onChange={handleChange} value={input?.userRights} name="userRights" label="User Rights" />
        <Input onChange={handleChange} value={input?.contactEmail} name="contactEmail" label="Contact Email" />
        <Input onChange={handleChange} value={input?.childrensPrivacy} name="childrensPrivacy" label="Children's Privacy" />
      </div>
      <Button onClick={generateTerms} disabled={isLoading} isLoading={isLoading} className="">Generate Privacy Policy</Button>
      <div>
        <p>{results}</p>
      </div>
    </div>
  );
};

export default TermForm;
