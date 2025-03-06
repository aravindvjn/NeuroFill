"use client";
import AuthForm from "@/components/forms/auth-form/auth-form";
import { CurrentPageType } from "@/components/welcome/type";
import Welcome from "@/components/welcome/welcome";
import { isWelcomeShown } from "@/lib/helpers/is-welcome-shown";
import { useState } from "react";

export default function Home() {

  //State to track current page
  const [currentPage, setCurrentPage] = useState<CurrentPageType>("Welcome");

  //Check whether welcome page is shown or not, if not show Welcome Page
  const isShown = isWelcomeShown();

  if (!isShown && currentPage !== "AuthPage") {
    return (
      <Welcome setCurrentPage={setCurrentPage} currentPage={currentPage} />
    );
  }
  return <AuthForm />;
}
