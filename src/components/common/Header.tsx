import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navigate = useNavigate();



  // Закрытие меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsSubmenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSubmenuOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubmenuOpen(false);
  };

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as Element;
        const header = document.querySelector('header');
        if (header && !header.contains(target)) {
          closeMenu();
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3 sm:py-4 lg:py-5 transition-all duration-300 ease-out">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 relative hover-scale" onClick={closeMenu}>
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-sm transition-all duration-300">
              <img
                src="/images/urokinetic-logo.svg"
                alt="UROKINETIC Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
              />
            </div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold font-poppins text-gray-900 transition-all duration-300">
              UROKINETIC
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <div className="flex items-center gap-8 xl:gap-10">
              {/* Regular Menu Items */}
              <Link
                to="/o-nas"
                className="text-base lg:text-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                O nas
              </Link>

              <Link
                to="/oferta"
                className="text-base lg:text-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Oferta
              </Link>

              <Link
                to="/ceny"
                className="text-base lg:text-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Cennik
              </Link>

              {/* Submenu Item */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 text-base lg:text-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={isSubmenuOpen}
                >
                  Dla specjalistów
                  <svg
                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSubmenuOpen && (
                  <ul className="absolute top-full right-0 mt-3 bg-white shadow-xl rounded-2xl py-3 min-w-[220px] z-50 animate-fade-in border border-gray-100" role="menu">
                    <li role="menuitem">
                      <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors text-base font-medium">Dla lekarzy</a>
                    </li>
                    <li role="menuitem">
                      <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors text-base font-medium">Dla weterynarzy</a>
                    </li>
                    <li role="menuitem">
                      <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors text-base font-medium">Szkolenia</a>
                    </li>
                  </ul>
                )}
              </div>

              <Link
                to="/kontakt"
                className="text-base lg:text-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Kontakt
              </Link>
            </div>

            {/* CTA Button */}
            <div
              className="px-4 lg:px-6 py-2 lg:py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 cursor-pointer text-white"
              style={{
                backgroundColor: '#7db3c9',
                borderColor: '#7db3c9'
              }}
              onMouseEnter={(e) => (e.target as HTMLDivElement).style.backgroundColor = '#6ba3b9'}
              onMouseLeave={(e) => (e.target as HTMLDivElement).style.backgroundColor = '#7db3c9'}
            >
              <button
                className="text-sm lg:text-base font-semibold whitespace-nowrap"
                onClick={() => navigate('/kontakt')}
              >
                Skontaktuj się
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-lg transition-colors duration-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out transform ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="space-y-2">
              <Link
                to="/o-nas"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                O nas
              </Link>

              <Link
                to="/oferta"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Oferta
              </Link>

              <Link
                to="/ceny"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Cennik
              </Link>

              {/* Specialists Menu */}
              <div className="space-y-1">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                  <span>Dla specjalistów</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Submenu */}
                {isSubmenuOpen && (
                  <div className="ml-4 space-y-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      Dla lekarzy
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      Dla weterynarzy
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      Szkolenia
                    </a>
                  </div>
                )}
              </div>

              <Link
                to="/kontakt"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Kontakt
              </Link>

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <button
                  className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: '#7db3c9' }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#6ba3b9'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#7db3c9'}
                  onClick={() => {
                    closeMenu();
                    navigate('/kontakt');
                  }}
                >
                  Skontaktuj się
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;