import Link from "next/link";
import React from "react";

const ForgotPasswordButton = () => {
  return (
    <div className="text-center mt-2">
      <p className="opacity-50 mb-1 text-[12px]">OR</p>
      <p>
        Forgot Password?{" "}
        <Link href="/auth/forgot-password" className="text-blue-600 hover:underline">
          Reset it here
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordButton;
