import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const fractals: Section = {
  slug: "fractals",
  title: { en: "Fractal Geometry", ru: "Фрактальная геометрия" },
  tagline: {
    en: "Self-similarity and fractional dimension",
    ru: "Самоподобие и дробная размерность",
  },
  description: {
    en: "Fractals are shapes whose detail repeats at every scale, with dimension that need not be an integer. The Cantor set, Koch curve, Sierpinski triangle, and Mandelbrot set are the classics; iterated function systems generate them algorithmically.",
    ru: "Фракталы — фигуры, детали которых повторяются на каждом масштабе, с размерностью, не обязательно целой. Множество Кантора, кривая Коха, треугольник Серпинского и множество Мандельброта — классика; системы итерируемых функций порождают их алгоритмически.",
  },
  topics: [
    topic("dimension", "Self-Similarity Dimension", "Размерность самоподобия", [
      p(
        "If a shape consists of N copies of itself scaled by factor s, its similarity dimension is D = log N / log s. A line gives 1, a square 2 — and the Koch curve log 4 / log 3 ≈ 1.262.",
        "Если фигура состоит из N копий себя, уменьшенных в s раз, её размерность самоподобия D = log N / log s. Прямая даёт 1, квадрат 2 — а кривая Коха log 4 / log 3 ≈ 1,262.",
      ),
      formula(
        "D = \\frac{\\log N}{\\log (1/s)}",
        "D = log N / log(1/s)",
      ),
    ]),
    topic("classics", "Classic Fractals", "Классические фракталы", [
      p(
        "The Cantor set removes middle thirds (dimension log 2 / log 3). The Koch curve replaces each segment with four thirds-length pieces: infinite length, zero area. The Sierpinski triangle keeps 3 of 4 subtriangles.",
        "Множество Кантора выбрасывает средние трети (размерность log 2 / log 3). Кривая Коха заменяет каждый отрезок четырьмя кусками длины 1/3: бесконечная длина, нулевая площадь. Треугольник Серпинского оставляет 3 из 4 подтреугольников.",
      ),
      list(
        ["Cantor set: uncountable, measure zero, D ≈ 0.631", "Множество Кантора: несчётно, мера ноль, D ≈ 0,631"],
        ["Koch curve: length (4/3)ⁿ → ∞, D ≈ 1.262", "Кривая Коха: длина (4/3)ⁿ → ∞, D ≈ 1,262"],
        ["Sierpinski triangle: D = log 3 / log 2 ≈ 1.585", "Треугольник Серпинского: D = log 3 / log 2 ≈ 1,585"],
      ),
    ]),
    topic("mandelbrot", "Mandelbrot and Julia Sets", "Множества Мандельброта и Жюлиа", [
      p(
        "Iterate zₙ₊₁ = zₙ² + c. The Mandelbrot set collects parameters c for which the orbit of 0 stays bounded; each c also defines a Julia set — connected exactly when c lies in the Mandelbrot set.",
        "Итерируем zₙ₊₁ = zₙ² + c. Множество Мандельброта собирает параметры c, при которых орбита 0 ограничена; каждое c также задаёт множество Жюлиа — связное ровно тогда, когда c лежит в множестве Мандельброта.",
      ),
      formula(
        "z_{n+1} = z_n^2 + c, \\qquad M = \\{c : \\text{orbit of } 0 \\text{ bounded}\\}",
        "zₙ₊₁ = zₙ² + c;   M = {c : орбита 0 ограничена}",
      ),
      note(
        "If |zₙ| ever exceeds 2, the orbit escapes to infinity — the escape-time algorithm colors the pictures.",
        "Если |zₙ| когда-либо превышает 2, орбита уходит в бесконечность — алгоритм времени убегания раскрашивает картинки.",
      ),
    ]),
    topic("ifs", "Iterated Function Systems", "Системы итерируемых функций", [
      p(
        "A finite family of contractions has a unique compact attractor (Hutchinson's theorem). The chaos game — randomly applying the maps — draws it: three half-scale maps toward triangle vertices produce Sierpinski's triangle.",
        "Конечное семейство сжатий имеет единственный компактный аттрактор (теорема Хатчинсона). «Игра в хаос» — случайное применение отображений — рисует его: три сжатия вдвое к вершинам треугольника дают треугольник Серпинского.",
      ),
      formula(
        "A = \\bigcup_i w_i(A)",
        "A = ∪ wᵢ(A)",
        "Attractor fixed-point equation",
        "Уравнение неподвижной точки аттрактора",
      ),
    ]),
    topic("hausdorff-box", "Hausdorff and Box-Counting Dimension", "Размерности Хаусдорфа и коробочная", [
      p(
        "Hausdorff dimension uses optimal covers at all scales; box-counting counts occupied grid boxes N(ε) ~ ε^{−D}. They agree for self-similar sets but can differ in general.",
        "Размерность Хаусдорфа использует оптимальные покрытия на всех масштабах; коробочная считает занятые ячейки N(ε) ~ ε^{−D}. Для самоподобных множеств совпадают, в общем случае могут различаться.",
      ),
      formula(
        "D = \\lim_{\\varepsilon \\to 0}\\frac{\\log N(\\varepsilon)}{\\log(1/\\varepsilon)}",
        "D = lim log N(ε)/log(1/ε)",
        "Box-counting dimension",
        "Коробочная размерность",
      ),
    ]),
    topic("nature-applications", "Fractals in Nature and Technology", "Фракталы в природе и технике", [
      p(
        "Coastlines, lungs, trees, and river networks are statistical fractals — self-similar in distribution. Fractal antennas pack bandwidth into small space; fracture surfaces and turbulence show fractal statistics.",
        "Береговые линии, лёгкие, деревья и речные сети — статистические фракталы: самоподобны по распределению. Фрактальные антенны упаковывают полосу в малое пространство; поверхности изломов и турбулентность показывают фрактальную статистику.",
      ),
      note(
        "The coastline paradox: measured length grows without bound as the ruler shrinks — dimension, not length, is the stable descriptor.",
        "Парадокс береговой линии: измеренная длина растёт неограниченно при уменьшении линейки — устойчивый дескриптор — размерность, а не длина.",
      ),
    ]),
  ],
  problems: [
    prob(
      "fr1", "easy",
      "What is the similarity dimension of the Cantor set?",
      "Какова размерность самоподобия множества Кантора?",
      "log 2 / log 3 ≈ 0.631",
      "log 2 / log 3 ≈ 0,631",
      "2 copies scaled by 1/3: D = log 2 / log 3.",
      "2 копии, уменьшенные в 3 раза: D = log 2 / log 3.",
    ),
    prob(
      "fr2", "easy",
      "Find the dimension of the Sierpinski triangle.",
      "Найдите размерность треугольника Серпинского.",
      "log 3 / log 2 ≈ 1.585",
      "log 3 / log 2 ≈ 1,585",
      "3 copies scaled by 1/2: D = log 3 / log 2.",
      "3 копии, уменьшенные вдвое: D = log 3 / log 2.",
    ),
    prob(
      "fr3", "medium",
      "What is the length of the Koch curve after n iterations, starting from a segment of length 1?",
      "Какова длина кривой Коха после n итераций, начиная с отрезка длины 1?",
      "(4/3)ⁿ → ∞",
      "(4/3)ⁿ → ∞",
      "Each iteration multiplies length by 4/3, so the limit curve has infinite length.",
      "Каждая итерация умножает длину на 4/3, поэтому предельная кривая имеет бесконечную длину.",
    ),
    prob(
      "fr4", "medium",
      "Is c = 0 in the Mandelbrot set? Is c = 1?",
      "Принадлежит ли c = 0 множеству Мандельброта? А c = 1?",
      "c = 0: yes; c = 1: no",
      "c = 0: да; c = 1: нет",
      "For c = 0 the orbit of 0 stays at 0. For c = 1: 0 → 1 → 2 → 5 → … escapes.",
      "При c = 0 орбита 0 остаётся в 0. При c = 1: 0 → 1 → 2 → 5 → … убегает.",
    ),
    prob(
      "fr5", "hard",
      "A fractal consists of 5 copies of itself scaled by 1/3. Find its similarity dimension.",
      "Фрактал состоит из 5 копий себя, уменьшенных в 3 раза. Найдите его размерность самоподобия.",
      "log 5 / log 3 ≈ 1.465",
      "log 5 / log 3 ≈ 1,465",
      "D = log 5 / log 3 ≈ 1.465 — between a line and a plane.",
      "D = log 5 / log 3 ≈ 1,465 — между прямой и плоскостью.",
    ),
  ],
};
