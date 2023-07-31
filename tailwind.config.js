/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
    },
    extend: {
      spacing: {
        100: '28rem',
        104: '32rem',
        108: '36rem',
        112: '40rem',
      },
      fontFamily: {
        primary: 'var(--font-titillium)',
        playfair: 'var(--font-playfair)',
      },
      colors: {
        secondary: '#F3F8FF',
        accent: '#F5C070',
        tcolor: '#575A7B',
        primary: {
          500: '#6658EA',
          900: '#1B1642',
        },
      },
    },
  },
};

export default config;
