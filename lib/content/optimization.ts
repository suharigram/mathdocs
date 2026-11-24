import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const optimization: Section = {
  slug: "optimization",
  title: { en: "Optimization", ru: "Оптимизация" },
  tagline: {
    en: "Finding the best under constraints",
    ru: "Поиск наилучшего при ограничениях",
  },
  description: {
    en: "Optimization minimizes or maximizes objectives: gradient methods for smooth problems, Lagrange multipliers and KKT for constraints, simplex for linear programs. Convexity is the dividing line between tractable and hard.",
    ru: "Оптимизация минимизирует или максимизирует целевые функции: градиентные методы для гладких задач, множители Лагранжа и KKT для ограничений, симплекс-метод для линейных программ. Выпуклость — граница между решаемым и трудным.",
  },
  topics: [
    topic("unconstrained", "Unconstrained Optimization", "Безусловная оптимизация", [
      p(
        "Critical points satisfy ∇f = 0; the Hessian decides min, max, or saddle. Gradient descent iterates xₖ₊₁ = xₖ − α∇f(xₖ); the step size α controls speed and stability.",
        "Критические точки удовлетворяют ∇f = 0; гессиан решает, минимум это, максимум или седло. Градиентный спуск итерирует xₖ₊₁ = xₖ − α∇f(xₖ); шаг α управляет скоростью и устойчивостью.",
      ),
      formula(
        "\\mathbf{x}_{k+1} = \\mathbf{x}_k - \\alpha \\nabla f(\\mathbf{x}_k)",
        "xₖ₊₁ = xₖ − α·∇f(xₖ)",
        "Gradient descent",
        "Градиентный спуск",
      ),
    ]),
    topic("constrained", "Constraints: Lagrange and KKT", "Ограничения: Лагранж и KKT", [
      p(
        "At a constrained extremum the objective's gradient is parallel to the constraint's: ∇f = λ∇g. With inequalities, the Karush–Kuhn–Tucker conditions add complementary slackness.",
        "В условном экстремуме градиент цели параллелен градиенту ограничения: ∇f = λ∇g. При неравенствах условия Каруша–Куна–Таккера добавляют дополняющую нежёсткость.",
      ),
      formula(
        "\\nabla f = \\lambda \\nabla g, \\qquad g(\\mathbf{x}) = 0",
        "∇f = λ∇g;   g(x) = 0",
        "Lagrange multiplier condition",
        "Условие множителей Лагранжа",
      ),
    ]),
    topic("linear-programming", "Linear Programming", "Линейное программирование", [
      p(
        "A linear objective over a polytope attains its optimum at a vertex. The simplex method walks vertices; duality pairs every maximization with a bounding minimization.",
        "Линейная цель на многограннике достигает оптимума в вершине. Симплекс-метод обходит вершины; двойственность сопоставляет каждой максимизации ограничивающую минимизацию.",
      ),
      formula(
        "\\max\\ c^T x \\quad \\text{s.t. } Ax \\le b,\\ x \\ge 0",
        "max cᵀx при Ax ≤ b, x ≥ 0",
      ),
    ]),
    topic("convexity", "Convexity", "Выпуклость", [
      p(
        "A function is convex when chords lie above the graph. For convex problems every local minimum is global — the property that makes large-scale optimization reliable. Jensen's inequality generalizes the chord condition.",
        "Функция выпукла, если хорды лежат выше графика. В выпуклых задачах каждый локальный минимум глобален — свойство, делающее крупномасштабную оптимизацию надёжной. Неравенство Йенсена обобщает условие хорды.",
      ),
      formula(
        "f(\\theta x + (1-\\theta)y) \\le \\theta f(x) + (1-\\theta)f(y)",
        "f(θx + (1 − θ)y) ≤ θf(x) + (1 − θ)f(y)",
      ),
      note(
        "Least squares, LP, and many ML losses are convex; neural network training is not.",
        "Наименьшие квадраты, ЛП и многие функции потерь ML выпуклы; обучение нейросетей — нет.",
      ),
    ]),
  ],
  problems: [
    prob(
      "op1", "easy",
      "Minimize f(x) = x² − 4x + 5.",
      "Минимизируйте f(x) = x² − 4x + 5.",
      "x = 2, f = 1",
      "x = 2, f = 1",
      "f′ = 2x − 4 = 0 gives x = 2; f(2) = 4 − 8 + 5 = 1. f″ = 2 > 0 confirms a minimum.",
      "f′ = 2x − 4 = 0 даёт x = 2; f(2) = 4 − 8 + 5 = 1. f″ = 2 > 0 подтверждает минимум.",
    ),
    prob(
      "op2", "easy",
      "Gradient descent on f(x) = x² from x₀ = 3 with α = 0.1: find x₁.",
      "Градиентный спуск для f(x) = x² из x₀ = 3 с α = 0,1: найдите x₁.",
      "2.4",
      "2,4",
      "f′(3) = 6; x₁ = 3 − 0.1·6 = 2.4.",
      "f′(3) = 6; x₁ = 3 − 0,1·6 = 2,4.",
    ),
    prob(
      "op3", "medium",
      "Maximize xy subject to x + y = 10 (x, y > 0).",
      "Максимизируйте xy при x + y = 10 (x, y > 0).",
      "x = y = 5, product 25",
      "x = y = 5, произведение 25",
      "Lagrange: (y, x) = λ(1, 1) ⇒ x = y; with x + y = 10, x = y = 5 and xy = 25.",
      "Лагранж: (y, x) = λ(1, 1) ⇒ x = y; при x + y = 10 получаем x = y = 5 и xy = 25.",
    ),
    prob(
      "op4", "medium",
      "Maximize 3x + 2y subject to x + y ≤ 4, x, y ≥ 0.",
      "Максимизируйте 3x + 2y при x + y ≤ 4, x, y ≥ 0.",
      "12 at (4, 0)",
      "12 в точке (4, 0)",
      "Check vertices: (0,0) → 0, (0,4) → 8, (4,0) → 12. The optimum is at (4, 0).",
      "Проверяем вершины: (0,0) → 0, (0,4) → 8, (4,0) → 12. Оптимум в (4, 0).",
    ),
    prob(
      "op5", "hard",
      "Minimize x² + y² subject to x + y = 1.",
      "Минимизируйте x² + y² при x + y = 1.",
      "(1/2, 1/2), value 1/2",
      "(1/2, 1/2), значение 1/2",
      "Lagrange: (2x, 2y) = λ(1,1) ⇒ x = y = 1/2; value 1/4 + 1/4 = 1/2. Geometrically: nearest point of the line to the origin.",
      "Лагранж: (2x, 2y) = λ(1,1) ⇒ x = y = 1/2; значение 1/4 + 1/4 = 1/2. Геометрически: ближайшая к началу координат точка прямой.",
    ),
  ],
};
