'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type AutoPackage = {
  id: string;
  title: string;
  basePrice: string;
  src: string;
  bullets: string[];
  categories: { label: string; price: string }[];
  ctaLabel: string;
};

type ProPackage = {
  id: string;
  title: string;
  src: string;
  price: string;
  description: string;
  duration?: string;
  ctaLabel: string;
};

const autoPackages: AutoPackage[] = [
  {
    id: 'interieur-classique',
    title: 'Nettoyage Intérieur Classique',
    src: '/tariff.png',
    basePrice: '50€',
    bullets: [
      'Aspiration complète habitacle et coffre',
      'Nettoyage et soin des plastiques intérieurs',
      'Nettoyage vitres intérieures',
      'Dépoussiérage et désodorisation',
    ],
    categories: [
      {
        label: 'Catégorie 1 (Petits & Moyens Véhicules)',
        price: '50€',
      },
      {
        label: 'Catégorie 2 (Grands Véhicules)',
        price: '75€',
      },
    ],
    ctaLabel: 'Je réserve mon nettoyage',
  },
  {
    id: 'interieur-sieges',
    src: '/tariff2.png',

    title: 'Nettoyage Intérieur + Sièges',
    basePrice: '65€',
    bullets: [
      'Tout le forfait Intérieur Essentiel',
      'Sièges en tissu : Shampouinage et extraction',
      'Cuir : Nettoyage doux et soin nourrissant',
      'Alcantara : Nettoyage délicat et préservation',
    ],
    categories: [
      {
        label: 'Catégorie 1 (Petits & Moyens Véhicules)',
        price: '65€',
      },
      {
        label: 'Catégorie 2 (Grands Véhicules)',
        price: '80€',
      },
    ],
    ctaLabel: 'Réserver mon soin intérieur',
  },
  {
    id: 'complet-classique',
    src: '/tariff3.png',

    title: 'Nettoyage Complet Classique',
    basePrice: '100€',
    bullets: [
      'Tout le forfait Intérieur Essentiel',
      'Tout le forfait Extérieur Éclat',
      'Aspiration complète de l’habitacle et du coffre',
      'Nettoyage et soin des plastiques intérieurs',
      'Nettoyage des vitres intérieures',
      'Lavage extérieur de la carrosserie',
      'Nettoyage des jantes et des pneus',
    ],
    categories: [
      {
        label: 'Catégorie 1 (Petits & Moyens Véhicules)',
        price: '100€',
      },
      {
        label: 'Catégorie 2 (Grands Véhicules)',
        price: '120€',
      },
    ],
    ctaLabel: 'Réserver mon nettoyage complet',
  },
  {
    id: 'complet-sieges',
    src: '/tariff4.png',

    title: 'Nettoyage Complet + Sièges',
    basePrice: '150€',
    bullets: [
      'Tout le forfait Complet Premium',
      'Soin des plastiques intérieurs',
      'Lavage carrosserie jantes, pneus',
      'Nettoyage, désinfection et traitement des sièges',
      'Aspiration profonde de l’habitacle et du coffre',
      'Vitres intérieures et extérieures impeccables',
      'Dépoussiérage et désodorisation complète',
    ],
    categories: [
      {
        label: 'Catégorie 1 (Petits & Moyens Véhicules)',
        price: '150€',
      },
      {
        label: 'Catégorie 2 (Grands Véhicules)',
        price: '200€',
      },
    ],
    ctaLabel: 'Réserver mon soin intégral',
  },
  {
    id: 'exterieur',
    src: '/tariff5.png',

    title: 'Nettoyage Extérieur',
    basePrice: '35€',
    bullets: [
      'Lavage complet de la carrosserie',
      'Nettoyage en profondeur des jantes',
      'Application d’un soin spécifique pour les pneus',
      'Nettoyage méticuleux des vitres extérieures',
      'Finition lustrée avec effet hydrophobe',
    ],
    categories: [
      {
        label: 'Catégorie 1 (Petits & Moyens Véhicules)',
        price: '35€',
      },
      {
        label: 'Catégorie 2 (Grands Véhicules)',
        price: '45€',
      },
    ],
    ctaLabel: 'Réserver mon nettoyage extérieur',
  },
  {
    id: 'anti-poils',
    src: '/tariff6.png',

    title: 'Option Anti-Poils',
    basePrice: '15€',
    bullets: [
      'Traitement spécifique pour l’élimination des poils d’animaux',
      'Nettoyage en profondeur des fibres textiles',
      'Application d’un désodorisant professionnel',
    ],
    categories: [
      {
        label: 'Catégorie 1 (Petits & Moyens Véhicules)',
        price: '15€',
      },
      {
        label: 'Catégorie 2 (Grands Véhicules)',
        price: '20€',
      },
    ],
    ctaLabel: 'Réserver avec ce traitement spécifique',
  },
];

