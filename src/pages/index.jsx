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
        <div className="p-10 md:w-2/3 xl:w-1/2 ">
          <h1 className="mb-8">
            Kom till Sveriges mest tätbebyggda skärgårdsö och spring i Bohusläns
            största naturreservat!
          </h1>
          <h2 className="pb-5">HERMANÖVARVET 2025 - ANMÄLAN ÖPPNAR 1 APRIL</h2>

          <p>
            Den 26 juli 2024 smäller vi av startskottet för västkustens
            gulligaste 10 km-lopp OCH västkustens gulligaste traillopp! Med
            start och mål på Mor Johannas äng går båda loppen på natursköna
            banor runt Hermanö.
          </p>

          <h2 className="pt-8 pb-5">Hålltider lördag 26 juli</h2>
          <ul className="text-lg">
            <li>
              <b>Kl 11:00</b> - Start Hermanövarvet Trail
            </li>
            <li>
              <b>Kl 13:45</b> - Start Triumfglassvarvet 0-6år
            </li>
            <li>
              <b>Kl 14:15</b> - Start Orusts Sparbanksvarvet 7-12år
            </li>
            <li>
              <b>Kl 15:00</b> - Start Hermanövarvet 10k
            </li>
            <li>
              <b>Kl 17:00</b> - Start After Run (endast förbokde)
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-hv-yellow p-10">
        <div className="p-10 sm:w-1/3 my-8 bg-hv-green rounded-2xl text-center mx-auto">
          <h1 className="mb-10">Resultat 2024</h1>
          <div>
            <a target="_blank" href="https://live.eqtiming.com/71761">
              <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold w-2/3 mb-5 py-6 px-8 rounded-full">
                Hermanövarvet 10k
              </button>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://live.eqtiming.com/71760">
              <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold w-2/3 mb-5 py-6 px-8 rounded-full">
                Trail
              </button>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://live.eqtiming.com/71760#series:1591-183621-1-"
            >
              <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold w-2/3 py-6 px-8 rounded-full">
                Dubbel
              </button>
            </a>
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
      <div className="bg-hv-blue flex flex-col md:flex-row md:px-20">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src={map} alt="karta" className="w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://viktoramattsson.github.io/images/karta_Trail.png"
            alt="After Run"
            className="w-full object-cover"
          />
        </div>
      </div>

      <PartnerBanner />
    </>
  );
}
