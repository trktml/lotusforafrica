import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import purgecss from 'astro-purgecss';
import compress from 'astro-compress';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    site: 'https://lotusfoundationafrica.com/',
    integrations: [
        react(),
        compress(),
        robotsTxt(),
        purgecss({
            fontFace: true,
            keyframes: true,
            rejected: true,
            variables: true,
        }),
    ],
});
