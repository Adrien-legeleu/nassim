import HeroSplit from '@/components/HeroSplit';
import ExpertiseSection from '@/components/ExpertiseSection';
import InfoSection from '@/components/InfoSection';
import ProjectsSection from '@/components/ProjectsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <div className="overflow-hidden w-full h-full">
      <HeroSplit />
      <ExpertiseSection />
      <InfoSection />
      <ProjectsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
