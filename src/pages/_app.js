import '@/styles/globals.css';
import Layout from '@/components/Layout/layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Hermanövarvet - Västkustens gulligaste sommarlopp</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
