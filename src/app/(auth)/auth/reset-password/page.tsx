import ResetPassword from "@/components/forms/auth-form/reset-password";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: Promise<{
    token: string;
  }>;
};

const Page = async ({ searchParams }: Props) => {
  const { token } = await searchParams;

  if (!token) {
    redirect("/auth");
  }

  return (
    <div>
      <ResetPassword token={token} />
    </div>
  );
};

export default Page;
