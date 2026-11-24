import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const functionalAnalysis: Section = {
  slug: "functional-analysis",
  title: { en: "Functional Analysis", ru: "Функциональный анализ" },
  tagline: {
    en: "Infinite-dimensional spaces and operators",
    ru: "Бесконечномерные пространства и операторы",
  },
  description: {
    en: "Functional analysis studies spaces of functions as geometric objects: Banach and Hilbert spaces, bounded operators, and spectra. It is the framework of quantum mechanics and modern PDE theory.",
    ru: "Функциональный анализ изучает пространства функций как геометрические объекты: банаховы и гильбертовы пространства, ограниченные операторы и спектры. Это каркас квантовой механики и современной теории УрЧП.",
  },
  topics: [
    topic("banach", "Normed and Banach Spaces", "Нормированные и банаховы пространства", [
      p(
        "A norm measures vector size; a Banach space is a normed space where every Cauchy sequence converges. C[0,1] with the sup norm and the Lᵖ spaces are central examples.",
        "Норма измеряет размер вектора; банахово пространство — нормированное пространство, где сходится каждая последовательность Коши. C[0,1] с sup-нормой и пространства Lᵖ — ключевые примеры.",
      ),
      formula(
        "\\|f\\|_\\infty = \\sup_{x} |f(x)|",
        "‖f‖∞ = sup |f(x)|",
        "Sup norm on C[0,1]",
        "Sup-норма на C[0,1]",
      ),
    ]),
    topic("hilbert", "Hilbert Spaces", "Гильбертовы пространства", [
      p(
        "A Hilbert space is a complete inner-product space — geometry with angles and orthogonality in infinite dimensions. Orthonormal bases give Fourier expansions and Parseval's identity.",
        "Гильбертово пространство — полное пространство со скалярным произведением: геометрия с углами и ортогональностью в бесконечной размерности. Ортонормированные базисы дают разложения Фурье и равенство Парсеваля.",
      ),
      formula(
        "\\|x\\|^2 = \\sum_n |\\langle x, e_n \\rangle|^2",
        "‖x‖² = Σ |⟨x, eₙ⟩|²",
        "Parseval's identity",
        "Равенство Парсеваля",
      ),
      note(
        "Every closed convex set in a Hilbert space has a unique nearest-point projection.",
        "У каждого замкнутого выпуклого множества в гильбертовом пространстве есть единственная проекция ближайшей точки.",
      ),
    ]),
    topic("operators", "Bounded Operators and Big Theorems", "Ограниченные операторы и основные теоремы", [
      p(
        "Linear operators between Banach spaces are continuous exactly when bounded. Three pillars: Hahn–Banach extends functionals, Banach–Steinhaus controls families, and the open mapping theorem makes bounded bijections isomorphisms.",
        "Линейные операторы между банаховыми пространствами непрерывны тогда и только тогда, когда ограничены. Три опоры: теорема Хана–Банаха продолжает функционалы, Банаха–Штейнгауза контролирует семейства, теорема об открытом отображении делает ограниченные биекции изоморфизмами.",
      ),
      formula(
        "\\|T\\| = \\sup_{\\|x\\| = 1} \\|Tx\\|",
        "‖T‖ = sup {‖Tx‖ : ‖x‖ = 1}",
        "Operator norm",
        "Операторная норма",
      ),
    ]),
    topic("spectral", "Spectral Theory", "Спектральная теория", [
      p(
        "The spectrum generalizes eigenvalues to infinite dimensions. Compact self-adjoint operators admit an orthonormal basis of eigenvectors — the spectral theorem behind quantum observables.",
        "Спектр обобщает собственные значения на бесконечную размерность. Компактные самосопряжённые операторы допускают ортонормированный базис из собственных векторов — спектральная теорема, стоящая за квантовыми наблюдаемыми.",
      ),
      formula(
        "Tx = \\sum_n \\lambda_n \\langle x, e_n \\rangle e_n",
        "Tx = Σ λₙ⟨x, eₙ⟩eₙ",
        "Spectral decomposition (compact self-adjoint T)",
        "Спектральное разложение (компактный самосопряжённый T)",
      ),
    ]),
  ],
  problems: [
    prob(
      "fa1", "easy",
      "Find the Euclidean norm of (3, 4).",
      "Найдите евклидову норму вектора (3, 4).",
      "5",
      "5",
      "‖(3,4)‖ = √(9 + 16) = 5.",
      "‖(3,4)‖ = √(9 + 16) = 5.",
    ),
    prob(
      "fa2", "easy",
      "Are (1, 0) and (0, 1) orthogonal in R²?",
      "Ортогональны ли (1, 0) и (0, 1) в R²?",
      "Yes — inner product is 0",
      "Да — скалярное произведение равно 0",
      "⟨(1,0), (0,1)⟩ = 1·0 + 0·1 = 0.",
      "⟨(1,0), (0,1)⟩ = 1·0 + 0·1 = 0.",
    ),
    prob(
      "fa3", "medium",
      "Is C[0,1] with the sup norm a Banach space?",
      "Является ли C[0,1] с sup-нормой банаховым пространством?",
      "Yes",
      "Да",
      "A uniform limit of continuous functions is continuous, so every Cauchy sequence converges inside the space.",
      "Равномерный предел непрерывных функций непрерывен, поэтому каждая последовательность Коши сходится внутри пространства.",
    ),
    prob(
      "fa4", "medium",
      "Verify Parseval's identity for x = (1, 2) with the standard basis of R².",
      "Проверьте равенство Парсеваля для x = (1, 2) со стандартным базисом R².",
      "‖x‖² = 5 = 1² + 2²",
      "‖x‖² = 5 = 1² + 2²",
      "Coefficients are 1 and 2; sum of squares is 5, equal to ‖x‖² = 1 + 4.",
      "Коэффициенты равны 1 и 2; сумма квадратов равна 5, что совпадает с ‖x‖² = 1 + 4.",
    ),
    prob(
      "fa5", "hard",
      "Find the operator norm of the matrix [[2, 0], [0, 3]] on R² with the Euclidean norm.",
      "Найдите операторную норму матрицы [[2, 0], [0, 3]] в R² с евклидовой нормой.",
      "3",
      "3",
      "For a diagonal matrix the norm is the largest absolute diagonal entry: max(2, 3) = 3, attained at (0, 1).",
      "Для диагональной матрицы норма — наибольший по модулю диагональный элемент: max(2, 3) = 3, достигается на (0, 1).",
    ),
  ],
};
