import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

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
            <section className="w-full bg-[linear-gradient(90deg,#f9fafb_0%,_#ffffff_100%)] py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-global-2 mb-6">
                        Cennik produktów Urokinetic
                    </h1>
                    <p className="text-lg sm:text-xl text-global-3 max-w-3xl mx-auto leading-relaxed">
                        Przejrzyste ceny, bez ukrytych kosztów. Wszystkie produkty objęte są gwarancją jakości
                        oraz kompleksowym wsparciem technicznym.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                    </div>
                </div>
            </section>

            {/* Category Navigation */}
            <section className="w-full bg-global-3 py-8">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${activeCategory === category.id
                                    ? 'bg-global-4 text-global-2 shadow-md'
                                    : 'bg-transparent text-global-3 hover:bg-global-4/50'
                                    }`}
                            >
                                <img src={category.icon} alt={category.name} className="w-5 h-5" />
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {products[activeCategory as keyof typeof products].map((product, index) => (
                            <div
                                key={index}
                                className={`relative bg-global-4 rounded-2xl p-6 border transition-all duration-300 hover-lift hover-glow animate-fade-in-up ${product.popular
                                    ? 'border-global-4 shadow-md ring-2 ring-global-4 animate-scale-in'
                                    : 'border-gray-200 hover:border-global-4'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {product.popular && (
                                    <div className="absolute -top-3 left-6 bg-global-4 text-global-5 text-sm font-medium px-3 py-1 rounded-full">
                                        Najpopularniejszy
                                    </div>
                                )}

                                <div className="flex flex-col h-full">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-global-2 mb-2">
                                            {product.name}
                                        </h3>

                                        <p className="text-sm text-global-3 mb-6 leading-relaxed">
                                            {product.description}
                                        </p>

                                        <div className="mb-6">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-bold text-global-2">
                                                    {product.price}
                                                </span>
                                                <span className="text-sm text-global-3">PLN</span>
                                            </div>
                                            <p className="text-xs text-global-3 mt-1">Cena netto za jednostkę</p>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {product.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-sm">
                                                    <img
                                                        src="/images/img_vector_teal_200.svg"
                                                        alt="check"
                                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                    />
                                                    <span className="text-global-3">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button
                                        variant={product.popular ? "primary" : "secondary"}
                                        size="medium"
                                        fullWidth
                                        className="py-3"
                                    >
                                        Zamów teraz
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Information */}
            <section className="w-full bg-global-3 py-16">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-global-4 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/img_vector.svg" alt="shipping" className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold text-global-2 mb-2">Darmowa dostawa</h4>
                            <p className="text-sm text-global-3">Dla zamówień powyżej 2000 PLN</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-global-4 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/img_vector_teal_200.svg" alt="support" className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold text-global-2 mb-2">Wsparcie 24/7</h4>
                            <p className="text-sm text-global-3">Pomoc techniczna przez całą dobę</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-global-4 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/img_vector_teal_200_16x16.svg" alt="warranty" className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold text-global-2 mb-2">Gwarancja</h4>
                            <p className="text-sm text-global-3">2 lata gwarancji na wszystkie produkty</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-global-4 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/img_vector_teal_200_16x20.svg" alt="training" className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold text-global-2 mb-2">Szkolenia</h4>
                            <p className="text-sm text-global-3">Bezpłatne szkolenia dla zespołów medycznych</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full bg-global-4 py-16">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-global-2 mb-4">
                        Potrzebujesz indywidualnej wyceny?
                    </h2>
                    <p className="text-lg text-global-3 mb-8 max-w-2xl mx-auto">
                        Skontaktuj się z nami, aby uzyskać spersonalizowaną ofertę dostosowaną do Twoich potrzeb.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="large" className="px-8 py-3">
                            Skontaktuj się z nami
                        </Button>
                        <Button variant="secondary" size="large" className="px-8 py-3">
                            Pobierz katalog PDF
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PricingPage; 