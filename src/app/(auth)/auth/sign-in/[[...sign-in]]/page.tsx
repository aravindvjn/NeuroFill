import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <section className="center  min-h-svh">
      <SignIn />
    </section>
  );
};

export default SignInPage;
