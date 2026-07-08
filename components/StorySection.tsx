import { Reveal } from "./Reveal";
import { pillars } from "@/data/site";
import { TrafficConeIcon, ShieldCheckIcon, ConnectIcon } from "./Icons";

const iconMap = {
  Vakmanschap: TrafficConeIcon,
  Betrouwbaarheid: ShieldCheckIcon,
  "Samen sterker": ConnectIcon,
} as const;

const colorClass = {
  red: "text-brand-red border-brand-red/30",
  gold: "text-brand-gold border-brand-gold/30",
  teal: "text-brand-teal border-brand-teal/30",
} as const;

export function StorySection() {
  return (
    <section
      id="verhaal"
      className="relative py-[clamp(80px,11vw,150px)]"
    >
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[min(1200px,calc(100%-64px))]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-line-2) 20%, var(--color-line-2) 80%, transparent)",
        }}
      />
      <div className="wrap max-w-[860px]">
        <div className="mb-14">
          <Reveal>
            <div className="section-label">Ons verhaal</div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(28px, 4.4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.028em",
                maxWidth: "820px",
              }}
            >
              Niet bedacht vanachter een bureau — opgebouwd op de werkvloer.
            </h2>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-paper-dim text-[17px] leading-[1.85] mb-5 drop-cap">
              Pijler Groep begon niet als een holding op papier, maar als een
              aantal mensen die hetzelfde probleem steeds weer tegenkwamen:
              bedrijven die goed werk leveren, maar die het lastig vinden om op
              te schalen zonder hun kwaliteit te verliezen.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-paper-dim text-[17px] leading-[1.85] mb-5">
              Daarom brachten we drie specialismen onder één dak —{" "}
              <strong className="text-paper font-semibold">
                verkeersregelaars en verkeersmaatregelen
              </strong>{" "}
              bij Verkeersplus Services,{" "}
              <strong className="text-paper font-semibold">
                VCA-certificering en opleidingen
              </strong>{" "}
              bij VCA Veilig &amp; Vakkundig, en{" "}
              <strong className="text-paper font-semibold">
                professionele reiniging
              </strong>{" "}
              bij Netjes &amp; Klaar. Elk bedrijf blijft zelfstandig en
              specialistisch, maar leunt op dezelfde pijlers van de groep: korte
              lijnen, eerlijk werk en mensen die weten waar ze het over hebben.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-paper-dim text-[17px] leading-[1.85] mb-5">
              De naam <strong className="text-paper font-semibold">Pijler</strong>{" "}
              is geen toeval. Een pijler draagt gewicht zonder op te vallen —
              precies wat wij voor onze bedrijven en hun klanten willen zijn:
              het stevige fundament waarop zij kunnen bouwen.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col mt-9">
              {pillars.map((pillar) => {
                const Icon = iconMap[pillar.title as keyof typeof iconMap];
                return (
                  <div
                    key={pillar.title}
                    className="group flex items-start gap-[22px] py-[26px] border-t border-line transition-[padding] duration-400 ease hover:pl-2"
                  >
                    <div
                      className={`w-11 h-11 flex items-center justify-center border transition-[border-color,background-color] duration-400 ease group-hover:bg-white/[0.03] group-hover:border-paper ${colorClass[pillar.brandColor]}`}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-[17px] font-semibold mb-1.5 display">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-paper-dim leading-[1.65]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
