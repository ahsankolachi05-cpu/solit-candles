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

// Video chunks: public/videos-b64/<name>.mp4.b64.<N> -> public/videos/<name>.mp4
const vidSrc = join(root, 'public', 'videos-b64');
const vidOut = join(root, 'public', 'videos');
if (existsSync(vidSrc)) {
  mkdirSync(vidOut, { recursive: true });
  const groups = {};
  for (const file of readdirSync(vidSrc)) {
    const m = file.match(/^(.+\.mp4)\.b64\.(\d+)$/);
    if (!m) continue;
    (groups[m[1]] = groups[m[1]] || []).push([parseInt(m[2]), file]);
  }
  for (const [name, parts] of Object.entries(groups)) {
    parts.sort((a, b) => a[0] - b[0]);
    const b64 = parts.map(([, f]) => readFileSync(join(vidSrc, f), 'utf8').trim()).join('');
    writeFileSync(join(vidOut, name), Buffer.from(b64, 'base64'));
    console.log(`[extract-images] decoded video ${name} from ${parts.length} chunks`);
  }
}
