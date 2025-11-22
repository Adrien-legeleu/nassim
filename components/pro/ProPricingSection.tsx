'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const proPackages = [
  {
    id: 'moquette',
    src: '/protariff3.png',
    title: 'Shampouinage moquette',
    price: '39,00 €',
    description: 'Devant et arrières',
    duration: '30 min',
    ctaLabel: 'Réserver ce shampouinage',
  },
  {
    id: 'canape',
    title: 'Nettoyage Canapé',
    src: '/protariff2.png',
    price: '60,00–80,00 €',
    description:
      'Canapé 2 places : 60€ • Canapé 3 places droit : 70€ • Canapé 4/5 places : 80€',
    duration: '1 h 30',
    ctaLabel: 'Réserver mon canapé',
  },
  {
    id: 'matelas',
    src: '/protariff.png',
    title: 'Matelas',
    price: 'À partir de 60,00 €',
    description:
      'Matelas à partir de 60€ • Matelas Recto/Verso à partir de 80€',
    duration: '45 min',
    ctaLabel: 'Réserver pour mon matelas',
  },
  {
    id: 'fauteuil',
    title: 'Fauteuil',
    src: '/protariff4.png',
    price: '30,00 €',
    description: 'Fauteuil complet',
    duration: '30 min',
    ctaLabel: 'Réserver mon fauteuil',
  },
];

export default function ProPricingSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-red-200/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-neutral-100/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">
            Tarifs Nettoyage Pro – ABC
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-800">
            Prestations sur mesure pour vos tissus d’ameublement et moquettes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proPackages.map((pack, index) => (
            <motion.article
              key={pack.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col justify-between rounded-3xl bg-white/95 border border-neutral-100/80 shadow-[0_18px_35px_rgba(0,0,0,0.1)] p-6 md:p-7"
            >
              <div className="space-y-3">
                <Image
                  src={pack.src}
                  alt={pack.title}
                  className="rounded-3xl object-cover aspect-square w-1/2"
                  width={400}
                  height={400}
                />
                <h3 className="text-lg md:text-xl font-semibold text-neutral-950">
                  {pack.title}
                </h3>
                <p className="text-sm text-neutral-700">{pack.description}</p>
                <p className="mt-1 text-base font-semibold text-neutral-800">
                  {pack.price}
                </p>
                {pack.duration && (
                  <p className="mt-2 inline-flex items-center gap-2 text-xs text-neutral-500">
                    <Clock className="w-4 h-4" />
                    {pack.duration}
                  </p>
                )}
              </div>

              <div className="mt-6 w-full flex items-center justify-end">
                <Link
                  href="/#contact"
                  className="inline-flex  items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.25)] hover:bg-primary/90 transition"
                >
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
