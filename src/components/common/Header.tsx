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
    <header className="w-full bg-global-4 shadow-[0px_1px_2px_#0000000c] px-4 sm:px-6 lg:px-8 py-3 relative z-50">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 z-50 relative hover-scale" onClick={closeMenu}>
            <img
              src="/images/urokinetic-logo.svg"
              alt="UROKINETIC Logo"
              className="w-[40px] h-[44px] animate-fade-in hover:animate-pulse-soft"
            />
            <h1 className="text-lg sm:text-xl font-semibold text-global-1 font-poppins animate-fade-in-right">
              UROKINETIC
            </h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              {/* Анимированная иконка бургера */}
              <span
                className={`absolute left-0 top-1 w-6 h-0.5 bg-global-2 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`absolute left-0 top-3 w-6 h-0.5 bg-global-2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`absolute left-0 top-5 w-6 h-0.5 bg-global-2 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {/* Submenu Item */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-base font-normal text-global-2 hover:text-global-4 transition-colors duration-200"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={isSubMenuOpen}
                >
                  Dla specjalistów
                  <img
                    src="/images/img_arrow_down.svg"
                    alt="dropdown arrow"
                    className={`w-3 h-3 mb-1 transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isSubMenuOpen && (
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50 animate-fade-in" role="menu">
                    <li role="menuitem">
                      <a href="#" className="block px-4 py-2 text-sm text-global-2 hover:bg-gray-50 transition-colors">Dla lekarzy</a>
                    </li>
                    <li role="menuitem">
                      <a href="#" className="block px-4 py-2 text-sm text-global-2 hover:bg-gray-50 transition-colors">Dla weterynarzy</a>
                    </li>
                    <li role="menuitem">
                      <a href="#" className="block px-4 py-2 text-sm text-global-2 hover:bg-gray-50 transition-colors">Szkolenia</a>
                    </li>
                  </ul>
                )}
              </div>

              {/* Regular Menu Items */}
              <Link
                to="/o-nas"
                className="text-base font-normal text-global-2 hover:text-global-4 transition-colors duration-200"
              >
                O nas
              </Link>
              <Link
                to="/ceny"
                className="text-base font-normal text-global-2 hover:text-global-4 transition-colors duration-200"
              >
                Cennik
              </Link>
              <Link
                to="/kontakt"
                className="text-base font-normal text-global-2 hover:text-global-4 transition-colors duration-200"
              >
                Kontakt
              </Link>
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="medium"
              className="px-6 py-2"
              onClick={() => navigate('/kontakt')}
            >
              Skontaktuj się z nami
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-global-2">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 px-6 py-4 space-y-1">
            {/* Specialists submenu */}
            <div className="space-y-1">
              <button
                className="w-full text-left px-4 py-3 text-base font-medium text-global-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
                Dla specjalistów
                <img
                  src="/images/img_arrow_down.svg"
                  alt="expand"
                  className={`w-3 h-3 transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {isSubMenuOpen && (
                <div className="ml-4 space-y-1 animate-fade-in">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-global-3 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    Dla lekarzy
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-global-3 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    Dla weterynarzy
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-global-3 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    Szkolenia
                  </a>
                </div>
              )}
            </div>

            {/* Main navigation items */}
            <Link
              to="/o-nas"
              className="block px-4 py-3 text-base font-medium text-global-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              O nas
            </Link>
            <Link
              to="/ceny"
              className="block px-4 py-3 text-base font-medium text-global-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Cennik
            </Link>
            <Link
              to="/kontakt"
              className="block px-4 py-3 text-base font-medium text-global-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-gray-100">
            <Button
              variant="primary"
              size="medium"
              fullWidth
              className="py-3"
              onClick={() => {
                closeMenu();
                navigate('/kontakt');
              }}
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;