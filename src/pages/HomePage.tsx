import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 font-sans">
      <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold tracking-tight">OJAGE</h1>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 focus:outline-none focus:ring text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        <nav className="hidden md:flex space-x-4 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="https://salathiel.ojage.com" className="hover:text-blue-600 transition">Salathiel</a>
          <a href="https://ai.ojage.com" className="hover:text-blue-600 transition">AI Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 z-20 flex flex-col items-center justify-center space-y-6 text-lg font-medium text-gray-700">
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">About</a>
          <a href="https://salathiel.ojage.com" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Salathiel</a>
          <a href="https://ai.ojage.com" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">AI Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">Contact</a>
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-8 text-gray-500 text-sm"
          >
            Close ✕
          </button>
        </div>
      )}

      <main className="flex flex-col items-center justify-center text-center px-6 py-20 flex-grow">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Engineering the Future
        </h2>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl">
          A digital ecosystem for AI innovation, personal growth, and purposeful family legacy.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="https://salathiel.ojage.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition shadow">
            Visit My Portfolio
          </a>
          <a href="https://ai.ojage.com" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl text-sm font-semibold transition">
            Explore AI Projects
          </a>
        </div>
      </main>

      <footer className="px-6 py-4 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} OJAGE. Built with intention.
      </footer>
    </div>
  );
}
