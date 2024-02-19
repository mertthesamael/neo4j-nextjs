// import { cal, inter } from "@/styles/fonts";
// import { Analytics } from "@vercel/analytics/react";
//import Providers  from "./providers.tsx";
import { Metadata } from "next";
import '@/style/globals.css'
import { Toaster } from "@/components/ui/toaster"
import Providers from "./providers";
import { GeistSans } from 'geist/font/sans';

const title =
  "Jokedd";
const description =
  "Description will be added.";
const image = "https://i.ibb.co/X8kxB4S/Group-73.png";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@akaMerto",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.className}`}>
      <body >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}