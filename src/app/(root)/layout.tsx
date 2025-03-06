import ResponsiveSideBar from "@/components/common/side-bar/responsive-side-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex pt-[60px] sm:pt-0">
      <ResponsiveSideBar />
      <section className="w-full">{children}</section>
    </section>
  );
}
