'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Footer() {
  const pathname = usePathname();

  // Détection de la page
  const isPro = pathname?.startsWith('/pro');

  return (
    <footer
      className={cn(
        'relative overflow-hidden border-t',
        isPro
          ? 'bg-white border-neutral-300'
          : 'bg-neutral-950 border-neutral-900'
      )}
    >
      {/* Bande tricolore */}
      <div className="ribbon-fr">
        <span />
      </div>

      {/* Légère texture */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 opacity-[0.06]',
          isPro
            ? 'bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_70%)]'
            : 'bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_70%)]'
        )}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Logos */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-auto.png"
                alt="Logo Detailing Auto"
                width={110}
                height={110}
                className="object-contain rounded-4xl"
              />
              <Image
                src="/logo-pro.png"
                alt="Logo Nettoyage Pro"
                width={110}
                height={110}
                className="object-contain rounded-4xl"
              />
            </div>

            <p
              className={cn(
                'mt-4 text-sm max-w-sm leading-relaxed',
                isPro ? 'text-neutral-700' : 'text-neutral-300'
              )}
            >
              Detailing automobile & nettoyage professionnel. Une exigence
              française, du véhicule aux espaces.
            </p>
          </div>

          {/* Navigation */}
          <nav
            className={cn(
              'text-sm grid grid-cols-2 gap-y-2 gap-x-6 max-w-xs',
              isPro ? 'text-neutral-700' : 'text-neutral-200'
            )}
          >
            <a
              href="/auto"
              className={cn(
                'transition',
                isPro ? 'hover:text-neutral-900' : 'hover:text-neutral-100'
              )}
            >
              Detailing Auto
            </a>
            <a
              href="/pro"
              className={cn(
                'transition',
                isPro ? 'hover:text-neutral-900' : 'hover:text-neutral-100'
              )}
            >
              Nettoyage Pro
            </a>
            <a
              href="/photos"
              className={cn(
                'transition',
                isPro ? 'hover:text-neutral-900' : 'hover:text-neutral-100'
              )}
            >
              Avant / Après
            </a>
            <a
              href="/#contact"
              className={cn(
                'transition',
                isPro ? 'hover:text-neutral-900' : 'hover:text-neutral-100'
              )}
            >
              Contact
            </a>

            <a
              href="/#expertise"
              className={cn(
                'transition',
                isPro ? 'hover:text-neutral-900' : 'hover:text-neutral-100'
              )}
            >
              Expertise
            </a>
          </nav>

          {/* Infos pratiques */}
          <div
            className={cn(
              'text-sm leading-relaxed',
              isPro ? 'text-neutral-700' : 'text-neutral-200'
            )}
          >
            <p>Cannes</p>
            <p className="mt-1">contact@nettoyageriviera.com</p>
            <p className="mt-1">Lun–Sam · 8h–20h</p>
          </div>
        </div>

        {/* Bas de page */}
        <div
          className={cn(
            'mt-12 flex flex-col md:flex-row items-center justify-between gap-3 text-xs border-t pt-6',
            isPro
              ? 'text-neutral-600 border-neutral-300'
              : 'text-neutral-400 border-neutral-800/80'
          )}
        >
          <span>
            © {new Date().getFullYear()} French Detailing — Tous droits réservés
          </span>
        </div>
      </div>
    </footer>
  );
}
