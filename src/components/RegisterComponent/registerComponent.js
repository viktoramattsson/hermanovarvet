import React from 'react';
import Image from 'next/image';
import HV from '../../../public/images/Hermanövarvet-1-1-350x350.png';
import HVTrail from '../../../public/images/Hermanövarvettrail.transperent-350x350.png';

function RegisterComponent() {
  return (
    <>
      <div className="bg-hv-green w-full text-center">
        <a target="_blank" href="https://raceid.com/sv/races/9235/about">
          <div className="py-10">
            <Image
              src={HV}
              alt="Hermanövarvet"
              priority={true}
              className="w-1/2 max-h-96 mx-auto object-contain"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Till Anmälan
            </button>
          </div>
        </a>
        <a target="_blank" href="https://raceid.com/sv/races/9235/about">
          <div className="py-10">
            <Image
              src={HVTrail}
              alt="Hermanövarvet Trail"
              priority={true}
              className="w-1/2 max-h-96 mx-auto object-contain"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Till Anmälan
            </button>
          </div>
        </a>
      </div>
    </>
  );
}

export default RegisterComponent;
