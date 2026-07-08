export type BrandColor = "red" | "gold" | "teal";

export type Company = {
  slug: "verkeersplus" | "vca" | "netjes";
  number: string;
  tag: string;
  name: string;
  description: string;
  domain: string;
  url: string;
  brandColor: BrandColor;
};

export const companies: Company[] = [
  {
    slug: "verkeersplus",
    number: "01",
    tag: "Verkeersregelaars",
    name: "Verkeersplus Services B.V.",
    description:
      "Gecertificeerde verkeersregelaars en verkeersmaatregelen voor wegwerkzaamheden, evenementen en calamiteiten — 24/7 landelijk inzetbaar.",
    domain: "verkeersplus.nl",
    url: "https://verkeersplus.nl",
    brandColor: "red",
  },
  {
    slug: "vca",
    number: "02",
    tag: "Opleidingen & certificering",
    name: "VCA Veilig & Vakkundig B.V.",
    description:
      "VCA-cursussen en verkeersregelaarscertificering, praktijkgericht opgeleid zodat mensen direct inzetbaar zijn op de werkvloer.",
    domain: "vcaveiligvakkundig.nl",
    url: "https://vcaveiligvakkundig.nl",
    brandColor: "gold",
  },
  {
    slug: "netjes",
    number: "03",
    tag: "Professionele reiniging",
    name: "Netjes & Klaar B.V.",
    description:
      "Reiniging van bouwlocaties, evenemententerreinen en bedrijfspanden — netjes opgeleverd, elke keer weer.",
    domain: "netjesenklaar.nl",
    url: "https://netjesenklaar.nl",
    brandColor: "teal",
  },
];

export type Pillar = {
  title: string;
  description: string;
  brandColor: BrandColor;
};

export const pillars: Pillar[] = [
  {
    title: "Vakmanschap",
    description:
      "Elk bedrijf in de groep wordt geleid door mensen met echte ervaring in het vak, niet alleen op papier.",
    brandColor: "red",
  },
  {
    title: "Betrouwbaarheid",
    description:
      "Afspraak is afspraak. Onze bedrijven staan bekend om doen wat ze zeggen — en op tijd.",
    brandColor: "gold",
  },
  {
    title: "Samen sterker",
    description:
      "Drie bedrijven die elkaar versterken: dezelfde klanten, dezelfde projecten, complementaire diensten.",
    brandColor: "teal",
  },
];

export type WhyCard = {
  number: string;
  tag: string;
  title: string;
  description: string;
};

export const whyCards: WhyCard[] = [
  {
    number: "01",
    tag: "Eén aanspreekpunt",
    title: "Minder schakels",
    description:
      "Verkeersregelaars nodig, personeel certificeren én de locatie schoon opgeleverd hebben? Dat kan via drie gesprekken, of via één telefoontje naar de groep.",
  },
  {
    number: "02",
    tag: "Gedeelde standaard",
    title: "Zelfde kwaliteitsniveau",
    description:
      "Alle drie de bedrijven werken volgens dezelfde pijlers: vakmanschap, betrouwbaarheid en korte lijnen. Geen verrassingen tussen bedrijven onderling.",
  },
  {
    number: "03",
    tag: "Lange termijn",
    title: "Gebouwd om te blijven",
    description:
      "Pijler Groep investeert in haar bedrijven voor de lange termijn — niet om snel te verkopen, maar om drie merken te laten groeien.",
  },
];

export const nav = [
  { href: "#verhaal", label: "Ons verhaal" },
  { href: "#bedrijven", label: "Bedrijven" },
  { href: "#waarom", label: "Waarom Pijler" },
  { href: "#contact", label: "Contact" },
];

export const site = {
  name: "Pijler Groep",
  legalName: "Pijler Groep — Holding B.V.",
  tagline: "Eén fundament. Drie bedrijven die de klus klaren.",
  description:
    "Pijler Groep is de holding achter Verkeersplus Services, VCA Veilig & Vakkundig en Netjes & Klaar — drie bedrijven, één fundament.",
  established: 2025,
  email: "info@pijlergroep.nl",
  url: "https://pijlergroep.nl",
  locale: "nl_NL",
} as const;

export const brandColorMap: Record<BrandColor, string> = {
  red: "#d4191b",
  gold: "#c9962e",
  teal: "#2f8f83",
};
