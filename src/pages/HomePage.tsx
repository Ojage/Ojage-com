export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 font-sans">
      <header className="flex justify-between items-center px-8 py-6 shadow-sm bg-white">
        <h1 className="text-3xl font-bold tracking-tight">OJAGE</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="https://salathiel.ojage.com" className="hover:text-blue-600 transition">Salathiel</a>
          <a href="https://ai.ojage.com" className="hover:text-blue-600 transition">AI Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Engineering the Future
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          A digital ecosystem for AI innovation, personal growth, and purposeful family legacy.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="https://salathiel.ojage.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition shadow">
            Visit My Portfolio
          </a>
          <a href="https://ai.ojage.com" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl text-sm font-semibold transition">
            Explore AI Projects
          </a>
        </div>
      </main>

      <footer className="px-8 py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} OJAGE. Built with intention.
      </footer>
    </div>
  );
}