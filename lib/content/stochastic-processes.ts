import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const stochasticProcesses: Section = {
  slug: "stochastic-processes",
  title: { en: "Stochastic Processes", ru: "Случайные процессы" },
  tagline: {
    en: "Randomness evolving in time",
    ru: "Случайность, эволюционирующая во времени",
  },
  description: {
    en: "Stochastic processes model systems that evolve randomly: Markov chains forget the past, Poisson processes count arrivals, Brownian motion scales random walks, and martingales formalize fair games. They drive queueing, finance, and statistical physics.",
    ru: "Случайные процессы моделируют системы, эволюционирующие случайно: цепи Маркова забывают прошлое, процессы Пуассона считают поступления, броуновское движение масштабирует случайные блуждания, мартингалы формализуют честные игры. Они управляют очередями, финансами и статфизикой.",
  },
  topics: [
    topic("markov", "Markov Chains", "Цепи Маркова", [
      p(
        "A Markov chain jumps between states with probabilities depending only on the current state. The transition matrix P drives evolution; a stationary distribution satisfies πP = π.",
        "Цепь Маркова прыгает между состояниями с вероятностями, зависящими только от текущего состояния. Матрица переходов P управляет эволюцией; стационарное распределение удовлетворяет πP = π.",
      ),
      formula(
        "P(X_{n+1} = j \\mid X_n = i) = P_{ij}, \\qquad \\pi P = \\pi",
        "P(Xₙ₊₁ = j | Xₙ = i) = Pᵢⱼ;   πP = π",
      ),
    ]),
    topic("poisson", "Poisson Processes", "Процессы Пуассона", [
      p(
        "Events arrive independently at rate λ: N(t) ~ Poisson(λt), and waiting times are exponential with mean 1/λ. The model for calls, decays, and arrivals.",
        "События поступают независимо с интенсивностью λ: N(t) ~ Poisson(λt), времена ожидания экспоненциальны со средним 1/λ. Модель звонков, распадов и поступлений.",
      ),
      formula(
        "P(N(t) = k) = e^{-\\lambda t}\\frac{(\\lambda t)^k}{k!}",
        "P(N(t) = k) = e^(−λt)·(λt)ᵏ/k!",
      ),
    ]),
    topic("brownian", "Random Walks and Brownian Motion", "Случайные блуждания и броуновское движение", [
      p(
        "The simple symmetric walk steps ±1 with equal probability. Diffusive scaling (space by √n) converges to Brownian motion Bₜ: continuous paths, independent increments, Bₜ ~ N(0, t).",
        "Простое симметричное блуждание шагает ±1 с равной вероятностью. Диффузионное масштабирование (пространство на √n) сходится к броуновскому движению Bₜ: непрерывные траектории, независимые приращения, Bₜ ~ N(0, t).",
      ),
      formula(
        "E[B_t] = 0, \\qquad \\mathrm{Var}(B_t) = t",
        "E[Bₜ] = 0;   Var(Bₜ) = t",
      ),
    ]),
    topic("martingales", "Martingales", "Мартингалы", [
      p(
        "A martingale is a fair game: the conditional expectation of the next value equals the current one. The optional stopping theorem says you cannot beat a fair game with a stopping rule (under integrability conditions).",
        "Мартингал — честная игра: условное ожидание следующего значения равно текущему. Теорема об остановке говорит, что честную игру нельзя обыграть правилом остановки (при условиях интегрируемости).",
      ),
      formula(
        "E[X_{n+1} \\mid \\mathcal{F}_n] = X_n",
        "E[Xₙ₊₁ | Fₙ] = Xₙ",
      ),
      note(
        "Itô calculus extends differentiation to Brownian paths; it is the engine of mathematical finance.",
        "Исчисление Ито распространяет дифференцирование на броуновские траектории; это двигатель математических финансов.",
      ),
    ]),
    topic("birth-death-queues", "Birth–Death Processes and Queues", "Процессы гибели-размножения и очереди", [
      p(
        "Birth–death chains move only to neighboring states; detailed balance gives stationary laws. The M/M/1 queue has utilization ρ = λ/μ and mean queue length ρ/(1−ρ) — stability requires ρ < 1.",
        "Цепи гибели-размножения ходят только в соседние состояния; детальное равновесие даёт стационарные законы. Очередь M/M/1 имеет загрузку ρ = λ/μ и среднюю длину ρ/(1−ρ) — устойчивость требует ρ < 1.",
      ),
      formula(
        "L = \\frac{\\rho}{1 - \\rho}, \\qquad \\rho = \\lambda/\\mu",
        "L = ρ/(1 − ρ);   ρ = λ/μ",
        "M/M/1 mean number in system",
        "M/M/1: среднее число заявок в системе",
      ),
    ]),
    topic("renewal", "Renewal Processes", "Процессы восстановления", [
      p(
        "Renewal theory generalizes Poisson processes to arbitrary interarrival distributions. The elementary renewal theorem: N(t)/t → 1/mean; the inspection paradox explains why observed gaps look longer.",
        "Теория восстановления обобщает процессы Пуассона на произвольные распределения интервалов. Элементарная теорема: N(t)/t → 1/среднее; парадокс инспекции объясняет, почему наблюдаемые интервалы кажутся длиннее.",
      ),
      formula(
        "\\frac{N(t)}{t} \\to \\frac{1}{E[T]}",
        "N(t)/t → 1/E[T]",
      ),
    ]),
    topic("ito-sde", "Itô Calculus and SDEs", "Исчисление Ито и СДУ", [
      p(
        "Brownian paths have infinite variation, so ordinary calculus fails. Itô's lemma adds a second-order term: df(Bₜ) = f′dBₜ + ½f″dt. SDEs like dS = μS dt + σS dBₜ model noisy dynamics and underlie Black–Scholes.",
        "Броуновские траектории имеют бесконечную вариацию, поэтому обычное исчисление не работает. Лемма Ито добавляет член второго порядка: df(Bₜ) = f′dBₜ + ½f″dt. СДУ вида dS = μS dt + σS dBₜ моделируют шумную динамику и лежат в основе Блэка–Шоулза.",
      ),
      formula(
        "df(B_t) = f'(B_t)\\,dB_t + \\tfrac{1}{2}f''(B_t)\\,dt",
        "df(Bₜ) = f′(Bₜ)dBₜ + ½f″(Bₜ)dt",
        "Itô's lemma",
        "Лемма Ито",
      ),
    ]),
  ],
  problems: [
    prob(
      "sp1", "easy",
      "Find the stationary distribution of the two-state chain with P = [[0.5, 0.5], [0.5, 0.5]].",
      "Найдите стационарное распределение двухсостоянийной цепи с P = [[0,5; 0,5], [0,5; 0,5]].",
      "(0.5, 0.5)",
      "(0,5; 0,5)",
      "Every row is already (0.5, 0.5), so the uniform distribution is stationary.",
      "Каждая строка уже (0,5; 0,5), поэтому равномерное распределение стационарно.",
    ),
    prob(
      "sp2", "easy",
      "A Poisson process has rate λ = 3. Find E[N(2)].",
      "Процесс Пуассона имеет интенсивность λ = 3. Найдите E[N(2)].",
      "6",
      "6",
      "E[N(t)] = λt = 3·2 = 6.",
      "E[N(t)] = λt = 3·2 = 6.",
    ),
    prob(
      "sp3", "medium",
      "In a Poisson process with λ = 2, what is the mean waiting time between events?",
      "В процессе Пуассона с λ = 2 каково среднее время ожидания между событиями?",
      "0.5",
      "0,5",
      "Waiting times are Exp(λ) with mean 1/λ = 1/2.",
      "Времена ожидания ~ Exp(λ) со средним 1/λ = 1/2.",
    ),
    prob(
      "sp4", "medium",
      "A simple symmetric random walk starts at 0. What is the probability it is back at 0 after 2 steps?",
      "Простое симметричное блуждание стартует из 0. Какова вероятность вернуться в 0 через 2 шага?",
      "1/2",
      "1/2",
      "Paths: ++, +−, −+, −−. Two of four return to 0: probability 2/4 = 1/2.",
      "Пути: ++, +−, −+, −−. Два из четырёх возвращаются в 0: вероятность 2/4 = 1/2.",
    ),
    prob(
      "sp5", "hard",
      "Find the stationary distribution of P = [[0.9, 0.1], [0.5, 0.5]].",
      "Найдите стационарное распределение матрицы P = [[0,9; 0,1], [0,5; 0,5]].",
      "(5/6, 1/6)",
      "(5/6; 1/6)",
      "π₁ = 0.9π₁ + 0.5π₂ ⇒ 0.1π₁ = 0.5π₂ ⇒ π₁ = 5π₂. With π₁ + π₂ = 1: π₂ = 1/6, π₁ = 5/6.",
      "π₁ = 0,9π₁ + 0,5π₂ ⇒ 0,1π₁ = 0,5π₂ ⇒ π₁ = 5π₂. При π₁ + π₂ = 1: π₂ = 1/6, π₁ = 5/6.",
    ),
  ],
};
