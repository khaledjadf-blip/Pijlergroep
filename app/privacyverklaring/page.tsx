import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Hoe ${site.legalName} omgaat met persoonsgegevens.`,
  alternates: { canonical: `${site.url}/privacyverklaring` },
};

const lastUpdated = "19 oktober 2026";

export default function PrivacyPage() {
  return (
    <section className="pt-[150px] pb-[clamp(80px,11vw,150px)] max-[640px]:pt-[120px]">
      <div className="wrap max-w-[760px] privacy">
        <div className="section-label">Privacy</div>
        <h1
          className="display mb-4"
          style={{
            fontSize: "clamp(30px, 4.5vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Privacyverklaring
        </h1>
        <p className="text-fog text-sm mb-12">
          Laatst bijgewerkt: {lastUpdated}
        </p>

        <h2>Wie zijn wij?</h2>
        <p>
          {site.legalName} is verantwoordelijk voor de verwerking van
          persoonsgegevens zoals beschreven in deze privacyverklaring. Deze
          verklaring geldt voor de website {site.url.replace("https://", "")}.
        </p>
        <ul>
          <li>KvK-nummer: {site.kvk}</li>
          <li>Btw-nummer: {site.vat}</li>
          <li>
            E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            Telefoon: <a href={`tel:${site.phoneE164}`}>{site.phone}</a>
          </li>
        </ul>

        <h2>Welke gegevens verwerken wij?</h2>
        <p>
          Deze website heeft geen contactformulier en vraagt niet om
          persoonsgegevens. Wanneer je ons mailt of belt, verwerken wij de
          gegevens die je zelf met ons deelt, zoals je naam, e-mailadres,
          telefoonnummer, bedrijfsnaam en de inhoud van je bericht.
        </p>
        <p>
          Daarnaast registreert onze hostingpartij bij elk bezoek technische
          gegevens, zoals je IP-adres, browsertype en het tijdstip van bezoek.
          Deze gegevens worden alleen gebruikt om de website veilig en goed
          werkend te houden.
        </p>

        <h2>Waarom verwerken wij deze gegevens?</h2>
        <ul>
          <li>Om je vraag of aanvraag te beantwoorden en op te volgen;</li>
          <li>om offertes en opdrachten voor te bereiden en uit te voeren;</li>
          <li>om de website te beveiligen en technisch te beheren;</li>
          <li>om te voldoen aan wettelijke verplichtingen.</li>
        </ul>
        <p>
          Wij verwerken deze gegevens op basis van ons gerechtvaardigd belang,
          het uitvoeren van een (toekomstige) overeenkomst of een wettelijke
          verplichting.
        </p>

        <h2>Cookies</h2>
        <p>
          Deze website plaatst geen tracking- of marketingcookies en gebruikt
          geen analysediensten van derden. Lettertypen worden vanaf onze eigen
          server geladen, waardoor er bij een bezoek geen gegevens naar
          bijvoorbeeld Google worden gestuurd.
        </p>

        <h2>Hoe lang bewaren wij gegevens?</h2>
        <p>
          Wij bewaren persoonsgegevens niet langer dan nodig is voor het doel
          waarvoor ze zijn verzameld. Correspondentie bewaren wij maximaal twee
          jaar na het laatste contact, tenzij een langere bewaartermijn
          wettelijk verplicht is (bijvoorbeeld zeven jaar voor de fiscale
          administratie).
        </p>

        <h2>Delen met derden</h2>
        <p>
          Wij verkopen je gegevens nooit. Wij delen gegevens alleen met partijen
          die ons helpen onze diensten te leveren, zoals onze hosting- en
          e-mailprovider, of met een van onze werkmaatschappijen wanneer jouw
          vraag over hun diensten gaat. Met deze partijen zijn afspraken gemaakt
          over de beveiliging van je gegevens.
        </p>

        <h2>Beveiliging</h2>
        <p>
          Wij nemen passende technische en organisatorische maatregelen om
          persoonsgegevens te beschermen tegen verlies en onrechtmatig gebruik.
          De website is alleen bereikbaar via een beveiligde verbinding (HTTPS).
        </p>

        <h2>Jouw rechten</h2>
        <p>
          Je hebt het recht om je persoonsgegevens in te zien, te laten
          corrigeren of te laten verwijderen. Ook kun je bezwaar maken tegen de
          verwerking of vragen om je gegevens over te dragen. Stuur je verzoek
          naar <a href={`mailto:${site.email}`}>{site.email}</a>; wij reageren
          binnen vier weken.
        </p>
        <p>
          Ben je het niet eens met de manier waarop wij met je gegevens omgaan?
          Dan kun je een klacht indienen bij de{" "}
          <a
            href="https://autoriteitpersoonsgegevens.nl"
            target="_blank"
            rel="noopener"
          >
            Autoriteit Persoonsgegevens
          </a>
          .
        </p>

        <h2>Wijzigingen</h2>
        <p>
          Wij kunnen deze privacyverklaring aanpassen. De meest recente versie
          staat altijd op deze pagina.
        </p>
      </div>
    </section>
  );
}
