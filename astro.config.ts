import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import critters from 'astro-critters';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import { i18n, defaultLocaleSitemapFilter } from 'astro-i18n-aut/integration';
import { locales, defaultLocale } from './src/utils/translationTools';

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            devSourcemap: true,
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                },
            },
        },
    },
    site: 'https://lotusforafrica.org/',
    trailingSlash: 'always',
    build: {
        assets: 'assets',
        format: 'directory',
    },
    integrations: [
        react(),
        i18n({
            locales,
            defaultLocale,
        }),
        prefetch({
            // prefetch links for all a elements
            selector: 'a',
        }),
        sitemap({
            i18n: {
                locales,
                defaultLocale,
            },
            filter: defaultLocaleSitemapFilter({ defaultLocale }),
        }),
        robotsTxt(),
        critters(),
        compress({ Exclude: '.*svg' }),
    ],
});
