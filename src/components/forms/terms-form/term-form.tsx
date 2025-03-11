"use client";
import { ChangeEvent, Fragment, useState } from "react";
import { PolicyDataType, PrivacyPolicyInput } from "./type";
import { defaultPrivacyPolicyValues, inputFields } from "./constants";
import { generateWithAI } from "@/lib/helpers/get-data-from-ai";
import { privacyPromptGenerator } from "@/lib/helpers/prompts";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../resume-form/input";
import Button from "@/components/ui/button";
import TermsPreview from "@/components/previews/terms/terms";
import Card from "@/components/ui/card";

const TermForm = () => {
  const router = useRouter();

  const [input, setInput] = useState<PrivacyPolicyInput>(
    defaultPrivacyPolicyValues
  );
  const [results, setResults] = useState<PolicyDataType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const DownloadHandler = () => {
    if (!results) return;
    localStorage.setItem("policyData", JSON.stringify(results));
    router.push("/v1/terms/download");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateTerms = async () => {
    setIsLoading(true);
    const res = await generateWithAI(privacyPromptGenerator(input));

    if (res.success && Array.isArray(res.data)) {
      setResults(res.data[0]);
    } else {
      toast.error("Failed to generate a Privacy Policy");
    }

    setIsLoading(false);
  };


  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[10px] sm:gap-[20px] my-5">
        {inputFields.map((field) => (
          <Input
            key={field.name}
            onChange={handleChange}
            value={input[field.name as keyof PrivacyPolicyInput]}
            name={field.name}
            label={field.label}
          />
        ))}
      </div>

      <p className="text-text-secondary text-[14px] mb-2">
        Note : Fill all the fields for accurate results
      </p>

      <Button
        onClick={generateTerms}
        disabled={isLoading}
        isLoading={isLoading}
        className=""
      >
        Generate Privacy Policy
      </Button>

      {results && (
        <Fragment>
          <Button
            onClick={DownloadHandler}
            variant="normal"
            className="my-5 self-end !rounded"
          >
            Download Privacy Policy
          </Button>
          <Card className="w-fit">
            <TermsPreview {...results} />
          </Card>
        </Fragment>
      )}
    </div>
  );
};

export default TermForm;
