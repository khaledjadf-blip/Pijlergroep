import { Hero } from "./Hero";
import { StorySection } from "./StorySection";
import { CompaniesSection } from "./CompaniesSection";
import { WhySection } from "./WhySection";
import { ContactCTA } from "./ContactCTA";
import type { Dict } from "@/data/i18n";

export function HomePage({ t }: { t: Dict }) {
  return (
    <>
      <Hero t={t} />
      <StorySection t={t} />
      <CompaniesSection t={t} />
      <WhySection t={t} />
      <ContactCTA t={t} />
    </>
  );
}
