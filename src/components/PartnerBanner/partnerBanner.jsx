import React from 'react';
import Image from 'next/image';

function PartnerBanner() {
  return (
    <div className="flex h-36 w-full flex-nowrap justify-evenly gap-2 bg-gray-300 py-8">
      <div>
        <img
          className="h-full flex-1 object-scale-down"
          src="https://viktoramattsson.github.io/images/triumfglass-197x300.png"
          alt="triumfglass"
        />
      </div>
      <div>
        <img
          className="h-full flex-1 object-scale-down"
          src="https://viktoramattsson.github.io/images/orustbank-300x212.png"
          alt="OrustSparbank"
        />
      </div>
      <div>
        <img
          className="h-full flex-1 object-scale-down"
          src="https://viktoramattsson.github.io/images/mareld-300x120.png"
          alt="mareld"
        />
      </div>
      <div>
        <img
          className="h-full flex-1 object-scale-down"
          src="https://viktoramattsson.github.io/images/Maurten-300x196.png"
          alt="maurten"
        />
      </div>
    </div>
  );
}
export default PartnerBanner;
