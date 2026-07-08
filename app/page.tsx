import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { CompaniesSection } from "@/components/CompaniesSection";
import { WhySection } from "@/components/WhySection";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <CompaniesSection />
      <WhySection />
      <ContactCTA />
    </>
  );
}
