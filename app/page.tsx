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
          <div className="flex gap-6 text-gray-700">
            <Link href="/writing" className="hover:text-black">Writing</Link>
            <Link href="/about" className="hover:text-black">About</Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="space-y-6">
          
          {/* Header Info */}
          <section className="space-y-3">
            <h1 className="text-xl font-bold text-black">Vinit Tharwani</h1>
            <p className="text-xs text-gray-600">Software Developer</p>

            <div className="text-sm space-x-2 pt-1">
              <span className="text-gray-600">Links:</span>
              <a href="https://codeforces.com/profile/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Codeforces]</a>
              <a href="https://github.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[GitHub]</a>
              <a href="https://kaggle.com/vinittharwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[Kaggle]</a>
            </div>
          </section>

          {/* Current Focus */}
          <section className="space-y-3 pt-4">
            <h2 className="text-base font-bold text-black">Current Focus</h2>
            <p className="text-sm leading-relaxed text-gray-800">
              I'm deeply interested in <strong className="font-bold">Distributed Systems and Machine Learning.</strong>
            </p>
            </section>
        </main>
      </div>
    </div>
  );
}
