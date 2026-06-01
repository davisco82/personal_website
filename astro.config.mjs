import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:3005',
  vite: {
    plugins: [tailwindcss()]
  }
});
