import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const physics: Section = {
  slug: "physics",
  title: { en: "Physics", ru: "Физика" },
  tagline: {
    en: "Mathematics applied to the natural world",
    ru: "Математика, применённая к природе",
  },
  description: {
    en: "Physics uses mathematics to model motion, forces, energy, and fields. This section covers the core formulas of mechanics and electricity with the algebra and calculus tools you have already seen.",
    ru: "Физика использует математику для моделирования движения, сил, энергии и полей. Этот раздел охватывает основные формулы механики и электричества с уже знакомыми вам алгебраическими и аналитическими инструментами.",
  },
  topics: [
    topic("kinematics", "Kinematics", "Кинематика", [
      p(
        "Kinematics describes motion without asking about its causes. For constant acceleration, three equations connect position, velocity, acceleration, and time.",
        "Кинематика описывает движение, не задаваясь вопросом о его причинах. При постоянном ускорении три уравнения связывают координату, скорость, ускорение и время.",
      ),
      formula(
        "v = v_0 + at, \\qquad x = x_0 + v_0 t + \\tfrac{1}{2}at^2",
        "v = v₀ + at;   x = x₀ + v₀t + ½at²",
      ),
      formula(
        "v^2 = v_0^2 + 2a\\,\\Delta x",
        "v² = v₀² + 2a·Δx",
        "Time-free equation",
        "Уравнение без времени",
      ),
      note(
        "Free fall is constant acceleration with a = g ≈ 9.8 m/s² (often rounded to 10 m/s² in problems).",
        "Свободное падение — равноускоренное движение с a = g ≈ 9,8 м/с² (в задачах часто округляют до 10 м/с²).",
      ),
    ]),
    topic("newton", "Newton's Laws and Dynamics", "Законы Ньютона и динамика", [
      p(
        "Newton's second law links force to acceleration. Forces are vectors and add as vectors. Weight is the gravitational force mg; dry friction is proportional to the normal force.",
        "Второй закон Ньютона связывает силу с ускорением. Силы — векторы и складываются векторно. Вес — сила тяжести mg; сила трения скольжения пропорциональна силе нормальной реакции.",
      ),
      formula(
        "\\mathbf{F}_{\\text{net}} = m\\mathbf{a}",
        "F(равнодейств.) = m·a",
        "Newton's second law",
        "Второй закон Ньютона",
      ),
      formula(
        "W = mg, \\qquad f = \\mu N",
        "W = mg;   f = μN",
        "Weight and friction",
        "Вес и сила трения",
      ),
      list(
        ["First law: with zero net force, velocity stays constant", "Первый закон: при нулевой равнодействующей скорость постоянна"],
        ["Third law: forces come in equal and opposite pairs", "Третий закон: силы возникают равными по модулю и противоположными парами"],
      ),
    ]),
    topic("energy", "Work, Energy, and Power", "Работа, энергия и мощность", [
      p(
        "Work transfers energy when a force acts through a displacement. Kinetic energy belongs to motion, potential energy to position. With no friction, mechanical energy is conserved.",
        "Работа передаёт энергию, когда сила действует на перемещении. Кинетическая энергия принадлежит движению, потенциальная — положению. Без трения механическая энергия сохраняется.",
      ),
      formula(
        "W = Fd\\cos\\theta, \\qquad P = \\frac{W}{t}",
        "W = Fd·cos θ;   P = W/t",
      ),
      formula(
        "E_k = \\tfrac{1}{2}mv^2, \\qquad E_p = mgh",
        "Eₖ = ½mv²;   Eₚ = mgh",
        "Kinetic and gravitational potential energy",
        "Кинетическая и потенциальная энергия тяжести",
      ),
      formula(
        "E_k + E_p = \\text{const} \\quad \\text{(no friction)}",
        "Eₖ + Eₚ = const   (без трения)",
        "Conservation of mechanical energy",
        "Закон сохранения механической энергии",
      ),
    ]),
    topic("electricity", "Electricity and Magnetism", "Электричество и магнетизм", [
      p(
        "Coulomb's law gives the force between charges; Ohm's law relates voltage, current, and resistance. Resistors add directly in series and reciprocally in parallel.",
        "Закон Кулона даёт силу между зарядами; закон Ома связывает напряжение, ток и сопротивление. Резисторы складываются напрямую последовательно и обратно — параллельно.",
      ),
      formula(
        "F = k\\frac{q_1 q_2}{r^2}, \\qquad k \\approx 9 \\times 10^9 \\ \\text{N·m}^2/\\text{C}^2",
        "F = k·q₁q₂/r²;   k ≈ 9·10⁹ Н·м²/Кл²",
        "Coulomb's law",
        "Закон Кулона",
      ),
      formula(
        "V = IR, \\qquad P = IV = I^2R",
        "V = IR;   P = IV = I²R",
        "Ohm's law and electric power",
        "Закон Ома и электрическая мощность",
      ),
      formula(
        "R_{\\text{series}} = R_1 + R_2, \\qquad \\frac{1}{R_{\\text{parallel}}} = \\frac{1}{R_1} + \\frac{1}{R_2}",
        "R(посл.) = R₁ + R₂;   1/R(парал.) = 1/R₁ + 1/R₂",
      ),
    ]),
  ],
  problems: [
    prob(
      "f1", "easy",
      "A car speeds up from 0 to 20 m/s in 5 s. Find its acceleration.",
      "Автомобиль разгоняется с 0 до 20 м/с за 5 с. Найдите ускорение.",
      "a = 4 m/s²",
      "a = 4 м/с²",
      "a = Δv/Δt = (20 − 0)/5 = 4 m/s².",
      "a = Δv/Δt = (20 − 0)/5 = 4 м/с².",
    ),
    prob(
      "f2", "easy",
      "What net force accelerates a 10 kg mass at 2 m/s²?",
      "Какая равнодействующая сила сообщает массе 10 кг ускорение 2 м/с²?",
      "F = 20 N",
      "F = 20 Н",
      "Newton's second law: F = ma = 10·2 = 20 N.",
      "Второй закон Ньютона: F = ma = 10·2 = 20 Н.",
    ),
    prob(
      "f3", "medium",
      "Find the kinetic energy of a 2 kg object moving at 3 m/s.",
      "Найдите кинетическую энергию тела массой 2 кг, движущегося со скоростью 3 м/с.",
      "E = 9 J",
      "E = 9 Дж",
      "Eₖ = ½mv² = ½·2·9 = 9 J.",
      "Eₖ = ½mv² = ½·2·9 = 9 Дж.",
    ),
    prob(
      "f4", "medium",
      "A 4 Ω resistor is connected to a 12 V source. Find the current and the power dissipated.",
      "Резистор 4 Ом подключён к источнику 12 В. Найдите ток и выделяемую мощность.",
      "I = 3 A, P = 36 W",
      "I = 3 А, P = 36 Вт",
      "Ohm's law: I = V/R = 12/4 = 3 A. Power: P = IV = 3·12 = 36 W.",
      "Закон Ома: I = V/R = 12/4 = 3 А. Мощность: P = IV = 3·12 = 36 Вт.",
    ),
    prob(
      "f5", "hard",
      "A stone is dropped from 45 m. Taking g = 10 m/s², find the fall time and the impact speed.",
      "Камень падает с высоты 45 м. Принимая g = 10 м/с², найдите время падения и скорость при ударе.",
      "t = 3 s, v = 30 m/s",
      "t = 3 с, v = 30 м/с",
      "h = ½gt² ⇒ 45 = 5t² ⇒ t = 3 s. Then v = gt = 10·3 = 30 m/s. Check via energy: v = √(2gh) = √900 = 30 m/s.",
      "h = ½gt² ⇒ 45 = 5t² ⇒ t = 3 с. Тогда v = gt = 10·3 = 30 м/с. Проверка по энергии: v = √(2gh) = √900 = 30 м/с.",
    ),
  ],
};
