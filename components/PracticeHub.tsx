"use client";

import { useMemo, useState } from "react";
import type { Difficulty, Problem } from "@/lib/types";
import ProblemCard from "./ProblemCard";

interface SectionData {
  slug: string;
  title: string;
  problems: Problem[];
}

const difficulties: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "All levels" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export default function PracticeHub({ data }: { data: SectionData[] }) {
  const [section, setSection] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  const filtered = useMemo(() => {
    const rows: { problem: Problem; sectionTitle: string; index: number }[] = [];
    for (const s of data) {
      if (section !== "all" && s.slug !== section) continue;
      s.problems.forEach((p, i) => {
        if (difficulty !== "all" && p.difficulty !== difficulty) return;
        rows.push({ problem: p, sectionTitle: s.title, index: i });
      });
    }
    return rows;
  }, [data, section, difficulty]);

  const selectClass =
    "rounded-md border border-line bg-surface px-3 py-2 font-mono text-[13px] font-medium text-ink focus:border-brand focus:outline-none";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className={selectClass}
          aria-label="Filter by section"
        >
          <option value="all">All sections</option>
          {data.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty | "all")}
          className={selectClass}
          aria-label="Filter by difficulty"
        >
          {difficulties.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <span className="text-sm text-muted">
          {filtered.length} problem{filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {filtered.map(({ problem, sectionTitle, index }) => (
          <ProblemCard
            key={`${sectionTitle}-${problem.id}`}
            problem={problem}
            index={index}
            sectionLabel={sectionTitle}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 rounded-lg border border-line bg-surface p-8 text-center text-muted">
          No problems match the selected filters.
        </p>
      )}
    </div>
  );
}
