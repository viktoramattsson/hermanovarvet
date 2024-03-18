//import s from '../styles/index.module.css';
import TextGen from '../components/TextGen/TextGen';
import RegisterComponent from '@/components/RegisterComponent/registerComponent';
import Image from 'next/image';
import fp1 from '../../public/images/fp1.jpg';
import fp2 from '../../public/images/fp2.jpg';
import fp3 from '../../public/images/fp3.jpg';
import map from '../../public/images/map.png';
//import logo from 'https://viktoramattsson.github.io/images/logo-full-white-outline.png';

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <video
          className="object-cover w-full h-full"
          src="https://viktoramattsson.github.io/video/FP-video-LG.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <Image
          src="https://viktoramattsson.github.io/images/logo-full-white-outline.png"
          alt="logo"
          width={700}
          height={700}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 pt-36"
        />
      </div>
      <TextGen />
      <Image src={fp1} alt="bild 1" className="min-h-[60vh] object-cover" />
      <RegisterComponent />
      <Image src={fp2} alt="bild 2" className="min-h-[60vh] object-cover" />
      <Image src={map} alt="karta" className=" object-cover" />
      <Image src={fp3} alt="bild 3" className="min-h-[60vh] object-cover" />
    </>
  );
}
