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
      backgroundColor: {
        'white-opacity-50': 'rgba(255, 255, 255, 0.5)',
        'white-opacity-75': 'rgba(255, 255, 255, 0.75)',
        'white-opacity-10': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        greatvibes: 'greatvibes, cursive',
        Heavitas: 'Heavitas, sans-serif',
        Brittany: 'BrittanySignature, cursive',
        RobotoLight: 'Roboto-Light, sans-serif'
      },
      colors: {
        'pastel-pink': '#FFD1DC',
        'pastel-blue': '#A7C7E7',
        'lavender': '#E6E6FA',
      },
    },
  },
  plugins: [],
}
export default config
