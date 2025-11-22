import HeroSplit from '@/components/HeroSplit';
import ExpertiseSection from '@/components/ExpertiseSection';
import ServicesComparisonTable from '@/components/ServicesComparisonTable';
import InfoSection from '@/components/InfoSection';
import ProjectsSection from '@/components/ProjectsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import HomePricingSection from '@/components/HomePricingSection';

export default function HomePage() {
  return (
    <div className="overflow-hidden w-full bg-neutral-950 h-full">
      <HeroSplit />
      <ExpertiseSection />
      <ServicesComparisonTable />
      <InfoSection />
      <HomePricingSection />
      <ProjectsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
