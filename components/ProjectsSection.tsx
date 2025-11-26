'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compare } from '@/components/ui/compare';

export default function ProjectsSection() {
  return (
    <section className="relative text-light bg-neutral-950 py-24 md:py-32 px-5">
      {/* ===== Glow + vignette globale ===== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 shadow-[inset_0_0_200px_200px_rgba(0,0,0,0.4)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* ==== Heading principal ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-[2rem] md:text-4xl font-semibold text-white tracking-tight">
            Quelques réalisations avant / après
          </h2>
          <p className="text-white/60 mt-3 text-sm md:text-base">
            Des résultats concrets, visibles immédiatement après intervention.
          </p>
        </motion.div>

        {/* ==== Grille 2 colonnes : Auto | Pro ==== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* ========== COLONNE GAUCHE : VÉHICULES ========== */}
          <div className="space-y-8">
            {/* Titre catégorie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Véhicules
              </h3>
              <p className="text-white/50 text-sm mt-2">
                Particuliers & Professionnels
              </p>
            </motion.div>

            {/* Bloc 1 - Voiture */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="
                rounded-[2.5rem] h-120 w-full bg-blue-950
                border border-black/[0.04]
                overflow-hidden
                shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
                p-0.5
                min-h-[300px]
              "
            >
              <Compare
                firstImage="/voiture-before-8.png"
                secondImage="/voiture-after-8.png"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[2.4rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>

            {/* Bloc 2 - Voiture */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="
                rounded-[2.5rem] h-105 w-full bg-[#c51e2c40]
                border border-black/[0.04]
                overflow-hidden
                shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
                p-0.5
                min-h-[250px]
              "
            >
              <Compare
                firstImage="/voiture-before-7.png"
                secondImage="/voiture-after-7.png"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[2.4rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>

            {/* CTA Véhicules */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center pt-4"
            >
              <Link
                href="/auto"
                className="
                  rounded-full px-8 py-3 text-sm font-medium 
                  bg-primary text-white 
                  hover:opacity-90 transition 
                  shadow-[0_0_25px_-10px_rgba(255,255,255,0.2)]
                "
              >
                Voir tous les véhicules
              </Link>
            </motion.div>
          </div>

          {/* ========== COLONNE DROITE : PRO ========== */}
          <div className="space-y-8">
            {/* Titre catégorie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Professionnels
              </h3>
              <p className="text-white/50 text-sm mt-2">Locaux & Bâtiments</p>
            </motion.div>

            {/* Bloc 1 - Pro */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="
                rounded-[2.5rem] h-150 w-full bg-[#ed293930]
                border border-black/[0.04]
                overflow-hidden
                shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
                p-0.5
                min-h-[280px]
              "
            >
              <Compare
                firstImage="/pro-before-4.webp"
                secondImage="/pro-after-4.webp"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[2.4rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>

            {/* Bloc 2 - Pro */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="
                rounded-[2.5rem] h-64 w-full bg-neutral-800
                border border-black/[0.04]
                overflow-hidden
                shadow-[0_40px_120px_-20px_rgba(5,2,0,0.9)]
                p-0.5
                min-h-[300px]
              "
            >
              <Compare
                firstImage="/pro-before-11.png"
                secondImage="/pro-after-11.png"
                firstImageClassName="object-cover w-full h-full"
                secondImageClassname="object-cover w-full h-full"
                className="rounded-[2.4rem] w-full h-full"
                slideMode="hover"
              />
            </motion.div>

            {/* CTA Pro */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center pt-4"
            >
              <Link
                href="/pro"
                className="
                  rounded-full px-8 py-3 text-sm font-medium 
                  bg-primary text-white 
                  hover:opacity-90 transition 
                  shadow-[0_0_25px_-10px_rgba(255,255,255,0.2)]
                "
              >
                Voir tous les pros
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
