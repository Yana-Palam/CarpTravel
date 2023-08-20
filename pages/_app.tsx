import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <title>CarpTravel</title>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
