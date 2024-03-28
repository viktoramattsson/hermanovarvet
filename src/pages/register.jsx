import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HV from '../../public/images/Hermanövarvet-1-1-350x350.png';
import HVTrail from '../../public/images/Hermanövarvettrail.transperent-350x350.png';
import PartnerBanner from '@/components/PartnerBanner/partnerBanner';

function Register() {
  return (
    <>
      <PartnerBanner />
      <div className="bg-hv-green w-full pt-10 text-center flex flex-col md:flex-row">
        <div className="px-24 pb-10">
          <a
            target="_blank"
            href="https://raceid.com/sv/races/9235/about"
            className="md:w-1/2"
          >
            <Image
              src={HV}
              alt="Hermanövarvet"
              priority={true}
              className="w-full max-h-96 mx-auto object-contain"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Till Anmälan
            </button>
          </a>
        </div>
        <div className="px-24 pb-10">
          <a
            target="_blank"
            href="https://raceid.com/sv/races/9235/about"
            className="md:w-1/2"
          >
            <div>
              <Image
                src={HVTrail}
                alt="Hermanövarvet Trail"
                priority={true}
                className="w-full max-h-96 mx-auto object-contain"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Till Anmälan
              </button>
            </div>
          </a>
        </div>
      </div>
      <Image
        src="https://viktoramattsson.github.io/images/Hermanövarvet-3-FotografSabinaSelin_134.jpg"
        alt="logo"
        width={1900}
        height={1000}
        className="h-[90vh] object-cover"
      />
      <PartnerBanner />
    </>
  );
}

export default Register;
