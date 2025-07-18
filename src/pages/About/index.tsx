import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const AboutPage: React.FC = () => {
    return (
        <div className="w-full bg-global-4">
            <Header />

            {/* Section 1 - Hero with trust image */}
            <section className="relative w-full h-auto overflow-hidden py-16 sm:py-20 lg:py-24">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9fafb_0%,_#ffffff_100%)]"></div>

                {/* Background wave pattern */}
                <div className="absolute top-0 right-0 w-full opacity-20">
                    <svg viewBox="0 0 1440 320" className="w-full h-auto">
                        <path fill="#7db3c9" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left content */}
                        <div className="w-full lg:w-[50%] flex flex-col items-start gap-6 animate-fade-in-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-global-2 leading-tight animate-fade-in-up">
                                Urokinetic — zabota i technologie
                            </h1>

                            <p className="text-lg sm:text-xl text-global-3 leading-relaxed animate-fade-in-up animate-stagger-1">
                                Tworzymy innowacyjne rozwiązania dla leczenia nietrzymania i przywracania mobilności, które działają dla ludzi i zwierząt.
                            </p>
                        </div>

                        {/* Right trust image */}
                        <div className="w-full lg:w-[50%] flex justify-center animate-fade-in-right">
                            <img
                                src="/images/img_36885291_7726_4.png"
                                alt="Uśmiechnięta starsza pani - symbol zaufania"
                                className="w-full max-w-[400px] h-auto rounded-2xl shadow-lg hover-lift animate-scale-in"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 - Company information */}
            <section className="w-full bg-global-3 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-global-2 mb-8">
                            Kim jesteśmy
                        </h2>

                        <div className="text-lg text-global-2 leading-relaxed space-y-6">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Advantages (duplicated from main page) */}
            <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-global-2 mb-6">
                            Nasze przewagi
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {/* Advantage 1 */}
                        <div className="bg-global-4 border border-gray-100 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-1">
                            <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-1">
                                <img
                                    src="/images/img_div.svg"
                                    alt="Security icon"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-3">
                                Bezpieczeństwo
                            </h3>
                            <p className="text-sm text-global-3 leading-relaxed">
                                Najwyższe standardy bezpieczeństwa zgodne z międzynarodowymi normami medycznymi.
                            </p>
                        </div>

                        {/* Advantage 2 */}
                        <div className="bg-global-4 border border-gray-100 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-2">
                            <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-2">
                                <img
                                    src="/images/img_div_teal_200.svg"
                                    alt="Individual care icon"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-3">
                                Indywidualne dopasowanie
                            </h3>
                            <p className="text-sm text-global-3 leading-relaxed">
                                Każdy produkt dostosowany do unikalnych potrzeb pacjenta.
                            </p>
                        </div>

                        {/* Advantage 3 */}
                        <div className="bg-global-4 border border-gray-100 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-3">
                            <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-3">
                                <img
                                    src="/images/img_div_teal_200_64x64.svg"
                                    alt="Fast recovery icon"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-3">
                                Szybka rekonwalescencja
                            </h3>
                            <p className="text-sm text-global-3 leading-relaxed">
                                Innowacyjne rozwiązania przyspieszające proces zdrowienia.
                            </p>
                        </div>

                        {/* Advantage 4 */}
                        <div className="bg-global-4 border border-gray-100 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-4">
                            <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-4">
                                <img
                                    src="/images/img_div_64x64.svg"
                                    alt="Quality icon"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-3">
                                Najwyższa jakość
                            </h3>
                            <p className="text-sm text-global-3 leading-relaxed">
                                Produkty wykonane z najlepszych materiałów biokompatybilnych.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 - History and values */}
            <section className="w-full bg-global-3 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left content */}
                        <div className="w-full lg:w-[60%] flex flex-col gap-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-global-2">
                                Nasza historia i wartości
                            </h2>

                            <div className="space-y-6 text-lg text-global-2 leading-relaxed">
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

                                <p>
                                    Nasza filozofia opiera się na trosce nie tylko o pacjentów, ale także
                                    o lekarzy i weterynarzy, którzy używają naszych produktów. Zapewniamy
                                    kompleksowe wsparcie techniczne, szkolenia oraz stały rozwój naszych
                                    rozwiązań w oparciu o feedback od specjalistów.
                                </p>
                            </div>
                        </div>

                        {/* Right team images */}
                        <div className="w-full lg:w-[40%] flex flex-col gap-4">
                            <img
                                src="/images/img_img_1.png"
                                alt="Zespół Urokinetic"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/images/img_img_2.png"
                                    alt="Zespół medyczny"
                                    className="w-full h-auto rounded-xl"
                                />
                                <img
                                    src="/images/img_img_3.png"
                                    alt="Współpraca zespołowa"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>
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