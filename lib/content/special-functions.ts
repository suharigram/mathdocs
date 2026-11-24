import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const specialFunctions: Section = {
  slug: "special-functions",
  title: { en: "Special Functions", ru: "Специальные функции" },
  tagline: {
    en: "Gamma, zeta, Bessel, and friends",
    ru: "Гамма, дзета, Бессель и другие",
  },
  description: {
    en: "Special functions are the named workhorses beyond elementary functions: the gamma function extends factorials, zeta connects primes to analysis, Bessel functions describe cylindrical waves, and orthogonal polynomials organize approximation.",
    ru: "Специальные функции — именованные рабочие лошадки за пределами элементарных: гамма-функция продолжает факториалы, дзета связывает простые числа с анализом, функции Бесселя описывают цилиндрические волны, ортогональные многочлены организуют аппроксимацию.",
  },
  topics: [
    topic("gamma-beta", "Gamma and Beta Functions", "Гамма- и бета-функции", [
      p(
        "Γ(z) = ∫₀^∞ t^{z−1}e^{−t}dt interpolates factorials: Γ(n) = (n−1)!. The beta function B(x,y) = Γ(x)Γ(y)/Γ(x+y) evaluates many definite integrals.",
        "Γ(z) = ∫₀^∞ t^{z−1}e^{−t}dt интерполирует факториалы: Γ(n) = (n−1)!. Бета-функция B(x,y) = Γ(x)Γ(y)/Γ(x+y) вычисляет многие определённые интегралы.",
      ),
      formula(
        "\\Gamma(z+1) = z\\,\\Gamma(z), \\qquad \\Gamma(1/2) = \\sqrt{\\pi}",
        "Γ(z + 1) = z·Γ(z);   Γ(1/2) = √π",
      ),
      formula(
        "B(x,y) = \\int_0^1 t^{x-1}(1-t)^{y-1}dt = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}",
        "B(x,y) = ∫₀¹ t^(x−1)(1 − t)^(y−1) dt = Γ(x)Γ(y)/Γ(x + y)",
      ),
    ]),
    topic("zeta", "The Riemann Zeta Function", "Дзета-функция Римана", [
      p(
        "ζ(s) = Σ 1/nˢ converges for Re(s) > 1 and continues meromorphically with a pole at 1. Euler's product over primes links it to number theory; the Riemann hypothesis conjectures all nontrivial zeros lie on Re(s) = 1/2.",
        "ζ(s) = Σ 1/nˢ сходится при Re(s) > 1 и мероморфно продолжается с полюсом в 1. Эйлерово произведение по простым связывает её с теорией чисел; гипотеза Римана утверждает, что все нетривиальные нули лежат на Re(s) = 1/2.",
      ),
      formula(
        "\\zeta(s) = \\sum_{n=1}^{\\infty}\\frac{1}{n^s} = \\prod_{p}\\frac{1}{1 - p^{-s}}, \\qquad \\zeta(2) = \\frac{\\pi^2}{6}",
        "ζ(s) = Σ 1/nˢ = ∏ 1/(1 − p^(−s));   ζ(2) = π²/6",
      ),
    ]),
    topic("bessel-orthogonal", "Bessel Functions and Orthogonal Polynomials", "Функции Бесселя и ортогональные многочлены", [
      p(
        "Bessel functions solve x²y″ + xy′ + (x² − ν²)y = 0 — vibrations of drums and cylindrical waves. Legendre, Hermite, and Chebyshev polynomials are orthogonal families behind quadrature, quantum mechanics, and approximation.",
        "Функции Бесселя решают x²y″ + xy′ + (x² − ν²)y = 0 — колебания мембран и цилиндрические волны. Многочлены Лежандра, Эрмита и Чебышёва — ортогональные семейства, стоящие за квадратурами, квантовой механикой и аппроксимацией.",
      ),
      formula(
        "x^2 y'' + xy' + (x^2 - \\nu^2)y = 0",
        "x²y″ + xy′ + (x² − ν²)y = 0",
        "Bessel's equation",
        "Уравнение Бесселя",
      ),
    ]),
    topic("erf", "Error Function and Relatives", "Функция ошибок и родственники", [
      p(
        "erf(x) = (2/√π)∫₀ˣ e^{−t²}dt expresses the normal distribution's CDF. The exponential integral Ei and logarithmic integral li appear in physics and prime counting.",
        "erf(x) = (2/√π)∫₀ˣ e^{−t²}dt выражает функцию нормального распределения. Интегральная экспонента Ei и логарифмический интеграл li возникают в физике и подсчёте простых.",
      ),
      formula(
        "\\mathrm{erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_0^x e^{-t^2}dt, \\qquad \\Phi(x) = \\tfrac{1}{2}\\big[1 + \\mathrm{erf}(x/\\sqrt{2})\\big]",
        "erf(x) = (2/√π)∫₀ˣ e^(−t²) dt;   Φ(x) = ½[1 + erf(x/√2)]",
      ),
      note(
        "li(x) approximates π(x), the number of primes ≤ x — the prime number theorem in action.",
        "li(x) приближает π(x) — число простых ≤ x: теорема о распределении простых в действии.",
      ),
    ]),
  ],
  problems: [
    prob(
      "sf1", "easy",
      "Compute Γ(5).",
      "Вычислите Γ(5).",
      "24",
      "24",
      "Γ(n) = (n−1)!, so Γ(5) = 4! = 24.",
      "Γ(n) = (n−1)!, значит Γ(5) = 4! = 24.",
    ),
    prob(
      "sf2", "easy",
      "What is Γ(1/2)?",
      "Чему равно Γ(1/2)?",
      "√π",
      "√π",
      "The Gaussian integral gives Γ(1/2) = ∫₀^∞ t^(−1/2)e^(−t)dt = √π.",
      "Гауссов интеграл даёт Γ(1/2) = ∫₀^∞ t^(−1/2)e^(−t)dt = √π.",
    ),
    prob(
      "sf3", "medium",
      "State the value of ζ(2).",
      "Укажите значение ζ(2).",
      "π²/6",
      "π²/6",
      "Euler's Basel problem: Σ 1/n² = π²/6.",
      "Базельская задача Эйлера: Σ 1/n² = π²/6.",
    ),
    prob(
      "sf4", "medium",
      "Compute B(2, 3) using gamma functions.",
      "Вычислите B(2, 3) через гамма-функции.",
      "1/12",
      "1/12",
      "B(2,3) = Γ(2)Γ(3)/Γ(5) = 1·2/24 = 1/12.",
      "B(2,3) = Γ(2)Γ(3)/Γ(5) = 1·2/24 = 1/12.",
    ),
    prob(
      "sf5", "hard",
      "Find lim(x→∞) erf(x) and explain why.",
      "Найдите lim(x→∞) erf(x) и объясните почему.",
      "1",
      "1",
      "∫₀^∞ e^(−t²)dt = √π/2, so erf(∞) = (2/√π)·(√π/2) = 1 — total probability of the half-normal.",
      "∫₀^∞ e^(−t²)dt = √π/2, значит erf(∞) = (2/√π)·(√π/2) = 1 — полная вероятность полунормального распределения.",
    ),
  ],
};
