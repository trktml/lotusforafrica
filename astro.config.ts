import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';
import critters from 'astro-critters';
import sitemap from '@astrojs/sitemap';
import { i18n } from 'astro-i18n-aut/integration';
import { locales, defaultLocale } from './src/utils/locales';

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
        sitemap({
            i18n: {
                locales,
                defaultLocale,
            }
        }),
        robotsTxt(),
        critters(),
    ],
});
