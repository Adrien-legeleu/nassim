'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Menu, X } from 'lucide-react';
import Image from 'next/image';

const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/auto', label: 'Detailing Auto' },
  { href: '/pro', label: 'Nettoyage Pro' },
  { href: '/photos', label: 'Avant / Après' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        role="banner"
        className="fixed top-3 md:top-4 w-full left-1/2 -translate-x-1/2 z-50"
        layout
        initial={false}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          layout
          className={[
            scrolled ? 'h-14 md:h-[60px]' : 'h-12 md:h-[54px]',
            'rounded-3xl lg:w-4/5 w-[90%] mx-auto max-w-7xl pl-2 pr-3',
            'flex justify-between items-center',
            'transition-[background,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            scrolled
              ? 'bg-white/70 backdrop-blur shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)]'
              : 'bg-white/70 backdrop-blur ',
          ].join(' ')}
        >
          {/* === Logos à gauche === */}
          <div className="flex items-center gap-3">
            <Link
              href="/auto"
              className="relative w-10 aspect-square rounded-2xl  hover:opacity-90 transition"
              aria-label="French Detailing Auto"
            >
              <Image
                src="/logo-auto.png"
                alt="Logo Auto"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </Link>
            <Link
              href="/pro"
              className="relative w-10 aspect-square rounded-2xl  hover:opacity-90 transition"
              aria-label="French Detailing Pro"
            >
              <Image
                src="/logo-pro.png"
                alt="Logo Pro"
                fill
                className="object-cover rounded-2xl"
              />
            </Link>
          </div>

          {/* === Nav (desktop) === */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex justify-center"
          >
            <ul className="flex items-center gap-8">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        'relative text-sm transition-colors',
                        active
                          ? 'text-neutral-900'
                          : 'text-neutral-700 hover:text-neutral-900',
                      ].join(' ')}
                    >
                      {item.label}
                      <span
                        className={[
                          'absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] rounded-full transition-all duration-300',
                          active ? 'w-6' : 'w-0',
                        ].join(' ')}
                        style={{ background: 'var(--color-primary)' }}
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* === CTA (desktop) === */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#reservation"
              className="inline-flex items-center gap-2 btn-primary px-4 py-2 text-sm font-medium"
            >
              <Calendar size={16} />
              Réserver
            </Link>
          </div>

          {/* === Burger (mobile) === */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden justify-self-end inline-flex items-center justify-center rounded-full p-2 text-neutral-800 hover:bg-neutral-100 transition"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </motion.div>
      </motion.header>

      {/* === Overlay mobile === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            <ul className="flex flex-col items-center gap-6">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-medium text-white"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                delay: 0.25,
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href="/#reservation"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 btn-primary px-6 py-3 text-base font-medium"
              >
                <Calendar size={18} />
                Réserver un créneau
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
