// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] text-[#1a1a1a] font-mono antialiased">
      {/* Fixed Top Navigation Bar */}
      <nav className="w-full border-b border-gray-200 py-4 mb-10">
        <div className="max-w-[680px] w-full mx-auto px-4 flex justify-between items-center text-xs text-gray-600">
          <Link href="/" className="font-semibold text-black hover:underline">Vinit Tharwani</Link>
          <div className="flex space-x-4">
            <Link href="/writing" className="hover:text-black hover:underline">Writing</Link>
            <Link href="/bookshelf" className="hover:text-black hover:underline">Bookshelf</Link>
            <Link href="/papershelf" className="hover:text-black hover:underline">Papershelf</Link>
            <Link href="/about" className="hover:text-black hover:underline">About</Link>
          </div>
        </div>
      </nav>

      {/* Main Single-Column Container (Locked Width) */}
      <main className="max-w-[680px] w-full mx-auto px-4 pb-20 space-y-8">
        
        {/* Intro */}
        <section className="space-y-3">
          <h1 className="text-xl font-bold text-black tracking-tight">Vinit Tharwani</h1>
          <p className="text-xs text-gray-500">(Software Engineer & Independent Researcher)</p>
          
          <p className="text-xs leading-relaxed text-gray-800 pt-2">
            I work at the intersection of high-performance computing (C++, Go, Python, Rust), 
            biophysics simulations, and systems architecture. I believe in cross-disciplinary, T-shaped learning.
          </p>

          <div className="text-xs space-x-2 pt-1">
            <span className="text-gray-500">Links:</span>
            <a href="https://github.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">[GitHub]</a>
            <a href="https://kaggle.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">[Kaggle]</a>
            <a href="https://codeforces.com/profile/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">[Codeforces]</a>
          </div>
        </section>

        {/* Profile Picture Placeholder */}
        <section>
          <div className="w-36 h-36 bg-gray-200 border border-gray-300 flex items-center justify-center text-xs text-gray-500">
            [ Profile Picture ]
          </div>
        </section>

        {/* Current Focus Section */}
        <section className="space-y-3 border-t border-gray-200 pt-6">
          <h2 className="text-sm font-bold text-black">Current Focus</h2>
          <p className="text-xs leading-relaxed text-gray-800">
            Right now I am building small distributed systems from first principles — queues, consensus, 
            raw socket servers — and pairing that with biophysics simulations exploring how in-silico models 
            might one day accelerate early-stage drug testing.
          </p>
          
          <blockquote className="border-l border-gray-400 pl-3 italic text-xs text-gray-700 my-3">
            "Organisms are not passive recipients of environmental pressures; they often modify their environment, 
            thereby affecting their own evolution and that of others."
            <span className="block text-right not-italic text-[10px] text-gray-500 mt-1">— Niles Eldredge and Stephen Jay Gould</span>
          </blockquote>
        </section>

      </main>
    </div>
  );
}
