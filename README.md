# lotusforafrica

https://lotusforafrica.org/ website codes

Notes:

- for multi language support: https://github.com/jlarmstrongiv/astro-i18n-aut
- react-awesome-slider: https://github.com/rcaferati/react-awesome-slider
- home page inspired from: https://github.com/StartBootstrap/startbootstrap-freelancer

# Image compress and resize notes:

<br>

- `npm i -g sharp`

- `npm i -g squoosh-cli`

<br>

- Thumbnails: `sharp --input './*.*' --output resized resize 426`

- Normal: `sharp --input './*.*' --output resized resize 1280`

- Compress: `squoosh-cli ./resized -d ./resized-compressed --webp '{effort:6,quality:50}'`

<br>

- Thumbnails --> Compress --> src\assets\img\wells\thumbnails
- Normal --> Compress --> src\assets\img\wells\full

<br>

- for slider: https://imageresizer.com/ 1920 1080 --> src\assets\img\slider

<br>

# Pagespeed score
![pagespeed-score](.\src\assets\img\pagespeed-score.png)