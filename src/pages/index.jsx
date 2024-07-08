import TextGen from '../components/TextGen/TextGen';
import RegisterComponent from '@/components/RegisterComponent/registerComponent';
import Image from 'next/image';
import fp1 from '../../public/images/fp1.jpg';
import fp2 from '../../public/images/fp2.jpg';
import fp3 from '../../public/images/fp3.jpg';
import map from '../../public/images/map.png';
import EventForm from '@/components/EventForm/eventForm';

import { useEffect, useState } from 'react';
import PartnerBanner from '@/components/PartnerBanner/partnerBanner';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeForm = () => {
    setIsOpen(false);
  };

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
      {/* {isOpen && <EventForm closeIt={closeForm} />} */}
      {/* <TextGen /> */}
      <div className="bg-hv-yellow min-h-[60vh] flex justify-center items-center">
        <div className="px-10 md:w-2/3 xl:w-1/2 ">
          <h1 className="mb-8">
            Kom till Sveriges mest tätbebyggda skärgårdsö och spring i Bohusläns
            största naturreservat!
          </h1>
          <p>
            Den 27 juli 2024 smäller vi av startskottet för västkustens
            gulligaste 10 km-lopp OCH västkustens gulligaste traillopp! Med
            start och mål på Mor Johannas äng går båda loppen på natursköna
            banor runt Hermanö.
          </p>
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

      <PartnerBanner />
    </>
  );
}
