"use client";
import BrandName from "@/components/ui/brand-name";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { verifyEmail } from "@/lib/actions/user.action";
import Link from "next/link";
import React, { useState } from "react";

const VerifyEmailForm = ({ token }: { token: string }) => {
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState({
    success: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleVerification = async () => {
    if (!password.trim()) {
      setResponse({
        success: false,
        message: "Please fill the password.",
      });
      return;
    }

    setIsLoading(true);
    const res = await verifyEmail(token, password);

    setResponse(res);
    setIsLoading(false);
  };

  return (
    <form className="max-w-[400px] w-full flex flex-col gap-5 mt-[40px]">
      <div className="center">

        <BrandName size={30} />
      </div>

      <Input
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        label="Password"
      />

      {response.message && (
        <p className={response.success ? "text-green-500" : "text-red-500"}>
          {response.message}
        </p>
      )}

      {response.success && (
        <Link className="text-center underline text-blue-500" href={"/auth"}>
          Login
        </Link>
      )
      }

      <Button
        disabled={isLoading}
        onClick={handleVerification}
        className="!rounded"
      >
        {isLoading ? "Verifying..." : "Verify Email"}
      </Button>
      
    </form>
  );
};

export default VerifyEmailForm;
