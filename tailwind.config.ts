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
        'dark-maroon': '#3A5A40', // Forest Green (was old maroon)
        'gold': '#D2A97F', // Soft Gold (was old gold)
        'medium-gray': '#555555',
        // Extended brand colors for states
        'dark-maroon-hover': '#2a4a30', // Darker Forest Green
        'gold-light': '#e2c99f', // Lighter Soft Gold
        'gold-dark': '#c2996f', // Darker Soft Gold
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'velvet-texture': 'linear-gradient(135deg, #3A5A40 0%, #4a6a50 50%, #3A5A40 100%)',
      },
    },
  },
  plugins: [],
}
export default config