const proPackages: ProPackage[] = [
  {
    id: 'moquette',
    title: 'Shampouinage moquette',
    src: '/protariff3.png',

    price: '39€',
    description: 'Devant et arrières',
    duration: '30 min',
    ctaLabel: 'Demander ce service',
  },
  {
    id: 'canape',
    title: 'Nettoyage Canapé',
    src: '/protariff2.png',

    price: '60–80€',
    description: '2 places : 60€ • 3 places droit : 70€ • 4/5 places : 80€',
    duration: '1 h 30',
    ctaLabel: 'Réserver mon canapé',
  },
  {
    id: 'matelas',
    title: 'Matelas',
    src: '/protariff.png',
    price: 'À partir de 60€',
    description: 'Matelas à partir de 60€ • Recto/Verso à partir de 80€',
    duration: '45 min',
    ctaLabel: 'Réserver pour mon matelas',
  },
  {
    id: 'fauteuil',
    title: 'Fauteuil',
    price: '30€',
    src: '/protariff4.png',

    description: 'Fauteuil complet',
    duration: '30 min',
    ctaLabel: 'Réserver mon fauteuil',
  },
];

function AutoCard({ pack, index }: { pack: AutoPackage; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col justify-between rounded-3xl bg-neutral-950/90 border border-neutral-800/80 shadow-[0_18px_45px_rgba(0,0,0,0.45)] p-6 md:p-7"
    >
      <div className="space-y-3">
        <Image
          src={pack.src}
          alt={pack.title}
          className="rounded-3xl object-cover aspect-square w-1/2"
          width={400}
          height={400}
        />
        <h3 className="text-lg md:text-xl font-semibold text-neutral-50">
          {pack.title} <span className="font-normal">: {pack.basePrice}</span>
        </h3>
        <ul className="space-y-2 mt-3 text-sm text-neutral-200">
          {pack.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-lg bg-primary/80">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-neutral-300 space-y-1">
          <p className="font-semibold">Tarif :</p>
          {pack.categories.map((cat) => (
            <p key={cat.label}>
              {cat.label} = <span className="font-semibold">{cat.price}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full flex items-center justify-end">
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.45)] hover:bg-primary/90 transition"
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}

function ProCard({ pack, index }: { pack: ProPackage; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col justify-between rounded-3xl bg-black/90 border border-neutral-800/80 shadow-[0_18px_45px_rgba(0,0,0,0.55)] p-6 md:p-7"
    >
      <div className="space-y-3">
        <Image
          src={pack.src}
          alt={pack.title}
          className="rounded-3xl object-cover aspect-square w-1/2"
          width={400}
          height={400}
        />
        <h3 className="text-lg md:text-xl font-semibold text-neutral-50">
          {pack.title}
        </h3>
        <p className="text-sm text-neutral-200">{pack.description}</p>
        <p className="mt-1 text-base font-semibold text-neutral-100">
          {pack.price}
        </p>
        {pack.duration && (
          <p className="mt-2 inline-flex items-center gap-2 text-xs text-neutral-400">
            <Clock className="w-4 h-4" />
            {pack.duration}
          </p>
        )}
      </div>

      <div className="mt-6 w-full flex items-center justify-end">
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.45)] hover:bg-primary/90 transition"
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function HomePricingSection() {
  const [tab, setTab] = useState<'auto' | 'pro'>('auto');

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-black to-neutral-950">
      {/* glow décor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* header */}
        <div className="mb-8 text-center md:mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2 text-xs font-medium text-neutral-200 shadow-sm">
            Tarifs clairs • Services premium • Devis rapide
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-neutral-50">
            Nos formules French Riviera & Espaces Pro
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-300">
            Choisissez vos prestations de detailing auto ou de nettoyage
            professionnel, toujours avec la même exigence de qualité.
          </p>
          <p className="mt-2 text-xs md:text-sm text-neutral-400">
            Pour nos prestations auto, nous utilisons la gamme professionnelle{' '}
            <span className="font-semibold">Koch-Chemie</span> (dégraissants,
            shampoings, protections, etc.).
          </p>
        </div>

        {/* tabs */}
        <div className="mx-auto mb-8 flex max-w-md items-center rounded-full border border-neutral-800 bg-black/70 p-1">
          <button
            onClick={() => setTab('auto')}
            className={`flex-1 rounded-full px-4 py-4 text-xs md:text-sm font-medium transition ${
              tab === 'auto'
                ? 'bg-neutral-100 text-neutral-900 shadow'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Detailing Auto
          </button>
          <button
            onClick={() => setTab('pro')}
            className={`flex-1 rounded-full h-full px-4 py-4 text-xs md:text-sm font-medium transition ${
              tab === 'pro'
                ? 'bg-neutral-100 text-neutral-900 shadow'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Espaces Pro
          </button>
        </div>

        {/* content */}
        {tab === 'auto' ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {autoPackages.map((p, i) => (
              <AutoCard key={p.id} pack={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {proPackages.map((p, i) => (
              <ProCard key={p.id} pack={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
