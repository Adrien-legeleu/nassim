'use client';

import Link from 'next/link';
import Image from 'next/image';

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
      className="relative group overflow-hidden"
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
    <section className="relative h-[100svh] w-full overflow-hidden bg-white">
      <div className="h-full px-4 md:px-6">
        <div className="relative h-full overflow-hidden rounded-[3rem] border border-neutral-200 bg-white shadow-sm">
          {/* Séparation centrale très légère */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 z-[2]"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(0,0,0,0.18), transparent)',
            }}
          />

          <div className="grid h-full grid-rows-2 md:grid-rows-1 md:grid-cols-2">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="/#reservation"
          className="inline-flex items-center rounded-full border border-primary bg-primary px-6 py-2.5 text-sm font-medium text-neutral-100 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
        >
          Réserver un créneau
        </Link>
      </div>
    </section>
  );
}
