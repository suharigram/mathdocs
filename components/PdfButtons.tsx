import { pdfPath } from "@/lib/content";

export default function PdfButtons({ slug }: { slug: string }) {
  return (
    <div className="flex flex-wrap gap-2 font-mono text-[13px]">
      <a
        href={pdfPath(slug, "en")}
        download
        className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 font-semibold text-bg transition-colors hover:bg-white"
      >
        <DownloadIcon />
        PDF · English
      </a>
      <a
        href={pdfPath(slug, "ru")}
        download
        className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2 font-semibold text-ink transition-colors hover:border-line-strong hover:bg-raised"
      >
        <DownloadIcon />
        PDF · Русский
      </a>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 21h16" />
    </svg>
  );
}
