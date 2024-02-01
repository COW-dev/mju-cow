import type { Metadata } from 'next';
import './globals.css';

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
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
