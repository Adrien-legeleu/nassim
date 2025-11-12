'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';

const infos = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Téléphone',
    value: '06 15 94 49 34',
    href: 'tel:+330615944934',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'contact@nettoyageriviera.com',
    href: 'mailto:contact@nettoyageriviera.com',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Zone d'intervention",
    value: 'Île-de-France & région parisienne',
    href: null,
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Disponibilité',
    value: 'Lun - Sam • 8h - 19h',
    href: null,
  },
  {
    icon: <Award className="w-5 h-5" />,
    label: 'Expertise',
    value: "5+ ans d'expérience professionnelle",
    href: null,
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: 'Garantie',
    value: 'RC Pro • Satisfait ou refait',
    href: null,
  },
];

export default function InfoSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Background decoration - super léger */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/[0.015] rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-[#ed2939]/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-neutral-50 rounded-full px-4 py-2 mb-4 border border-neutral-100"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-neutral-800">
              Informations & Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3"
          >
            Votre partenaire detailing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-neutral-600"
          >
            À votre service pour vos véhicules et espaces professionnels
          </motion.p>
        </div>

        {/* Grid d'informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {infos.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  className="block h-full p-5 bg-white rounded-[2rem] border border-neutral-100/60 shadow-2xl shadow-black/8 hover:shadow-md hover:border-blue-200/60 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-blue-50/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-100/80 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-neutral-500 mb-1">
                        {info.label}
                      </div>
                      <div className="text-sm font-semibold text-neutral-900 break-words">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="h-full p-5 bg-white rounded-[2rem] border border-neutral-100/60 shadow-2xl shadow-black/8 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-600">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-neutral-500 mb-1">
                        {info.label}
                      </div>
                      <div className="text-sm font-semibold text-neutral-900 break-words">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center p-10 bg-gradient-to-br from-blue-50/50 to-neutral-50/50 rounded-[2rem] border border-neutral-100/60"
        >
          <p className="text-sm text-neutral-600 mb-4">
            <span className="font-semibold text-neutral-900">
              Intervention rapide
            </span>{' '}
            • Devis gratuit sous 24h • Produits premium
          </p>
          <a
            href="/#reservation"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-80 text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Prendre rendez-vous
          </a>
        </motion.div>
      </div>
    </section>
  );
}
