import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="center min-h-svh">
      <SignUp />
    </section>
  );
};

export default SignUpPage;
