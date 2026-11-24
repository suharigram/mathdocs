import type { Bilingual, Block, Difficulty, Problem, Topic } from "../types";

export const bi = (en: string, ru: string): Bilingual => ({ en, ru });

export const p = (en: string, ru: string): Block => ({
  type: "p",
  text: bi(en, ru),
});

export const formula = (
  latex: string,
  unicode: string,
  captionEn?: string,
  captionRu?: string,
): Block => ({
  type: "formula",
  latex,
  unicode,
  caption: captionEn && captionRu ? bi(captionEn, captionRu) : undefined,
});

export const list = (...items: [string, string][]): Block => ({
  type: "list",
  items: items.map(([en, ru]) => bi(en, ru)),
});

export const note = (en: string, ru: string): Block => ({
  type: "note",
  text: bi(en, ru),
});

export const topic = (
  id: string,
  titleEn: string,
  titleRu: string,
  blocks: Block[],
): Topic => ({ id, title: bi(titleEn, titleRu), blocks });

export const prob = (
  id: string,
  difficulty: Difficulty,
  questionEn: string,
  questionRu: string,
  answerEn: string,
  answerRu: string,
  solutionEn: string,
  solutionRu: string,
): Problem => ({
  id,
  difficulty,
  question: bi(questionEn, questionRu),
  answer: bi(answerEn, answerRu),
  solution: bi(solutionEn, solutionRu),
});
