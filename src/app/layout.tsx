import type { Metadata } from "next";
import "./globals.css";
import montserrat from '@/fonts/montserrat';

export const metadata: Metadata = {
  title: "Dev Reed Steck",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
