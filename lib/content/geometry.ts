import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const geometry: Section = {
  slug: "geometry",
  title: { en: "Geometry", ru: "Геометрия" },
  tagline: {
    en: "Shapes, sizes, and the properties of space",
    ru: "Фигуры, размеры и свойства пространства",
  },
  description: {
    en: "Geometry deals with the properties and relations of points, lines, surfaces, and solids. Plane geometry studies flat figures; solid geometry extends these ideas to three dimensions.",
    ru: "Геометрия изучает свойства и отношения точек, линий, поверхностей и тел. Планиметрия рассматривает плоские фигуры; стереометрия переносит эти идеи в трёхмерное пространство.",
  },
  topics: [
    topic("triangles", "Angles and Triangles", "Углы и треугольники", [
      p(
        "The interior angles of any triangle sum to 180°. Triangles are classified by sides (equilateral, isosceles, scalene) and by angles (acute, right, obtuse).",
        "Сумма внутренних углов любого треугольника равна 180°. Треугольники классифицируют по сторонам (равносторонний, равнобедренный, разносторонний) и по углам (остроугольный, прямоугольный, тупоугольный).",
      ),
      formula("\\alpha + \\beta + \\gamma = 180^\\circ", "α + β + γ = 180°"),
      p(
        "The triangle inequality states that the sum of any two sides must exceed the third side: a + b > c. It tells us whether three lengths can form a triangle at all.",
        "Неравенство треугольника: сумма любых двух сторон больше третьей: a + b > c. Оно показывает, могут ли три длины вообще образовать треугольник.",
      ),
      note(
        "An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.",
        "Внешний угол треугольника равен сумме двух внутренних, не смежных с ним.",
      ),
    ]),
    topic("pythagoras", "The Pythagorean Theorem", "Теорема Пифагора", [
      p(
        "In a right triangle with legs a and b and hypotenuse c, the squares of the legs add up to the square of the hypotenuse. The converse is also true and is used to detect right angles.",
        "В прямоугольном треугольнике с катетами a и b и гипотенузой c сумма квадратов катетов равна квадрату гипотенузы. Обратная теорема также верна и используется для распознавания прямых углов.",
      ),
      formula("a^2 + b^2 = c^2", "a² + b² = c²"),
      list(
        ["Classic Pythagorean triples: (3, 4, 5), (5, 12, 13), (8, 15, 17)", "Классические пифагоровы тройки: (3, 4, 5), (5, 12, 13), (8, 15, 17)"],
        ["Diagonal of a unit square: √2; height of an equilateral triangle with side a: a√3/2", "Диагональ единичного квадрата: √2; высота равностороннего треугольника со стороной a: a√3/2"],
      ),
    ]),
    topic("area-perimeter", "Area and Perimeter", "Площадь и периметр", [
      p(
        "Perimeter is the total length of a figure's boundary; area measures the surface it covers. Common formulas are worth memorizing.",
        "Периметр — суммарная длина границы фигуры; площадь измеряет покрываемую ею поверхность. Основные формулы стоит запомнить.",
      ),
      formula(
        "S_{\\text{rect}} = ab, \\quad S_{\\triangle} = \\tfrac{1}{2}bh, \\quad S_{\\text{trap}} = \\tfrac{a+b}{2}\\,h",
        "S(прямоуг.) = ab;   S(треуг.) = ½bh;   S(трапец.) = (a + b)/2 · h",
      ),
      formula(
        "C = 2\\pi r, \\qquad S_{\\text{circle}} = \\pi r^2",
        "C = 2πr;   S(круга) = πr²",
        "Circumference and area of a circle",
        "Длина окружности и площадь круга",
      ),
    ]),
    topic("solids", "Solid Geometry", "Стереометрия", [
      p(
        "For prisms and cylinders the volume is base area times height. Cones and pyramids carry a factor of 1/3. The sphere has elegant closed formulas for volume and surface area.",
        "Для призм и цилиндров объём равен площади основания, умноженной на высоту. У конусов и пирамид появляется множитель 1/3. У шара есть изящные формулы объёма и площади поверхности.",
      ),
      formula(
        "V_{\\text{cyl}} = \\pi r^2 h, \\qquad V_{\\text{cone}} = \\tfrac{1}{3}\\pi r^2 h",
        "V(цилиндра) = πr²h;   V(конуса) = ⅓πr²h",
      ),
      formula(
        "V_{\\text{sphere}} = \\tfrac{4}{3}\\pi r^3, \\qquad S_{\\text{sphere}} = 4\\pi r^2",
        "V(шара) = (4/3)πr³;   S(шара) = 4πr²",
      ),
      note(
        "Scaling a solid by factor k multiplies lengths by k, areas by k², and volumes by k³.",
        "При масштабировании тела в k раз длины умножаются на k, площади — на k², объёмы — на k³.",
      ),
    ]),
  ],
  problems: [
    prob(
      "g1", "easy",
      "A right triangle has legs 6 and 8. Find the hypotenuse.",
      "Катеты прямоугольного треугольника равны 6 и 8. Найдите гипотенузу.",
      "c = 10",
      "c = 10",
      "c² = 6² + 8² = 36 + 64 = 100, so c = 10. This is the (3, 4, 5) triple scaled by 2.",
      "c² = 6² + 8² = 36 + 64 = 100, значит c = 10. Это тройка (3, 4, 5), умноженная на 2.",
    ),
    prob(
      "g2", "easy",
      "Find the area of a circle with radius 3 (leave π in the answer).",
      "Найдите площадь круга радиуса 3 (ответ оставьте через π).",
      "S = 9π ≈ 28.27",
      "S = 9π ≈ 28,27",
      "S = πr² = π·3² = 9π.",
      "S = πr² = π·3² = 9π.",
    ),
    prob(
      "g3", "medium",
      "Two angles of a triangle are 50° and 60°. Find the third angle.",
      "Два угла треугольника равны 50° и 60°. Найдите третий угол.",
      "70°",
      "70°",
      "The angles sum to 180°: 180° − 50° − 60° = 70°.",
      "Сумма углов равна 180°: 180° − 50° − 60° = 70°.",
    ),
    prob(
      "g4", "medium",
      "Find the volume of a cylinder with radius 2 and height 5.",
      "Найдите объём цилиндра с радиусом 2 и высотой 5.",
      "V = 20π ≈ 62.83",
      "V = 20π ≈ 62,83",
      "V = πr²h = π·4·5 = 20π.",
      "V = πr²h = π·4·5 = 20π.",
    ),
    prob(
      "g5", "hard",
      "An isosceles triangle has base 10 and equal sides 13. Find its area.",
      "Равнобедренный треугольник имеет основание 10 и боковые стороны 13. Найдите его площадь.",
      "S = 60",
      "S = 60",
      "The altitude to the base bisects it: half-base is 5. By Pythagoras, h² = 13² − 5² = 144, so h = 12. Area = ½·10·12 = 60.",
      "Высота к основанию делит его пополам: половина основания равна 5. По теореме Пифагора h² = 13² − 5² = 144, значит h = 12. Площадь = ½·10·12 = 60.",
    ),
  ],
};
