import type { Config } from 'tailwindcss'

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
        'curved-splash': 'linear-gradient(to right, #ff7e5f 50%, transparent 50%), radial-gradient(circle at 50% 100%, #ff7e5f, transparent 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        greatvibes: 'greatvibes, cursive',
        Heavitas: 'Heavitas, sans-serif'
      },
    },
  },
  plugins: [],
}
export default config
