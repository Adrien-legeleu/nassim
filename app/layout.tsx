import type { Metadata } from 'next';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'French Detailing — Detailing Auto & Nettoyage Pro',
  description:
    'Finition irréprochable, résultat visible. Detailing automobile & nettoyage professionnel au standard premium.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${manrope.variable} ${plexMono.variable}`}>
      <body className="antialiased bg-secondary w-full h-full overflow-hidden text-light">
        {/* Header 100% transparent, fixé en haut */}
        <Header />

        {/* Contenu de page */}
        <main>{children}</main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
