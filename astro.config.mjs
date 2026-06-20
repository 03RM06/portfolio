import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lorenzmaray.netlify.app', // update with real domain after Netlify connect
  integrations: [sitemap()],
  output: 'static',
});
