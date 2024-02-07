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
        cowblue: '#3646DB',
      },
      spacing: {
        18: '4.5rem',
        screen80: '80vh',
        screen50: '50vh',
      },
    },
  },
  plugins: [],
};
export default config;
