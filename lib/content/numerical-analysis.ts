import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const numericalAnalysis: Section = {
  slug: "numerical-analysis",
  title: { en: "Numerical Analysis", ru: "Численные методы" },
  tagline: {
    en: "Algorithms for approximate computation",
    ru: "Алгоритмы приближённых вычислений",
  },
  description: {
    en: "Numerical analysis designs algorithms that solve continuous problems approximately, with controlled error: root finding, interpolation, quadrature, and ODE solvers. Convergence order tells you how fast accuracy improves.",
    ru: "Численные методы строят алгоритмы приближённого решения непрерывных задач с контролируемой погрешностью: поиск корней, интерполяция, квадратуры, решатели ОДУ. Порядок сходимости показывает, как быстро растёт точность.",
  },
  topics: [
    topic("roots", "Root Finding", "Поиск корней", [
      p(
        "Bisection halves a sign-change interval — slow but guaranteed. Newton's method uses tangents and converges quadratically near a simple root; the secant method avoids derivatives.",
        "Бисекция делит пополам отрезок со сменой знака — медленно, но надёжно. Метод Ньютона использует касательные и сходится квадратично вблизи простого корня; метод секущих обходится без производных.",
      ),
      formula(
        "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
        "xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)",
        "Newton's method",
        "Метод Ньютона",
      ),
    ]),
    topic("interpolation", "Interpolation and Approximation", "Интерполяция и аппроксимация", [
      p(
        "Through n + 1 points passes a unique polynomial of degree ≤ n (Lagrange form). High-degree interpolation oscillates (Runge's phenomenon); splines and least squares are the practical alternatives.",
        "Через n + 1 точку проходит единственный многочлен степени ≤ n (форма Лагранжа). Интерполяция высокой степени осциллирует (феномен Рунге); сплайны и наименьшие квадраты — практические альтернативы.",
      ),
      formula(
        "L(x) = \\sum_{i=0}^{n} y_i \\prod_{j \\neq i} \\frac{x - x_j}{x_i - x_j}",
        "L(x) = Σ yᵢ·∏ (x − xⱼ)/(xᵢ − xⱼ)",
        "Lagrange interpolation polynomial",
        "Интерполяционный многочлен Лагранжа",
      ),
    ]),
    topic("quadrature", "Numerical Integration", "Численное интегрирование", [
      p(
        "The trapezoid rule approximates area by trapezoids (error O(h²)); Simpson's rule fits parabolas (error O(h⁴)). Halving the step cuts Simpson's error by about 16.",
        "Правило трапеций приближает площадь трапециями (погрешность O(h²)); правило Симпсона вписывает параболы (погрешность O(h⁴)). Уменьшение шага вдвое режет погрешность Симпсона примерно в 16 раз.",
      ),
      formula(
        "\\int_a^b f \\approx \\frac{h}{3}\\big[f_0 + 4f_1 + 2f_2 + \\cdots + 4f_{n-1} + f_n\\big]",
        "∫ f ≈ (h/3)[f₀ + 4f₁ + 2f₂ + … + 4fₙ₋₁ + fₙ]",
        "Composite Simpson's rule (n even)",
        "Составное правило Симпсона (n чётно)",
      ),
    ]),
    topic("odes", "Numerical ODEs", "Численное решение ОДУ", [
      p(
        "Euler's method steps along the tangent (error O(h)); the classical Runge–Kutta method samples four slopes per step (error O(h⁴)). Stiff problems need implicit methods.",
        "Метод Эйлера шагает вдоль касательной (погрешность O(h)); классический метод Рунге–Кутты берёт четыре наклона за шаг (погрешность O(h⁴)). Жёсткие задачи требуют неявных методов.",
      ),
      formula(
        "y_{n+1} = y_n + h f(t_n, y_n)",
        "yₙ₊₁ = yₙ + h·f(tₙ, yₙ)",
        "Euler's method",
        "Метод Эйлера",
      ),
      note(
        "RK4 weights four slope estimates 1:2:2:1 — the workhorse of scientific computing.",
        "RK4 взвешивает четыре оценки наклона как 1:2:2:1 — рабочая лошадка научных вычислений.",
      ),
    ]),
  ],
  problems: [
    prob(
      "na1", "easy",
      "One Newton step for f(x) = x² − 2 starting at x₀ = 1.",
      "Один шаг Ньютона для f(x) = x² − 2 из x₀ = 1.",
      "1.5",
      "1,5",
      "x₁ = 1 − (1 − 2)/2 = 1 + 0.5 = 1.5.",
      "x₁ = 1 − (1 − 2)/2 = 1 + 0,5 = 1,5.",
    ),
    prob(
      "na2", "easy",
      "Apply the trapezoid rule with one interval to ∫₀¹ x dx.",
      "Примените правило трапеций с одним отрезком к ∫₀¹ x dx.",
      "0.5 (exact here)",
      "0,5 (здесь точно)",
      "(1/2)(f(0) + f(1)) = (1/2)(0 + 1) = 0.5; the rule is exact for linear functions.",
      "(1/2)(f(0) + f(1)) = (1/2)(0 + 1) = 0,5; правило точно для линейных функций.",
    ),
    prob(
      "na3", "medium",
      "Bisection for x² − 2 on [1, 2]: after testing the midpoint, what is the new interval?",
      "Бисекция для x² − 2 на [1, 2]: после проверки середины каков новый отрезок?",
      "[1, 1.5]",
      "[1; 1,5]",
      "f(1.5) = 0.25 > 0 while f(1) < 0, so the root lies in [1, 1.5].",
      "f(1,5) = 0,25 > 0, а f(1) < 0, значит корень лежит в [1; 1,5].",
    ),
    prob(
      "na4", "medium",
      "Use Simpson's rule with h = 0.5 to estimate ∫₀¹ x² dx.",
      "Оцените ∫₀¹ x² dx правилом Симпсона с h = 0,5.",
      "1/3 (exact)",
      "1/3 (точно)",
      "(0.5/3)[0 + 4·0.25 + 1] = (1/6)·2 = 1/3; Simpson is exact for polynomials up to degree 3.",
      "(0,5/3)[0 + 4·0,25 + 1] = (1/6)·2 = 1/3; Симпсон точен для многочленов до степени 3.",
    ),
    prob(
      "na5", "hard",
      "Euler's method for y′ = y, y(0) = 1, h = 0.1: find y after two steps and compare with e^0.2.",
      "Метод Эйлера для y′ = y, y(0) = 1, h = 0,1: найдите y через два шага и сравните с e^0,2.",
      "y₂ = 1.21 vs e^0.2 ≈ 1.2214",
      "y₂ = 1,21 против e^0,2 ≈ 1,2214",
      "y₁ = 1 + 0.1·1 = 1.1; y₂ = 1.1 + 0.1·1.1 = 1.21. Euler underestimates convex growth; error ≈ 0.011.",
      "y₁ = 1 + 0,1·1 = 1,1; y₂ = 1,1 + 0,1·1,1 = 1,21. Эйлер занижает выпуклый рост; погрешность ≈ 0,011.",
    ),
  ],
};
