import type { Section } from "../types";
import { formula, note, p, prob, topic } from "./helpers";

export const categoryTheory: Section = {
  slug: "category-theory",
  title: { en: "Category Theory", ru: "Теория категорий" },
  tagline: {
    en: "The mathematics of structure-preserving maps",
    ru: "Математика сохраняющих структуру отображений",
  },
  description: {
    en: "Category theory studies mathematical structures through the maps between them: categories, functors, natural transformations, and universal properties. It unifies algebra, topology, logic, and computer science.",
    ru: "Теория категорий изучает математические структуры через отображения между ними: категории, функторы, естественные преобразования и универсальные свойства. Она объединяет алгебру, топологию, логику и информатику.",
  },
  topics: [
    topic("categories", "Categories and Morphisms", "Категории и морфизмы", [
      p(
        "A category has objects and arrows (morphisms) with associative composition and identities. Examples: Set (sets and functions), Grp (groups and homomorphisms), Top (spaces and continuous maps).",
        "Категория имеет объекты и стрелки (морфизмы) с ассоциативной композицией и тождественными. Примеры: Set (множества и функции), Grp (группы и гомоморфизмы), Top (пространства и непрерывные отображения).",
      ),
      formula(
        "f: A \\to B,\\ g: B \\to C \\;\\Rightarrow\\; g \\circ f: A \\to C",
        "f: A → B, g: B → C  ⇒  g∘f: A → C",
      ),
    ]),
    topic("functors", "Functors", "Функторы", [
      p(
        "A functor maps objects to objects and arrows to arrows, preserving composition and identities. Forgetful functors drop structure (Grp → Set); the fundamental group is a functor Top → Grp.",
        "Функтор отображает объекты в объекты и стрелки в стрелки, сохраняя композицию и тождественные. Забывающие функторы сбрасывают структуру (Grp → Set); фундаментальная группа — функтор Top → Grp.",
      ),
      formula(
        "F(g \\circ f) = F(g) \\circ F(f), \\qquad F(\\mathrm{id}_A) = \\mathrm{id}_{F(A)}",
        "F(g∘f) = F(g)∘F(f);   F(id_A) = id_F(A)",
      ),
    ]),
    topic("natural", "Natural Transformations", "Естественные преобразования", [
      p(
        "A natural transformation is a family of arrows between two functors that commutes with every morphism — a “morphism of functors”. Categories, functors, and natural transformations form a 2-category.",
        "Естественное преобразование — семейство стрелок между двумя функторами, коммутирующее с каждым морфизмом, — «морфизм функторов». Категории, функторы и естественные преобразования образуют 2-категорию.",
      ),
      formula(
        "\\eta_B \\circ F(f) = G(f) \\circ \\eta_A",
        "η_B ∘ F(f) = G(f) ∘ η_A",
        "Naturality square",
        "Квадрат естественности",
      ),
    ]),
    topic("universal", "Universal Properties and Yoneda", "Универсальные свойства и лемма Йонеды", [
      p(
        "Products, coproducts, limits, and colimits are defined by universal mapping properties, unique up to unique isomorphism. The Yoneda lemma: an object is completely determined by the arrows into it from all objects.",
        "Произведения, копроизведения, пределы и копределы определяются универсальными свойствами отображений, единственны с точностью до единственного изоморфизма. Лемма Йонеды: объект полностью определяется стрелками в него из всех объектов.",
      ),
      formula(
        "\\mathrm{Nat}(\\mathrm{Hom}(A, -), F) \\cong F(A)",
        "Nat(Hom(A, −), F) ≅ F(A)",
        "Yoneda lemma",
        "Лемма Йонеды",
      ),
      note(
        "“Ask not what an object is, but how it maps” — universal properties replace element-wise definitions across mathematics.",
        "«Спрашивай не что есть объект, а как он отображается» — универсальные свойства заменяют поэлементные определения по всей математике.",
      ),
    ]),
  ],
  problems: [
    prob(
      "ct1", "easy",
      "What are the morphisms in the category Set?",
      "Каковы морфизмы в категории Set?",
      "Functions between sets",
      "Функции между множествами",
      "Objects are sets; arrows are ordinary functions, composed as usual.",
      "Объекты — множества; стрелки — обычные функции с обычной композицией.",
    ),
    prob(
      "ct2", "easy",
      "What is an isomorphism in Grp?",
      "Что такое изоморфизм в Grp?",
      "A bijective homomorphism",
      "Биективный гомоморфизм",
      "An arrow with a two-sided inverse that is also a homomorphism; equivalently, a bijective homomorphism.",
      "Стрелка с двусторонним обратным, также являющимся гомоморфизмом; эквивалентно — биективный гомоморфизм.",
    ),
    prob(
      "ct3", "medium",
      "What construction is the categorical product in Set?",
      "Какая конструкция является категориальным произведением в Set?",
      "The Cartesian product with projections",
      "Декартово произведение с проекциями",
      "A × B with π₁, π₂ satisfies the universal property: maps into A × B correspond to pairs of maps into A and B.",
      "A × B с π₁, π₂ удовлетворяет универсальному свойству: отображения в A × B соответствуют парам отображений в A и B.",
    ),
    prob(
      "ct4", "medium",
      "What does the forgetful functor Grp → Set forget?",
      "Что забывает забывающий функтор Grp → Set?",
      "The group operation (keeps the underlying set)",
      "Групповую операцию (оставляет носитель)",
      "It sends each group to its underlying set and each homomorphism to the same function.",
      "Он отправляет каждую группу в её носитель, а каждый гомоморфизм — в ту же функцию.",
    ),
    prob(
      "ct5", "hard",
      "By the Yoneda lemma, what determines an object A up to isomorphism?",
      "Что по лемме Йонеды определяет объект A с точностью до изоморфизма?",
      "The functor Hom(A, −) — all arrows into A",
      "Функтор Hom(A, −) — все стрелки в A",
      "Natural transformations Hom(A,−) → F correspond to elements of F(A); taking F = Hom(B,−) shows A ≅ B iff their hom-functors are naturally isomorphic.",
      "Естественные преобразования Hom(A,−) → F соответствуют элементам F(A); при F = Hom(B,−) получаем A ≅ B тогда и только тогда, когда их hom-функторы естественно изоморфны.",
    ),
  ],
};
