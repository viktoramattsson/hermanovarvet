import React from 'react';
import Image from 'next/image';
import HV from '../../public/images/Hermanövarvet-1-1-350x350.png';
import HVTrail from '../../public/images/Hermanövarvettrail.transperent-350x350.png';

function Register() {
  return (
    <>
      <div className="bg-green-500 w-full text-center">
        <div className="pb-5">
          <Image
            src={HV}
            alt="Hermanövarvet"
            priority={true}
            className="w-4/5 mx-auto"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Till Anmälan
          </button>
        </div>
        <div className="pb-5">
          <Image
            src={HVTrail}
            alt="Hermanövarvet Trail"
            priority={true}
            className="w-4/5 mx-auto"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Till Anmälan
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
