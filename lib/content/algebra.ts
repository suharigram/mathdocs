import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const algebra: Section = {
  slug: "algebra",
  title: { en: "Algebra", ru: "Алгебра" },
  tagline: {
    en: "Equations, polynomials, and the language of symbols",
    ru: "Уравнения, многочлены и язык символов",
  },
  description: {
    en: "Algebra studies mathematical symbols and the rules for manipulating them. It is the foundation for nearly every other branch of mathematics: from solving simple linear equations to working with polynomials, exponents, and logarithms.",
    ru: "Алгебра изучает математические символы и правила обращения с ними. Это основа почти всех остальных разделов математики: от решения простых линейных уравнений до работы с многочленами, степенями и логарифмами.",
  },
  topics: [
    topic("linear-equations", "Linear Equations and Systems", "Линейные уравнения и системы", [
      p(
        "A linear equation in one variable has the form ax + b = 0 with a ≠ 0. It has exactly one solution, found by isolating the variable.",
        "Линейное уравнение с одной переменной имеет вид ax + b = 0, где a ≠ 0. Оно имеет ровно одно решение, которое находится изолированием переменной.",
      ),
      formula("ax + b = 0 \\;\\Rightarrow\\; x = -\\frac{b}{a}", "ax + b = 0  ⇒  x = −b/a"),
      p(
        "A system of two linear equations in two variables can be solved by substitution (express one variable through the other) or elimination (add or subtract equations to cancel a variable).",
        "Систему двух линейных уравнений с двумя переменными решают методом подстановки (выразить одну переменную через другую) или методом сложения (сложить или вычесть уравнения, чтобы исключить переменную).",
      ),
      formula(
        "\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}",
        "a₁x + b₁y = c₁;   a₂x + b₂y = c₂",
        "A general 2×2 linear system",
        "Общий вид системы 2×2",
      ),
    ]),
    topic("quadratic-equations", "Quadratic Equations", "Квадратные уравнения", [
      p(
        "A quadratic equation ax² + bx + c = 0 (a ≠ 0) is solved using the discriminant D = b² − 4ac. The sign of D determines the number of real roots.",
        "Квадратное уравнение ax² + bx + c = 0 (a ≠ 0) решается через дискриминант D = b² − 4ac. Знак D определяет число действительных корней.",
      ),
      formula(
        "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        "x = (−b ± √(b² − 4ac)) / (2a)",
        "The quadratic formula",
        "Формула корней квадратного уравнения",
      ),
      list(
        ["D > 0: two distinct real roots", "D > 0: два различных действительных корня"],
        ["D = 0: one repeated real root", "D = 0: один кратный действительный корень"],
        ["D < 0: no real roots (two complex roots)", "D < 0: действительных корней нет (два комплексных)"],
      ),
      p(
        "Vieta's formulas relate the roots to the coefficients: x₁ + x₂ = −b/a and x₁·x₂ = c/a. They are useful for checking answers and building equations from known roots.",
        "Формулы Виета связывают корни с коэффициентами: x₁ + x₂ = −b/a и x₁·x₂ = c/a. Они удобны для проверки ответов и составления уравнений по известным корням.",
      ),
    ]),
    topic("polynomials", "Polynomials and Factoring", "Многочлены и разложение на множители", [
      p(
        "A polynomial is a sum of terms aₙxⁿ + … + a₁x + a₀. Its degree is the highest power with a nonzero coefficient. The Factor Theorem states that (x − r) is a factor exactly when r is a root.",
        "Многочлен — это сумма слагаемых aₙxⁿ + … + a₁x + a₀. Его степень — наибольшая степень с ненулевым коэффициентом. Теорема о множителях: (x − r) является множителем тогда и только тогда, когда r — корень.",
      ),
      formula(
        "(a \\pm b)^2 = a^2 \\pm 2ab + b^2, \\qquad a^2 - b^2 = (a-b)(a+b)",
        "(a ± b)² = a² ± 2ab + b²;   a² − b² = (a − b)(a + b)",
        "Short multiplication formulas",
        "Формулы сокращённого умножения",
      ),
      formula(
        "a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)",
        "a³ ± b³ = (a ± b)(a² ∓ ab + b²)",
        "Sum and difference of cubes",
        "Сумма и разность кубов",
      ),
      note(
        "Factoring turns equations into products: if A·B = 0, then A = 0 or B = 0. This is the key idea behind solving polynomial equations.",
        "Разложение на множители превращает уравнение в произведение: если A·B = 0, то A = 0 или B = 0. Это ключевая идея решения многочленных уравнений.",
      ),
    ]),
    topic("exponents-logarithms", "Exponents and Logarithms", "Степени и логарифмы", [
      p(
        "Exponent rules let us simplify powers. The logarithm logₐx is the inverse operation: it answers the question “to what power must a be raised to get x?”.",
        "Свойства степеней позволяют упрощать выражения. Логарифм logₐx — обратная операция: он отвечает на вопрос «в какую степень нужно возвести a, чтобы получить x?».",
      ),
      formula(
        "a^m \\cdot a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{mn}",
        "a^m · a^n = a^(m+n);   a^m / a^n = a^(m−n);   (a^m)^n = a^(mn)",
      ),
      formula(
        "\\log_a(xy) = \\log_a x + \\log_a y, \\qquad \\log_a x = \\frac{\\ln x}{\\ln a}",
        "logₐ(xy) = logₐx + logₐy;   logₐx = ln x / ln a",
        "Logarithm product rule and change of base",
        "Логарифм произведения и переход к новому основанию",
      ),
      note(
        "Logarithms are defined only for positive arguments: logₐx requires x > 0, a > 0, a ≠ 1. Always check the domain when solving logarithmic equations.",
        "Логарифм определён только для положительных аргументов: logₐx требует x > 0, a > 0, a ≠ 1. При решении логарифмических уравнений всегда проверяйте область допустимых значений.",
      ),
    ]),
  ],
  problems: [
    prob(
      "a1", "easy",
      "Solve the equation: 3x − 7 = 11.",
      "Решите уравнение: 3x − 7 = 11.",
      "x = 6",
      "x = 6",
      "Add 7 to both sides: 3x = 18. Divide by 3: x = 6.",
      "Прибавим 7 к обеим частям: 3x = 18. Разделим на 3: x = 6.",
    ),
    prob(
      "a2", "easy",
      "Solve the quadratic equation: x² − 5x + 6 = 0.",
      "Решите квадратное уравнение: x² − 5x + 6 = 0.",
      "x = 2 or x = 3",
      "x = 2 или x = 3",
      "Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3. Check with Vieta: 2 + 3 = 5, 2·3 = 6.",
      "Разложим: (x − 2)(x − 3) = 0, откуда x = 2 или x = 3. Проверка по Виету: 2 + 3 = 5, 2·3 = 6.",
    ),
    prob(
      "a3", "medium",
      "Solve the system: x + y = 10 and x − y = 4.",
      "Решите систему: x + y = 10 и x − y = 4.",
      "x = 7, y = 3",
      "x = 7, y = 3",
      "Add the equations: 2x = 14, so x = 7. Substitute back: 7 + y = 10, so y = 3.",
      "Сложим уравнения: 2x = 14, откуда x = 7. Подставим: 7 + y = 10, значит y = 3.",
    ),
    prob(
      "a4", "medium",
      "Solve the exponential equation: 2^(x+1) = 16.",
      "Решите показательное уравнение: 2^(x+1) = 16.",
      "x = 3",
      "x = 3",
      "Write 16 = 2⁴. Then 2^(x+1) = 2⁴ gives x + 1 = 4, so x = 3.",
      "Запишем 16 = 2⁴. Тогда 2^(x+1) = 2⁴ даёт x + 1 = 4, откуда x = 3.",
    ),
    prob(
      "a5", "hard",
      "Solve the logarithmic equation: log₂x + log₂(x − 2) = 3.",
      "Решите логарифмическое уравнение: log₂x + log₂(x − 2) = 3.",
      "x = 4",
      "x = 4",
      "Domain: x > 2. Combine: log₂(x(x − 2)) = 3, so x² − 2x = 8, i.e. x² − 2x − 8 = 0. Roots are x = 4 and x = −2; only x = 4 lies in the domain.",
      "ОДЗ: x > 2. Объединим: log₂(x(x − 2)) = 3, значит x² − 2x = 8, т.е. x² − 2x − 8 = 0. Корни x = 4 и x = −2; только x = 4 входит в ОДЗ.",
    ),
  ],
};
