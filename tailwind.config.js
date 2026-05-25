/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#111111',
        primary: '#FF5500',
        'primary-hover': '#E04B00',
        foreground: '#FFFFFF',
        'foreground-muted': '#A3A3A3',
        'border-color': '#1A1A1A',
        'card-bg': '#111111',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'var(--font-inter)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        coder: {
          "primary": "#FF5500",
          "secondary": "#A3A3A3",
          "accent": "#FF5500",
          "neutral": "#111111",
          "base-100": "#050505",
          "base-content": "#FFFFFF",
        },
      },
    ],
  },
};
