import type { Lang, Section } from "../types";
import { arithmetic } from "./arithmetic";
import { algebra } from "./algebra";
import { geometry } from "./geometry";
import { trigonometry } from "./trigonometry";
import { sequencesSeries } from "./sequences-series";
import { calculus } from "./calculus";
import { multivariableCalculus } from "./multivariable-calculus";
import { vectorCalculus } from "./vector-calculus";
import { differentialEquations } from "./differential-equations";
import { pdes } from "./pdes";
import { linearAlgebra } from "./linear-algebra";
import { abstractAlgebra } from "./abstract-algebra";
import { numberTheory } from "./number-theory";
import { cryptography } from "./cryptography";
import { discreteMathematics } from "./discrete-mathematics";
import { mathematicalLogic } from "./mathematical-logic";
import { setTheory } from "./set-theory";
import { categoryTheory } from "./category-theory";
import { probabilityStatistics } from "./probability-statistics";
import { stochasticProcesses } from "./stochastic-processes";
import { realAnalysis } from "./real-analysis";
import { measureTheory } from "./measure-theory";
import { functionalAnalysis } from "./functional-analysis";
import { complexAnalysis } from "./complex-analysis";
import { specialFunctions } from "./special-functions";
import { topology } from "./topology";
import { differentialGeometry } from "./differential-geometry";
import { algebraicGeometry } from "./algebraic-geometry";
import { dynamicalSystems } from "./dynamical-systems";
import { fractals } from "./fractals";
import { numericalAnalysis } from "./numerical-analysis";
import { optimization } from "./optimization";
import { calculusOfVariations } from "./calculus-of-variations";
import { gameTheory } from "./game-theory";
import { informationTheory } from "./information-theory";
import { financialMath } from "./financial-math";
import { physics } from "./physics";

export const sections: Section[] = [
  arithmetic,
  algebra,
  geometry,
  trigonometry,
  sequencesSeries,
  calculus,
  multivariableCalculus,
  vectorCalculus,
  differentialEquations,
  pdes,
  linearAlgebra,
  abstractAlgebra,
  numberTheory,
  cryptography,
  discreteMathematics,
  mathematicalLogic,
  setTheory,
  categoryTheory,
  probabilityStatistics,
  stochasticProcesses,
  realAnalysis,
  measureTheory,
  functionalAnalysis,
  complexAnalysis,
  specialFunctions,
  topology,
  differentialGeometry,
  algebraicGeometry,
  dynamicalSystems,
  fractals,
  numericalAnalysis,
  optimization,
  calculusOfVariations,
  gameTheory,
  informationTheory,
  financialMath,
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
