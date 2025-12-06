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

  const isPro = pathname === '/pro';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerClasses = [
    scrolled ? 'h-16 md:h-[64px]' : 'h-14 md:h-[60px]',
    'rounded-3xl lg:w-4/5 w-[90%] mx-auto max-w-7xl pl-2 pr-3',
    'flex justify-between items-center',
    'transition-[background,box-shadow,border,color] max-md:bg-none duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
    isPro
      ? scrolled
        ? 'md:bg-white/70 md:backdrop-blur md:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)] text-neutral-900'
        : 'md:bg-white/70 md:backdrop-blur text-neutral-900'
      : scrolled
      ? 'md:bg-black/85  md:backdrop-blur md:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] text-white'
      : 'md:bg-black/70  md:backdrop-blur text-white',
  ].join(' ');

  const mobileBurgerClasses = [
    'md:hidden inline-flex items-center gap-2 rounded-[1.3rem] px-3 py-3 active:scale-95 transition border shadow-sm',
    isPro
      ? 'text-neutral-900 bg-white/80 backdrop-blur border-black/5'
      : 'text-white bg-black/80 backdrop-blur border-white/15',
  ].join(' ');

  return (
    <>
      {/* === HEADER FIXE === */}
      <motion.header
        role="banner"
        className="fixed top-3 md:top-4 w-full left-1/2 -translate-x-1/2 z-50"
        layout
        initial={false}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div layout className={containerClasses}>
          {/* Logos */}
          <div className="flex items-center gap-3">
            <Link
              href="/auto"
              className="relative w-10 aspect-square rounded-2xl hover:opacity-90 transition"
              aria-label="French Detailing Auto"
            >
              <Image
                src="/Logo Nassim Rouge.jpeg"
                alt="Logo Auto"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </Link>
            <Link
              href="/pro"
              className="relative w-10 aspect-square rounded-2xl hover:opacity-90 transition"
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

          {/* Desktop nav */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex justify-center"
          >
            <ul className="flex items-center gap-8">
              {NAV.map((item) => {
                const active = pathname === item.href;
                const linkClasses = [
                  'relative text-sm transition-colors',
                  isPro
                    ? active
                      ? 'text-neutral-900'
                      : 'text-neutral-700 hover:text-neutral-900'
                    : active
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white',
                ].join(' ');

                return (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClasses}>
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

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 btn-primary px-4 py-2 text-sm font-medium"
            >
              <Calendar size={16} />
              Réserver
            </Link>
          </div>

          {/* Burger Mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={mobileBurgerClasses}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </motion.header>

      {/* === MENU MOBILE === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={[
              'fixed inset-0 z-40 flex flex-col pt-5 justify-between md:hidden',
              isPro ? 'bg-white text-neutral-900' : 'bg-black text-white',
            ].join(' ')}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center flex-1 gap-10 px-6"
            >
              {/* Accueil */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-2xl pb-2 font-bold"
              >
                Accueil
              </Link>

              {/* Auto + Pro en GRID */}
              <div className="grid grid-cols-2 gap-4 w-full mx-auto max-w-lg">
                <Link
                  href="/auto"
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center w-full h-full gap-2"
                >
                  <div className="relative aspect-square w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/Logo Nassim Rouge.jpeg"
                      alt="Logo Auto"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <p className="text-xs font-bold text-center">
                    Detailing Auto
                  </p>
                </Link>

                <Link
                  href="/pro"
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/logo-pro.png"
                      alt="Logo Pro"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <p className="text-xs font-bold text-center">Nettoyage Pro</p>
                </Link>
              </div>

              {/* Photos */}
              <Link
                href="/photos"
                onClick={() => setOpen(false)}
                className="text-2xl pt-2 font-bold"
              >
                Avant / Après
              </Link>
            </motion.div>

            {/* CTA en bas */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 15, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={[
                'p-5 border-t',
                isPro ? 'border-neutral-100' : 'border-white/10',
              ].join(' ')}
            >
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-white py-4 shadow-[0_20px_45px_rgba(0,0,0,0.15)] active:scale-[0.98] transition"
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
