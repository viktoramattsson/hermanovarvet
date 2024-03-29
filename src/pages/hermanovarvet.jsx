import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HV from '../../public/images/hv-05589.jpg';
import map from '../../public/images/map.png';
import PartnerBanner from '@/components/PartnerBanner/partnerBanner';
import UpButton from '@/components/UpButton/upButton';

function Hermanovarvet() {
  const raceInfoRef = useRef(null);
  const trackRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      const scrollOffset = ref.current.offsetTop - 80;
      window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center h-[100vh]">
        <Image
          src={HV}
          alt="Hermanövarvet"
          className="h-full object-cover -z-20"
        />
        <div className="absolute flex flex-col items-center text-white text-3xl">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollTo(raceInfoRef);
            }}
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md font-londrina"
          >
            Info
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollTo(trackRef);
            }}
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md font-londrina"
          >
            Banan
          </a>
          <a
            href="https://raceid.com/sv/races/9235/startlist"
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md font-londrina"
          >
            Startlista
          </a>
          <a
            href="https://raceid.com/sv/races/9235/startlist"
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md font-londrina"
          >
            Resultat
          </a>
          <Link
            href="/register"
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md font-londrina"
          >
            Anmälan
          </Link>
        </div>
      </div>
      <PartnerBanner />
      <div className="bg-hv-green flex flex-col lg:flex-row lg:px-6 lg:py-24 ">
        <div
          ref={raceInfoRef}
          className="w-full h-full lg:w-1/2 px-4 lg:px-8 md:px-16 py-6"
        >
          <h1 className="my-6">Loppinformation Hermanövarvet 10k</h1>
          <p className="mb-4">
            Den 27 juli kl 15.00 smäller vi av startskottet för västkustens
            gulligaste 10 km-lopp! Med start på och mål på Mor Johannas äng går
            loppet på en naturskön bana runt Hermanö på varierande underlag av
            asfalt och grus. Efter loppet bjuder vi in till gemensam After Run.
            Vi äter gott, dricker svalt och njuter av våra prestationer. Du
            beställer ditt After Run-paket direkt i anmälan till loppet!
            Välkommen till Gullholmen & Hermanö!
          </p>
          <p className="mb-4">
            Hermanövarvet har begränsat antal deltagare för bästa upplevelse.
          </p>
          <p className="mb-4">
            Ju tidigare du anmäler dig desto billigare är det, bra va?
          </p>
          <div className="flex justify-center content-center lg:mt-20 mt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full">
              Till Anmälan
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-6 px-4 lg:px-8 md:px-16">
          <h1 className="my-6">Matnyttig löparinfo</h1>
          <ul>
            <li>
              <b>Distans -</b> 10km
            </li>
            <li>
              <b>Starttid och plats -</b> Mor Johannas Äng, Gullholmen, 15.00,
              27 Juli 2024.
            </li>
            <li>
              <b>Målgång</b>- Mor Johannas Äng.
            </li>
            <li>
              <b>Klasser</b>- Dam och Herr.
            </li>
            <li>
              <b>Tidtagning</b>- Chip
            </li>
            <li>
              <b>Medalj</b>- Ja självklart!
            </li>
            <li>
              <b>Priser</b>- Vi har ett prisbord fyllt med fina priser från
              loppet sponsorer.
            </li>
            <li>
              <b>Bana</b> - <a>Läs allt här</a>, men tillämpa högertrafik.
            </li>
            <li>
              <b>Sjukvård</b> - Kunniga personer finns i målområdet.
            </li>
            <li>
              <b>Anmälan</b> - Anmälan är icke återbetalningsbar. Innan du
              anmäler dig vill vi också att du tar del av våra allmänna villkor,
              det blir mycket enklare så för alla. Du hittar dem <a>här.</a>
            </li>
            <li>
              <b>Åldersgräns</b> - 18 år. Deltagare 15-18 år får springa med
              målsmans tillstånd. Maila oss på info@hermanovarvet.se
              <a>Läs våra allmänna villkor</a>
            </li>
            <li>
              <b>Nummerlapp</b> - Hämtas på Mor Johannas Äng (fotbollsplanen)
              senast 30 minuter innan start. Ska bäras tydligt på bröst eller
              lår under hela loppet. Annars får du ingen tid.{' '}
            </li>
            <li>
              <b>Efteranmälan</b> - Ingen efteranmälan på plats. Alla
              anmälningar sker online via vårt anmälningsformulär.
            </li>
            <li>
              <b>Omklädning, dushar och toaletter</b> - Vi rekommenderar ombyte
              i det fria, alternativt kom ombytt till tävlingen. Efteråt erbjuds
              bad i havet. Vill du hellre ta en dusch finns det gästhamnen.
              Toaletter finns också i gästhamnen
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-hv-blue flex flex-col lg:flex-row lg:px-6 lg:py-24">
        <div
          ref={trackRef}
          className="w-full lg:w-1/2 px-4 lg:px-8 md:px-16 py-8"
        >
          <h1>Västkustens gulligaste lopp!</h1>
          <p className="my-4">
            Banan mäter 10 km och utgörs av 3,5 km asfaltsväg och 6,5 km
            grusväg.
          </p>
          <h2 className="my-4">Banbeskrivning</h2>
          <p className="my-4">
            Starten går Mor Johannas äng, även kallad fotbollsplanen. Banan
            börjar med en brant stigning uppför Österbergs lid och vikar av till
            höger vid Höpallen (1 km ) mot Grundsaund, förbi Lottas lada och ut
            på Lunddalen och Övermyren (2 km). Vid Härm viker banan av till
            höger mot (3km) Grindebacken. På vägen mot Klippevik passeras Myren
            (4 km). Vändningen sker längst ut på (5 km) Käringas brygga vid
            Klippevik. Där går banan åter mot Härm igen, via Myren (6 km) och
            Grindebacken (7 km) där den nu går rakt fram längs Härmanövägen
            förbi Rörholmen (8 km) och Höpallen. När Gullholmsbaden (9 km) med
            sin stugby passeras är det bara 1 km kvar till målet. Under sista
            kilometern går det nedför längs Österbergs lid och när Gullholmen
            kyrka passeras viker banan av åt vänster (västerut) för att
            slutligen nå fram till målgången på Mor Johannas äng.
          </p>
          <h2>Kilometermarkeringar</h2>
          <p>
            Varje kilometer är markerad med en skylt på höger sida (i
            löpriktningen) om vägen.
          </p>
          <h2>Vätskekontroller</h2>
          <p>
            Vatten serveras i höjd med Café Strandhaket vid Grindebacken (ca
            3,5km och 6,5km) och vid mål.
          </p>
          <h2>Kontrollmätning</h2>
          <p>Banans längd är GPS-mätt och ej kontrollerad på annat sätt.</p>
        </div>
        <div className="w-full lg:w-1/2 py-8 px-4 lg:px-8 md:px-16">
          <Image src={map} alt="karta" />
        </div>
      </div>
      <PartnerBanner />
      <UpButton />
    </>
  );
}

export default Hermanovarvet;
