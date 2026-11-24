"use client";

import { useState } from "react";
import type { Problem } from "@/lib/types";

const difficultyStyles: Record<Problem["difficulty"], string> = {
  easy: "bg-emerald-400/10 text-emerald-400 border-emerald-400/30",
  medium: "bg-amber/10 text-amber border-amber/30",
  hard: "bg-red-400/10 text-red-400 border-red-400/30",
};

const difficultyLabels: Record<Problem["difficulty"], string> = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
};

export default function ProblemCard({
  problem,
  index,
  sectionLabel,
}: {
  problem: Problem;
  index: number;
  sectionLabel?: string;
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <article className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-line-strong">
      <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[13px]">
        <span className="font-semibold text-ink">problem {index + 1}</span>
        {sectionLabel && (
          <span className="text-xs text-faint">· {sectionLabel}</span>
        )}
        <span
          className={`ml-auto rounded border px-2 py-0.5 text-xs font-medium ${difficultyStyles[problem.difficulty]}`}
        >
          {difficultyLabels[problem.difficulty]}
        </span>
      </div>
      <p className="text-[15px] leading-relaxed text-body">
        {problem.question.en}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 font-mono text-[13px]">
        <button
          type="button"
          onClick={() => setShowAnswer((v) => !v)}
          className={`rounded-md px-3.5 py-1.5 font-semibold transition-colors ${
            showAnswer
              ? "bg-brand text-bg hover:bg-brand-dark"
              : "bg-ink text-bg hover:bg-white"
          }`}
        >
          {showAnswer ? "hide answer" : "show answer"}
        </button>
        <button
          type="button"
          onClick={() => setShowSolution((v) => !v)}
          className={`rounded-md border px-3.5 py-1.5 font-semibold transition-colors ${
            showSolution
              ? "border-brand bg-brand-light text-brand-dark"
              : "border-line bg-raised text-ink hover:border-line-strong"
          }`}
        >
          {showSolution ? "hide solution" : "show solution"}
        </button>
      </div>
      {showAnswer && (
        <div className="mt-3 rounded-md border border-brand/30 bg-brand-light px-4 py-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-brand">
            answer
          </p>
          <p className="mt-1 text-[15px] font-medium text-ink">
            {problem.answer.en}
          </p>
        </div>
      )}
      {showSolution && (
        <div className="mt-3 rounded-md border border-line bg-bg px-4 py-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-muted">
            solution
          </p>
          <p className="mt-1 text-sm leading-relaxed text-body">
            {problem.solution.en}
          </p>
        </div>
      )}
    </article>
  );
}
