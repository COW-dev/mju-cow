import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: '명지대학교 COW',
  description: '명지대학교 IT 서비스 개발 동아리, COW',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="flex h-full min-h-screen flex-col items-center overflow-y-scroll bg-gradient-to-r from-black to-gray-800 font-medium tracking-tight text-white">
        <Header />
        <MainLayout>{children}</MainLayout>
        <Footer />
      </body>
    </html>
  );
}
