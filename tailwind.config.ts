// tailwind.config.ts
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
      // 1. Définir notre palette de couleurs
      colors: {
        // Thème sombre
        dark: {
          background: '#1a1625',
          secondary: '#2a2438',
          border: '#3d3650',
          text: '#f1f5f9',
        },
        // Thème clair
        light: {
          background: '#f8f9fa',
          secondary: '#ffffff',
          border: '#e5e7eb',
          text: '#1e1e1e',
        },
        // Couleur d'accent
        accent: {
          DEFAULT: '#ff6b35', // Orange foncé pour le thème sombre
          light: '#d94f2c',   // Orange plus sobre pour le thème clair
        },
      },
      // 2. Définir nos familles de polices
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-source-code-pro)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;