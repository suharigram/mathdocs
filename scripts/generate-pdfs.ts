import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import { sections } from "../lib/content";
import type { Block, Lang, Section } from "../lib/types";

const FONTS_DIR = path.join(__dirname, "fonts");
const OUT_DIR = path.join(__dirname, "..", "public", "pdfs");

const ACCENT = "#3B5CF6";
const INK = "#1D1D1D";
const GRAY = "#5F6368";
const LIGHT = "#F6F6F6";
const BORDER = "#E3E3E3";

const MARGIN = 56;

const labels = {
  en: {
    version: "English version",
    topics: "Theory",
    problems: "Practice Problems",
    problem: "Problem",
    answer: "Answer",
    solution: "Solution",
    note: "Note",
    difficulty: { easy: "Easy", medium: "Medium", hard: "Hard" },
    footer: "MathDocs — local study reference",
  },
  ru: {
    version: "Русская версия",
    topics: "Теория",
    problems: "Задачи для закрепления",
    problem: "Задача",
    answer: "Ответ",
    solution: "Решение",
    note: "Замечание",
    difficulty: { easy: "Лёгкая", medium: "Средняя", hard: "Сложная" },
    footer: "MathDocs — локальный учебный справочник",
  },
} as const;

function contentWidth(doc: PDFKit.PDFDocument): number {
  return doc.page.width - doc.page.margins.left - doc.page.margins.right;
}

function pageBottom(doc: PDFKit.PDFDocument): number {
  return doc.page.height - doc.page.margins.bottom;
}

function ensureSpace(doc: PDFKit.PDFDocument, needed: number): void {
  if (doc.y + needed > pageBottom(doc)) doc.addPage();
}

function drawFormula(doc: PDFKit.PDFDocument, unicode: string, caption?: string): void {
  const width = contentWidth(doc);
  const pad = 10;
  doc.font("sans-bold").fontSize(11.5);
  const textHeight = doc.heightOfString(unicode, { width: width - pad * 2, align: "center" });
  const captionHeight = caption
    ? doc.font("sans-italic").fontSize(9).heightOfString(caption, { width }) + 4
    : 0;
  const boxHeight = textHeight + pad * 2;
  ensureSpace(doc, boxHeight + captionHeight + 8);

  const x = doc.page.margins.left;
  const y = doc.y;
  doc.roundedRect(x, y, width, boxHeight, 6).fill(LIGHT);
  doc.fillColor(INK).font("sans-bold").fontSize(11.5);
  doc.text(unicode, x + pad, y + pad, { width: width - pad * 2, align: "center" });
  doc.y = y + boxHeight + 4;
  if (caption) {
    doc.fillColor(GRAY).font("sans-italic").fontSize(9);
    doc.text(caption, x, doc.y, { width, align: "center" });
  }
  doc.moveDown(0.6);
}

function drawBlock(doc: PDFKit.PDFDocument, block: Block, lang: Lang): void {
  const width = contentWidth(doc);
  const x = doc.page.margins.left;
  switch (block.type) {
    case "p":
      doc.fillColor(INK).font("sans").fontSize(10.5);
      doc.text(block.text[lang], x, doc.y, { width, lineGap: 3, align: "left" });
      doc.moveDown(0.6);
      break;
    case "formula":
      drawFormula(doc, block.unicode, block.caption?.[lang]);
      break;
    case "list":
      doc.fillColor(INK).font("sans").fontSize(10.5);
      for (const item of block.items) {
        ensureSpace(doc, 20);
        doc.fillColor(ACCENT).text("•", x + 4, doc.y, { continued: false, width: 10 });
        const bulletY = doc.y - doc.currentLineHeight();
        doc.fillColor(INK).text(item[lang], x + 18, bulletY, { width: width - 18, lineGap: 2 });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.4);
      break;
    case "note": {
      const text = `${labels[lang].note}: ${block.text[lang]}`;
      doc.font("sans-italic").fontSize(9.5);
      const h = doc.heightOfString(text, { width: width - 20, lineGap: 2 });
      ensureSpace(doc, h + 12);
      const y = doc.y;
      doc.rect(x, y, 3, h + 4).fill(ACCENT);
      doc.fillColor(GRAY).font("sans-italic").fontSize(9.5);
      doc.text(text, x + 14, y + 2, { width: width - 20, lineGap: 2 });
      doc.y = y + h + 10;
      break;
    }
  }
}

function addFooters(doc: PDFKit.PDFDocument, section: Section, lang: Lang): void {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    const y = doc.page.height - 40;
    doc.font("sans").fontSize(8).fillColor(GRAY);
    doc.text(`${labels[lang].footer} · ${section.title[lang]}`, MARGIN, y, {
      width: contentWidth(doc),
      align: "left",
      lineBreak: false,
    });
    doc.text(`${i + 1} / ${range.count}`, MARGIN, y, {
      width: contentWidth(doc),
      align: "right",
      lineBreak: false,
    });
  }
}

