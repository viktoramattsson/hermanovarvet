import '@/styles/globals.css';
import Layout from '@/components/Layout/layout';
import Head from 'next/head';
import { Source_Sans_3 } from '@next/font/google';

const sans = Source_Sans_3({
  subsets: ['latin'],
  weights: [400, 600, 700],
});

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
