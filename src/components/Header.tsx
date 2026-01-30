import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
            </li>
            {/*
            <li>
              <Link 
                to="/works" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Works
              </Link>
            </li>
            <li>
              <Link 
                to="/bio" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Bio
              </Link>
            </li>
            */}
            <li>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Home
              </Link>
            </li>
            {/*

            <li>
              <Link 
                to="/works" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Works
              </Link>
            </li>
            <li>
              <Link 
                to="/bio" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Bio
              </Link>
            </li>
            */}
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
