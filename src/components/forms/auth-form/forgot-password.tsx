"use client";
import BrandName from "@/components/ui/brand-name";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { requestResetPassword } from "@/lib/actions/login.action";
import React, { useState } from "react";
import toast from "react-hot-toast";

type ResponseType = {
  success: boolean;
  message: string;
};
const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [response, setResponse] = useState<ResponseType>({
    message: "",
    success: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const sendMailHandler = async () => {
    setIsLoading(true);

    const res = await requestResetPassword(email);

    setResponse(res);
    setIsLoading(false);

    if(res.success){
      toast.success(res.message)
    }else{
      toast.error(res.message)
    }

  };

  return (
    <div className="p-5 w-full justify-center max-w-[340px] mx-auto flex flex-col gap-[10px] text-start min-h-svh">
      <div className="center">
        <BrandName size={28} />
      </div>

      <p className="text-lg font-semibold ">Forgot your password?</p>
      <p className="text-[14px]">
        No worries! Enter your email below to reset it.
      </p>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        type="email"
      />
      <Button
        disabled={isLoading || response.success}
        isLoading={isLoading}
        onClick={sendMailHandler}
        className=""
        variant="primary"
      >
        {response.success ? "Email Sent!" : "Send Reset Link"}
      </Button>
    </div>
  );
};

export default ForgotPassword;
