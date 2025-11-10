// app/auto/page.tsx
import AutoBeforeAfter from '@/components/auto/AutoBeforeAfter';
import AutoCTA from '@/components/auto/AutoCTA';
import AutoHero from '@/components/auto/AutoHero';
import AutoProcess from '@/components/auto/AutoProcess';
import AutoServicesBento from '@/components/auto/AutoServicebento';

export default function AutoPage() {
  return (
    <main className="bg-secondary w-full overflow-hidden  text-light">
      <AutoHero />

      <section className=" mx-auto w-full ">
        <AutoBeforeAfter />
      </section>

      <section className="mx-auto  w-full ">
        <AutoServicesBento />
      </section>

      <section className=" mx-auto w-full ">
        <AutoProcess />
      </section>

      <AutoCTA />
    </main>
  );
}
