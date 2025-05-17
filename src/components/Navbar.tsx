import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary dark:text-white">
            JP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary">
              Home
            </Link>
            <Link to="/projects" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}