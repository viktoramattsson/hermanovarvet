import TextGen from '../components/TextGen/TextGen';
import RegisterComponent from '@/components/RegisterComponent/registerComponent';
import Image from 'next/image';
import fp1 from '../../public/images/fp1.jpg';
import fp2 from '../../public/images/fp2.jpg';
import fp3 from '../../public/images/fp3.jpg';
import map from '../../public/images/map.png';

import { useEffect, useState } from 'react';
import PartnerBanner from '@/components/PartnerBanner/partnerBanner';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth > 768);
    }
  }, []);

  return (
    <>
      <div className="h-screen">
        <video
          className="object-cover w-full h-full"
          src={
            isMobile
              ? 'https://viktoramattsson.github.io/video/FP-video-LG.mp4'
              : 'https://viktoramattsson.github.io/video/FP-video-LG.mp4'
          }
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
      <PartnerBanner />
      {/* <TextGen /> */}
      <div className="bg-hv-yellow min-h-[50vh] py-32 flex justify-center">
        <div className="lg:flex flex-row lg:px-16">
          <div className="lg:w-1/2 items-center px-4 text-center">
            <h1 className="pb-8">Vad händer fram till loppet?</h1>
            <ul className="pb-8">
              <li>
                1 April - Anmälan öppnar 1 april!
                <a href="https://raceid.com/sv/races/10548/information">
                  klicka här
                </a>
              </li>
              <li>
                1 Maj - Provlöp Hermanövarvet Trail.{' '}
                <a href="https://raceid.com/sv/races/12392/information">
                  <b> klicka här </b>
                </a>
              </li>
              <li>7 Maj - Hermanövarvet x Lynk&co x Craft i Göteborg</li>
              <li>27 Juli - Hermanövarvet Trail & Hermanövarvet 10k</li>
            </ul>
            <p className="pb-8">
              Kom till Sveriges mest tätbebyggda skärgårdsö och spring i
              Bohusläns största naturreservat!
            </p>
            <p className="pb-8">
              Den 27 juli 2024 smäller vi av startskottet för västkustens
              gulligaste 10 km-lopp OCH västkustens gulligaste traillopp! Med
              start och mål på Mor Johannas äng går båda loppen på natursköna
              banor runt Hermanö.
            </p>
          </div>
          <div className="lg:w-1/2 items-center px-4 text-center">
            <h1 className="pb-8">Hålltider lördag 27 juli</h1>
            <ul>
              <li>Kl 11:00 - Start Hermanövarvet Trail</li>
              <li>Kl 13:45 - Start Triumfglassvarvet 0-6år</li>
              <li>Kl 14:15 - Start Orusts Sparbanksvarvet 7-12år</li>
              <li>Kl 15:00 - Start Hermanövarvet 10k</li>
              <li>Kl 17:00 - Start After Run (endast förbokde)</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src={fp1}
        alt="bild 1"
        className="min-h-[60vh] w-full object-cover"
      />
      <RegisterComponent />
      <PartnerBanner />
      <div className="bg-hv-blue">
        <Image src={map} alt="karta" className=" py-24 object-cover m-auto" />
      </div>
      <Image
        src={fp3}
        alt="bild 3"
        className="min-h-[60vh] w-full object-cover"
      />
      <PartnerBanner />
    </>
  );
}
