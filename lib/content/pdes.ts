import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const pdes: Section = {
  slug: "pdes",
  title: { en: "Partial Differential Equations", ru: "Уравнения в частных производных" },
  tagline: {
    en: "Heat, waves, and potentials",
    ru: "Тепло, волны и потенциалы",
  },
  description: {
    en: "PDEs involve unknown functions of several variables and their partial derivatives. The three classical equations — heat, wave, and Laplace — model diffusion, vibration, and equilibrium, and introduce the methods of separation of variables and Fourier analysis.",
    ru: "УрЧП содержат неизвестные функции нескольких переменных и их частные производные. Три классических уравнения — теплопроводности, волновое и Лапласа — моделируют диффузию, колебания и равновесие и вводят методы разделения переменных и анализа Фурье.",
  },
  topics: [
    topic("classification", "Classification of Second-Order PDEs", "Классификация уравнений второго порядка", [
      p(
        "For Auₓₓ + 2Buₓᵧ + Cuᵧᵧ + … = 0 the discriminant B² − AC decides the type: elliptic (equilibrium), parabolic (diffusion), hyperbolic (waves). Type dictates which data and methods apply.",
        "Для Auₓₓ + 2Buₓᵧ + Cuᵧᵧ + … = 0 дискриминант B² − AC определяет тип: эллиптический (равновесие), параболический (диффузия), гиперболический (волны). Тип диктует, какие данные и методы применимы.",
      ),
      list(
        ["Laplace uₓₓ + uᵧᵧ = 0: elliptic", "Лаплас uₓₓ + uᵧᵧ = 0: эллиптический"],
        ["Heat uₜ = uₓₓ: parabolic", "Теплопроводность uₜ = uₓₓ: параболический"],
        ["Wave uₜₜ = c²uₓₓ: hyperbolic", "Волновое uₜₜ = c²uₓₓ: гиперболический"],
      ),
    ]),
    topic("heat", "The Heat Equation", "Уравнение теплопроводности", [
      p(
        "uₜ = αuₓₓ smooths initial data instantly. Separation of variables u = X(x)T(t) produces eigenfunction expansions; on an interval with zero boundary values the solution is a decaying Fourier sine series.",
        "uₜ = αuₓₓ мгновенно сглаживает начальные данные. Разделение переменных u = X(x)T(t) даёт разложения по собственным функциям; на отрезке с нулевыми граничными значениями решение — затухающий синус-ряд Фурье.",
      ),
      formula(
        "u(x,t) = \\sum_{n=1}^{\\infty} b_n e^{-\\alpha n^2 t}\\sin nx",
        "u(x,t) = Σ bₙ·e^(−αn²t)·sin nx",
        "Dirichlet problem on [0, π]",
        "Задача Дирихле на [0, π]",
      ),
    ]),
    topic("wave", "The Wave Equation", "Волновое уравнение", [
      p(
        "uₜₜ = c²uₓₓ propagates disturbances at speed c without smoothing. d'Alembert's formula writes the solution as two traveling waves; energy is conserved.",
        "uₜₜ = c²uₓₓ переносит возмущения со скоростью c без сглаживания. Формула Даламбера записывает решение как две бегущие волны; энергия сохраняется.",
      ),
      formula(
        "u(x,t) = \\tfrac{1}{2}\\big[f(x-ct) + f(x+ct)\\big] + \\frac{1}{2c}\\int_{x-ct}^{x+ct} g(s)\\,ds",
        "u(x,t) = ½[f(x − ct) + f(x + ct)] + (1/2c)∫ g(s) ds",
        "d'Alembert's formula (initial data f, g)",
        "Формула Даламбера (начальные данные f, g)",
      ),
    ]),
    topic("laplace", "Laplace and Poisson Equations", "Уравнения Лапласа и Пуассона", [
      p(
        "Harmonic functions (Δu = 0) describe equilibrium potentials. They obey the mean value property and the maximum principle: extrema live on the boundary. Poisson's equation Δu = f adds sources.",
        "Гармонические функции (Δu = 0) описывают равновесные потенциалы. Они обладают свойством среднего и принципом максимума: экстремумы живут на границе. Уравнение Пуассона Δu = f добавляет источники.",
      ),
      formula(
        "\\Delta u = 0, \\qquad u(x_0) = \\text{average of } u \\text{ on any sphere around } x_0",
        "Δu = 0;   u(x₀) = среднее u по любой сфере вокруг x₀",
      ),
      note(
        "Boundary conditions come in three flavors: Dirichlet (value), Neumann (normal derivative), Robin (mixed).",
        "Граничные условия бывают трёх типов: Дирихле (значение), Неймана (нормальная производная), Робена (смешанное).",
      ),
    ]),
  ],
  problems: [
    prob(
      "pe1", "easy",
      "Classify uₓₓ + uᵧᵧ = 0.",
      "Классифицируйте уравнение uₓₓ + uᵧᵧ = 0.",
      "Elliptic (Laplace's equation)",
      "Эллиптический (уравнение Лапласа)",
      "A = C = 1, B = 0: B² − AC = −1 < 0, the elliptic case.",
      "A = C = 1, B = 0: B² − AC = −1 < 0, эллиптический случай.",
    ),
    prob(
      "pe2", "easy",
      "Does u(x,t) = e^(−t)·sin x solve uₜ = uₓₓ?",
      "Является ли u(x,t) = e^(−t)·sin x решением uₜ = uₓₓ?",
      "Yes",
      "Да",
      "uₜ = −e^(−t)sin x and uₓₓ = −e^(−t)sin x — equal.",
      "uₜ = −e^(−t)sin x и uₓₓ = −e^(−t)sin x — равны.",
    ),
    prob(
      "pe3", "medium",
      "Solve uₜₜ = 4uₓₓ with u(x,0) = f(x), uₜ(x,0) = 0.",
      "Решите uₜₜ = 4uₓₓ при u(x,0) = f(x), uₜ(x,0) = 0.",
      "u = ½[f(x − 2t) + f(x + 2t)]",
      "u = ½[f(x − 2t) + f(x + 2t)]",
      "c = 2; d'Alembert with zero initial velocity gives the average of two traveling copies of f.",
      "c = 2; Даламбер с нулевой начальной скоростью даёт среднее двух бегущих копий f.",
    ),
    prob(
      "pe4", "medium",
      "Is u(x,y) = x² − y² harmonic?",
      "Гармонична ли функция u(x,y) = x² − y²?",
      "Yes",
      "Да",
      "uₓₓ = 2, uᵧᵧ = −2, so Δu = 0 everywhere.",
      "uₓₓ = 2, uᵧᵧ = −2, значит Δu = 0 всюду.",
    ),
    prob(
      "pe5", "hard",
      "Solve uₜ = uₓₓ on [0,π] with u(0,t) = u(π,t) = 0 and u(x,0) = sin x.",
      "Решите uₜ = uₓₓ на [0,π] при u(0,t) = u(π,t) = 0 и u(x,0) = sin x.",
      "u(x,t) = e^(−t)·sin x",
      "u(x,t) = e^(−t)·sin x",
      "The initial data is already the n = 1 eigenfunction; its mode decays as e^(−n²t) = e^(−t).",
      "Начальные данные — уже собственная функция с n = 1; её мода затухает как e^(−n²t) = e^(−t).",
    ),
  ],
};
