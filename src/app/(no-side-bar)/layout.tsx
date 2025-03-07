
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=" w-full sm:pt-0">{children}</section>
  );
}
