import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const vectorCalculus: Section = {
  slug: "vector-calculus",
  title: { en: "Vector Calculus", ru: "Векторный анализ" },
  tagline: {
    en: "Fields, flows, and the great integral theorems",
    ru: "Поля, потоки и великие интегральные теоремы",
  },
  description: {
    en: "Vector calculus studies vector fields — forces, velocities, electromagnetism. Divergence and curl measure sources and rotation; Green's, Stokes', and the divergence theorem connect integrals over regions to integrals over their boundaries.",
    ru: "Векторный анализ изучает векторные поля — силы, скорости, электромагнетизм. Дивергенция и ротор измеряют источники и вращение; теоремы Грина, Стокса и Остроградского связывают интегралы по областям с интегралами по их границам.",
  },
  topics: [
    topic("fields", "Vector Fields and Conservative Fields", "Векторные поля и потенциальные поля", [
      p(
        "A vector field assigns a vector to each point. A field is conservative when it is a gradient, F = ∇φ; then line integrals depend only on endpoints, and closed-loop integrals vanish.",
        "Векторное поле сопоставляет каждой точке вектор. Поле потенциально, если оно является градиентом, F = ∇φ; тогда криволинейные интегралы зависят только от концов, а интегралы по замкнутым контурам равны нулю.",
      ),
      formula(
        "\\mathbf{F} = \\nabla\\varphi \\;\\Rightarrow\\; \\int_C \\mathbf{F}\\cdot d\\mathbf{r} = \\varphi(B) - \\varphi(A)",
        "F = ∇φ  ⇒  ∫ F·dr = φ(B) − φ(A)",
      ),
    ]),
    topic("div-curl", "Divergence and Curl", "Дивергенция и ротор", [
      p(
        "Divergence measures net outflow from an infinitesimal volume (sources and sinks); curl measures infinitesimal rotation. Both are built from the del operator ∇.",
        "Дивергенция измеряет суммарный выток из бесконечно малого объёма (источники и стоки); ротор измеряет бесконечно малое вращение. Оба строятся из оператора ∇.",
      ),
      formula(
        "\\nabla\\cdot\\mathbf{F} = F_{1x} + F_{2y} + F_{3z}, \\qquad \\nabla\\times\\mathbf{F}",
        "div F = ∂F₁/∂x + ∂F₂/∂y + ∂F₃/∂z;   rot F = ∇×F",
      ),
      list(
        ["curl(grad f) = 0 always", "rot(grad f) = 0 всегда"],
        ["div(curl F) = 0 always", "div(rot F) = 0 всегда"],
      ),
    ]),
    topic("line-green", "Line Integrals and Green's Theorem", "Криволинейные интегралы и теорема Грина", [
      p(
        "A line integral accumulates a field along a curve — work done by a force, for instance. Green's theorem converts a circulation around a plane loop into a double integral of curl over the enclosed region.",
        "Криволинейный интеграл накапливает поле вдоль кривой — например, работу силы. Теорема Грина превращает циркуляцию по плоскому контуру в двойной интеграл ротора по охваченной области.",
      ),
      formula(
        "\\oint_C P\\,dx + Q\\,dy = \\iint_R \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA",
        "∮ P dx + Q dy = ∬ (∂Q/∂x − ∂P/∂y) dA",
        "Green's theorem (counterclockwise C)",
        "Теорема Грина (C против часовой стрелки)",
      ),
    ]),
    topic("surface-theorems", "Surface Integrals and the Big Theorems", "Поверхностные интегралы и основные теоремы", [
      p(
        "Flux measures how much field crosses a surface. Stokes' theorem generalizes Green's to surfaces in space; the divergence theorem converts flux through a closed surface into a volume integral of divergence.",
        "Поток измеряет, сколько поля проходит через поверхность. Теорема Стокса обобщает теорему Грина на поверхности в пространстве; теорема Остроградского превращает поток через замкнутую поверхность в объёмный интеграл дивергенции.",
      ),
      formula(
        "\\oint_C \\mathbf{F}\\cdot d\\mathbf{r} = \\iint_S (\\nabla\\times\\mathbf{F})\\cdot\\mathbf{n}\\,dS",
        "∮ F·dr = ∬ (rot F)·n dS",
        "Stokes' theorem",
        "Теорема Стокса",
      ),
      formula(
        "\\iint_{\\partial V} \\mathbf{F}\\cdot\\mathbf{n}\\,dS = \\iiint_V (\\nabla\\cdot\\mathbf{F})\\,dV",
        "∬ F·n dS = ∭ div F dV",
        "Divergence theorem (Gauss–Ostrogradsky)",
        "Теорема Остроградского–Гаусса",
      ),
      note(
        "All three theorems are one idea: the integral of a derivative over a region equals the field's behavior on the boundary.",
        "Все три теоремы — одна идея: интеграл производной по области равен поведению поля на границе.",
      ),
    ]),
    topic("parametrizations", "Parametrized Curves and Surfaces", "Параметризованные кривые и поверхности", [
      p(
        "Curves are r(t); surfaces are r(u,v). Tangent vectors come from partial derivatives, and the normal is their cross product — the geometry behind line and surface integrals.",
        "Кривые — r(t); поверхности — r(u,v). Касательные векторы получаются частными производными, нормаль — их векторным произведением; это геометрия, стоящая за криволинейными и поверхностными интегралами.",
      ),
      formula(
        "\\mathbf{n} = \\mathbf{r}_u \\times \\mathbf{r}_v, \\qquad dS = |\\mathbf{r}_u \\times \\mathbf{r}_v|\\,du\\,dv",
        "n = rᵤ × rᵥ;   dS = |rᵤ × rᵥ| du dv",
      ),
    ]),
    topic("maxwell", "Fields in Physics: Maxwell's Equations", "Поля в физике: уравнения Максвелла", [
      p(
        "Vector calculus is the language of electromagnetism: divergence of E gives charge density, curl of E gives changing magnetic flux, and so on. The four Maxwell equations unify electricity, magnetism, and light.",
        "Векторный анализ — язык электромагнетизма: дивергенция E даёт плотность заряда, ротор E — изменение магнитного потока, и так далее. Четыре уравнения Максвелла объединяют электричество, магнетизм и свет.",
      ),
      formula(
        "\\nabla\\cdot\\mathbf{E} = \\rho/\\varepsilon_0, \\quad \\nabla\\times\\mathbf{E} = -\\frac{\\partial\\mathbf{B}}{\\partial t}",
        "div E = ρ/ε₀;   rot E = −∂B/∂t",
        "Two of Maxwell's equations (differential form)",
        "Два из уравнений Максвелла (дифференциальная форма)",
      ),
    ]),
  ],
  problems: [
    prob(
      "vc1", "easy",
      "Find div F for F(x, y, z) = (x, y, z).",
      "Найдите div F для F(x, y, z) = (x, y, z).",
      "3",
      "3",
      "∂x/∂x + ∂y/∂y + ∂z/∂z = 1 + 1 + 1 = 3.",
      "∂x/∂x + ∂y/∂y + ∂z/∂z = 1 + 1 + 1 = 3.",
    ),
    prob(
      "vc2", "easy",
      "What is curl(∇f) for any smooth function f?",
      "Чему равен rot(∇f) для любой гладкой функции f?",
      "0",
      "0",
      "Mixed partials cancel pairwise: curl of a gradient is identically zero.",
      "Смешанные производные попарно сокращаются: ротор градиента тождественно нулевой.",
    ),
    prob(
      "vc3", "medium",
      "Compute the work of F = (y, x) along any path from (0,0) to (1,1).",
      "Вычислите работу поля F = (y, x) вдоль любого пути из (0,0) в (1,1).",
      "1",
      "1",
      "F = ∇(xy), so work = φ(1,1) − φ(0,0) = 1 − 0 = 1, independent of path.",
      "F = ∇(xy), поэтому работа = φ(1,1) − φ(0,0) = 1 − 0 = 1, независимо от пути.",
    ),
    prob(
      "vc4", "medium",
      "Use Green's theorem to evaluate ∮ (−y dx + x dy) around the unit circle.",
      "Используя теорему Грина, вычислите ∮ (−y dx + x dy) по единичной окружности.",
      "2π",
      "2π",
      "∂Q/∂x − ∂P/∂y = 1 − (−1) = 2, so the integral is 2·area = 2π.",
      "∂Q/∂x − ∂P/∂y = 1 − (−1) = 2, значит интеграл равен 2·площадь = 2π.",
    ),
    prob(
      "vc5", "hard",
      "Find the outward flux of F = (x, y, z) through the sphere of radius R.",
      "Найдите внешний поток поля F = (x, y, z) через сферу радиуса R.",
      "4πR³",
      "4πR³",
      "div F = 3, so by the divergence theorem flux = 3·volume = 3·(4/3)πR³ = 4πR³.",
      "div F = 3, поэтому по теореме Остроградского поток = 3·объём = 3·(4/3)πR³ = 4πR³.",
    ),
  ],
};
