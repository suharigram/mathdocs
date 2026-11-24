import type { Lang, Section } from "../types";
import { algebra } from "./algebra";
import { geometry } from "./geometry";
import { trigonometry } from "./trigonometry";
import { calculus } from "./calculus";
import { linearAlgebra } from "./linear-algebra";
import { probabilityStatistics } from "./probability-statistics";
import { numberTheory } from "./number-theory";
import { discreteMathematics } from "./discrete-mathematics";
import { differentialEquations } from "./differential-equations";
import { physics } from "./physics";

export const sections: Section[] = [
  algebra,
  geometry,
  trigonometry,
  calculus,
  linearAlgebra,
  probabilityStatistics,
  numberTheory,
  discreteMathematics,
  differentialEquations,
  physics,
];

export function getSection(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}

export function pdfPath(slug: string, lang: Lang): string {
  return `/pdfs/${slug}-${lang}.pdf`;
}

export function totalProblems(): number {
  return sections.reduce((n, s) => n + s.problems.length, 0);
}
