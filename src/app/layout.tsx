import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { metaData, viewPort } from "@/lib/constants";
import NextTopLoader from "nextjs-toploader";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = metaData;
export const viewport: Viewport = viewPort;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="epTFGi9V4Mj-7GySM2eqgEZNEQL6dgAu1VY4shwrnTY"
        />
      </head>
      <body className={`${urbanist.variable} antialiased`}>
        <NextTopLoader showSpinner={false} color="#6C5CE7" />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
        {children}
      </body>
    </html>
  );
}
