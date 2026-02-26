// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gokuclaw-adarsh.github.io',
  base: '/aavishkaar-foundation-website',
  vite: {
    plugins: [tailwindcss()]
  }
});