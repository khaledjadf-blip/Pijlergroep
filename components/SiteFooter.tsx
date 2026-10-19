import Link from "next/link";
import { companies, site } from "@/data/site";
import type { Dict } from "@/data/i18n";

const linkClass =
  "text-paper-dim transition-colors duration-300 ease hover:text-paper";

export function SiteFooter({ t }: { t: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-11">
      <div className="wrap flex flex-wrap items-start justify-between gap-8 text-[12px] text-fog max-[640px]:flex-col">
        <div className="flex flex-col gap-1.5 leading-[1.7]">
          <span className="text-paper font-semibold">
            <bdi>{site.legalName}</bdi>
          </span>
          <span>
            <a href={`mailto:${site.email}`} className={linkClass} dir="ltr">
              {site.email}
            </a>
            {" · "}
            <a href={`tel:${site.phoneE164}`} className={linkClass} dir="ltr">
              {site.phone}
            </a>
          </span>
          <span>
            {t.footer.kvk} <span dir="ltr">{site.kvk}</span> · {t.footer.vat}{" "}
            <span dir="ltr">{site.vat}</span>
          </span>
          <span>
            © {year} <bdi>{site.legalName}</bdi> · {t.footer.rights} ·{" "}
            <Link href="/privacyverklaring" hrefLang="nl" className={linkClass}>
              {t.footer.privacy}
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
