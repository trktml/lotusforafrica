const purgecss = require('@fullhuman/postcss-purgecss');
module.exports = {
    plugins: [
        require('autoprefixer'),
        purgecss({
            content: ['./src/**/*.{astro,tsx,js,html}'],
            safelist: {
                standard: [/.*slider-wrapper.*/],
                deep: [/.*slider-wrapper.*/],
                greedy: [/.*slider-wrapper.*/],
            },
        }),
        require('cssnano'),
    ],
};
