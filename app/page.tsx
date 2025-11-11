import ModernHero from '@/components/ModernHero';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ModernServices from '@/components/ModernServices';
import TestimonialsSection from '@/components/TestimonialsSection';
import ModernCTA from '@/components/ModernCTA';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <div className="overflow-hidden w-full">
      <ModernHero />
      <BeforeAfterSection />
      <WhyChooseUs />
      <ModernServices />
      <TestimonialsSection />
      <ModernCTA />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
