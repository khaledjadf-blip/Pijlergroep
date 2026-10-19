import type { Metadata } from "next";
import { site } from "./site";
import type { Dict } from "./i18n";

export function buildMetadata(t: Dict): Metadata {
  const url = t.home === "/" ? site.url : `${site.url}${t.home}`;
  const title = `${site.name} — ${t.tagline}`;
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.title,
      template: `%s | ${site.name}`,
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: site.name }],
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      url,
      siteName: site.name,
      title,
      description: t.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        nl: site.url,
        ar: `${site.url}/ar`,
        "x-default": site.url,
      },
    },
  };
}
