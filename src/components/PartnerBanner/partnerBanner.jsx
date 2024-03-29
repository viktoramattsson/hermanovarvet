import React from 'react';
import Image from 'next/image';

function PartnerBanner() {
  return (
    <div className=" py-8 flex flex-wrap justify-evenly items-center bg-gray-200">
      <div>
        <img
          className="object-contain p-2"
          src="https://viktoramattsson.github.io/images/triumfglass-197x300.png"
          alt="triumfglass"
        />
      </div>
      <div>
        <img
          className="object-contain p-2"
          src="https://viktoramattsson.github.io/images/orustbank-300x212.png"
          alt="OrustSparbank"
        />
      </div>

      <div>
        <img
          className="object-contain p-2"
          src="https://viktoramattsson.github.io/images/mareld-300x120.png"
          alt="mareld"
        />
      </div>
      <div>
        <img
          className="object-contain p-2"
          src="https://viktoramattsson.github.io/images/Maurten-300x196.png"
          alt="maurten"
        />
      </div>
    </div>
  );
}
export default PartnerBanner;
