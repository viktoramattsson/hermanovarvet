import React from 'react';
import Image from 'next/image';
import HV from '../../../public/images/Hermanövarvet-1-1-350x350.png';
import HVTrail from '../../../public/images/Hermanövarvettrail.transperent-350x350.png';

function RegisterComponent() {
  return (
    <>
      <div className="bg-hv-green w-full py-24 text-center flex flex-col md:flex-row justify-evenly">
        <div className="px-24 pb-10">
          <a
            target="_blank"
            href="https://raceid.com/sv/races/10548/about"
            className="md:w-1/2"
          >
            <Image
              src={HV}
              alt="Hermanövarvet"
              priority={true}
              className="w-full max-h-96 mx-auto object-contain"
            />
            <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-full">
              Till Anmälan
            </button>
          </a>
        </div>
        <div className="px-24 pb-10">
          <a
            target="_blank"
            href="https://raceid.com/sv/races/10548/about"
            className="md:w-1/2"
          >
            <div>
              <Image
                src={HVTrail}
                alt="Hermanövarvet Trail"
                priority={true}
                className="w-full max-h-96 mx-auto object-contain"
              />
              <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-full">
                Till Anmälan
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default RegisterComponent;
