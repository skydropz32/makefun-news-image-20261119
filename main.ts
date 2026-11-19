// News-image entry for make.fun (news-image-20261119): the entry is the
// entry.png beside this file, a 1024x1024 infographic of Thursday
// 19 November 2026 drawn by a script, so every word renders cleanly.
// This program copies it to the output directory the grader provides.
// Node 22, standard library only, no network.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(source)) {
  throw new Error(`entry.png not found beside main.ts (${source})`);
}
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(source, target);
if (!existsSync(target)) {
  throw new Error(`copy failed: ${target} missing after copy`);
}
console.log(`wrote ${target}`);
