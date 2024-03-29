import '@/styles/globals.css';
import Layout from '@/components/Layout/layout';
import Head from 'next/head';
import { Source_Sans_3, Londrina_Solid } from 'next/font/google';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weights: [400, 600, 700],
  // variable: '--font-source-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={sourceSans.className}>
      <Layout>
        <Head>
          <title>Hermanövarvet - Västkustens gulligaste sommarlopp</title>
          <link rel="icon" href="../../public/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
