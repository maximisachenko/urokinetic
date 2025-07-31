import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import MotionWrapper from '../../../components/common/MotionWrapper';
import StaggerContainer from '../../../components/common/StaggerContainer';
import ScrollAnimations from '../../../components/common/ScrollAnimations';
import Button from '../../../components/ui/Button';

const ForVeterinariansPage: React.FC = () => {
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
                            DLA WETERYNARZY
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            UROKINETIC
                            <br />
                            <span style={{ color: '#7db3c9' }}>w weterynarii</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-global-3 leading-relaxed max-w-4xl mx-auto">
                            Innowacyjne rozwiązanie dla weterynarzy w leczeniu nietrzymania moczu u psów i kotów.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Applications Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <MotionWrapper variant="fadeInUp" className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: '#334155' }}>
                            Zastosowania weterynaryjna
                        </h2>
                    </MotionWrapper>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Application 1 */}
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
                                        <path d="M4.5 12.75c0 .414.336.75.75.75h13.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.25c-.414 0-.75.336-.75.75zm0-3c0 .414.336.75.75.75h13.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.25c-.414 0-.75.336-.75.75zm0-3c0 .414.336.75.75.75h13.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.25c-.414 0-.75.336-.75.75z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Psy wszystkich ras
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Skuteczne leczenie nietrzymania moczu u psów małych, średnich i dużych ras.
                                </p>
                            </div>
                        </div>

                        {/* Application 2 */}
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
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Koty domowe
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Bezpieczne i skuteczne rozwiązanie problemów z nietrzymaniem moczu u kotów.
                                </p>
                            </div>
                        </div>

                        {/* Application 3 */}
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
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Przypadki przewlekłe
                                </h3>
                                <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Skuteczne rozwiązanie nawet w zaawansowanych przypadkach niepowodzeń innych metod.
                                </p>
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
                            Korzyści dla praktyki weterynaryjnej
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 text-left max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                    <p className="text-global-3 leading-relaxed">Alternatywa dla długotrwałej farmakoterapii</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                    <p className="text-global-3 leading-relaxed">Krótki czas zabiegu - zwiększona przepustowość kliniki</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                    <p className="text-global-3 leading-relaxed">Wysokie zadowolenie właścicieli zwierząt</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                    <p className="text-global-3 leading-relaxed">Możliwość kontroli USG</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                    <p className="text-global-3 leading-relaxed">Bezpieczeństwo dla zwierząt wszystkich rozmiarów</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#7db3c9' }}></div>
                                    <p className="text-global-3 leading-relaxed">Trwały efekt leczniczy</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-10">
                            <Button
                                variant="primary"
                                size="large"
                                className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg"
                                onClick={() => navigate('/kontakt')}
                            >
                                Skontaktuj się z nami
                            </Button>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ForVeterinariansPage; 