// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://corpo-ambiental.vercel.app/',
  base: '/',

  integrations: [
    sitemap(),
  ],

  adapter: vercel(),
});