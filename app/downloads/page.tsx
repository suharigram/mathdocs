import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { pdfPath, sections } from "@/lib/content";
import { sectionGlyphs } from "@/lib/section-meta";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download mathematics reference PDFs in English and Russian. All files are stored locally with the site.",
};

function fileSize(slug: string, lang: "en" | "ru"): string {
  try {
    const file = path.join(process.cwd(), "public", "pdfs", `${slug}-${lang}.pdf`);
    const bytes = fs.statSync(file).size;
    return `${Math.round(bytes / 1024)} KB`;
  } catch {
    return "—";
  }
}

export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        Every section is available as a PDF in English and Russian: theory,
        formulas, and all practice problems with answers and solutions. The
        files live locally in{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-brand">
          public/pdfs/
        </code>{" "}
        — no external services, no network required after download.
      </p>

      <div className="mt-8 overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-surface font-mono text-xs uppercase tracking-wider text-muted">
              <th className="px-4 py-3 font-semibold">Section</th>
              <th className="px-4 py-3 font-semibold">English PDF</th>
              <th className="px-4 py-3 font-semibold">Russian PDF</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((s) => (
              <tr
                key={s.slug}
                className="border-b border-line last:border-0 hover:bg-surface"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/sections/${s.slug}`}
                    className="flex items-center gap-2.5 font-medium text-ink hover:text-brand-dark"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded border border-line bg-bg font-mono text-xs font-semibold text-brand">
                      {sectionGlyphs[s.slug]}
                    </span>
                    {s.title.en}
                  </Link>
                </td>
                {(["en", "ru"] as const).map((lang) => (
                  <td key={lang} className="px-4 py-3">
                    <a
                      href={pdfPath(s.slug, lang)}
                      download
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-raised px-3 py-1.5 font-mono text-xs font-semibold text-ink transition-colors hover:border-brand/60 hover:text-brand-dark"
                    >
                      ↓ {lang === "en" ? "English" : "Русский"}
                      <span className="font-normal text-muted">
                        · {fileSize(s.slug, lang)}
                      </span>
                    </a>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-muted">
        PDFs are regenerated from the site content with{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-brand">
          npm run pdfs
        </code>
        .
      </p>
    </div>
  );
}
