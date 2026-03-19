// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // ← no /static at the end
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-actual-site.vercel.app', // ← your real URL
  output: 'static',
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
});