import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const cryptography: Section = {
  slug: "cryptography",
  title: { en: "Cryptography", ru: "Криптография" },
  tagline: {
    en: "Mathematics of secure communication",
    ru: "Математика защищённой связи",
  },
  description: {
    en: "Modern cryptography rests on number theory and algebra: RSA on factoring, Diffie–Hellman and elliptic curves on discrete logarithms, hashes on collision resistance. Security is computational, not absolute.",
    ru: "Современная криптография опирается на теорию чисел и алгебру: RSA — на факторизацию, Диффи–Хеллман и эллиптические кривые — на дискретные логарифмы, хеши — на стойкость к коллизиям. Безопасность вычислительная, а не абсолютная.",
  },
  topics: [
    topic("foundations", "Foundations", "Основы", [
      p(
        "Symmetric ciphers share one secret key; public-key cryptography splits it into a public and a private part. Kerckhoffs's principle: security must rely only on the key, not on secrecy of the design.",
        "Симметричные шифры используют один секретный ключ; криптография с открытым ключом разделяет его на открытую и закрытую части. Принцип Керкгоффса: безопасность должна опираться только на ключ, а не на секретность конструкции.",
      ),
      note(
        "The one-time pad — random key as long as the message, used once — is provably unbreakable (Shannon).",
        "Одноразовый блокнот — случайный ключ длиной с сообщение, используемый один раз — доказуемо невзламываем (Шеннон).",
      ),
    ]),
    topic("rsa", "RSA", "RSA", [
      p(
        "Choose primes p, q; n = pq and φ(n) = (p−1)(q−1). Pick e coprime to φ(n), compute d with ed ≡ 1 (mod φ(n)). Encryption mᵉ mod n, decryption cᵈ mod n; breaking it means factoring n.",
        "Выберем простые p, q; n = pq и φ(n) = (p−1)(q−1). Возьмём e, взаимно простое с φ(n), найдём d из ed ≡ 1 (mod φ(n)). Шифрование mᵉ mod n, расшифрование cᵈ mod n; взлом означает факторизацию n.",
      ),
      formula(
        "c = m^e \\bmod n, \\qquad m = c^d \\bmod n, \\qquad ed \\equiv 1 \\pmod{\\varphi(n)}",
        "c = mᵉ mod n;   m = cᵈ mod n;   ed ≡ 1 (mod φ(n))",
      ),
    ]),
    topic("diffie-hellman", "Diffie–Hellman and Discrete Log", "Диффи–Хеллман и дискретный логарифм", [
      p(
        "Over a prime field, Alice sends gᵃ, Bob sends gᵇ; both compute the shared secret gᵃᵇ. An eavesdropper faces the discrete logarithm problem. Without authentication, the protocol is vulnerable to man-in-the-middle.",
        "В простом поле Алиса шлёт gᵃ, Боб — gᵇ; оба вычисляют общий секрет gᵃᵇ. Подслушивающий сталкивается с задачей дискретного логарифма. Без аутентификации протокол уязвим к атаке «человек посередине».",
      ),
      formula(
        "K = (g^b)^a = (g^a)^b = g^{ab} \\bmod p",
        "K = (gᵇ)ᵃ = (gᵃ)ᵇ = gᵃᵇ mod p",
      ),
    ]),
    topic("ecc-hashes", "Elliptic Curves and Hashes", "Эллиптические кривые и хеши", [
      p(
        "Points of y² = x³ + ax + b form a group; the elliptic-curve discrete log problem is harder than the classical one, so ECC needs smaller keys. Cryptographic hashes are preimage- and collision-resistant, enabling signatures and integrity.",
        "Точки y² = x³ + ax + b образуют группу; задача дискретного логарифма на эллиптической кривой труднее классической, поэтому ECC нужны меньшие ключи. Криптографические хеши стойки к прообразу и коллизиям, обеспечивая подписи и целостность.",
      ),
      list(
        ["ECC 256-bit ≈ RSA 3072-bit security", "ECC 256 бит ≈ RSA 3072 бит по стойкости"],
        ["Hash properties: preimage resistance, collision resistance, avalanche", "Свойства хеша: стойкость прообраза, стойкость коллизий, лавинный эффект"],
        ["Quantum threat: Shor's algorithm breaks RSA/ECC; post-quantum lattices resist", "Квантовая угроза: алгоритм Шора ломает RSA/ECC; постквантовые решётки устойчивы"],
      ),
    ]),
  ],
  problems: [
    prob(
      "cr1", "easy",
      "RSA with p = 3, q = 11: find n and φ(n).",
      "RSA с p = 3, q = 11: найдите n и φ(n).",
      "n = 33, φ(n) = 20",
      "n = 33, φ(n) = 20",
      "n = 3·11 = 33; φ = (3−1)(11−1) = 2·10 = 20.",
      "n = 3·11 = 33; φ = (3−1)(11−1) = 2·10 = 20.",
    ),
    prob(
      "cr2", "easy",
      "Encrypt 'ABC' with a Caesar cipher of shift 3.",
      "Зашифруйте «ABC» шифром Цезаря со сдвигом 3.",
      "DEF",
      "DEF",
      "Each letter moves 3 positions: A→D, B→E, C→F.",
      "Каждая буква сдвигается на 3 позиции: A→D, B→E, C→F.",
    ),
    prob(
      "cr3", "medium",
      "RSA with φ(n) = 20 and e = 3: find the private exponent d.",
      "RSA с φ(n) = 20 и e = 3: найдите закрытую экспоненту d.",
      "d = 7",
      "d = 7",
      "Need 3d ≡ 1 (mod 20): 3·7 = 21 ≡ 1.",
      "Нужно 3d ≡ 1 (mod 20): 3·7 = 21 ≡ 1.",
    ),
    prob(
      "cr4", "medium",
      "Diffie–Hellman with p = 23, g = 5, Alice's secret a = 6: what does she send?",
      "Диффи–Хеллман с p = 23, g = 5, секрет Алисы a = 6: что она отправляет?",
      "8",
      "8",
      "5⁶ mod 23: 5² = 25 ≡ 2, 5⁴ ≡ 4, 5⁶ = 5⁴·5² ≡ 4·2 = 8.",
      "5⁶ mod 23: 5² = 25 ≡ 2, 5⁴ ≡ 4, 5⁶ = 5⁴·5² ≡ 4·2 = 8.",
    ),
    prob(
      "cr5", "hard",
      "Encrypt m = 4 with RSA public key (n = 33, e = 3).",
      "Зашифруйте m = 4 открытым ключом RSA (n = 33, e = 3).",
      "31",
      "31",
      "c = 4³ mod 33 = 64 mod 33 = 31.",
      "c = 4³ mod 33 = 64 mod 33 = 31.",
    ),
  ],
};
