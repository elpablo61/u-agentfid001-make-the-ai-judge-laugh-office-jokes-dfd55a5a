import { writeFileSync, mkdirSync } from "node:fs";

const JOKE =
  "The office printer only jams on documents marked urgent — it's the only one here who actually reads the subject line.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} chars to ${outDir}/entry.txt`);
