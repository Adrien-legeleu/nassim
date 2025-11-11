'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';

export default function ModernCTA() {
  return (
    <section
      id="reservation"
      className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#ed2939]/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border-2 border-neutral-200 overflow-hidden shadow-2xl"
        >
          {/* Top gradient bar */}
          <div className="h-2 bg-gradient-to-r from-[#ed2939] via-white to-[#0055A4]" />

          <div className="p-10 md:p-16">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4 text-[#ed2939]" />
                <span className="text-sm font-medium text-neutral-700">
                  Réservation Rapide
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Prêt à sublimer votre véhicule ?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
                Réponse sous 24h garantie.
              </p>
            </div>

            {/* Contact methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <a
                href="tel:+33123456789"
                className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 hover:border-[#ed2939]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ed2939]/10 flex items-center justify-center text-[#ed2939] mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-1">Téléphone</div>
                <div className="text-lg font-semibold text-neutral-900">
                  01 23 45 67 89
                </div>
              </a>

              <a
                href="mailto:contact@example.com"
                className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 hover:border-[#ed2939]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-1">Email</div>
                <div className="text-lg font-semibold text-neutral-900">
                  contact@nassim.fr
                </div>
              </a>

              <div className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-1">Zone</div>
                <div className="text-lg font-semibold text-neutral-900">
                  Île-de-France
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <Link
                href="/auto"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ed2939] to-[#c41e3a] hover:from-[#d11f2f] hover:to-[#b01930] text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-neutral-200">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  ✓
                </div>
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  ✓
                </div>
                <span>Satisfait ou remboursé</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
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
