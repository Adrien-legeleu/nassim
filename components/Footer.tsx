'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white relative overflow-hidden">
      {/* Bande tricolore haut du footer */}
      <div className="ribbon-fr">
        <span />
      </div>

      {/* Légère texture de fond */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.05)_0%,rgba(255,255,255,0)_70%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 py-12">
        {/* Grille principale */}
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Bloc logos */}
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
            <p className="mt-4 text-sm text-neutral-600 max-w-sm leading-relaxed">
              Detailing automobile & nettoyage professionnel. Une exigence
              française, du véhicule aux espaces.
            </p>
          </div>

          {/* Navigation */}
          <nav className="text-sm text-neutral-700 grid grid-cols-2 gap-y-2 gap-x-6 max-w-xs">
            <a href="/auto" className="hover:text-neutral-900 transition">
              Detailing Auto
            </a>
            <a href="/pro" className="hover:text-neutral-900 transition">
              Nettoyage Pro
            </a>
            <a href="/photos" className="hover:text-neutral-900 transition">
              Avant / Après
            </a>
            <a href="/#contact" className="hover:text-neutral-900 transition">
              Contact
            </a>

            <a href="/#expertise" className="hover:text-neutral-900 transition">
              Expertise
            </a>
          </nav>

          {/* Infos pratiques */}
          <div className="text-sm text-neutral-600 leading-relaxed">
            <p>Île-de-France & départements limitrophes</p>
            <p className="mt-1">contact@nettoyageriviera.com</p>
            <p className="mt-1">Lun–Sam · 8h–20h</p>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500 border-t border-neutral-100 pt-6">
          <span>
            © {new Date().getFullYear()} French Detailing — Tous droits réservés
          </span>
        </div>
      </div>
    </footer>
  );
}
