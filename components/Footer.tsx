import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 font-mono text-[13px] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-line bg-surface text-sm font-bold text-ink">
            ∑
          </span>
          <div>
            <p className="font-semibold text-ink">mathdocs</p>
            <p className="text-xs text-faint">
              math reference · bilingual pdfs · offline ready
            </p>
          </div>
        </div>
        <nav className="flex gap-5 text-muted">
          <Link href="/" className="transition-colors hover:text-brand">
            sections
          </Link>
          <Link href="/practice" className="transition-colors hover:text-brand">
            practice
          </Link>
          <Link href="/downloads" className="transition-colors hover:text-brand">
            downloads
          </Link>
        </nav>
      </div>
    </footer>
  );
}
