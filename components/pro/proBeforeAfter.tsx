'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compare } from '@/components/ui/compare';

export default function ProBeforeAfter() {
  return (
    <section className="relative pt-24 md:pt-32 px-5">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-[2rem] md:text-4xl font-semibold text-black tracking-tight">
            Avant / Après — Espaces Pro
          </h2>
          <p className="text-black/60 mt-3 text-sm md:text-base">
            Vitrines, encadrements, sols : le résultat est visible au premier
            regard.
          </p>
        </motion.div>

        {/* Grille bento */}
        <div className="relative rounded-[3rem]">
          {/* Overlay radial blanc autour des cartes */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-30 rounded-[3rem]"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.3) 85%, rgba(255,255,255,0.7) 95%, rgba(255,255,255,1) 98%)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-6 md:gap-8">
            {/* Bloc A (gauche, grand) */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 bg-blue-200 min-h-[320px] md:min-h-[420px]"
              before="/pro-before-4.webp"
              after="/pro-after-4.webp"
              delay={0}
            />

            {/* Bloc B (droite, moyen) */}
            <CardCompare
              className="md:row-span-2 md:col-span-1 bg-red-200 min-h-[200px] md:min-h-[250px]"
              before="/pro-before-2.webp"
              after="/pro-after-2.webp"
              delay={0.1}
            />

            {/* Bloc C (gauche, moyen) */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 bg-red-200 min-h-[220px] md:min-h-[280px]"
              before="/pro-before-6.avif"
              after="/pro-after-6.avif"
              delay={0.2}
            />

            {/* Bloc D (droite, grand) */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 bg-neutral-200 min-h-[320px] md:min-h-[420px]"
              before="/pro-before-1.webp"
              after="/pro-after-1.webp"
              delay={0.3}
            />
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/photos"
            className="rounded-full px-8 py-3 text-sm font-medium bg-primary text-white hover:opacity-90 transition shadow-[0_0_25px_-10px_rgba(0,0,0,0.2)]"
          >
            Voir plus de réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CardCompare({
  className = '',
  before,
  after,
  delay = 0,
}: {
  className?: string;
  before: string;
  after: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={[
        'rounded-[3.2rem]',
        'border border-black/[0.04]',
        'overflow-hidden shadow-[0_-40px_80px_-20px_rgba(15,23,42,0.1)]',
        'p-1.5 flex',
        className,
      ].join(' ')}
    >
      <Compare
        firstImage={before}
        secondImage={after}
        firstImageClassName="object-cover w-full h-full"
        secondImageClassname="object-cover w-full h-full"
        className="rounded-[3rem] w-full h-full"
        slideMode="hover"
      />
    </motion.div>
  );
}
