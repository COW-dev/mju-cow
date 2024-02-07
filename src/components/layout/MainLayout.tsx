export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-20 w-full px-8 md:max-w-screen-xl md:px-14">
      {children}
    </div>
  );
}
