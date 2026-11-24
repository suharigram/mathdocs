import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const sequencesSeries: Section = {
  slug: "sequences-series",
  title: { en: "Sequences & Series", ru: "Последовательности и ряды" },
  tagline: {
    en: "Infinite sums, convergence, and expansions",
    ru: "Бесконечные суммы, сходимость и разложения",
  },
  description: {
    en: "Sequences list numbers in order; series add them up. Convergence tests decide when an infinite sum makes sense, while power, Taylor, and Fourier series represent functions as infinite polynomials or waves.",
    ru: "Последовательности перечисляют числа по порядку; ряды их складывают. Признаки сходимости решают, когда бесконечная сумма имеет смысл, а степенные ряды, ряды Тейлора и Фурье представляют функции бесконечными многочленами или волнами.",
  },
  topics: [
    topic("sequences", "Sequences and Progressions", "Последовательности и прогрессии", [
      p(
        "A sequence converges to L when its terms get arbitrarily close to L. Arithmetic progressions add a constant difference d; geometric progressions multiply by a constant ratio r.",
        "Последовательность сходится к L, если её члены сколь угодно близко приближаются к L. Арифметическая прогрессия прибавляет постоянную разность d; геометрическая умножает на постоянное знаменатель r.",
      ),
      formula(
        "a_n = a_1 + (n-1)d, \\qquad a_n = a_1 r^{n-1}",
        "aₙ = a₁ + (n − 1)d;   aₙ = a₁·r^(n−1)",
        "Arithmetic and geometric progressions",
        "Арифметическая и геометрическая прогрессии",
      ),
      formula(
        "S_n = \\frac{n(a_1 + a_n)}{2}, \\qquad S_n = a_1\\frac{1 - r^n}{1 - r}",
        "Sₙ = n(a₁ + aₙ)/2;   Sₙ = a₁(1 − rⁿ)/(1 − r)",
      ),
    ]),
    topic("convergence-tests", "Series and Convergence Tests", "Ряды и признаки сходимости", [
      p(
        "A series converges when its partial sums converge. The geometric series is the model case; comparison, ratio, root, and integral tests handle the rest. The harmonic series famously diverges.",
        "Ряд сходится, когда сходятся его частичные суммы. Геометрический ряд — эталонный случай; признаки сравнения, Даламбера, Коши и интегральный разбирают остальные. Гармонический ряд, как известно, расходится.",
      ),
      formula(
        "\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r} \\quad (|r| < 1)",
        "Σ a·rⁿ = a/(1 − r)   (|r| < 1)",
      ),
      list(
        ["Ratio test: lim |aₙ₊₁/aₙ| < 1 ⇒ converges", "Признак Даламбера: lim |aₙ₊₁/aₙ| < 1 ⇒ сходится"],
        ["p-series Σ 1/nᵖ converges exactly when p > 1", "Ряд Σ 1/nᵖ сходится тогда и только тогда, когда p > 1"],
        ["Terms must tend to 0 — necessary, not sufficient", "Члены должны стремиться к 0 — необходимо, но не достаточно"],
      ),
    ]),
    topic("power-taylor", "Power Series and Taylor Expansions", "Степенные ряды и разложения Тейлора", [
      p(
        "A power series represents a function inside its radius of convergence. Taylor series build the coefficients from derivatives at a point; Maclaurin series are centered at 0.",
        "Степенной ряд представляет функцию внутри радиуса сходимости. Ряд Тейлора строит коэффициенты из производных в точке; ряд Маклорена центрирован в 0.",
      ),
      formula(
        "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n",
        "f(x) = Σ f⁽ⁿ⁾(a)/n! · (x − a)ⁿ",
      ),
      formula(
        "e^x = \\sum \\frac{x^n}{n!}, \\quad \\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}",
        "e^x = Σ xⁿ/n!;   sin x = Σ (−1)ⁿx^(2n+1)/(2n+1)!",
      ),
    ]),
    topic("fourier", "Fourier Series", "Ряды Фурье", [
      p(
        "A periodic function decomposes into sines and cosines. The coefficients are inner products with the basis waves — the foundation of signal processing.",
        "Периодическая функция раскладывается в синусы и косинусы. Коэффициенты — скалярные произведения с базисными волнами; это основа обработки сигналов.",
      ),
      formula(
        "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}\\big(a_n\\cos nx + b_n\\sin nx\\big)",
        "f(x) = a₀/2 + Σ (aₙcos nx + bₙsin nx)",
      ),
      formula(
        "a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos nx\\,dx, \\quad b_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin nx\\,dx",
        "aₙ = (1/π)∫ f(x)cos nx dx;   bₙ = (1/π)∫ f(x)sin nx dx   (по [−π, π])",
      ),
      note(
        "At a jump discontinuity the Fourier series converges to the midpoint of the jump (Dirichlet's theorem).",
        "В точке разрыва ряд Фурье сходится к середине скачка (теорема Дирихле).",
      ),
    ]),
  ],
  problems: [
    prob(
      "sq1", "easy",
      "Find the 10th term of the arithmetic sequence 3, 7, 11, …",
      "Найдите 10-й член арифметической прогрессии 3, 7, 11, …",
      "39",
      "39",
      "a₁ = 3, d = 4: a₁₀ = 3 + 9·4 = 39.",
      "a₁ = 3, d = 4: a₁₀ = 3 + 9·4 = 39.",
    ),
    prob(
      "sq2", "easy",
      "Sum the infinite series 1 + 1/2 + 1/4 + 1/8 + …",
      "Найдите сумму бесконечного ряда 1 + 1/2 + 1/4 + 1/8 + …",
      "2",
      "2",
      "Geometric with a = 1, r = 1/2: S = 1/(1 − 1/2) = 2.",
      "Геометрический ряд с a = 1, r = 1/2: S = 1/(1 − 1/2) = 2.",
    ),
    prob(
      "sq3", "medium",
      "Does the series Σ 1/n² converge?",
      "Сходится ли ряд Σ 1/n²?",
      "Yes (p-series with p = 2 > 1); sum = π²/6",
      "Да (p-ряд с p = 2 > 1); сумма = π²/6",
      "It is a p-series with p = 2 > 1, so it converges. Euler famously showed the sum is π²/6.",
      "Это p-ряд с p = 2 > 1, значит сходится. Эйлер показал, что сумма равна π²/6.",
    ),
    prob(
      "sq4", "medium",
      "Write the degree-2 Taylor polynomial of eˣ at 0.",
      "Запишите многочлен Тейлора степени 2 для eˣ в точке 0.",
      "1 + x + x²/2",
      "1 + x + x²/2",
      "All derivatives of eˣ at 0 equal 1: P₂(x) = 1 + x + x²/2!.",
      "Все производные eˣ в 0 равны 1: P₂(x) = 1 + x + x²/2!.",
    ),
    prob(
      "sq5", "hard",
      "Find the radius of convergence of Σ xⁿ/n.",
      "Найдите радиус сходимости ряда Σ xⁿ/n.",
      "R = 1",
      "R = 1",
      "Ratio test: |aₙ₊₁/aₙ| = n/(n+1) → 1, so R = 1. At x = 1 the harmonic series diverges; at x = −1 the alternating series converges.",
      "Признак Даламбера: |aₙ₊₁/aₙ| = n/(n+1) → 1, значит R = 1. При x = 1 гармонический ряд расходится; при x = −1 знакочередующийся сходится.",
    ),
  ],
};
