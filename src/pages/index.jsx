import Head from 'next/head';
import Image from 'next/image';
import firstImage from '../../public/images/hermanö10K-0122-1536x1151.jpg';
import { Inter } from 'next/font/google';
import s from '../styles/index.module.css';
import TextGen from '../components/TextGen/TextGen';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="h-96 w-8 bg-red-500"></div>

      <div>Hem</div>
      <TextGen />
    </>
  );
}
