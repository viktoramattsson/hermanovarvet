import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HV from '../../public/images/hv-05589.jpg';
import map from '../../public/images/map.png';

function Hermanovarvet() {
  const raceInfoRef = useRef(null);
  const trackRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center h-[100vh]">
        <Image
          src="https://viktoramattsson.github.io/images/HermanövarvetTrail2023-FotografSabinaSelin-937.jpg"
          alt="Hermanövarvet"
          width={1900}
          height={1690}
          className="h-full object-cover -z-20"
        />
        <div className="absolute flex flex-col items-center text-white text-3xl">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollTo(raceInfoRef);
            }}
            className="hover:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Info
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollTo(trackRef);
            }}
            className="hover:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Banan
          </a>
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
          Loppinformation Den 29 juli kl 11.00 smäller vi av startskottet för
          västkustens gulligaste traillopp, i ett av Bohusläns största
          Naturreservat! Med start och mål på Mor Johannas äng går loppet på den
          mest natursköna banan du kan tänka dig runt Hermanö på varierande
          tekniskt underlag av grus, skogsstig och klippor. Efter loppet med
          start kl 17.00 bjuder vi in till gemensam After Run på Gullholmsbaden.
          Vi äter gott, dricker svalt och njuter av våra prestationer. Du
          beställer ditt After Run-paket direkt i anmälan till loppet. Välkommen
          till Gullholmen & Hermanö! Hermanövarvet Trail har begränsat antal
          startplatser för bästa löpupplevelse. Pris på anmälan Ju tidigare du
          anmäler dig desto billigare är det, bra va? 445 kr t o m 9/4 545 kr t
          o m 25/6 595 kr t o m 23/7 645 kr f o m 24/7 Obligatorisk utrustning -
          Mugg, kåsa eller flaska (samtliga vätskekontroller utmed banan är
          självservicestationer utan engångsmuggar) Matnyttig löparinfo Distans
          - 15 km. Starttid och plats - Mor Johannas Äng, Gullholmen, 11.00, 29
          juli 2023. Vätskekontroller - Samtliga vätskekontroller på banan är
          självservicestationer utan engångsmuggar. Vilket innebär att varje
          löpare SKA ha med en egen kåsa, mugg eller flaska för att kunna dricka
          vid vätskestationerna. Mugg, kåsa eller flaska är obligatorisk
          utrustning för alla löpare på Hermanövarvet Trail. Begränsat antal
          platser - för bästa löpupplevelse. Priser? - Vi har ett prisbord fyllt
          med fina priser från loppets sponsorer. Medalj? - Ja, självklart.
          Specialdesignad medalj i trä endast för Hermanövarvet Trail Målgång -
          Mor Johannas äng. Klasser - Dam och Herr. Tidtagning - Chip. Bana -
          läs allt här, men tillämpa högertrafik. Sjukvård - kunniga personer
          finns i målområdet. Åldersgräns - 18 år. Läs våra allmänna villkor
          Anmälan - Anmälan är icke återbetalningsbar. Innan du anmäler dig vill
          vi också att du tar del av våra allmänna villkor, det blir mycket
          enklare så för alla. Du hittar dem i menyn ovan. Efteranmälan - Ingen
          efteranmälan på plats. Anmäl dig online via vårt anmälningsformulär.
          Nummerlapp - Hämtas på Mor Johannas äng senast 30 minuter innan start,
          ska bäras tydligt på bröst eller lår under hela loppet. Annars får du
          ingen tid. Omklädning, duschar och toaletter - Vi rekommenderar ombyte
          i det fria, alternativt kom ombytt till tävlingen. Efteråt erbjuds bad
          i havet, vill du ta hellre ta en dusch finns det i gästhamnen för 5kr.
          Toaletter finns också i gästhamnen, gratis. Färjan från Tuvesvik -
          Västtrafik sätter in extra färjor mellan kl.09.00-10.00 för deltagarna
          till vårt Trailvarv.
        </p>
      </div>
      <div>
        <div ref={trackRef} className="bg-hv-green py-10 px-14">
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