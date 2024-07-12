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
        <div className="px-8 py-10 max-w-[800px] m-auto">
          <h1 className="pb-4 text-center">Välkommen på After Run!</h1>
          <p className="pb-4">
            Hur toppar man en dag i skärgården efter Hermanövarvet och
            Hermanövarvet Trail? Jo med After Run såklart! Nytt för i år är att
            vi gästar Skottarn och nya krogen Kabyssen, som ligger längst ut på
            gästhamnsbryggan. Från kl 17:00 står buffen uppdukad och vi kan
            utlova skön stämning, kall dryck och peppig live-musik.
          </p>

          <div>
            <div className="p-10 sm:w-2/3 my-8 bg-hv-green rounded-2xl text-center mx-auto">
              <h2 className="mb-10">
                Orkar du inte springa, men ändå är sugen på gott häng efteråt?
                Då kan du anmäla dig till endast After Run här.
              </h2>
              <a target="_blank" href="https://raceid.com/sv/races/10548/about">
                <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-full">
                  Till Anmälan
                </button>
              </a>
            </div>
          </div>
          <h2 className="pb-4">Meny 2024</h2>
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
