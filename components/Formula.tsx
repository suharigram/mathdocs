import katex from "katex";

export default function Formula({ latex }: { latex: string }) {
  const html = katex.renderToString(latex, {
    displayMode: true,
    throwOnError: false,
    strict: false,
  });
  return (
    <div
      className="formula-box overflow-x-auto rounded-lg border border-line bg-wash px-4 py-4 text-center"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
