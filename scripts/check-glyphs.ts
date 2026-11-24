import path from "node:path";
import { openSync } from "fontkit";
import { sections } from "../lib/content";

const font = openSync(path.join(__dirname, "fonts", "DejaVuSans.ttf"));

const chars = new Set<string>();
const collect = (s: string) => {
  for (const ch of s) chars.add(ch);
};

for (const s of sections) {
  collect(s.title.ru);
  collect(s.tagline.ru);
  collect(s.description.ru);
  for (const t of s.topics) {
    collect(t.title.ru);
    for (const b of t.blocks) {
      if (b.type === "p" || b.type === "note") collect(b.text.ru);
      if (b.type === "formula") {
        collect(b.unicode);
        if (b.caption) collect(b.caption.ru);
      }
      if (b.type === "list") b.items.forEach((i) => collect(i.ru));
    }
  }
  for (const p of s.problems) {
    collect(p.question.ru);
    collect(p.answer.ru);
    collect(p.solution.ru);
  }
}

const missing: string[] = [];
for (const ch of chars) {
  const cp = ch.codePointAt(0)!;
  if (cp < 32) continue;
  if (!font.hasGlyphForCodePoint(cp)) missing.push(`U+${cp.toString(16).toUpperCase()} ${ch}`);
}

if (missing.length) {
  console.log("MISSING GLYPHS:\n" + missing.join("\n"));
  process.exit(1);
} else {
  console.log(`OK: all ${chars.size} unique characters are covered by DejaVuSans`);
}
