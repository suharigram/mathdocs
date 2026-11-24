import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const numberTheory: Section = {
  slug: "number-theory",
  title: { en: "Number Theory", ru: "Теория чисел" },
  tagline: {
    en: "Primes, divisibility, and modular arithmetic",
    ru: "Простые числа, делимость и модульная арифметика",
  },
  description: {
    en: "Number theory studies the integers and their deep structure: primes, divisibility, and congruences. Once “pure” mathematics, it now secures digital communication through cryptography.",
    ru: "Теория чисел изучает целые числа и их глубокую структуру: простые числа, делимость и сравнения. Некогда «чистая» математика, сегодня она защищает цифровую связь благодаря криптографии.",
  },
  topics: [
    topic("divisibility", "Divisibility and Primes", "Делимость и простые числа", [
      p(
        "We say a divides b (written a | b) when b = a·k for some integer k. A prime is an integer greater than 1 whose only positive divisors are 1 and itself. Euclid proved there are infinitely many primes.",
        "Говорят, что a делит b (пишут a | b), если b = a·k для некоторого целого k. Простое число — целое больше 1, единственные положительные делители которого — 1 и оно само. Евклид доказал, что простых чисел бесконечно много.",
      ),
      list(
        ["Divisible by 2: last digit is even", "Делится на 2: последняя цифра чётная"],
        ["Divisible by 3: digit sum is divisible by 3", "Делится на 3: сумма цифр делится на 3"],
        ["Divisible by 5: last digit is 0 or 5", "Делится на 5: последняя цифра 0 или 5"],
        ["Divisible by 9: digit sum is divisible by 9", "Делится на 9: сумма цифр делится на 9"],
      ),
      note(
        "To test n for primality, trial-divide by primes up to √n only.",
        "Для проверки простоты n достаточно пробных делений на простые до √n.",
      ),
    ]),
    topic("factorization", "Fundamental Theorem of Arithmetic", "Основная теорема арифметики", [
      p(
        "Every integer greater than 1 factors into primes uniquely, up to the order of factors. Prime factorization is the fingerprint of a number.",
        "Каждое целое число больше 1 единственным образом (с точностью до порядка) разлагается в произведение простых. Простое разложение — «отпечаток пальца» числа.",
      ),
      formula(
        "n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\cdots p_k^{\\alpha_k}",
        "n = p₁^α₁ · p₂^α₂ · … · pₖ^αₖ",
      ),
      formula(
        "360 = 2^3 \\cdot 3^2 \\cdot 5",
        "360 = 2³ · 3² · 5",
        "Example factorization",
        "Пример разложения",
      ),
    ]),
    topic("gcd-lcm", "GCD, LCM, and the Euclidean Algorithm", "НОД, НОК и алгоритм Евклида", [
      p(
        "The greatest common divisor is found efficiently by repeated remainders: gcd(a, b) = gcd(b, a mod b). The least common multiple is then obtained from the product identity.",
        "Наибольший общий делитель эффективно находится через остатки: gcd(a, b) = gcd(b, a mod b). Наименьшее общее кратное затем получается из тождества произведения.",
      ),
      formula(
        "\\gcd(a, b) = \\gcd(b,\\; a \\bmod b)",
        "НОД(a, b) = НОД(b, a mod b)",
        "Euclidean algorithm step",
        "Шаг алгоритма Евклида",
      ),
      formula(
        "\\gcd(a, b) \\cdot \\mathrm{lcm}(a, b) = a \\cdot b",
        "НОД(a, b) · НОК(a, b) = a · b",
      ),
    ]),
    topic("modular", "Modular Arithmetic", "Модульная арифметика", [
      p(
        "Congruence a ≡ b (mod m) means m divides a − b: a and b leave the same remainder modulo m. Congruences can be added and multiplied, which makes huge powers tractable.",
        "Сравнение a ≡ b (mod m) означает, что m делит a − b: a и b дают одинаковый остаток при делении на m. Сравнения можно складывать и умножать, что позволяет работать с огромными степенями.",
      ),
      formula(
        "a \\equiv b \\pmod{m} \\;\\Leftrightarrow\\; m \\mid (a - b)",
        "a ≡ b (mod m)  ⇔  m | (a − b)",
      ),
      formula(
        "a^p \\equiv a \\pmod{p} \\quad (p \\text{ prime})",
        "a^p ≡ a (mod p)   (p — простое)",
        "Fermat's little theorem",
        "Малая теорема Ферма",
      ),
      note(
        "RSA encryption relies on the difficulty of factoring large numbers and on Fermat–Euler style congruences.",
        "Шифрование RSA опирается на сложность разложения больших чисел и на сравнения в духе теорем Ферма–Эйлера.",
      ),
    ]),
    topic("arithmetic-functions", "Arithmetic Functions and Euler's Theorem", "Арифметические функции и теорема Эйлера", [
      p(
        "Arithmetic functions live on the integers: τ(n) counts divisors, σ(n) sums them, φ(n) counts numbers ≤ n coprime to n. Multiplicative functions are determined by their values on prime powers.",
        "Арифметические функции живут на целых числах: τ(n) считает делители, σ(n) суммирует их, φ(n) считает числа ≤ n, взаимно простые с n. Мультипликативные функции определяются значениями на степенях простых.",
      ),
      formula(
        "\\varphi(n) = n\\prod_{p \\mid n}\\Big(1 - \\frac{1}{p}\\Big)",
        "φ(n) = n·∏ (1 − 1/p)   (по простым p | n)",
        "Euler's totient",
        "Функция Эйлера",
      ),
      formula(
        "a^{\\varphi(n)} \\equiv 1 \\pmod{n} \\quad (\\gcd(a,n) = 1)",
        "a^φ(n) ≡ 1 (mod n)   (НОД(a, n) = 1)",
        "Euler's theorem (generalizes Fermat)",
        "Теорема Эйлера (обобщает теорему Ферма)",
      ),
      note(
        "Euler's theorem is exactly why RSA decryption works: ed ≡ 1 (mod φ(n)) restores the message.",
        "Теорема Эйлера — именно причина работоспособности расшифрования RSA: ed ≡ 1 (mod φ(n)) восстанавливает сообщение.",
      ),
    ]),
  ],
  problems: [
    prob(
      "n1", "easy",
      "Find the prime factorization of 84.",
      "Разложите 84 на простые множители.",
      "84 = 2² · 3 · 7",
      "84 = 2² · 3 · 7",
      "84 = 2·42 = 2·2·21 = 2²·3·7.",
      "84 = 2·42 = 2·2·21 = 2²·3·7.",
    ),
    prob(
      "n2", "easy",
      "Find gcd(48, 18).",
      "Найдите НОД(48, 18).",
      "6",
      "6",
      "Euclid: 48 = 2·18 + 12; 18 = 1·12 + 6; 12 = 2·6 + 0. The last nonzero remainder is 6.",
      "Алгоритм Евклида: 48 = 2·18 + 12; 18 = 1·12 + 6; 12 = 2·6 + 0. Последний ненулевой остаток — 6.",
    ),
    prob(
      "n3", "medium",
      "Find lcm(12, 18).",
      "Найдите НОК(12, 18).",
      "36",
      "36",
      "gcd(12, 18) = 6, so lcm = 12·18/6 = 36. Or from factorizations: 12 = 2²·3, 18 = 2·3², take max powers: 2²·3² = 36.",
      "НОД(12, 18) = 6, значит НОК = 12·18/6 = 36. Или по разложениям: 12 = 2²·3, 18 = 2·3², берём максимальные степени: 2²·3² = 36.",
    ),
    prob(
      "n4", "medium",
      "What is the last digit of 7⁴?",
      "Какова последняя цифра числа 7⁴?",
      "1",
      "1",
      "Last digit means mod 10: 7² = 49 ≡ 9, so 7⁴ ≡ 9² = 81 ≡ 1 (mod 10). Indeed 7⁴ = 2401.",
      "Последняя цифра — это остаток по модулю 10: 7² = 49 ≡ 9, значит 7⁴ ≡ 9² = 81 ≡ 1 (mod 10). Действительно, 7⁴ = 2401.",
    ),
    prob(
      "n5", "hard",
      "Solve the congruence 3x ≡ 1 (mod 7).",
      "Решите сравнение 3x ≡ 1 (mod 7).",
      "x ≡ 5 (mod 7)",
      "x ≡ 5 (mod 7)",
      "We need the inverse of 3 modulo 7. Testing: 3·5 = 15 ≡ 1 (mod 7), so x ≡ 5 (mod 7).",
      "Нужен обратный к 3 по модулю 7. Перебором: 3·5 = 15 ≡ 1 (mod 7), значит x ≡ 5 (mod 7).",
    ),
    prob(
      "n6", "medium",
      "Compute φ(12).",
      "Вычислите φ(12).",
      "4",
      "4",
      "12 = 2²·3, so φ(12) = 12·(1 − 1/2)(1 − 1/3) = 12·(1/2)·(2/3) = 4. The coprime numbers are 1, 5, 7, 11.",
      "12 = 2²·3, значит φ(12) = 12·(1 − 1/2)(1 − 1/3) = 12·(1/2)·(2/3) = 4. Взаимно простые числа: 1, 5, 7, 11.",
    ),
  ],
};
