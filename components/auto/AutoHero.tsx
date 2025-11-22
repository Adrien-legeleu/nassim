'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AutoHero() {
  return (
    <section className="relative flex flex-col md:flex-row w-full  items-center justify-center md:h-screen max-md:pt-24 max-md:pb-5 bg-black px-5 md:px-12 text-neutral-900 ">
      {/* ===== Colonne gauche — texte ===== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-1 flex-col justify-center items-start max-md:max-w-xl  w-full text-left gap-6 md:gap-8"
      >
        <span className="inline-flex items-center rounded-full bg-blue-950 text-blue-600 border border-blue-950 px-3 py-1 text-[11px] font-medium tracking-wide">
          Detailing auto complet
        </span>

        {/* Bloc titre + desc + drapeau */}
        <div className="relative space-y-3">
          <h1
            className="text-3xl md:text-5xl relative z-10 text-neutral-100 font-semibold leading-tight"
            style={{
              textShadow:
                '0 6px 40px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.15)',
            }}
          >
            Intérieur. Extérieur. Moteur. Céramique.
          </h1>

          <p className="text-sm md:text-base relative z-10 text-neutral-200 leading-relaxed max-w-md">
            Préparation esthétique haut de gamme : polissage, décontamination,
            vapeur, protection longue durée. Interventions à domicile ou sur
            site, selon ton besoin.
          </p>

          <div
            aria-hidden
            className="
                  absolute left-1/2 z-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rotate-12
                  w-72 md:w-[450px] h-36 md:h-64
                  rounded-full blur-2xl opacity-40
                "
            style={{
              background:
                'linear-gradient(90deg, #0052b4 20%, #ffffff 50%, #d80027 80%)',
            }}
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-medium text-white bg-primary shadow-[0_18px_50px_-15px_rgba(38,102,174,0.6)] hover:opacity-90 transition"
          >
            Réserver un créneau
          </Link>
          <Link
            href="/photos"
            className="inline-flex items-center justify-center rounded-full border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-medium text-neutral-200 hover:border-neutral-900/60 hover:text-neutral-100 transition"
          >
            Voir avant / après
          </Link>
        </div>
      </motion.div>

      {/* ===== Colonne droite — image ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="relative w-full flex-1  max-md:max-w-xl  mx-auto  md:h-[90vh] flex items-center justify-center mt-10 md:mt-0"
      >
        <div className="relative w-full h-full max-md:aspect-square rounded-[3rem] overflow-hidden shadow-[0_40px_60px_-20px_rgba(15,23,42,0.25)] ">
          <Image
            src="/voiture-landing_2.jpg"
            alt="Detailing automobile haut de gamme"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-[3rem] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
