/**
 * Validates every project image declared in content/site.ts against the file on
 * disk: that it exists, that its real format matches its extension, and that the
 * declared width/height match the actual pixels.
 *
 * This exists because hms.png shipped as a JPEG named .png carrying dimensions
 * copied from a different file. next/image takes width/height on trust and uses
 * them to reserve layout space, so wrong values silently distort the image —
 * nothing in `tsc`, `next lint` or `next build` catches it.
 *
 * Run: npm run check:images
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(root, "public");

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/** Reads the real format and intrinsic dimensions straight from the file header. */
function probe(buf) {
  if (buf.subarray(0, 8).equals(PNG_SIGNATURE)) {
    return { format: "png", width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    let i = 2;
    while (i < buf.length - 9) {
      if (buf[i] !== 0xff) {
        i += 1;
        continue;
      }
      const marker = buf[i + 1];
      // Start-of-frame markers carry the dimensions.
      if (marker >= 0xc0 && marker <= 0xc3) {
        return {
          format: "jpg",
          height: buf.readUInt16BE(i + 5),
          width: buf.readUInt16BE(i + 7),
        };
      }
      if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) {
        i += 2;
        continue;
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
    return { format: "jpg", width: null, height: null };
  }

  if (buf.subarray(0, 4).toString() === "RIFF" && buf.subarray(8, 12).toString() === "WEBP") {
    return { format: "webp", width: null, height: null };
  }

  return { format: "unknown", width: null, height: null };
}

/**
 * Parsed with a regex rather than by importing site.ts, so this runs as plain
 * node with no TypeScript loader involved.
 */
const source = readFileSync(join(root, "content", "site.ts"), "utf8");
const declared = [
  ...source.matchAll(
    /src:\s*asset\(\s*"([^"]+)"\s*\)\s*,\s*(?:\/\/[^\n]*\n\s*)?width:\s*(\d+)\s*,\s*height:\s*(\d+)/g,
  ),
].map(([, src, width, height]) => ({
  src,
  width: Number(width),
  height: Number(height),
}));

if (declared.length === 0) {
  console.error("✗ no image declarations found in content/site.ts — has its shape changed?");
  process.exit(1);
}

const EXTENSION_ALIASES = { jpeg: "jpg" };
let failures = 0;

for (const image of declared) {
  const path = join(PUBLIC, image.src);

  if (!existsSync(path)) {
    console.error(`✗ ${image.src}: no such file at public${image.src}`);
    failures += 1;
    continue;
  }

  const actual = probe(readFileSync(path));
  const rawExt = image.src.split(".").pop().toLowerCase();
  const ext = EXTENSION_ALIASES[rawExt] ?? rawExt;

  if (actual.format === "unknown") {
    console.error(`✗ ${image.src}: unrecognised image format`);
    failures += 1;
  } else if (actual.format !== ext) {
    console.error(
      `✗ ${image.src}: named .${ext} but the file is actually ${actual.format.toUpperCase()} — rename it`,
    );
    failures += 1;
  } else if (actual.width === null) {
    console.warn(`· ${image.src}: ${actual.format} dimensions unread, size check skipped`);
  } else if (actual.width !== image.width || actual.height !== image.height) {
    console.error(
      `✗ ${image.src}: declared ${image.width}×${image.height} but the file is ` +
        `${actual.width}×${actual.height} — the image will render distorted`,
    );
    failures += 1;
  } else {
    console.log(`✓ ${image.src}: ${actual.format} ${actual.width}×${actual.height}`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} image problem(s) found.`);
  process.exit(1);
}

console.log(`\nAll ${declared.length} images valid.`);
