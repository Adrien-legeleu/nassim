'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Shield,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Sparkles,
  Heart,
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Expertise Reconnue',
    description:
      "Plus de 10 ans d'expérience dans le detailing automobile et le nettoyage professionnel. Formés aux dernières techniques.",
  },
  {
    icon: Shield,
    title: 'Garantie Qualité',
    description:
      'Satisfait ou refait. Nous garantissons tous nos travaux et utilisons uniquement des produits premium certifiés.',
  },
  {
    icon: Users,
    title: '500+ Clients Satisfaits',
    description:
      'Une communauté de clients fidèles qui nous recommandent. 98% de satisfaction client mesurée.',
  },
  {
    icon: TrendingUp,
    title: 'Résultats Durables',
    description:
      "Des protections qui durent vraiment. Protection céramique garantie jusqu'à 5 ans avec un entretien adapté.",
  },
  {
    icon: Clock,
    title: 'Réactivité & Ponctualité',
    description:
      'Rendez-vous sous 48h, intervention dans les délais convenus. Votre temps est précieux, nous le respectons.',
  },
  {
    icon: Sparkles,
    title: 'Produits Premium',
    description:
      'Nous travaillons exclusivement avec les meilleures marques : Koch Chemie, Gyeon, CarPro, 3M.',
  },
];

const stats = [
  {
    icon: CheckCircle,
    value: '500+',
    label: 'Véhicules traités',
  },
  {
    icon: Award,
    value: '10 ans',
    label: "D'expérience",
  },
  {
    icon: Users,
    value: '98%',
    label: 'Satisfaction client',
  },
  {
    icon: Heart,
    value: '4.9/5',
    label: 'Note moyenne',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      {/* Background decoration - super léger */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-600/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-neutral-800">
              Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Pourquoi nous choisir ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            L&apos;excellence n&apos;est pas un hasard. Découvrez ce qui fait
            notre différence et pourquoi nos clients nous recommandent.
          </motion.p>
        </div>

        {/* Stats bar - rounded-4xl */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-4xl p-6 text-center hover:shadow-xl transition-shadow shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-3xl bg-blue-50 text-blue-600 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Reasons grid - rounded-4xl */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-4xl p-8 hover:shadow-2xl transition-all duration-300 group shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-blue-50 group-hover:bg-blue-100 text-blue-600 mb-6 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - bleu uni, rounded-4xl */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-blue-600 rounded-4xl p-12 text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à découvrir la différence ?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez nos 500+ clients satisfaits et offrez à votre véhicule ou
            vos espaces le traitement qu&apos;ils méritent.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-4xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Réserver maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
