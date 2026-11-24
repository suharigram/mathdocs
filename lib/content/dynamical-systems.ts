import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const dynamicalSystems: Section = {
  slug: "dynamical-systems",
  title: { en: "Dynamical Systems & Chaos", ru: "Динамические системы и хаос" },
  tagline: {
    en: "Evolution, stability, and sensitive dependence",
    ru: "Эволюция, устойчивость и чувствительная зависимость",
  },
  description: {
    en: "Dynamical systems study how states evolve under repeated maps or differential equations. Fixed points and stability organize the picture; beyond them lie period doubling, strange attractors, and deterministic chaos.",
    ru: "Динамические системы изучают эволюцию состояний под действием повторных отображений или дифференциальных уравнений. Неподвижные точки и устойчивость упорядочивают картину; за ними — удвоение периода, странные аттракторы и детерминированный хаос.",
  },
  topics: [
    topic("fixed-points", "Fixed Points and Stability", "Неподвижные точки и устойчивость", [
      p(
        "For the iteration xₙ₊₁ = f(xₙ), a fixed point satisfies f(x*) = x*. It attracts nearby orbits when |f′(x*)| < 1 and repels them when |f′(x*)| > 1.",
        "Для итерации xₙ₊₁ = f(xₙ) неподвижная точка удовлетворяет f(x*) = x*. Она притягивает близкие орбиты при |f′(x*)| < 1 и отталкивает при |f′(x*)| > 1.",
      ),
      formula(
        "f(x^*) = x^*, \\qquad |f'(x^*)| < 1 \\Rightarrow \\text{stable}",
        "f(x*) = x*;   |f′(x*)| < 1 ⇒ устойчива",
      ),
    ]),
    topic("logistic", "The Logistic Map", "Логистическое отображение", [
      p(
        "xₙ₊₁ = r·xₙ(1 − xₙ) is a one-line model of population growth. As r increases: fixed point → 2-cycle → 4-cycle → … → chaos near r ≈ 3.57. The period-doubling cascade is universal (Feigenbaum constant).",
        "xₙ₊₁ = r·xₙ(1 − xₙ) — однострочная модель роста популяции. С ростом r: неподвижная точка → 2-цикл → 4-цикл → … → хаос вблизи r ≈ 3,57. Каскад удвоений периода универсален (постоянная Фейгенбаума).",
      ),
      formula(
        "x_{n+1} = r x_n (1 - x_n)",
        "xₙ₊₁ = r·xₙ(1 − xₙ)",
      ),
    ]),
    topic("continuous", "Continuous Systems and Phase Portraits", "Непрерывные системы и фазовые портреты", [
      p(
        "For ẋ = f(x), equilibria are zeros of f. Linearization (eigenvalues of the Jacobian) classifies them: nodes, saddles, spirals, centers. Limit cycles are isolated periodic orbits.",
        "Для ẋ = f(x) равновесия — нули f. Линеаризация (собственные значения якобиана) классифицирует их: узлы, сёдла, фокусы, центры. Предельные циклы — изолированные периодические орбиты.",
      ),
      formula(
        "\\dot{\\mathbf{x}} = \\mathbf{f}(\\mathbf{x}), \\qquad \\mathbf{f}(\\mathbf{x}^*) = 0",
        "ẋ = f(x);   f(x*) = 0",
      ),
    ]),
    topic("chaos", "Chaos and Lyapunov Exponents", "Хаос и показатели Ляпунова", [
      p(
        "Chaos means sensitive dependence on initial conditions: nearby orbits separate exponentially, measured by a positive Lyapunov exponent. The Lorenz system's butterfly attractor is the icon.",
        "Хаос — чувствительная зависимость от начальных условий: близкие орбиты расходятся экспоненциально, что измеряется положительным показателем Ляпунова. Аттрактор-бабочка системы Лоренца — икона области.",
      ),
      formula(
        "|\\delta x(t)| \\approx |\\delta x(0)|\\,e^{\\lambda t}, \\qquad \\lambda > 0 \\Rightarrow \\text{chaos}",
        "|δx(t)| ≈ |δx(0)|·e^(λt);   λ > 0 ⇒ хаос",
      ),
      note(
        "Deterministic ≠ predictable: chaos needs no randomness, only nonlinear stretching and folding.",
        "Детерминированность ≠ предсказуемость: хаосу не нужна случайность, только нелинейное растяжение и складывание.",
      ),
    ]),
  ],
  problems: [
    prob(
      "ds1", "easy",
      "Find the fixed points of f(x) = x².",
      "Найдите неподвижные точки f(x) = x².",
      "0 and 1",
      "0 и 1",
      "x² = x ⇒ x(x − 1) = 0.",
      "x² = x ⇒ x(x − 1) = 0.",
    ),
    prob(
      "ds2", "easy",
      "Is the fixed point 0 of f(x) = x/2 stable?",
      "Устойчива ли неподвижная точка 0 отображения f(x) = x/2?",
      "Yes — |f′(0)| = 1/2 < 1",
      "Да — |f′(0)| = 1/2 < 1",
      "Each iteration halves the distance to 0, so orbits converge to it.",
      "Каждая итерация вдвое уменьшает расстояние до 0, поэтому орбиты сходятся к ней.",
    ),
    prob(
      "ds3", "medium",
      "For the logistic map with r = 2 and x₀ = 0.3, compute x₁.",
      "Для логистического отображения с r = 2 и x₀ = 0,3 вычислите x₁.",
      "0.42",
      "0,42",
      "x₁ = 2·0.3·0.7 = 0.42.",
      "x₁ = 2·0,3·0,7 = 0,42.",
    ),
    prob(
      "ds4", "medium",
      "Find and classify the equilibrium of ẋ = −3x.",
      "Найдите и классифицируйте равновесие уравнения ẋ = −3x.",
      "x = 0, stable",
      "x = 0, устойчиво",
      "f(x) = −3x vanishes at 0; f′(0) = −3 < 0, so solutions x(t) = x₀e^(−3t) decay to it.",
      "f(x) = −3x обращается в ноль в 0; f′(0) = −3 < 0, поэтому решения x(t) = x₀e^(−3t) затухают к нему.",
    ),
    prob(
      "ds5", "hard",
      "For f(x) = 2x(1 − x), find the nonzero fixed point and its stability.",
      "Для f(x) = 2x(1 − x) найдите ненулевую неподвижную точку и её устойчивость.",
      "x* = 1/2; superstable (f′(x*) = 0)",
      "x* = 1/2; сверхустойчива (f′(x*) = 0)",
      "2x(1−x) = x gives x = 1/2. f′(x) = 2 − 4x, so f′(1/2) = 0: convergence is faster than geometric (superstable).",
      "2x(1−x) = x даёт x = 1/2. f′(x) = 2 − 4x, значит f′(1/2) = 0: сходимость быстрее геометрической (сверхустойчивость).",
    ),
  ],
};
