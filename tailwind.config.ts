import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#18191A',
          secondary: '#242526',
          border: '#3E4042',
          text: '#E4E6EA',
        },
        light: {
          background: '#f8f9fa',
          secondary: '#ffffff',
          border: '#e5e7eb',
          text: '#333333',
        },
        accent: {
          DEFAULT: '#1877f2',
          light: '#1565C0',
          hero: '#42A5F5',
        },
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'Arial', 'sans-serif'],
        mono: ['var(--font-source-code-pro)', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1877f2, #42A5F5)',
      },
      animation: {
        'rotate-slow': 'rotate 3s linear infinite',
        'skill-fill': 'skillFill 1s ease forwards',
      },
      keyframes: {
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        skillFill: {
          from: { width: '0%' },
          to: { width: 'var(--skill-width)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
