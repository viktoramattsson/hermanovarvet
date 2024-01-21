import { Inter } from 'next/font/google';
import s from '../styles/index.module.css';
import TextGen from '../components/TextGen/TextGen';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="overflow-hidden h-screen">
        <video
          className="object-cover w-full h-full"
          src={require('../../public/video/fp-video.mp4')}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <TextGen />
    </>
  );
}
