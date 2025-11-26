'use client';

import { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compare } from '@/components/ui/compare';
import WallHero from '@/components/WallHero';

type BAItem = {
  before: string;
  after: string;
  height: number;
  category: 'voiture' | 'pro';
};

type TabFilter = 'all' | 'voiture' | 'pro';

function GlowMobile() {
  return (
    <div className="absolute inset-x-0 -top-10 pointer-events-none z-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 0.9, y: 0, scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-[120vw] h-[50vh]"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(0,85,164,0.55) 0%, rgba(0,85,164,0.45) 35%, rgba(0,85,164,0.25) 55%, transparent 75%)',
          filter: 'blur(48px)',
          transform: 'translateY(-10px)',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="absolute inset-x-0 top-0 h-28"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,85,164,0.35), rgba(0,85,164,0.18) 35%, rgba(0,85,164,0.2) 65%, transparent)',
          filter: 'blur(16px)',
        }}
      />
    </div>
  );
}

const ITEMS: BAItem[] = [
  {
    before: '/voiture-before-1.jpg',
    after: '/voiture-after-1.jpg',
    height: 520,
    category: 'voiture',
  },
  {
    before: '/pro-before-11.png',
    after: '/pro-after-11.png',
    height: 480,
    category: 'pro',
  },
  {
    before: '/voiture-before-10.png',
    after: '/voiture-after-10.png',
    height: 260,
    category: 'voiture',
  },
  {
    before: '/pro-before-1.webp',
    after: '/pro-after-1.webp',
    height: 420,
    category: 'pro',
  },
  {
    before: '/voiture-before-2.jpg',
    after: '/voiture-after-2.jpg',
    height: 460,
    category: 'voiture',
  },
  {
    before: '/pro-before-2.webp',
    after: '/pro-after-2.webp',
    height: 560,
    category: 'pro',
  },
  {
    before: '/voiture-before-3.jpg',
    after: '/voiture-after-3.jpg',
    height: 380,
    category: 'voiture',
  },
  {
    before: '/pro-before-10.png',
    after: '/pro-after-10.png',
    height: 480,
    category: 'pro',
  },

  {
    before: '/voiture-before-11.png',
    after: '/voiture-after-11.png',
    height: 600,
    category: 'voiture',
  },
  {
    before: '/pro-before-3.webp',
    after: '/pro-after-3.webp',
    height: 480,
    category: 'pro',
  },
  {
    before: '/voiture-before-4.jpg',
    after: '/voiture-after-4.jpg',
    height: 600,
    category: 'voiture',
  },
  {
    before: '/pro-before-4.webp',
    after: '/pro-after-4.webp',
    height: 400,
    category: 'pro',
  },
  {
    before: '/voiture-before-5.jpg',
    after: '/voiture-after-5.jpg',
    height: 500,
    category: 'voiture',
  },
  {
    before: '/pro-before-5.webp',
    after: '/pro-after-5.webp',
    height: 540,
    category: 'pro',
  },
  {
    before: '/voiture-before-6.jpg',
    after: '/voiture-after-6.jpg',
    height: 420,
    category: 'voiture',
  },
  {
    before: '/pro-before-6.avif',
    after: '/pro-after-6.avif',
    height: 460,
    category: 'pro',
  },
  {
    before: '/pro-before-9.png',
    after: '/pro-after-9.png',
    height: 480,
    category: 'pro',
  },

  {
    before: '/voiture-before-7.png',
    after: '/voiture-after-7.png',
    height: 380,
    category: 'voiture',
  },
  {
    before: '/pro-before-8.png',
    after: '/pro-after-8.png',
    height: 480,
    category: 'pro',
  },

  {
    before: '/voiture-before-8.png',
    after: '/voiture-after-8.png',
    height: 560,
    category: 'voiture',
  },
  {
    before: '/voiture-before-9.jpg',
    after: '/voiture-after-9.jpg',
    height: 440,
    category: 'voiture',
  },
  {
    before: '/pro-before-7.avif',
    after: '/pro-after-7.avif',
    height: 480,
    category: 'pro',
  },
];

const TABS: { value: TabFilter; label: string; icon: string }[] = [
  { value: 'all', label: 'Tous', icon: '✦' },
  { value: 'voiture', label: 'Voitures', icon: '' },
  { value: 'pro', label: 'Pro / Locaux', icon: '' },
];

