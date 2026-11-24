import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSection, sections } from "@/lib/content";
import { sectionGlyphs } from "@/lib/section-meta";
import Blocks from "@/components/Blocks";
import PdfButtons from "@/components/PdfButtons";
import ProblemCard from "@/components/ProblemCard";

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/sections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return {};
  return {
    title: section.title.en,
    description: section.tagline.en,
  };
}

export default async function SectionPage({
  params,
}: PageProps<"/sections/[slug]">) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  const index = sections.findIndex((s) => s.slug === slug);
  const prev = sections[index - 1];
  const next = sections[index + 1];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-brand-dark">
          Sections
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{section.title.en}</span>
      </nav>

      <header className="border-b border-line pb-8">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-surface font-mono text-xl font-semibold text-brand">
            {sectionGlyphs[section.slug]}
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {section.title.en}
            </h1>
            <p className="mt-0.5 text-muted">{section.tagline.en}</p>
          </div>
        </div>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted">
          {section.description.en}
        </p>
        <div className="mt-6">
          <PdfButtons slug={section.slug} />
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div>
          <h2 className="mb-6 text-xl font-bold tracking-tight">Theory</h2>
          <div className="space-y-12">
            {section.topics.map((t, i) => (
              <section key={t.id} id={t.id} className="scroll-mt-24">
                <h3 className="mb-4 flex items-baseline gap-2 text-lg font-semibold">
                  <span className="font-mono text-brand">{i + 1}.</span>
                  {t.title.en}
                </h3>
                <Blocks blocks={t.blocks} />
              </section>
            ))}
          </div>

          <section id="practice" className="mt-14 scroll-mt-24">
            <div className="mb-2 flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight">
                Practice problems
              </h2>
              <span className="rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-semibold text-brand-dark">
                {section.problems.length}
              </span>
            </div>
            <p className="mb-6 text-sm text-muted">
              Try each problem before revealing the answer. Solutions show the
              full reasoning.
            </p>
            <div className="space-y-4">
              {section.problems.map((p, i) => (
                <ProblemCard key={p.id} problem={p} index={i} />
              ))}
            </div>
          </section>

          <nav className="mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/sections/${prev.slug}`}
                className="group rounded-lg border border-line bg-surface p-4 transition-colors hover:border-brand/60"
              >
                <p className="font-mono text-xs text-muted">← previous</p>
                <p className="mt-1 font-semibold group-hover:text-brand-dark">
                  {prev.title.en}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/sections/${next.slug}`}
                className="group rounded-lg border border-line bg-surface p-4 text-right transition-colors hover:border-brand/60"
              >
                <p className="font-mono text-xs text-muted">next →</p>
                <p className="mt-1 font-semibold group-hover:text-brand-dark">
                  {next.title.en}
                </p>
              </Link>
            )}
          </nav>
        </div>

        <aside className="order-first lg:order-last">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-lg border border-line bg-surface p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                On this page
              </p>
              <ul className="space-y-2 text-sm">
                {section.topics.map((t, i) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="text-muted transition-colors hover:text-brand-dark"
                    >
                      <span className="mr-1.5 font-mono text-xs text-brand">
                        {i + 1}.
                      </span>
                      {t.title.en}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#practice"
                    className="font-medium text-brand-dark hover:underline"
                  >
                    Practice problems →
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-surface p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Offline copies
              </p>
              <PdfButtons slug={section.slug} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
