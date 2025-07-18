import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-footer-1 mt-16 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-8">
          {/* Logo and Social Section */}
          <div className="flex flex-col gap-6 w-full lg:w-auto text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <img
                src="/images/urokinetic-logo.svg"
                alt="UROKINETIC Logo"
                className="w-[40px] h-[44px] brightness-0 invert"
              />
              <h1 className="text-xl sm:text-2xl font-semibold text-global-5 font-poppins">
                UROKINETIC
              </h1>
            </div>
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <img
                  src="/images/img_frame.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <img
                  src="/images/img_frame_teal_200_01.svg"
                  alt="Twitter"
                  className="w-5 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <img
                  src="/images/img_frame_teal_200_01_20x16.svg"
                  alt="LinkedIn"
                  className="w-5 h-6"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row justify-center items-start gap-8 lg:gap-16 w-full lg:w-auto lg:flex-1 lg:justify-center text-center lg:text-left">
            {/* Pages Section */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <h3 className="text-lg font-semibold text-global-5 font-poppins">Strony</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a href="/o-nas" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Oferta
                  </a>
                </li>
                <li>
                  <a href="/ceny" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Cennik
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Dla lekarzy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Dla weterynarzy
                  </a>
                </li>
                <li>
                  <a href="/kontakt" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Documents Section */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <h3 className="text-lg font-semibold text-global-5 font-poppins">Dokumenty</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a href="#" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Polityka Prywatności
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Polityka Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-normal text-footer-1 hover:text-global-5 transition-colors duration-200">
                    Licencja
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:max-w-[280px] text-center lg:text-left">
            <h3 className="text-lg font-semibold text-global-5 font-poppins">Kontakt</h3>
            <div className="space-y-3">
              <p className="text-sm font-normal text-footer-1 leading-relaxed">
                Urokinetic Sp. z o.o.<br />
                ul. Zielonecka 11/503<br />
                05-091 Ząbki, Polska
              </p>
              <div className="space-y-1">
                <p className="text-sm font-normal text-footer-1">
                  <a href="tel:+48501717989" className="hover:text-global-5 transition-colors">
                    +48 501 717 989
                  </a>
                </p>
                <p className="text-sm font-normal text-footer-1">
                  <a href="mailto:office@urokinetic.pl" className="hover:text-global-5 transition-colors">
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