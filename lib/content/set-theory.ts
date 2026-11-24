import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const setTheory: Section = {
  slug: "set-theory",
  title: { en: "Set Theory", ru: "Теория множеств" },
  tagline: {
    en: "Infinity, cardinality, and the foundations",
    ru: "Бесконечность, мощности и основания",
  },
  description: {
    en: "Set theory is the standard foundation of mathematics. Cantor discovered that infinities have different sizes; the ZFC axioms tame the paradoxes; the continuum hypothesis turned out to be independent of them.",
    ru: "Теория множеств — стандартное основание математики. Кантор открыл, что бесконечности бывают разных размеров; аксиомы ZFC укрощают парадоксы; континуум-гипотеза оказалась независимой от них.",
  },
  topics: [
    topic("naive-paradoxes", "Naive Sets and Paradoxes", "Наивные множества и парадоксы", [
      p(
        "Unrestricted comprehension — “any property defines a set” — produces Russell's paradox: the set of all sets not containing themselves. Axiomatic set theory (ZFC) restricts set formation to avoid it.",
        "Неограниченное свёртывание — «любое свойство задаёт множество» — порождает парадокс Рассела: множество всех множеств, не содержащих себя. Аксиоматическая теория множеств (ZFC) ограничивает образование множеств, избегая его.",
      ),
      formula(
        "R = \\{x : x \\notin x\\} \\;\\Rightarrow\\; R \\in R \\leftrightarrow R \\notin R",
        "R = {x : x ∉ x}  ⇒  R ∈ R ⇔ R ∉ R",
        "Russell's paradox",
        "Парадокс Рассела",
      ),
    ]),
    topic("cardinality", "Cardinality and Cantor's Theorem", "Мощности и теорема Кантора", [
      p(
        "Sets have equal cardinality when a bijection exists. N, Z, Q are countable (ℵ₀); Cantor's diagonal argument shows R is uncountable. For every set, |P(A)| > |A| — infinities climb forever.",
        "Множества равномощны, если существует биекция. N, Z, Q счётны (ℵ₀); диагональный аргумент Кантора показывает несчётность R. Для любого множества |P(A)| > |A| — бесконечности растут бесконечно.",
      ),
      formula(
        "|\\mathbb{R}| = 2^{\\aleph_0} > \\aleph_0 = |\\mathbb{N}|",
        "|R| = 2^ℵ₀ > ℵ₀ = |N|",
      ),
    ]),
    topic("ordinals-choice", "Ordinals and the Axiom of Choice", "Ординалы и аксиома выбора", [
      p(
        "Ordinals extend counting past infinity: 0, 1, 2, …, ω, ω+1, … enabling transfinite induction. The axiom of choice, Zorn's lemma, and the well-ordering theorem are equivalent; AC underpins much of modern mathematics.",
        "Ординалы продолжают счёт за бесконечность: 0, 1, 2, …, ω, ω+1, … — позволяя трансфинитную индукцию. Аксиома выбора, лемма Цорна и теорема о вполне упорядочивании эквивалентны; AC поддерживает большую часть современной математики.",
      ),
      list(
        ["AC ⇔ Zorn's lemma ⇔ well-ordering theorem", "AC ⇔ лемма Цорна ⇔ теорема о вполне упорядочивании"],
        ["Consequences: every vector space has a basis; Tychonoff's theorem", "Следствия: у каждого векторного пространства есть базис; теорема Тихонова"],
      ),
    ]),
    topic("continuum", "The Continuum Hypothesis", "Континуум-гипотеза", [
      p(
        "CH asks whether 2^{ℵ₀} = ℵ₁ — no cardinality strictly between N and R. Gödel (1940) showed CH is consistent with ZFC; Cohen (1963) showed its negation is too: CH is independent.",
        "CH спрашивает, верно ли 2^{ℵ₀} = ℵ₁ — нет ли мощности строго между N и R. Гёдель (1940) показал совместимость CH с ZFC; Коэн (1963) — совместимость её отрицания: CH независима.",
      ),
      formula(
        "2^{\\aleph_0} = \\aleph_1 \\;?\\quad \\text{independent of ZFC}",
        "2^ℵ₀ = ℵ₁ ?   независимо от ZFC",
      ),
      note(
        "Independence means neither CH nor ¬CH can be proved from ZFC (assuming ZFC is consistent).",
        "Независимость означает, что ни CH, ни ¬CH нельзя доказать из ZFC (если ZFC непротиворечива).",
      ),
    ]),
    topic("zfc-axioms", "The ZFC Axioms", "Аксиомы ZFC", [
      p(
        "ZFC builds sets safely: extensionality, pairing, union, power set, infinity, separation, replacement, foundation, and choice. Separation replaces naive comprehension, blocking Russell's paradox.",
        "ZFC безопасно строит множества: экстенсиональность, пара, объединение, степень, бесконечность, выделение, подстановка, регулярность и выбор. Выделение заменяет наивное свёртывание, блокируя парадокс Рассела.",
      ),
      list(
        ["Extensionality: same elements ⇒ same set", "Экстенсиональность: одни элементы ⇒ одно множество"],
        ["Foundation: no set contains itself (no infinite ∈-chains)", "Регулярность: никакое множество не содержит себя (нет бесконечных ∈-цепей)"],
        ["Replacement: images of sets under definable maps are sets", "Подстановка: образы множеств при определимых отображениях — множества"],
      ),
    ]),
    topic("cardinal-arithmetic", "Cardinal Arithmetic", "Кардинальная арифметика", [
      p(
        "Infinite cardinals add and multiply by taking maxima: ℵ₀ + ℵ₀ = ℵ₀·ℵ₀ = ℵ₀. Exponentiation is wild: 2^{ℵ₀} is the continuum, and König's theorem constrains cofinalities.",
        "Бесконечные кардиналы складываются и умножаются взятием максимума: ℵ₀ + ℵ₀ = ℵ₀·ℵ₀ = ℵ₀. Возведение в степень дико: 2^{ℵ₀} — континуум, теорема Кёнига ограничивает конфинальности.",
      ),
      formula(
        "\\aleph_0 \\cdot \\aleph_0 = \\aleph_0, \\qquad 2^{\\aleph_0} = \\mathfrak{c}",
        "ℵ₀·ℵ₀ = ℵ₀;   2^ℵ₀ = c (континуум)",
      ),
    ]),
    topic("large-cardinals", "Beyond ZFC: Large Cardinals", "За пределами ZFC: большие кардиналы", [
      p(
        "Inaccessible, measurable, and supercompact cardinals are axioms of increasing strength, unprovable in ZFC. They calibrate consistency strength and organize modern set theory.",
        "Недостижимые, измеримые и суперкомпактные кардиналы — аксиомы возрастающей силы, недоказуемые в ZFC. Они калибруют силу непротиворечивости и организуют современную теорию множеств.",
      ),
      note(
        "Gödel's second theorem implies ZFC cannot prove the existence of a model of ZFC — large cardinals climb beyond.",
        "Вторая теорема Гёделя влечёт, что ZFC не может доказать существование модели ZFC — большие кардиналы поднимаются выше.",
      ),
    ]),
  ],
  problems: [
    prob(
      "se1", "easy",
      "How many elements does P({1, 2, 3}) have?",
      "Сколько элементов в P({1, 2, 3})?",
      "8",
      "8",
      "|P(A)| = 2^|A| = 2³ = 8.",
      "|P(A)| = 2^|A| = 2³ = 8.",
    ),
    prob(
      "se2", "easy",
      "Is Z countable?",
      "Счётно ли Z?",
      "Yes",
      "Да",
      "List 0, 1, −1, 2, −2, … — a bijection with N.",
      "Перечислим 0, 1, −1, 2, −2, … — биекция с N.",
    ),
    prob(
      "se3", "medium",
      "Is the interval (0, 1) countable?",
      "Счётен ли интервал (0, 1)?",
      "No — Cantor's diagonal argument",
      "Нет — диагональный аргумент Кантора",
      "Given any list of reals in (0,1), change the n-th digit of the n-th number to build a missing real — no list is complete.",
      "По любому списку чисел из (0,1) изменим n-ю цифру n-го числа и получим пропущенное число — ни один список не полон.",
    ),
    prob(
      "se4", "medium",
      "What is the cardinality of N × N?",
      "Какова мощность N × N?",
      "ℵ₀ (countable)",
      "ℵ₀ (счётна)",
      "Cantor's pairing function (or diagonal enumeration) bijects N × N with N.",
      "Функция пары Кантора (или диагональное перечисление) биектирует N × N с N.",
    ),
    prob(
      "se5", "hard",
      "Can the continuum hypothesis be proved or disproved from ZFC?",
      "Можно ли доказать или опровергнуть континуум-гипотезу из ZFC?",
      "Neither — it is independent (Gödel, Cohen)",
      "Ни то ни другое — она независима (Гёдель, Коэн)",
      "Gödel built a model of ZFC + CH (constructible universe); Cohen built one of ZFC + ¬CH (forcing). Both relative to consistency of ZFC.",
      "Гёдель построил модель ZFC + CH (конструктивная вселенная); Коэн — модель ZFC + ¬CH (форсинг). Обе относительно непротиворечивости ZFC.",
    ),
  ],
};
