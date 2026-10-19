import type { Company } from "./site";

export type Locale = "nl" | "ar";

type CompanyCopy = { tag: string; description: string };
type PillarCopy = { title: string; description: string };
type WhyCopy = { tag: string; title: string; description: string };

export type Dict = {
  locale: Locale;
  lang: string;
  dir: "ltr" | "rtl";
  ogLocale: string;
  /** Path of this locale's home page. */
  home: string;
  /** Arrow pointing "forward" in reading direction. */
  arrow: string;
  /** Arrow for external links. */
  externalArrow: string;
  meta: { title: string; description: string; keywords: string[] };
  tagline: string;
  nav: { verhaal: string; bedrijven: string; waarom: string; contact: string };
  header: {
    sub: string;
    contact: string;
    switchLabel: string;
    switchHref: string;
    switchLang: string;
  };
  hero: {
    badge: string;
    cornerStart: string;
    cornerEnd: string;
    title: string;
    titleAccent: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  story: {
    label: string;
    title: string;
    /** Paragraphs; text between ** is shown bold. */
    paragraphs: string[];
    pillars: [PillarCopy, PillarCopy, PillarCopy];
  };
  companies: {
    label: string;
    title: string;
    sub: string;
    items: Record<Company["slug"], CompanyCopy>;
  };
  why: { label: string; title: string; cards: [WhyCopy, WhyCopy, WhyCopy] };
  contact: { label: string; title: string; text: string; viewCompanies: string };
  footer: {
    rights: string;
    privacy: string;
    kvk: string;
    vat: string;
  };
};

const nl: Dict = {
  locale: "nl",
  lang: "nl",
  dir: "ltr",
  ogLocale: "nl_NL",
  home: "/",
  arrow: "→",
  externalArrow: "↗",
  meta: {
    title:
      "Pijler Groep — Holding van Verkeersplus, VCA Veilig & Vakkundig en Netjes & Klaar",
    description:
      "Pijler Groep is de holding achter Verkeersplus Services, VCA Veilig & Vakkundig en Netjes & Klaar — drie bedrijven, één fundament.",
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
  },
  tagline: "Eén fundament. Drie bedrijven die de klus klaren.",
  nav: {
    verhaal: "Ons verhaal",
    bedrijven: "Bedrijven",
    waarom: "Waarom Pijler",
    contact: "Contact",
  },
  header: {
    sub: "Holding · Sinds 2025",
    contact: "Neem contact op",
    switchLabel: "العربية",
    switchHref: "/ar",
    switchLang: "ar",
  },
  hero: {
    badge: "Holding · 3 werkmaatschappijen",
    cornerStart: "SINDS 2025 · NL",
    cornerEnd: "HOLDING B.V.",
    title: "Eén fundament.",
    titleAccent: "Drie bedrijven die de klus klaren.",
    intro:
      "Pijler Groep is de holding achter Verkeersplus Services, VCA Veilig & Vakkundig en Netjes & Klaar — drie zelfstandige bedrijven, gebouwd op dezelfde pijlers: vakmanschap, betrouwbaarheid en snel schakelen.",
    ctaPrimary: "Bekijk onze bedrijven",
    ctaSecondary: "Ons verhaal",
    scroll: "SCROLL",
  },
  story: {
    label: "Ons verhaal",
    title: "Niet bedacht vanachter een bureau — opgebouwd op de werkvloer.",
    paragraphs: [
      "Pijler Groep begon niet als een holding op papier, maar als een aantal mensen die hetzelfde probleem steeds weer tegenkwamen: bedrijven die goed werk leveren, maar die het lastig vinden om op te schalen zonder hun kwaliteit te verliezen.",
      "Daarom brachten we drie specialismen onder één dak — **verkeersregelaars en verkeersmaatregelen** bij Verkeersplus Services, **VCA-certificering en opleidingen** bij VCA Veilig & Vakkundig, en **professionele reiniging** bij Netjes & Klaar. Elk bedrijf blijft zelfstandig en specialistisch, maar leunt op dezelfde pijlers van de groep: korte lijnen, eerlijk werk en mensen die weten waar ze het over hebben.",
      "De naam **Pijler** is geen toeval. Een pijler draagt gewicht zonder op te vallen — precies wat wij voor onze bedrijven en hun klanten willen zijn: het stevige fundament waarop zij kunnen bouwen.",
    ],
    pillars: [
      {
        title: "Vakmanschap",
        description:
          "Elk bedrijf in de groep wordt geleid door mensen met echte ervaring in het vak, niet alleen op papier.",
      },
      {
        title: "Betrouwbaarheid",
        description:
          "Afspraak is afspraak. Onze bedrijven staan erom bekend dat ze doen wat ze zeggen — en op tijd.",
      },
      {
        title: "Samen sterker",
        description:
          "Drie bedrijven die elkaar versterken: dezelfde klanten, dezelfde projecten, complementaire diensten.",
      },
    ],
  },
  companies: {
    label: "Onze bedrijven",
    title: "Drie merken. Eén groep.",
    sub: "Elk bedrijf binnen Pijler Groep is zelfstandig en gespecialiseerd — samen dekken we een groot deel van wat opdrachtgevers in de bouw, infra- en evenementenwereld nodig hebben.",
    items: {
      verkeersplus: {
        tag: "Verkeersregelaars",
        description:
          "Gecertificeerde verkeersregelaars en verkeersmaatregelen voor wegwerkzaamheden, evenementen en calamiteiten — 24/7 landelijk inzetbaar.",
      },
      vca: {
        tag: "Opleidingen & certificering",
        description:
          "VCA-cursussen en verkeersregelaarscertificering, praktijkgericht opgeleid zodat mensen direct inzetbaar zijn op de werkvloer.",
      },
      netjes: {
        tag: "Professionele reiniging",
        description:
          "Reiniging van bouwlocaties, evenemententerreinen en bedrijfspanden — netjes opgeleverd, elke keer weer.",
      },
    },
  },
  why: {
    label: "Waarom Pijler Groep",
    title: "Eén groep werkt anders dan drie losse leveranciers.",
    cards: [
      {
        tag: "Eén aanspreekpunt",
        title: "Minder schakels",
        description:
          "Verkeersregelaars nodig, personeel certificeren én de locatie schoon opgeleverd hebben? Dat kan via drie gesprekken, of via één telefoontje naar de groep.",
      },
      {
        tag: "Gedeelde standaard",
        title: "Zelfde kwaliteitsniveau",
        description:
          "Alle drie de bedrijven werken volgens dezelfde pijlers: vakmanschap, betrouwbaarheid en korte lijnen. Geen verrassingen tussen bedrijven onderling.",
      },
      {
        tag: "Lange termijn",
        title: "Gebouwd om te blijven",
        description:
          "Pijler Groep investeert in haar bedrijven voor de lange termijn — niet om snel te verkopen, maar om drie merken te laten groeien.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Op zoek naar één van onze bedrijven, of wil je de groep spreken?",
    text: "Neem contact op met Pijler Groep, of ga direct naar het bedrijf dat je nodig hebt.",
    viewCompanies: "Bekijk bedrijven",
  },
  footer: {
    rights: "Alle rechten voorbehouden",
    privacy: "Privacyverklaring",
    kvk: "KvK",
    vat: "btw",
  },
};

const ar: Dict = {
  locale: "ar",
  lang: "ar",
  dir: "rtl",
  ogLocale: "ar_AR",
  home: "/ar",
  arrow: "←",
  externalArrow: "↖",
  meta: {
    title:
      "Pijler Groep — الشركة القابضة لـ Verkeersplus وVCA Veilig & Vakkundig وNetjes & Klaar",
    description:
      "Pijler Groep هي الشركة القابضة التي تضم Verkeersplus Services وVCA Veilig & Vakkundig وNetjes & Klaar — ثلاث شركات، وأساس واحد.",
    keywords: [
      "Pijler Groep",
      "شركة قابضة",
      "منظمو حركة المرور",
      "شهادة VCA",
      "دورات VCA",
      "تنظيف مهني",
      "هولندا",
    ],
  },
  tagline: "أساس واحد. ثلاث شركات تُنجز المهمة.",
  nav: {
    verhaal: "قصتنا",
    bedrijven: "شركاتنا",
    waarom: "لماذا Pijler",
    contact: "تواصل معنا",
  },
  header: {
    sub: "شركة قابضة · منذ 2025",
    contact: "تواصل معنا",
    switchLabel: "Nederlands",
    switchHref: "/",
    switchLang: "nl",
  },
  hero: {
    badge: "شركة قابضة · 3 شركات تابعة",
    cornerStart: "منذ 2025 · هولندا",
    cornerEnd: "HOLDING B.V.",
    title: "أساس واحد.",
    titleAccent: "ثلاث شركات تُنجز المهمة.",
    intro:
      "Pijler Groep هي الشركة القابضة التي تضم Verkeersplus Services وVCA Veilig & Vakkundig وNetjes & Klaar — ثلاث شركات مستقلة، قائمة على الركائز نفسها: الحِرفية، والموثوقية، وسرعة الإنجاز.",
    ctaPrimary: "تعرّف على شركاتنا",
    ctaSecondary: "قصتنا",
    scroll: "مرّر للأسفل",
  },
  story: {
    label: "قصتنا",
    title: "لم نُصمَّم خلف المكاتب — بل بُنينا في ميدان العمل.",
    paragraphs: [
      "لم تبدأ Pijler Groep شركةً قابضة على الورق، بل بدأت بمجموعة من الأشخاص واجهوا المشكلة نفسها مرارًا: شركات تقدّم عملًا جيدًا، لكنها تجد صعوبة في التوسّع دون أن تفقد جودتها.",
      "لذلك جمعنا ثلاثة تخصصات تحت سقف واحد — **تنظيم حركة المرور وإجراءات السلامة المرورية** لدى Verkeersplus Services، و**شهادات VCA والتدريب** لدى VCA Veilig & Vakkundig، و**التنظيف المهني** لدى Netjes & Klaar. تبقى كل شركة مستقلة ومتخصصة، لكنها تستند إلى ركائز المجموعة نفسها: تواصل مباشر، وعمل نزيه، وأشخاص يعرفون ما يتحدثون عنه.",
      "واسم **Pijler** (ويعني «الركيزة» بالهولندية) ليس صدفة. فالركيزة تحمل الثقل دون أن تلفت الأنظار — وهذا بالضبط ما نريد أن نكونه لشركاتنا ولعملائها: الأساس المتين الذي يبنون عليه.",
    ],
    pillars: [
      {
        title: "الحِرفية",
        description:
          "يقود كلَّ شركة في المجموعة أشخاصٌ يملكون خبرة حقيقية في المجال، لا على الورق فقط.",
      },
      {
        title: "الموثوقية",
        description:
          "الوعد وعد. تُعرف شركاتنا بأنها تفعل ما تقول — وفي الوقت المحدد.",
      },
      {
        title: "أقوى معًا",
        description:
          "ثلاث شركات يُكمّل بعضها بعضًا: العملاء أنفسهم، والمشاريع نفسها، وخدمات متكاملة.",
      },
    ],
  },
  companies: {
    label: "شركاتنا",
    title: "ثلاث علامات. مجموعة واحدة.",
    sub: "كل شركة ضمن Pijler Groep مستقلة ومتخصصة — ومعًا نغطي جزءًا كبيرًا مما يحتاجه العملاء في قطاعات البناء والبنية التحتية والفعاليات.",
    items: {
      verkeersplus: {
        tag: "منظّمو حركة المرور",
        description:
          "منظّمو حركة مرور معتمَدون وإجراءات مرورية لأعمال الطرق والفعاليات وحالات الطوارئ — متاحون على مدار الساعة في جميع أنحاء هولندا.",
      },
      vca: {
        tag: "التدريب والشهادات",
        description:
          "دورات VCA وشهادات منظّمي حركة المرور، بتدريب عملي يجعل المتدرّبين جاهزين للعمل في الموقع فورًا.",
      },
      netjes: {
        tag: "التنظيف المهني",
        description:
          "تنظيف مواقع البناء وساحات الفعاليات ومباني الشركات — تسليم نظيف ومرتّب في كل مرة.",
      },
    },
  },
  why: {
    label: "لماذا Pijler Groep",
    title: "مجموعة واحدة تعمل بشكل مختلف عن ثلاثة مورّدين منفصلين.",
    cards: [
      {
        tag: "جهة تواصل واحدة",
        title: "حلقات أقل",
        description:
          "تحتاج إلى منظّمي حركة مرور، وتأهيل موظفيك، وتسليم الموقع نظيفًا؟ يمكنك ذلك عبر ثلاث محادثات، أو عبر اتصال واحد بالمجموعة.",
      },
      {
        tag: "معيار مشترك",
        title: "مستوى الجودة نفسه",
        description:
          "تعمل الشركات الثلاث وفق الركائز نفسها: الحِرفية، والموثوقية، والتواصل المباشر. لا مفاجآت بين شركة وأخرى.",
      },
      {
        tag: "على المدى الطويل",
        title: "بُنيت لتبقى",
        description:
          "تستثمر Pijler Groep في شركاتها على المدى الطويل — لا لبيعها سريعًا، بل لتنمية ثلاث علامات تجارية.",
      },
    ],
  },
  contact: {
    label: "تواصل معنا",
    title: "تبحث عن إحدى شركاتنا، أو تودّ التحدث مع المجموعة؟",
    text: "تواصل مع Pijler Groep، أو توجّه مباشرةً إلى الشركة التي تحتاجها.",
    viewCompanies: "تعرّف على الشركات",
  },
  footer: {
    rights: "جميع الحقوق محفوظة",
    privacy: "سياسة الخصوصية (بالهولندية)",
    kvk: "السجل التجاري (KvK)",
    vat: "الرقم الضريبي (btw)",
  },
};

export const dictionaries: Record<Locale, Dict> = { nl, ar };
