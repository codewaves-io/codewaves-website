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
  description:
    'Pregateste te pentru examenul de bacalaureat cu ajutorul inteligentei artificiale.',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={`${titillium.variable} ${playfair.variable}`}>
      <body>
        <nav className='sticky top-0 flex h-24 w-full items-center justify-between border-b border-solid  border-accent bg-secondary px-24'>
          <h1 className='text-center font-playfair text-3xl text-primary-900'>
            Codewaves
          </h1>
          <div className='align-center flex [&>p]:ml-8 [&>p]:cursor-pointer [&>p]:text-primary-900'>
            <p>Acasa</p>
            <p>Despre Noi</p>
            <p>Proces</p>
            <p>Contact</p>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
