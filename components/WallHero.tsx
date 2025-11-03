'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  tagline: string;
  title: string;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
};

export default function WallHero({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}: Props) {
  const dup = [...images, ...images];

  const fade = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  } as const;

  return (
    <section
      className={cn(
        'relative w-full h-[80svh] md:h-[86svh] overflow-hidden bg-white flex flex-col items-center justify-center text-center px-4',
        className
      )}
    >
      {/* Glow subtil sur fond blanc */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 50% 10%, rgba(15,23,42,0.08) 0%, rgba(255,255,255,0) 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-3xl">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-4 inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs md:text-sm text-neutral-700 backdrop-blur"
        >
          {tagline}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="text-[2rem] md:text-[3rem] font-semibold tracking-tight text-neutral-900"
        >
          {title.split(' ').map((w, i) => (
            <motion.span key={i} variants={fade} className="inline-block">
              {w}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-xl text-sm md:text-base text-neutral-800 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.2 }}
        >
          <a
            href="/#reservation"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-medium h-11 px-6 hover:opacity-90 transition shadow-[0_18px_50px_-15px_rgba(37,99,235,0.55)]"
          >
            {ctaText}
          </a>
        </motion.div>
      </div>

      {/* Marquee d’images en bas (adaptée au fond blanc) */}
      <div className="absolute bottom-0 left-0 w-full h-[32svh] md:h-[38svh] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
        <motion.div
          className="flex gap-4 will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
          style={{ width: '200%' }}
        >
          {dup.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] h-40 md:h-72 flex-shrink-0"
              style={{ rotate: `${i % 2 === 0 ? -1.5 : 2.5}deg` }}
            >
              <img
                src={src}
                alt={`showcase-${i}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-4xl border border-neutral-200/70 shadow-[0_18px_60px_-25px_rgba(15,23,42,0.3)] bg-neutral-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
