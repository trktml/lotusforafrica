# Raw Images Directory (`raw_images/`)

Place any new water well photos (JPG, PNG, WebP, etc.) into this directory to automatically process them.

## Usage

1. Drag & drop photos into the `raw_images/` directory.
2. Run the command in your terminal:
   ```bash
   bun run add-well
   ```

The script automatically:
- Detects the next available well number (e.g., `158`).
- Creates a `426px` wide **Thumbnail** WebP image at `src/assets/img/wells/thumbnails/158-well.webp`.
- Creates a `1280px` wide **Full** WebP image at `src/assets/img/wells/full/158-well.webp`.
- Creates a `1920x1080` resolution **Slider** WebP image at `src/assets/img/slider/158-well.webp`.
- Appends a new entry into `src/assets/wellOwnerNames.csv`.
- Moves processed raw images into `raw_images/processed/`.

## Add Single Image with Owner Name
You can also specify an image file path and donor/owner name directly:
```bash
bun run add-well /path/to/image.jpg "DONOR NAME"
```
