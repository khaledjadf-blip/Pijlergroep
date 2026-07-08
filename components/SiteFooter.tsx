import { companies, site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-11">
      <div className="wrap flex flex-wrap items-center justify-between gap-5 text-[12px] text-fog max-[640px]:flex-col max-[640px]:items-start">
        <span>
          © {year} {site.legalName} · Alle rechten voorbehouden
        </span>
        <div className="flex flex-wrap gap-6 max-[640px]:gap-3.5">
          {companies.map((c) => (
            <a
              key={c.slug}
              href={c.url}
              target="_blank"
              rel="noopener"
              className="text-paper-dim transition-colors duration-300 ease hover:text-paper"
            >
              {c.name.replace(/ B\.V\.$/, "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
