import PartnerBanner from '@/components/PartnerBanner/partnerBanner';
import React from 'react';

const AfterRun = () => {
  return (
    <>
      <div className="w-screen h-[70vh] overflow-hidden">
        <img
          src="https://viktoramattsson.github.io/images/fp3.jpg"
          alt="After Run"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-hv-yellow">
        <div className="px-8 py-8 max-w-[600px] m-auto">
          <h1 className="pb-4">Välkommen på After Run!</h1>
          <p className="pb-4">
            I samband med Hermanövarvet och Hermanövarvet Trail bjuder vi
            tillsammans med Gullholmsbaden in till gemensam After Run.{' '}
            <b>
              {' '}
              Du beställer ditt After Run-paket direkt i anmälan till loppet.
            </b>{' '}
            Priset för After Run-paketet gäller endast vid förbeställning genom
            anmälan till Hermanövarvet.
          </p>
          <h2>Meny 2023</h2>
          <p>Kommer inom kort...</p>
        </div>
      </div>
      <div className="w-screen h-[70vh] overflow-hidden">
        <img
          src="https://viktoramattsson.github.io/images/Hermanövarvet-3-FotografSabinaSelin_16.jpg"
          alt="After Run"
          className="w-full h-full object-cover"
        />
      </div>
      <PartnerBanner />
    </>
  );
};

export default AfterRun;
