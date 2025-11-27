'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';

export default function ModernCTA() {
  return (
    <section
      id="reservation"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration - super léger */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-4xl overflow-hidden shadow-2xl"
        >
          <div className="p-10 md:p-16">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-neutral-50 rounded-full px-5 py-2.5 mb-6 shadow-sm">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-neutral-800">
                  Réservation Rapide
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Prêt à sublimer votre véhicule ?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour un devis gratuit et
                personnalisé. Réponse sous 24h garantie.
              </p>
            </div>

            {/* Contact methods - rounded-4xl */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <a
                href="tel:+330615944934"
                className="group flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-4xl hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-1">
                  Téléphone
                </div>
                <div className="text-lg font-semibold text-neutral-900">
                  06 15 94 49 34
                </div>
              </a>

              <a
                href="mailto:contact@example.com"
                className="group flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-4xl hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-1">
                  Email
                </div>
                <div className="text-lg font-semibold text-neutral-900">
                  contact@nassim.fr
                </div>
              </a>

              <div className="group flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-4xl shadow-lg">
                <div className="w-12 h-12 rounded-3xl bg-green-50 flex items-center justify-center text-green-600 mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-1">
                  Zone
                </div>
                <div className="text-lg font-semibold text-neutral-900">
                  Alpes-Maritimes
                </div>
              </div>
            </div>

            {/* Main CTA - rounded-4xl */}
            <div className="text-center">
              <Link
                href="/auto"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-4xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                Prendre rendez-vous maintenant
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="mt-6 text-sm text-neutral-500">
                Réponse sous 24h • Devis gratuit • Aucun engagement
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-neutral-100">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-semibold">
                  ✓
                </div>
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-semibold">
                  ✓
                </div>
                <span>Satisfait ou remboursé</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-semibold">
                  ✓
                </div>
                <span>Garantie qualité</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
