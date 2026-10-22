import { Reveal } from "./Reveal";
import { site } from "@/data/site";
import type { Dict } from "@/data/i18n";

export function ContactCTA({ t }: { t: Dict }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[clamp(80px,11vw,150px)] text-center"
      style={{
        background: "linear-gradient(180deg, var(--color-ink-2), var(--color-ink))",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(212,25,27,0.08), transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(47,143,131,0.08), transparent 50%)",
        }}
      />
      <div className="wrap max-w-[760px] relative">
        <Reveal>
          <div className="section-label justify-center inline-flex after:content-[''] after:w-6 after:h-px after:bg-fog">
            {t.contact.label}
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2
            className="display mb-5"
            style={{
              fontSize: "clamp(30px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-paper-dim text-[17px] mb-10 leading-[1.7]">
            {t.contact.text}
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="flex flex-wrap gap-3.5 justify-center max-[640px]:flex-col max-[640px]:items-stretch">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <span dir="ltr">{site.email}</span>{" "}
              <span className="arrow">{t.arrow}</span>
            </a>
            <a href={`tel:${site.phoneE164}`} className="btn btn-ghost">
              <span dir="ltr">{site.phone}</span>{" "}
              <span className="arrow">{t.arrow}</span>
            </a>
            <a href="#bedrijven" className="btn btn-ghost">
              {t.contact.viewCompanies} <span className="arrow">↑</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
