import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import MotionWrapper from '../../components/common/MotionWrapper';
import StaggerContainer from '../../components/common/StaggerContainer';

const AboutPage: React.FC = () => {
    return (
        <div className="w-full bg-global-4">
            <Header />

            {/* Section 1 - Hero with trust image */}
            <section className="relative w-full h-auto overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 mt-16 sm:mt-20">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9fafb_0%,_#ffffff_100%)]"></div>

                {/* Background wave pattern */}
                <div className="absolute top-0 right-0 w-full opacity-20">
                    <svg viewBox="0 0 1440 320" className="w-full h-auto">
                        <path fill="#7db3c9" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                        {/* Left content */}
                        <MotionWrapper variant="fadeInLeft" className="w-full lg:w-[50%] flex flex-col items-start gap-4 sm:gap-6 text-center lg:text-left">
                            <MotionWrapper variant="fadeInUp">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-global-2 leading-tight">
                                    Urokinetic — zabota i technologie
                                </h1>
                            </MotionWrapper>

                            <MotionWrapper variant="fadeInUp" delay={0.2}>
                                <p className="text-base sm:text-lg lg:text-xl text-global-3 leading-relaxed">
                                    Tworzymy innowacyjne rozwiązania dla leczenia nietrzymania i przywracania mobilności, które działają dla ludzi i zwierząt.
                                </p>
                            </MotionWrapper>
                        </MotionWrapper>

                        {/* Right professional image */}
                        <MotionWrapper variant="fadeInRight" delay={0.3} className="w-full lg:w-[50%] flex justify-center mt-6 lg:mt-0">
                            <img
                                src="/images/doctors/vid-speredi-vrac-i-zensina-poziruut.jpg"
                                alt="Profesjonalny zespół medyczny UROKINETIC"
                                className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto rounded-xl sm:rounded-2xl shadow-lg hover-lift object-cover"
                            />
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Section 2 - Company information */}
            <section className="w-full bg-global-3 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <MotionWrapper variant="fadeInUp">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-global-2 mb-6 sm:mb-8">
                                Kim jesteśmy
                            </h2>
                        </MotionWrapper>

                        <StaggerContainer className="text-sm sm:text-base lg:text-lg text-global-2 leading-relaxed space-y-4 sm:space-y-6" staggerDelay={0.2}>
                            <p>
                                Jesteśmy polską firmą specjalizującą się w projektowaniu i produkcji
                                zaawansowanych urządzeń medycznych oraz implantów ortopedycznych.
                                Nasza działalność koncentruje się na rozwiązaniach dedykowanych
                                problemom nietrzymania moczu oraz rehabilitacji układu ruchu.
                            </p>

                            <p>
                                Produkujemy wysokiej jakości implanty i urządzenia medyczne
                                przeznaczone zarówno dla medycyny ludzkiej, jak i weterynaryjnej.
                                Nasze produkty pomagają pacjentom odzyskać sprawność i poprawić
                                jakość życia.
                            </p>

                            <p>
                                Naszą misją jest usprawnienie procesu leczenia i rehabilitacji,
                                zapewniając bezbolesnę terapię oraz szybki powrót do pełnej aktywności.
                                Wierzymy, że każdy pacjent zasługuje na najwyższą jakość opieki medycznej.
                            </p>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Section 3 - Advantages */}
            <section className="w-full relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                {/* Light texture overlay */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(125, 179, 201, 0.08) 0%, transparent 60%),
                                   radial-gradient(circle at 75% 75%, rgba(155, 196, 212, 0.06) 0%, transparent 55%),
                                   radial-gradient(circle at 50% 10%, rgba(138, 187, 208, 0.05) 0%, transparent 65%),
                                   radial-gradient(circle at 10% 80%, rgba(184, 212, 224, 0.07) 0%, transparent 58%)`
                }}></div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                        <MotionWrapper variant="fadeInUp">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-global-2 mb-4 sm:mb-6">
                                Nasze przewagi
                            </h2>
                        </MotionWrapper>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.15}>
                        {/* Advantage 1 */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>
                            <div
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>
                            <div
                                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-25 group-hover:opacity-50 transition-all duration-700 group-hover:scale-200"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            {/* Content */}
                            <div className="relative">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #9bc4d4 0%, #8abbd0 100%)' }}
                                >
                                    <img
                                        src="/images/img_div.svg"
                                        alt="Security icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">
                                    Bezpieczeństwo
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Najwyższe standardy bezpieczeństwa zgodne z międzynarodowymi normami medycznymi.
                                </p>
                            </div>
                        </div>

                        {/* Advantage 2 */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#6ba3b9' }}
                            ></div>

                            {/* Content */}
                            <div className="relative">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #6ba3b9 0%, #7db3c9 100%)' }}
                                >
                                    <img
                                        src="/images/img_div_teal_200.svg"
                                        alt="Individual care icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">
                                    Indywidualne dopasowanie
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Każdy produkt dostosowany do unikalnych potrzeb pacjenta.
                                </p>
                            </div>
                        </div>

                        {/* Advantage 3 */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#8abbd0' }}
                            ></div>

                            {/* Content */}
                            <div className="relative">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #8abbd0 0%, #9bc4d4 100%)' }}
                                >
                                    <img
                                        src="/images/img_div_teal_200_64x64.svg"
                                        alt="Fast recovery icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">
                                    Szybka rekonwalescencja
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Innowacyjne rozwiązania przyspieszające proces zdrowienia.
                                </p>
                            </div>
                        </div>

                        {/* Advantage 4 */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>

                            {/* Content */}
                            <div className="relative">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #9bc4d4 0%, #8abbd0 100%)' }}
                                >
                                    <img
                                        src="/images/img_div_64x64.svg"
                                        alt="Quality icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">
                                    Najwyższa jakość
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Produkty wykonane z najlepszych materiałów biokompatybilnych.
                                </p>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Section 4 - History and values */}
            <section className="w-full bg-global-3 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left content */}
                        <MotionWrapper variant="fadeInLeft" className="w-full lg:w-[60%] flex flex-col gap-6">
                            <MotionWrapper variant="fadeInUp">
                                <h2 className="text-2xl sm:text-3xl font-bold text-global-2">
                                    Nasza historia i wartości
                                </h2>
                            </MotionWrapper>

                            <StaggerContainer className="space-y-6 text-lg text-global-2 leading-relaxed" staggerDelay={0.2}>
                                <p>
                                    Firma Urokinetic została założona w 2010 roku z wizją rewolucjonizacji
                                    podejścia do leczenia problemów urologicznych i ortopedycznych.
                                    Inspiracją dla nas była potrzeba stworzenia rozwiązań, które nie tylko
                                    skutecznie leczą, ale także minimalizują dyskomfort pacjentów.
                                </p>

                                <p>
                                    Od początku naszej działalności kierujemy się zasadą, że najlepsze
                                    rozwiązania medyczne powstają wtedy, gdy technologia spotyka się
                                    z głębokim zrozumieniem potrzeb pacjenta. Dlatego nasze produkty
                                    projektujemy z myślą o komforcie użytkowania oraz łatwości aplikacji.
                                </p>
                            </StaggerContainer>
                        </MotionWrapper>

                        {/* Right content - Professional Image */}
                        <MotionWrapper variant="fadeInRight" delay={0.3} className="w-full lg:w-[40%] flex justify-center">
                            <div className="relative group">
                                <img
                                    src="/images/doctors/uspesnyi-medicinskii-kollektiv.jpg"
                                    alt="Zespół medyczny UROKINETIC - profesjonalizm i doświadczenie"
                                    className="w-full max-w-[400px] h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 object-cover"
                                />
                                {/* Decorative overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Section 5 - Logo and company name explanation */}
            <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex flex-col items-center gap-8 mb-12">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/images/img_b784a262_9de8_4.png"
                                    alt="UROKINETIC Logo"
                                    className="w-[80px] h-[88px]"
                                />
                                <div className="text-left">
                                    <h1 className="text-4xl font-bold text-global-1 font-poppins">
                                        UROKINETIC
                                    </h1>
                                    <p className="text-lg text-global-3 mt-2">
                                        URO + KINETIC = Ruch w urologii
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-global-2 mb-8">
                            Znaczenie naszej marki
                        </h2>

                        <div className="space-y-6 text-lg text-global-2 leading-relaxed">
                            <p>
                                Nazwa "Urokinetic" łączy w sobie dwa kluczowe elementy naszej działalności:
                                <strong> "URO"</strong> - odnoszące się do urologii i problemów układu moczowego,
                                oraz <strong>"KINETIC"</strong> - symbolizujące ruch, dynamikę i przywracanie aktywności.
                            </p>

                            <p>
                                Nasze logo przedstawia eleganckie połączenie symboli medycznych z elementami
                                dynamiki, co odzwierciedla naszą misję łączenia precyzji medycznej
                                z innowacyjnymi rozwiązaniami technologicznymi.
                            </p>

                            <p>
                                Kolor przewodni naszej marki - spokojny turkusowy niebieski - został wybrany
                                nieprzypadkowo. Symbolizuje zaufanie, profesjonalizm oraz spokój,
                                które są fundamentem naszej pracy z pacjentami i partnerami medycznymi.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Button
                                variant="primary"
                                size="large"
                                className="px-8 py-3"
                            >
                                Poznaj naszą ofertę
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage; 