export const dynamic = 'force-static';

import ProHero from '@/components/pro/ProHero';

import ProProcess from '@/components/pro/ProProcess';
import ProCTA from '@/components/pro/ProCTA';
import ProServicesBento from '@/components/pro/ProServicesbento';
import ProBeforeAfter from '@/components/pro/proBeforeAfter';

export default function ProPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-secondary text-light">
      <ProHero />
      <ProBeforeAfter />
      <section>
        <div className="mx-auto w-full  space-y-16">
          <ProServicesBento />
        </div>
      </section>
      <ProProcess />
      <ProCTA />
    </main>
  );
}
