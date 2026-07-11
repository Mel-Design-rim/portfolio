import type { Metadata } from 'next';
import { Playfair_Display, Rethink_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const rethink = Rethink_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Cheikh Malainine Aboubacrin — Fullstack Developer & Digital Designer in Nouakchott',
  description:
    'CHEIKH MALAYNINE ABOUBACRIN — Fullstack Developer & Digital Designer. Backend rigor, frontend interactivity & visual production. Based in Nouakchott, Mauritania.',
  openGraph: {
    title: 'MEL DESIGN — Fullstack Developer & Digital Designer',
    description: 'Web development, AI, UI/UX and media production. Top Secret // Case #2026.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${rethink.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
