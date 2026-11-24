import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const discreteMathematics: Section = {
  slug: "discrete-mathematics",
  title: { en: "Discrete Mathematics", ru: "Дискретная математика" },
  tagline: {
    en: "Logic, sets, combinatorics, and graphs",
    ru: "Логика, множества, комбинаторика и графы",
  },
  description: {
    en: "Discrete mathematics studies countable, separated structures rather than continuous ones. It is the mathematical backbone of computer science: logic, algorithms, graphs, and proof techniques.",
    ru: "Дискретная математика изучает счётные, раздельные структуры, а не непрерывные. Это математический фундамент информатики: логика, алгоритмы, графы и методы доказательств.",
  },
  topics: [
    topic("logic-sets", "Logic and Sets", "Логика и множества", [
      p(
        "A proposition is a statement that is true or false. Connectives AND (∧), OR (∨), NOT (¬) build compound statements. Sets collect objects; union, intersection, and complement combine them.",
        "Высказывание — утверждение, которое истинно или ложно. Связки И (∧), ИЛИ (∨), НЕ (¬) строят составные утверждения. Множества собирают объекты; объединение, пересечение и дополнение комбинируют их.",
      ),
      formula(
        "\\neg(A \\land B) = \\neg A \\lor \\neg B, \\qquad \\neg(A \\lor B) = \\neg A \\land \\neg B",
        "¬(A ∧ B) = ¬A ∨ ¬B;   ¬(A ∨ B) = ¬A ∧ ¬B",
        "De Morgan's laws",
        "Законы де Моргана",
      ),
      formula(
        "|A \\cup B| = |A| + |B| - |A \\cap B|",
        "|A ∪ B| = |A| + |B| − |A ∩ B|",
        "Inclusion–exclusion for two sets",
        "Формула включений–исключений для двух множеств",
      ),
      note(
        "A set with n elements has exactly 2ⁿ subsets, including the empty set and itself.",
        "Множество из n элементов имеет ровно 2ⁿ подмножеств, включая пустое и само себя.",
      ),
    ]),
    topic("combinatorics", "Combinatorics", "Комбинаторика", [
      p(
        "The rule of product multiplies the numbers of independent choices; the rule of sum adds the numbers of disjoint cases. The binomial theorem expands powers of a sum using combinations.",
        "Правило произведения перемножает числа независимых выборов; правило суммы складывает числа непересекающихся случаев. Бином Ньютона раскрывает степени суммы через сочетания.",
      ),
      formula(
        "(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k",
        "(a + b)^n = Σ C(n, k)·a^(n−k)·b^k,  k = 0…n",
        "Binomial theorem",
        "Бином Ньютона",
      ),
      list(
        ["Permutations of n distinct objects: n!", "Перестановки n различных объектов: n!"],
        ["With repeated objects (n₁ of one kind, n₂ of another…): n!/(n₁!·n₂!·…)", "С повторами (n₁ одного вида, n₂ другого…): n!/(n₁!·n₂!·…)"],
      ),
    ]),
    topic("graphs", "Graph Theory", "Теория графов", [
      p(
        "A graph is a set of vertices joined by edges. The degree of a vertex counts its incident edges. A tree is a connected graph without cycles; a graph with n vertices is a tree exactly when it has n − 1 edges and is connected.",
        "Граф — множество вершин, соединённых рёбрами. Степень вершины — число инцидентных ей рёбер. Дерево — связный граф без циклов; связный граф с n вершинами является деревом тогда и только тогда, когда у него n − 1 ребро.",
      ),
      formula(
        "\\sum_{v} \\deg(v) = 2|E|",
        "Σ deg(v) = 2|E|",
        "Handshaking lemma",
        "Лемма о рукопожатиях",
      ),
      note(
        "An Eulerian circuit (traversing every edge once) exists exactly when the graph is connected and every vertex has even degree.",
        "Эйлеров цикл (обход каждого ребра ровно раз) существует тогда и только тогда, когда граф связен и степени всех вершин чётны.",
      ),
    ]),
    topic("induction", "Mathematical Induction", "Математическая индукция", [
      p(
        "To prove a statement for all natural numbers: verify the base case, then prove that truth at n implies truth at n + 1. The domino effect carries the proof to infinity.",
        "Чтобы доказать утверждение для всех натуральных чисел: проверьте базу, затем докажите, что истинность при n влечёт истинность при n + 1. «Эффект домино» переносит доказательство в бесконечность.",
      ),
      formula(
        "1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}",
        "1 + 2 + … + n = n(n + 1)/2",
        "Classic induction example",
        "Классический пример индукции",
      ),
      list(
        ["Base: n = 1 gives 1 = 1·2/2 ✓", "База: n = 1 даёт 1 = 1·2/2 ✓"],
        ["Step: add (n + 1) to n(n+1)/2 to get (n+1)(n+2)/2", "Шаг: прибавив (n + 1) к n(n+1)/2, получаем (n+1)(n+2)/2"],
      ),
    ]),
    topic("recurrences", "Recurrences and Generating Functions", "Рекуррентности и производящие функции", [
      p(
        "Recurrences define sequences from previous terms. Linear recurrences with constant coefficients are solved via characteristic roots — the Fibonacci sequence grows like φⁿ. Generating functions encode sequences as power series, turning recurrences into algebra.",
        "Рекуррентности задают последовательности через предыдущие члены. Линейные рекуррентности с постоянными коэффициентами решаются через характеристические корни — последовательность Фибоначчи растёт как φⁿ. Производящие функции кодируют последовательности степенными рядами, превращая рекуррентности в алгебру.",
      ),
      formula(
        "F_n = F_{n-1} + F_{n-2}, \\qquad F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}",
        "Fₙ = Fₙ₋₁ + Fₙ₋₂;   Fₙ = (φⁿ − ψⁿ)/√5",
        "Fibonacci recurrence and Binet's formula (φ = (1+√5)/2)",
        "Рекуррентность Фибоначчи и формула Бине (φ = (1+√5)/2)",
      ),
      formula(
        "G(x) = \\sum_{n \\ge 0} a_n x^n",
        "G(x) = Σ aₙxⁿ",
        "Ordinary generating function",
        "Обычная производящая функция",
      ),
    ]),
  ],
  problems: [
    prob(
      "d1", "easy",
      "How many subsets does a set with 4 elements have?",
      "Сколько подмножеств у множества из 4 элементов?",
      "16",
      "16",
      "Each element is either in or out: 2⁴ = 16.",
      "Каждый элемент либо входит, либо нет: 2⁴ = 16.",
    ),
    prob(
      "d2", "easy",
      "A graph has vertex degrees 3, 3, 2, 2, 2. How many edges does it have?",
      "Степени вершин графа равны 3, 3, 2, 2, 2. Сколько в нём рёбер?",
      "6",
      "6",
      "Sum of degrees = 12 = 2|E|, so |E| = 6.",
      "Сумма степеней = 12 = 2|E|, значит |E| = 6.",
    ),
    prob(
      "d3", "medium",
      "How many distinct arrangements are there of the letters of the word LEVEL?",
      "Сколько различных перестановок букв слова LEVEL?",
      "30",
      "30",
      "5 letters with L twice and E twice: 5!/(2!·2!) = 120/4 = 30.",
      "5 букв, L дважды и E дважды: 5!/(2!·2!) = 120/4 = 30.",
    ),
    prob(
      "d4", "medium",
      "Compute 1 + 2 + … + 100.",
      "Вычислите 1 + 2 + … + 100.",
      "5050",
      "5050",
      "By the sum formula: 100·101/2 = 5050. (Gauss's trick: pair 1+100, 2+99, … — fifty pairs of 101.)",
      "По формуле суммы: 100·101/2 = 5050. (Приём Гаусса: пары 1+100, 2+99, … — пятьдесят пар по 101.)",
    ),
    prob(
      "d5", "hard",
      "How many three-digit numbers have all digits distinct?",
      "Сколько трёхзначных чисел имеют все различные цифры?",
      "648",
      "648",
      "First digit: 9 choices (1–9). Second: 9 (0–9 except the first). Third: 8. Total: 9·9·8 = 648.",
      "Первая цифра: 9 вариантов (1–9). Вторая: 9 (0–9 кроме первой). Третья: 8. Итого: 9·9·8 = 648.",
    ),
    prob(
      "d6", "medium",
      "With F₀ = 0, F₁ = 1 and Fₙ = Fₙ₋₁ + Fₙ₋₂, find F₇.",
      "При F₀ = 0, F₁ = 1 и Fₙ = Fₙ₋₁ + Fₙ₋₂ найдите F₇.",
      "13",
      "13",
      "Sequence: 0, 1, 1, 2, 3, 5, 8, 13 — F₇ = 13.",
      "Последовательность: 0, 1, 1, 2, 3, 5, 8, 13 — F₇ = 13.",
    ),
  ],
};
