import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const differentialEquations: Section = {
  slug: "differential-equations",
  title: { en: "Differential Equations", ru: "Дифференциальные уравнения" },
  tagline: {
    en: "Equations that describe how things evolve",
    ru: "Уравнения, описывающие эволюцию процессов",
  },
  description: {
    en: "A differential equation relates a function to its derivatives. Such equations model population growth, cooling, oscillations, circuits, and virtually every law of physics.",
    ru: "Дифференциальное уравнение связывает функцию с её производными. Такие уравнения моделируют рост популяций, остывание, колебания, электрические цепи и практически все законы физики.",
  },
  topics: [
    topic("basics", "Basic Concepts", "Основные понятия", [
      p(
        "The order of an equation is the highest derivative present. A general solution contains arbitrary constants; an initial condition picks out a particular solution.",
        "Порядок уравнения — наивысшая присутствующая производная. Общее решение содержит произвольные постоянные; начальное условие выделяет частное решение.",
      ),
      formula(
        "y' = f(x, y), \\qquad y(x_0) = y_0",
        "y′ = f(x, y);   y(x₀) = y₀",
        "First-order equation with an initial condition",
        "Уравнение первого порядка с начальным условием",
      ),
    ]),
    topic("separable", "Separable Equations", "Уравнения с разделяющимися переменными", [
      p(
        "If dy/dx = g(x)·h(y), separate the variables and integrate both sides. The exponential growth/decay equation y′ = ky is the most important example.",
        "Если dy/dx = g(x)·h(y), разделим переменные и проинтегрируем обе части. Уравнение экспоненциального роста/убывания y′ = ky — важнейший пример.",
      ),
      formula(
        "\\frac{dy}{h(y)} = g(x)\\,dx \\;\\Rightarrow\\; \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx",
        "dy/h(y) = g(x) dx  ⇒  ∫ dy/h(y) = ∫ g(x) dx",
      ),
      formula(
        "y' = ky \\;\\Rightarrow\\; y = Ce^{kx}",
        "y′ = ky  ⇒  y = C·e^(kx)",
        "Growth (k > 0) and decay (k < 0)",
        "Рост (k > 0) и убывание (k < 0)",
      ),
    ]),
    topic("first-order-linear", "First-Order Linear Equations", "Линейные уравнения первого порядка", [
      p(
        "For y′ + p(x)y = q(x), multiply by the integrating factor μ(x) = e^{∫p dx}. The left side becomes the derivative of μy, and one integration finishes the job.",
        "Для y′ + p(x)y = q(x) умножим уравнение на интегрирующий множитель μ(x) = e^{∫p dx}. Левая часть становится производной μy, и одно интегрирование завершает решение.",
      ),
      formula(
        "\\mu(x) = e^{\\int p(x)\\,dx}, \\qquad (\\mu y)' = \\mu q",
        "μ(x) = e^(∫p(x) dx);   (μy)′ = μq",
      ),
      note(
        "Do not forget the constant of integration — it produces the whole family of solutions.",
        "Не забывайте постоянную интегрирования — она даёт всё семейство решений.",
      ),
    ]),
    topic("second-order", "Second-Order Constant-Coefficient Equations", "Уравнения второго порядка с постоянными коэффициентами", [
      p(
        "For ay″ + by′ + cy = 0, substitute y = e^{rx} to get the characteristic equation ar² + br + c = 0. Its roots determine the shape of the solution.",
        "Для ay″ + by′ + cy = 0 подстановка y = e^{rx} даёт характеристическое уравнение ar² + br + c = 0. Его корни определяют вид решения.",
      ),
      formula(
        "ar^2 + br + c = 0",
        "ar² + br + c = 0",
        "Characteristic equation",
        "Характеристическое уравнение",
      ),
      list(
        ["Two real roots r₁ ≠ r₂: y = C₁e^{r₁x} + C₂e^{r₂x}", "Два действительных корня r₁ ≠ r₂: y = C₁e^(r₁x) + C₂e^(r₂x)"],
        ["Repeated root r: y = (C₁ + C₂x)e^{rx}", "Кратный корень r: y = (C₁ + C₂x)e^(rx)"],
        ["Complex roots α ± βi: y = e^{αx}(C₁cos βx + C₂sin βx)", "Комплексные корни α ± βi: y = e^(αx)(C₁cos βx + C₂sin βx)"],
      ),
      formula(
        "y'' + \\omega^2 y = 0 \\;\\Rightarrow\\; y = C_1\\cos\\omega x + C_2\\sin\\omega x",
        "y″ + ω²y = 0  ⇒  y = C₁cos ωx + C₂sin ωx",
        "Harmonic oscillator",
        "Гармонический осциллятор",
      ),
    ]),
    topic("laplace", "The Laplace Transform", "Преобразование Лапласа", [
      p(
        "The Laplace transform converts a function of time into a function of s, turning differentiation into algebra. It solves linear ODEs with initial conditions — especially with jumps and impulses — in three steps: transform, solve algebraically, invert.",
        "Преобразование Лапласа превращает функцию времени в функцию s, заменяя дифференцирование алгеброй. Оно решает линейные ОДУ с начальными условиями — особенно со скачками и импульсами — в три шага: преобразовать, решить алгебраически, обратить.",
      ),
      formula(
        "\\mathcal{L}\\{f\\}(s) = \\int_0^{\\infty} e^{-st} f(t)\\,dt",
        "L{f}(s) = ∫₀^∞ e^(−st)·f(t) dt",
      ),
      formula(
        "\\mathcal{L}\\{f'\\} = sF(s) - f(0), \\qquad \\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}",
        "L{f′} = sF(s) − f(0);   L{e^(at)} = 1/(s − a)",
      ),
      note(
        "Partial fractions decompose F(s) into table entries; the inverse transform reads the solution back.",
        "Разложение на простейшие дроби превращает F(s) в табличные слагаемые; обратное преобразование считывает решение.",
      ),
    ]),
  ],
  problems: [
    prob(
      "e1", "easy",
      "Solve: y′ = 2x.",
      "Решите уравнение: y′ = 2x.",
      "y = x² + C",
      "y = x² + C",
      "Integrate both sides: y = ∫2x dx = x² + C.",
      "Интегрируем обе части: y = ∫2x dx = x² + C.",
    ),
    prob(
      "e2", "easy",
      "Solve the initial value problem: y′ = y, y(0) = 3.",
      "Решите задачу Коши: y′ = y, y(0) = 3.",
      "y = 3e^x",
      "y = 3e^x",
      "General solution y = Ce^x. The condition y(0) = C = 3 gives y = 3e^x.",
      "Общее решение y = Ce^x. Условие y(0) = C = 3 даёт y = 3e^x.",
    ),
    prob(
      "e3", "medium",
      "Solve by separation of variables: y′ = xy.",
      "Решите методом разделения переменных: y′ = xy.",
      "y = C·e^(x²/2)",
      "y = C·e^(x²/2)",
      "dy/y = x dx ⇒ ln|y| = x²/2 + C₁ ⇒ y = C·e^(x²/2). The zero solution is included with C = 0.",
      "dy/y = x dx ⇒ ln|y| = x²/2 + C₁ ⇒ y = C·e^(x²/2). Нулевое решение включается при C = 0.",
    ),
    prob(
      "e4", "medium",
      "Solve: y″ − 5y′ + 6y = 0.",
      "Решите уравнение: y″ − 5y′ + 6y = 0.",
      "y = C₁e^(2x) + C₂e^(3x)",
      "y = C₁e^(2x) + C₂e^(3x)",
      "Characteristic equation r² − 5r + 6 = 0 factors as (r − 2)(r − 3) = 0, roots 2 and 3.",
      "Характеристическое уравнение r² − 5r + 6 = 0 раскладывается как (r − 2)(r − 3) = 0, корни 2 и 3.",
    ),
    prob(
      "e5", "hard",
      "Solve: y′ + y = e^x.",
      "Решите уравнение: y′ + y = e^x.",
      "y = e^x/2 + C·e^(−x)",
      "y = e^x/2 + C·e^(−x)",
      "Integrating factor μ = e^x. Then (y·e^x)′ = e^(2x), so y·e^x = e^(2x)/2 + C, giving y = e^x/2 + C·e^(−x).",
      "Интегрирующий множитель μ = e^x. Тогда (y·e^x)′ = e^(2x), значит y·e^x = e^(2x)/2 + C, откуда y = e^x/2 + C·e^(−x).",
    ),
    prob(
      "e6", "medium",
      "Find the Laplace transform of f(t) = 1.",
      "Найдите преобразование Лапласа функции f(t) = 1.",
      "1/s (s > 0)",
      "1/s (s > 0)",
      "∫₀^∞ e^(−st)dt = [−e^(−st)/s]₀^∞ = 1/s for s > 0.",
      "∫₀^∞ e^(−st)dt = [−e^(−st)/s]₀^∞ = 1/s при s > 0.",
    ),
  ],
};
