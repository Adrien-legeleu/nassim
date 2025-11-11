'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Building2, Car, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = {
  pro: {
    title: 'Espaces Pro',
    subtitle: 'Commerces & Établissements',
    icon: '/voiture-landing_2.jpg',
    color: 'red',
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
  },
  auto: {
    title: 'Detailing Auto',
    subtitle: 'Véhicules Premium',
    icon: '/city-square.jpg',
    color: 'blue',
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
  },
};

export default function ServicesComparisonTable() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#ed2939]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 border border-neutral-200 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-neutral-800">
              Nos Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3"
          >
            Solutions Auto & Pro
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-neutral-600 max-w-2xl mx-auto"
          >
            Découvrez notre gamme complète de services pour véhicules et espaces
            professionnels
          </motion.p>
        </div>

        {/* Table wrapper with horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Scroll hint on mobile */}
          <div className="md:hidden text-center mb-3">
            <span className="text-xs text-neutral-500 inline-flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              Glissez pour voir plus
            </span>
          </div>

          {/* Scrollable container */}
          <div className="rounded-[2rem] pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="">
              <div className=" rounded-[2rem] shadow-2xl shadow-black/8 border border-neutral-100  ">
                {/* Table header */}
                <div className="grid grid-cols-2 rounded-t-[2rem] bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-100">
                  {/* Pro column header */}
                  <div className="p-6 md:p-8 border-r border-neutral-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl  flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                        <Image
                          src={services.pro.icon}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover rounded-2xl"
                          alt="Logo"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1">
                          {services.auto.title}
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-600">
                          {services.auto.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Auto column header */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl  flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                        <Image
                          src={services.auto.icon}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover rounded-2xl"
                          alt="Logo"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1">
                          {services.pro.title}
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-600">
                          {services.pro.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table body - Services list */}
                <div className="grid grid-cols-2">
                  {/* Auto services */}
                  <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50/30 to-white">
                    <ul className="space-y-3">
                      {services.auto.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-[0.7rem] bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                            <Check
                              className="w-3 h-3 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-sm md:text-base text-neutral-700 font-medium">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                      <Link
                        className="text-neutral-400 underline-offset-4 underline text-sm mt-4"
                        href="/auto"
                      >
                        En savoir plus
                      </Link>
                    </ul>
                  </div>
                  <div className="p-6 md:p-8 border-r border-neutral-100 bg-gradient-to-br from-red-50/30 to-white">
                    <ul className="space-y-3">
                      {services.pro.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-[0.7rem] bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                            <Check
                              className="w-3 h-3 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-sm md:text-base text-neutral-700 font-medium">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                      <Link
                        className="text-neutral-400 underline-offset-4 underline text-sm mt-4"
                        href="/pro"
                      >
                        En savoir plus
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Table footer with CTA */}
                <div className="p-6 md:p-8 bg-gradient-to-r rounded-b-[2rem] from-neutral-50 via-white to-neutral-50 border-t border-neutral-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-sm font-semibold text-neutral-900 mb-1">
                        Devis gratuit sous 24h
                      </p>
                      <p className="text-xs text-neutral-600">
                        Intervention rapide • RC Pro • Produits premium
                      </p>
                    </div>
                    <a
                      href="/#reservation"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group whitespace-nowrap"
                    >
                      <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Réserver maintenant
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative gradient borders */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ed2939]/10 via-transparent to-blue-600/10 rounded-3xl blur-2xl -z-10 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
