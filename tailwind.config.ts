import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black100: '#191F28',
        cyan100: '#43DDFF',
        blue100: '#3646DB',
        sky100: '#0EA5E9',
        yellow100: '#F59E0B',
        purple100: '#8B5CF6',
        pink100: '#F43F5E',
        sky10: '#D1F0FB',
      },
      spacing: {
        18: '4.5rem',
      },
      fontSize: {
        '2.5xl': ['1.75rem', '2rem'],
        '4.5xl': ['2.5rem', '2.75rem'],
        '6.5xl': ['4.25rem', '1'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(1%)',
            'animation-timing-function': 'cubic-bezier(0.1,0,0,0.5)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.1,0)',
          },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
