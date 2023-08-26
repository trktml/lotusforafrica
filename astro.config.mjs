import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import purgecss from 'astro-purgecss';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import critters from 'astro-critters';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';

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
    site: 'https://lotusfoundationafrica.com/',
    build: {
        assets: 'lotus',
        inlineStylesheets: 'auto',
    },
    compressHTML: true,
    integrations: [
        react(),
        prefetch({
            // prefetch links for all a elements
            selector: 'a',
        }),
        sitemap(),
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
