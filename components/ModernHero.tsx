'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModernHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background decorative elements - super légers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge avec blur animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 mb-8 shadow-2xl shadow-black/8"
        >
          <Award className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-neutral-800">
            N°1 du detailing premium en France
          </span>
        </motion.div>

        {/* Main heading avec blur */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight"
          style={{
            textShadow: '0 6px 40px rgba(0,0,0,0.15), 0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          Excellence automobile
          <br />
          <span className="text-blue-600">
            & espaces professionnels
          </span>
        </motion.h1>

        {/* Subheading avec blur */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Des prestations haut de gamme pour sublimer votre véhicule et vos espaces professionnels.
          Techniques professionnelles, résultats exceptionnels.
        </motion.p>

        {/* CTAs avec blur et shadow légères */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/#reservation"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-black/8 hover:shadow-black/12 transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Réserver maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 px-8 py-4 rounded-full font-semibold shadow-2xl shadow-black/8 hover:shadow-black/12 transition-all duration-300"
          >
            Découvrir nos services
          </Link>
        </motion.div>

        {/* Trust indicators - cards avec shadow légères */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-[3rem] p-6 hover:shadow-2xl hover:shadow-black/12 transition-shadow shadow-2xl shadow-black/8"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-neutral-600">Véhicules traités</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-[3rem] p-6 hover:shadow-2xl hover:shadow-black/12 transition-shadow shadow-2xl shadow-black/8"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-neutral-600">Clients satisfaits</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-[3rem] p-6 hover:shadow-2xl hover:shadow-black/12 transition-shadow shadow-2xl shadow-black/8"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
            <div className="text-sm text-neutral-600">Note moyenne</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-[3rem] p-6 hover:shadow-2xl hover:shadow-black/12 transition-shadow shadow-2xl shadow-black/8"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">24-72h</div>
            <div className="text-sm text-neutral-600">Délai moyen</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
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
