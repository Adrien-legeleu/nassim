'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  SprayCan,
  Droplets,
  Building2,
} from 'lucide-react';
import { BentoGridShowcaseProAuto } from '../ui/bento-service-features-auto-pro';

export default function AutoServicesBento() {
  return (
    <section className="relative bg-black text-neutral-100 w-full overflow-hidden py-32 px-5 ">
      {/* ==== Halo global et décor tricolore subtil ==== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[140px] opacity-[0.18]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(30,41,59,0.2) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        {/* léger effet “ruban tricolore” en diagonale */}
        <div
          className="absolute rotate-[12deg] left-[10%] top-[35%] w-[1200px] h-[60px] opacity-[0.25] blur-[40px]"
          style={{
            background:
              'linear-gradient(90deg, #0052b4 20%, #ffffff 50%, #d80027 80%)',
          }}
        />

        <div className="hidden md:block absolute top-10 right-1/3 translate-x-1/2 opacity-[0.04]">
          <ShieldCheck className="w-64 h-64 text-slate-500/40" />
        </div>
        {/* cadre intérieur */}
        <div className="absolute inset-[10%] rounded-[2.1rem] md:rounded-[2.6rem] border border-dashed border-neutral-700/50" />
      </div>

      {/* ====== Contenu ====== */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide bg-neutral-900 text-neutral-200"
          >
            Sans survente · Méthode complète
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-4 text-2xl text-neutral-100 md:text-4xl font-semibold tracking-tight tricolor-underline pb-2"
          >
            Ce qui est inclus — clairement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="text-sm md:text-base text-neutral-200 leading-relaxed mt-4"
          >
            L’essentiel du detailing auto haut de gamme : carrosserie,
            intérieur, moteur et finitions. Pas de discours, juste du résultat
            net.
          </motion.p>
        </div>

        {/* ==== GRID BENTO ==== */}
        <div className="relative rounded-[2.5rem] md:rounded-[3rem] border border-neutral-950 bg-black/70 shadow-[0_40px_120px_-30px_rgba(15,23,42,0.1)] p-5 md:p-7 backdrop-blur-[2px] ">
          <BentoGridShowcaseProAuto
            className="relative z-10 mx-auto max-w-[1200px]"
            cardClassName="
              rounded-[2rem] h-full p-6 md:p-7
              border border-neutral-200/60
              shadow-[0_25px_80px_-30px_rgba(2,3,4,0.3)]
              bg-white/85
              backdrop-blur-[3px]
              transition-transform duration-300 hover:scale-[1.015]
            "
            integration={
              <FeatureCard
                icon={<ShieldCheck className="h-5 w-5 text-blue-700" />}
                title="Rénovation carrosserie & vernis"
                items={[
                  'Polissage / correction micro-rayures',
                  'Décontamination carrosserie',
                  'Protection céramique 12–24 mois',
                  'Lustrage haute brillance',
                ]}
                color="blue"
                footer="Objectif : rendu vitrine ou revente — brillance miroir garantie."
              />
            }
            trackers={
              <FeatureCard
                icon={<Sparkles className="h-5 w-5 text-neutral-300" />}
                title="Intérieur complet"
                items={[
                  'Vapeur sièges / moquettes',
                  'Ciel de toit et plastiques',
                  'Volant Alcantara',
                  'Cuir — nettoyage + nutrition',
                ]}
                color="neutral"
              />
            }
            statistic={
              <FeatureCard
                icon={<SprayCan className="h-5 w-5 text-neutral-300" />}
                title="Moteur maîtrisé"
                items={[
                  'Vapeur à froid',
                  'Dégraissage zones sensibles',
                  'Rendu uniforme, pas gras ni brillant',
                ]}
                color="neutral"
              />
            }
            shortcuts={
              <FeatureCard
                icon={<Droplets className="h-5 w-5 text-red-300" />}
                title="Détails qui font la différence"
                items={[
                  'Jantes et étriers',
                  'Plastiques extérieurs ravivés',
                  'Vitres sans traces',
                  'Logos / seuils / contours de portes',
                ]}
                color="red"
              />
            }
            integrationClassName="bg-blue-950/20 border-blue-950/40"
            trackersClassName="bg-neutral-950/40 border-neutral-900/50"
            statisticClassName="bg-neutral-950/40 border-neutral-900/50"
            shortcutsClassName="bg-red-950/20 border-red-950/50"
          />
        </div>
      </div>
    </section>
  );
}

/* === Sous-composant : FeatureCard === */
function FeatureCard({
  icon,
  title,
  items,
  color,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  color?: 'blue' | 'red' | 'neutral';
  footer?: string;
}) {
  const colorMap = {
    blue: {
      badge: 'bg-blue-950/80 border-blue-950 text-blue-600/80',
      bullet: '#2563eb80',
    },
    red: {
      badge: 'bg-[#ed293915] border-[#ed293925] text-red-600/80',
      bullet: '#dc262680',
    },
    neutral: {
      badge: 'bg-neutral-950/80 border-neutral-900 text-neutral-600',
      bullet: '#6b728080',
    },
  };

  const tone = colorMap[color ?? 'neutral'];

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-start gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center  rounded-2xl border font-medium ${tone.badge}`}
          >
            {icon}
          </div>
          <div className="font-medium leading-tight text-neutral-100 text-base md:text-lg">
            {title}
          </div>
        </div>

        {/* Liste */}
        <ul className="mt-5 flex flex-col gap-2 text-neutral-200 text-sm leading-relaxed">
          {items.map((l, i) => (
            <li key={i} className="flex gap-2">
              <div
                className="mt-[7px] h-[6px] w-[6px] rounded-full"
                style={{ background: tone.bullet }}
              />
              <span>{l}</span>
            </li>
          ))}
        </ul>

        {footer && (
          <div className="mt-5 text-neutral-400 text-xs leading-relaxed">
            {footer}
          </div>
        )}
      </div>
      {title == 'Rénovation carrosserie & vernis' && (
        <div className="mt-5 bg-neutral-950 border border-neutral-950 rounded-xl p-3 flex items-start gap-3 text-xs text-neutral-100/80 shadow-[inset_0_1px_6px_rgba(0,0,0,0.8)]">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-950/80 border border-blue-950 text-blue-600/80">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div className="leading-snug">
            <strong className="font-medium ">Durée moyenne :</strong> 4–6 h par
            véhicule selon niveau de correction.
            <br />
            <span className="text-[11px] text-neutral-400">
              Application en local contrôlé, produits premium (Koch Chemie /
              Gyeon).
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
