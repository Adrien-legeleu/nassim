'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      ease: 'easeOut',
      duration: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
};

interface BentoGridShowcaseProps {
  integration: React.ReactNode;
  trackers: React.ReactNode;
  statistic: React.ReactNode;

  shortcuts: React.ReactNode;

  className?: string;
  cardClassName?: string;

  /* 👇 Nouveaux props pour personnaliser le fond de chaque carte */
  integrationClassName?: string;
  trackersClassName?: string;
  statisticClassName?: string;

  shortcutsClassName?: string;
}

export function BentoGridShowcaseProAuto({
  integration,
  trackers,
  statistic,

  shortcuts,
  className,
  cardClassName = `
    rounded-[2rem] h-full p-6 md:p-8
    border 
    shadow-[0_30px_120px_-20px_rgba(0,0,0,0.08)]
    bg-white
  `,
  integrationClassName,
  trackersClassName,
  statisticClassName,

  shortcutsClassName,
}: BentoGridShowcaseProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        'grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2',
        'auto-rows-[minmax(180px,auto)]',
        className
      )}
    >
      <motion.div
        variants={itemVariants}
        className={cn(
          'md:col-span-1 md:row-span-2',
          cardClassName,
          integrationClassName
        )}
      >
        {integration}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={cn(
          'md:col-span-1 md:row-span-1',
          cardClassName,
          trackersClassName
        )}
      >
        {trackers}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={cn(
          'md:col-span-1 md:row-span-1',
          cardClassName,
          statisticClassName
        )}
      >
        {statistic}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={cn(
          'md:col-span-2 md:row-span-1',
          cardClassName,
          shortcutsClassName
        )}
      >
        {shortcuts}
      </motion.div>
    </motion.section>
  );
}
