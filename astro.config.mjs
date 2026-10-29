// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Set this once the domain is chosen. Share previews and the sitemap need it.
  // site: 'https://YOUR-DOMAIN',
  vite: {
    plugins: [tailwindcss()],
  },
});
