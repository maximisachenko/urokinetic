import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import MotionWrapper from '../../components/common/MotionWrapper';
import StaggerContainer from '../../components/common/StaggerContainer';
import ScrollAnimations from '../../components/common/ScrollAnimations';

const AboutPage: React.FC = () => {
    return (
        <div className="w-full bg-global-4">
            <Header />
            <ScrollAnimations />

            {/* Hero Section - White Background */}
            <section className="relative z-10 w-full bg-global-4 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-1/4 h-full opacity-[0.02]" style={{
                    background: 'linear-gradient(135deg, #7db3c9 0%, transparent 70%)'
                }}></div>

                {/* Background medical image */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <img
                        src="/images/img_36885291_7726_4_700x468.png"
                        alt="Medical background"
                        className="absolute bottom-0 right-0 w-[30%] h-auto object-contain opacity-10 hidden lg:block"
                    />
                </div>

                {/* Floating animated shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-20 left-16 w-20 h-20 rounded-2xl rotate-45 opacity-10 animate-float"
                        style={{ background: 'linear-gradient(to bottom right, #9bc4d4, #7db3c9)' }}
                    ></div>
                    <div
                        className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 rounded-xl rotate-12 opacity-10 animate-float"
                        style={{ borderColor: '#7db3c9' }}
                    ></div>
                    <div
                        className="absolute top-1/2 right-20 w-12 h-12 rounded-full opacity-10 animate-pulse-gentle"
                        style={{ backgroundColor: '#8abbd0' }}
                    ></div>
                </div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <MotionWrapper variant="fadeInUp">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#334155' }}>
                                O nas
                            </h1>
                        </MotionWrapper>

                        <MotionWrapper variant="fadeInUp">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8" style={{ color: '#7db3c9' }}>
                                Skoncentrowani na skuteczności. Oparci na doświadczeniu.
                            </h2>
                        </MotionWrapper>

                        <MotionWrapper variant="fadeInUp">
                            <div className="max-w-4xl mx-auto">
                                <p className="text-lg sm:text-xl text-global-3 leading-relaxed mb-6">
                                    Urokinetic to projekt powstały z realnej potrzeby – opracowaliśmy innowacyjny implant do leczenia wysiłkowego nietrzymania moczu, który łączy trwałość efektu z minimalną inwazyjnością.
                                </p>
                                <p className="text-lg sm:text-xl text-global-3 leading-relaxed mb-6">
                                    Nasz zespół tworzą lekarze, inżynierowie biomedyczni i praktycy, którzy od lat pracują nad skutecznymi metodami wspierania funkcji zwieracza cewki moczowej.
                                </p>
                                <p className="text-lg sm:text-xl font-semibold" style={{ color: '#334155' }}>
                                    Wierzymy, że leczenie nie musi oznaczać operacji – dlatego stworzyliśmy rozwiązanie, które działa szybko, bezboleśnie i daje natychmiastowe rezultaty.
                                </p>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>

                {/* Wave decoration at bottom */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-20 sm:h-24 lg:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="aboutWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7db3c9" stopOpacity="0.1" />
                                <stop offset="25%" stopColor="#7db3c9" stopOpacity="0.15" />
                                <stop offset="50%" stopColor="#7db3c9" stopOpacity="0.2" />
                                <stop offset="75%" stopColor="#7db3c9" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#7db3c9" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0,120 L0,40 Q150,0 300,30 T600,20 T900,40 T1200,20 L1200,120 Z"
                            fill="url(#aboutWaveGradient)"
                        />
                    </svg>
                </div>
            </section>

            {/* What Makes Us Different Section - Gray Background with Texture */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                {/* Light texture overlay */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(125, 179, 201, 0.08) 0%, transparent 60%),
                           radial-gradient(circle at 75% 75%, rgba(155, 196, 212, 0.06) 0%, transparent 55%),
                           radial-gradient(circle at 50% 10%, rgba(138, 187, 208, 0.05) 0%, transparent 65%),
                           radial-gradient(circle at 10% 80%, rgba(184, 212, 224, 0.07) 0%, transparent 58%)`
                }}></div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionWrapper variant="fadeInUp">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#334155' }}>
                                Co nas wyróżnia?
                            </h2>
                        </div>
                    </MotionWrapper>

                    <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.1}>
                        {/* Technology */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-64 sm:h-72 lg:h-80 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>
                            <div
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>
                            <div
                                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-200"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="flex items-start gap-4 sm:gap-6">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                    style={{
                                        background: 'linear-gradient(135deg, #7db3c9 0%, #9bc4d4 100%)',
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                        Technologia potwierdzona praktyką
                                    </h3>
                                    <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Implant Urokinetic został przetestowany i wdrożony w praktyce klinicznej. Stosowany jest zarówno u kobiet, jak i w leczeniu weterynaryjnym – w przypadkach, gdzie farmakoterapia lub klasyczne metody zawiodły.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Procedure */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-64 sm:h-72 lg:h-80 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#6ba3b9' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#6ba3b9' }}
                            ></div>
                            <div
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="flex items-start gap-4 sm:gap-6">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                                    style={{
                                        background: 'linear-gradient(135deg, #6ba3b9 0%, #7db3c9 100%)',
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                                        <path d="M12.5 7H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                        Zabieg w 30 minut – bez cięcia, bez hospitalizacji
                                    </h3>
                                    <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Wystarczy znieczulenie miejscowe. Cała procedura trwa krócej niż przeciętna wizyta u dentysty, a efekt odczuwalny jest natychmiast.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Patient-Centered Design */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-64 sm:h-72 lg:h-80 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#8abbd0' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#8abbd0' }}
                            ></div>
                            <div
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#6ba3b9' }}
                            ></div>

                            <div className="flex items-start gap-4 sm:gap-6">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                    style={{
                                        background: 'linear-gradient(135deg, #8abbd0 0%, #6ba3b9 100%)',
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M15,13H7V15H15V13Z M17,9H7V11H17V9Z M15,17H7V19H15V17Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                        Projekt oparty na potrzebach pacjentek i lekarzy
                                    </h3>
                                    <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Urokinetic powstał przy współpracy z lekarzami uroginekologami i weterynarii, którzy codziennie zmagają się z problemem wysiłkowego nietrzymania moczu. Znamy problem od podszewki – i zaprojektowaliśmy odpowiedź.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Safety */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-64 sm:h-72 lg:h-80 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>
                            <div
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="flex items-start gap-4 sm:gap-6">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"
                                    style={{
                                        background: 'linear-gradient(135deg, #9bc4d4 0%, #7db3c9 100%)',
                                    }}
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.4 14.8,17.4H9.2C8.6,17.4 8,16.8 8,16.2V12.8C8,12.2 8.6,11.6 9.2,11.6V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11.5H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                        Bezpieczeństwo i kontrola
                                    </h3>
                                    <p className="text-global-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        Implant nie ulega biodegradacji, nie przemieszcza się i może być w każdej chwili kontrolowany za pomocą USG. W razie potrzeby – możliwe jest też jego usunięcie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Mission Section - White Background */}
            <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
                {/* Background image - hidden on mobile */}
                <div className="hidden lg:block absolute top-0 right-0 w-[35%] h-full">
                    <img
                        src="/images/img_36885291_7726_4_700x468.png"
                        alt="Medical background"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>

                {/* Floating animated shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-32 left-20 w-16 h-16 rounded-xl rotate-12 opacity-10 animate-float"
                        style={{ background: 'linear-gradient(to bottom right, #7db3c9, #9bc4d4)' }}
                    ></div>
                    <div
                        className="absolute bottom-20 right-1/4 w-12 h-12 border-2 rounded-full rotate-45 opacity-10 animate-pulse-gentle"
                        style={{ borderColor: '#8abbd0' }}
                    ></div>
                </div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionWrapper variant="fadeInUp">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#334155' }}>
                                Nasza misja
                            </h2>
                            <div className="max-w-4xl mx-auto">
                                <p className="text-lg sm:text-xl text-global-3 leading-relaxed mb-8">
                                    Naszym celem jest <span className="font-bold">przywracanie komfortu i pewności siebie</span> – bez ryzyka, bez hospitalizacji i bez długotrwałego leczenia farmakologicznego. Wprowadzając Urokinetic na rynek, chcemy zapewnić kobietom (i ich lekarzom) realne narzędzie w walce z krępującym i często przemilczanym problemem.
                                </p>
                                <Button
                                    variant="primary"
                                    size="large"
                                    className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg"
                                >
                                    Skontaktuj się z nami
                                </Button>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            {/* Statistics Section - Gray Background with Texture */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                {/* Light texture overlay */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 15% 35%, rgba(125, 179, 201, 0.06) 0%, transparent 65%),
                           radial-gradient(circle at 85% 25%, rgba(155, 196, 212, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(138, 187, 208, 0.07) 0%, transparent 60%),
                           radial-gradient(circle at 70% 70%, rgba(184, 212, 224, 0.05) 0%, transparent 55%)`
                }}></div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionWrapper variant="fadeInUp">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#334155' }}>
                                Liczby, które mówią za siebie
                            </h2>
                            <p className="text-lg text-global-3 max-w-2xl mx-auto">
                                Nasze osiągnięcia i certyfikacje potwierdzają skuteczność naszych rozwiązań
                            </p>
                        </div>
                    </MotionWrapper>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.1}>
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-32 sm:h-36 lg:h-40 flex flex-col justify-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>
                            <div
                                className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>

                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: '#7db3c9' }}
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    10 lat rozwoju technologii medycznych
                                </h3>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-32 sm:h-36 lg:h-40 flex flex-col justify-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: '#7db3c9' }}
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Certyfikacja zgodna z ISO 13485
                                </h3>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-32 sm:h-36 lg:h-40 flex flex-col justify-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: '#7db3c9' }}
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Tysiące udanych zabiegów
                                </h3>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-32 sm:h-36 lg:h-40 flex flex-col justify-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: '#7db3c9' }}
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Widoczność i kontrola implantu w USG
                                </h3>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-32 sm:h-36 lg:h-40 flex flex-col justify-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 sm:col-span-2 lg:col-span-1">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: '#7db3c9' }}
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                                    Zastosowanie u pacjentek pierwotnych i po niepowodzeniach
                                </h3>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage; 