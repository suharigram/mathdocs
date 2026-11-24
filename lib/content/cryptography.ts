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
    topic("classical", "Classical Ciphers", "Классические шифры", [
      p(
        "Caesar shifts letters; Vigenère uses a repeating keyword of shifts. Frequency analysis breaks them: letter frequencies survive substitution, so statistics defeat pre-modern ciphers.",
        "Цезарь сдвигает буквы; Виженер использует повторяющееся ключевое слово сдвигов. Частотный анализ ломает их: частоты букв переживают подстановку, поэтому статистика побеждает домодерные шифры.",
      ),
      note(
        "The one-time pad is Vigenère with a truly random, non-repeating key as long as the message — then frequency analysis fails completely.",
        "Одноразовый блокнот — Виженер с истинно случайным неповторяющимся ключом длиной с сообщение: тогда частотный анализ полностью бессилен.",
      ),
    ]),
    topic("symmetric", "Symmetric Encryption: AES and Modes", "Симметричное шифрование: AES и режимы", [
      p(
        "AES encrypts 128-bit blocks with substitution-permutation rounds under 128/192/256-bit keys. Modes of operation (CBC, CTR, GCM) extend blocks to messages; GCM adds authentication.",
        "AES шифрует 128-битные блоки раундами подстановок-перестановок с ключами 128/192/256 бит. Режимы (CBC, CTR, GCM) распространяют блоки на сообщения; GCM добавляет аутентификацию.",
      ),
      list(
        ["ECB is insecure: identical blocks encrypt identically", "ECB небезопасен: одинаковые блоки шифруются одинаково"],
        ["Never reuse a nonce/IV with the same key in CTR/GCM", "Никогда не переиспользуйте nonce/IV с тем же ключом в CTR/GCM"],
      ),
    ]),
    topic("signatures-pki", "Signatures, Hashes, and PKI", "Подписи, хеши и PKI", [
      p(
        "Hash functions (SHA-256) compress data to fixed-size digests; HMAC authenticates with a key. Digital signatures (RSA, ECDSA) prove authorship. Certificates and certificate authorities bind public keys to identities — the PKI behind HTTPS.",
        "Хеш-функции (SHA-256) сжимают данные в дайджесты фиксированного размера; HMAC аутентифицирует ключом. Цифровые подписи (RSA, ECDSA) доказывают авторство. Сертификаты и удостоверяющие центры привязывают открытые ключи к личностям — PKI, стоящая за HTTPS.",
      ),
      formula(
        "\\text{sign}: s = H(m)^d \\bmod n; \\quad \\text{verify}: s^e \\stackrel{?}{=} H(m)",
        "подпись: s = H(m)ᵈ mod n;   проверка: sᵉ =? H(m)",
      ),
    ]),
    topic("post-quantum", "Post-Quantum Cryptography", "Постквантовая криптография", [
      p(
        "Shor's algorithm on a large quantum computer factors integers and computes discrete logs, breaking RSA and ECC. Lattice-based schemes (Kyber, Dilithium) rest on problems believed quantum-hard and are being standardized.",
        "Алгоритм Шора на большом квантовом компьютере факторизует числа и вычисляет дискретные логарифмы, ломая RSA и ECC. Решёточные схемы (Kyber, Dilithium) опираются на задачи, предположительно квантово-трудные, и стандартизируются.",
      ),
      note(
        "Grover's algorithm only halves symmetric key security — AES-256 remains comfortable.",
        "Алгоритм Гровера лишь вдвое снижает стойкость симметричных ключей — AES-256 остаётся с запасом.",
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
