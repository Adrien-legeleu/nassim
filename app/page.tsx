import ExpertiseSection from '@/components/ExpertiseSection';
import FinalCTA from '@/components/FinalCTA';
import HeroSplit from '@/components/HeroSplit';
import ProjectsSection from '@/components/ProjectsSection';

export default function HomePage() {
  return (
    <>
      <HeroSplit />
      <ExpertiseSection />
      <ProjectsSection />
      <FinalCTA />
    </>
  );
}
