import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const algebraicGeometry: Section = {
  slug: "algebraic-geometry",
  title: { en: "Algebraic Geometry", ru: "Алгебраическая геометрия" },
  tagline: {
    en: "Geometry of polynomial equations",
    ru: "Геометрия полиномиальных уравнений",
  },
  description: {
    en: "Algebraic geometry studies solution sets of polynomial equations — varieties — through the algebra of ideals and rings. Hilbert's Nullstellensatz bridges the two worlds; the field underlies modern number theory and string theory.",
    ru: "Алгебраическая геометрия изучает множества решений полиномиальных уравнений — многообразия — через алгебру идеалов и колец. Nullstellensatz Гильберта соединяет два мира; эта область лежит в основе современной теории чисел и теории струн.",
  },
  topics: [
    topic("varieties", "Affine Varieties and Ideals", "Аффинные многообразия и идеалы", [
      p(
        "An affine variety is the common zero set of polynomials. The ideal I(V) of all polynomials vanishing on V and the coordinate ring k[V] encode its geometry algebraically.",
        "Аффинное многообразие — общее множество нулей многочленов. Идеал I(V) всех многочленов, обращающихся в ноль на V, и координатное кольцо k[V] кодируют его геометрию алгебраически.",
      ),
      formula(
        "V(S) = \\{x : f(x) = 0\\ \\forall f \\in S\\}, \\qquad I(V) = \\{f : f|_V = 0\\}",
        "V(S) = {x : f(x) = 0 ∀f ∈ S};   I(V) = {f : f|_V = 0}",
      ),
    ]),
    topic("nullstellensatz", "Hilbert's Nullstellensatz", "Nullstellensatz Гильберта", [
      p(
        "Over an algebraically closed field, I(V(J)) is the radical of J. Consequence: maximal ideals of k[x₁,…,xₙ] correspond exactly to points — geometry and algebra determine each other.",
        "Над алгебраически замкнутым полем I(V(J)) — радикал J. Следствие: максимальные идеалы k[x₁,…,xₙ] соответствуют точкам — геометрия и алгебра определяют друг друга.",
      ),
      formula(
        "I(V(J)) = \\sqrt{J}",
        "I(V(J)) = √J",
        "Strong Nullstellensatz",
        "Сильный Nullstellensatz",
      ),
    ]),
    topic("projective", "Projective Varieties and Bezout", "Проективные многообразия и теорема Безу", [
      p(
        "Projective space adds points at infinity via homogeneous coordinates, making intersection theory clean: two plane curves of degrees m and n meet in exactly mn points over C, counted with multiplicity.",
        "Проективное пространство добавляет бесконечно удалённые точки через однородные координаты, делая теорию пересечений чистой: две плоские кривые степеней m и n пересекаются ровно в mn точках над C с учётом кратности.",
      ),
      formula(
        "\\#(C_m \\cap C_n) = m \\cdot n",
        "#(Cₘ ∩ Cₙ) = m·n",
        "Bezout's theorem (over C, with multiplicity)",
        "Теорема Безу (над C, с кратностью)",
      ),
    ]),
    topic("singularities", "Dimension and Singularities", "Размерность и особенности", [
      p(
        "Dimension counts independent parameters. A point is singular when all partial derivatives vanish there — the Jacobian criterion. The cusp y² = x³ is singular at the origin; smooth varieties locally look like affine space.",
        "Размерность считает независимые параметры. Точка особая, если в ней обращаются в ноль все частные производные — критерий Якоби. Касп y² = x³ особ в начале координат; гладкие многообразия локально похожи на аффинное пространство.",
      ),
      note(
        "Resolution of singularities (Hironaka) replaces any variety by a smooth one via blow-ups — a cornerstone of the field.",
        "Разрешение особенностей (Хиронака) заменяет любое многообразие гладким с помощью раздутий — краеугольный камень области.",
      ),
    ]),
    topic("morphisms", "Morphisms and Rational Maps", "Морфизмы и рациональные отображения", [
      p(
        "Regular maps are polynomial in coordinates; rational maps are defined on dense open sets. Birational equivalence ignores lower-dimensional differences — the classification program of algebraic geometry.",
        "Регулярные отображения полиномиальны в координатах; рациональные определены на плотных открытых множествах. Бирациональная эквивалентность игнорирует различия меньшей размерности — программа классификации алгебраической геометрии.",
      ),
      note(
        "Blowing up a point replaces it by the projective line of directions — the basic birational surgery.",
        "Раздутие точки заменяет её проективной прямой направлений — базовая бирациональная хирургия.",
      ),
    ]),
    topic("sheaves-schemes", "Sheaves and Schemes", "Пучки и схемы", [
      p(
        "Sheaves track local data and its gluing; the structure sheaf turns a space into a ringed space. Schemes generalize varieties by allowing arbitrary commutative rings — nilpotents and arithmetic included (Grothendieck).",
        "Пучки отслеживают локальные данные и их склейку; структурный пучок превращает пространство в окольцованное. Схемы обобщают многообразия, допуская произвольные коммутативные кольца — включая нильпотенты и арифметику (Гротендик).",
      ),
      formula(
        "\\mathrm{Spec}\\,\\mathbb{Z} \\text{ is the final arithmetic scheme}",
        "Spec Z — конечная арифметическая схема",
      ),
    ]),
    topic("divisors-riemann-roch", "Divisors and Riemann–Roch", "Дивизоры и теорема Римана–Роха", [
      p(
        "Divisors record zeros and poles; line bundles organize them. Riemann–Roch computes the dimension of spaces of functions with prescribed poles: l(D) − l(K − D) = deg D + 1 − g on curves.",
        "Дивизоры записывают нули и полюса; линейные расслоения их организуют. Римана–Роха вычисляет размерность пространств функций с заданными полюсами: l(D) − l(K − D) = deg D + 1 − g на кривых.",
      ),
      formula(
        "l(D) - l(K - D) = \\deg D + 1 - g",
        "l(D) − l(K − D) = deg D + 1 − g",
        "Riemann–Roch for curves",
        "Римана–Роха для кривых",
      ),
    ]),
    topic("elliptic-curves", "Elliptic Curves", "Эллиптические кривые", [
      p(
        "Smooth cubic curves with a marked point form a group via the chord-tangent law. Over Q they are finitely generated (Mordell–Weil); over finite fields they power ECC; modularity of elliptic curves proved Fermat's Last Theorem.",
        "Гладкие кубические кривые с отмеченной точкой образуют группу по закону хорды-касательной. Над Q они конечно порождены (Морделл–Вейль); над конечными полями питают ECC; модулярность эллиптических кривых доказала Великую теорему Ферма.",
      ),
      formula(
        "y^2 = x^3 + ax + b, \\qquad 4a^3 + 27b^2 \\neq 0",
        "y² = x³ + ax + b;   4a³ + 27b² ≠ 0",
        "Weierstrass equation (nonzero discriminant)",
        "Уравнение Вейерштрасса (ненулевой дискриминант)",
      ),
    ]),
  ],
  problems: [
    prob(
      "ag1", "easy",
      "What curve is V(x² + y² − 1) in R²?",
      "Какая кривая есть V(x² + y² − 1) в R²?",
      "The unit circle",
      "Единичная окружность",
      "x² + y² = 1 is exactly the unit circle centered at the origin.",
      "x² + y² = 1 — в точности единичная окружность с центром в начале координат.",
    ),
    prob(
      "ag2", "easy",
      "Is the origin a singular point of the curve y² = x³?",
      "Является ли начало координат особой точкой кривой y² = x³?",
      "Yes",
      "Да",
      "f = y² − x³: fₓ = −3x², fᵧ = 2y both vanish at (0,0) — a cusp.",
      "f = y² − x³: fₓ = −3x², fᵧ = 2y обе равны нулю в (0,0) — касп.",
    ),
    prob(
      "ag3", "medium",
      "By Bezout, how many intersection points does a line have with a conic over C (with multiplicity)?",
      "По теореме Безу, сколько точек пересечения имеет прямая с коникой над C (с кратностью)?",
      "2",
      "2",
      "Degrees 1 and 2: 1·2 = 2. Tangency counts as a double point; parallel lines meet at infinity.",
      "Степени 1 и 2: 1·2 = 2. Касание считается двойной точкой; параллельные прямые пересекаются на бесконечности.",
    ),
    prob(
      "ag4", "medium",
      "What is the coordinate ring of the affine line A¹ over k?",
      "Каково координатное кольцо аффинной прямой A¹ над k?",
      "k[x]",
      "k[x]",
      "The line has no equations, so I(A¹) = (0) and k[A¹] = k[x]/(0) = k[x].",
      "У прямой нет уравнений, поэтому I(A¹) = (0) и k[A¹] = k[x]/(0) = k[x].",
    ),
    prob(
      "ag5", "hard",
      "Find the radical of the ideal (x²) in k[x].",
      "Найдите радикал идеала (x²) в k[x].",
      "(x)",
      "(x)",
      "√(x²) = {f : fⁿ ∈ (x²) for some n} = (x), since x² ∈ (x²) but x ∉ (x²). Geometrically V(x²) = V(x) = {0}.",
      "√(x²) = {f : fⁿ ∈ (x²) для некоторого n} = (x), так как x² ∈ (x²), но x ∉ (x²). Геометрически V(x²) = V(x) = {0}.",
    ),
  ],
};
