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
    title: "Simulated Annealing Approaches to the HP Lattice Protein Folding Problem",
    authors: "Doe, J., Smith, A.",
    year: 2021,
    href: "#",
  },
  {
    title: "A Minimal Equivalent-Circuit Model for Excitable Membranes",
    authors: "Lee, K., Fischer, R., Nakamura, T.",
    year: 2019,
    href: "#",
  },
];

export default function PaperShelfPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Paper Shelf
        </h1>
        <p className="leading-relaxed text-gray-700">
          I read papers the way most people read the news — as a way of
          staying oriented. Primary sources force a precision that
          secondhand summaries erase, and reading outside my immediate
          stack keeps the T-shape honest. This is a running shelf of
          what&apos;s shaped my thinking recently, kept mostly unannotated
          on purpose.
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
