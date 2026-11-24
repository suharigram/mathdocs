import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const differentialGeometry: Section = {
  slug: "differential-geometry",
  title: { en: "Differential Geometry", ru: "Дифференциальная геометрия" },
  tagline: {
    en: "Curves, surfaces, and curvature",
    ru: "Кривые, поверхности и кривизна",
  },
  description: {
    en: "Differential geometry applies calculus to curved shapes: arc length and curvature of curves, metrics and curvature of surfaces. Its crowning result, Gauss–Bonnet, ties local geometry to global topology; it is the language of general relativity.",
    ru: "Дифференциальная геометрия применяет анализ к искривлённым формам: длина дуги и кривизна кривых, метрика и кривизна поверхностей. Её венец — теорема Гаусса–Бонне, связывающая локальную геометрию с глобальной топологией; это язык общей теории относительности.",
  },
  topics: [
    topic("curves", "Curves and the Frenet Frame", "Кривые и репер Френе", [
      p(
        "A regular curve r(t) has arc length ∫|r′|dt. Curvature measures how fast the unit tangent turns; the Frenet frame (tangent, normal, binormal) moves along the curve.",
        "Регулярная кривая r(t) имеет длину дуги ∫|r′|dt. Кривизна измеряет скорость поворота единичной касательной; репер Френе (касательная, нормаль, бинормаль) движется вдоль кривой.",
      ),
      formula(
        "s = \\int |\\mathbf{r}'(t)|\\,dt, \\qquad \\kappa = \\frac{|\\mathbf{r}' \\times \\mathbf{r}''|}{|\\mathbf{r}'|^3}",
        "s = ∫ |r′(t)| dt;   κ = |r′ × r″| / |r′|³",
      ),
    ]),
    topic("surfaces", "Surfaces and the First Fundamental Form", "Поверхности и первая квадратичная форма", [
      p(
        "A parametrized surface r(u,v) inherits a metric from space: the first fundamental form E du² + 2F du dv + G dv² measures lengths, angles, and area intrinsically.",
        "Параметризованная поверхность r(u,v) наследует метрику из пространства: первая квадратичная форма E du² + 2F du dv + G dv² измеряет длины, углы и площадь внутренним образом.",
      ),
      formula(
        "ds^2 = E\\,du^2 + 2F\\,du\\,dv + G\\,dv^2, \\qquad dA = \\sqrt{EG - F^2}\\,du\\,dv",
        "ds² = E du² + 2F du dv + G dv²;   dA = √(EG − F²) du dv",
      ),
    ]),
    topic("gaussian-curvature", "Gaussian Curvature", "Гауссова кривизна", [
      p(
        "The principal curvatures κ₁, κ₂ are extreme normal curvatures; their product K is Gaussian curvature. Gauss's Theorema Egregium: K is intrinsic — a flat map cannot preserve it, which is why every map projection distorts.",
        "Главные кривизны κ₁, κ₂ — экстремальные нормальные кривизны; их произведение K — гауссова кривизна. Theorema Egregium Гаусса: K внутренняя — плоская карта не может её сохранить, поэтому любая проекция искажает.",
      ),
      formula(
        "K = \\kappa_1 \\kappa_2; \\quad K_{\\text{sphere}} = \\frac{1}{R^2}, \\quad K_{\\text{plane}} = 0",
        "K = κ₁κ₂;   K(сферы) = 1/R²;   K(плоскости) = 0",
      ),
      note(
        "Saddle points have K < 0; cylinders have K = 0 (one principal curvature vanishes) — that is why a sheet of paper rolls but cannot wrap a ball.",
        "В седловых точках K < 0; у цилиндра K = 0 (одна главная кривизна нулевая) — поэтому лист бумаги сворачивается в трубку, но не облегает шар.",
      ),
    ]),
    topic("gauss-bonnet", "The Gauss–Bonnet Theorem", "Теорема Гаусса–Бонне", [
      p(
        "Total Gaussian curvature plus boundary geodesic curvature equals 2π times the Euler characteristic. A sphere's total curvature is 4π no matter how it is bent.",
        "Полная гауссова кривизна плюс геодезическая кривизна границы равны 2π, умноженным на эйлерову характеристику. Полная кривизна сферы равна 4π, как бы её ни гнули.",
      ),
      formula(
        "\\iint_M K\\,dA + \\oint_{\\partial M} \\kappa_g\\,ds = 2\\pi\\,\\chi(M)",
        "∬ K dA + ∮ κ_g ds = 2π·χ(M)",
      ),
    ]),
  ],
  problems: [
    prob(
      "dg1", "easy",
      "Find the length of a circle of radius R.",
      "Найдите длину окружности радиуса R.",
      "2πR",
      "2πR",
      "Parametrize r(t) = (R cos t, R sin t), |r′| = R; integrate over [0, 2π]: 2πR.",
      "Параметризуем r(t) = (R cos t, R sin t), |r′| = R; интегрируем по [0, 2π]: 2πR.",
    ),
    prob(
      "dg2", "easy",
      "What is the curvature of a straight line?",
      "Чему равна кривизна прямой?",
      "0",
      "0",
      "The tangent never turns: r″ = 0, so κ = 0.",
      "Касательная не поворачивается: r″ = 0, значит κ = 0.",
    ),
    prob(
      "dg3", "medium",
      "Find the curvature of a circle of radius R.",
      "Найдите кривизну окружности радиуса R.",
      "1/R",
      "1/R",
      "For r(t) = (R cos t, R sin t): |r′| = R, |r′ × r″| = R², so κ = R²/R³ = 1/R.",
      "Для r(t) = (R cos t, R sin t): |r′| = R, |r′ × r″| = R², значит κ = R²/R³ = 1/R.",
    ),
    prob(
      "dg4", "medium",
      "What is the Gaussian curvature of a sphere of radius 2?",
      "Чему равна гауссова кривизна сферы радиуса 2?",
      "1/4",
      "1/4",
      "Both principal curvatures equal 1/R = 1/2, so K = (1/2)² = 1/4.",
      "Обе главные кривизны равны 1/R = 1/2, значит K = (1/2)² = 1/4.",
    ),
    prob(
      "dg5", "hard",
      "Use Gauss–Bonnet to find the total curvature of the unit sphere and its Euler characteristic.",
      "Используя теорему Гаусса–Бонне, найдите полную кривизну единичной сферы и её эйлерову характеристику.",
      "Total curvature 4π; χ = 2",
      "Полная кривизна 4π; χ = 2",
      "K = 1 everywhere, area 4π, so ∫K dA = 4π = 2πχ, giving χ = 2. No boundary term for a closed surface.",
      "K = 1 всюду, площадь 4π, значит ∫K dA = 4π = 2πχ, откуда χ = 2. У замкнутой поверхности граничного члена нет.",
    ),
  ],
};
