"use client";
import { CurrentPageType } from "@/components/welcome/type";
import Welcome from "@/components/welcome/welcome";
import { isWelcomeShown } from "@/lib/helpers/is-welcome-shown";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();

  //State to track current page
  const [currentPage, setCurrentPage] = useState<CurrentPageType>("Welcome");

  //Check whether welcome page is shown or not, if not show Welcome Page
  const isShown = isWelcomeShown();

  const navigateToSignUp = () => {
    router.push("/auth/sign-up");
  };

  if (!isShown && currentPage !== "AuthPage") {
    return (
      <Welcome setCurrentPage={setCurrentPage} currentPage={currentPage} />
    );
  }
  navigateToSignUp();
}
