export interface Bilingual {
  en: string;
  ru: string;
}

export type Block =
  | { type: "p"; text: Bilingual }
  | { type: "formula"; latex: string; unicode: string; caption?: Bilingual }
  | { type: "list"; items: Bilingual[] }
  | { type: "note"; text: Bilingual };

export interface Topic {
  id: string;
  title: Bilingual;
  blocks: Block[];
}

export type Difficulty = "easy" | "medium" | "hard";

export interface Problem {
  id: string;
  difficulty: Difficulty;
  question: Bilingual;
  answer: Bilingual;
  solution: Bilingual;
}

export interface Section {
  slug: string;
  title: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  topics: Topic[];
  problems: Problem[];
}

export type Lang = "en" | "ru";
