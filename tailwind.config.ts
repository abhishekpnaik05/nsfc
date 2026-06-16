import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          navy: '#0F172A',
          slate: '#1E293B',
          gold: '#C0A062',
          goldHover: '#D4AF37',
          text: '#F8FAFC',
          background: '#020617',
          card: 'rgba(255,255,255,0.05)',
          black: '#0a0a0a',
          dark: '#1a1a1a',
          charcoal: '#2d2d2d',
        },
        gold: {
          50: '#faf7f0',
          100: '#f5efe0',
          200: '#e8dfc1',
          300: '#dbcea2',
          400: '#C0A062',
          500: '#C0A062',
          600: '#9a804e',
          700: '#74603a',
          800: '#4e4027',
          900: '#282013',
        },
      },
      fontFamily: {
        sans: ['var(--font-playfair)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
