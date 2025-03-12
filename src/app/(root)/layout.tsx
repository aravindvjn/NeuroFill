'use client'
import ResponsiveSideBar from "@/components/common/side-bar/responsive-side-bar";
import { CurrentPageType } from "@/components/welcome/type";
import Welcome from "@/components/welcome/welcome";
import { currentUserId } from "@/lib/get-calls/get-current-user";
import { isWelcomeShown } from "@/lib/helpers/is-welcome-shown";
import { useEffect, useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //State to track current page
  const [currentPage, setCurrentPage] = useState<CurrentPageType>("Welcome");

  //Check whether welcome page is shown or not, if not show Welcome Page
  const isShown = isWelcomeShown();

  const [isUser, setIsUser] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    const res = await currentUserId();
    setIsUser(!!res);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!isUser) {
      fetchUser();
    }
  }, []);


  if (!isShown && currentPage !== "Home") {
    return (
      <Welcome setCurrentPage={setCurrentPage} currentPage={currentPage} />
    );
  }

  return (
    <section className="flex pt-[50px] sm:pt-0">
      <ResponsiveSideBar isLoading={isLoading} isUser={isUser} />
      <section className="w-full">{children}</section>
    </section>
  );
}
