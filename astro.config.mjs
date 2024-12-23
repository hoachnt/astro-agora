// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  adapter: netlify()
});
