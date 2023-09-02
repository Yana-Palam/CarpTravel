import { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/components/Layout";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <title>CarpTravel</title>
      <link rel="icon" href="/favicon.svg" />
      <meta
        name="description"
        content="Uncover Carpathian’s Secrets"
        key="desc"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/ogLogo.jpg" />
      <meta property="og:description" content="Uncover Carpathian’s Secrets" />
      <meta property="og:title" content="CarpTravel" />
      <meta property="og:url" content="https://carp-travel-eta.vercel.app/" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
