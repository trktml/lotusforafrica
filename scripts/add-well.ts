import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const THUMBNAIL_DIR = path.resolve('./src/assets/img/wells/thumbnails');
const FULL_DIR = path.resolve('./src/assets/img/wells/full');
const SLIDER_DIR = path.resolve('./src/assets/img/slider');
const RAW_DIR = path.resolve('./raw_images');
const PROCESSED_DIR = path.resolve('./raw_images/processed');
const CSV_PATH = path.resolve('./src/assets/wellOwnerNames.csv');

// Ensure directories exist
[THUMBNAIL_DIR, FULL_DIR, SLIDER_DIR, RAW_DIR, PROCESSED_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Find highest existing well number (e.g., 157-well.webp -> 157)
function getNextWellNumber(): number {
  if (!fs.existsSync(THUMBNAIL_DIR)) return 1;
  const files = fs.readdirSync(THUMBNAIL_DIR);
  let maxNum = 0;
  files.forEach((file) => {
    const match = file.match(/^(\d+)-well\.webp$/i);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > maxNum) maxNum = num;
    }
  });
  return maxNum + 1;
}

// 3-digit padded string (e.g., 001, 050, 158)
function formatWellNum(num: number): string {
  return String(num).padStart(3, '0');
}

// Append new well owner to CSV
function appendToCsv(wellNumStr: string, ownerName: string) {
  const line = `well-${wellNumStr},${ownerName.trim()},\n`;
  fs.appendFileSync(CSV_PATH, line, 'utf-8');
  console.log(`[CSV] Appended well-${wellNumStr} ("${ownerName}") to CSV.`);
}

async function processImage(inputPath: string, ownerNameArg?: string) {
  const nextNum = getNextWellNumber();
  const numStr = formatWellNum(nextNum);
  const targetFileName = `${numStr}-well.webp`;

  const thumbPath = path.join(THUMBNAIL_DIR, targetFileName);
  const fullPath = path.join(FULL_DIR, targetFileName);
  const sliderPath = path.join(SLIDER_DIR, targetFileName);

  console.log(`\n--------------------------------------------------`);
  console.log(`Processing: ${path.basename(inputPath)} -> Well #${numStr}`);
  console.log(`--------------------------------------------------`);

  // 1. Thumbnail (426px width)
  await sharp(inputPath)
    .resize({ width: 426, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(thumbPath);
  console.log(`✓ Thumbnail created: src/assets/img/wells/thumbnails/${targetFileName}`);

  // 2. Full image (1280px width)
  await sharp(inputPath)
    .resize({ width: 1280, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(fullPath);
  console.log(`✓ Full image created: src/assets/img/wells/full/${targetFileName}`);

  // 3. Slider image (1920x1080 contain with black background)
  await sharp(inputPath)
    .resize({ width: 1920, height: 1080, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .webp({ quality: 75 })
    .toFile(sliderPath);
  console.log(`✓ Slider image created: src/assets/img/slider/${targetFileName}`);

  // 4. Update CSV
  const ownerName = ownerNameArg && ownerNameArg.trim() ? ownerNameArg : 'ISMI GIZLI';
  appendToCsv(numStr, ownerName);

  // 5. Move raw image to 'processed' directory
  if (inputPath.startsWith(RAW_DIR)) {
    const destPath = path.join(PROCESSED_DIR, path.basename(inputPath));
    fs.renameSync(inputPath, destPath);
    console.log(`✓ Raw image moved to: raw_images/processed/${path.basename(inputPath)}`);
  }

  console.log(`🎉 Well #${numStr} successfully added!\n`);
}

async function main() {
  const args = process.argv.slice(2);

  // Direct file argument provided (e.g. bun run add-well ./photo.jpg "John Doe")
  if (args.length > 0 && fs.existsSync(args[0]) && fs.statSync(args[0]).isFile()) {
    const filePath = path.resolve(args[0]);
    const owner = args[1] || '';
    await processImage(filePath, owner);
    return;
  }

  // Scan raw_images directory for images
  const validExts = ['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff'];
  const files = fs
    .readdirSync(RAW_DIR)
    .filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return validExts.includes(ext);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  if (files.length === 0) {
    console.log(`ℹ️  No images found to process!`);
    console.log(`Usage:`);
    console.log(`  1. Place images into 'raw_images/' directory and run 'bun run add-well'.`);
    console.log(`  2. Or run directly: bun run add-well /path/to/image.jpg "Owner Name"`);
    return;
  }

  console.log(`🚀 Found ${files.length} image(s) in 'raw_images/', processing...`);
  for (const file of files) {
    const fullPath = path.join(RAW_DIR, file);
    await processImage(fullPath);
  }
}

main().catch((err) => {
  console.error('❌ Error occurred:', err);
  process.exit(1);
});
