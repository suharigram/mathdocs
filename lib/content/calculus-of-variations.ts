import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const calculusOfVariations: Section = {
  slug: "calculus-of-variations",
  title: { en: "Calculus of Variations", ru: "Вариационное исчисление" },
  tagline: {
    en: "Optimizing over functions, not numbers",
    ru: "Оптимизация по функциям, а не по числам",
  },
  description: {
    en: "The calculus of variations finds functions that minimize functionals — integrals depending on a whole curve. The Euler–Lagrange equation is its central tool; classical problems include shortest paths, the brachistochrone, and the shapes of soap films.",
    ru: "Вариационное исчисление находит функции, минимизирующие функционалы — интегралы, зависящие от целой кривой. Уравнение Эйлера–Лагранжа — его главный инструмент; классические задачи: кратчайшие пути, брахистохрона и формы мыльных плёнок.",
  },
  topics: [
    topic("euler-lagrange", "Functionals and Euler–Lagrange", "Функционалы и уравнение Эйлера–Лагранжа", [
      p(
        "A functional J[y] = ∫L(x, y, y′)dx assigns a number to each curve. A minimizing curve satisfies the Euler–Lagrange equation — the infinite-dimensional analogue of f′ = 0.",
        "Функционал J[y] = ∫L(x, y, y′)dx сопоставляет каждой кривой число. Минимизирующая кривая удовлетворяет уравнению Эйлера–Лагранжа — бесконечномерному аналогу f′ = 0.",
      ),
      formula(
        "\\frac{\\partial L}{\\partial y} - \\frac{d}{dx}\\frac{\\partial L}{\\partial y'} = 0",
        "∂L/∂y − d/dx(∂L/∂y′) = 0",
        "Euler–Lagrange equation",
        "Уравнение Эйлера–Лагранжа",
      ),
    ]),
    topic("classics", "Classic Problems", "Классические задачи", [
      p(
        "Shortest path between points: L = √(1 + y′²) gives straight lines. The brachistochrone — fastest slide under gravity — is a cycloid, not a straight line. Geodesics generalize shortest paths to curved surfaces.",
        "Кратчайший путь между точками: L = √(1 + y′²) даёт прямые. Брахистохрона — быстрейший спуск под действием тяжести — циклоида, а не прямая. Геодезические обобщают кратчайшие пути на искривлённые поверхности.",
      ),
      list(
        ["Shortest path → straight line", "Кратчайший путь → прямая"],
        ["Brachistochrone → cycloid", "Брахистохрона → циклоида"],
        ["Minimal surface of revolution → catenary", "Минимальная поверхность вращения → цепная линия"],
      ),
    ]),
    topic("noether", "Constraints and Noether's Theorem", "Ограничения и теорема Нётер", [
      p(
        "Isoperimetric constraints (fixed length, fixed area) are handled with Lagrange multipliers inside L. Noether's theorem: every continuous symmetry of the action yields a conserved quantity — time shifts give energy, rotations give angular momentum.",
        "Изопериметрические ограничения (фиксированная длина, площадь) учитываются множителями Лагранжа внутри L. Теорема Нётер: каждая непрерывная симметрия действия даёт сохраняющуюся величину — сдвиг времени даёт энергию, вращение — момент импульса.",
      ),
      formula(
        "\\text{symmetry of } L \\;\\Rightarrow\\; \\text{conserved quantity}",
        "симметрия L  ⇒  сохраняющаяся величина",
        "Noether's theorem (schematic)",
        "Теорема Нётер (схематично)",
      ),
      note(
        "This is why physics writes laws as variational principles: least action unifies mechanics, optics, and field theory.",
        "Поэтому физика записывает законы как вариационные принципы: наименьшее действие объединяет механику, оптику и теорию поля.",
      ),
    ]),
  ],
  problems: [
    prob(
      "cv1", "easy",
      "Apply Euler–Lagrange to L = (y′)². What are the extremals?",
      "Примените уравнение Эйлера–Лагранжа к L = (y′)². Каковы экстремали?",
      "Straight lines (y″ = 0)",
      "Прямые (y″ = 0)",
      "∂L/∂y = 0, ∂L/∂y′ = 2y′, so d/dx(2y′) = 0 ⇒ y″ = 0.",
      "∂L/∂y = 0, ∂L/∂y′ = 2y′, значит d/dx(2y′) = 0 ⇒ y″ = 0.",
    ),
    prob(
      "cv2", "easy",
      "Derive the Euler–Lagrange equation for L = y² + (y′)².",
      "Выведите уравнение Эйлера–Лагранжа для L = y² + (y′)².",
      "y″ = y",
      "y″ = y",
      "∂L/∂y = 2y, ∂L/∂y′ = 2y′: 2y − 2y″ = 0 ⇒ y″ = y.",
      "∂L/∂y = 2y, ∂L/∂y′ = 2y′: 2y − 2y″ = 0 ⇒ y″ = y.",
    ),
    prob(
      "cv3", "medium",
      "What curve solves the brachistochrone problem?",
      "Какая кривая решает задачу о брахистохроне?",
      "A cycloid",
      "Циклоида",
      "The curve traced by a point on a rolling circle minimizes descent time under gravity (Johann Bernoulli, 1696).",
      "Кривая, которую чертит точка катящейся окружности, минимизирует время спуска под действием тяжести (Иоганн Бернулли, 1696).",
    ),
    prob(
      "cv4", "medium",
      "Among all closed curves of fixed perimeter, which encloses the most area?",
      "Среди всех замкнутых кривых фиксированного периметра какая ограничивает наибольшую площадь?",
      "The circle",
      "Окружность",
      "The isoperimetric inequality: 4πA ≤ L², with equality only for the circle.",
      "Изопериметрическое неравенство: 4πA ≤ L², равенство только для окружности.",
    ),
    prob(
      "cv5", "hard",
      "By Noether's theorem, what conserved quantity corresponds to time-translation symmetry of the Lagrangian?",
      "Какая сохраняющаяся величина по теореме Нётер соответствует симметрии лагранжиана относительно сдвига времени?",
      "Energy",
      "Энергия",
      "If L has no explicit time dependence, the Hamiltonian (energy) E = y′·∂L/∂y′ − L is conserved along extremals.",
      "Если L явно не зависит от времени, гамильтониан (энергия) E = y′·∂L/∂y′ − L сохраняется вдоль экстремалей.",
    ),
  ],
};
