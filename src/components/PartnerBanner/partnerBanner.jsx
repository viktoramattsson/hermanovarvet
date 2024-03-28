import React from 'react';
import Image from 'next/image';

function PartnerBanner() {
  return (
    <div className="h-24 sm:h-28 lg:h-32 py-6 flex flex-row bg-gray-200 justify-evenly">
      <Image
        className="object-contain"
        src="https://viktoramattsson.github.io/images/triumfglass-197x300.png"
        alt="triumfglass"
        width={300}
        height={300}
      />
      <Image
        className="object-contain"
        src="https://viktoramattsson.github.io/images/orustbank-300x212.png"
        alt="OrustSparbank"
        width={300}
        height={300}
      />
      <Image
        className="object-contain"
        src="https://viktoramattsson.github.io/images/mareld-300x120.png"
        alt="mareld"
        width={300}
        height={300}
      />
      <Image
        className="object-contain"
        src="https://viktoramattsson.github.io/images/Maurten-300x196.png"
        alt="maurten"
        width={300}
        height={300}
      />
    </div>
  );
}
export default PartnerBanner;
