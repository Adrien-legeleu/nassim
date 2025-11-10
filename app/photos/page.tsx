'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compare } from '@/components/ui/compare';
import WallHero from '@/components/WallHero';

type BAItem = {
  before: string;
  after: string;
  height: number;
};

const ITEMS: BAItem[] = [
  {
    before: '/voiture-before-1.jpg',
    after: '/voiture-after-1.jpg',
    height: 520,
  },
  { before: '/pro-before-1.webp', after: '/pro-after-1.webp', height: 420 },
  {
    before: '/voiture-before-2.jpg',
    after: '/voiture-after-2.jpg',
    height: 460,
  },
  { before: '/pro-before-2.webp', after: '/pro-after-2.webp', height: 560 },
  {
    before: '/voiture-before-3.jpg',
    after: '/voiture-after-3.jpg',
    height: 380,
  },
  { before: '/pro-before-3.webp', after: '/pro-after-3.webp', height: 480 },
  {
    before: '/voiture-before-4.jpg',
    after: '/voiture-after-4.jpg',
    height: 600,
  },
  { before: '/pro-before-4.webp', after: '/pro-after-4.webp', height: 400 },
  {
    before: '/voiture-before-4.jpg',
    after: '/voiture-after-4.jpg',
    height: 500,
  },
  { before: '/pro-before-5.webp', after: '/pro-after-5.webp', height: 540 },
  {
    before: '/voiture-before-6.jpg',
    after: '/voiture-after-6.jpg',
    height: 420,
  },
  { before: '/pro-before-6.avif', after: '/pro-after-6.avif', height: 460 },
  {
    before: '/voiture-before-7.png',
    after: '/voiture-after-7.png',
    height: 380,
  },
  {
    before: '/voiture-before-8.png',
    after: '/voiture-after-8.png',
    height: 560,
  },
  {
    before: '/voiture-before-9.jpg',
    after: '/voiture-after-9.jpg',
    height: 440,
  },
  { before: '/pro-before-7.avif', after: '/pro-after-7.avif', height: 480 },
];

export default function PhotosWallPage() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax par colonne
  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Répartition 2 colonnes
  const columns2: BAItem[][] = [[], []];
  // Répartition 3 colonnes
  const columns3: BAItem[][] = [[], [], []];

  ITEMS.forEach((item, i) => {
    columns2[i % 2].push(item);
    columns3[i % 3].push(item);
  });

  return (
    <main className="bg-white text-neutral-900 min-h-[100dvh]    overflow-hidden w-full h-full">
      <div className="ribbon-fr">
        <span />
      </div>
      <WallHero
        tagline="Avant / Après"
        title="Le soin du détail, visible en un regard."
        description="Un mur d’exemples concrets : le résultat avant / après, sans artifices. Défilez et comparez."
        ctaText="Réserver un créneau"
        images={[
          '/pro-2.webp',
          '/voiture-2.jpg',
          'voiture-3.jpg',
          '/pro.webp',
          '/voiture.jpg',
          '/voiture-4.png',
          '/pro-after-4.webp',
          '/voiture-5.png',
          '/pro-after-3.webp',
          '/voiture-6.jpg',
          '/voiture-7.png',
        ]}
      />

      {/* WALL PARALLAX AVANT / APRÈS */}
      <section
        ref={sectionRef}
        className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-white via-white to-neutral-50"
      >
        {/* Halo très léger derrière le wall */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full opacity-[0.16] blur-[130px]"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(15,23,42,0.18) 0%, rgba(255,255,255,0) 70%)',
            }}
          />
        </div>

        <div className="relative mx-auto">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Mur d’avant / après
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600">
              Auto & pro, mélangés&nbsp;: chaque bloc se compare en un seul
              geste.
            </p>
          </div>

          {/* MOBILE : 1 colonne (xs uniquement) */}
          <div className="grid gap-6 sm:hidden">
            {ITEMS.map((item, idx) => (
              <BAParallaxCard key={`m-${idx}`} item={item} index={idx} />
            ))}
          </div>

          {/* SM → LG : 2 colonnes avec parallax (columns2) */}
          <div className="hidden sm:grid lg:hidden gap-6 md:gap-8 grid-cols-2">
            {/* Colonne 1 */}
            <motion.div
              style={{ y: col1Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns2[0].map((item, idx) => (
                <BAParallaxCard key={`2c1-${idx}`} item={item} index={idx} />
              ))}
            </motion.div>

            {/* Colonne 2 */}
            <motion.div
              style={{ y: col2Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns2[1].map((item, idx) => (
                <BAParallaxCard key={`2c2-${idx}`} item={item} index={idx} />
              ))}
            </motion.div>
          </div>

          {/* LG+ : 3 colonnes comme avant (columns3) */}
          <div className="hidden lg:grid gap-6 md:gap-8 lg:grid-cols-3">
            {/* Colonne 1 */}
            <motion.div
              style={{ y: col1Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns3[0].map((item, idx) => (
                <BAParallaxCard key={`3c1-${idx}`} item={item} index={idx} />
              ))}
            </motion.div>

            {/* Colonne 2 (avec léger décalage si tu veux) */}
            <motion.div
              style={{ y: col2Y }}
              className="flex flex-col gap-6 md:gap-8 pb-96 relative"
            >
              {columns3[1].map((item, idx) => (
                <BAParallaxCard key={`3c2-${idx}`} item={item} index={idx} />
              ))}
            </motion.div>

            {/* Colonne 3 */}
            <motion.div
              style={{ y: col3Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns3[2].map((item, idx) => (
                <BAParallaxCard key={`3c3-${idx}`} item={item} index={idx} />
              ))}
            </motion.div>
          </div>

          {/* CTA bas de page */}
          <div className="mt-20 lg:mt-10 flex justify-center">
            <a
              href="/#reservation"
              className="inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-medium h-11 px-6 hover:opacity-90 transition shadow-[0_18px_50px_-15px_rgba(37,99,235,0.55)]"
            >
              Réserver
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ====== Carte Avant / Après ====== */

function BAParallaxCard({ item, index }: { item: BAItem; index: number }) {
  // cycle: 0 → blue, 1 → red, 2 → neutral
  const tone = index % 3;

  const toneClasses =
    tone === 0
      ? {
          wrapper:
            'bg-blue-100/90 border-blue-200/70 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.15)]',
          label: 'text-blue-800/80',
        }
      : tone === 1
      ? {
          wrapper:
            'bg-red-100/90 border-red-200/70 shadow-[0_30px_80px_-30px_rgba(239,68,68,0.15)]',
          label: 'text-red-800/80',
        }
      : {
          wrapper:
            'bg-neutral-100/90 border-neutral-200/80 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.15)]',
          label: 'text-neutral-700/80',
        };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={[
        'rounded-[3.2rem] border overflow-hidden p-0.5',
        'backdrop-blur-[2px]',
        toneClasses.wrapper,
      ].join(' ')}
    >
      <div
        className="relative rounded-[3rem] overflow-hidden bg-white"
        style={{ height: item.height }}
      >
        <Compare
          firstImage={item.before}
          secondImage={item.after}
          className="w-full h-full rounded-[2rem]"
          firstImageClassName="object-cover w-full h-full"
          secondImageClassname="object-cover w-full h-full"
          slideMode="hover"
          autoplay={false}
        />
      </div>
    </motion.article>
  );
}
