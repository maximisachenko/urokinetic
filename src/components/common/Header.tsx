import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Закрытие меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3 sm:py-4 lg:py-5 transition-all duration-300 ease-out">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 z-50 relative hover-scale" onClick={closeMenu}>
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 sm:p-3 z-50 relative rounded-lg bg-white shadow-sm"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
              {/* Анимированная иконка бургера */}
              <span
                className={`absolute left-0 top-1 w-5 sm:w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`absolute left-0 top-2.5 sm:top-3 w-5 sm:w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-4 sm:top-5 w-5 sm:w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>

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
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={isSubMenuOpen}
                >
                  Dla specjalistów
                  <svg
                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSubMenuOpen && (
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
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <nav
        className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="/images/urokinetic-logo.svg"
                alt="UROKINETIC Logo"
                className="w-8 h-8"
              />
              <span className="text-lg font-semibold text-gray-900">UROKINETIC</span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 py-6 overflow-y-auto">
            <div className="px-6 space-y-2">
              <Link
                to="/o-nas"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                O nas
              </Link>

              <Link
                to="/oferta"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Oferta
              </Link>

              <Link
                to="/ceny"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Cennik
              </Link>

              {/* Specialists submenu */}
              <div className="space-y-1">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                >
                  <span>Dla specjalistów</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isSubMenuOpen && (
                  <div className="ml-4 space-y-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      Dla lekarzy
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      Dla weterynarzy
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      Szkolenia
                    </a>
                  </div>
                )}
              </div>

              <Link
                to="/kontakt"
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <button
              className="w-full px-6 py-3 text-white text-lg font-semibold rounded-lg transition-colors"
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
        </div>
      </nav>
    </header>
  );
};

export default Header;