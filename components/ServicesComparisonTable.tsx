'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = {
  auto: {
    title: 'Detailing Auto',
    subtitle: 'Véhicules Premium',
    icon: '/voiture-landing_2.jpg',
    items: [
      'Lavage extérieur complet',
      'Polissage carrosserie',
      'Protection céramique',
      'Nettoyage intérieur profond',
      'Rénovation cuirs',
      'Traitement textiles',
      'Décontamination complète',
      'Vitres & optiques',
    ],
    href: '/auto',
    tone: 'from-blue-950/40 to-black',
  },
  pro: {
    title: 'Espaces Pro',
    subtitle: 'Commerces & Établissements',
    icon: '/city-square.jpg',
    items: [
      'Nettoyage de vitrines',
      "Halls d'entrée & réception",
      'Commerces & boutiques',
      'Copropriétés & immeubles',
      'Villas & résidences',
      'Vitres & surfaces vitrées',
      'Sols & carrelages',
      'Entretien régulier',
    ],
    href: '/pro',
    tone: 'from-red-950/40 to-black',
  },
};

/* ---------- Mobile: cartes empilées (sm:hidden) ---------- */
function ServiceCardMobile({
  title,
  subtitle,
  icon,
  items,
  href,
  tone,
}: {
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
  href: string;
  tone: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-950 shadow-xl shadow-black/5 overflow-hidden bg-neutral-900">
      {/* header */}
      <div
        className={`p-6 bg-gradient-to-br ${tone} border-b border-neutral-900`}
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={icon}
              alt={title}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-100">{title}</h3>
            <p className="text-sm text-neutral-200">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="p-6 bg-neutral-950">
        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex items-start gap-3 group"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-[0.7rem] bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </span>
              <span className="text-sm text-neutral-100">{item}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between">
          <Link
            href={href}
            className="text-sm text-neutral-400 underline underline-offset-4"
          >
            En savoir plus
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transition"
          >
            <Sparkles className="w-4 h-4" />
            Réserver
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------- Desktop: tableau 2 colonnes (hidden sm:block) ---------- */
function ComparisonTableDesktop() {
  return (
    <div className="rounded-[2rem] shadow-2xl shadow-black/5 border border-neutral-950 overflow-hidden bg-black hidden sm:block">
      {/* header global */}
      <div className="px-8 py-6 border-b border-neutral-950 bg-gradient-to-r from-neutral-950 to-black">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-neutral-100">
              Solutions Auto & Pro
            </h2>
            <p className="text-sm text-neutral-300">
              Découvrez notre gamme complète pour véhicules et espaces
              professionnels
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-md transition"
          >
            <Sparkles className="w-4 h-4" />
            Réserver maintenant
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* entêtes colonnes */}
      <div className="grid grid-cols-2 border-b border-neutral-800/80">
        {[services.auto, services.pro].map((s, idx) => (
          <div
            key={s.title}
            className={`p-8 ${
              idx === 0 ? 'border-r border-neutral-950' : ''
            } bg-gradient-to-br to-neutral-950 from-neutral-950  ${s.tone}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-100">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-300">{s.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* corps du tableau */}
      <div className="grid grid-cols-2">
        {/* Auto */}
        <div className="p-8 bg-gradient-to-br from-blue-950/20 to-black border-r border-neutral-900">
          <ul className="space-y-3">
            {services.auto.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-start gap-3 group"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-[0.7rem] bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-neutral-200">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          <Link
            href={services.auto.href}
            className="mt-5 inline-block text-sm text-neutral-400 underline underline-offset-4"
          >
            En savoir plus
          </Link>
        </div>

        {/* Pro */}
        <div className="p-8 bg-gradient-to-br from-red-950/20 to-black">
          <ul className="space-y-3">
            {services.pro.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-start gap-3 group"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-[0.7rem] bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-neutral-200">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          <Link
            href={services.pro.href}
            className="mt-5 inline-block text-sm text-neutral-400 underline underline-offset-4"
          >
            En savoir plus
          </Link>
        </div>
      </div>

      {/* footer global */}
      <div className="px-8 py-6 border-t border-neutral-950 bg-gradient-to-r from-neutral-950 via-black to-neutral-950">
        <p className="text-xs text-neutral-200">
          Devis gratuit sous 24h • Intervention rapide • RC Pro • Produits
          premium
        </p>
      </div>
    </div>
  );
}

export default function ServicesComparisonTable() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-neutral-950 to-neutral-950 overflow-hidden">
      {/* décor */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#ed2939]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* header section (commun) */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-neutral-800/80 rounded-full px-4 py-2 mb-3 border border-neutral-900 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-neutral-200">
              Nos Services
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
            Solutions Auto & Pro
          </h2>
          <p className="text-base text-neutral-200 max-w-2xl mx-auto">
            Une offre claire, premium et adaptée à chaque besoin.
          </p>
        </div>

        {/* mobile: 1 colonne, deux cartes (sm:hidden) */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          <ServiceCardMobile {...services.auto} />
          <ServiceCardMobile {...services.pro} />
        </div>

        {/* desktop: tableau comparatif (hidden sm:block) */}
        <ComparisonTableDesktop />
      </div>
    </section>
  );
}
