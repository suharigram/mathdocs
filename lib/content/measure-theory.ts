import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const measureTheory: Section = {
  slug: "measure-theory",
  title: { en: "Measure Theory", ru: "Теория меры" },
  tagline: {
    en: "Lebesgue integration and modern analysis",
    ru: "Интеграл Лебега и современный анализ",
  },
  description: {
    en: "Measure theory generalizes length, area, and volume, and builds the Lebesgue integral — robust under limits where the Riemann integral fails. It is the language of modern probability and analysis.",
    ru: "Теория меры обобщает длину, площадь и объём и строит интеграл Лебега — устойчивый к предельным переходам там, где интеграл Римана ломается. Это язык современной теории вероятностей и анализа.",
  },
  topics: [
    topic("sigma-algebras", "Sigma-Algebras and Measures", "Сигма-алгебры и меры", [
      p(
        "A σ-algebra is a family of sets closed under complements and countable unions — the “measurable” sets. A measure assigns sizes to them, countably additively. Lebesgue measure extends ordinary length.",
        "σ-алгебра — семейство множеств, замкнутое относительно дополнений и счётных объединений, — «измеримые» множества. Мера приписывает им размеры счётно-аддитивно. Мера Лебега продолжает обычную длину.",
      ),
      formula(
        "\\mu\\Big(\\bigcup_{n} A_n\\Big) = \\sum_n \\mu(A_n) \\quad \\text{(disjoint } A_n\\text{)}",
        "μ(∪ Aₙ) = Σ μ(Aₙ)   (для непересекающихся Aₙ)",
      ),
      note(
        "Countable sets have Lebesgue measure zero — even dense ones like Q.",
        "Счётные множества имеют меру Лебега ноль — даже плотные, как Q.",
      ),
    ]),
    topic("lebesgue-integral", "The Lebesgue Integral", "Интеграл Лебега", [
      p(
        "Instead of slicing the domain (Riemann), Lebesgue slices the range: integrate simple functions and pass to limits. Every Riemann-integrable function is Lebesgue integrable with the same value, but not conversely.",
        "Вместо нарезки области (Риман) Лебег нарезает область значений: интегрируем простые функции и переходим к пределу. Всякая интегрируемая по Риману функция интегрируема по Лебегу с тем же значением, но не наоборот.",
      ),
      formula(
        "\\int f\\,d\\mu = \\sup\\Big\\{\\int s\\,d\\mu : 0 \\le s \\le f,\\ s \\text{ simple}\\Big\\}",
        "∫ f dμ = sup {∫ s dμ : 0 ≤ s ≤ f, s — простая}",
      ),
    ]),
    topic("convergence-theorems", "Convergence Theorems", "Теоремы о предельном переходе", [
      p(
        "Three theorems govern swapping limits and integrals: monotone convergence, Fatou's lemma, and dominated convergence — the workhorses of analysis and probability.",
        "Три теоремы управляют перестановкой предела и интеграла: монотонная сходимость, лемма Фату и мажорируемая сходимость — рабочие лошадки анализа и вероятности.",
      ),
      list(
        ["MCT: 0 ≤ fₙ ↑ f ⇒ ∫fₙ ↑ ∫f", "МСТ: 0 ≤ fₙ ↑ f ⇒ ∫fₙ ↑ ∫f"],
        ["Fatou: ∫ lim inf fₙ ≤ lim inf ∫fₙ", "Фату: ∫ lim inf fₙ ≤ lim inf ∫fₙ"],
        ["DCT: fₙ → f and |fₙ| ≤ g integrable ⇒ ∫fₙ → ∫f", "Мажорируемая: fₙ → f и |fₙ| ≤ g интегрируема ⇒ ∫fₙ → ∫f"],
      ),
    ]),
    topic("lp-spaces", "Lp Spaces", "Пространства Lp", [
      p(
        "Lᵖ collects functions whose p-th power is integrable, with norm ‖f‖ₚ. Hölder's and Minkowski's inequalities give the geometry; Riesz–Fischer says these spaces are complete.",
        "Lᵖ собирает функции с интегрируемой p-й степенью, с нормой ‖f‖ₚ. Неравенства Гёльдера и Минковского задают геометрию; теорема Рисса–Фишера утверждает полноту этих пространств.",
      ),
      formula(
        "\\|f\\|_p = \\Big(\\int |f|^p\\,d\\mu\\Big)^{1/p}, \\qquad \\|fg\\|_1 \\le \\|f\\|_p\\,\\|g\\|_q",
        "‖f‖ₚ = (∫ |f|ᵖ dμ)^(1/p);   ‖fg‖₁ ≤ ‖f‖ₚ·‖g‖_q   (1/p + 1/q = 1)",
      ),
    ]),
    topic("construction", "Constructing Lebesgue Measure", "Построение меры Лебега", [
      p(
        "Outer measure covers sets by intervals; Carathéodory's criterion selects the measurable ones. The result extends length uniquely and is translation-invariant — but non-measurable sets exist under AC (Vitali).",
        "Внешняя мера покрывает множества отрезками; критерий Каратеодори отбирает измеримые. Результат единственно продолжает длину и инвариантен к сдвигам — но при AC существуют неизмеримые множества (Витали).",
      ),
      formula(
        "E \\text{ measurable} \\;\\Leftrightarrow\\; m^*(A) = m^*(A \\cap E) + m^*(A \\setminus E)\\ \\forall A",
        "E измеримо  ⇔  m*(A) = m*(A ∩ E) + m*(A \\ E) для всех A",
        "Carathéodory criterion",
        "Критерий Каратеодори",
      ),
    ]),
    topic("product-fubini", "Product Measures and Fubini", "Произведения мер и теорема Фубини", [
      p(
        "Product measure integrates over rectangles; Fubini–Tonelli swaps the order of integration for integrable (or nonnegative) functions — the rigorous license behind iterated integrals.",
        "Произведение мер интегрирует по прямоугольникам; Фубини–Тонелли меняет порядок интегрирования для интегрируемых (или неотрицательных) функций — строгое разрешение, стоящее за повторными интегралами.",
      ),
      formula(
        "\\int_{X \\times Y} f\\,d(\\mu \\times \\nu) = \\int_X\\!\\int_Y f\\,d\\nu\\,d\\mu",
        "∫ f d(μ × ν) = ∫∫ f dν dμ",
      ),
    ]),
    topic("radon-nikodym", "Signed Measures and Radon–Nikodym", "Знакопеременные меры и Радон–Никодим", [
      p(
        "Signed measures split into positive and negative parts (Hahn–Jordan). When ν ≪ μ, Radon–Nikodym provides a density dν/dμ — the abstract origin of probability densities and conditional expectation.",
        "Знакопеременные меры распадаются на положительную и отрицательную части (Хан–Жордан). Когда ν ≪ μ, Радон–Никодим даёт плотность dν/dμ — абстрактный исток плотностей вероятности и условного ожидания.",
      ),
      formula(
        "\\nu(A) = \\int_A \\frac{d\\nu}{d\\mu}\\,d\\mu",
        "ν(A) = ∫ (dν/dμ) dμ",
      ),
    ]),
  ],
  problems: [
    prob(
      "mt1", "easy",
      "Find the Lebesgue measure of [0,1] ∪ [2,3].",
      "Найдите меру Лебега множества [0,1] ∪ [2,3].",
      "2",
      "2",
      "Disjoint intervals of length 1 each: 1 + 1 = 2.",
      "Непересекающиеся отрезки длины 1 каждый: 1 + 1 = 2.",
    ),
    prob(
      "mt2", "easy",
      "What is the Lebesgue measure of Q ∩ [0,1]?",
      "Чему равна мера Лебега множества Q ∩ [0,1]?",
      "0",
      "0",
      "Q is countable, and every countable set has measure zero.",
      "Q счётно, а всякое счётное множество имеет меру ноль.",
    ),
    prob(
      "mt3", "medium",
      "The Dirichlet function equals 1 on rationals and 0 on irrationals in [0,1]. Is it Riemann integrable? What is its Lebesgue integral?",
      "Функция Дирихле равна 1 на рациональных и 0 на иррациональных точках [0,1]. Интегрируема ли она по Риману? Каков её интеграл Лебега?",
      "Not Riemann integrable; Lebesgue integral = 0",
      "Не интегрируема по Риману; интеграл Лебега = 0",
      "Every subinterval contains both types, so upper sums are 1 and lower sums 0. Lebesgue: the function is 0 almost everywhere, so the integral is 0.",
      "Каждый подотрезок содержит оба типа точек, поэтому верхние суммы равны 1, нижние — 0. По Лебегу: функция равна 0 почти всюду, интеграл равен 0.",
    ),
    prob(
      "mt4", "medium",
      "For fₙ(x) = 1 − xⁿ on [0,1], use monotone convergence to find lim ∫fₙ.",
      "Для fₙ(x) = 1 − xⁿ на [0,1] найдите lim ∫fₙ по теореме о монотонной сходимости.",
      "1",
      "1",
      "fₙ increases to 1 almost everywhere. ∫fₙ = 1 − 1/(n+1) → 1 = ∫1, as MCT guarantees.",
      "fₙ возрастает к 1 почти всюду. ∫fₙ = 1 − 1/(n+1) → 1 = ∫1, как и гарантирует МСТ.",
    ),
    prob(
      "mt5", "hard",
      "Let fₙ = n·1 on (0, 1/n) and 0 elsewhere. Compare lim ∫fₙ with ∫ lim fₙ. Why doesn't DCT apply?",
      "Пусть fₙ = n на (0, 1/n) и 0 иначе. Сравните lim ∫fₙ и ∫ lim fₙ. Почему неприменима мажорируемая сходимость?",
      "lim ∫fₙ = 1 but ∫ lim fₙ = 0; no integrable dominating function",
      "lim ∫fₙ = 1, но ∫ lim fₙ = 0; нет интегрируемой мажоранты",
      "Each ∫fₙ = n·(1/n) = 1, while fₙ → 0 pointwise. Any dominator g would need g(x) ≥ 1/x near 0, which is not integrable.",
      "Каждый ∫fₙ = n·(1/n) = 1, при этом fₙ → 0 поточечно. Любая мажоранта g должна была бы удовлетворять g(x) ≥ 1/x вблизи 0, а это неинтегрируемо.",
    ),
  ],
};
