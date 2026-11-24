import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const informationTheory: Section = {
  slug: "information-theory",
  title: { en: "Information Theory", ru: "Теория информации" },
  tagline: {
    en: "Entropy, coding, and channel limits",
    ru: "Энтропия, кодирование и пределы каналов",
  },
  description: {
    en: "Shannon's information theory quantifies information in bits: entropy measures uncertainty, mutual information measures dependence, and coding theorems set the fundamental limits of compression and reliable communication.",
    ru: "Теория информации Шеннона измеряет информацию в битах: энтропия измеряет неопределённость, взаимная информация — зависимость, а теоремы кодирования задают фундаментальные пределы сжатия и надёжной связи.",
  },
  topics: [
    topic("entropy", "Entropy", "Энтропия", [
      p(
        "Entropy H(X) is the average surprise of a source, measured in bits with log base 2. It is maximal for the uniform distribution and zero for a deterministic one.",
        "Энтропия H(X) — средняя «неожиданность» источника, в битах при логарифме по основанию 2. Максимальна для равномерного распределения и нулевая для детерминированного.",
      ),
      formula(
        "H(X) = -\\sum_i p_i \\log_2 p_i, \\qquad 0 \\le H(X) \\le \\log_2 n",
        "H(X) = −Σ pᵢ·log₂pᵢ;   0 ≤ H(X) ≤ log₂n",
      ),
    ]),
    topic("mutual-information", "Mutual Information and Divergence", "Взаимная информация и дивергенция", [
      p(
        "Mutual information I(X;Y) is the uncertainty removed about X by knowing Y. Kullback–Leibler divergence measures how one distribution differs from another; it is nonnegative but not symmetric.",
        "Взаимная информация I(X;Y) — неопределённость об X, снимаемая знанием Y. Дивергенция Кульбака–Лейблера измеряет отличие одного распределения от другого; она неотрицательна, но не симметрична.",
      ),
      formula(
        "I(X;Y) = H(X) - H(X \\mid Y), \\qquad D_{KL}(p\\|q) = \\sum p_i \\log\\frac{p_i}{q_i} \\ge 0",
        "I(X;Y) = H(X) − H(X|Y);   D(p‖q) = Σ pᵢ·log(pᵢ/qᵢ) ≥ 0",
      ),
    ]),
    topic("source-coding", "Source Coding", "Кодирование источника", [
      p(
        "Shannon's source coding theorem: no lossless code beats the entropy on average. Huffman's greedy algorithm builds an optimal prefix code; typical sequences explain why compression works.",
        "Теорема Шеннона о кодировании источника: ни один код без потерь не обходит энтропию в среднем. Жадный алгоритм Хаффмана строит оптимальный префиксный код; типичные последовательности объясняют, почему сжатие работает.",
      ),
      formula(
        "\\bar{L} \\ge H(X), \\qquad \\bar{L} < H(X) + 1 \\text{ (Huffman)}",
        "L̄ ≥ H(X);   L̄ < H(X) + 1   (Хаффман)",
      ),
    ]),
    topic("channels", "Channel Capacity", "Пропускная способность канала", [
      p(
        "Capacity C is the maximum mutual information over input distributions. For a binary symmetric channel with crossover probability p, C = 1 − H(p). Below capacity, arbitrarily reliable communication is possible.",
        "Пропускная способность C — максимум взаимной информации по входным распределениям. Для двоичного симметричного канала с вероятностью ошибки p: C = 1 − H(p). Ниже C возможна сколь угодно надёжная связь.",
      ),
      formula(
        "C = \\max_{p(x)} I(X;Y), \\qquad C_{BSC} = 1 - H(p)",
        "C = max I(X;Y);   C(ДСК) = 1 − H(p)",
      ),
      note(
        "At p = 1/2 the channel is pure noise: capacity 0. At p = 0 it is perfect: capacity 1 bit per use.",
        "При p = 1/2 канал — чистый шум: ёмкость 0. При p = 0 он идеален: 1 бит за использование.",
      ),
    ]),
    topic("differential-entropy", "Differential Entropy and Continuous Sources", "Дифференциальная энтропия и непрерывные источники", [
      p(
        "For densities, h(X) = −∫f log f replaces sums by integrals. Unlike discrete entropy it can be negative and depends on units; the Gaussian maximizes it at fixed variance.",
        "Для плотностей h(X) = −∫f log f заменяет суммы интегралами. В отличие от дискретной энтропии она может быть отрицательной и зависит от единиц; гауссиана максимизирует её при фиксированной дисперсии.",
      ),
      formula(
        "h(X) = -\\int f(x)\\log f(x)\\,dx, \\qquad h(N(\\mu,\\sigma^2)) = \\tfrac{1}{2}\\log(2\\pi e\\sigma^2)",
        "h(X) = −∫ f(x)log f(x) dx;   h(N(μ,σ²)) = ½log(2πeσ²)",
      ),
    ]),
    topic("rate-distortion", "Rate–Distortion Theory", "Теория скорость–искажение", [
      p(
        "Lossy compression trades bits for error: R(D) is the minimum rate achieving distortion D. For a Gaussian source with squared error, R(D) = ½log(σ²/D) — the theoretical limit behind JPEG and MP3.",
        "Сжатие с потерями меняет биты на ошибку: R(D) — минимальная скорость при искажении D. Для гауссова источника с квадратичной ошибкой R(D) = ½log(σ²/D) — теоретический предел JPEG и MP3.",
      ),
      formula(
        "R(D) = \\min_{p(\\hat{x}|x):\\,E[d] \\le D} I(X;\\hat{X})",
        "R(D) = min I(X;X̂) при E[d] ≤ D",
      ),
    ]),
    topic("error-correcting", "Error-Correcting Codes", "Коды, исправляющие ошибки", [
      p(
        "Redundancy fights noise: Hamming codes correct single errors; Reed–Solomon codes protect CDs and QR codes; LDPC and polar codes approach Shannon capacity in 5G and deep-space links.",
        "Избыточность борется с шумом: коды Хэмминга исправляют одиночные ошибки; Рида–Соломона защищают CD и QR-коды; LDPC и полярные коды приближаются к ёмкости Шеннона в 5G и дальней космической связи.",
      ),
      formula(
        "d_{\\min} \\ge 2t + 1 \\;\\Rightarrow\\; \\text{corrects } t \\text{ errors}",
        "d(мин) ≥ 2t + 1  ⇒  исправляет t ошибок",
      ),
    ]),
    topic("kolmogorov", "Kolmogorov Complexity", "Колмогоровская сложность", [
      p(
        "The complexity of a string is the length of its shortest program. It is uncomputable, formalizes randomness (incompressible strings), and underlies the minimum description length principle.",
        "Сложность строки — длина её кратчайшей программы. Она невычислима, формализует случайность (несжимаемые строки) и лежит в основе принципа минимальной длины описания.",
      ),
      formula(
        "K(x) = \\min\\{|p| : U(p) = x\\}",
        "K(x) = min {|p| : U(p) = x}",
      ),
    ]),
  ],
  problems: [
    prob(
      "if1", "easy",
      "What is the entropy of a fair coin flip?",
      "Чему равна энтропия броска честной монеты?",
      "1 bit",
      "1 бит",
      "H = −(1/2)log₂(1/2) − (1/2)log₂(1/2) = 1.",
      "H = −(1/2)log₂(1/2) − (1/2)log₂(1/2) = 1.",
    ),
    prob(
      "if2", "easy",
      "Find the entropy of a fair six-sided die.",
      "Найдите энтропию честной шестигранной кости.",
      "log₂6 ≈ 2.585 bits",
      "log₂6 ≈ 2,585 бита",
      "Uniform over 6 outcomes: H = log₂6.",
      "Равномерно по 6 исходам: H = log₂6.",
    ),
    prob(
      "if3", "medium",
      "Compute H for probabilities (1/2, 1/4, 1/4).",
      "Вычислите H для вероятностей (1/2, 1/4, 1/4).",
      "1.5 bits",
      "1,5 бита",
      "H = (1/2)·1 + (1/4)·2 + (1/4)·2 = 0.5 + 0.5 + 0.5 = 1.5.",
      "H = (1/2)·1 + (1/4)·2 + (1/4)·2 = 0,5 + 0,5 + 0,5 = 1,5.",
    ),
    prob(
      "if4", "medium",
      "Build a Huffman code for probabilities (0.5, 0.25, 0.25). What are the codeword lengths?",
      "Постройте код Хаффмана для вероятностей (0,5; 0,25; 0,25). Каковы длины кодовых слов?",
      "1, 2, 2 (average 1.5 = H)",
      "1, 2, 2 (средняя 1,5 = H)",
      "Merge the two 0.25 symbols, then merge with 0.5: lengths 1, 2, 2; average 0.5·1 + 0.25·2 + 0.25·2 = 1.5, matching entropy.",
      "Объединяем два символа 0,25, затем с 0,5: длины 1, 2, 2; средняя 0,5·1 + 0,25·2 + 0,25·2 = 1,5, совпадает с энтропией.",
    ),
    prob(
      "if5", "hard",
      "What is the capacity of a binary symmetric channel with crossover probability 1/2? Why?",
      "Какова пропускная способность двоичного симметричного канала с вероятностью ошибки 1/2? Почему?",
      "0 — output is independent of input",
      "0 — выход не зависит от входа",
      "C = 1 − H(1/2) = 1 − 1 = 0: the output is a fair coin regardless of input, so no information passes.",
      "C = 1 − H(1/2) = 1 − 1 = 0: выход — честная монета независимо от входа, информация не проходит.",
    ),
  ],
};
