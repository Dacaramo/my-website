import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFFFFF',
        'pale-acid-green': '#DAF4B5',
        'acid-green': '#AFFC41',
        'pale-prune': '#4E2156',
        prune: '#3C1642',
        'pale-black': '#1D1A1A',
        black: '#000000',
      },
      fontFamily: {
        sans: ['var(--font-rubik)'],
      },
    },
  },
  plugins: [],
};
export default config;
