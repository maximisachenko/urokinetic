import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import MotionWrapper from '../../components/common/MotionWrapper';
import StaggerContainer from '../../components/common/StaggerContainer';
import ScrollAnimations from '../../components/common/ScrollAnimations';
import Button from '../../components/ui/Button';

const OfertaPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-global-4">
            <Header />
            <ScrollAnimations />

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-global-4">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Wave decoration */}
                    <div className="absolute top-0 left-0 w-full h-32 sm:h-40 lg:h-48 opacity-5">
                        <svg viewBox="0 0 1440 320" className="w-full h-full">
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#7db3c9' }} />
                                    <stop offset="100%" style={{ stopColor: '#9bc4d4' }} />
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#waveGradient)"
                                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                            />
                        </svg>
                    </div>

                    {/* Floating decorative blobs */}
                    <div
                        className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-4 animate-blob"
                        style={{ backgroundColor: '#7db3c9', mixBlendMode: 'multiply', filter: 'blur(40px)' }}
                    ></div>
                    <div
                        className="absolute top-40 left-20 w-24 h-24 rounded-full opacity-5 animate-blob animation-delay-2000"
                        style={{ backgroundColor: '#9bc4d4', mixBlendMode: 'multiply', filter: 'blur(30px)' }}
                    ></div>
                    <div
                        className="absolute bottom-32 right-32 w-20 h-20 rounded-full opacity-6 animate-blob animation-delay-4000"
                        style={{ backgroundColor: '#8abbd0', mixBlendMode: 'multiply', filter: 'blur(25px)' }}
                    ></div>
                </div>

                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center">
                        <p className="text-base sm:text-lg font-medium mb-4 tracking-wide" style={{ color: '#7db3c9' }}>
                            NASZA OFERTA
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Kompleksowe rozwiązania
                            <br />
                            <span style={{ color: '#7db3c9' }}>UROKINETIC</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-global-3 leading-relaxed max-w-4xl mx-auto">
                            Oferujemy innowacyjne implanty i kompleksowe wsparcie medyczne dla lekarzy i weterynarii w leczeniu wysiłkowego nietrzymania moczu.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Main Products Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                {/* Background texture */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, #7db3c9 0%, transparent 50%), radial-gradient(circle at 75% 75%, #9bc4d4 0%, transparent 50%)',
                    }}
                ></div>

                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <p className="text-base sm:text-lg font-medium mb-4 tracking-wide" style={{ color: '#7db3c9' }}>
                            GŁÓWNE PRODUKTY
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Implanty UROKINETIC
                        </h2>
                        <p className="text-lg sm:text-xl text-global-3 leading-relaxed max-w-3xl mx-auto">
                            Zaawansowane technologicznie rozwiązania medyczne, które rewolucjonizują leczenie wysiłkowego nietrzymania moczu.
                        </p>
                    </MotionWrapper>

                    {/* Products Grid */}
                    <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                        {/* Product 1 - Human Medicine */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-0 w-full h-2 rounded-t-2xl sm:rounded-t-3xl"
                                style={{ background: 'linear-gradient(135deg, #7db3c9 0%, #9bc4d4 100%)' }}
                            ></div>

                            <div className="p-6 sm:p-8 lg:p-10">
                                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                                    <div
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                        style={{
                                            background: 'linear-gradient(135deg, #7db3c9 0%, #9bc4d4 100%)',
                                        }}
                                    >
                                        <svg
                                            className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                            UROKINETIC dla ludzi
                                        </h3>
                                        <p className="text-base sm:text-lg font-medium mb-4" style={{ color: '#7db3c9' }}>
                                            Medycyna humana
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Dedykowany do leczenia wysiłkowego nietrzymania moczu u kobiet</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Minimalna inwazyjność - zabieg w znieczuleniu miejscowym</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Trwały materiał niebiodegradowalny</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Kontrola USG możliwa w każdej chwili</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#7db3c9' }}>
                                        30 minut
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#7db3c9' }}>
                                        Bez hospitalizacji
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#7db3c9' }}>
                                        Natychmiastowy efekt
                                    </span>
                                </div>

                                <Button
                                    variant="secondary"
                                    size="medium"
                                    className="w-full transition-all duration-300 group-hover:scale-105"
                                    onClick={() => navigate('/kontakt')}
                                >
                                    Dowiedz się więcej
                                </Button>
                            </div>
                        </div>

                        {/* Product 2 - Veterinary Medicine */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-0 w-full h-2 rounded-t-2xl sm:rounded-t-3xl"
                                style={{ background: 'linear-gradient(135deg, #6ba3b9 0%, #8abbd0 100%)' }}
                            ></div>

                            <div className="p-6 sm:p-8 lg:p-10">
                                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                                    <div
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                                        style={{
                                            background: 'linear-gradient(135deg, #6ba3b9 0%, #8abbd0 100%)',
                                        }}
                                    >
                                        <svg
                                            className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M4.5 12.75c0 .414.336.75.75.75h13.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.25c-.414 0-.75.336-.75.75zm0-3c0 .414.336.75.75.75h13.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.25c-.414 0-.75.336-.75.75zm0-3c0 .414.336.75.75.75h13.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.25c-.414 0-.75.336-.75.75z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                            UROKINETIC dla zwierząt
                                        </h3>
                                        <p className="text-base sm:text-lg font-medium mb-4" style={{ color: '#6ba3b9' }}>
                                            Medycyna weterynaryjna
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Skuteczne leczenie nietrzymania moczu u psów i kotów</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Alternatywa dla farmakoterapii i operacji</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Doskonałe rezultaty w praktyce weterynaryjnej</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Bezpieczne dla zwierząt wszystkich rozmiarów</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#6ba3b9' }}>
                                        Szybkie działanie
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#6ba3b9' }}>
                                        Bezpieczne
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#6ba3b9' }}>
                                        Sprawdzone
                                    </span>
                                </div>

                                <Button
                                    variant="secondary"
                                    size="medium"
                                    className="w-full transition-all duration-300 group-hover:scale-105"
                                    onClick={() => navigate('/kontakt')}
                                >
                                    Dowiedz się więcej
                                </Button>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Services Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-global-4">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <p className="text-base sm:text-lg font-medium mb-4 tracking-wide" style={{ color: '#7db3c9' }}>
                            DODATKOWE USŁUGI
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Kompleksowe wsparcie
                        </h2>
                        <p className="text-lg sm:text-xl text-global-3 leading-relaxed max-w-3xl mx-auto">
                            Oferujemy pełne spektrum usług wspomagających implementację technologii UROKINETIC w praktyce medycznej.
                        </p>
                    </MotionWrapper>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-64 sm:h-72 lg:h-80 flex flex-col justify-center">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="text-center">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl"
                                    style={{
                                        background: 'linear-gradient(135deg, #7db3c9 0%, #9bc4d4 100%)',
                                    }}
                                >
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Szkolenia specjalistyczne
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Kompleksowe programy szkoleniowe dla lekarzy i weterynarzy dotyczące zastosowania technologii UROKINETIC.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-64 sm:h-72 lg:h-80 flex flex-col justify-center">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="text-center">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-lg group-hover:shadow-xl"
                                    style={{
                                        background: 'linear-gradient(135deg, #6ba3b9 0%, #7db3c9 100%)',
                                    }}
                                >
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Wsparcie techniczne
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Pełne wsparcie techniczne i konsultacje medyczne dla zespołów wdrażających technologię UROKINETIC.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-64 sm:h-72 lg:h-80 flex flex-col justify-center">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="text-center">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl"
                                    style={{
                                        background: 'linear-gradient(135deg, #8abbd0 0%, #6ba3b9 100%)',
                                    }}
                                >
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H20V4h-1.5l-1-1h-5l-1 1H10V4H8.5L12 1 15.5 4zM6 7h12l-1 11H7L6 7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Materiały edukacyjne
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Bogate materiały informacyjne, instrukcje i dokumentacja dla pacjentów oraz personelu medycznego.
                                </p>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                {/* Background elements */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 80%, #7db3c9 0%, transparent 50%), radial-gradient(circle at 80% 20%, #9bc4d4 0%, transparent 50%)',
                    }}
                ></div>

                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Gotowy na innowacje?
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-global-3 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
                            Skontaktuj się z nami już dziś i odkryj, jak technologia UROKINETIC może zrewolucjonizować Twoją praktykę medyczną.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Button
                                variant="primary"
                                size="large"
                                className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg"
                                onClick={() => navigate('/kontakt')}
                            >
                                Skontaktuj się z nami
                            </Button>
                            <Button
                                variant="secondary"
                                size="large"
                                className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg"
                                onClick={() => navigate('/ceny')}
                            >
                                Zobacz cennik
                            </Button>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OfertaPage; 