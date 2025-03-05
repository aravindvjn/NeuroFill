import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { customAppearance } from "@/lib/helpers/contants";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NeuroFill - AI Image Editing",
  description:
    "AI-powered image editing with generative fill, background removal, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={customAppearance}>
      <html lang="en">
        <body className={`${urbanist.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
