import type { Metadata } from "next";
import { ReactQueryProvider } from './ReactQueryProvider';
import montserrat from '@/fonts/montserrat';
import "./globals.css";

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
    <ReactQueryProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
