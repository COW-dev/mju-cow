export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-20 px-8 md:px-14">{children}</div>;
}
