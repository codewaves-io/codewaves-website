import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import './global.css';

const titillium = Titillium_Web({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium',
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
    <html lang="en">
      <body className={titillium.className}>{children}</body>
    </html>
  );
}
