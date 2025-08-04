import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import MotionWrapper from '../../../components/common/MotionWrapper';
import StaggerContainer from '../../../components/common/StaggerContainer';
import ScrollAnimations from '../../../components/common/ScrollAnimations';
import Button from '../../../components/ui/Button';

const ForDoctorsPage: React.FC = () => {
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
                            DLA LEKARZY
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            UROKINETIC
                            <br />
                            <span style={{ color: '#7db3c9' }}>w medycynie</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-global-3 leading-relaxed max-w-4xl mx-auto">
                            Rewolucyjne rozwiązanie dla uroginekologów w leczeniu wysiłkowego nietrzymania moczu u kobiet.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Content sections with medical information */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Dlaczego UROKINETIC?
                        </h2>
                    </MotionWrapper>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Feature 1 */}
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
                                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                                        <path d="M12.5 7H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    30 minut zabiegu
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Szybka procedura ambulatoryjna w znieczuleniu miejscowym, bez hospitalizacji pacjentki.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
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
                                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H20V4h-1.5l-1-1h-5l-1 1H10V4H8.5l-1-1h-5l-1 1H2v2h1.5L5 18h14l1.5-12H22V4h-1.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Kontrola USG
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Pełna widoczność implantu w badaniu ultrasonograficznym - łatwa kontrola pozycji.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
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
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Natychmiastowy efekt
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Pacjentka odczuwa poprawę już bezpośrednio po zabiegu - bez długotrwałej rekonwalescencji.
                                </p>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Training Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-global-4">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Szkolenia i wsparcie
                        </h2>
                        <p className="text-lg sm:text-xl text-global-3 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
                            Oferujemy kompleksowe programy szkoleniowe oraz pełne wsparcie techniczne dla zespołów medycznych.
                        </p>
                        <Button
                            variant="primary"
                            size="large"
                            className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg"
                            onClick={() => navigate('/kontakt')}
                        >
                            Umów szkolenie
                        </Button>
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ForDoctorsPage; 