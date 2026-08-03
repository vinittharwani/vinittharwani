// app/page.tsx
export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Vinit Tharwani
        </h1>

        <p className="leading-relaxed text-gray-700">
          Software Engineer & Computational Systems Researcher. I work at
          the intersection of high-performance computing (C++, Go, Python,
          Rust), biophysics simulations, and systems architecture. I
          believe in cross-disciplinary, T-shaped learning.
        </p>

        <div className="flex gap-4 text-sm">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 underline-offset-4 hover:text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            [Substack]
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 underline-offset-4 hover:text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            [Twitter]
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 underline-offset-4 hover:text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            [GitHub]
          </a>
        </div>
      </section>

      <hr className="border-t border-gray-300" />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Current Focus
        </h2>
        <p className="leading-relaxed text-gray-700">
          Right now I am building small distributed systems from first
          principles — queues, consensus, raw socket servers — and pairing
          that with biophysics simulations exploring how in-silico models
          might one day accelerate early-stage drug testing. The long-term
          goal is a research toolkit that sits at the seam between systems
          engineering and computational biology.
        </p>
      </section>
    </div>
  );
}
