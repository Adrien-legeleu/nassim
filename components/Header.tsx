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
      {/* === HEADER FIXE === */}
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
            scrolled ? 'h-16 md:h-[64px]' : 'h-14 md:h-[60px]',
            'rounded-3xl lg:w-4/5 w-[90%] mx-auto max-w-7xl pl-2 pr-3',
            'flex justify-between items-center',
            'transition-[background,box-shadow] max-md:bg-none duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            scrolled
              ? 'md:bg-white/70 md:backdrop-blur md:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)]'
              : 'md:bg-white/70 md:backdrop-blur',
          ].join(' ')}
        >
          {/* Logos */}
          <div className="flex items-center gap-3">
            <Link
              href="/auto"
              className="relative w-10 aspect-square rounded-2xl hover:opacity-90 transition"
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
            className="md:hidden inline-flex items-center gap-2 rounded-[1.3rem] px-3 py-3 text-neutral-900 bg-white/80 backdrop-blur border border-black/5 shadow-sm active:scale-95 transition"
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
            className="fixed inset-0 z-40 bg-white flex flex-col pt-5 justify-between md:hidden"
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
                className="text-2xl pb-2 font-bold text-neutral-900"
              >
                Accueil
              </Link>

              {/* Auto + Pro en GRID */}
              <div className="grid grid-cols-2 gap-4 w-full mx-auto max-w-lg">
                <Link
                  href="/auto"
                  onClick={() => setOpen(false)}
                  className=" flex flex-col items-center w-full h-full gap-2"
                >
                  <div className="relative aspect-square w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/logo-auto.png"
                      alt="Logo Auto"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <p className="text-xs font-bold text-neutral-900 text-center">
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
                  <p className="text-xs font-bold text-neutral-900 text-center">
                    Nettoyage Pro
                  </p>
                </Link>
              </div>

              {/* Photos */}
              <Link
                href="/photos"
                onClick={() => setOpen(false)}
                className="text-2xl pt-2 font-bold text-neutral-900"
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
              className="p-5 border-t border-neutral-100"
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
