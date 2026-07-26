import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Changed from default 'media' to 'class' to prevent automatic dark mode activation
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#3A5A40', // Forest Green (was old maroon)
        'soft-gold': '#D2A97F', // Soft Gold (was old gold)
        'forest-green-hover': '#2a4a30', // Darker Forest Green
        'soft-gold-light': '#e2c99f', // Lighter Soft Gold
        'soft-gold-dark': '#c2996f', // Darker Soft Gold
        'light-gray': '#f8fafc',
        'medium-gray': '#64748b',
        'dark-gray': '#334155',
        // Adding the legacy color names that are used in JSX
        'dark-maroon': '#3A5A40', // Map to forest green
        'gold': '#D2A97F', // Map to soft gold
        'dark-gold': '#c2996f', // Map to soft gold dark
      },
    },
  },
  plugins: [],
};
export default config;