import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HV from '../../public/images/hv-05589.jpg';
import map from '../../public/images/map.png';

function Hermanovarvet() {
  // Create a ref for the race information div
  const raceInfoRef = useRef(null);

  // Function to handle scroll when the "Info" link is clicked
  const scrollToRaceInfo = () => {
    if (raceInfoRef.current) {
      raceInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center h-[80vh]">
        <Image
          src={HV}
          alt="Hermanövarvet"
          className="h-full object-cover -z-20"
        />
        <div className="absolute flex flex-col items-center text-white text-3xl">
          <a
            //href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToRaceInfo();
            }}
            className="hover:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Info
          </a>
          <Link
            href="/"
            className="hover:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Banan
          </Link>
          <a
            href="https://raceid.com/sv/races/9235/startlist"
            className="hover:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Startlista
          </a>
          <a
            href="https://raceid.com/sv/races/9235/startlist"
            className="hover:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Resultat
          </a>
          <Link
            href="/register"
            className="hover:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Anmälan
          </Link>
        </div>
      </div>

      <div ref={raceInfoRef} className="bg-hv-yellow py-10 px-14">
        <h1 className="my-10">Loppinformation!</h1>
        <p className="mb-4">
          Den 29 juli kl 15.00 smäller vi av startskottet för västkustens
          gulligaste 10 km-lopp! Med start på och mål på Mor Johannas äng går
          loppet på en naturskön bana runt Hermanö på varierande underlag av
          asfalt och grus. Efter loppet bjuder vi in till gemensam After Run, vi
          äter gott, dricker svalt och njuter av våra prestationer. Du beställer
          ditt After Run-paket direkt i anmälan till loppet! Välkommen till
          Gullholmen & Hermanö!
        </p>
        <p className="mb-4">
          Hermanövarvet har begränsat antal deltagare för bästa upplevelse.
        </p>
        <h1 className="mb-4">Pris på anmälan</h1>
        <p className="mb-4">
          Ju tidigare du anmäler dig desto billigare är det, bra va?
        </p>
        <p className="mb-4">
          <span className="font-bold">345:-</span> t o m 9/4
        </p>
        <p className="mb-4">
          <span className="font-bold">445:-</span> t o m 24/7
        </p>
        <p className="mb-4">
          <span className="font-bold">545:-</span> fr o m 24/7
        </p>
      </div>
      <div>
        <div className="bg-hv-green py-10 px-14">
          <p className="flex justify-center text-center my-4">
            Banan mäter 10 km och utgörs av 3,5 km asfaltsväg och 6,5 km
            grusväg.
          </p>
          <h1 className="flex justify-center text-center my-4">
            Banbeskrivning
          </h1>
          <p className="flex justify-center text-center my-4">
            Banbeskrivning Starten går Mor Johannas äng, även kallad
            fotbollsplanen. Banan börjar med en brant stigning uppför Österbergs
            lid och vikar av till höger vid Höpallen (1 km ) mot Grundsaund,
            förbi Lottas lada och ut på Lunddalen och Övermyren (2 km). Vid Härm
            viker banan av till höger mot (3km) Grindebacken. På vägen mot
            Klippevik passeras Myren (4 km). Vändningen sker längst ut på (5 km)
            Käringas brygga vid Klippevik. Där går banan åter mot Härm igen, via
            Myren (6 km) och Grindebacken (7 km) där den nu går rakt fram längs
            Härmanövägen förbi Rörholmen (8 km) och Höpallen. När Gullholmsbaden
            (9 km) med sin stugby passeras är det bara 1 km kvar till målet.
            Under sista kilometern går det nedför längs Österbergs lid och när
            Gullholmen kyrka passeras viker banan av åt vänster (västerut) för
            att slutligen nå fram till målgången på Mor Johannas äng.
            Kilometermarkeringar Varje kilometer är markerad med en skylt på
            höger sida (i löpriktningen) om vägen. Vätskekontroller Vatten
            serveras i höjd med Café Strandhaket vid Grindebacken (ca 3,5km och
            6,5) och vid mål. Kontrollmätning Banans längd är GPS-mätt och ej
            kontrollerad på annat sätt.
          </p>
        </div>
        <div className="bg-blue-300 py-10 px-14">
          <h1 className="flex justify-center text-center my-4">Banan då?</h1>
          <p className="flex justify-center text-center my-4">
            Uppvärmning och start på Mor Johannas Äng. Direkt efter start möts
            vi av loppets brantaste backe - &quot;chockstart&quot; eller
            &quot;skönt att ha gjort&quot; är upp till dig. Därifrån bjuder
            banan på en knapp kilometer asfalt innan en slingrande grusväg leder
            oss söderut, genom vackra landskap ner till vändpunkten ute på
            bryggkanten i Klippevik. Efter vändningen löper vi tillbaka samma
            trånga passage (se upp för möte!) och uppför dagens andra tuffa
            uppförsbacke. Därefter löper vi tillbaka längs vattnet, förbi
            stranden och inte minst vätskedepån(!) vid Grindebacken. Väl
            tillbaka på asfalten är det inte långt kvar, och efter den långa
            backen (nedför den här gången) tar vi vänster vid kyrkan och in på
            Mor Johannas äng för målgång på fotbollsplanen.
          </p>
        </div>
        <Image src={map} alt="karta" />
      </div>
    </>
  );
}

export default Hermanovarvet;
