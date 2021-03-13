import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Next Events" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
