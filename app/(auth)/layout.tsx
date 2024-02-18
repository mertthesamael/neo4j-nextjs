import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MainContainer from "@/components/layout/MainContainer";
import Header from "@/components/layout/Header";
import { GeistSans } from 'geist/font/sans';
import Providers from "../providers";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>
          <Header />
          <MainContainer>
            {children}
          </MainContainer>
        </Providers>
      </body>
    </html>
  );
}
