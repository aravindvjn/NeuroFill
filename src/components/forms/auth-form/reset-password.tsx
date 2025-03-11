"use client";
import React, { useState } from "react";
import Input from "../resume-form/input";
import { resetPassword } from "@/lib/actions/login.action";
import toast from "react-hot-toast";
import Button from "@/components/ui/button";
import Link from "next/link";
import BrandName from "@/components/ui/brand-name";

type Props = {
  token: string;
};
const ResetPassword = ({ token }: Props) => {
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  }>({
    success: false,
    message: "",
  });


  const handleSubmit = async () => {
    if (!password) return;

    setIsLoading(true);
    const res = await resetPassword(token, password);
    setResponse(res);
    setIsLoading(false);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="max-w-[340px] w-full flex flex-col mx-auto justify-center gap-[10px] min-h-svh">

      <div className="center">
        <BrandName size={28} />
      </div>

      <p className="text-lg font-semibold ">Reset your password</p>

      <Input
        type="password"
        label="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleSubmit} isLoading={isLoading} disabled={isLoading}>
        Change Password
      </Button>

      {response.success && (
        <div className="text-center">
          <p className="text-green-500 mb-2">{response.message}</p>
          <Link
            className=" px-5 py-2 rounded bg-green-500 text-white"
            href={"/auth"}
          >
            Login
          </Link>
        </div>
      )}
      
    </div>
  );
};

export default ResetPassword;
