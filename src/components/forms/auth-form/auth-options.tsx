import Button from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const AuthOptions = () => {
  const handleSignWithGoogle = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };
  return (
    <div className="flex my-3 flex-col max-w-[400px] w-full gap-[12px] px-[30px]">
      <Button
        onClick={handleSignWithGoogle}
        variant="white"
        className="!rounded text-[16px] !shadow h-[40px] !gap-1.5"
      >
        <FcGoogle size={18} /> Continue With Google
      </Button>
      <p className="opacity-50 text-center text-[12px]">OR</p>

      <Link
        className=" text-center bg-white text-primary font-semibold rounded  h-[40px] shadow hover:bg-gray-200 center transition"
        href={"/"}
      >
        Continue Without Login
      </Link>
    </div>
  );
};

export default AuthOptions;
