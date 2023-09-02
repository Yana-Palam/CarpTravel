import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

import Header from "@/components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian’s Secrets",
  icons: [
    {
      url: "/favicon.svg",
      rel: "icon",
      type: "image/svg",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://carp-travel-eta.vercel.app/",
    title: "CarpTravel",
    description: "Uncover Carpathian’s Secrets",
    siteName: "CarpTravel",
    images: [
      { url: "/images/ogLogo.jpg", width: 800, height: 600 },
      { url: "/images/ogLogo.png", width: 800, height: 600 },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
