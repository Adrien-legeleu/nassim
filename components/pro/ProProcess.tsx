'use client';

import { FeatureSteps } from '@/components/blocks/feature-section';

export default function ProProcess() {
  const features = [
    {
      step: 'Étape 1',
      title: 'Repérage & protection',
      content:
        'Tour des zones sensibles (vitrines, encadrements, sols). Protection des abords et signalisation.',
      image: '/city-square.jpg',
    },
    {
      step: 'Étape 2',
      title: 'Préparation propre',
      content:
        'Dépoussiérage, enlèvement des adhésifs, préparation vitres et surfaces pour une finition nette.',
      image: '/pro-after-1.webp',
    },
    {
      step: 'Étape 3',
      title: 'Finitions visibles',
      content:
        'Vitres sans auréoles, inox maîtrisé, plinthes/angles — rendu immédiatement présentable.',
      image: '/pro-after-4.webp',
    },
    {
      step: 'Étape 4',
      title: 'Contrôle & planning',
      content:
        'Vérification sous plusieurs angles, puis proposition de passage récurrent si besoin.',
      image: '/pro.webp',
    },
  ];

  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <FeatureSteps
          features={features}
          title="Déroulé clair, rendu pro"
          autoPlayInterval={3500}
          imageHeight="h-full"
        />
      </div>
    </section>
  );
}
