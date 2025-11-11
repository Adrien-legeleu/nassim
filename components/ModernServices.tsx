'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Car,
  Building2,
  Sparkles,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Detailing Automobile',
    description:
      'Sublimez votre véhicule avec nos prestations haut de gamme. Polissage, protection céramique et rénovation complète.',
    features: [
      'Correction de peinture professionnelle',
      'Protection céramique 2-5 ans',
      'Traitement intérieur premium',
      'Décontamination complète',
    ],
    color: 'from-[#ed2939] to-[#c41e3a]',
    link: '/auto',
  },
  {
    icon: Building2,
    title: 'Nettoyage Professionnel',
    description:
      'Espaces professionnels impeccables. Vitrines, bureaux, commerces : une image premium pour votre entreprise.',
    features: [
      'Nettoyage de vitrines sans traces',
      'Entretien régulier programmé',
      'Intervention rapide 24-48h',
      'Produits professionnels écologiques',
    ],
    color: 'from-[#0055A4] to-[#003d82]',
    link: '/pro',
  },
];

export default function ModernServices() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ed2939]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#ed2939]" />
            <span className="text-sm font-medium text-neutral-700">Nos Services Premium</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Excellence & Perfection
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Deux domaines d&apos;expertise, une même exigence de qualité.
            Des prestations sur-mesure pour des résultats exceptionnels.
          </motion.p>
        </div>

        {/* Services cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white rounded-3xl border-2 border-neutral-200 hover:border-neutral-300 overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title & description */}
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ed2939] flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#ed2939] font-semibold hover:gap-3 transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-green-600 mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Garantie Qualité</h4>
            <p className="text-sm text-neutral-600">
              Satisfait ou refait. Notre engagement qualité.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Intervention Rapide</h4>
            <p className="text-sm text-neutral-600">
              Prise de rendez-vous en 24h, intervention sous 72h.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Produits Premium</h4>
            <p className="text-sm text-neutral-600">
              Les meilleures marques professionnelles du marché.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/#reservation"
            className="inline-flex items-center gap-2 bg-[#ed2939] hover:bg-[#d11f2f] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Réserver une prestation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
