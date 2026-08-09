// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcf9] text-[#1a1a1a] font-mono">
      {/* Centered Container that works on Desktop AND Mobile */}
      <div className="max-w-[650px] w-full mx-auto px-4 py-6">
        
        {/* Navigation Bar (Identical on all screens) */}
        <nav className="w-full border-b border-gray-300 pb-2 mb-8 flex justify-between items-center text-sm">
          <Link href="/" className="font-semibold text-blue-600 border-b-2 border-amber-500 pb-2 -mb-2">
            Vinit Tharwani
          </Link>
          <div className="flex space-x-6 text-gray-700">
            <Link href="/writing" className="hover:text-black">Writing</Link>
            <Link href="/about" className="hover:text-black">About</Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="space-y-6">
          
          {/* Header Info */}
          <section className="space-y-3">
            <h1 className="text-xl font-bold text-black">Vinit Tharwani</h1>
            <p className="text-xs text-gray-600">(Software Developer & Independent Researcher)</p>
            
            <p className="text-sm leading-relaxed text-gray-800">
              I work with Distributed systems, Deep learning, and Systems architecture, while exploring computational fields like Biology and Neuroscience.
              I believe in cross-disciplinary learning.
            </p>

            <div className="text-sm space-x-2 pt-1">
              <span className="text-gray-600">Links:</span>
              <a href="https://codeforces.com/profile/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Codeforces]</a>
              <a href="https://kaggle.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Kaggle]</a>
              <a href="https://github.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[GitHub]</a>
            </div>
          </section>

          {/* Profile Picture */}
          <section className="pt-2">
            <div className="w-44 h-48 bg-gray-200 border border-gray-300 rounded-sm overflow-hidden flex items-center justify-center text-xs text-gray-500">
              [ Your Profile Photo ]
            </div>
          </section>

          {/* Research Focus */}
          <section className="space-y-3 pt-4">
            <h2 className="text-base font-bold text-black">Current Research Focus</h2>
            <p className="text-sm leading-relaxed text-gray-800">
              I'm deeply interested in <strong className="font-bold">distributed systems</strong>—building 
              queues, consensus engines, and raw socket servers from scratch, paired with biophysics simulations.
            </p>
            <p className="text-sm leading-relaxed text-gray-800">
              I believe that we can use Artificial Intelligence to solve complex problems in Biology and Neuroscience.
            </p>
            
            {/* Quote Box */}
            <blockquote className="border-l-2 border-gray-300 pl-4 italic text-xs text-gray-700 my-4 py-1 space-y-2">
              <p>"Organisms are not passive recipients of environmental pressures; they often modify their environment."</p>
              <footer className="text-right not-italic text-gray-500 text-[11px]">— Niles Eldredge and Stephen Jay Gould</footer>
            </blockquote>
          </section>

        </main>
      </div>
    </div>
  );
}
