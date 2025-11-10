'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

type PanelProps = {
  href: string;
  src: string; // image de fond
  alt: string; // alt de l'image de fond
  align: 'left' | 'right';
  logoSrc: string; // chemin du logo
  logoAlt: string; // alt du logo
  priority?: boolean;
};

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
      : 'absolute inset-y-0 left-0  w-20 md:w-24 bg-gradient-to-r from-black/35 to-transparent';

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
        sizes="(min-width: 768px) 50vw, 100vw"
        priority={priority}
        className="object-cover  transition-transform duration-700 will-change-transform group-hover:scale-[1.02]"
        draggable={false}
      />

      {/* Voile léger pour lisibilité du logo */}
      <div className="absolute inset-0 bg-black/28" />
      <div className={edge} aria-hidden />

      {/* Logo centré et cliquable */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative rounded-4xl w-40 md:w-52 aspect-[1/1]">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-cover rounded-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            draggable={false}
          />
        </div>
      </div>
    </Link>
  );
}

export default function HeroSplit() {
  return (
    <section className="relative md:h-[100svh] h-full w-full md:overflow-hidden bg-white">
      <div className="ribbon-fr">
        <span />
      </div>
      <div className="md:h-full p-2 md:p-4 max-md:h-[100svh]">
        <div className="relative h-full overflow-hidden rounded-[3rem]  bg-white">
          <div className="grid h-full grid-rows-2 gap-5 md:grid-rows-1 md:grid-cols-2">
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

      {/* CTA global (tu peux le retirer si tu veux uniquement les logos) */}
      <div className="md:absolute relative max-md:top-3 max-md:pb-3  md:bottom-8 md:left-1/2 flex items-center justify-center w-full md:-translate-x-1/2">
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
