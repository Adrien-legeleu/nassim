import ExpertiseSection from '@/components/ExpertiseSection';
import FinalCTA from '@/components/FinalCTA';
import HeroSplit from '@/components/HeroSplit';
import ProjectsSection from '@/components/ProjectsSection';

export default function HomePage() {
  return (
    <div className="overflow-hidden w-full h-full">
      <HeroSplit />
      <ExpertiseSection />
      <ProjectsSection />
      <FinalCTA />
    </div>
  );
}
