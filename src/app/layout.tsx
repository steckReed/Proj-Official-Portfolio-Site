import type { Metadata } from "next";
import { ReactQueryProvider } from './ReactQueryProvider';
import montserrat from '@/fonts/montserrat';
import NavBar from '@/components/modules/NavBar/NavBar';
import "./_globals.scss";

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
        <body className={montserrat.className} style={{ minHeight: '100vh' }} >
          <NavBar />

          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
