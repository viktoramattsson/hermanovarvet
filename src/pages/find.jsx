import PartnerBanner from '@/components/PartnerBanner/partnerBanner';
import React from 'react';

const Find = () => {
  return (
    <>
      <PartnerBanner />
      <div className="bg-hv-yellow p-4 lg:p-16 xl:px-48">
        <h1>Var ligger Gullholmen & Hermanö?</h1>
        <p className="pb-4">
          Gullholmen och Hermanö är två pärlor på underbara Västkusten. Öarna
          som är bilfria ligger i den yttre Bohuslänska skärgården på Orusts
          västsida. Klicka här för karta.{' '}
        </p>
        <h2>Färja till Gullhomen & Hermanö</h2>
        <p>
          Personfärjan till bilfria Gullholmen/Hermanö går från färjeläget
          Tuvesvik som ligger på Lavö, västra sidan av Orust. Vid färjeläget
          Tuvesvik finns parkering, var nog med att du ställer dig på rätt
          parkering - dvs besöksparkering. Många parkeringsplatser är
          boendeparkering, parkera inte på dessa. Det är tydligt skyltat vad som
          är besöks och vad som är boendeparkering, respektera reglerna. Färjan
          angör ett antal bryggor, men du som ska springa Hermanövarvet ska gå
          av i Gullholmens hamn eller Gullholmen Piren (för de turer som stannar
          där). Restiden är ca 10 minuter. För tidtabell och avgångar använd
          reseplaneraren på Västtrafiks hemsida här. Från: Tuvesvik Orust till
          Gulholmen hamn ELLER Gullholmen Piren.
        </p>
        <p className="pb-4">
          Passar inte färjan eller vill man bara ha en lite finare tur över till
          Gullholmen rekommenderar vi att man åker med Skärgårdskryssen.
          Skärgårdskryssen har fasta körningar utifrån tidtabell men kan också
          bokas för grupper som vill åka vid någon speciell tid eller speciell
          plats. Kanske tillbaka till fastlandet efter vår After Run? För
          bokning och priser hos Skärgårdskryssen, besök deras hemsida här.
        </p>
        <h2>Vägbeskrivning till färjeläget Tuvesvik med bil</h2>
        <p className="pb-4">
          Från Göteborg - Kör E6 mot Oslo. Ta avfart mot Stenungsund/Tjörn/Orust
          (väg 160). Kör till Varekil. Sväng vänster vid Circle K, väg 178 mot
          Ellös. Efter en brant backe, ta vänster mot Hälleviksstrand/Stocken.
          Följ skyltar mot Tuvesvik (Gullholmen). Från Uddevalla - Kör mot
          Fiskebäckskil. Ta vänster vid Rotviksbro och kör mot Orust. När du
          kommer till Henån, sväng höger mot Ellös/Tuvesvik (Gullholmen).
        </p>
        <h2>Med egen båt till Gullholmen</h2>
        <p>
          Hermanö och Gullholmen har en mycket bra gästhamn med plats för många
          båtar. Dusch och toaletter finns i gästhamnen.
        </p>
        <a href="https://www.google.com/maps/search/gullholmen/@58.1753887,11.4005757,14.49z?entry=ttu">
          <img
            src="https://viktoramattsson.github.io/images/googlemap.png"
            alt="karta"
          />
        </a>
      </div>
    </>
  );
};

export default Find;
