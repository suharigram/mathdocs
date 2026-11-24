import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const mathematicalLogic: Section = {
  slug: "mathematical-logic",
  title: { en: "Mathematical Logic", ru: "Математическая логика" },
  tagline: {
    en: "Formal reasoning and its limits",
    ru: "Формальные рассуждения и их пределы",
  },
  description: {
    en: "Mathematical logic formalizes reasoning: propositional and predicate logic, proof systems, and the metamathematics of soundness, completeness, and incompleteness. Gödel and Turing discovered inherent limits of formal systems.",
    ru: "Математическая логика формализует рассуждения: пропозициональная и предикатная логика, системы доказательств и метаматематика непротиворечивости, полноты и неполноты. Гёдель и Тьюринг открыли врождённые пределы формальных систем.",
  },
  topics: [
    topic("propositional", "Propositional Logic", "Логика высказываний", [
      p(
        "Propositions combine with ¬, ∧, ∨, →, ↔. Truth tables decide validity; tautologies are true under every assignment. De Morgan's laws and contraposition are the basic rewriting tools.",
        "Высказывания соединяются ¬, ∧, ∨, →, ↔. Таблицы истинности решают вопрос общезначимости; тавтологии истинны при любом присваивании. Законы де Моргана и контрапозиция — базовые инструменты переписывания.",
      ),
      formula(
        "(P \\to Q) \\leftrightarrow (\\neg Q \\to \\neg P)",
        "(P → Q) ↔ (¬Q → ¬P)",
        "Contraposition (tautology)",
        "Контрапозиция (тавтология)",
      ),
    ]),
    topic("predicate", "Predicate Logic", "Логика предикатов", [
      p(
        "Quantifiers ∀ and ∃ range over domains. Negation flips quantifiers: ¬∀x P(x) ≡ ∃x ¬P(x). Validity means truth in every structure; satisfiability means truth in some.",
        "Кванторы ∀ и ∃ пробегают области. Отрицание меняет кванторы: ¬∀x P(x) ≡ ∃x ¬P(x). Общезначимость — истинность в каждой структуре; выполнимость — истинность в некоторой.",
      ),
      formula(
        "\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)",
        "¬∀x P(x) ≡ ∃x ¬P(x)",
      ),
    ]),
    topic("proof-systems", "Proof Systems and Completeness", "Системы доказательств и полнота", [
      p(
        "Natural deduction and Hilbert systems derive formulas by rules. Soundness: provable ⇒ valid. Gödel's completeness theorem (1929): valid ⇒ provable in first-order logic. Compactness: satisfiability is finitary.",
        "Натуральный вывод и гильбертовские системы выводят формулы по правилам. Непротиворечивость (soundness): доказуемое ⇒ общезначимое. Теорема Гёделя о полноте (1929): общезначимое ⇒ доказуемое в логике первого порядка. Компактность: выполнимость финитарна.",
      ),
      list(
        ["Soundness: ⊢ φ ⇒ ⊨ φ", "Корректность: ⊢ φ ⇒ ⊨ φ"],
        ["Completeness: ⊨ φ ⇒ ⊢ φ (first-order)", "Полнота: ⊨ φ ⇒ ⊢ φ (первый порядок)"],
        ["Compactness: every finite subset satisfiable ⇒ whole set satisfiable", "Компактность: каждое конечное подмножество выполнимо ⇒ всё множество выполнимо"],
      ),
    ]),
    topic("incompleteness", "Incompleteness and Computability", "Неполнота и вычислимость", [
      p(
        "Gödel's first theorem: any consistent, effectively axiomatized system strong enough for arithmetic has true but unprovable statements. The second: such a system cannot prove its own consistency. Turing: the halting problem is undecidable.",
        "Первая теорема Гёделя: любая непротиворечивая эффективно аксиоматизированная система, достаточно сильная для арифметики, имеет истинные, но недоказуемые утверждения. Вторая: такая система не может доказать свою непротиворечивость. Тьюринг: проблема остановки неразрешима.",
      ),
      formula(
        "\\text{Consistent} + \\text{strong enough} \\;\\Rightarrow\\; \\exists G:\\; \\text{true but } \\not\\vdash G",
        "Непротиворечивость + достаточная сила ⇒ ∃G: истинно, но ⊬ G",
      ),
      note(
        "Do not confuse Gödel's completeness theorem (first-order logic) with his incompleteness theorems (arithmetic theories) — they concern different things.",
        "Не путайте теорему Гёделя о полноте (логика первого порядка) с теоремами о неполноте (арифметические теории) — они о разном.",
      ),
    ]),
    topic("normal-forms", "Truth Tables and Normal Forms", "Таблицы истинности и нормальные формы", [
      p(
        "Every propositional formula converts to CNF (AND of ORs) or DNF (OR of ANDs). SAT solvers work on CNF; resolution is a complete proof rule for it.",
        "Всякая пропозициональная формула приводится к КНФ (И дизъюнктов) или ДНФ (ИЛИ конъюнктов). SAT-решатели работают с КНФ; резолюция — полное правило вывода для неё.",
      ),
      formula(
        "(P \\lor Q) \\land (\\neg P \\lor R) \\quad \\text{(CNF)}",
        "(P ∨ Q) ∧ (¬P ∨ R)   (КНФ)",
      ),
    ]),
    topic("model-theory", "Structures and Model Theory Basics", "Структуры и основы теории моделей", [
      p(
        "A structure gives a domain plus interpretations of symbols; satisfaction defines truth inside it. Model theory studies what theories can express: Löwenheim–Skolem shows first-order theories cannot pin down infinite cardinalities.",
        "Структура задаёт область и интерпретации символов; выполнимость определяет истинность внутри неё. Теория моделей изучает выразимость теорий: теорема Лёвенгейма–Скулема показывает, что теории первого порядка не фиксируют бесконечные мощности.",
      ),
      note(
        "Nonstandard models of arithmetic contain 'infinite' integers — a consequence of compactness.",
        "Нестандартные модели арифметики содержат «бесконечные» целые — следствие компактности.",
      ),
    ]),
    topic("computability", "Computability and Church–Turing", "Вычислимость и Черч–Тьюринг", [
      p(
        "Turing machines, λ-calculus, and recursive functions define the same computable functions — the Church–Turing thesis. The halting problem, Rice's theorem, and the arithmetical hierarchy map the degrees of unsolvability.",
        "Машины Тьюринга, λ-исчисление и рекурсивные функции определяют одни и те же вычислимые функции — тезис Черча–Тьюринга. Проблема остановки, теорема Райса и арифметическая иерархия размечают степени неразрешимости.",
      ),
      formula(
        "\\text{computable} \\subsetneq \\text{computably enumerable} \\subsetneq \\text{all functions}",
        "вычислимые ⊊ перечислимые ⊊ все функции",
      ),
    ]),
  ],
  problems: [
    prob(
      "ml1", "easy",
      "Negate the statement “all cats are black”.",
      "Сформулируйте отрицание утверждения «все кошки чёрные».",
      "Some cat is not black",
      "Некоторая кошка не чёрная",
      "¬∀x P(x) ≡ ∃x ¬P(x): the negation of “all” is “at least one not”.",
      "¬∀x P(x) ≡ ∃x ¬P(x): отрицание «все» — «хотя бы одна не».",
    ),
    prob(
      "ml2", "easy",
      "What is the truth value of P → Q when P is false?",
      "Каково истинностное значение P → Q, когда P ложно?",
      "True (vacuously)",
      "Истинно (пусто)",
      "Material implication is false only when P is true and Q false.",
      "Материальная импликация ложна только при истинном P и ложном Q.",
    ),
    prob(
      "ml3", "medium",
      "Write the negation of P ∧ ¬Q in terms of ¬, ∨.",
      "Запишите отрицание P ∧ ¬Q через ¬, ∨.",
      "¬P ∨ Q",
      "¬P ∨ Q",
      "De Morgan: ¬(P ∧ ¬Q) = ¬P ∨ ¬¬Q = ¬P ∨ Q.",
      "Де Морган: ¬(P ∧ ¬Q) = ¬P ∨ ¬¬Q = ¬P ∨ Q.",
    ),
    prob(
      "ml4", "medium",
      "Is (P → Q) ↔ (¬Q → ¬P) a tautology?",
      "Является ли (P → Q) ↔ (¬Q → ¬P) тавтологией?",
      "Yes",
      "Да",
      "Both sides are false exactly when P is true and Q false; the truth table matches in all four rows.",
      "Обе части ложны ровно при истинном P и ложном Q; таблица истинности совпадает во всех четырёх строках.",
    ),
    prob(
      "ml5", "hard",
      "Is the halting problem decidable? Sketch why.",
      "Разрешима ли проблема остановки? Набросайте почему.",
      "No — undecidable (Turing, 1936)",
      "Нет — неразрешима (Тьюринг, 1936)",
      "Assume a decider H exists; build D that halts iff H says it loops, then run D on itself — contradiction either way (diagonalization).",
      "Пусть есть решатель H; построим D, который останавливается тогда и только тогда, когда H говорит, что D зациклится, и запустим D на себе — противоречие в обе стороны (диагонализация).",
    ),
  ],
};
