import Link from "next/link";
import { companies, site } from "@/data/site";

const linkClass =
  "text-paper-dim transition-colors duration-300 ease hover:text-paper";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-11">
      <div className="wrap flex flex-wrap items-start justify-between gap-8 text-[12px] text-fog max-[640px]:flex-col">
        <div className="flex flex-col gap-1.5 leading-[1.7]">
          <span className="text-paper font-semibold">{site.legalName}</span>
          <span>
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
            {" · "}
            <a href={`tel:${site.phoneE164}`} className={linkClass}>
              {site.phone}
            </a>
          </span>
          <span>
            KvK {site.kvk} · btw {site.vat}
          </span>
          <span>
            © {year} {site.legalName} · Alle rechten voorbehouden ·{" "}
            <Link href="/privacyverklaring" className={linkClass}>
              Privacyverklaring
            </Link>
          </span>
        </div>
        <div className="flex flex-wrap gap-6 max-[640px]:gap-3.5">
          {companies.map((c) => (
            <a
              key={c.slug}
              href={c.url}
              target="_blank"
              rel="noopener"
              className={linkClass}
            >
              {c.name.replace(/ B\.V\.$/, "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
