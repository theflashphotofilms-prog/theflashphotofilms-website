import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'forest-green': '#1E3525', // Darker Forest Green
        'soft-gold': '#D2A97F', // Soft Gold
        'ivory': '#F8F4EE', // Warm Ivory
        'cream': '#FDF6EE', // Soft Cream
        'forest-green-hover': '#0F1A14', // Even Darker Forest Green
        'soft-gold-light': '#e2c99f', // Lighter Soft Gold
        'soft-gold-dark': '#c2996f', // Darker Soft Gold
        'light-gray': '#f8fafc',
        'medium-gray': '#64748b',
        'dark-gray': '#334155',
        // Adding the legacy color names that are used in JSX
        'dark-maroon': '#1E3525', // Map to forest green
        'gold': '#D2A97F', // Map to soft gold
        'dark-gold': '#c2996f', // Map to soft gold dark
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #1E3525 0%, #0F1A14 100%)',
        'velvet-texture': 'radial-gradient(circle at 10% 20%, rgba(210, 169, 127, 0.05) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(210, 169, 127, 0.05) 0%, transparent 20%)',
      },
      boxShadow: {
        'luxury': '0 10px 25px rgba(0, 0, 0, 0.2)',
        'luxury-hover': '0 20px 30px rgba(0, 0, 0, 0.3)',
        'gold-glow': '0 0 15px rgba(210, 169, 127, 0.5)',
      },
      borderRadius: {
        'luxury': '0.75rem',
        'pill': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;