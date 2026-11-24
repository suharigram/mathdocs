import type { Section } from "../types";
import { formula, list, note, p, prob, topic } from "./helpers";

export const gameTheory: Section = {
  slug: "game-theory",
  title: { en: "Game Theory", ru: "Теория игр" },
  tagline: {
    en: "Strategic interaction and equilibrium",
    ru: "Стратегическое взаимодействие и равновесие",
  },
  description: {
    en: "Game theory models decisions where outcomes depend on everyone's choices. Nash equilibrium captures mutual best responses; zero-sum games have minimax values; classic dilemmas explain cooperation, competition, and conflict.",
    ru: "Теория игр моделирует решения, исход которых зависит от выбора всех участников. Равновесие Нэша фиксирует взаимные наилучшие ответы; игры с нулевой суммой имеют минимаксные значения; классические дилеммы объясняют кооперацию, конкуренцию и конфликт.",
  },
  topics: [
    topic("nash", "Normal-Form Games and Nash Equilibrium", "Игры в нормальной форме и равновесие Нэша", [
      p(
        "A game lists players, strategies, and payoffs. A Nash equilibrium is a profile where no player gains by deviating alone. Nash's theorem: every finite game has an equilibrium in mixed strategies.",
        "Игра задаёт игроков, стратегии и выигрыши. Равновесие Нэша — профиль, в котором никто не выигрывает от одиночного отклонения. Теорема Нэша: в каждой конечной игре есть равновесие в смешанных стратегиях.",
      ),
      formula(
        "u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) \\quad \\forall s_i,\\ \\forall i",
        "uᵢ(sᵢ*, s₋ᵢ*) ≥ uᵢ(sᵢ, s₋ᵢ*) для всех sᵢ и всех i",
      ),
    ]),
    topic("zero-sum", "Zero-Sum Games and Minimax", "Игры с нулевой суммой и минимакс", [
      p(
        "One player's gain is the other's loss. von Neumann's minimax theorem: with mixed strategies, max-min equals min-max — the game has a value.",
        "Выигрыш одного — проигрыш другого. Теорема Неймана о минимаксе: в смешанных стратегиях максимин равен минимаксу — у игры есть значение.",
      ),
      formula(
        "\\max_x \\min_y\\ x^T A y = \\min_y \\max_x\\ x^T A y",
        "max min xᵀAy = min max xᵀAy",
        "Minimax theorem",
        "Теорема о минимаксе",
      ),
    ]),
    topic("classics", "Classic Games", "Классические игры", [
      p(
        "Prisoner's dilemma: defection is dominant, yet mutual cooperation pays more — the tension between individual and collective rationality. Coordination games have multiple equilibria; chicken rewards brinkmanship.",
        "Дилемма заключённого: предательство доминирует, но взаимная кооперация выгоднее — напряжение между индивидуальной и коллективной рациональностью. Игры координации имеют несколько равновесий; «цыплёнок» поощряет балансирование на грани.",
      ),
      list(
        ["Prisoner's dilemma: (defect, defect) is the unique Nash", "Дилемма заключённого: (предать, предать) — единственное равновесие Нэша"],
        ["Matching pennies: no pure equilibrium, mix 50/50", "Орлянка: нет чистого равновесия, смешивать 50/50"],
        ["Stag hunt: cooperation vs safety", "Охота на оленя: кооперация против безопасности"],
      ),
    ]),
    topic("sequential", "Sequential and Evolutionary Games", "Последовательные и эволюционные игры", [
      p(
        "In sequential games, backward induction finds subgame-perfect equilibria. Evolutionary game theory replaces rationality with replication: evolutionarily stable strategies resist invasion by mutants.",
        "В последовательных играх обратная индукция находит совершенные в подыграх равновесия. Эволюционная теория игр заменяет рациональность размножением: эволюционно устойчивые стратегии отражают вторжение мутантов.",
      ),
      note(
        "Repeated interaction changes everything: the folk theorem sustains cooperation in the repeated prisoner's dilemma.",
        "Повторное взаимодействие меняет всё: «народная теорема» поддерживает кооперацию в повторяющейся дилемме заключённого.",
      ),
    ]),
  ],
  problems: [
    prob(
      "gt1", "easy",
      "In the one-shot prisoner's dilemma, what is each player's dominant strategy?",
      "В одноразовой дилемме заключённого какова доминирующая стратегия каждого игрока?",
      "Defect",
      "Предать",
      "Defecting pays more regardless of the opponent's choice, so it strictly dominates cooperation.",
      "Предательство выгоднее независимо от выбора противника, поэтому строго доминирует кооперацию.",
    ),
    prob(
      "gt2", "easy",
      "Does matching pennies have a pure-strategy Nash equilibrium?",
      "Есть ли у орлянки равновесие Нэша в чистых стратегиях?",
      "No",
      "Нет",
      "Whatever pair is chosen, one player wants to switch; only the 50/50 mixed profile is stable.",
      "Какую бы пару ни выбрали, один игрок хочет сменить выбор; устойчив только смешанный профиль 50/50.",
    ),
    prob(
      "gt3", "medium",
      "Coordination game: (A,A) pays (2,2), (B,B) pays (1,1), mismatches pay (0,0). Find all pure Nash equilibria.",
      "Игра координации: (A,A) даёт (2,2), (B,B) даёт (1,1), несовпадения дают (0,0). Найдите все чистые равновесия Нэша.",
      "(A,A) and (B,B)",
      "(A,A) и (B,B)",
      "At matching profiles, deviating alone drops the payoff to 0; at mismatches, either player gains by switching.",
      "В совпадающих профилях одиночное отклонение снижает выигрыш до 0; при несовпадении любой игрок выигрывает, сменив выбор.",
    ),
    prob(
      "gt4", "medium",
      "For the zero-sum matrix [[3, −1], [−2, 2]], does a pure saddle point exist?",
      "Для матрицы нулевой суммы [[3, −1], [−2, 2]] существует ли чистая седловая точка?",
      "No (maximin −1 ≠ minimax 2)",
      "Нет (максимин −1 ≠ минимакс 2)",
      "Row minima: −1, −2 → maximin −1. Column maxima: 3, 2 → minimax 2. They differ, so play must be mixed.",
      "Минимумы строк: −1, −2 → максимин −1. Максимумы столбцов: 3, 2 → минимакс 2. Они различны, значит игра смешанная.",
    ),
    prob(
      "gt5", "hard",
      "Find the mixed Nash equilibrium of matching pennies and the value of the game.",
      "Найдите смешанное равновесие Нэша орлянки и значение игры.",
      "Both mix 1/2–1/2; value 0",
      "Оба смешивают 1/2–1/2; значение 0",
      "Each player must make the opponent indifferent: p = 1/2. The game is symmetric zero-sum, so its value is 0.",
      "Каждый игрок должен сделать противника безразличным: p = 1/2. Игра симметрична с нулевой суммой, её значение 0.",
    ),
  ],
};
