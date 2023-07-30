/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        primary: 'var(--font-titillium)',
      },
      colors: {
        secondary: '#F3F8FF',
        accent: '#F5C070',
        primary: {
          500: '#6658EA',
          900: '#1B1642',
        },
      },
    },
  },
};
