import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import purgecss from 'astro-purgecss';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

import critters from 'astro-critters';

// https://astro.build/config
export default defineConfig({
    vite: { css: { devSourcemap: true } },
    site: 'https://lotusfoundationafrica.com/',
    build: { assets: 'lotus', inlineStylesheets: 'auto' },
    compressHTML: true,
    integrations: [
        react(),
        compress(),
        robotsTxt(),
        critters(),
        //purgecss(),
    ],
});
