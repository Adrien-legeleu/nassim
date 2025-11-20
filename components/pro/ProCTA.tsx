// components/ProCTA.tsx
'use client';

import { CalendlyInlineWidget } from '@/components/shared/CalendlyInlineWidget';

export default function ProCTA() {
  return (
    <section className="relative bg-white text-neutral-900 py-24 md:py-32 px-5">
      <div className="mx-auto max-w-[1200px] relative space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Réserve ton appel en 30 secondes
        </h2>

        <CalendlyInlineWidget url="https://calendly.com/contact-nettoyageriviera/30min" />
      </div>
    </section>
  );
}
