import { filterSitemapByDefaultLocale, i18n } from 'astro-i18n-aut/integration';
import { lazyImagesRehypePlugin, readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

import type { AstroIntegration } from 'astro';
import astrowind from './vendor/integration';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import path from 'path';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export const defaultLocale = 'de';
export const locales = {
  de: 'de-DE',
  en: 'en-US',
};

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'material-symbols': ['*'],
      },
    }),
    i18n({
      defaultLocale: defaultLocale,
      locales: locales,
      redirectDefaultLocale: true,
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