function buildPdf(section: Section, lang: Lang, outFile: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: MARGIN, bottom: 64, left: MARGIN, right: MARGIN },
      bufferPages: true,
      info: {
        Title: `MathDocs — ${section.title[lang]} (${lang.toUpperCase()})`,
        Author: "MathDocs",
        Subject: section.tagline[lang],
      },
    });
    const stream = fs.createWriteStream(outFile);
    doc.pipe(stream);
    stream.on("finish", () => resolve());
    stream.on("error", reject);

    doc.registerFont("sans", path.join(FONTS_DIR, "DejaVuSans.ttf"));
    doc.registerFont("sans-bold", path.join(FONTS_DIR, "DejaVuSans-Bold.ttf"));
    doc.registerFont("sans-italic", path.join(FONTS_DIR, "DejaVuSans-Oblique.ttf"));

    const width = contentWidth(doc);
    const x = doc.page.margins.left;
    const L = labels[lang];

    doc.font("sans-bold").fontSize(11).fillColor(ACCENT).text("MathDocs", x, doc.y);
    doc.moveDown(0.4);
    doc.font("sans-bold").fontSize(26).fillColor(INK).text(section.title[lang], x, doc.y);
    doc.moveDown(0.2);
    doc.font("sans-italic").fontSize(12).fillColor(GRAY).text(section.tagline[lang], x, doc.y);
    doc.moveDown(0.3);
    doc.font("sans").fontSize(9).fillColor(ACCENT).text(L.version.toUpperCase(), x, doc.y, {
      characterSpacing: 1,
    });
    doc.moveDown(0.6);
    doc.rect(x, doc.y, width, 3).fill(ACCENT);
    doc.y += 16;

    doc.font("sans").fontSize(10.5).fillColor(INK);
    doc.text(section.description[lang], x, doc.y, { width, lineGap: 3 });
    doc.moveDown(1);

    doc.font("sans-bold").fontSize(16).fillColor(INK).text(L.topics, x, doc.y);
    doc.moveDown(0.5);

    section.topics.forEach((t, i) => {
      ensureSpace(doc, 60);
      doc.font("sans-bold").fontSize(13);
      doc.fillColor(ACCENT).text(`${i + 1}. `, x, doc.y, { continued: true });
      doc.fillColor(INK).text(t.title[lang]);
      doc.moveDown(0.35);
      for (const block of t.blocks) drawBlock(doc, block, lang);
      doc.moveDown(0.5);
    });

    doc.addPage();
    doc.font("sans-bold").fontSize(16).fillColor(INK).text(L.problems, x, doc.y);
    doc.moveDown(0.2);
    doc.font("sans").fontSize(9.5).fillColor(GRAY);
    doc.text(
      lang === "en"
        ? "Try each problem before revealing the answer. Full solutions follow every answer."
        : "Попробуйте решить каждую задачу самостоятельно, прежде чем смотреть ответ. После каждого ответа приведено полное решение.",
      x,
      doc.y,
      { width },
    );
    doc.moveDown(0.8);

    section.problems.forEach((pr, i) => {
      ensureSpace(doc, 90);
      doc.font("sans-bold").fontSize(11).fillColor(INK);
      doc.text(`${L.problem} ${i + 1}`, x, doc.y, { continued: true });
      doc.fillColor(ACCENT).text(`  ·  ${L.difficulty[pr.difficulty]}`);
      doc.moveDown(0.25);
      doc.font("sans").fontSize(10.5).fillColor(INK);
      doc.text(pr.question[lang], x, doc.y, { width, lineGap: 2 });
      doc.moveDown(0.3);
      doc.font("sans-bold").fontSize(10).fillColor(INK);
      doc.text(`${L.answer}: `, x, doc.y, { continued: true });
      doc.font("sans").fillColor("#3B5CF6").text(pr.answer[lang]);
      doc.moveDown(0.2);
      doc.font("sans-bold").fontSize(10).fillColor(INK);
      doc.text(`${L.solution}: `, x, doc.y, { continued: true });
      doc.font("sans").fontSize(10).fillColor(GRAY).text(pr.solution[lang], { width: width - 4, lineGap: 2 });
      doc.moveDown(0.4);
      if (i < section.problems.length - 1) {
        ensureSpace(doc, 16);
        doc.rect(x, doc.y, width, 0.7).fill(BORDER);
        doc.y += 10;
      }
    });

    addFooters(doc, section, lang);
    doc.end();
  });
}

async function main(): Promise<void> {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const section of sections) {
    for (const lang of ["en", "ru"] as Lang[]) {
      const outFile = path.join(OUT_DIR, `${section.slug}-${lang}.pdf`);
      await buildPdf(section, lang, outFile);
      const kb = (fs.statSync(outFile).size / 1024).toFixed(1);
      console.log(`✓ ${path.basename(outFile)} (${kb} KB)`);
    }
  }
  console.log(`Done: ${sections.length * 2} PDFs in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
