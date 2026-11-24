import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const trigonometry: Section = {
  slug: "trigonometry",
  title: { en: "Trigonometry", ru: "Тригонометрия" },
  tagline: {
    en: "Angles, circles, and periodic functions",
    ru: "Углы, окружности и периодические функции",
  },
  description: {
    en: "Trigonometry connects angles with side ratios in triangles and, through the unit circle, with periodic functions. It is essential for geometry, calculus, waves, and physics.",
    ru: "Тригонометрия связывает углы с отношениями сторон в треугольниках, а через единичную окружность — с периодическими функциями. Она необходима для геометрии, анализа, теории волн и физики.",
  },
  topics: [
    topic("unit-circle", "Radians and the Unit Circle", "Радианы и единичная окружность", [
      p(
        "One full turn is 360° = 2π radians, so 180° = π rad. On the unit circle, a point at angle θ has coordinates (cos θ, sin θ); the tangent is sin θ / cos θ.",
        "Полный оборот — 360° = 2π радиан, поэтому 180° = π рад. На единичной окружности точка с углом θ имеет координаты (cos θ, sin θ); тангенс равен sin θ / cos θ.",
      ),
      formula(
        "\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\frac{\\pi}{180}",
        "θ(рад) = θ(град) · π/180",
      ),
      list(
        ["sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2", "sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2"],
        ["cos 30° = √3/2, cos 45° = √2/2, cos 60° = 1/2", "cos 30° = √3/2, cos 45° = √2/2, cos 60° = 1/2"],
        ["tan 45° = 1; tan is undefined where cos θ = 0", "tg 45° = 1; тангенс не определён там, где cos θ = 0"],
      ),
    ]),
    topic("identities", "Key Identities", "Основные тождества", [
      p(
        "The Pythagorean identity follows directly from the unit circle. Double-angle formulas express functions of 2x through functions of x.",
        "Основное тригонометрическое тождество следует прямо из единичной окружности. Формулы двойного угла выражают функции от 2x через функции от x.",
      ),
      formula(
        "\\sin^2 x + \\cos^2 x = 1, \\qquad \\tan x = \\frac{\\sin x}{\\cos x}",
        "sin²x + cos²x = 1;   tg x = sin x / cos x",
      ),
      formula(
        "\\sin 2x = 2\\sin x\\cos x, \\qquad \\cos 2x = \\cos^2 x - \\sin^2 x",
        "sin 2x = 2 sin x cos x;   cos 2x = cos²x − sin²x",
        "Double-angle formulas",
        "Формулы двойного угла",
      ),
      note(
        "From cos 2x = cos²x − sin²x and the Pythagorean identity we also get cos 2x = 1 − 2sin²x = 2cos²x − 1.",
        "Из cos 2x = cos²x − sin²x и основного тождества получаем также cos 2x = 1 − 2sin²x = 2cos²x − 1.",
      ),
    ]),
    topic("solving-triangles", "Solving Triangles", "Решение треугольников", [
      p(
        "The Law of Sines relates sides to the sines of opposite angles. The Law of Cosines generalizes the Pythagorean theorem to arbitrary triangles.",
        "Теорема синусов связывает стороны с синусами противолежащих углов. Теорема косинусов обобщает теорему Пифагора на произвольные треугольники.",
      ),
      formula(
        "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
        "a/sin A = b/sin B = c/sin C = 2R",
        "Law of Sines (R is the circumradius)",
        "Теорема синусов (R — радиус описанной окружности)",
      ),
      formula(
        "c^2 = a^2 + b^2 - 2ab\\cos C",
        "c² = a² + b² − 2ab·cos C",
        "Law of Cosines",
        "Теорема косинусов",
      ),
      formula(
        "S = \\tfrac{1}{2}ab\\sin C",
        "S = ½ab·sin C",
        "Area from two sides and the included angle",
        "Площадь по двум сторонам и углу между ними",
      ),
    ]),
    topic("graphs", "Graphs and Periodicity", "Графики и периодичность", [
      p(
        "Sine and cosine repeat every 2π; tangent repeats every π. In y = A·sin(Bx + C), the amplitude is |A|, the period is 2π/|B|, and C shifts the graph horizontally.",
        "Синус и косинус повторяются через 2π; тангенс — через π. В записи y = A·sin(Bx + C) амплитуда равна |A|, период равен 2π/|B|, а C сдвигает график по горизонтали.",
      ),
      formula(
        "y = A\\sin(Bx + C): \\quad \\text{period} = \\frac{2\\pi}{|B|}",
        "y = A·sin(Bx + C):   период = 2π/|B|",
      ),
      list(
        ["sin(−x) = −sin x (odd); cos(−x) = cos x (even)", "sin(−x) = −sin x (нечётная); cos(−x) = cos x (чётная)"],
        ["Range of sin and cos is [−1, 1]; range of tan is all real numbers", "Область значений sin и cos: [−1, 1]; тангенса — все действительные числа"],
      ),
    ]),
  ],
  problems: [
    prob(
      "t1", "easy",
      "Convert 150° to radians.",
      "Переведите 150° в радианы.",
      "5π/6",
      "5π/6",
      "150° · π/180 = 150π/180 = 5π/6.",
      "150° · π/180 = 150π/180 = 5π/6.",
    ),
    prob(
      "t2", "easy",
      "Given sin θ = 3/5 and θ is acute, find cos θ.",
      "Известно, что sin θ = 3/5 и θ — острый угол. Найдите cos θ.",
      "cos θ = 4/5",
      "cos θ = 4/5",
      "cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25. Since θ is acute, cos θ = 4/5.",
      "cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25. Так как θ острый, cos θ = 4/5.",
    ),
    prob(
      "t3", "medium",
      "Solve 2·sin x = 1 for x in [0, 2π).",
      "Решите уравнение 2·sin x = 1 на промежутке [0, 2π).",
      "x = π/6 or x = 5π/6",
      "x = π/6 или x = 5π/6",
      "sin x = 1/2. Sine is positive in quadrants I and II: x = π/6 and x = π − π/6 = 5π/6.",
      "sin x = 1/2. Синус положителен в I и II четвертях: x = π/6 и x = π − π/6 = 5π/6.",
    ),
    prob(
      "t4", "medium",
      "A triangle has sides a = 7, b = 8 with included angle C = 60°. Find side c.",
      "В треугольнике стороны a = 7, b = 8, угол между ними C = 60°. Найдите сторону c.",
      "c = √57 ≈ 7.55",
      "c = √57 ≈ 7,55",
      "c² = 49 + 64 − 2·7·8·cos 60° = 113 − 112·(1/2) = 57, so c = √57.",
      "c² = 49 + 64 − 2·7·8·cos 60° = 113 − 112·(1/2) = 57, значит c = √57.",
    ),
    prob(
      "t5", "hard",
      "Solve 2cos²x − 1 = 0 for x in [0, 2π).",
      "Решите уравнение 2cos²x − 1 = 0 на промежутке [0, 2π).",
      "x = π/4, 3π/4, 5π/4, 7π/4",
      "x = π/4, 3π/4, 5π/4, 7π/4",
      "2cos²x − 1 = cos 2x, so cos 2x = 0. Then 2x = π/2 + πk, giving x = π/4 + πk/2. In [0, 2π) this yields π/4, 3π/4, 5π/4, 7π/4.",
      "2cos²x − 1 = cos 2x, поэтому cos 2x = 0. Тогда 2x = π/2 + πk, откуда x = π/4 + πk/2. На [0, 2π) получаем π/4, 3π/4, 5π/4, 7π/4.",
    ),
  ],
};
