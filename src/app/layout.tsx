import type { Metadata } from 'next';
import { Titillium_Web, Playfair_Display } from 'next/font/google';
import './global.css';

const titillium = Titillium_Web({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium',
});

const playfair = Playfair_Display({
  weight: '700',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Codewaves',
  description: 'Pregateste te pentru examenul de bacalaureat cu ajutorul inteligentei artificiale.',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${titillium.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
