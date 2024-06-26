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
        <div className="px-8 py-8 max-w-[800px] m-auto">
          <h1 className="pb-4">Välkommen på After Run!</h1>
          <p className="pb-4">
            Efter Hermanövarvet 10k och Hermanövarvet Trail bjuder vi
            tillsammans med Restaurang Kabyssen/Skottarn in till gemensam After
            Run.
          </p>
          <p className="pb-4">
            Från 16:30 utlovas skön stämning, god mat och livemusik. Du
            beställer ditt After Run-paket direkt i anmälan till loppet. Priset
            för After Run-paketet gäller endast vid förbeställning genom anmälan
            till Hermanövarvet.
          </p>
          <h2 className="pb-4">Meny 2023</h2>
          <p className="mb-2">
            - Fransk potatissallad med purjolök, kapris, rödlök och vinägrett
          </p>
          <p className="mb-2">
            - Pastasallad med rostade grönsaker, ruccola & basilikaolja
          </p>
          <p className="mb-2">
            - Pastasallad med fetaost, oliver, rödlök, tomat, vitlök & olivolja
          </p>
          <p className="mb-2">- Örtbakat kycklingbröst</p>
          <p className="mb-2">- Grillad kycklingklubba</p>
          <p className="mb-2">- Ugnsbakad lax</p>
          <p className="mb-2">- Mojo kräm</p>
          <p className="mb-2">- Örtsås</p>
          <p className="mb-2">- Hembakat bröd & tapenade</p>
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
