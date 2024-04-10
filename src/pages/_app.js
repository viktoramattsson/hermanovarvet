import '@/styles/globals.css';
import Layout from '@/components/Layout/layout';
import Head from 'next/head';
import { Source_Sans_3, Londrina_Solid } from 'next/font/google';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  //weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
});

const londrina = Londrina_Solid({
  subsets: ['latin'],
  weight: ['100', '300', '400', '900'],
  variable: '--font-londrina-solid',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`font-sans ${sourceSans.variable} ${londrina.variable}`}>
      <Layout>
        <Head>
          <title>Hermanövarvet - Västkustens gulligaste sommarlopp</title>
          <link
            rel="icon"
            href="https://viktoramattsson.github.io/images/favicon.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
