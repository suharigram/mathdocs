import type { Metadata } from "next";
import { sections, totalProblems } from "@/lib/content";
import PracticeHub from "@/components/PracticeHub";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Practice problems for every mathematics section, with answers and full solutions.",
};

export default function PracticePage() {
  const data = sections.map((s) => ({
    slug: s.slug,
    title: s.title.en,
    problems: s.problems,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Practice</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        All {totalProblems()} problems in one place. Filter by section and
        difficulty, attempt each problem yourself, then reveal the answer and
        the full solution.
      </p>
      <div className="mt-8">
        <PracticeHub data={data} />
      </div>
    </div>
  );
}
