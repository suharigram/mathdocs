import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const arithmetic: Section = {
  slug: "arithmetic",
  title: { en: "Arithmetic & Pre-Algebra", ru: "Арифметика и предаалгебра" },
  tagline: {
    en: "Numbers, fractions, percentages, and proportions",
    ru: "Числа, дроби, проценты и пропорции",
  },
  description: {
    en: "Arithmetic is the foundation of all mathematics: the number systems, the four operations, and the rules that govern them. Fractions, decimals, percentages, and ratios turn arithmetic into a tool for everyday reasoning.",
    ru: "Арифметика — фундамент всей математики: числовые системы, четыре действия и управляющие ими правила. Дроби, десятичные записи, проценты и отношения превращают арифметику в инструмент повседневных рассуждений.",
  },
  topics: [
    topic("numbers-operations", "Numbers and Operations", "Числа и действия", [
      p(
        "Number systems grow from natural numbers N to integers Z, rationals Q, reals R, and complex numbers C. Operations follow a fixed order: parentheses, exponents, multiplication/division, addition/subtraction.",
        "Числовые системы расширяются от натуральных N к целым Z, рациональным Q, действительным R и комплексным C. Действия выполняются в фиксированном порядке: скобки, степени, умножение/деление, сложение/вычитание.",
      ),
      list(
        ["Subtracting a negative adds: a − (−b) = a + b", "Вычитание отрицательного — сложение: a − (−b) = a + b"],
        ["Negative × negative = positive; negative × positive = negative", "Минус на минус даёт плюс; минус на плюс — минус"],
        ["Division by zero is undefined", "Деление на ноль не определено"],
      ),
    ]),
    topic("fractions", "Fractions", "Дроби", [
      p(
        "A fraction a/b represents a parts of size 1/b. To add fractions, bring them to a common denominator; to multiply, multiply numerators and denominators; to divide, multiply by the reciprocal.",
        "Дробь a/b — это a частей размера 1/b. Для сложения дробей приводят общий знаменатель; при умножении перемножают числители и знаменатели; при делении умножают на обратную дробь.",
      ),
      formula(
        "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}, \\qquad \\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}",
        "a/b + c/d = (ad + bc)/(bd);   (a/b)·(c/d) = ac/(bd)",
      ),
      formula(
        "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}",
        "(a/b) ÷ (c/d) = (a/b)·(d/c)",
      ),
    ]),
    topic("decimals-percentages", "Decimals and Percentages", "Десятичные дроби и проценты", [
      p(
        "Percent means “per hundred”: x% = x/100. Percent change compares a difference to the original value, which is why a 50% rise followed by a 50% fall does not return to the start.",
        "Процент — «сотая доля»: x% = x/100. Процентное изменение сравнивает разницу с исходным значением, поэтому рост на 50% и последующее падение на 50% не возвращают к началу.",
      ),
      formula(
        "x\\% \\text{ of } y = \\frac{xy}{100}, \\qquad \\text{change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\cdot 100\\%",
        "x% от y = xy/100;   изменение = (новое − старое)/старое · 100%",
      ),
    ]),
    topic("ratios-proportions", "Ratios and Proportions", "Отношения и пропорции", [
      p(
        "A ratio compares quantities; a proportion states that two ratios are equal. Cross-multiplication solves proportions. Direct proportion means y = kx; inverse proportion means y = k/x.",
        "Отношение сравнивает величины; пропорция утверждает равенство двух отношений. Пропорции решают перекрёстным умножением. Прямая пропорциональность: y = kx; обратная: y = k/x.",
      ),
      formula(
        "\\frac{a}{b} = \\frac{c}{d} \\;\\Rightarrow\\; ad = bc",
        "a/b = c/d  ⇒  ad = bc",
      ),
      note(
        "To split a total in ratio a:b:c, divide it into a + b + c equal parts and take a, b, c of them.",
        "Чтобы разделить величину в отношении a:b:c, разбейте её на a + b + c равных частей и возьмите a, b, c частей.",
      ),
    ]),
    topic("number-line", "Number Line, Ordering, and Absolute Value", "Числовая прямая, сравнение и модуль", [
      p(
        "Numbers sit on a line: farther right means greater. Negative numbers reverse intuition — −3 < −2. The absolute value |a| is the distance from a to 0, so it is never negative.",
        "Числа располагаются на прямой: правее — больше. Отрицательные числа переворачивают интуицию: −3 < −2. Модуль |a| — расстояние от a до 0, поэтому он никогда не отрицателен.",
      ),
      formula(
        "|a| = \\begin{cases} a, & a \\ge 0 \\\\ -a, & a < 0 \\end{cases}",
        "|a| = a при a ≥ 0; |a| = −a при a < 0",
      ),
    ]),
    topic("powers-roots", "Powers, Roots, and Scientific Notation", "Степени, корни и научная запись", [
      p(
        "aⁿ means n copies of a multiplied; a⁰ = 1 and a⁻ⁿ = 1/aⁿ. The square root √a undoes squaring. Scientific notation a×10ⁿ writes very large and very small numbers compactly.",
        "aⁿ — произведение n копий a; a⁰ = 1 и a⁻ⁿ = 1/aⁿ. Квадратный корень √a обращает возведение в квадрат. Научная запись a×10ⁿ компактно записывает очень большие и очень малые числа.",
      ),
      formula(
        "\\sqrt{ab} = \\sqrt{a}\\sqrt{b}, \\qquad a^{1/n} = \\sqrt[n]{a}",
        "√(ab) = √a·√b;   a^(1/n) = ⁿ√a",
      ),
    ]),
    topic("divisibility-basics", "Divisibility, Factors, and Multiples", "Делимость, делители и кратные", [
      p(
        "Even numbers are divisible by 2; primes have exactly two divisors, composites more. Factoring breaks a number into primes; GCD and LCM organize common divisors and multiples (see Number Theory).",
        "Чётные числа делятся на 2; простые имеют ровно два делителя, составные — больше. Разложение разбивает число на простые; НОД и НОК упорядочивают общие делители и кратные (см. Теорию чисел).",
      ),
      list(
        ["Divisible by 2: last digit even; by 5: last digit 0 or 5", "Делится на 2: последняя цифра чётная; на 5: 0 или 5"],
        ["Divisible by 3 or 9: digit sum divisible by 3 or 9", "Делится на 3 или 9: сумма цифр делится на 3 или 9"],
        ["Divisible by 10: last digit 0", "Делится на 10: последняя цифра 0"],
      ),
    ]),
    topic("rounding-estimation", "Rounding and Estimation", "Округление и оценка", [
      p(
        "Rounding keeps a chosen precision: look at the next digit, 5 or more rounds up. Significant figures count meaningful digits. Estimating before computing catches gross errors.",
        "Округление сохраняет выбранную точность: смотрим на следующую цифру, 5 и больше — вверх. Значащие цифры считают осмысленные знаки. Оценка перед вычислением ловит грубые ошибки.",
      ),
      note(
        "3.14159 to 2 decimal places is 3.14; to 3 significant figures it is 3.14; 0.00456 has 3 significant figures.",
        "3,14159 до 2 знаков после запятой — 3,14; до 3 значащих цифр — 3,14; у 0,00456 три значащие цифры.",
      ),
    ]),
    topic("units-measurement", "Units and Measurement", "Единицы и измерения", [
      p(
        "Measurements carry units; converting means multiplying by factors equal to 1 (1000 m / 1 km). Dimensional analysis checks that formulas make sense: you cannot add meters to seconds.",
        "Измерения несут единицы; перевод — умножение на множители, равные 1 (1000 м / 1 км). Анализ размерностей проверяет осмысленность формул: нельзя складывать метры с секундами.",
      ),
      list(
        ["Length: 1 km = 1000 m, 1 m = 100 cm", "Длина: 1 км = 1000 м, 1 м = 100 см"],
        ["Mass: 1 kg = 1000 g; Time: 1 h = 3600 s", "Масса: 1 кг = 1000 г; время: 1 ч = 3600 с"],
        ["Area scales by the square, volume by the cube of the length factor", "Площадь масштабируется квадратом, объём — кубом коэффициента длины"],
      ),
    ]),
  ],
  problems: [
    prob(
      "ar1", "easy",
      "Compute: 3 + 4 · 2.",
      "Вычислите: 3 + 4 · 2.",
      "11",
      "11",
      "Multiplication first: 4·2 = 8, then 3 + 8 = 11.",
      "Сначала умножение: 4·2 = 8, затем 3 + 8 = 11.",
    ),
    prob(
      "ar2", "easy",
      "Compute: 1/2 + 1/3.",
      "Вычислите: 1/2 + 1/3.",
      "5/6",
      "5/6",
      "Common denominator 6: 3/6 + 2/6 = 5/6.",
      "Общий знаменатель 6: 3/6 + 2/6 = 5/6.",
    ),
    prob(
      "ar3", "medium",
      "What is 15% of 240?",
      "Сколько составляет 15% от 240?",
      "36",
      "36",
      "240·15/100 = 240·0.15 = 36.",
      "240·15/100 = 240·0,15 = 36.",
    ),
    prob(
      "ar4", "medium",
      "A price rises from 80 to 100. What is the percent increase?",
      "Цена выросла с 80 до 100. Каков процент роста?",
      "25%",
      "25%",
      "(100 − 80)/80 · 100% = 20/80 · 100% = 25%.",
      "(100 − 80)/80 · 100% = 20/80 · 100% = 25%.",
    ),
    prob(
      "ar5", "hard",
      "Divide 120 in the ratio 2:3:5.",
      "Разделите 120 в отношении 2:3:5.",
      "24, 36, 60",
      "24, 36, 60",
      "Total parts: 2 + 3 + 5 = 10; one part is 12. Shares: 2·12 = 24, 3·12 = 36, 5·12 = 60.",
      "Всего частей: 2 + 3 + 5 = 10; одна часть — 12. Доли: 2·12 = 24, 3·12 = 36, 5·12 = 60.",
    ),
  ],
};
