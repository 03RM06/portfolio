import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://resplendent-kulfi-0b4c61.netlify.app',
  integrations: [sitemap()],
  output: 'static',
});
