import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const probabilityStatistics: Section = {
  slug: "probability-statistics",
  title: { en: "Probability & Statistics", ru: "Теория вероятностей и статистика" },
  tagline: {
    en: "Uncertainty, data, and informed decisions",
    ru: "Неопределённость, данные и обоснованные решения",
  },
  description: {
    en: "Probability quantifies uncertainty; statistics draws conclusions from data. Together they underpin science, finance, machine learning, and everyday risk assessment.",
    ru: "Теория вероятностей количественно описывает неопределённость; статистика делает выводы из данных. Вместе они лежат в основе науки, финансов, машинного обучения и повседневной оценки рисков.",
  },
  topics: [
    topic("basic-probability", "Counting and Basic Probability", "Комбинаторика и основы вероятности", [
      p(
        "For equally likely outcomes, probability is the ratio of favorable outcomes to all outcomes. Counting techniques — permutations and combinations — supply the totals.",
        "Для равновозможных исходов вероятность — отношение числа благоприятных исходов к общему числу исходов. Комбинаторные методы (перестановки и сочетания) дают эти числа.",
      ),
      formula(
        "P(A) = \\frac{|A|}{|\\Omega|}, \\qquad 0 \\le P(A) \\le 1",
        "P(A) = |A| / |Ω|,   0 ≤ P(A) ≤ 1",
      ),
      formula(
        "P(n, k) = \\frac{n!}{(n-k)!}, \\qquad C(n, k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
        "P(n, k) = n!/(n − k)!;   C(n, k) = n!/(k!(n − k)!)",
        "Permutations (order matters) and combinations (order ignored)",
        "Размещения (порядок важен) и сочетания (порядок не важен)",
      ),
      note(
        "P(not A) = 1 − P(A). For “at least one” problems, the complement is often much easier to count.",
        "P(не A) = 1 − P(A). В задачах «хотя бы один» часто проще считать дополнение.",
      ),
    ]),
    topic("conditional", "Conditional Probability and Bayes", "Условная вероятность и формула Байеса", [
      p(
        "Conditional probability updates the sample space to the given information. Events are independent when knowing one does not change the probability of the other. Bayes' theorem reverses the conditioning.",
        "Условная вероятность сужает пространство исходов до известной информации. События независимы, если знание одного не меняет вероятность другого. Формула Байеса «переворачивает» условие.",
      ),
      formula(
        "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}",
        "P(A|B) = P(A ∩ B) / P(B)",
      ),
      formula(
        "P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)}",
        "P(A|B) = P(B|A)·P(A) / P(B)",
        "Bayes' theorem",
        "Формула Байеса",
      ),
      list(
        ["Independent events: P(A ∩ B) = P(A)·P(B)", "Независимые события: P(A ∩ B) = P(A)·P(B)"],
        ["General addition: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "Общее сложение: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"],
      ),
    ]),
    topic("random-variables", "Random Variables and Distributions", "Случайные величины и распределения", [
      p(
        "A random variable assigns a number to each outcome. Its expectation is the probability-weighted average; variance measures spread. The binomial distribution counts successes in n independent trials; the normal distribution describes many natural measurements.",
        "Случайная величина сопоставляет каждому исходу число. Математическое ожидание — взвешенное по вероятностям среднее; дисперсия измеряет разброс. Биномиальное распределение считает число успехов в n независимых испытаниях; нормальное описывает многие природные измерения.",
      ),
      formula(
        "E[X] = \\sum_i x_i p_i, \\qquad \\mathrm{Var}(X) = E[X^2] - (E[X])^2",
        "E[X] = Σ xᵢpᵢ;   Var(X) = E[X²] − (E[X])²",
      ),
      formula(
        "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
        "P(X = k) = C(n, k)·p^k·(1 − p)^(n − k)",
        "Binomial distribution",
        "Биномиальное распределение",
      ),
    ]),
    topic("descriptive", "Descriptive Statistics", "Описательная статистика", [
      p(
        "The mean averages the data, the median is the middle value, and the mode is the most frequent one. Standard deviation is the square root of variance and is expressed in the same units as the data.",
        "Среднее арифметическое усредняет данные, медиана — серединное значение, мода — самое частое. Стандартное отклонение — корень из дисперсии; оно выражается в тех же единицах, что и данные.",
      ),
      formula(
        "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i, \\qquad s = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2}",
        "x̄ = (1/n)·Σ xᵢ;   s = √((1/n)·Σ (xᵢ − x̄)²)",
      ),
      note(
        "The median resists outliers better than the mean — that is why income is usually reported as a median.",
        "Медиана устойчивее к выбросам, чем среднее, — поэтому доходы обычно приводят как медиану.",
      ),
    ]),
  ],
  problems: [
    prob(
      "p1", "easy",
      "A fair die is rolled. What is the probability of an even number?",
      "Бросают честную игральную кость. Какова вероятность чётного числа?",
      "1/2",
      "1/2",
      "Even outcomes are 2, 4, 6 — three out of six equally likely outcomes: 3/6 = 1/2.",
      "Чётные исходы: 2, 4, 6 — три из шести равновозможных: 3/6 = 1/2.",
    ),
    prob(
      "p2", "easy",
      "Find the mean of 2, 4, 6, 8, 10.",
      "Найдите среднее арифметическое чисел 2, 4, 6, 8, 10.",
      "6",
      "6",
      "Sum = 30; mean = 30/5 = 6.",
      "Сумма = 30; среднее = 30/5 = 6.",
    ),
    prob(
      "p3", "medium",
      "In how many ways can 2 people be chosen from a group of 5?",
      "Сколькими способами можно выбрать 2 человек из группы из 5?",
      "10",
      "10",
      "Order does not matter: C(5, 2) = 5!/(2!·3!) = 10.",
      "Порядок не важен: C(5, 2) = 5!/(2!·3!) = 10.",
    ),
    prob(
      "p4", "medium",
      "Two fair coins are tossed. Find the probability of at least one head.",
      "Бросают две честные монеты. Найдите вероятность хотя бы одного орла.",
      "3/4",
      "3/4",
      "Complement: P(no heads) = P(TT) = 1/4. So P(at least one head) = 1 − 1/4 = 3/4.",
      "Через дополнение: P(ни одного орла) = P(РР) = 1/4. Тогда P(хотя бы один орёл) = 1 − 1/4 = 3/4.",
    ),
    prob(
      "p5", "hard",
      "A bag has 3 red and 2 blue balls. Two balls are drawn without replacement. Find the probability that both are red.",
      "В мешке 3 красных и 2 синих шара. Без возвращения вынимают два шара. Найдите вероятность того, что оба красные.",
      "3/10",
      "3/10",
      "P(first red) = 3/5; then 2 red remain out of 4: P(second red | first red) = 2/4. Multiply: (3/5)·(2/4) = 3/10.",
      "P(первый красный) = 3/5; затем осталось 2 красных из 4: P(второй красный | первый красный) = 2/4. Перемножаем: (3/5)·(2/4) = 3/10.",
    ),
  ],
};
