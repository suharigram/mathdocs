"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "sections" },
  { href: "/practice", label: "practice" },
  { href: "/downloads", label: "downloads" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded border border-line bg-surface font-mono text-base font-bold text-ink">
            ∑
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-ink">
            math<span className="text-brand">docs</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 font-mono text-[13px]">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/" || pathname.startsWith("/sections")
                : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-brand-light text-brand-dark"
                    : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
