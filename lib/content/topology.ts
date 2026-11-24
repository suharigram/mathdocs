import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const topology: Section = {
  slug: "topology",
  title: { en: "Topology", ru: "Топология" },
  tagline: {
    en: "Properties preserved under continuous deformation",
    ru: "Свойства, сохраняющиеся при непрерывных деформациях",
  },
  description: {
    en: "Topology studies space without distances: open sets, continuity, compactness, and connectedness. Algebraic topology attaches algebraic invariants — the fundamental group, homology, Euler characteristic — to distinguish shapes.",
    ru: "Топология изучает пространство без расстояний: открытые множества, непрерывность, компактность и связность. Алгебраическая топология приписывает фигурам алгебраические инварианты — фундаментальную группу, гомологии, эйлерову характеристику — чтобы их различать.",
  },
  topics: [
    topic("spaces", "Topological Spaces", "Топологические пространства", [
      p(
        "A topology is a family of open sets closed under arbitrary unions and finite intersections, containing ∅ and the whole space. Metric spaces generate topologies via open balls, but many topologies are non-metric.",
        "Топология — семейство открытых множеств, замкнутое относительно произвольных объединений и конечных пересечений, содержащее ∅ и всё пространство. Метрические пространства задают топологии открытыми шарами, но многие топологии не метризуемы.",
      ),
      formula(
        "\\tau \\subseteq \\mathcal{P}(X):\\; \\varnothing, X \\in \\tau;\\; \\text{unions, finite intersections stay in } \\tau",
        "τ ⊆ P(X): ∅, X ∈ τ; объединения и конечные пересечения остаются в τ",
      ),
    ]),
    topic("continuity", "Continuity and Homeomorphism", "Непрерывность и гомеоморфизм", [
      p(
        "A map is continuous when preimages of open sets are open. A homeomorphism is a continuous bijection with continuous inverse — the topologist's notion of “same shape”. A mug and a donut are homeomorphic.",
        "Отображение непрерывно, если прообразы открытых множеств открыты. Гомеоморфизм — непрерывная биекция с непрерывным обратным: топологическое «одинаковая форма». Кружка и бублик гомеоморфны.",
      ),
      formula(
        "f \\text{ continuous} \\;\\Leftrightarrow\\; f^{-1}(U) \\text{ open for every open } U",
        "f непрерывно  ⇔  f⁻¹(U) открыто для любого открытого U",
      ),
    ]),
    topic("compact-connected", "Compactness and Connectedness", "Компактность и связность", [
      p(
        "Compact: every open cover has a finite subcover — a finiteness property that guarantees extrema. Connected: cannot be split into two disjoint nonempty open pieces. In Rⁿ, compact = closed and bounded (Heine–Borel).",
        "Компактность: из любого открытого покрытия можно выбрать конечное подпокрытие — свойство конечности, гарантирующее экстремумы. Связность: нельзя разбить на два непересекающихся непустых открытых куска. В Rⁿ компактность = замкнутость и ограниченность (Гейне–Борель).",
      ),
      list(
        ["[0,1] is compact and connected; (0,1) is connected but not compact", "[0,1] компактен и связен; (0,1) связен, но не компактен"],
        ["Continuous images preserve both properties", "Непрерывные образы сохраняют оба свойства"],
      ),
    ]),
    topic("algebraic-topology", "Fundamental Group, Homology, Euler Characteristic", "Фундаментальная группа, гомологии, эйлерова характеристика", [
      p(
        "Loops up to continuous deformation form the fundamental group π₁. Homology counts holes of each dimension. For polyhedra, χ = V − E + F is a topological invariant: 2 for the sphere, 0 for the torus.",
        "Петли с точностью до непрерывной деформации образуют фундаментальную группу π₁. Гомологии считают дырки каждой размерности. Для многогранников χ = V − E + F — топологический инвариант: 2 для сферы, 0 для тора.",
      ),
      formula(
        "\\pi_1(S^1) \\cong \\mathbb{Z}, \\qquad \\chi = V - E + F",
        "π₁(S¹) ≅ Z;   χ = V − E + F",
      ),
      note(
        "Gauss–Bonnet links total curvature to χ: geometry and topology are two views of one invariant.",
        "Теорема Гаусса–Бонне связывает полную кривизну с χ: геометрия и топология — два взгляда на один инвариант.",
      ),
    ]),
    topic("separation-metrization", "Separation Axioms and Metrizability", "Аксиомы отделимости и метризуемость", [
      p(
        "Hausdorff (T₂) spaces separate points by neighborhoods; normal spaces separate closed sets (Urysohn's lemma). Urysohn's metrization theorem: regular + second-countable ⇒ metrizable.",
        "Хаусдорфовы (T₂) пространства разделяют точки окрестностями; нормальные разделяют замкнутые множества (лемма Урысона). Теорема Урысона о метризуемости: регулярность + вторая счётность ⇒ метризуемость.",
      ),
      note(
        "Compact Hausdorff spaces are normal; continuous bijections from compact to Hausdorff are homeomorphisms.",
        "Компактные хаусдорфовы пространства нормальны; непрерывные биекции из компакта в хаусдорфово — гомеоморфизмы.",
      ),
    ]),
    topic("product-quotient", "Product and Quotient Topologies", "Произведения и фактортопологии", [
      p(
        "The product topology is the coarsest making projections continuous (Tychonoff: products of compacta are compact). Quotient topologies glue points — building circles from intervals, tori from squares, Möbius bands with a twist.",
        "Топология произведения — наименьшая, делающая проекции непрерывными (Тихонов: произведения компактов компактны). Фактортопологии склеивают точки — строя окружности из отрезков, торы из квадратов, ленты Мёбиуса с перекрутом.",
      ),
      formula(
        "S^1 = [0,1] / (0 \\sim 1), \\qquad T^2 = S^1 \\times S^1",
        "S¹ = [0,1]/(0 ∼ 1);   T² = S¹ × S¹",
      ),
    ]),
    topic("manifolds", "Topological Manifolds", "Топологические многообразия", [
      p(
        "An n-manifold is locally Euclidean, Hausdorff, second-countable. Surfaces classify by orientability and genus; in dimension 3 the Poincaré conjecture (Perelman) characterizes the sphere by π₁ = 0.",
        "n-многообразие локально евклидово, хаусдорфово, второй счётности. Поверхности классифицируются ориентируемостью и родом; в размерности 3 гипотеза Пуанкаре (Перельман) характеризует сферу условием π₁ = 0.",
      ),
      note(
        "Exotic R⁴ exists: smooth structures on R⁴ are uncountably many — unique to dimension 4.",
        "Экзотические R⁴ существуют: гладких структур на R⁴ несчётно много — уникально для размерности 4.",
      ),
    ]),
    topic("homotopy-homology", "Homotopy, Homology, Cohomology", "Гомотопии, гомологии, когомологии", [
      p(
        "Homotopy deforms maps continuously; homology groups Hₙ count n-dimensional holes algebraically; cohomology adds a ring structure (cup product). Mayer–Vietoris computes them by cutting spaces apart.",
        "Гомотопия непрерывно деформирует отображения; группы гомологий Hₙ алгебраически считают n-мерные дырки; когомологии добавляют кольцевую структуру (cup-произведение). Майер–Вьеторис вычисляет их разрезанием пространств.",
      ),
      formula(
        "H_0(S^1) = \\mathbb{Z}, \\quad H_1(S^1) = \\mathbb{Z}, \\quad H_n(T^2): \\mathbb{Z}, \\mathbb{Z}^2, \\mathbb{Z}",
        "H₀(S¹) = Z;   H₁(S¹) = Z;   Hₙ(T²): Z, Z², Z",
      ),
    ]),
    topic("knots", "Knot Theory", "Теория узлов", [
      p(
        "A knot is an embedded circle in 3-space, studied up to ambient isotopy. Jones and Alexander polynomials distinguish knots; knot theory connects to quantum field theory and DNA topology.",
        "Узел — вложенная окружность в 3-пространство, изучаемая с точностью до изотопии. Полиномы Джонса и Александера различают узлы; теория узлов связана с квантовой теорией поля и топологией ДНК.",
      ),
      note(
        "The trefoil is the simplest nontrivial knot; its Jones polynomial proves it is not the unknot.",
        "Трилистник — простейший нетривиальный узел; его полином Джонса доказывает, что это не развязка.",
      ),
    ]),
  ],
  problems: [
    prob(
      "to1", "easy",
      "Is (0, 1) open in R with the standard topology?",
      "Открыто ли (0, 1) в R со стандартной топологией?",
      "Yes",
      "Да",
      "Every point has an ε-neighborhood inside the interval; open intervals are basis elements.",
      "У каждой точки есть ε-окрестность внутри отрезка; открытые интервалы — элементы базы.",
    ),
    prob(
      "to2", "easy",
      "Find the closure of (0, 1) in R.",
      "Найдите замыкание (0, 1) в R.",
      "[0, 1]",
      "[0, 1]",
      "0 and 1 are limit points; adding them gives the smallest closed set containing the interval.",
      "0 и 1 — предельные точки; их добавление даёт наименьшее замкнутое множество, содержащее интервал.",
    ),
    prob(
      "to3", "medium",
      "Is (0, 1) compact? Is [0, 1]?",
      "Компактен ли (0, 1)? А [0, 1]?",
      "(0,1): no; [0,1]: yes",
      "(0,1): нет; [0,1]: да",
      "Heine–Borel: compact in R means closed and bounded. (0,1) is not closed; the cover (1/n, 1) has no finite subcover.",
      "Гейне–Борель: компактность в R — замкнутость и ограниченность. (0,1) не замкнут; покрытие (1/n, 1) не имеет конечного подпокрытия.",
    ),
    prob(
      "to4", "medium",
      "Compute the Euler characteristic of a cube (V = 8, E = 12, F = 6).",
      "Вычислите эйлерову характеристику куба (V = 8, E = 12, F = 6).",
      "2",
      "2",
      "χ = 8 − 12 + 6 = 2 — the sphere's invariant, as expected for any convex polyhedron.",
      "χ = 8 − 12 + 6 = 2 — инвариант сферы, как и ожидается для любого выпуклого многогранника.",
    ),
    prob(
      "to5", "hard",
      "What is the fundamental group of the circle S¹, and what does its element count?",
      "Какова фундаментальная группа окружности S¹ и что считают её элементы?",
      "π₁(S¹) ≅ Z; elements count winding number",
      "π₁(S¹) ≅ Z; элементы считают число оборотов",
      "Loops are classified by how many times they wind around the circle (with direction); composition adds winding numbers, giving Z.",
      "Петли классифицируются числом оборотов вокруг окружности (с направлением); композиция складывает числа оборотов, давая Z.",
    ),
  ],
};
