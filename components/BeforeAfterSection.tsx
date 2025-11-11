'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compare } from '@/components/ui/compare';

export default function BeforeAfterSection() {
  return (
    <section className="relative py-24 md:py-32 px-5 bg-white">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 mb-6 shadow-2xl shadow-black/8">
            <span className="text-sm font-medium text-neutral-800">
              Résultats Avant/Après
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Des transformations spectaculaires
          </h2>
          <p className="text-neutral-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Auto & espaces professionnels : découvrez la différence avant/après
            sur nos prestations premium.
          </p>
        </motion.div>

        {/* Grille bento avec radial overlay */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-6 md:gap-8">
            {/* Bloc A (gauche, grand) - Auto */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-[320px] min-h-[320px] md:min-h-[420px]"
              before="/voiture-before-8.png"
              after="/voiture-after-8.png"
              delay={0}
            />

            {/* Bloc B (droite, moyen) - Auto */}
            <CardCompare
              className="md:row-span-2 md:col-span-1 max-md:min-h-[200px] min-h-[200px] md:min-h-[250px]"
              before="/voiture-before-7.png"
              after="/voiture-after-7.png"
              delay={0.1}
            />

            {/* Bloc C (gauche, moyen) - Auto */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-[220px] min-h-[220px] md:min-h-[280px]"
              before="/voiture-before-6.jpg"
              after="/voiture-after-6.jpg"
              delay={0.2}
            />

            {/* Bloc D (droite, grand) - Auto */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-[320px] min-h-[320px] md:min-h-[420px]"
              before="/voiture-before-9.jpg"
              after="/voiture-after-9.jpg"
              delay={0.3}
            />
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-14 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/photos"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-2xl shadow-black/8 hover:shadow-black/12"
          >
            Voir plus de réalisations
          </Link>
          <Link
            href="/auto"
            className="inline-flex items-center justify-center rounded-full border-2 border-neutral-200 bg-white px-8 py-4 text-sm font-medium text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 transition shadow-2xl shadow-black/8"
          >
            Découvrir nos services auto
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
      initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={[
        'rounded-[3.2rem]',
        'border border-black/[0.04]',
        'overflow-hidden shadow-2xl shadow-black/8',
        'p-0.5 flex',
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
