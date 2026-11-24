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
    topic("analytic-geometry", "Analytic Geometry", "Аналитическая геометрия", [
      p(
        "Coordinates turn geometry into algebra. Distance and midpoint follow from Pythagoras; lines are linear equations; conic sections are quadratic curves — circles, ellipses, parabolas, hyperbolas.",
        "Координаты превращают геометрию в алгебру. Расстояние и середина следуют из теоремы Пифагора; прямые — линейные уравнения; конические сечения — квадратичные кривые: окружности, эллипсы, параболы, гиперболы.",
      ),
      formula(
        "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}, \\qquad M = \\Big(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\Big)",
        "d = √((x₂ − x₁)² + (y₂ − y₁)²);   M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
      ),
      formula(
        "y = kx + b, \\qquad (x-a)^2 + (y-b)^2 = r^2",
        "y = kx + b;   (x − a)² + (y − b)² = r²",
        "Line (slope k) and circle (center (a,b), radius r)",
        "Прямая (угловой коэффициент k) и окружность (центр (a,b), радиус r)",
      ),
      list(
        ["Ellipse: x²/a² + y²/b² = 1", "Эллипс: x²/a² + y²/b² = 1"],
        ["Hyperbola: x²/a² − y²/b² = 1", "Гипербола: x²/a² − y²/b² = 1"],
        ["Parabola: y = ax² (focus-directrix property)", "Парабола: y = ax² (свойство фокуса и директрисы)"],
      ),
    ]),
    topic("lines-angles", "Lines and Angles", "Прямые и углы", [
      p(
        "Complementary angles sum to 90°, supplementary to 180°. Vertical angles are equal. A transversal across parallel lines creates equal corresponding and alternate angles.",
        "Дополнительные углы дают 90°, смежные — 180°. Вертикальные углы равны. Секущая параллельных прямых создаёт равные соответственные и накрест лежащие углы.",
      ),
      list(
        ["Vertical angles: equal", "Вертикальные углы: равны"],
        ["Parallel lines: corresponding and alternate angles equal", "Параллельные прямые: соответственные и накрест лежащие равны"],
        ["Co-interior angles sum to 180°", "Односторонние углы дают 180°"],
      ),
    ]),
    topic("polygons-quadrilaterals", "Polygons and Quadrilaterals", "Многоугольники и четырёхугольники", [
      p(
        "An n-gon's interior angles sum to (n − 2)·180°. Parallelograms have equal opposite sides and angles; rectangles add right angles; rhombi add equal sides; squares have both. A trapezoid has one pair of parallel sides.",
        "Сумма внутренних углов n-угольника равна (n − 2)·180°. У параллелограмма противоположные стороны и углы равны; прямоугольник добавляет прямые углы; ромб — равные стороны; квадрат — и то и другое. У трапеции одна пара параллельных сторон.",
      ),
      formula(
        "S_{\\text{interior}} = (n - 2) \\cdot 180^\\circ",
        "Сумма углов = (n − 2)·180°",
      ),
    ]),
    topic("similarity-congruence", "Congruence and Similarity", "Равенство и подобие", [
      p(
        "Congruent figures match exactly (SSS, SAS, ASA criteria). Similar figures have equal angles and proportional sides (AA suffices for triangles). A scale factor k multiplies lengths by k and areas by k².",
        "Равные фигуры совпадают точно (признаки SSS, SAS, ASA). Подобные имеют равные углы и пропорциональные стороны (для треугольников достаточно AA). Коэффициент k умножает длины на k, площади — на k².",
      ),
      formula(
        "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = k, \\qquad \\frac{S_1}{S_2} = k^2",
        "a₁/a₂ = b₁/b₂ = k;   S₁/S₂ = k²",
      ),
    ]),
    topic("circle-theorems", "Circle Theorems", "Теоремы об окружности", [
      p(
        "An inscribed angle is half the central angle subtending the same arc; angles in a semicircle are right. A tangent is perpendicular to the radius at the contact point. Intersecting chords balance products of segments.",
        "Вписанный угол равен половине центрального, опирающегося на ту же дугу; угол, опирающийся на диаметр, прямой. Касательная перпендикулярна радиусу в точке касания. Пересекающиеся хорды балансируют произведения отрезков.",
      ),
      formula(
        "\\angle_{\\text{inscribed}} = \\tfrac{1}{2}\\,\\text{arc}, \\qquad PA \\cdot PB = PC \\cdot PD",
        "вписанный угол = ½·дуга;   PA·PB = PC·PD",
      ),
    ]),
    topic("transformations", "Transformations and Symmetry", "Преобразования и симметрия", [
      p(
        "Translations, rotations, and reflections are isometries — they preserve distances and angles. Dilations scale. A figure's symmetries form a group: an equilateral triangle has 6, a square 8.",
        "Параллельный перенос, поворот и отражение — изометрии: сохраняют расстояния и углы. Гомотетия масштабирует. Симметрии фигуры образуют группу: у равностороннего треугольника их 6, у квадрата 8.",
      ),
      note(
        "Composition of two reflections is a rotation (intersecting mirrors) or a translation (parallel mirrors).",
        "Композиция двух отражений — поворот (пересекающиеся зеркала) или перенос (параллельные зеркала).",
      ),
    ]),
    topic("constructions", "Geometric Constructions", "Геометрические построения", [
      p(
        "Compass and straightedge build bisectors, perpendiculars, and regular polygons from axioms. Some classical tasks are provably impossible: trisecting an arbitrary angle, doubling the cube, squaring the circle.",
        "Циркуль и линейка строят биссектрисы, перпендикуляры и правильные многоугольники из аксиом. Некоторые классические задачи доказуемо невозможны: трисекция произвольного угла, удвоение куба, квадратура круга.",
      ),
      note(
        "Impossibility follows from field theory: constructible numbers lie in towers of quadratic extensions (see Abstract Algebra).",
        "Невозможность следует из теории полей: построимые числа лежат в башнях квадратичных расширений (см. Абстрактную алгебру).",
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
    prob(
      "g6", "medium",
      "Find the distance between (1, 2) and (4, 6).",
      "Найдите расстояние между точками (1, 2) и (4, 6).",
      "5",
      "5",
      "d = √((4−1)² + (6−2)²) = √(9 + 16) = 5.",
      "d = √((4−1)² + (6−2)²) = √(9 + 16) = 5.",
    ),
  ],
};
