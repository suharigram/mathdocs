import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const linearAlgebra: Section = {
  slug: "linear-algebra",
  title: { en: "Linear Algebra", ru: "Линейная алгебра" },
  tagline: {
    en: "Vectors, matrices, and linear systems",
    ru: "Векторы, матрицы и линейные системы",
  },
  description: {
    en: "Linear algebra studies vectors, matrices, and linear mappings. It powers computer graphics, data science, engineering, and quantum mechanics, and gives systematic methods for solving systems of linear equations.",
    ru: "Линейная алгебра изучает векторы, матрицы и линейные отображения. Она лежит в основе компьютерной графики, науки о данных, инженерии и квантовой механики и даёт систематические методы решения систем линейных уравнений.",
  },
  topics: [
    topic("vectors", "Vectors", "Векторы", [
      p(
        "A vector has magnitude and direction. In coordinates, vectors add componentwise; the dot product measures alignment and detects perpendicularity.",
        "Вектор имеет длину и направление. В координатах векторы складываются покомпонентно; скалярное произведение измеряет сонаправленность и позволяет проверять перпендикулярность.",
      ),
      formula(
        "\\|\\mathbf{v}\\| = \\sqrt{x^2 + y^2 + z^2}",
        "|v| = √(x² + y² + z²)",
        "Magnitude of a vector",
        "Длина вектора",
      ),
      formula(
        "\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3 = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta",
        "a·b = a₁b₁ + a₂b₂ + a₃b₃ = |a|·|b|·cos θ",
      ),
      note(
        "Two nonzero vectors are perpendicular exactly when their dot product is zero.",
        "Два ненулевых вектора перпендикулярны тогда и только тогда, когда их скалярное произведение равно нулю.",
      ),
    ]),
    topic("matrices", "Matrices and Determinants", "Матрицы и определители", [
      p(
        "A matrix is a rectangular array of numbers. Matrix multiplication combines rows of the first with columns of the second; it is associative but not commutative. The determinant of a 2×2 matrix detects invertibility.",
        "Матрица — прямоугольная таблица чисел. Умножение матриц сочетает строки первой со столбцами второй; оно ассоциативно, но не коммутативно. Определитель матрицы 2×2 показывает, обратима ли она.",
      ),
      formula(
        "\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc",
        "det [[a, b], [c, d]] = ad − bc",
      ),
      formula(
        "A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
        "A⁻¹ = 1/(ad − bc) · [[d, −b], [−c, a]]",
        "Inverse of a 2×2 matrix (when ad − bc ≠ 0)",
        "Обратная матрица 2×2 (при ad − bc ≠ 0)",
      ),
    ]),
    topic("systems", "Systems and Gaussian Elimination", "Системы и метод Гаусса", [
      p(
        "Any linear system can be written as Ax = b. Gaussian elimination uses row operations — swapping rows, scaling a row, adding a multiple of one row to another — to reach triangular form, then back-substitutes.",
        "Любую линейную систему можно записать как Ax = b. Метод Гаусса элементарными преобразованиями строк (перестановка, умножение на число, прибавление кратного другой строки) приводит систему к треугольному виду, затем выполняется обратная подстановка.",
      ),
      formula(
        "A\\mathbf{x} = \\mathbf{b} \\;\\Rightarrow\\; \\mathbf{x} = A^{-1}\\mathbf{b}",
        "Ax = b  ⇒  x = A⁻¹b",
        "Matrix form of a linear system",
        "Матричная форма линейной системы",
      ),
      list(
        ["det A ≠ 0: exactly one solution", "det A ≠ 0: ровно одно решение"],
        ["det A = 0: no solution or infinitely many", "det A = 0: решений нет или их бесконечно много"],
      ),
    ]),
    topic("eigen", "Eigenvalues and Eigenvectors", "Собственные значения и векторы", [
      p(
        "An eigenvector v of A is a nonzero vector whose direction is preserved by A: Av = λv. The scalar λ is the corresponding eigenvalue, found from the characteristic equation.",
        "Собственный вектор v матрицы A — ненулевой вектор, направление которого A сохраняет: Av = λv. Число λ — соответствующее собственное значение; оно находится из характеристического уравнения.",
      ),
      formula(
        "A\\mathbf{v} = \\lambda\\mathbf{v}, \\qquad \\det(A - \\lambda I) = 0",
        "Av = λv;   det(A − λI) = 0",
      ),
      note(
        "For a 2×2 matrix, the eigenvalues satisfy λ² − (trace A)·λ + det A = 0.",
        "Для матрицы 2×2 собственные значения удовлетворяют уравнению λ² − (след A)·λ + det A = 0.",
      ),
    ]),
    topic("vector-spaces", "Vector Spaces and Linear Maps", "Векторные пространства и линейные отображения", [
      p(
        "A vector space is a set closed under addition and scalar multiplication. A basis is a linearly independent spanning set; its size is the dimension. Linear maps preserve both operations and are represented by matrices once bases are chosen.",
        "Векторное пространство — множество, замкнутое относительно сложения и умножения на скаляр. Базис — линейно независимая порождающая система; его размер — размерность. Линейные отображения сохраняют обе операции и представляются матрицами после выбора базисов.",
      ),
      formula(
        "\\dim V = \\dim\\ker T + \\dim\\mathrm{im}\\,T",
        "dim V = dim ker T + dim im T",
        "Rank–nullity theorem",
        "Теорема о ранге и дефекте",
      ),
    ]),
    topic("tensors", "Tensors and Bilinear Forms", "Тензоры и билинейные формы", [
      p(
        "Bilinear forms generalize the dot product; tensors are multilinear objects whose components transform by fixed rules under change of basis. They are the language of continuum mechanics and relativity.",
        "Билинейные формы обобщают скалярное произведение; тензоры — полилинейные объекты, компоненты которых преобразуются по фиксированным правилам при смене базиса. Это язык механики сплошных сред и теории относительности.",
      ),
      formula(
        "T'_{ij} = \\sum_{k,l} a_{ik} a_{jl} T_{kl}",
        "T′ᵢⱼ = Σ aᵢₖaⱼₗTₖₗ",
        "Transformation law of a rank-2 tensor",
        "Закон преобразования тензора ранга 2",
      ),
      note(
        "The metric tensor gᵢⱼ measures lengths and angles; in relativity it encodes gravity itself.",
        "Метрический тензор gᵢⱼ измеряет длины и углы; в теории относительности он кодирует саму гравитацию.",
      ),
    ]),
  ],
  problems: [
    prob(
      "l1", "easy",
      "Compute the dot product (1, 2, 3)·(4, −5, 6).",
      "Вычислите скалярное произведение (1, 2, 3)·(4, −5, 6).",
      "12",
      "12",
      "1·4 + 2·(−5) + 3·6 = 4 − 10 + 18 = 12.",
      "1·4 + 2·(−5) + 3·6 = 4 − 10 + 18 = 12.",
    ),
    prob(
      "l2", "easy",
      "Find the determinant of the matrix [[3, 2], [1, 4]].",
      "Найдите определитель матрицы [[3, 2], [1, 4]].",
      "10",
      "10",
      "det = 3·4 − 2·1 = 12 − 2 = 10.",
      "det = 3·4 − 2·1 = 12 − 2 = 10.",
    ),
    prob(
      "l3", "medium",
      "Find the magnitude of the vector (3, 4, 12).",
      "Найдите длину вектора (3, 4, 12).",
      "13",
      "13",
      "|v| = √(9 + 16 + 144) = √169 = 13.",
      "|v| = √(9 + 16 + 144) = √169 = 13.",
    ),
    prob(
      "l4", "medium",
      "Solve the system: 2x + y = 5 and x − y = 1.",
      "Решите систему: 2x + y = 5 и x − y = 1.",
      "x = 2, y = 1",
      "x = 2, y = 1",
      "Add the equations: 3x = 6, so x = 2. Then y = x − 1 = 1.",
      "Сложим уравнения: 3x = 6, откуда x = 2. Тогда y = x − 1 = 1.",
    ),
    prob(
      "l5", "hard",
      "Find the eigenvalues of the matrix [[2, 1], [1, 2]].",
      "Найдите собственные значения матрицы [[2, 1], [1, 2]].",
      "λ = 3 and λ = 1",
      "λ = 3 и λ = 1",
      "det(A − λI) = (2 − λ)² − 1 = 0, so 2 − λ = ±1, giving λ = 3 or λ = 1. Eigenvectors: (1, 1) for λ = 3 and (1, −1) for λ = 1.",
      "det(A − λI) = (2 − λ)² − 1 = 0, значит 2 − λ = ±1, откуда λ = 3 или λ = 1. Собственные векторы: (1, 1) для λ = 3 и (1, −1) для λ = 1.",
    ),
    prob(
      "l6", "medium",
      "What is the dimension of the vector space of all 2×2 real matrices?",
      "Какова размерность пространства всех вещественных матриц 2×2?",
      "4",
      "4",
      "The four matrix units E₁₁, E₁₂, E₂₁, E₂₂ form a basis; each entry is a free parameter.",
      "Четыре матричные единицы E₁₁, E₁₂, E₂₁, E₂₂ образуют базис; каждый элемент — свободный параметр.",
    ),
  ],
};
