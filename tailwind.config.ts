import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vermelho-800': '#3F0D12',
        'vermelho-500': '#A71D31',
        'bege-100': '#F1F0CC',
        'bege-400': '#D5BF86',
        'bege-800': '#8D775F',
      }
    },
    fontFamily: {
      comfortaa: ['var(--font-comfortaa)'],
    },
  },
  plugins: [],
}
export default config
