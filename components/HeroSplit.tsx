'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

type PanelProps = {
  href: string;
  src: string;
  alt: string;
  align: 'left' | 'right';
  logoSrc: string;
  logoAlt: string;
  priority?: boolean;
};

/* ---------------------------------------------------
   ⚠️ Panel (DESKTOP) — laissé tel quel, on n’y touche pas
---------------------------------------------------- */
function Panel({
  href,
  src,
  alt,
  align,
  logoSrc,
  logoAlt,
  priority,
}: PanelProps) {
  const edge =
    align === 'left'
      ? 'absolute inset-y-0 right-0 w-20 md:w-24 bg-gradient-to-l from-black/35 to-transparent'
      : 'absolute inset-y-0 left-0 w-20 md:w-24 bg-gradient-to-r from-black/35 to-transparent';

  return (
    <Link
      className="relative group rounded-[3rem] overflow-hidden"
      href={href}
      aria-label={logoAlt}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        className="object-cover aspect-square transition-transform duration-700 will-change-transform group-hover:scale-[1.02]"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/28" />
      <div className={edge} aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative rounded-4xl w- sm:w-40 md:w-52 aspect-[1/1]">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-cover aspect-square  rounded-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            draggable={false}
          />
        </div>
      </div>
    </Link>
  );
}

/* ---------------------------------------------------
   PanelMobile — version carrée optimisée mobile
---------------------------------------------------- */
function PanelMobile({
  href,
  src,
  alt,
  align,
  logoSrc,
  logoAlt,
  priority,
}: PanelProps) {
  const edge =
    align === 'left'
      ? 'absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/35 to-transparent'
      : 'absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/35 to-transparent';

  return (
    <Link
      href={href}
      aria-label={logoAlt}
      className="relative group block aspect-9/14 rounded-3xl overflow-hidden"
    >
      {/* image plein cadre */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1023px) 50vw, 100vw"
        priority={priority}
        className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
        draggable={false}
      />

      {/* voile + bord doux */}
      <div className="absolute inset-0 bg-black/26" />
      <div className={edge} aria-hidden />

      {/* logo centré */}
      <div className="absolute inset-0 grid place-items-center !rounded-2xl p-3">
        <div className="relative w-16 sm:w-24 !aspect-square !rounded-2xl overflow-hidden">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            draggable={false}
          />
        </div>
      </div>
    </Link>
  );
}

/* ---------------- MOBILE (< lg) ---------------- */
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

export function HeroSplitMobile() {
  return (
    <section className="relative w-full bg-white overflow-hidden lg:hidden min-h-[100svh]">
      {/* ruban si existant */}
      <div className="ribbon-fr">
        <span />
      </div>

      <GlowMobile />

      <div className="relative mx-auto max-w-6xl h-screen justify-center items-center px-4 grid grid-rows-[auto,1fr,auto] gap-8 z-20">
        {/* Titre + description */}
        <div className="flex flex-col  items-center justify-center pt-24 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-semibold text-primary tracking-tight"
          >
            Redonnez éclat & prestige à vos surfaces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-sm sm:text-base text-zinc-600 leading-relaxed"
          >
            Que ce soit pour votre voiture ou votre entreprise, notre équipe de
            spécialistes du detailing offre des prestations haut de gamme,
            durables et esthétiques.
          </motion.p>
        </div>

        {/* Grille carrée 2 colonnes */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <PanelMobile
            href="/auto"
            src="/voiture-landing_2.jpg"
            alt="Detailing automobile"
            align="left"
            logoSrc="/logo-auto.png"
            logoAlt="Logo Auto"
            priority
          />
          <PanelMobile
            href="/pro"
            src="/city-square.jpg"
            alt="Services professionnels"
            align="right"
            logoSrc="/logo-pro.png"
            logoAlt="Logo Pro"
          />
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center w-full pb-6">
          <Link
            href="/#reservation"
            className="inline-flex items-center rounded-full border border-primary bg-primary px-6 py-4 text-sm font-medium text-neutral-100 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
          >
            <Calendar className="mr-2 h-4 w-4" /> Réserver un créneau
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DESKTOP (>= lg) — inchangé ---------------- */
export function HeroSplitDesktop() {
  return (
    <section className="relative hidden lg:block w-full bg-white">
      <div className="ribbon-fr">
        <span />
      </div>

      <div className="h-[100svh] p-4">
        <div className="relative h-full overflow-hidden rounded-[3rem] bg-white">
          <div className="grid h-full grid-rows-1 grid-cols-2 gap-5">
            <Panel
              href="/auto"
              src="/voiture-landing_2.jpg"
              alt="Detailing automobile"
              align="left"
              logoSrc="/logo-auto.png"
              logoAlt="Logo Auto"
              priority
            />
            <Panel
              href="/pro"
              src="/city-square.jpg"
              alt="Services professionnels"
              align="right"
              logoSrc="/logo-pro.png"
              logoAlt="Logo Pro"
            />
          </div>
        </div>
      </div>

      {/* CTA global */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-full">
        <Link
          href="/#reservation"
          className="inline-flex items-center rounded-full border border-primary bg-primary px-6 py-4 text-sm font-medium text-neutral-100 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
        >
          <Calendar className="mr-2 h-4 w-4" /> Réserver un créneau
        </Link>
      </div>
    </section>
  );
}

/* ---------------- WRAPPER (rend la bonne variante) ---------------- */
export default function HeroSplit() {
  return (
    <>
      <HeroSplitMobile />
      <HeroSplitDesktop />
    </>
  );
}
