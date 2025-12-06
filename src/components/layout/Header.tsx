import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMoon, FiSun, FiGlobe, FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { ROUTES } from '../../lib/constants/routes';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { label: 'Languages', href: ROUTES.LANGUAGES },
    { label: 'Demo', href: ROUTES.DEMO },
    { label: 'Research', href: ROUTES.RESEARCH },
    { label: 'Contribute', href: ROUTES.CONTRIBUTE },
    { label: 'Community', href: ROUTES.COMMUNITY },
    { label: 'Blog', href: ROUTES.BLOG },
    { label: 'About', href: ROUTES.ABOUT },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center gap-2">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 text-emerald-600 dark:text-emerald-500">
              <path
                d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5Z"
                fill="currentColor"
                className="drop-shadow-sm"
              />
            </svg>
            <span className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-emerald-600 dark:text-emerald-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Tools */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-64 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 pl-9 pr-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
            <button
              aria-label="Language"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FiGlobe className="h-5 w-5" />
            </button>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FiGithub className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
