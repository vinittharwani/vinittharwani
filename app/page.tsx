// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] text-[#1a1a1a] font-mono antialiased">
      {/* Top Navigation Bar */}
      <nav className="w-full border-b border-gray-200 py-4 mb-12">
        <div className="max-w-2xl mx-auto px-4 flex justify-end space-x-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-black font-semibold text-black">Vinit Tharwani</Link>
          <Link href="/writing" className="hover:text-black">Writing</Link>
          <Link href="/bookshelf" className="hover:text-black">Bookshelf</Link>
          <Link href="/papershelf" className="hover:text-black">Papershelf</Link>
          <Link href="/about" className="hover:text-black">About</Link>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="max-w-2xl mx-auto px-4 pb-24 space-y-10">
        
        {/* Intro Section */}
        <section className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-black">Vinit Tharwani</h1>
          <p className="text-gray-600 text-sm">
            Software Engineer & Independent Researcher.
          </p>
          <p className="text-gray-800 text-sm leading-relaxed">
            I work at the intersection of high-performance computing (C++, Go, Python, Rust), 
            biophysics simulations, and systems architecture. I believe in cross-disciplinary, T-shaped learning.
          </p>
          <div className="text-sm space-x-2 pt-2">
            <span className="text-gray-500">Links:</span>
            <a href="https://github.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">[Substack]</a>
            <a href="https://kaggle.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">[Twitter]</a>
            <a href="https://codeforces.com/profile/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">[GitHub]</a>
          </div>
        </section>

        {/* Profile / Research Image Placeholder */}
        <section>
          <div className="w-48 h-48 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-xs text-gray-500">
            [ Your Profile Picture ]
          </div>
        </section>

        {/* Research Focus Section */}
        <section className="space-y-4 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-black">Current Focus</h2>
          <p className="text-gray-800 text-sm leading-relaxed">
            Right now I am building small distributed systems from first principles — queues, consensus, 
            raw socket servers — and pairing that with biophysics simulations exploring how in-silico models 
            might one day accelerate early-stage drug testing.
          </p>
          
          {/* Quote Block */}
          <blockquote className="border-l-2 border-gray-400 pl-4 italic text-sm text-gray-700 py-1 my-4">
            "Organisms are not passive recipients of environmental pressures; they often modify their environment, 
            thereby affecting their own evolution and that of others."
            <span className="block text-right not-italic text-xs text-gray-500 mt-2">— Niles Eldredge and Stephen Jay Gould</span>
          </blockquote>
        </section>

      </main>
    </div>
  );
}
