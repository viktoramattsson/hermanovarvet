import React from 'react';
import Image from 'next/image';
import HV from '../../public/images/Hermano-1536x1151.jpg';

function hermanovarvet() {
  return (
    <>
      <div>
        <Image src={HV} alt="Hermanövarvet" className="h-dvh object-cover" />
      </div>
      <div className="bg-hv-yellow">
        <h1>Loppinformation!</h1>
        <p>
          Den 29 juli kl 15.00 smäller vi av startskottet för västkustens
          gulligaste 10 km-lopp! Med start på och mål på Mor Johannas äng går
          loppet på en naturskön bana runt Hermanö på varierande underlag av
          asfalt och grus. Efter loppet bjuder vi in till gemensam After Run, vi
          äter gott, dricker svalt och njuter av våra prestationer. Du beställer
          ditt After Run-paket direkt i anmälan till loppet! Välkommen till
          Gullholmen & Hermanö!
        </p>
        <p>Hermanövarvet har begränsat antal deltagare för bästa upplevelse.</p>
        <h1>Pris på anmälan</h1>
        <p>Ju tidigare du anmäler dig desto billigare är det, bra va?</p>
        <p>
          <span className="font-bold">345:-</span> t o m 9/4
        </p>
        <p>
          <span className="font-bold">445:-</span> t o m 24/7
        </p>
        <p>
          <span className="font-bold">545:-</span> fr o m 24/7
        </p>
      </div>
    </>
  );
}

export default hermanovarvet;
