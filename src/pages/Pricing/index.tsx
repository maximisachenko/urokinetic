import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import MotionWrapper from '../../components/common/MotionWrapper';
import StaggerContainer from '../../components/common/StaggerContainer';
import { motion, AnimatePresence } from 'framer-motion';

const PricingPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('human');

    const categories = [
        { id: 'human', name: 'Medycyna ludzka', icon: '/images/img_div.svg' },
        { id: 'veterinary', name: 'Weterynaria', icon: '/images/img_div_teal_200.svg' },
        { id: 'accessories', name: 'Akcesoria', icon: '/images/img_div_64x64.svg' }
    ];

    const products = {
        human: [
            {
                name: 'Implant antybakteryjny ABS-1',
                description: 'Implant biodegradowalny do leczenia nietrzymania moczu',
                price: '2,850',
                features: ['Certyfikat ISO 13485', 'Biodegradowalny', 'Antybakteryjny', 'Wsparcie 24/7'],
                popular: true
            },
            {
                name: 'System URO-Fix Pro',
                description: 'Zaawansowany system implantów modularnych',
                price: '4,200',
                features: ['System modularny', 'Minimalna inwazyjność', 'Szybka aplikacja', 'Dokumentacja PL/EN'],
                popular: false
            },
            {
                name: 'Implant UroLift Standard',
                description: 'Standardowy implant do podstawowej terapii',
                price: '1,950',
                features: ['Tanie rozwiązanie', 'Sprawdzona technologia', 'Wsparcie podstawowe', 'Gwarancja 2 lata'],
                popular: false
            }
        ],
        veterinary: [
            {
                name: 'VetUro-Compact',
                description: 'Implant dedykowany dla małych zwierząt',
                price: '1,680',
                features: ['Dostosowany do zwierząt', 'Mały rozmiar', 'Biokompatybilny', 'Szybka aplikacja'],
                popular: true
            },
            {
                name: 'VetUro-Pro Large',
                description: 'System dla dużych zwierząt gospodarskich',
                price: '3,200',
                features: ['Duży rozmiar', 'Wytrzymały', 'Długotrwały', 'Wsparcie weterynaryjne'],
                popular: false
            },
            {
                name: 'VetUro-Emergency',
                description: 'Zestaw implantów ratunkowych',
                price: '890',
                features: ['Zestaw ratunkowy', 'Szybka dostępność', 'Kompaktowy', 'Instrukcja PL/EN'],
                popular: false
            }
        ],
        accessories: [
            {
                name: 'Zestaw narzędzi chirurgicznych',
                description: 'Kompletny zestaw narzędzi do aplikacji implantów',
                price: '1,200',
                features: ['15 narzędzi', 'Stal chirurgiczna', 'Sterylizowalne', 'Walizka w zestawie'],
                popular: false
            },
            {
                name: 'System diagnostyczny UroCheck',
                description: 'Urządzenie do diagnostyki przedoperacyjnej',
                price: '5,500',
                features: ['Diagnostyka cyfrowa', 'Raporting', 'Interface PL', 'Szkolenie w cenie'],
                popular: true
            },
            {
                name: 'Materiały opatrunkowe',
                description: 'Specjalistyczne materiały pooperacyjne',
                price: '320',
                features: ['Biokompatybilne', 'Łatwe w użyciu', 'Różne rozmiary', 'Opakowanie sterylne'],
                popular: false
            }
        ]
    };

    return (
        <div className="w-full bg-global-4">
            <Header />

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 mt-20" style={{ backgroundColor: '#f9fafb' }}>
                {/* Light texture overlay */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(125, 179, 201, 0.08) 0%, transparent 60%),
                                   radial-gradient(circle at 75% 75%, rgba(155, 196, 212, 0.06) 0%, transparent 55%),
                                   radial-gradient(circle at 50% 10%, rgba(138, 187, 208, 0.05) 0%, transparent 65%),
                                   radial-gradient(circle at 10% 80%, rgba(184, 212, 224, 0.07) 0%, transparent 58%)`
                }}></div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionWrapper variant="fadeInUp">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: '#334155' }}>
                            Cennik produktów Urokinetic
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper variant="fadeInUp" delay={0.2}>
                        <p className="text-lg sm:text-xl text-global-3 max-w-3xl mx-auto leading-relaxed">
                            Przejrzyste ceny, bez ukrytych kosztów. Wszystkie produkty objęte są gwarancją jakości
                            oraz kompleksowym wsparciem technicznym.
                        </p>
                    </MotionWrapper>

                    <StaggerContainer className="mt-8 flex flex-wrap justify-center gap-4" staggerDelay={0.1}>
                        <div className="flex items-center gap-2 text-sm text-global-3">
                            <img src="/images/img_vector.svg" alt="check" className="w-4 h-4" />
                            <span>Gwarancja jakości</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-global-3">
                            <img src="/images/img_vector.svg" alt="check" className="w-4 h-4" />
                            <span>Wsparcie 24/7</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-global-3">
                            <img src="/images/img_vector.svg" alt="check" className="w-4 h-4" />
                            <span>Szybka dostawa</span>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Category Navigation */}
            <section className="w-full bg-global-4 py-8">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.1}>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:scale-105 ${activeCategory === category.id
                                    ? 'bg-global-4 text-global-2 shadow-lg'
                                    : 'bg-global-4 border-gray-300 text-global-2 hover:border-gray-400'
                                    }`}
                                style={activeCategory === category.id ? { borderColor: '#7db3c9' } : {}}
                            >
                                <img src={category.icon} alt={category.name} className="w-5 h-5" />
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Products Section */}
            <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {products[activeCategory as keyof typeof products].map((product, index) => (
                                <motion.div
                                    key={`${activeCategory}-${index}`}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    className={`relative bg-global-4 rounded-2xl p-6 border transition-all duration-500 ease-out ${product.popular
                                        ? 'border-global-4 shadow-md ring-2 ring-global-4 hover:shadow-xl hover:ring-4 hover:ring-opacity-60'
                                        : 'border-gray-200 hover:border-global-4 hover-lift hover-glow'
                                        }`}
                                    style={product.popular ? { '--tw-ring-color': '#7db3c9' } as React.CSSProperties : {}}
                                >
                                    {product.popular && (
                                        <div className="absolute -top-3 left-6 bg-global-4 text-global-5 text-sm font-medium px-3 py-1 rounded-full">
                                            Najpopularniejszy
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold mb-2" style={{ color: '#334155' }}>{product.name}</h3>
                                        <p className="text-global-3 text-sm mb-4">{product.description}</p>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-3xl font-bold" style={{ color: '#334155' }}>{product.price}</span>
                                            <span className="text-sm text-global-3">PLN</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {product.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-3">
                                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-global-2">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        <Button
                                            variant={product.popular ? "primary" : "secondary"}
                                            size="medium"
                                            fullWidth
                                            className="py-3"
                                        >
                                            Zapytaj o cenę
                                        </Button>
                                        <button className="w-full text-sm text-global-4 hover:text-global-2 transition-colors">
                                            Więcej informacji
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f9fafb' }}>
                {/* Light texture overlay */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(125, 179, 201, 0.08) 0%, transparent 60%),
                                   radial-gradient(circle at 75% 75%, rgba(155, 196, 212, 0.06) 0%, transparent 55%),
                                   radial-gradient(circle at 50% 10%, rgba(138, 187, 208, 0.05) 0%, transparent 65%),
                                   radial-gradient(circle at 10% 80%, rgba(184, 212, 224, 0.07) 0%, transparent 58%)`
                }}></div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionWrapper variant="fadeInUp">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#334155' }}>
                            Potrzebujesz indywidualnej wyceny?
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper variant="fadeInUp" delay={0.2}>
                        <p className="text-lg text-global-3 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Oferujemy również rozwiązania szyte na miarę. Skontaktuj się z nami,
                            aby omówić Twoje szczegółowe potrzeby i otrzymać spersonalizowaną ofertę.
                        </p>
                    </MotionWrapper>
                    <MotionWrapper variant="fadeInUp" delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="primary"
                                size="large"
                                className="px-8 py-4"
                            >
                                Skontaktuj się z nami
                            </Button>
                            <Button
                                variant="secondary"
                                size="large"
                                className="px-8 py-4"
                            >
                                Pobierz katalog
                            </Button>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PricingPage; 