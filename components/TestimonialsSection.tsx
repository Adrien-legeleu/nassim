'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Propriétaire Porsche 911',
    content:
      'Service exceptionnel ! Ma Porsche n\'a jamais été aussi belle. Le polissage et la protection céramique ont transformé la voiture. L\'équipe est professionnelle et passionnée.',
    rating: 5,
    location: 'Paris',
  },
  {
    name: 'Marc Dubois',
    role: 'Gérant Boutique de Luxe',
    content:
      'Nos vitrines sont impeccables depuis que nous faisons appel à leurs services. Ponctualité, discrétion et résultat parfait. Je recommande vivement pour tous les commerces premium.',
    rating: 5,
    location: 'Lyon',
  },
  {
    name: 'Julie Lefebvre',
    role: 'Propriétaire BMW M4',
    content:
      'Incroyable travail sur ma BMW ! La correction de peinture a effacé toutes les micro-rayures. Le résultat est bluffant, on dirait une voiture neuve. Tarif justifié par la qualité.',
    rating: 5,
    location: 'Marseille',
  },
  {
    name: 'Thomas Bernard',
    role: 'Directeur Hôtel 5 étoiles',
    content:
      'Professionnalisme exemplaire. Ils entretiennent nos espaces depuis 2 ans et nous n\'avons jamais été déçus. Leurs équipes sont discrètes et le résultat est toujours impeccable.',
    rating: 5,
    location: 'Nice',
  },
  {
    name: 'Isabelle Petit',
    role: 'Collectionneuse Automobile',
    content:
      'J\'ai confié ma collection de véhicules anciens et le résultat dépasse mes attentes. Ils comprennent les besoins spécifiques de chaque véhicule. Une vraie expertise.',
    rating: 5,
    location: 'Bordeaux',
  },
  {
    name: 'Alexandre Roux',
    role: 'Propriétaire Audi RS6',
    content:
      'Le meilleur detailing que j\'ai eu ! Attention aux détails, produits premium, et un résultat qui tient dans le temps. La protection céramique est toujours nickel après 18 mois.',
    rating: 5,
    location: 'Toulouse',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      {/* Background decoration - super léger */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 mb-6 shadow-2xl shadow-black/8"
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-neutral-800">Avis Clients</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Ils nous font confiance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Plus de 500 clients satisfaits nous recommandent.
            Découvrez leurs témoignages authentiques.
          </motion.p>
        </div>

        {/* Testimonials grid - rounded-4xl */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-4xl p-8 hover:shadow-2xl transition-shadow duration-300 shadow-2xl shadow-black/8"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-5">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 mb-6 leading-relaxed relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-neutral-100 pt-4">
                <div className="font-semibold text-neutral-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
                <div className="text-xs text-neutral-500 mt-1">
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators - rounded-4xl */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-white rounded-4xl px-12 py-8 shadow-2xl shadow-black/12">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="flex gap-1 mb-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <div className="text-sm text-neutral-600">Note moyenne</div>
            </div>

            <div className="h-12 w-px bg-neutral-200" />

            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-neutral-600">Avis vérifiés</div>
            </div>

            <div className="h-12 w-px bg-neutral-200" />

            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-neutral-600">Recommandent</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
