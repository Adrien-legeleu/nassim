'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const autoPackages = [
  {
    id: 'interieur-classique',
    title: 'Nettoyage Intérieur Classique',
    basePrice: '50€',
    src: '/tariff.png',
    bullets: [
      'Aspiration complète habitacle et coffre',
      'Nettoyage et soin des plastiques intérieurs',
      'Nettoyage vitres intérieures',

      'Dépoussiérage et désodorisation',
      'eau incluse',
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
    title: 'Nettoyage Intérieur + Sièges',
    basePrice: '65€',
    src: '/tariff2.png',
    bullets: [
      'Tout le forfait Intérieur Essentiel',
      'Sièges en tissu : Shampouinage et extraction',
      'Cuir : Nettoyage doux et soin nourrissant',
      'Alcantara : Nettoyage délicat et préservation',
      'eau incluse',
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
    title: 'Nettoyage Complet Classique',
    basePrice: '100€',
    src: '/tariff3.png',
    bullets: [
      'Tout le forfait Intérieur Essentiel',
      'Tout le forfait Extérieur Éclat',
      'Aspiration complète de l’habitacle et du coffre',
      'Nettoyage et soin des plastiques intérieurs',
      'Nettoyage des vitres intérieures',
      'Lavage extérieur sans eau de la carrosserie',
      'Nettoyage des jantes et des pneus',
      'eau incluse',
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
    title: 'Nettoyage Complet + Sièges',
    basePrice: '150€',
    src: '/tariff4.png',
    bullets: [
      'Tout le forfait Complet Premium',
      'Soin des plastiques intérieurs',
      'Lavage carrosserie sans eau, jantes, pneus',
      'Nettoyage, désinfection et traitement des sièges',
      'Aspiration profonde de l’habitacle et du coffre',
      'Vitres intérieures et extérieures impeccables',
      'Dépoussiérage et désodorisation complète',
      'eau incluse',
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
    title: 'Nettoyage Extérieur',
    basePrice: '35€',
    src: '/tariff5.png',
    bullets: [
      'Lavage complet de la carrosserie sans eau',
      'Nettoyage en profondeur des jantes',
      'Application d’un soin spécifique pour les pneus',
      'Nettoyage méticuleux des vitres extérieures',
      'Finition lustrée avec effet hydrophobe',
      'eau incluse',
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
    title: 'Option Anti-Poils',
    basePrice: '15€',
    src: '/tariff6.png',

    bullets: [
      'Traitement spécifique pour l’élimination des poils d’animaux',
      'Nettoyage en profondeur des fibres textiles',
      'Application d’un désodorisant professionnel',
      'eau incluse',
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

export default function AutoPricingSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-black to-neutral-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50">
            Tarifs Detailing Auto – French Riviera
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-300">
            Des formules claires et transparentes pour un résultat showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {autoPackages.map((pack, index) => (
            <motion.article
              key={pack.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col justify-between rounded-3xl bg-neutral-950/90 border border-neutral-800/80 shadow-[0_18px_45px_rgba(0,0,0,0.45)] p-6 md:p-7"
            >
              <div>
                <Image
                  src={pack.src}
                  alt={pack.title}
                  className="rounded-3xl object-cover aspect-square w-1/2"
                  width={400}
                  height={400}
                />
                <h3 className="text-lg md:text-xl font-semibold text-neutral-50">
                  {pack.title}{' '}
                  <span className="font-normal">: {pack.basePrice}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-neutral-200">
                  {pack.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[2px] flex h-5 w-5 items-center justify-center rounded-lg bg-primary/80">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 space-y-1 text-sm text-neutral-300">
                  <p className="font-semibold">Tarif :</p>
                  {pack.categories.map((cat) => (
                    <p key={cat.label}>
                      {cat.label} ={' '}
                      <span className="font-semibold">{cat.price}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.45)] hover:bg-primary/90 transition"
                >
                  {pack.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
