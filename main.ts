import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke (<200 chars): a real joke about office life with a
// turn at the end. Revised: tighter wording, the loop lands harder — every
// apology repeats the very mistake it apologises for.
const LINE =
  "I hit reply-all by accident once — now forty colleagues apologise to me daily, and every apology is also reply-all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
