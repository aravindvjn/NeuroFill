import VerifyEmailForm from "@/components/forms/auth-form/verify-email";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  searchParams: Promise<{
    token: string;
  }>;
};
const page = async ({ searchParams }: Props) => {
  const { token } = await searchParams;

  if(!token){
    notFound()
  }

  return <div className="center">
    <VerifyEmailForm token={token} />
  </div>;
};

export default page;
