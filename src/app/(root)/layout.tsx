"use client";
import ResponsiveSideBar from "@/components/common/side-bar/responsive-side-bar";
import { CurrentPageType } from "@/components/welcome/type";
import Welcome from "@/components/welcome/welcome";
import { isWelcomeShown } from "@/lib/helpers/is-welcome-shown";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //State to track current page
  const [currentPage, setCurrentPage] = useState<CurrentPageType>("Welcome");

  //Check whether welcome page is shown or not, if not show Welcome Page
  const isShown = isWelcomeShown();

  if (!isShown && currentPage !== "Home") {
    return (
      <Welcome setCurrentPage={setCurrentPage} currentPage={currentPage} />
    );
  }

  return (
    <SessionProvider>
      <section className="flex pt-[50px] sm:pt-0">
        <ResponsiveSideBar />
        <section className="w-full">{children}</section>
      </section>
    </SessionProvider>
  );
}
