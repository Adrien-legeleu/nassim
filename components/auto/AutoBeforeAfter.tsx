'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compare } from '@/components/ui/compare';

export default function AutoBeforeAfter() {
  return (
    <section className="relative py-24 bg-black md:py-32  px-5">
      {/* Glow + vignette globale */}

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-[2rem] md:text-4xl font-semibold text-neutral-100 tracking-tight">
            Avant / Après — Detailing Auto
          </h2>
          <p className="text-neutral-200 mt-3 text-sm md:text-base">
            Jantes, sièges, plastiques, carrosserie&nbsp;: le avant / après se
            voit au premier regard.
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
                'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 70%,rgba(0,0,0,0.3) 85%,  rgba(0,0,0,0.7) 95%, rgba(0,0,0,1) 98%)',
            }}
          />
          <div className="grid  grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-6 md:gap-8">
            {/* Bloc A (gauche, grand) */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-140 bg-blue-950 min-h-[320px] md:min-h-[420px]"
              before="/voiture-before-8.png"
              after="/voiture-after-8.png"
              delay={0}
            />
            <CardCompare
              className="md:row-span-2 md:col-span-1 max-md:min-h-110 bg-neutral-900 min-h-[320px] md:min-h-[420px]"
              before="/voiture-before-10.png"
              after="/voiture-after-10.png"
              delay={0.3}
            />
            {/* Bloc B (droite, moyen) */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-120 bg-red-950 min-h-[200px] md:min-h-[250px]"
              before="/voiture-before-7.png"
              after="/voiture-after-7.png"
              delay={0.1}
            />

            {/* Bloc C (gauche, moyen) */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-100 bg-red-950/70 min-h-[220px] md:min-h-[280px]"
              before="/voiture-before-6.jpg"
              after="/voiture-after-6.jpg"
              delay={0.2}
            />

            {/* Bloc D (droite, grand) */}
            <CardCompare
              className="md:row-span-4 md:col-span-1 max-md:min-h-110 bg-neutral-900 min-h-[320px] md:min-h-[420px]"
              before="/voiture-before-9.jpg"
              after="/voiture-after-9.jpg"
              delay={0.3}
            />

            <CardCompare
              className="md:row-span-4 md:col-span-1 max-md:min-h-150 bg-neutral-900 min-h-[3520px] md:min-h-[620px]"
              before="/voiture-before-11.png"
              after="/voiture-after-11.png"
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

/* ====== CardCompare ====== */
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
        'p-[1px] flex',
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
