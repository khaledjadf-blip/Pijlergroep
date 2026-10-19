export type BrandColor = "red" | "gold" | "teal";

export type Company = {
  slug: "verkeersplus" | "vca" | "netjes";
  number: string;
  name: string;
  domain: string;
  url: string;
  brandColor: BrandColor;
};

export const companies: Company[] = [
  {
    slug: "verkeersplus",
    number: "01",
    name: "Verkeersplus Services B.V.",
    domain: "verkeersplus.nl",
    url: "https://verkeersplus.nl",
    brandColor: "red",
  },
  {
    slug: "vca",
    number: "02",
    name: "VCA Veilig & Vakkundig B.V.",
    domain: "vcaveiligvakkundig.nl",
    url: "https://vcaveiligvakkundig.nl",
    brandColor: "gold",
  },
  {
    slug: "netjes",
    number: "03",
    name: "Netjes & Klaar B.V.",
    domain: "netjesenklaar.nl",
    url: "https://netjesenklaar.nl",
    brandColor: "teal",
  },
];

/** Brand colour per pillar, in the same order as the pillar copy in i18n.ts. */
export const pillarColors: BrandColor[] = ["red", "gold", "teal"];

export const site = {
  name: "Pijler Groep",
  legalName: "Pijler Groep B.V.",
  established: 2025,
  email: "info@pijlergroep.nl",
  phone: "+31 6 17325934",
  phoneE164: "+31617325934",
  kvk: "42116611",
  vat: "NL869804583B01",
  url: "https://pijlergroep.nl",
} as const;

export const brandColorMap: Record<BrandColor, string> = {
  red: "#d4191b",
  gold: "#c9962e",
  teal: "#2f8f83",
};
