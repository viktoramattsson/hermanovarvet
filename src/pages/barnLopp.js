import React from 'react';
import Image from 'next/image';

function BarnLopp() {
  return (
    <div>
      <div className="flex items-center justify-center h-[100vh]">
        <Image
          src="https://viktoramattsson.github.io/images/Herman%C3%B6varvetTrail2023-FotografSabinaSelin-517.jpg"
          alt="Hermanövarvet barnloppet"
          className="h-full object-cover"
          width={1900}
          height={800}
        />
      </div>
      <div>
        <h1>Hermanövarvets barnlopp</h1>
        <p>
          Hermanövarvets två barnlopp vänder sig till de allra yngsta med spring
          i benen. Anmäl barnet via anmälningslänken. Båda loppen har blivit
          fullbokade varje år, så vänta inte för länge. Tillsammans skapar vi
          minnen för livet.
        </p>
        <h2>Triumfglassvarvet 0-6 år - ca 400 m</h2>
        <h2>Orust Sparbanksvarvet 7-12 år - ca 1200 m</h2>
        <p>Alla barn som deltar får glass och medalj!</p>
      </div>
    </div>
  );
}

export default BarnLopp;
