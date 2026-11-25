// The Most Boring Object, Reviewed in One Line
// Entry for https://make.fun/c/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
//
// The program prints one funny, true one-line review of the most boring
// everyday object it could name — a rubber band — to stdout and writes
// the identical text to /output/entry.txt (the file the make.fun gate
// checks: UTF-8 text, 1 to 200 characters).
//
// Revision: the first draft's ending ("the second I actually needed it
// to hold something together") trailed off and restated the setup instead
// of sharpening it. The turn now lands on the last words: the band fails
// "the moment it finally got a job" — the same true behaviour (stale in a
// drawer, snaps when used), told in fewer words with a harder punchline.
// Also fixed the local run warning by adding package.json with
// "type": "module" so Node loads main.ts cleanly as an ES module.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "The rubber band: five stars. It spent a year in a drawer going stale, then snapped in my face the moment it finally got a job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW + "\n", "utf8");
console.log(REVIEW);
