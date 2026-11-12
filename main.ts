import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths relative to this module so the program works from any cwd.
const here = fileURLToPath(new URL(".", import.meta.url));
const src = join(here, "summary.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.txt");

if (!existsSync(src)) {
  console.error(`error: summary.txt not found at ${src}`);
  process.exit(1);
}

// Read explicitly as utf8 and write it back so the output is a byte-exact copy
// of the summary text (no newline added, no BOM, no transcoding).
const summary = readFileSync(src, { encoding: "utf8" });
writeFileSync(dest, summary, { encoding: "utf8" });

console.log(`${dest} (${Buffer.byteLength(summary, "utf8")} bytes)`);
