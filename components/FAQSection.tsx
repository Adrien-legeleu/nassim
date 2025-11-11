'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Quels sont vos délais d\'intervention ?',
    answer:
      'Nous proposons généralement un rendez-vous sous 24-48h pour une estimation. L\'intervention elle-même a lieu sous 2-5 jours selon la prestation choisie et notre planning. Pour les urgences, nous pouvons nous adapter.',
  },
  {
    question: 'Combien coûte un detailing complet automobile ?',
    answer:
      'Le tarif varie selon l\'état du véhicule et les prestations choisies. Comptez entre 300€ et 1500€ pour un detailing complet incluant correction de peinture et protection céramique. Nous établissons un devis gratuit après inspection.',
  },
  {
    question: 'Quelle est la durée de vie d\'une protection céramique ?',
    answer:
      'Une protection céramique de qualité dure entre 2 et 5 ans selon les conditions d\'utilisation et l\'entretien. Nous utilisons exclusivement des produits premium offrant une garantie constructeur.',
  },
  {
    question: 'Intervenez-vous sur tous types de véhicules ?',
    answer:
      'Oui, nous traitons tous types de véhicules : voitures de luxe, sportives, SUV, véhicules anciens, motos, camping-cars. Chaque véhicule bénéficie d\'un traitement adapté à ses spécificités.',
  },
  {
    question: 'Proposez-vous des contrats d\'entretien régulier pour les professionnels ?',
    answer:
      'Absolument. Nous proposons des contrats d\'entretien mensuel ou trimestriel pour les espaces professionnels : boutiques, hôtels, restaurants, bureaux. Tarifs dégressifs selon la fréquence.',
  },
  {
    question: 'Utilisez-vous des produits écologiques ?',
    answer:
      'Nous privilégions des produits professionnels respectueux de l\'environnement tout en garantissant une efficacité maximale. Nos méthodes de nettoyage limitent la consommation d\'eau et les rejets polluants.',
  },
  {
    question: 'Offrez-vous une garantie sur vos prestations ?',
    answer:
      'Oui, toutes nos prestations sont garanties "satisfait ou refait". En cas de problème, nous intervenons gratuitement. Les protections céramiques bénéficient de la garantie fabricant (2-5 ans selon le produit).',
  },
  {
    question: 'Puis-je avoir un devis en ligne ?',
    answer:
      'Nous préférons établir un devis précis après inspection du véhicule ou des locaux pour vous garantir un tarif juste. Contactez-nous pour planifier une visite gratuite, vous recevrez votre devis sous 24h.',
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-shadow shadow-lg"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-neutral-900 pr-8">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-neutral-600 leading-relaxed">{answer}</div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 mb-6 shadow-lg"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-neutral-800">
              Questions Fréquentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Vos questions, nos réponses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600"
          >
            Tout ce que vous devez savoir sur nos prestations.
            Une question ? Contactez-nous !
          </motion.p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-neutral-600 mb-6">
            Notre équipe est là pour répondre à toutes vos questions
          </p>
          <a
            href="/#reservation"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
