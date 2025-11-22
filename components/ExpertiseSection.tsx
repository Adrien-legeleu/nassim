'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Droplets,
  Sparkles,
  Building2,
  Clock,
} from 'lucide-react';
import { BentoGridShowcase } from './ui/bento-product-features';

/* ===== Variants d’animations (pas de changement de design) ===== */

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(14px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

const cardsParentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: {
    y: 18,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45 },
  },
};

export default function ExpertiseSection() {
  return (
    <section className="relative bg-neutral-950 text-neutral-900 py-24 md:py-32 px-5 ">
      {/* ===== FOND GLOBAL décoratif ===== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Halo central doux */}
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-[0.18] blur-[140px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(15,23,42,0.18) 0%, rgba(2,2,2,0) 70%)',
          }}
        />
        {/* Vignette blanche */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_120px_rgba(2,2,2,0.95)]" />

        {/* Icônes géantes globales (fond de section, très subtiles) */}
        <ShieldCheck className="absolute max-lg:hidden top-[5%] left-[8%] w-[480px] h-[480px] text-slate-900 opacity-[0.015]" />
      </div>

      {/* ===== CONTENU ===== */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        {/* ===== Heading ===== */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide bg-neutral-900 text-neutral-200"
          >
            Auto & espaces pro • Méthodes carrées
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="mt-4 text-2xl md:text-4xl text-neutral-50 font-semibold tracking-tight tricolor-underline pb-2"
          >
            Un niveau pro, auto & espaces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
            className="text-sm md:text-base text-neutral-200 leading-relaxed mt-4"
          >
            Procédures maîtrisées, produits adaptés, rendu net. Différenciation
            visuelle immédiate pour votre véhicule ou votre établissement.
          </motion.p>
        </div>

        {/* ===== Container arrondi ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] md:rounded-[3rem] border border-neutral-900 bg-neutral-950/60 shadow-[0_40px_120px_-30px_rgba(15,23,42,0.15)] p-4 md:p-6 overflow-hidden backdrop-blur-[2px]"
        >
          {/* Décor interne : icônes + cadre */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] z-0"
          >
            {/* radial subtil haut */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 0%, rgba(2,2,2,0.9) 0%, rgba(2,2,2,0) 55%)',
              }}
            />

            <div className="absolute inset-[10%] rounded-[2.1rem] md:rounded-[2.6rem] border border-dashed border-neutral-700/90" />
          </div>

          {/* ===== GRID BENTO ===== */}
          <motion.div
            className="relative z-10 mx-auto max-w-[1200px]"
            variants={cardsParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <BentoGridShowcase
              className="relative z-10 mx-auto max-w-[1200px]"
              cardClassName="
              rounded-[2rem] h-full p-6 md:p-7
              border border-neutral-800/80
              shadow-[0_20px_80px_-30px_rgba(15,23,42,0.18)]
              bg-neutral-950/80
              backdrop-blur-[2px]
            "
              integration={
                <motion.div variants={cardVariants} className="h-full">
                  <FeatureTall
                    icon={<ShieldCheck className="h-5 w-5" />}
                    title="Préparation & protection"
                    lines={[
                      'Pré-lavage mousse pH neutre',
                      'Décontamination ferreuse + goudron',
                      'Polissage 1–2 passes',
                      'Protection céramique 12–24 mois',
                      'Vapeur sèche habitacle',
                    ]}
                    footer="Méthode adaptée à l’état du véhicule. Devis clair avant intervention."
                  />
                </motion.div>
              }
              trackers={
                <motion.div variants={cardVariants}>
                  <MiniFeature
                    icon={<Sparkles className="h-4 w-4" />}
                    title="Finition intérieure"
                    desc="Textiles, plastiques, cuirs : rendu propre, mat, sans brillances grasses."
                  />
                </motion.div>
              }
              statistic={
                <motion.div variants={cardVariants}>
                  <MiniFeatureStat
                    icon={<Clock className="h-4 w-4" />}
                    title="Délai d’intervention"
                    big="24–72h"
                    hint="Selon planning, type de prestation et zone d’intervention."
                  />
                </motion.div>
              }
              focus={
                <motion.div variants={cardVariants}>
                  <MiniFeature
                    icon={<Building2 className="h-4 w-4" />}
                    title="Nettoyage pro"
                    desc="Vitrines, halls, commerces, villas, copropriétés : image nette et régulière."
                  />
                </motion.div>
              }
              productivity={
                <motion.div variants={cardVariants}>
                  <MiniFeature
                    icon={<Droplets className="h-4 w-4" />}
                    title="Vitres & vitrines"
                    desc="Eau osmosée, microfibres dédiées, angles et joints traités : zéro trace."
                  />
                </motion.div>
              }
              shortcuts={
                <motion.div variants={cardVariants}>
                  <BottomWide />
                </motion.div>
              }
              /* Couleurs par carte */
              integrationClassName=" border-[#ed293915]"
              trackersClassName=" border-blue-950/40"
              statisticClassName=" border-blue-950/40"
              focusClassName=" border-[#ed293915]"
              productivityClassName=" border-neutral-800/50"
              shortcutsClassName=" border-neutral-800/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* === Cartes === */

function FeatureTall({
  icon,
  title,
  lines,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  footer: string;
}) {
  return (
    <div className="flex flex-col justify-between h-full">
      {/* header */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex min-h-10 min-w-10 items-center justify-center rounded-2xl bg-[#ed293910] border border-[#ed293910] text-[#ed293980]">
              {icon}
            </div>
            <div>
              <div className="font-medium leading-tight text-neutral-50 text-base md:text-lg">
                {title}
              </div>
              <p className="mt-1 text-xs text-neutral-200">
                Préparation esthétique complète avant protection.
              </p>
            </div>
          </div>
          <span className="rounded-full bg-neutral-800/70 px-3 py-1 text-[11px] font-medium text-neutral-200">
            Auto
          </span>
        </div>

        {/* liste */}
        <ul className="mt-6 flex flex-col gap-2 text-neutral-100 text-sm leading-relaxed">
          {lines.map((l, i) => (
            <li key={i} className="flex gap-2">
              <div
                className="mt-[7px] h-[6px] w-[6px] rounded-full"
                style={{ background: 'var(--color-primary)' }}
              />
              <span>{l}</span>
            </li>
          ))}
        </ul>

        {/* footer principal */}
        <div className="mt-6 pt-4 border-t border-red-950/50 text-neutral-200 text-xs leading-relaxed">
          {footer}
        </div>
      </div>

      {/* === AJOUT D’UN ENCARt “bonus technique” === */}
      <div className="mt-5 bg-[#ed293910] border border-[#ed293910] rounded-2xl p-3 flex items-start gap-3 text-xs text-neutral-700 shadow-[inset_0_1px_6px_rgba(0,0,0,0.8)]">
        <div className="flex min-h-6 min-w-6 items-center justify-center rounded-lg bg-[#ed293910] border border-[#ed293910] text-[#ed293980]">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div className="leading-snug text-neutral-50">
          <strong className="font-medium ">Durée moyenne :</strong> 4–6 h par
          véhicule selon niveau de correction.
          <br />
          <span className="text-[11px] text-neutral-300">
            Application en local contrôlé, produits premium (Koch Chemie /
            Gyeon).
          </span>
        </div>
      </div>
    </div>
  );
}

function MiniFeature({ icon, title, desc }: any) {
  const isRed = title === 'Nettoyage pro';
  const isNeutral = title === 'Vitres & vitrines';

  const badgeClasses = isRed
    ? 'bg-[#ed293910] border-[#ed293310] text-[#ed293995]'
    : isNeutral
    ? 'bg-neutral-900 border-neutral-900 text-neutral-600'
    : 'bg-blue-950/80 border-blue-950 text-blue-600/80';

  const chipLabel = isRed ? 'Pro' : isNeutral ? 'Détail' : 'Finition';

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div
            className={[
              'flex min-h-10 min-w-10 items-center justify-center rounded-2xl border',
              badgeClasses,
            ].join(' ')}
          >
            {icon}
          </div>
          <div>
            <div className="font-medium leading-tight text-neutral-50 text-base">
              {title}
            </div>
            <p className="mt-1 text-[11px] text-neutral-200">
              Zone ciblée, méthode adaptée.
            </p>
          </div>
        </div>
        <span className="rounded-full bg-neutral-800/80 px-2.5 py-1 text-[11px] text-neutral-200">
          {chipLabel}
        </span>
      </div>
      <p className="mt-4 text-neutral-100 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function MiniFeatureStat({ icon, title, big, hint }: any) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex min-h-10 min-w-10 items-center justify-center rounded-2xl bg-blue-950/80 border border-blue-950 text-blue-600/80">
            {icon}
          </div>
          <div>
            <div className="font-medium text-neutral-50 leading-tight text-base">
              {title}
            </div>
            <p className="mt-1 text-[11px] text-neutral-200">
              Réponse rapide, créneau calé avec vous.
            </p>
          </div>
        </div>
        <span className="rounded-full bg-neutral-800/80 px-2.5 py-1 text-[11px] text-neutral-200">
          Planning
        </span>
      </div>
      <div
        className="mt-6 font-semibold text-4xl leading-none tracking-tight"
        style={{ color: 'var(--color-primary)' }}
      >
        {big}
      </div>
      <div className="mt-2 text-neutral-200 text-xs leading-relaxed">
        {hint}
      </div>
    </div>
  );
}

function BottomWide() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 h-full">
      <div className="max-w-md">
        <p className="font-medium text-base text-neutral-50 leading-tight">
          Devis clair, intervention planifiée, RC pro.
        </p>
        <p className="text-neutral-200 text-sm leading-relaxed mt-2">
          Méthodes documentées, produits calibrés par surface et par état. Une
          seule équipe, un niveau d’exigence constant.
        </p>
      </div>
      <a href="/#contact" className="btn-primary px-6 py-3 text-sm font-medium">
        Réserver un créneau
      </a>
    </div>
  );
}
