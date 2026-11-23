import { writeFileSync, mkdirSync } from "node:fs";

const JOKE =
  "The office printer only jams on documents marked urgent — it actually reads the subject line, then calls in sick like the rest of us.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the bounty only accepts 1–199 non-whitespace UTF-8 characters.
if (JOKE.trim().length === 0 || JOKE.length > 199) {
  throw new Error(`entry.txt must be 1-199 characters, got ${JOKE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} chars to ${outDir}/entry.txt`);
