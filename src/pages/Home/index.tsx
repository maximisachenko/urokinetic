import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import RatingBar from '../../components/ui/RatingBar';
import MotionWrapper from '../../components/common/MotionWrapper';
import StaggerContainer from '../../components/common/StaggerContainer';
import ParallaxHero from '../../components/common/ParallaxHero';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-global-4">
      <Header />
      <ParallaxHero />

      {/* Hero Section */}
      <section className="hero-parallax fixed top-0 left-0 w-full h-screen overflow-hidden bg-white">
        {/* Background medical image */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            src="/images/img_36885291_7726_4_700x468.png"
            alt="Medical background"
            className="absolute bottom-0 right-0 w-[40%] h-auto object-contain opacity-10 hidden lg:block"
          />
        </div>

        {/* Dynamic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating animated shapes */}
          <div
            className="absolute top-20 left-16 w-20 h-20 rounded-2xl rotate-45 opacity-10 animate-float"
            style={{ background: 'linear-gradient(to bottom right, #9bc4d4, #7db3c9)' }}
          ></div>

          <div
            className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 rounded-xl rotate-12 opacity-10 animate-float"
            style={{
              borderColor: '#7db3c9'
            }}
          ></div>
          <div
            className="absolute top-1/2 left-12 w-8 h-8 rounded-full animate-pulse-gentle"
            style={{
              backgroundColor: 'rgba(125, 179, 201, 0.3)'
            }}
          ></div>



          {/* Subtle dots pattern */}
          <div
            className="absolute bottom-20 right-16 w-3 h-3 rounded-full animate-pulse-gentle"
            style={{
              backgroundColor: 'rgba(125, 179, 201, 0.4)'
            }}
          ></div>
        </div>

        {/* Elegant wave decoration at bottom - full width */}
        <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden z-0 hidden lg:block">
          <svg className="w-full h-full min-w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7db3c9" stopOpacity="0.05" />
                <stop offset="25%" stopColor="#7db3c9" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#7db3c9" stopOpacity="0.1" />
                <stop offset="75%" stopColor="#7db3c9" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#7db3c9" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#waveGradient)" />
          </svg>
        </div>

        {/* Additional elegant elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Top corner decoration */}
          <div
            className="absolute top-8 left-8 w-32 h-32 border rounded-full opacity-5"
            style={{ borderColor: '#a3c9d8' }}
          ></div>
          <div
            className="absolute top-12 left-12 w-24 h-24 border rounded-full opacity-5"
            style={{ borderColor: '#7db3c9' }}
          ></div>

          {/* Bottom corner decoration */}
          <div
            className="absolute bottom-16 right-16 w-20 h-20 rounded-full animate-pulse-gentle"
            style={{
              background: 'linear-gradient(to bottom right, rgba(196, 218, 227, 0.3), transparent)'
            }}
          ></div>
        </div>

        <div className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-screen">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 w-full lg:pr-[45%]">
            {/* Left content */}
            <MotionWrapper variant="fadeInLeft" className="w-full lg:w-[100%] flex flex-col lg:justify-center items-center lg:items-start gap-4 text-center lg:text-left">
              <MotionWrapper variant="fadeInUp">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6" style={{ color: '#334155' }}>
                  Innowacyjne implanty w leczeniu wysiłkowego nietrzymania moczu
                </h1>
              </MotionWrapper>

              <MotionWrapper variant="fadeInUp">
                <div className="space-y-3 sm:space-y-4 text-gray-600 text-[12px] sm:text-[14px] lg:text-[16px] leading-relaxed max-w-2xl">
                  Oferujemy nowoczesne, mało inwazyjne rozwiązanie dla lekarzy. Urokinetic to bezpieczny implant o natychmiastowym i trwałym działaniu – bez
                  operacji.
                </div>
              </MotionWrapper>

              <MotionWrapper variant="fadeInUp">
                <button
                  className="text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-lg lg:text-xl font-medium transition-all duration-300 hover:shadow-lg mt-4 sm:mt-6 w-full sm:w-auto"
                  style={{
                    backgroundColor: '#7db3c9'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#6ba3b9'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#7db3c9'}
                >
                  dowiedz się więcej
                </button>
              </MotionWrapper>
            </MotionWrapper>

            {/* Right content - Girl image in modern container */}
            <MotionWrapper variant="fadeInRight" className="hidden lg:flex w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[45%] justify-center items-end lg:absolute lg:right-8 lg:bottom-0 lg:h-full mt-8 lg:mt-0">
              <div className="relative">
                {/* Floating decorative elements around girl */}
                <div className="absolute inset-0 -inset-x-4 sm:-inset-x-6 lg:-inset-x-8 -inset-y-8 sm:-inset-y-10 lg:-inset-y-12">
                  {/* Floating accent elements */}
                  <div
                    className="absolute top-1/4 right-2 sm:right-3 lg:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full animate-float"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(155, 196, 212, 0.5), rgba(125, 179, 201, 0.5))',
                      animationDelay: '1s'
                    }}
                  ></div>
                  <div
                    className="absolute bottom-1/3 left-4 sm:left-6 lg:left-8 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full animate-pulse-gentle"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(125, 179, 201, 0.4), rgba(107, 163, 185, 0.4))',
                      animationDelay: '2s'
                    }}
                  ></div>



                  {/* Additional floating elements */}
                  <div
                    className="absolute top-1/3 left-2 sm:left-3 lg:left-4 w-3 h-3 sm:w-4 sm:h-4 border border-2 rounded-lg rotate-45 opacity-10 animate-float"
                    style={{
                      borderColor: '#7db3c9',
                      animationDelay: '3s'
                    }}
                  ></div>
                  <div
                    className="absolute bottom-1/4 right-4 sm:right-6 lg:right-8 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full animate-pulse-gentle"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(138, 187, 208, 0.3), rgba(125, 179, 201, 0.3))',
                      animationDelay: '2.5s'
                    }}
                  ></div>
                </div>

                {/* Girl image positioned in center of circle */}
                <div className="relative z-10 flex items-end justify-center">
                  <img
                    src="/images/girl.png"
                    alt="Szczęśliwa właścicielka z psem"
                    className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px] lg:max-w-[620px] xl:max-w-[720px] h-auto object-contain object-bottom"
                    style={{
                      filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.12)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.06))'
                    }}
                  />
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Spacer for hero section */}
      <div className="h-screen"></div>

      {/* About Section */}
      <section className="relative z-10 w-full bg-global-4 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-[0.02]" style={{
          background: 'linear-gradient(135deg, #7db3c9 0%, transparent 70%)'
        }}></div>

        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20">
            {/* Left content - Enhanced */}
            <MotionWrapper variant="fadeInLeft" className="w-full lg:w-[50%] flex flex-col items-start gap-6 sm:gap-8 text-center lg:text-left">
              <MotionWrapper variant="fadeInUp">
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-medium mb-8" style={{ color: '#7db3c9' }}>
                    O nas
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#334155' }}>
                    Kim jesteśmy?
                  </h2>
                </div>
              </MotionWrapper>

              <MotionWrapper variant="fadeInUp">
                <p className="text-sm sm:text-base lg:text-lg text-global-3 leading-relaxed font-light">
                  Urokinetic to zespół lekarzy i inżynierów, którzy stworzyli innowacyjny implant do leczenia wysiłkowego nietrzymania moczu.
                  Naszą misją jest dostarczanie skutecznych i bezpiecznych rozwiązań, które nie wymagają operacji, a przynoszą trwały efekt już po jednym, krótkim zabiegu.
                </p>
              </MotionWrapper>

              {/* Enhanced Features list */}
              <StaggerContainer className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 w-full" staggerDelay={0.1}>
                <div
                  className="flex flex-col items-start text-left flex-1 gap-3 sm:gap-4"
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #7db3c9 0%, #9bc4d4 100%)',
                    }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                      <path d="M12.5 7H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1" style={{ color: '#334155' }}>Natychmiastowe rezultaty</h4>
                    <p className="text-sm text-global-3">Efekt widoczny od razu po zabiegu – bez długiej rekonwalescencji.</p>
                  </div>
                </div>

                <div
                  className="flex flex-col items-start text-left flex-1 gap-3 sm:gap-4"
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #6ba3b9 0%, #7db3c9 100%)',
                    }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1" style={{ color: '#334155' }}>Zaprojektowany dla komfortu pacjentki</h4>
                    <p className="text-sm text-global-3">Zabieg trwa 30 minut, nie wymaga narkozy ani hospitalizacji.</p>
                  </div>
                </div>


              </StaggerContainer>

              <MotionWrapper variant="fadeInUp">
                <Button
                  variant="primary"
                  size="large"
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                  onClick={() => navigate('/o-nas')}
                >
                  Dowiedz się więcej o nas
                </Button>
              </MotionWrapper>
            </MotionWrapper>

            {/* Right - Stunning Hall Image */}
            <MotionWrapper variant="fadeInRight" className="w-full lg:w-[50%] flex justify-center mt-8 lg:mt-0">
              <div className="relative group max-w-2xl lg:max-w-4xl">
                {/* Decorative background elements */}
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4">
                  {/* Main decorative frame */}
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-10 transform rotate-2 transition-transform duration-500 group-hover:rotate-1"
                    style={{ backgroundColor: '#9bc4d4' }}
                  ></div>
                  <div
                    className="absolute inset-1 sm:inset-2 rounded-2xl sm:rounded-3xl opacity-10 transform -rotate-1 transition-transform duration-500 group-hover:rotate-0"
                    style={{ backgroundColor: '#7db3c9' }}
                  ></div>

                  {/* Floating accent dots */}
                  <div
                    className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full opacity-5 transition-all duration-500 group-hover:scale-150"
                    style={{ backgroundColor: '#7db3c9' }}
                  ></div>
                  <div
                    className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-5 transition-all duration-500 group-hover:scale-125"
                    style={{ backgroundColor: '#9bc4d4' }}
                  ></div>
                  <div
                    className="absolute top-1/4 -left-2 sm:-left-3 lg:-left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-5 transition-all duration-500 group-hover:scale-200"
                    style={{ backgroundColor: '#8abbd0' }}
                  ></div>
                </div>

                {/* Main image container */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl sm:shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src="/images/hall1.png"
                      alt="Nowoczesne centrum medyczne UROKINETIC"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Elegant overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  </div>

                  {/* Image caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <h4 className="text-lg font-semibold mb-1" style={{ color: '#334155' }}>UROKINETIC Centrum</h4>
                      <p className="text-sm text-gray-600">ul. Mazowiecka 15/3, 00-052 Warszawa</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
        {/* Light texture overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(125, 179, 201, 0.08) 0%, transparent 60%),
                           radial-gradient(circle at 75% 75%, rgba(155, 196, 212, 0.06) 0%, transparent 55%),
                           radial-gradient(circle at 50% 10%, rgba(138, 187, 208, 0.05) 0%, transparent 65%),
                           radial-gradient(circle at 10% 80%, rgba(184, 212, 224, 0.07) 0%, transparent 58%)`
        }}></div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4" style={{ color: '#334155' }}>
              Usługi
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-global-4 mb-4 sm:mb-6">
              Innowacyjne rozwiązania dla seniorów i zwierząt
            </p>
            <p className="text-sm sm:text-base text-global-3 max-w-4xl mx-auto px-4">
              Wszystkie produkty są wykonane z materiałów biokompatybilnych zgodnych z ISO 13485, z uwzględnieniem bezpieczeństwa, trwałości i indywidualnego dopasowania do potrzeb pacjenta.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
            {/* Service 1 - Security */}
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>

              {/* Decorative floating elements */}
              <div
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-125"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-200"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute top-8 sm:top-12 right-3 sm:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-5 group-hover:opacity-17 transition-all duration-600 group-hover:scale-150"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-5 group-hover:opacity-27 transition-all duration-800 group-hover:scale-300"
                style={{ backgroundColor: '#b8d4e0' }}
              ></div>
              <div
                className="absolute bottom-8 sm:bottom-12 left-3 sm:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-5 group-hover:opacity-22 transition-all duration-650 group-hover:scale-175"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>

              {/* Content */}
              <div className="relative">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #7db3c9 0%, #9bc4d4 100%)',
                  }}
                >
                  <img
                    src="/images/img_div.svg"
                    alt="Security icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                  Bezpieczeństwo
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Najwyższe standardy bezpieczeństwa zgodne z międzynarodowymi normami medycznymi.
                </p>
              </div>
            </div>

            {/* Service 2 - Individual Care */}
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                style={{ backgroundColor: '#6ba3b9' }}
              ></div>

              {/* Decorative floating elements */}
              <div
                className="absolute top-6 sm:top-8 left-6 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full opacity-5 group-hover:opacity-25 transition-all duration-500 group-hover:scale-125"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute top-4 sm:top-5 right-4 sm:right-5 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-5 group-hover:opacity-22 transition-all duration-750 group-hover:scale-250"
                style={{ backgroundColor: '#6ba3b9' }}
              ></div>
              <div
                className="absolute top-10 sm:top-14 left-4 sm:left-5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-650 group-hover:scale-180"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-5 group-hover:opacity-27 transition-all duration-700 group-hover:scale-220"
                style={{ backgroundColor: '#b8d4e0' }}
              ></div>
              <div
                className="absolute bottom-10 sm:bottom-14 right-4 sm:right-5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-5 group-hover:opacity-24 transition-all duration-600 group-hover:scale-160"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute top-8 sm:top-10 right-8 sm:right-12 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-5 group-hover:opacity-17 transition-all duration-800 group-hover:scale-300"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>

              {/* Content */}
              <div className="relative">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-lg group-hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #6ba3b9 0%, #7db3c9 100%)',
                  }}
                >
                  <img
                    src="/images/img_div_teal_200.svg"
                    alt="Individual care icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                  Indywidualne dopasowanie
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Każdy produkt dostosowany do unikalnych potrzeb pacjenta.
                </p>
              </div>
            </div>

            {/* Service 3 - Fast Recovery */}
            <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>

              {/* Decorative floating elements */}
              <div
                className="absolute top-5 right-5 w-3 h-3 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-125"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-5 left-5 w-4 h-4 rounded-full opacity-5 group-hover:opacity-25 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>
              <div
                className="absolute top-7 left-7 w-1 h-1 rounded-full opacity-5 group-hover:opacity-25 transition-all duration-700 group-hover:scale-280"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute top-16 right-7 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-19 transition-all duration-650 group-hover:scale-170"
                style={{ backgroundColor: '#6ba3b9' }}
              ></div>
              <div
                className="absolute bottom-7 right-7 w-1 h-1 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-800 group-hover:scale-320"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-16 left-7 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-22 transition-all duration-600 group-hover:scale-190"
                style={{ backgroundColor: '#b8d4e0' }}
              ></div>
              <div
                className="absolute top-11 left-11 w-1 h-1 rounded-full opacity-5 group-hover:opacity-22 transition-all duration-750 group-hover:scale-240"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>
              <div
                className="absolute bottom-11 right-11 w-1 h-1 rounded-full opacity-5 group-hover:opacity-9 transition-all duration-680 group-hover:scale-200"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>

              {/* Content */}
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #8abbd0 0%, #6ba3b9 100%)',
                  }}
                >
                  <img
                    src="/images/img_div_teal_200_64x64.svg"
                    alt="Fast recovery icon"
                    className="w-10 h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                  Szybka rekonwalescencja
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Innowacyjne rozwiązania przyspieszające proces zdrowienia.
                </p>
              </div>
            </div>

            {/* Service 4 - Quality */}
            <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>

              {/* Decorative floating elements */}
              <div
                className="absolute top-7 left-7 w-5 h-5 rounded-full opacity-5 group-hover:opacity-17 transition-all duration-500 group-hover:scale-125"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-7 right-7 w-2 h-2 rounded-full opacity-5 group-hover:opacity-35 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute top-4 right-4 w-1 h-1 rounded-full opacity-5 group-hover:opacity-24 transition-all duration-720 group-hover:scale-260"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>
              <div
                className="absolute top-12 left-4 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-9 transition-all duration-630 group-hover:scale-180"
                style={{ backgroundColor: '#6ba3b9' }}
              ></div>
              <div
                className="absolute bottom-4 left-4 w-1 h-1 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-790 group-hover:scale-310"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute bottom-12 right-4 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-610 group-hover:scale-170"
                style={{ backgroundColor: '#b8d4e0' }}
              ></div>
              <div
                className="absolute top-9 right-9 w-1 h-1 rounded-full opacity-5 group-hover:opacity-23 transition-all duration-760 group-hover:scale-230"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-9 left-9 w-1 h-1 rounded-full opacity-5 group-hover:opacity-26 transition-all duration-690 group-hover:scale-210"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>
              <div
                className="absolute top-14 right-9 w-1 h-1 rounded-full opacity-5 group-hover:opacity-8 transition-all duration-810 group-hover:scale-290"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>

              {/* Content */}
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 shadow-lg group-hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #9bc4d4 0%, #8abbd0 100%)',
                  }}
                >
                  <img
                    src="/images/img_div_64x64.svg"
                    alt="Quality icon"
                    className="w-10 h-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>
                  Najwyższa jakość
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Produkty wykonane z najlepszych materiałów biokompatybilnych.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              variant="primary"
              size="large"
              className="px-8 py-3"
              onClick={() => navigate('/ceny')}
            >
              Oferta
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background image - hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 w-[35%] h-full">
          <img
            src="/images/img_36885291_7726_4_700x468.png"
            alt="Medical background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#334155' }}>
                Dowiedz się więcej o naszych produktach
              </h2>

              <p className="text-lg text-global-3 leading-relaxed mb-8">
                Chętnie odpowiemy na Państwa pytania dotyczące naszych implantów, metod chirurgicznych i współpracy. Skontaktuj się z nami – jesteśmy tutaj, aby pomóc.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center gap-3 p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                  <img
                    src="/images/img_vector_teal_200.svg"
                    alt="checkmark"
                    className="w-8 h-8"
                  />
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: '#334155' }}>
                      Certyfikowane produkty
                    </h4>
                    <p className="text-sm text-global-3">
                      Wszystkie nasze produkty posiadają certyfikaty ISO 13485
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                  <img
                    src="/images/img_vector_teal_200_16x16.svg"
                    alt="support"
                    className="w-8 h-8"
                  />
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: '#334155' }}>
                      Wsparcie 24/7
                    </h4>
                    <p className="text-sm text-global-3">
                      Nasz zespół ekspertów dostępny przez całą dobę
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                  <img
                    src="/images/img_vector_teal_200_16x20.svg"
                    alt="delivery"
                    className="w-8 h-8"
                  />
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: '#334155' }}>
                      Szybka dostawa
                    </h4>
                    <p className="text-sm text-global-3">
                      Ekspresowa dostawa na terenie całego kraju
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact CTA Button */}
              <Button
                variant="primary"
                size="large"
                className="px-12 py-4 text-lg"
                onClick={() => navigate('/kontakt')}
              >
                Skontaktuj się z nami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
        {/* Light texture overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(125, 179, 201, 0.08) 0%, transparent 60%),
                           radial-gradient(circle at 75% 75%, rgba(155, 196, 212, 0.06) 0%, transparent 55%),
                           radial-gradient(circle at 50% 10%, rgba(138, 187, 208, 0.05) 0%, transparent 65%),
                           radial-gradient(circle at 10% 80%, rgba(184, 212, 224, 0.07) 0%, transparent 58%)`
        }}></div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2" style={{ color: '#334155' }}>
              Opinie naszych klientów
            </h2>
            <p className="text-lg sm:text-xl text-global-4 mb-6">
              Zaufali nam lekarze i pacjenci
            </p>
            <p className="text-base text-global-3 max-w-4xl mx-auto">
              Poznaj opinie specjalistów i pacjentów, którzy korzystają z naszych produktów i usług medycznych.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>

              {/* Decorative floating elements */}
              <div
                className="absolute top-6 right-6 w-3 h-3 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-125"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-6 left-6 w-2 h-2 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute top-4 left-4 w-1 h-1 rounded-full opacity-5 group-hover:opacity-25 transition-all duration-700 group-hover:scale-200"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute top-12 right-4 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-17 transition-all duration-600 group-hover:scale-150"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute bottom-4 right-4 w-1 h-1 rounded-full opacity-5 group-hover:opacity-27 transition-all duration-800 group-hover:scale-300"
                style={{ backgroundColor: '#b8d4e0' }}
              ></div>

              {/* Content */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <img
                    src="/images/img_img_48x48.png"
                    alt="Dr. Anna Kowalska"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-bold mb-1 transition-colors duration-300" style={{ color: '#334155' }}>
                  Dr. Anna Kowalska
                </h4>
                <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  Ortopeda
                </p>

                <div className="flex justify-center mb-6">
                  <RatingBar rating={5} readonly />
                </div>

                <blockquote className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  "Produkty najwyższej jakości. Moi pacjenci są bardzo zadowoleni z rezultatów. Polecam każdemu specjaliście."
                </blockquote>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                style={{ backgroundColor: '#6ba3b9' }}
              ></div>

              {/* Decorative floating elements */}
              <div
                className="absolute top-8 left-8 w-4 h-4 rounded-full opacity-5 group-hover:opacity-25 transition-all duration-500 group-hover:scale-125"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-8 right-8 w-2 h-2 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute top-5 right-5 w-1 h-1 rounded-full opacity-5 group-hover:opacity-22 transition-all duration-750 group-hover:scale-250"
                style={{ backgroundColor: '#6ba3b9' }}
              ></div>
              <div
                className="absolute top-14 left-5 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-650 group-hover:scale-180"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute bottom-5 left-5 w-1 h-1 rounded-full opacity-5 group-hover:opacity-27 transition-all duration-700 group-hover:scale-220"
                style={{ backgroundColor: '#b8d4e0' }}
              ></div>

              {/* Content */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <img
                    src="/images/img_img_4.png"
                    alt="Dr. Piotr Nowak"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-bold mb-1 transition-colors duration-300" style={{ color: '#334155' }}>
                  Dr. Piotr Nowak
                </h4>
                <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  Weterynarz
                </p>

                <div className="flex justify-center mb-6">
                  <RatingBar rating={5} readonly />
                </div>

                <blockquote className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  "Współpraca z firmą przebiega bezproblemowo. Produkty doskonale sprawdzają się w praktyce weterynaryjnej."
                </blockquote>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50">
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>

              {/* Decorative floating elements */}
              <div
                className="absolute top-5 right-5 w-3 h-3 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-500 group-hover:scale-125"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>
              <div
                className="absolute bottom-5 left-5 w-4 h-4 rounded-full opacity-5 group-hover:opacity-25 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: '#8abbd0' }}
              ></div>
              <div
                className="absolute top-7 left-7 w-1 h-1 rounded-full opacity-5 group-hover:opacity-25 transition-all duration-700 group-hover:scale-280"
                style={{ backgroundColor: '#9bc4d4' }}
              ></div>
              <div
                className="absolute top-16 right-7 w-1.5 h-1.5 rounded-full opacity-5 group-hover:opacity-19 transition-all duration-650 group-hover:scale-170"
                style={{ backgroundColor: '#6ba3b9' }}
              ></div>
              <div
                className="absolute bottom-7 right-7 w-1 h-1 rounded-full opacity-5 group-hover:opacity-5 transition-all duration-800 group-hover:scale-320"
                style={{ backgroundColor: '#7db3c9' }}
              ></div>

              {/* Content */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <img
                    src="/images/img_img_5.png"
                    alt="Maria Wiśniewska"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-bold mb-1 transition-colors duration-300" style={{ color: '#334155' }}>
                  Maria Wiśniewska
                </h4>
                <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  Pacjentka
                </p>

                <div className="flex justify-center mb-6">
                  <RatingBar rating={5} readonly />
                </div>

                <blockquote className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  "Dzięki implantowi mogę ponownie cieszyć się aktywnością. Jakość życia znacznie się poprawiła."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
