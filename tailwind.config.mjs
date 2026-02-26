/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Bold Youth Palette
        ink: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          dark: '#020617',
        },
        fire: {
          DEFAULT: '#ff4d00',
          light: '#ff6b2c',
          dark: '#cc3d00',
        },
        cream: {
          DEFAULT: '#fefdfb',
          100: '#fdf9f3',
          200: '#f9f1e4',
        },
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        'brutal': '4px 4px 0 0 #0f172a',
        'brutal-lg': '8px 8px 0 0 #0f172a',
        'brutal-fire': '4px 4px 0 0 #ff4d00',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
