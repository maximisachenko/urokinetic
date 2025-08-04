import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import MotionWrapper from '../../../components/common/MotionWrapper';
import StaggerContainer from '../../../components/common/StaggerContainer';
import ScrollAnimations from '../../../components/common/ScrollAnimations';
import Button from '../../../components/ui/Button';

const TrainingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-global-4">
            <Header />
            <ScrollAnimations />

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-global-4">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center">
                        <p className="text-base sm:text-lg font-medium mb-4 tracking-wide" style={{ color: '#7db3c9' }}>
                            SZKOLENIA
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Profesjonalne
                            <br />
                            <span style={{ color: '#7db3c9' }}>szkolenia UROKINETIC</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-global-3 leading-relaxed max-w-4xl mx-auto">
                            Kompleksowe programy edukacyjne dla lekarzy i weterynarzy z zakresu technologii UROKINETIC.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Training Programs */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Programy szkoleniowe
                        </h2>
                    </MotionWrapper>

                    <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                        {/* Medical Training */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
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
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                            Szkolenie dla lekarzy
                                        </h3>
                                        <p className="text-base sm:text-lg font-medium mb-4" style={{ color: '#7db3c9' }}>
                                            Medycyna humana
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Anatomia i fizjologia zwieracza cewki moczowej</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Technika implantacji UROKINETIC</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Kontrola USG implantu</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Opieka pooperacyjna</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#7db3c9' }}>
                                        8 godzin
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#7db3c9' }}>
                                        Certyfikat
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#7db3c9' }}>
                                        Praktyka
                                    </span>
                                </div>

                                <Button
                                    variant="secondary"
                                    size="medium"
                                    className="w-full transition-all duration-300 group-hover:scale-105"
                                    onClick={() => navigate('/kontakt')}
                                >
                                    Zapisz się
                                </Button>
                            </div>
                        </div>

                        {/* Veterinary Training */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
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
                                            Szkolenie dla weterynarzy
                                        </h3>
                                        <p className="text-base sm:text-lg font-medium mb-4" style={{ color: '#6ba3b9' }}>
                                            Medycyna weterynaryjna
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Anatomia układu moczowego psów i kotów</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Adaptacja techniki dla różnych rozmiarów zwierząt</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Przypadki kliniczne i studia przypadków</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#6ba3b9' }}></div>
                                        <p className="text-global-3 leading-relaxed">Komunikacja z właścicielami zwierząt</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#6ba3b9' }}>
                                        6 godzin
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#6ba3b9' }}>
                                        Certyfikat
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{ backgroundColor: '#f0f8ff', color: '#6ba3b9' }}>
                                        Wsparcie
                                    </span>
                                </div>

                                <Button
                                    variant="secondary"
                                    size="medium"
                                    className="w-full transition-all duration-300 group-hover:scale-105"
                                    onClick={() => navigate('/kontakt')}
                                >
                                    Zapisz się
                                </Button>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-global-4">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Co otrzymujesz?
                        </h2>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-64 sm:h-72 lg:h-80 flex flex-col justify-center">
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
                                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M15,13H7V15H15V13Z M17,9H7V11H17V9Z M15,17H7V19H15V17Z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#334155' }}>
                                        Certyfikat kompetencji
                                    </h3>
                                    <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Oficjalne potwierdzenie zdobytych umiejętności w zakresie technologii UROKINETIC.
                                    </p>
                                </div>
                            </div>

                            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-64 sm:h-72 lg:h-80 flex flex-col justify-center">
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
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#334155' }}>
                                        Materiały szkoleniowe
                                    </h3>
                                    <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Komplet instrukcji, procedur i dokumentacji niezbędnej do wdrożenia technologii.
                                    </p>
                                </div>
                            </div>

                            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-64 sm:h-72 lg:h-80 flex flex-col justify-center">
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
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#334155' }}>
                                        Wsparcie techniczne
                                    </h3>
                                    <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Bezpłatne konsultacje i wsparcie przez pierwsze 6 miesięcy po szkoleniu.
                                    </p>
                                </div>
                            </div>
                        </StaggerContainer>

                        <div className="mt-12 sm:mt-16">
                            <Button
                                variant="primary"
                                size="large"
                                className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg"
                                onClick={() => navigate('/kontakt')}
                            >
                                Umów szkolenie
                            </Button>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TrainingPage; 