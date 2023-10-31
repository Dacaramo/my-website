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
        'translucid-black': {
          200: 'rgba(0, 0, 0, 0.2)',
          700: 'rgba(0, 0, 0, 0.7)',
        },
        'translucid-acid-green': 'rgba(175, 252, 65, 0.20)',
      },
      fontFamily: {
        sans: ['var(--font-rubik)'],
      },
      fontSize: {
        paragraph: '18px',
        subtitle: '30px',
        title: '65px',
      },
      boxShadow: {
        classic: '12px 10px 4px 0 rgba(0, 0, 0, 0.45)',
        'classic-hovered': '6px 5px 4px 0 rgba(0, 0, 0, 0.45)',
        'inverted-classic': '-12px -10px 4px 0 rgba(0, 0, 0, 0.45)',
        'inverted-classic-hovered': '-6px -5px 4px 0 rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
