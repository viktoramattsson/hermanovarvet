import React from 'react';
import Image from 'next/image';
import PartnerBanner from '@/components/PartnerBanner/partnerBanner';

function BarnLopp() {
  return (
    <div>
      <div className="flex items-center justify-center h-[60vh]">
        <Image
          src="https://viktoramattsson.github.io/images/Herman%C3%B6varvetTrail2023-FotografSabinaSelin-517-short.jpg"
          alt="Hermanövarvet barnloppet"
          className="h-full object-cover"
          width={2500}
          height={800}
        />
      </div>
      <div className="bg-hv-yellow py-10 px-8">
        <div className="max-w-[800px] text-center mx-auto">
          <h1>Hermanövarvets barnlopp</h1>
          <p className="mb-10">
            Hermanövarvets två barnlopp vänder sig till de allra yngsta med
            spring i benen. Anmäl barnet via anmälningslänken. Båda loppen har
            blivit fullbokade varje år, så vänta inte för länge. Tillsammans
            skapar vi minnen för livet.
          </p>
          <h2>Triumfglassvarvet 0-6 år - ca 400 m</h2>
          <h2 className="mb-10">Orust Sparbanksvarvet 7-12 år - ca 1200 m</h2>
          <p>Alla barn som deltar får glass och medalj!</p>
        </div>
      </div>

      <Image
        src="https://viktoramattsson.github.io/images/HermanövarvetTrail2023-FotografSabinaSelin-554-short.jpg"
        alt="Hermanövarvet barnloppet"
        className="object-cover"
        width={2500}
        height={800}
      />
      <PartnerBanner />
    </div>
  );
}

export default BarnLopp;
