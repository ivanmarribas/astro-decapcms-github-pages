import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ivanmarribas.github.io',
	base: '/astro-decapcms-github-pages',
	integrations: [image(), mdx(), sitemap()],
});
