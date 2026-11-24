import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const calculus: Section = {
  slug: "calculus",
  title: { en: "Calculus", ru: "Математический анализ" },
  tagline: {
    en: "Limits, derivatives, integrals, and change",
    ru: "Пределы, производные, интегралы и изменение",
  },
  description: {
    en: "Calculus is the mathematics of change and accumulation. Differential calculus studies rates of change (derivatives); integral calculus studies accumulated quantities (areas, totals). The Fundamental Theorem links the two.",
    ru: "Математический анализ — математика изменений и накопления. Дифференциальное исчисление изучает скорости изменения (производные); интегральное — накопленные величины (площади, суммы). Основная теорема связывает их.",
  },
  topics: [
    topic("limits", "Limits and Continuity", "Пределы и непрерывность", [
      p(
        "The limit of f(x) as x approaches a is the value f(x) gets arbitrarily close to. A function is continuous at a when the limit exists and equals f(a).",
        "Предел f(x) при x, стремящемся к a, — значение, к которому f(x) сколь угодно близко приближается. Функция непрерывна в точке a, если предел существует и равен f(a).",
      ),
      formula(
        "\\lim_{x \\to a} f(x) = L",
        "lim (x→a) f(x) = L",
      ),
      formula(
        "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
        "lim (x→0) sin x / x = 1",
        "The first remarkable limit",
        "Первый замечательный предел",
      ),
      note(
        "For a 0/0 indeterminate form, try factoring, rationalizing, or (later) L'Hôpital's rule.",
        "Для неопределённости 0/0 попробуйте разложение на множители, домножение на сопряжённое или (позже) правило Лопиталя.",
      ),
    ]),
    topic("derivatives", "Derivatives", "Производные", [
      p(
        "The derivative f′(x) is the instantaneous rate of change — the slope of the tangent line. It is defined as a limit of difference quotients.",
        "Производная f′(x) — мгновенная скорость изменения, угловой коэффициент касательной. Она определяется как предел разностного отношения.",
      ),
      formula(
        "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
        "f′(x) = lim (h→0) (f(x + h) − f(x)) / h",
      ),
      formula(
        "(x^n)' = nx^{n-1}, \\quad (uv)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
        "(x^n)′ = n·x^(n−1);   (uv)′ = u′v + uv′;   (u/v)′ = (u′v − uv′)/v²",
        "Power, product, and quotient rules",
        "Правила: степень, произведение, частное",
      ),
      formula(
        "(f(g(x)))' = f'(g(x)) \\cdot g'(x)",
        "(f(g(x)))′ = f′(g(x)) · g′(x)",
        "Chain rule",
        "Производная сложной функции",
      ),
      list(
        ["(sin x)′ = cos x; (cos x)′ = −sin x", "(sin x)′ = cos x; (cos x)′ = −sin x"],
        ["(e^x)′ = e^x; (ln x)′ = 1/x", "(e^x)′ = e^x; (ln x)′ = 1/x"],
      ),
    ]),
    topic("integrals", "Integrals", "Интегралы", [
      p(
        "An antiderivative F of f satisfies F′ = f. The indefinite integral collects all antiderivatives; the definite integral computes net signed area and is evaluated via the Fundamental Theorem of Calculus.",
        "Первообразная F функции f удовлетворяет F′ = f. Неопределённый интеграл — множество всех первообразных; определённый интеграл вычисляет площадь со знаком и находится по основной теореме анализа.",
      ),
      formula(
        "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)",
        "∫ x^n dx = x^(n+1)/(n + 1) + C   (n ≠ −1)",
      ),
      formula(
        "\\int_a^b f(x)\\,dx = F(b) - F(a)",
        "∫ₐᵇ f(x) dx = F(b) − F(a)",
        "Fundamental Theorem of Calculus (Newton–Leibniz)",
        "Основная теорема анализа (формула Ньютона–Лейбница)",
      ),
    ]),
    topic("applications", "Applications", "Приложения", [
      p(
        "Setting f′(x) = 0 locates critical points — candidates for maxima and minima. Integrals compute areas between curves, and derivatives describe motion: velocity is the derivative of position, acceleration the derivative of velocity.",
        "Уравнение f′(x) = 0 находит критические точки — кандидатов на максимумы и минимумы. Интегралы вычисляют площади между кривыми, а производные описывают движение: скорость — производная координаты, ускорение — производная скорости.",
      ),
      formula(
        "S = \\int_a^b \\big(f(x) - g(x)\\big)\\,dx, \\quad v(t) = s'(t), \\quad a(t) = v'(t)",
        "S = ∫ₐᵇ (f(x) − g(x)) dx;   v(t) = s′(t);   a(t) = v′(t)",
        "Area between curves; kinematics",
        "Площадь между кривыми; кинематика",
      ),
      note(
        "To classify a critical point, check the sign change of f′ or use the second derivative: f″ > 0 gives a minimum, f″ < 0 a maximum.",
        "Чтобы классифицировать критическую точку, проверьте смену знака f′ или вторую производную: f″ > 0 — минимум, f″ < 0 — максимум.",
      ),
    ]),
    topic("lhopital", "L'Hôpital's Rule", "Правило Лопиталя", [
      p(
        "For 0/0 or ∞/∞ indeterminate forms, the limit of f/g equals the limit of f′/g′ when the latter exists. Other forms (0·∞, ∞−∞, 1^∞, 0⁰, ∞⁰) are first rewritten as quotients.",
        "Для неопределённостей 0/0 или ∞/∞ предел f/g равен пределу f′/g′, если последний существует. Остальные формы (0·∞, ∞−∞, 1^∞, 0⁰, ∞⁰) сначала переписывают как частные.",
      ),
      formula(
        "\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}",
        "lim f(x)/g(x) = lim f′(x)/g′(x)",
      ),
    ]),
    topic("mvt", "Mean Value Theorems", "Теоремы о среднем", [
      p(
        "Rolle: a smooth function equal at the endpoints has a horizontal tangent inside. The Mean Value Theorem generalizes: some tangent is parallel to the secant. Consequences: f′ = 0 ⇒ constant; f′ > 0 ⇒ increasing.",
        "Ролль: у гладкой функции, равной на концах, внутри есть горизонтальная касательная. Теорема Лагранжа обобщает: какая-то касательная параллельна секущей. Следствия: f′ = 0 ⇒ константа; f′ > 0 ⇒ возрастание.",
      ),
      formula(
        "f'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for some } c \\in (a,b)",
        "f′(c) = (f(b) − f(a))/(b − a) для некоторого c ∈ (a, b)",
      ),
    ]),
    topic("implicit-rates", "Implicit Differentiation and Related Rates", "Неявное дифференцирование и связанные скорости", [
      p(
        "When y is defined implicitly by an equation, differentiate both sides with respect to x and solve for dy/dx. Related-rate problems differentiate a relation with respect to time to link changing quantities.",
        "Когда y задана неявно уравнением, дифференцируем обе части по x и решаем относительно dy/dx. Задачи о связанных скоростях дифференцируют соотношение по времени, связывая изменяющиеся величины.",
      ),
      formula(
        "x^2 + y^2 = r^2 \\;\\Rightarrow\\; 2x + 2y\\,y' = 0",
        "x² + y² = r²  ⇒  2x + 2y·y′ = 0",
      ),
    ]),
    topic("integration-techniques", "Integration Techniques", "Техники интегрирования", [
      p(
        "Substitution reverses the chain rule; integration by parts reverses the product rule; partial fractions split rational functions; trigonometric substitution handles √(a² − x²) and relatives.",
        "Подстановка обращает правило цепочки; интегрирование по частям — правило произведения; простейшие дроби расщепляют рациональные функции; тригонометрическая подстановка разбирает √(a² − x²) и родственников.",
      ),
      formula(
        "\\int u\\,dv = uv - \\int v\\,du",
        "∫ u dv = uv − ∫ v du",
        "Integration by parts",
        "Интегрирование по частям",
      ),
      list(
        ["√(a² − x²): substitute x = a sin θ", "√(a² − x²): подстановка x = a sin θ"],
        ["√(a² + x²): x = a tan θ; √(x² − a²): x = a sec θ", "√(a² + x²): x = a tg θ; √(x² − a²): x = a sec θ"],
      ),
    ]),
    topic("improper-integrals", "Improper Integrals", "Несобственные интегралы", [
      p(
        "Integrals over infinite intervals or with unbounded integrands are defined as limits. The p-integral ∫₁^∞ dx/xᵖ converges exactly when p > 1; comparison tests decide the rest.",
        "Интегралы по бесконечным промежуткам или с неограниченными подынтегральными функциями определяются как пределы. p-интеграл ∫₁^∞ dx/xᵖ сходится ровно при p > 1; признаки сравнения решают остальное.",
      ),
      formula(
        "\\int_1^{\\infty} \\frac{dx}{x^p} \\text{ converges} \\;\\Leftrightarrow\\; p > 1",
        "∫₁^∞ dx/xᵖ сходится  ⇔  p > 1",
      ),
    ]),
    topic("arc-length", "Arc Length and Surface Area", "Длина дуги и площадь поверхности", [
      p(
        "Arc length integrates infinitesimal hypotenuses √(1 + y′²); rotating a curve about an axis sweeps a surface whose area integrates 2π·radius·arc element.",
        "Длина дуги интегрирует бесконечно малые гипотенузы √(1 + y′²); вращение кривой вокруг оси заметает поверхность, площадь которой интегрирует 2π·радиус·элемент дуги.",
      ),
      formula(
        "L = \\int_a^b \\sqrt{1 + (y')^2}\\,dx, \\qquad S = \\int 2\\pi y\\,ds",
        "L = ∫ₐᵇ √(1 + y′²) dx;   S = ∫ 2πy ds",
      ),
    ]),
  ],
  problems: [
    prob(
      "c1", "easy",
      "Differentiate: f(x) = x³ − 4x.",
      "Найдите производную: f(x) = x³ − 4x.",
      "f′(x) = 3x² − 4",
      "f′(x) = 3x² − 4",
      "Apply the power rule term by term: (x³)′ = 3x², (−4x)′ = −4.",
      "Применим правило степени почленно: (x³)′ = 3x², (−4x)′ = −4.",
    ),
    prob(
      "c2", "easy",
      "Find the indefinite integral: ∫ 2x dx.",
      "Найдите неопределённый интеграл: ∫ 2x dx.",
      "x² + C",
      "x² + C",
      "∫ 2x dx = 2·x²/2 + C = x² + C. Check: (x² + C)′ = 2x.",
      "∫ 2x dx = 2·x²/2 + C = x² + C. Проверка: (x² + C)′ = 2x.",
    ),
    prob(
      "c3", "medium",
      "Evaluate the limit: lim (x→2) (x² − 4)/(x − 2).",
      "Вычислите предел: lim (x→2) (x² − 4)/(x − 2).",
      "4",
      "4",
      "Factor the numerator: (x − 2)(x + 2)/(x − 2) = x + 2 for x ≠ 2. As x → 2 this tends to 4.",
      "Разложим числитель: (x − 2)(x + 2)/(x − 2) = x + 2 при x ≠ 2. При x → 2 выражение стремится к 4.",
    ),
    prob(
      "c4", "medium",
      "Differentiate: y = sin(x²).",
      "Найдите производную: y = sin(x²).",
      "y′ = 2x·cos(x²)",
      "y′ = 2x·cos(x²)",
      "Chain rule: outer derivative cos(x²) times inner derivative (x²)′ = 2x.",
      "Производная сложной функции: внешняя cos(x²) умножается на внутреннюю (x²)′ = 2x.",
    ),
    prob(
      "c5", "hard",
      "Find the area enclosed between y = x and y = x².",
      "Найдите площадь фигуры между графиками y = x и y = x².",
      "S = 1/6",
      "S = 1/6",
      "Curves intersect at x = 0 and x = 1, with x ≥ x² there. S = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6.",
      "Кривые пересекаются при x = 0 и x = 1, причём там x ≥ x². S = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6.",
    ),
  ],
};
