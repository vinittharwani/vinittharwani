// app/papershelf/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Papershelf — Vinit Tharwani",
};

type Paper = {
  title: string;
  authors: string;
  year: number;
  href: string;
};

const papers: Paper[] = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I.",
    year: 2017,
    href: "#",
  },
  {
    title: "What Every Programmer Should Know About Memory",
    authors: "Ulrich Drepper",
    year: 2007,
    href: "#",
  },
];

export default function PaperShelfPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Papershelf
        </h1>
        <p className="leading-relaxed text-gray-700">
          I like going deep into papers and implementing them.
        </p>
      </section>

      <hr className="border-t border-gray-300" />

      <section>
        <ol className="space-y-6">
          {papers.map((paper, index) => (
            <li key={paper.title} className="flex gap-3">
              <span className="text-gray-400">[{index + 1}]</span>
              <div className="space-y-1">
                <p className="font-semibold leading-snug text-gray-900">
                  {paper.title}
                </p>
                <p className="text-sm text-gray-600">
                  {paper.authors} ({paper.year})
                </p>
                
                  <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 underline-offset-4 hover:text-orange-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                
                  [PDF]
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}