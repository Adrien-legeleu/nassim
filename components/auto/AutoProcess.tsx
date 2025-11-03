// components/auto/AutoProcess.tsx
'use client';

import { FeatureSteps } from '@/components/blocks/feature-section';

export default function AutoProcess() {
  const features = [
    {
      step: 'Étape 1',
      title: 'Inspection',
      content:
        'État du vernis, cuir et textiles, taches, micro-rayures. On définit ce qui est utile, pas plus.',
      image: '/voiture-7.png',
    },
    {
      step: 'Étape 2',
      title: 'Préparation',
      content:
        'Masquage zones sensibles, aspiration soignée, décontamination (ferreux / goudron) pour une base propre.',
      image: '/voiture-3.png',
    },
    {
      step: 'Étape 3',
      title: 'Traitement',
      content:
        'Polissage contrôlé, vapeur intérieur, protection céramique et nutriments cuir quand pertinent.',
      image: '/voiture-after-8.png',
    },
    {
      step: 'Étape 4',
      title: 'Finition',
      content:
        'Contrôle sous lumières rasantes, dressing propre (sans effet gras), photos finales pour suivi.',
      image: '/voiture-2.Jpg',
    },
  ];

  return (
    <FeatureSteps
      features={features}
      title="Déroulé clair, résultat propre"
      autoPlayInterval={3500}
      imageHeight="h-full"
    />
  );
}
