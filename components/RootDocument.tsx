import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { companies, site } from "@/data/site";
import type { Dict } from "@/data/i18n";
import "@/app/globals.css";

function jsonLd(t: Dict) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneE164,
    vatID: site.vat,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "KvK",
      value: site.kvk,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      telephone: site.phoneE164,
      areaServed: "NL",
      availableLanguage: ["nl", "ar"],
    },
    foundingDate: `${site.established}`,
    description: t.meta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: "NL",
    },
    subOrganization: companies.map((c) => ({
      "@type": "Organization",
      name: c.name,
      url: c.url,
    })),
  };
}

/** Shared <html> shell for each language's root layout. */
export function RootDocument({
  t,
  fontClassName,
  children,
}: {
  t: Dict;
  fontClassName: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={t.lang} dir={t.dir} className={fontClassName}>
      <body className="bg-ink text-paper font-sans antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(t)) }}
        />
        <div className="grain-overlay" aria-hidden />
        <SiteHeader t={t} />
        <main>{children}</main>
        <SiteFooter t={t} />
      </body>
    </html>
  );
}
