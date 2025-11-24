'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compare } from '@/components/ui/compare';

export default function BeforeAfterSection() {
  return (
    <section className="relative py-24 md:py-32 px-5 bg-gradient-to-b from-white via-blue-500/[0.01] to-white">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08] blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(0,85,164,0.15) 0%, rgba(255,255,255,0) 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-600 text-xs md:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Résultats Avant/Après
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-center mb-14"
        >
          <h2 className="text-[2rem] md:text-5xl font-bold text-neutral-900 tracking-tight">
            Des transformations{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              spectaculaires
            </span>
          </h2>
          <p className="text-neutral-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Découvrez la différence avant/après sur nos prestations automobiles
            et professionnelles. Qualité et précision à chaque intervention.
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

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-6 md:gap-8">
            {/* Bloc A (gauche, grand) - Auto */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-140 bg-blue-200 min-h-[320px] md:min-h-[420px]"
              before="/voiture-before-8.png"
              after="/voiture-after-8.png"
              delay={0}
            />

            {/* Bloc B (droite, moyen) - Pro */}
            <CardCompare
              className="md:row-span-2 md:col-span-1 max-md:min-h-120 bg-red-200 min-h-[200px] md:min-h-[250px]"
              before="/pro-before-8.png"
              after="/pro-after-9.png"
              delay={0.1}
            />

            {/* Bloc C (gauche, moyen) - Pro */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-100 bg-red-200 min-h-[220px] md:min-h-[280px]"
              before="/pro-before-6.avif"
              after="/pro-after-6.avif"
              delay={0.2}
            />

            {/* Bloc D (droite, grand) - Auto */}
            <CardCompare
              className="md:row-span-3 md:col-span-1 max-md:min-h-110 bg-neutral-200 min-h-[320px] md:min-h-[420px]"
              before="/voiture-before-9.jpg"
              after="/voiture-after-9.jpg"
              delay={0.3}
            />
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/photos"
            className="rounded-[2rem] px-8 py-3.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20 hover:shadow-blue-600/30 hover:scale-[1.02] duration-300"
          >
            Voir plus de réalisations
          </Link>
          <Link
            href="/auto"
            className="rounded-[2rem] px-8 py-3.5 text-sm font-medium bg-white text-blue-600 border-2 border-blue-600/20 hover:border-blue-600/40 hover:bg-blue-50 transition-all shadow-2xl shadow-black/5 hover:shadow-black/8 hover:scale-[1.02] duration-300"
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={[
        'rounded-[3.2rem]',
        'border border-black/[0.04]',
        'overflow-hidden shadow-2xl shadow-black/8',
        'hover:shadow-black/12 transition-all duration-300',
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
