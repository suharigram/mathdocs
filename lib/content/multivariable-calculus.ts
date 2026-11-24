import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const multivariableCalculus: Section = {
  slug: "multivariable-calculus",
  title: { en: "Multivariable Calculus", ru: "Многомерный анализ" },
  tagline: {
    en: "Functions of several variables",
    ru: "Функции нескольких переменных",
  },
  description: {
    en: "Multivariable calculus extends limits, derivatives, and integrals to functions of several variables: partial derivatives, gradients, multiple integrals, and changes of coordinates.",
    ru: "Многомерный анализ переносит пределы, производные и интегралы на функции нескольких переменных: частные производные, градиенты, кратные интегралы и замены координат.",
  },
  topics: [
    topic("partial-derivatives", "Partial Derivatives", "Частные производные", [
      p(
        "A partial derivative differentiates with respect to one variable while holding the others fixed. For smooth functions, mixed partials are equal (Clairaut's theorem).",
        "Частная производная дифференцирует по одной переменной при фиксированных остальных. Для гладких функций смешанные производные равны (теорема Клеро).",
      ),
      formula(
        "f_x = \\frac{\\partial f}{\\partial x}, \\qquad f_{xy} = f_{yx}",
        "fₓ = ∂f/∂x;   fₓᵧ = fᵧₓ",
      ),
    ]),
    topic("gradient", "Gradient and Directional Derivatives", "Градиент и производная по направлению", [
      p(
        "The gradient collects all partial derivatives into a vector pointing in the direction of steepest ascent. The directional derivative is its dot product with a unit direction.",
        "Градиент собирает все частные производные в вектор, указывающий направление наибыстрейшего роста. Производная по направлению — его скалярное произведение с единичным направлением.",
      ),
      formula(
        "\\nabla f = (f_x, f_y, f_z), \\qquad D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}",
        "∇f = (fₓ, fᵧ, f_z);   Dᵤf = ∇f·u",
      ),
      formula(
        "z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)",
        "z = f(a,b) + fₓ(a,b)(x − a) + fᵧ(a,b)(y − b)",
        "Tangent plane at (a, b)",
        "Касательная плоскость в точке (a, b)",
      ),
    ]),
    topic("multiple-integrals", "Multiple Integrals", "Кратные интегралы", [
      p(
        "Double and triple integrals accumulate quantities over areas and volumes. They are computed as iterated integrals; in polar coordinates the area element gains a factor r.",
        "Двойные и тройные интегралы накапливают величины по площадям и объёмам. Вычисляются как повторные интегралы; в полярных координатах элемент площади получает множитель r.",
      ),
      formula(
        "\\iint_R f\\,dA = \\int_a^b\\!\\int_{g_1(x)}^{g_2(x)} f(x,y)\\,dy\\,dx",
        "∬ f dA = ∫ₐᵇ ∫ f(x,y) dy dx",
      ),
      formula(
        "dA = r\\,dr\\,d\\theta \\quad \\text{(polar)}",
        "dA = r dr dθ   (полярные координаты)",
      ),
    ]),
    topic("change-variables", "Change of Variables and the Jacobian", "Замена переменных и якобиан", [
      p(
        "Substituting new coordinates multiplies the area element by the absolute Jacobian determinant — the local scaling factor of the transformation.",
        "Замена координат умножает элемент площади на модуль определителя Якоби — локальный коэффициент растяжения преобразования.",
      ),
      formula(
        "J = \\det\\frac{\\partial(x,y)}{\\partial(u,v)}, \\qquad \\iint f\\,dx\\,dy = \\iint f\\,|J|\\,du\\,dv",
        "J = det ∂(x,y)/∂(u,v);   ∬ f dx dy = ∬ f·|J| du dv",
      ),
      note(
        "For polar coordinates x = r cos θ, y = r sin θ, the Jacobian is exactly r.",
        "Для полярных координат x = r cos θ, y = r sin θ якобиан равен r.",
      ),
    ]),
  ],
  problems: [
    prob(
      "mv1", "easy",
      "For f(x, y) = x²y + y³, find ∂f/∂x.",
      "Для f(x, y) = x²y + y³ найдите ∂f/∂x.",
      "2xy",
      "2xy",
      "Treat y as constant: ∂/∂x (x²y) = 2xy, and y³ vanishes.",
      "Считаем y константой: ∂/∂x (x²y) = 2xy, а y³ исчезает.",
    ),
    prob(
      "mv2", "easy",
      "Find ∇f at (1, 2) for f(x, y) = x² + y².",
      "Найдите ∇f в точке (1, 2) для f(x, y) = x² + y².",
      "(2, 4)",
      "(2, 4)",
      "∇f = (2x, 2y); at (1, 2) this is (2, 4).",
      "∇f = (2x, 2y); в точке (1, 2) это (2, 4).",
    ),
    prob(
      "mv3", "medium",
      "Evaluate ∬ xy dA over the rectangle [0,1] × [0,2].",
      "Вычислите ∬ xy dA по прямоугольнику [0,1] × [0,2].",
      "1",
      "1",
      "The integral separates: (∫₀¹ x dx)(∫₀² y dy) = (1/2)·2 = 1.",
      "Интеграл разделяется: (∫₀¹ x dx)(∫₀² y dy) = (1/2)·2 = 1.",
    ),
    prob(
      "mv4", "medium",
      "Find the directional derivative of f = x² + y² at (1,1) in direction (3/5, 4/5).",
      "Найдите производную f = x² + y² в точке (1,1) по направлению (3/5, 4/5).",
      "14/5",
      "14/5",
      "∇f(1,1) = (2,2). Dot with the unit vector: 2·(3/5) + 2·(4/5) = 14/5.",
      "∇f(1,1) = (2,2). Скалярное произведение с единичным вектором: 2·(3/5) + 2·(4/5) = 14/5.",
    ),
    prob(
      "mv5", "hard",
      "Compute the area of the unit disk using a polar double integral.",
      "Вычислите площадь единичного круга двойным интегралом в полярных координатах.",
      "π",
      "π",
      "S = ∫₀^{2π}∫₀¹ r dr dθ = 2π·(1/2) = π.",
      "S = ∫₀^{2π}∫₀¹ r dr dθ = 2π·(1/2) = π.",
    ),
  ],
};
