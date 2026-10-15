// Decodes base64 image sources in public/images-b64/ into public/images/ at build time.
// (GitHub MCP tools cannot upload binary files, so images are stored as .b64 text.)
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'public', 'images-b64');
const outDir = join(root, 'public', 'images');

mkdirSync(outDir, { recursive: true });

let count = 0;
for (const file of readdirSync(srcDir)) {
  if (!file.endsWith('.b64')) continue;
  const name = file.slice(0, -4); // strip .b64 -> hero-candle.jpg
  const b64 = readFileSync(join(srcDir, file), 'utf8').trim();
  writeFileSync(join(outDir, name), Buffer.from(b64, 'base64'));
  count++;
}
console.log(`[extract-images] decoded ${count} images -> public/images/`);
