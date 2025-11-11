'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModernHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ed2939]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 mb-8 shadow-sm"
        >
          <Award className="w-4 h-4 text-[#ed2939]" />
          <span className="text-sm font-medium text-neutral-700">
            N°1 du detailing premium en France
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight"
        >
          Excellence automobile
          <br />
          <span className="bg-gradient-to-r from-[#ed2939] to-[#0055A4] bg-clip-text text-transparent">
            & espaces professionnels
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Des prestations haut de gamme pour sublimer votre véhicule et vos espaces professionnels.
          Techniques professionnelles, résultats exceptionnels.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/#reservation"
            className="group inline-flex items-center gap-2 bg-[#ed2939] hover:bg-[#d11f2f] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Réserver maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 px-8 py-4 rounded-full font-semibold border-2 border-neutral-200 hover:border-neutral-300 transition-all duration-300"
          >
            Découvrir nos services
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#ed2939] mb-2">500+</div>
            <div className="text-sm text-neutral-600">Véhicules traités</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#ed2939] mb-2">98%</div>
            <div className="text-sm text-neutral-600">Clients satisfaits</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#ed2939] mb-2">5★</div>
            <div className="text-sm text-neutral-600">Note moyenne</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#ed2939] mb-2">24-72h</div>
            <div className="text-sm text-neutral-600">Délai moyen</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-neutral-500 font-medium">Découvrir</span>
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neutral-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
