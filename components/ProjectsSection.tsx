'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compare } from '@/components/ui/compare';

export default function ProjectsSection() {
  return (
    <section className="relative text-light bg-neutral-950 py-24 md:py-32 px-5">
      {/* ===== Glow + vignette globale derrière la grille ===== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* halo radial doux au centre */}

        {/* vignette sombre qui rentre vers le centre */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_200px_rgba(0,0,0,0.4)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* ==== Heading ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-[2rem] md:text-4xl font-semibold text-black tracking-tight">
            Quelques réalisations avant / après
          </h2>
          <p className="text-black/60 mt-3 text-sm md:text-base">
            Des résultats concrets, visibles immédiatement après intervention.
          </p>
        </motion.div>
        <div className="relative rounded-[3rem]  ">
          {/* === Overlay radial noir autour de la grille === */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-30 rounded-[3rem]"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.9) 95%, rgba(0,0,0,0.9) 100%)',
            }}
          />
          {/* ==== Bento Grid asymétrique corrigée ==== */}
          <div className="grid grid-cols-1  md:grid-cols-2 md:grid-rows-5 gap-6 md:gap-8">
            {/* === Bloc A (col gauche, très grand, 3 rows) === */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="
              md:row-span-3 md:col-span-1
              rounded-[3.2rem] bg-blue-950
              border border-black/[0.04]
              overflow-hidden
              shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
              p-0.5
              flex
              min-h-[320px] max-md:aspect-11/10 md:min-h-[420px]
            "
            >
              <Compare
                firstImage="/voiture-before-8.png"
                secondImage="/voiture-after-8.png"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[3rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>

            {/* === Bloc B (col droite, plus petit, 2 rows) === */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="
              md:row-span-2 md:col-span-1
              rounded-[3.2rem] bg-[#c51e2c40]
              border border-black/[0.04]
              overflow-hidden
           shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
              p-0.5
              flex
              min-h-[200px]  max-md:aspect-11/7 md:min-h-[250px]
            "
            >
              <Compare
                firstImage="/voiture-before-7.png"
                secondImage="/voiture-after-7.png"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[3rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>

            {/* === Bloc C (col gauche bas, 2 rows restantes) === */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="
              md:row-span-3 md:col-span-1
              rounded-[3.2rem] bg-[#ed293930]
              border border-black/[0.04]
              overflow-hidden
           shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
              p-0.5
              flex
              min-h-[220px] max-md:aspect-11/12 md:min-h-[280px]
            "
            >
              <Compare
                firstImage="/pro-before-4.webp"
                secondImage="/pro-after-4.webp"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[3rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>

            {/* === Bloc D (col droite bas, grand vertical 3 rows) === */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="
              md:row-span-3 md:col-span-1
              rounded-[3.2rem] bg-neutral-800
              border border-black/[0.04]
              overflow-hidden
           shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
              p-0.5
              flex
              min-h-[320px] max-md:aspect-11/10 md:min-h-[420px]
            "
            >
              <Compare
                firstImage="/pro-before-11.png"
                secondImage="/pro-after-11.png"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[3rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>
          </div>{' '}
        </div>

        {/* ==== CTA en bas ==== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/photos"
            className="rounded-full px-8 py-3 text-sm font-medium bg-primary text-white hover:opacity-90 transition shadow-[0_0_25px_-10px_rgba(255,255,255,0.2)]"
          >
            Voir plus de réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
