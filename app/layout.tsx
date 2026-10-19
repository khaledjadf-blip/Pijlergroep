import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { companies, site } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Holding boven Verkeersplus, VCA Veilig & Vakkundig en Netjes & Klaar`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Pijler Groep",
    "holding",
    "Verkeersplus",
    "VCA Veilig en Vakkundig",
    "Netjes en Klaar",
    "verkeersregelaars",
    "VCA opleiding",
    "professionele reiniging",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
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
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: "+31617325934",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.email,
    telephone: "+31617325934",
    areaServed: "NL",
    availableLanguage: ["nl"],
  },
  foundingDate: `${site.established}`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  subOrganization: companies.map((c) => ({
    "@type": "Organization",
    name: c.name,
    url: c.url,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <body className="bg-ink text-paper font-sans antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain-overlay" aria-hidden />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
