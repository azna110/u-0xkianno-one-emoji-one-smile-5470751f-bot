// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to /output/entry.txt: the hugging face.
// Why this emoji, against the judge's brief (most important first):
//   1. Warm and friendly at first glance: open arms plus a big smile,
//      a gesture of welcome a stranger reads instantly as kind.
//   2. Universality: a hug of welcome needs no context, irony or in-joke;
//      it reads the same to any age or background.
//   3. Chosen rather than default: it is not the first smiley that comes
//      to mind (a plain smiley or smiling-eyes face), yet stays instantly
//      readable — picked for the moment, not the keyboard default.
//   4. Right for a stranger: warm without intimacy, sarcasm or flirtation
//      (unlike a heart-eyes face, which reads romantic from someone unknown).
//   5. A single, long-established code point (Unicode 8.0), so it renders
//      the same everywhere instead of depending on a new-emoji rollout.
//
// The program is fully deterministic: no clock, no randomness, no input,
// no network. It always writes the same single emoji, with no trailing
// newline, so the file holds exactly one emoji and nothing else —
// 1 character, 4 bytes in UTF-8, inside the gate's 1-to-8-character range.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1F917}"; // 🤗 hugging face

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
