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
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Info
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollTo(trackRef);
            }}
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Banan
          </a>
          <a
            href="https://raceid.com/sv/races/9235/startlist"
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Startlista
          </a>
          <a
            href="https://raceid.com/sv/races/9235/startlist"
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Resultat
          </a>
          <Link
            href="/register"
            className="active:bg-black/80 w-full py-4 px-20 my-4 bg-black/60 items-center justify-center flex rounded-md"
          >
            Anmälan
          </Link>
        </div>
      </div>
      <PartnerBanner />
      <div className="bg-hv-green flex flex-col lg:flex-row lg:px-6">
        <div
          ref={raceInfoRef}
          className="w-full lg:w-1/2 px-4 lg:px-8 md:px-16 py-6"
        >
          <h1 className="my-6">Loppinformation Hermanövarvet Trail</h1>
          <p className="mb-4">
            Den 27 juli kl 11.00 smäller vi av startskottet för västkustens
            gulligaste traillopp, i ett av Bohusläns största Naturreservat! Med
            start och mål på Mor Johannas äng går loppet på den mest natursköna
            banan du kan tänka dig runt Hermanö på varierande tekniskt underlag
            av grus, skogsstig och klippor. Efter loppet med start kl 17.00
            bjuder vi in till gemensam After Run. Vi äter gott, dricker svalt
            och njuter av våra prestationer. Du beställer ditt After Run-paket
            direkt i anmälan till loppet. Välkommen till Gullholmen & Hermanö!
          </p>
          <p className="mb-4">
            Hermanövarvet Trail har begränsat antal startplatser för bästa
            löpupplevelse.
          </p>
          <p className="mb-4">
            Ju tidigare du anmäler dig desto billigare är det, bra va?
          </p>
          <h1>Obligatorisk utrustning</h1>
          <p>
            <b>Mugg, kåsa eller flaska</b> (samtliga vätskekontroller utmed
            banan är självservicestationer utan engångsmuggar)
          </p>
          <div className="flex justify-center content-center lg:mt-20 mt-10">
            <a href="https://raceid.com/sv/races/10548/about">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full">
                Till Anmälan
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-6 px-4 lg:px-8 md:px-16">
          <h1 className="my-6">Matnyttig löparinfo</h1>
          <ul>
            <li>
              <b>Distans</b>- 15km
            </li>
            <li>
              <b>Starttid och plats</b>- Mor Johannas Äng, Gullholmen, 11.00, 27
              juli 2024.
            </li>
            <li>
              <b>Vätskekontroller</b>- Samtliga vätskekontroller på banan är
              självservicestationer utan engångsmuggar. Vilket innebär att varje
              löpare SKA ha med en egen kåsa, mugg eller flaska för att kunna
              dricka vid vätskestationerna. Mugg, kåsa eller flaska är
              obligatorisk utrustning för alla löpare på Hermanövarvet Trail.
            </li>
            <li>
              <b>Begränsat antal platser</b>- För bästa löpupplevelse
            </li>
            <li>
              <b>Priser</b>- Vi har ett prisbord fyllt med fina priser från
              loppets sponsorer.
            </li>
            <li>
              <b>Medalj</b>- Ja, självklart! Specialdesignad medalj i trä endast
              för Hermanövarvet Trail
            </li>
            <li>
              <b>Målgång</b>- Mor Johannas Äng.
            </li>
            <li>
              <b>Klasser</b>- Dam och Herr.
            </li>
            <li>
              <b>Tidtagning</b>- Chip.
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
              <b>Åldersgräns</b> - 18 år.
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
            <li>
              <b>Färjan från Tuvesvik</b>- Följ tidtabeller på Västtrafiks sida
              eller i appen.
            </li>
          </ul>
        </div>
      </div>
      <PartnerBanner />
      <div className="bg-hv-blue flex flex-col lg:flex-row lg:px-6">
        <div
          ref={trackRef}
          className="w-full lg:w-1/2 px-4 lg:px-8 md:px-16 py-8"
        >
          <h1>Banan då?</h1>
          <p className="my-4">
            Vi kallar det inte för västkustens gulligaste traillopp för intet.
            Förutom att Gullholmen centrum, som sägs vara Sveriges mest
            tätbebyggda skärgårdsö, springer du sedan i ett av Bohusläns största
            Naturreservat. Du upptäcker stigar, klippor och vandringsleder man
            troligtvis inte hittar någon annanstans på Västkusten! Kort och
            gott, västkustens gulligaste traillopp! Såhär kommer banan se ut!
          </p>
          <p className="my-4">
            Banan mäter 15 km och utgörs av en skön blandning av lite asfalt,
            grusväg men mestadels klippor och stiglöpning.
          </p>
          <h2 className="my-4">Banbeskrivning</h2>
          <p className="my-4">
            Hermanövarvet Trail startar från <b>Mor Johannas äng</b>. Loppet
            inleds med 1 km asfalt och drygt 2 km grusväg innan vi svänger in på
            den fina lilla stigen mot <b>Eken</b>. Den tar oss genom skogen ner
            till ängen vid <b>Klippevik</b>, där som namnet antyder klipporna
            tar vid. Här börjar banans första prövning - klipplöpning kombinerat
            med kuperad terräng. <b>Skålle Röva</b> är banans sydligaste punkt
            och väl värd en kort paus för att njuta av utsikten, med Käringön
            söderut och Skottland bortom det öppna havet i väst. På vägen från{' '}
            <b>Skålle Röva</b> blir berget till klippor och lummig löpning via{' '}
            <b>Skålldalen</b> vidare mot <b>Stenvik</b>. Sedan vänder vi åter ut
            mot klipporna och <b>Långekilen</b> (häftig vy!). Efter ett längre
            parti med hårda klippor är det skönt att korsa Kalvhagens mjuka stig
            följt av en kortare bit grusväg fram till <b>Grundsund</b>. Här
            rundar vi strandkanten för att en sista gång ta oss ut på öns
            klippiga västsida. Längst ut vid <b>Alkebogen</b> (ser vi till
            Lysekil och tom. till Smögen vid klart väder) går banan österut på
            fin stig mellan klipporna. Avslutningen kommer plötsligt då vi
            vänder ner från stigen och ut på <b>Mor Johannes äng</b> och en kort
            spurtraka in i mål!
          </p>
          <h2>Banmarkeringar</h2>
          <p>
            Banan är utmärkt med röd färg på stenar och förstärkt med små
            flaggor och snitselband.
          </p>
          <h2>Viktig info om vätskekontroller</h2>
          <p>
            Utmed banan finns det ett antal vätskekontroller. Samtliga
            vätskekontroller är <b>självservicestationer</b>. Det innebär att
            varje löpare själv springer med egen <b>mugg, kåsa eller flaska</b>{' '}
            och fyller den vid valfritt antal servicestationer. En egen
            behållare (flaska, kåsa, mugg) att dricka ur under loppet är
            obligatorisk utrustning för samtliga löpare.
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
