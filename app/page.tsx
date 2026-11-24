import Link from "next/link";
import { sections, totalProblems } from "@/lib/content";
import { sectionGlyphs } from "@/lib/section-meta";

export default function Home() {
  const topicCount = sections.reduce((n, s) => n + s.topics.length, 0);
  const stats = [
    { value: String(sections.length), label: "sections" },
    { value: String(topicCount), label: "topics" },
    { value: String(totalProblems()), label: "problems" },
    { value: String(sections.length * 2), label: "pdfs" },
  ];

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="mb-5 font-mono text-[13px] text-brand">
            ~/mathdocs $ open reference
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            The open math reference
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
            Theory, formulas, and practice problems for every branch of
            mathematics — from algebra to physics. Download any section as a
            PDF in English or Russian. Everything is stored locally and works
            offline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-[13px]">
            <a
              href="#sections"
              className="rounded-md bg-ink px-5 py-2.5 font-semibold text-bg transition-colors hover:bg-white"
            >
              Browse sections
            </a>
            <Link
              href="/downloads"
              className="rounded-md border border-line bg-surface px-5 py-2.5 font-semibold text-ink transition-colors hover:border-line-strong hover:bg-raised"
            >
              Download PDFs
            </Link>
          </div>

          <div className="mt-12 max-w-2xl overflow-hidden rounded-lg border border-line bg-surface">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="ml-3 font-mono text-xs text-faint">
                mathdocs — terminal
              </span>
            </div>
            <div className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-7">
              <p className="text-ink">
                <span className="text-brand">$</span> mathdocs open calculus
              </p>
              <p className="text-muted">
                <span className="text-emerald-400">✓</span> 4 theory topics
                loaded · katex rendered
              </p>
              <p className="text-muted">
                <span className="text-emerald-400">✓</span> 5 practice problems
                ready · answers hidden
              </p>
              <p className="text-muted">
                <span className="text-emerald-400">✓</span> pdfs available:{" "}
                <span className="text-brand">calculus-en.pdf</span>{" "}
                <span className="text-brand">calculus-ru.pdf</span>
              </p>
              <p className="text-ink">
                <span className="text-brand">$</span>{" "}
                <span className="animate-pulse">▍</span>
              </p>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 font-mono sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-brand pl-4">
                <dd className="text-3xl font-bold text-ink">{s.value}</dd>
                <dt className="mt-0.5 text-[13px] text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="sections" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Sections</h2>
          <p className="mt-1.5 text-muted">
            Pick a branch to read the theory and solve practice problems.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/sections/${s.slug}`}
              className="group rounded-lg border border-line bg-surface p-5 transition-colors hover:border-brand/60 hover:bg-raised"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-bg font-mono text-lg font-semibold text-brand">
                  {sectionGlyphs[s.slug]}
                </span>
                <h3 className="text-base font-semibold text-ink group-hover:text-brand-dark">
                  {s.title.en}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.tagline.en}
              </p>
              <p className="mt-4 flex items-center justify-between font-mono text-xs text-faint">
                <span>
                  {s.topics.length} topics · {s.problems.length} problems
                </span>
                <span className="text-brand transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Read the theory",
                text: "Each section covers its core topics with rendered formulas, key identities, and useful notes.",
              },
              {
                step: "02",
                title: "Solve the problems",
                text: "Five to seven problems per section, from easy to hard. Try them yourself, then reveal the answer and full solution.",
              },
              {
                step: "03",
                title: "Take it offline",
                text: "Download the matching PDF in English or Russian. Files are generated locally and bundled with the site.",
              },
            ].map((c) => (
              <div
                key={c.step}
                className="rounded-lg border border-line bg-surface p-6"
              >
                <p className="font-mono text-sm font-bold text-brand">
                  {c.step}
                </p>
                <h3 className="mt-2 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-brand/30 bg-brand-light px-6 py-5">
            <p className="font-mono text-[13px] text-body">
              All {sections.length * 2} PDFs live in{" "}
              <code className="rounded bg-bg px-1.5 py-0.5 text-brand">
                public/pdfs/
              </code>{" "}
              — no network needed after download.
            </p>
            <Link
              href="/downloads"
              className="rounded-md bg-ink px-4 py-2 font-mono text-[13px] font-semibold text-bg transition-colors hover:bg-white"
            >
              Go to downloads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
