import { AppProps } from "next/app";
import Head from "next/head";
import type { Metadata } from "next";

import Layout from "@/components/Layout";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian’s Secrets",
  openGraph: {
    title: "CarpTravel",
    description: "Uncover Carpathian’s Secrets",
    url: "https://carp-travel-eta.vercel.app/",
    images: [
      { url: "/images/ogLogo.png", width: 1200, height: 630 },
      { url: "/images/ogLogo.jpg", width: 1200, height: 630 },
    ],
    type: "website",
  },
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
