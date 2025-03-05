
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <Fragment>{children}</Fragment>;
}
