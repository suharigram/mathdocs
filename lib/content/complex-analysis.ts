import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const complexAnalysis: Section = {
  slug: "complex-analysis",
  title: { en: "Complex Analysis", ru: "Комплексный анализ" },
  tagline: {
    en: "Analytic functions and contour integration",
    ru: "Аналитические функции и контурное интегрирование",
  },
  description: {
    en: "Complex analysis studies differentiable functions of a complex variable. Analyticity is astonishingly rigid: derivatives of all orders, integral formulas, and residues turn hard real integrals into algebra.",
    ru: "Комплексный анализ изучает дифференцируемые функции комплексной переменной. Аналитичность поразительно жёсткая: производные всех порядков, интегральные формулы и вычеты превращают трудные действительные интегралы в алгебру.",
  },
  topics: [
    topic("complex-numbers", "Complex Numbers", "Комплексные числа", [
      p(
        "A complex number z = x + iy has modulus |z| and argument θ. Euler's formula links exponentials and trigonometry; polar form makes multiplication geometric.",
        "Комплексное число z = x + iy имеет модуль |z| и аргумент θ. Формула Эйлера связывает экспоненту с тригонометрией; полярная форма делает умножение геометрическим.",
      ),
      formula(
        "e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\qquad z = r e^{i\\theta}",
        "e^(iθ) = cos θ + i·sin θ;   z = r·e^(iθ)",
      ),
      formula(
        "|z| = \\sqrt{x^2 + y^2}, \\qquad z\\bar{z} = |z|^2",
        "|z| = √(x² + y²);   z·z̄ = |z|²",
      ),
    ]),
    topic("analytic", "Analytic Functions and Cauchy–Riemann", "Аналитические функции и условия Коши–Римана", [
      p(
        "A function is analytic when it is complex-differentiable in a neighborhood. Writing f = u + iv, differentiability forces the Cauchy–Riemann equations; u and v are then harmonic.",
        "Функция аналитична, если комплексно дифференцируема в окрестности. В записи f = u + iv дифференцируемость вынуждает условия Коши–Римана; u и v тогда гармонические.",
      ),
      formula(
        "u_x = v_y, \\qquad u_y = -v_x",
        "uₓ = vᵧ;   uᵧ = −vₓ",
        "Cauchy–Riemann equations",
        "Условия Коши–Римана",
      ),
      note(
        "Analytic functions are infinitely differentiable and equal their Taylor series locally — unlike real functions.",
        "Аналитические функции бесконечно дифференцируемы и локально совпадают со своим рядом Тейлора — в отличие от действительных.",
      ),
    ]),
    topic("contour", "Contour Integration", "Контурное интегрирование", [
      p(
        "Cauchy's theorem: the integral of an analytic function around a closed contour is zero. Cauchy's integral formula recovers interior values from boundary values.",
        "Теорема Коши: интеграл аналитической функции по замкнутому контуру равен нулю. Интегральная формула Коши восстанавливает значения внутри по значениям на границе.",
      ),
      formula(
        "\\oint_C f(z)\\,dz = 0, \\qquad f(a) = \\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-a}\\,dz",
        "∮ f(z) dz = 0;   f(a) = (1/2πi)∮ f(z)/(z − a) dz",
      ),
    ]),
    topic("residues", "Residues and Applications", "Вычеты и приложения", [
      p(
        "Near an isolated singularity, f has a Laurent series; the coefficient of 1/(z−a) is the residue. The residue theorem evaluates contour integrals — and many real integrals — by summing residues.",
        "Вблизи изолированной особенности f имеет ряд Лорана; коэффициент при 1/(z−a) — вычет. Теорема о вычетах вычисляет контурные интегралы — и многие действительные — суммированием вычетов.",
      ),
      formula(
        "\\oint_C f(z)\\,dz = 2\\pi i \\sum_k \\mathrm{Res}(f, a_k)",
        "∮ f(z) dz = 2πi·Σ Res(f, aₖ)",
        "Residue theorem",
        "Теорема о вычетах",
      ),
    ]),
    topic("elementary-functions", "Elementary Complex Functions and Branches", "Элементарные комплексные функции и ветви", [
      p(
        "exp is periodic with period 2πi; log is multivalued, log z = ln|z| + i(arg z + 2πk). Branch cuts make single-valued branches; z^a = e^{a log z} inherits the ambiguity.",
        "exp периодична с периодом 2πi; log многозначен, log z = ln|z| + i(arg z + 2πk). Разрезы задают однозначные ветви; z^a = e^{a log z} наследует неоднозначность.",
      ),
      formula(
        "\\log z = \\ln|z| + i\\,\\arg z",
        "log z = ln|z| + i·arg z",
      ),
    ]),
    topic("laurent-singularities", "Laurent Series and Singularities", "Ряды Лорана и особенности", [
      p(
        "Laurent series include negative powers and converge on annuli. Isolated singularities classify by principal part: removable (none), pole (finite), essential (infinite). Casorati–Weierstrass and Picard describe essential wildness.",
        "Ряды Лорана включают отрицательные степени и сходятся в кольцах. Изолированные особенности классифицируются главной частью: устранимая (нет), полюс (конечная), существенная (бесконечная). Казорати–Вейерштрасс и Пикар описывают буйство существенных.",
      ),
      formula(
        "f(z) = \\sum_{n=-\\infty}^{\\infty} a_n (z - a)^n",
        "f(z) = Σ aₙ(z − a)ⁿ,   n от −∞ до ∞",
      ),
    ]),
    topic("conformal", "Conformal Maps", "Конформные отображения", [
      p(
        "Analytic functions with nonzero derivative preserve angles. Möbius maps send circles/lines to circles/lines; the Riemann mapping theorem says every proper simply connected domain is conformally the disk.",
        "Аналитические функции с ненулевой производной сохраняют углы. Дробно-линейные отображения переводят окружности/прямые в окружности/прямые; теорема Римана утверждает, что всякая собственная односвязная область конформно эквивалентна кругу.",
      ),
      formula(
        "w = \\frac{az + b}{cz + d}, \\qquad ad - bc \\neq 0",
        "w = (az + b)/(cz + d);   ad − bc ≠ 0",
        "Möbius transformation",
        "Дробно-линейное отображение",
      ),
    ]),
    topic("argument-rouche", "Argument Principle and Rouché", "Принцип аргумента и теорема Руше", [
      p(
        "The argument principle counts zeros minus poles via the winding of f along a contour. Rouché: if |g| < |f| on the boundary, f and f + g have the same zero count inside — yielding the fundamental theorem of algebra.",
        "Принцип аргумента считает нули минус полюса через намотку f вдоль контура. Руше: если |g| < |f| на границе, f и f + g имеют одинаковое число нулей внутри — что даёт основную теорему алгебры.",
      ),
      formula(
        "\\frac{1}{2\\pi i}\\oint \\frac{f'}{f}\\,dz = Z - P",
        "(1/2πi)∮ f′/f dz = Z − P",
      ),
    ]),
    topic("harmonic", "Harmonic Functions", "Гармонические функции", [
      p(
        "Real and imaginary parts of analytic functions are harmonic (Δu = 0), and every harmonic function on a simply connected domain has a harmonic conjugate. Mean value property and maximum principle follow.",
        "Действительная и мнимая части аналитических функций гармонические (Δu = 0), и у каждой гармонической функции в односвязной области есть гармонически сопряжённая. Следуют свойство среднего и принцип максимума.",
      ),
      formula(
        "\\Delta u = 0, \\qquad f = u + iv \\text{ analytic}",
        "Δu = 0;   f = u + iv аналитична",
      ),
    ]),
  ],
  problems: [
    prob(
      "ca1", "easy",
      "Compute (1 + i)².",
      "Вычислите (1 + i)².",
      "2i",
      "2i",
      "(1 + i)² = 1 + 2i + i² = 1 + 2i − 1 = 2i.",
      "(1 + i)² = 1 + 2i + i² = 1 + 2i − 1 = 2i.",
    ),
    prob(
      "ca2", "easy",
      "Find |3 + 4i|.",
      "Найдите |3 + 4i|.",
      "5",
      "5",
      "|3 + 4i| = √(9 + 16) = 5.",
      "|3 + 4i| = √(9 + 16) = 5.",
    ),
    prob(
      "ca3", "medium",
      "Write 1 + i in polar form.",
      "Запишите 1 + i в полярной форме.",
      "√2·e^(iπ/4)",
      "√2·e^(iπ/4)",
      "Modulus √2, argument π/4 (first quadrant, equal parts): z = √2·e^(iπ/4).",
      "Модуль √2, аргумент π/4 (первая четверть, равные компоненты): z = √2·e^(iπ/4).",
    ),
    prob(
      "ca4", "medium",
      "Evaluate ∮ dz/z around the unit circle (counterclockwise).",
      "Вычислите ∮ dz/z по единичной окружности (против часовой стрелки).",
      "2πi",
      "2πi",
      "Residue of 1/z at 0 is 1, so the integral is 2πi·1. (Parametrize z = e^(iθ) to check directly.)",
      "Вычет 1/z в 0 равен 1, поэтому интеграл равен 2πi·1. (Проверка параметризацией z = e^(iθ).)",
    ),
    prob(
      "ca5", "hard",
      "Use residues to compute ∫₋∞^∞ dx/(x² + 1).",
      "Используя вычеты, вычислите ∫₋∞^∞ dx/(x² + 1).",
      "π",
      "π",
      "Close the contour in the upper half-plane; the only pole there is z = i with residue 1/(2i). Integral = 2πi·(1/2i) = π.",
      "Замыкаем контур в верхней полуплоскости; единственный полюс там z = i с вычетом 1/(2i). Интеграл = 2πi·(1/2i) = π.",
    ),
  ],
};