export default function PhotosWallPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<TabFilter>('all');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax par colonne
  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Filtrer les items selon le tab actif
  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return ITEMS;
    return ITEMS.filter((item) => item.category === activeTab);
  }, [activeTab]);

  // Répartition 2 colonnes
  const columns2: BAItem[][] = useMemo(() => {
    const cols: BAItem[][] = [[], []];
    filteredItems.forEach((item, i) => {
      cols[i % 2].push(item);
    });
    return cols;
  }, [filteredItems]);

  // Répartition 3 colonnes
  const columns3: BAItem[][] = useMemo(() => {
    const cols: BAItem[][] = [[], [], []];
    filteredItems.forEach((item, i) => {
      cols[i % 3].push(item);
    });
    return cols;
  }, [filteredItems]);

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-[100dvh] overflow-hidden w-full h-full">
      <div className="ribbon-fr">
        <span />
      </div>
      <GlowMobile />
      <WallHero
        tagline="Avant / Après"
        title="Le soin du détail, visible en un regard."
        description="Un mur d'exemples concrets : le résultat avant / après, sans artifices. Défilez et comparez."
        ctaText="Réserver un créneau"
        images={[
          '/pro-2.webp',
          '/voiture-2.jpg',
          '/voiture-3.jpg',
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
        className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-black via-black to-neutral-950"
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
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-neutral-100 tracking-tight">
              Mur d'avant / après
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-200">
              Auto & pro, mélangés&nbsp;: chaque bloc se compare en un seul
              geste.
            </p>
          </div>

          {/* TABS */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-neutral-900/80 border border-neutral-800/60 backdrop-blur-sm">
              {TABS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={[
                    'relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                    'flex items-center gap-2',
                    activeTab === tab.value
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-neutral-200',
                  ].join(' ')}
                >
                  {activeTab === tab.value && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compteur */}
          <div className="text-center mb-8">
            <motion.p
              key={filteredItems.length}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-neutral-500"
            >
              {filteredItems.length} résultat
              {filteredItems.length > 1 ? 's' : ''}
            </motion.p>
          </div>

          {/* MOBILE : 1 colonne (xs uniquement) */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 sm:hidden"
          >
            {filteredItems.map((item, idx) => (
              <BAParallaxCard
                key={`m-${item.before}`}
                item={item}
                index={idx}
              />
            ))}
          </motion.div>

          {/* SM → LG : 2 colonnes avec parallax (columns2) */}
          <motion.div
            key={`2col-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:grid lg:hidden gap-6 md:gap-8 grid-cols-2"
          >
            {/* Colonne 1 */}
            <motion.div
              style={{ y: col1Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns2[0].map((item, idx) => (
                <BAParallaxCard
                  key={`2c1-${item.before}`}
                  item={item}
                  index={idx}
                />
              ))}
            </motion.div>

            {/* Colonne 2 */}
            <motion.div
              style={{ y: col2Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns2[1].map((item, idx) => (
                <BAParallaxCard
                  key={`2c2-${item.before}`}
                  item={item}
                  index={idx}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* LG+ : 3 colonnes comme avant (columns3) */}
          <motion.div
            key={`3col-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:grid gap-6 md:gap-8 lg:grid-cols-3"
          >
            {/* Colonne 1 */}
            <motion.div
              style={{ y: col1Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns3[0].map((item, idx) => (
                <BAParallaxCard
                  key={`3c1-${item.before}`}
                  item={item}
                  index={idx}
                />
              ))}
            </motion.div>

            {/* Colonne 2 (avec léger décalage si tu veux) */}
            <motion.div
              style={{ y: col2Y }}
              className="flex flex-col gap-6 md:gap-8 pb-96 relative"
            >
              {columns3[1].map((item, idx) => (
                <BAParallaxCard
                  key={`3c2-${item.before}`}
                  item={item}
                  index={idx}
                />
              ))}
            </motion.div>

            {/* Colonne 3 */}
            <motion.div
              style={{ y: col3Y }}
              className="flex flex-col gap-6 md:gap-8"
            >
              {columns3[2].map((item, idx) => (
                <BAParallaxCard
                  key={`3c3-${item.before}`}
                  item={item}
                  index={idx}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* CTA bas de page */}
          <div className="mt-20 lg:mt-10 flex justify-center">
            <a
              href="/#contact"
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
          wrapper: 'bg-blue-950/50 border-blue-900/30 ',
          label: 'text-blue-900/80',
        }
      : tone === 1
      ? {
          wrapper: 'bg-red-950/20 border-red-900/40 ',
          label: 'text-red-800/80',
        }
      : {
          wrapper: 'bg-neutral-950/90 border-neutral-900/80 ',
          label: 'text-neutral-900/80',
        };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={[
        'rounded-[3.2rem] border overflow-hidden p-[1px]',
        'backdrop-blur-[2px]',
        toneClasses.wrapper,
      ].join(' ')}
    >
      <div
        className="relative rounded-[3rem] overflow-hidden bg-black"
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
