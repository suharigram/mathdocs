import type { Block } from "@/lib/types";
import Formula from "./Formula";

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="leading-relaxed text-body">
                {b.text.en}
              </p>
            );
          case "formula":
            return (
              <figure key={i}>
                <Formula latex={b.latex} />
                {b.caption && (
                  <figcaption className="mt-1.5 text-center text-xs text-muted">
                    {b.caption.en}
                  </figcaption>
                )}
              </figure>
            );
          case "list":
            return (
              <ul key={i} className="space-y-1.5">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 leading-relaxed">
                    <span className="mt-0.5 text-brand">•</span>
                    <span>{item.en}</span>
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <div
                key={i}
                className="rounded-r-md border-l-2 border-brand bg-brand-light px-4 py-3 text-sm leading-relaxed text-body"
              >
                <span className="font-mono font-semibold text-brand">note: </span>
                {b.text.en}
              </div>
            );
        }
      })}
    </div>
  );
}
