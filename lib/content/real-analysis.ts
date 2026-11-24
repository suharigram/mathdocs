import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const realAnalysis: Section = {
  slug: "real-analysis",
  title: { en: "Real Analysis", ru: "Действительный анализ" },
  tagline: {
    en: "Rigorous foundations of calculus",
    ru: "Строгие основания анализа",
  },
  description: {
    en: "Real analysis rebuilds calculus on rigorous foundations: the completeness of the real numbers, epsilon-delta definitions, the Riemann integral, and the subtle difference between pointwise and uniform convergence.",
    ru: "Действительный анализ перестраивает исчисление на строгих основаниях: полнота действительных чисел, определения на языке ε-δ, интеграл Римана и тонкое различие между поточечной и равномерной сходимостью.",
  },
  topics: [
    topic("completeness", "Real Numbers and Completeness", "Действительные числа и полнота", [
      p(
        "The defining property of R is completeness: every nonempty set bounded above has a least upper bound (supremum). This single axiom separates R from Q and makes limits work.",
        "Определяющее свойство R — полнота: каждое непустое ограниченное сверху множество имеет точную верхнюю грань (супремум). Эта аксиома отличает R от Q и обеспечивает работу пределов.",
      ),
      formula(
        "\\sup S \\text{ exists for every bounded-above } S \\neq \\varnothing",
        "sup S существует для любого непустого ограниченного сверху S",
      ),
      note(
        "Consequences: the Archimedean property, density of Q in R, and the nested-interval principle.",
        "Следствия: свойство Архимеда, плотность Q в R и принцип вложенных отрезков.",
      ),
    ]),
    topic("epsilon-delta", "Limits and Continuity, Rigorously", "Пределы и непрерывность строго", [
      p(
        "The epsilon-delta definition makes “arbitrarily close” precise. Continuous functions on closed bounded intervals attain maxima and minima and take every intermediate value.",
        "Определение ε-δ делает «сколь угодно близко» точным. Непрерывные функции на замкнутых ограниченных отрезках достигают максимума и минимума и принимают все промежуточные значения.",
      ),
      formula(
        "\\forall \\varepsilon > 0\\; \\exists \\delta > 0:\\; |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon",
        "∀ε > 0 ∃δ > 0: |x − a| < δ ⇒ |f(x) − L| < ε",
      ),
      list(
        ["Extreme Value Theorem: continuous on [a,b] ⇒ attains max and min", "Теорема Вейерштрасса: непрерывна на [a,b] ⇒ достигает максимума и минимума"],
        ["Intermediate Value Theorem: takes every value between f(a) and f(b)", "Теорема о промежуточном значении: принимает все значения между f(a) и f(b)"],
      ),
    ]),
    topic("riemann", "The Riemann Integral", "Интеграл Римана", [
      p(
        "Partition the interval, bound the function on each piece, and squeeze upper and lower sums together. A bounded function is Riemann integrable exactly when its discontinuities form a null set.",
        "Разобьём отрезок, ограничим функцию на каждом куске и сожмём верхние и нижние суммы. Ограниченная функция интегрируема по Риману тогда и только тогда, когда её разрывы образуют множество меры ноль.",
      ),
      formula(
        "\\underline{\\int} f = \\overline{\\int} f \\;\\Leftrightarrow\\; f \\text{ Riemann integrable}",
        "нижний интеграл = верхний интеграл  ⇔  f интегрируема по Риману",
      ),
    ]),
    topic("uniform-convergence", "Sequences of Functions", "Последовательности функций", [
      p(
        "Pointwise convergence can destroy continuity; uniform convergence preserves it and allows swapping limits with integrals. The Weierstrass M-test certifies uniform convergence of series.",
        "Поточечная сходимость может разрушить непрерывность; равномерная сохраняет её и позволяет менять местами предел и интеграл. Признак Вейерштрасса гарантирует равномерную сходимость рядов.",
      ),
      formula(
        "\\sup_x |f_n(x) - f(x)| \\to 0 \\quad \\text{(uniform convergence)}",
        "sup |fₙ(x) − f(x)| → 0   (равномерная сходимость)",
      ),
      note(
        "If |fₙ(x)| ≤ Mₙ for all x and Σ Mₙ converges, then Σ fₙ converges uniformly (M-test).",
        "Если |fₙ(x)| ≤ Mₙ для всех x и Σ Mₙ сходится, то Σ fₙ сходится равномерно (M-признак).",
      ),
    ]),
  ],
  problems: [
    prob(
      "ra1", "easy",
      "Find sup {1 − 1/n : n = 1, 2, 3, …}.",
      "Найдите sup {1 − 1/n : n = 1, 2, 3, …}.",
      "1",
      "1",
      "Terms increase toward 1 but never reach it; 1 is the least upper bound.",
      "Члены растут к 1, но не достигают её; 1 — точная верхняя грань.",
    ),
    prob(
      "ra2", "easy",
      "Is f(x) = |x| continuous at 0?",
      "Непрерывна ли f(x) = |x| в точке 0?",
      "Yes",
      "Да",
      "||x| − 0| = |x| < ε whenever |x − 0| < δ = ε. (It is not differentiable at 0, but continuity holds.)",
      "||x| − 0| = |x| < ε при |x − 0| < δ = ε. (В 0 она не дифференцируема, но непрерывность есть.)",
    ),
    prob(
      "ra3", "medium",
      "Prove that √2 is irrational.",
      "Докажите, что √2 иррационально.",
      "Irrational — proof by contradiction",
      "Иррационально — доказательство от противного",
      "Assume √2 = p/q in lowest terms. Then p² = 2q², so p is even, p = 2k; then q² = 2k², so q is even — contradicting lowest terms.",
      "Пусть √2 = p/q — несократимая дробь. Тогда p² = 2q², значит p чётно, p = 2k; тогда q² = 2k², значит q чётно — противоречие с несократимостью.",
    ),
    prob(
      "ra4", "medium",
      "Does fₙ(x) = xⁿ converge uniformly on [0,1]?",
      "Сходится ли fₙ(x) = xⁿ равномерно на [0,1]?",
      "No",
      "Нет",
      "The pointwise limit is 0 on [0,1) and 1 at x = 1 — discontinuous. A uniform limit of continuous functions must be continuous.",
      "Поточечный предел равен 0 на [0,1) и 1 при x = 1 — разрывен. Равномерный предел непрерывных функций обязан быть непрерывным.",
    ),
    prob(
      "ra5", "hard",
      "Show that f(x) = x² is not uniformly continuous on R.",
      "Покажите, что f(x) = x² не равномерно непрерывна на R.",
      "Not uniformly continuous",
      "Не равномерно непрерывна",
      "Take xₙ = n + 1/n, yₙ = n. Then |xₙ − yₙ| = 1/n → 0, but |xₙ² − yₙ²| = 2 + 1/n² ≥ 2, so no single δ works for ε = 1.",
      "Возьмём xₙ = n + 1/n, yₙ = n. Тогда |xₙ − yₙ| = 1/n → 0, но |xₙ² − yₙ²| = 2 + 1/n² ≥ 2, поэтому единого δ для ε = 1 нет.",
    ),
  ],
};
