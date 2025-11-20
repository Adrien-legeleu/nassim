'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// ✅ On déclare proprement le type de window.Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
    };
  }
}

export default function ProCTA() {
  useEffect(() => {
    // ✅ Ré-init à chaque fois que le composant est monté (navigation SPA)
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initInlineWidgets();
    }
  }, []);

  return (
    <section className="relative bg-white text-neutral-900 py-24 md:py-32 px-5">
      <div className="mx-auto max-w-[1200px] relative space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Réserve ton appel en 30 secondes
        </h2>

        {/* Calendly container */}
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/contact-nettoyageriviera/30min"
          style={{ minWidth: '320px', height: '700px' }}
        />

        {/* Script Calendly */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== 'undefined' && window.Calendly) {
              window.Calendly.initInlineWidgets();
            }
          }}
        />
      </div>
    </section>
  );
}
