import { defineConfig } from 'astro/config';
// import swup from '@swup/astro';
import react from '@astrojs/react';
import purgecss from 'astro-purgecss';
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
    site: 'https://lotusfoundationafrica.com',
    trailingSlash: 'never',
    build: {
        assets: 'assets',
        inlineStylesheets: 'auto',
        format: 'file',
    },
    compressHTML: true,
    integrations: [
        react(),
        i18n({
            locales,
            defaultLocale,
        }),
        // swup({
        //     theme: 'fade',
        //     animationClass: false,
        //     progress: true,
        //     reloadScripts: false,
        //     updateHead: false,
        //     globalInstance: true,
        // }),
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
        compress(),
        //purgecss(),
    ],
    experimental: {
        // for optimized images
        assets: true,
    },
});
