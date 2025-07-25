import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-8 mb-6 sm:mb-8">
          {/* Logo and Social Section */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-auto text-center lg:text-left">
            <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
              <img
                src="/images/urokinetic-logo.svg"
                alt="UROKINETIC Logo"
                className="w-8 h-9 sm:w-[40px] sm:h-[44px] brightness-0 invert"
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white font-poppins">
                UROKINETIC
              </h1>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <img
                  src="/images/img_frame.svg"
                  alt="Facebook"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <img
                  src="/images/img_frame_teal_200_01.svg"
                  alt="Twitter"
                  className="w-4 h-5 sm:w-5 sm:h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <img
                  src="/images/img_frame_teal_200_01_20x16.svg"
                  alt="LinkedIn"
                  className="w-4 h-5 sm:w-5 sm:h-6"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-16 w-full lg:w-auto lg:flex-1 lg:justify-center text-center lg:text-left">
            {/* Pages Section */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
              <h3 className="text-base sm:text-lg font-semibold text-white font-poppins">Strony</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a href="/o-nas" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Oferta
                  </a>
                </li>
                <li>
                  <a href="/ceny" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Cennik
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Dla lekarzy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Dla weterynarzy
                  </a>
                </li>
                <li>
                  <a href="/kontakt" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Documents Section */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
              <h3 className="text-base sm:text-lg font-semibold text-white font-poppins">Dokumenty</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a href="#" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Polityka Prywatności
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Polityka Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors duration-200">
                    Licencja
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto lg:max-w-[280px] text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white font-poppins">Kontakt</h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm font-normal text-gray-200 leading-relaxed">
                Urokinetic Sp. z o.o.<br />
                ul. Nowy Świat 57/59 lok. 12<br />
                00-042 Warszawa, Polska
              </p>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-normal text-gray-200">
                  <a href="tel:+48501717989" className="hover:text-white transition-colors">
                    +48 501 717 989
                  </a>
                </p>
                <p className="text-xs sm:text-sm font-normal text-gray-200">
                  <a href="mailto:office@urokinetic.pl" className="hover:text-white transition-colors">
                    office@urokinetic.pl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;