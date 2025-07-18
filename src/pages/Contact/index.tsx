import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    agreeToPrivacy: boolean;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        agreeToPrivacy: false
    });

    const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
    };

    return (
        <div className="w-full bg-global-4">
            <Header />

            {/* Hero Section */}
            <section className="w-full bg-[linear-gradient(90deg,#f9fafb_0%,_#ffffff_100%)] py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-global-2 mb-6">
                        Skontaktuj się z nami
                    </h1>
                    <p className="text-lg sm:text-xl text-global-3 max-w-3xl mx-auto leading-relaxed">
                        Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania dotyczące naszych produktów,
                        współpracy i usług medycznych. Skontaktuj się z nami już dziś.
                    </p>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="w-full bg-global-3 py-16">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {/* Phone */}
                        <div className="bg-global-4 rounded-2xl p-6 text-center shadow-[0px_1px_2px_#0000000c] hover-lift hover-glow animate-fade-in-up animate-stagger-1">
                            <div className="w-12 h-12 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-1">
                                <img src="/images/img_vector.svg" alt="phone" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-2">Telefon</h3>
                            <p className="text-global-3 text-sm mb-2">Zadzwoń do nas</p>
                            <a href="tel:+48501717989" className="text-global-4 font-medium hover:underline transition-colors">
                                +48 501 717 989
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-global-4 rounded-2xl p-6 text-center shadow-[0px_1px_2px_#0000000c] hover-lift hover-glow animate-fade-in-up animate-stagger-2">
                            <div className="w-12 h-12 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-2">
                                <img src="/images/img_vector_teal_200.svg" alt="email" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-2">Email</h3>
                            <p className="text-global-3 text-sm mb-2">Napisz do nas</p>
                            <a href="mailto:office@urokinetic.pl" className="text-global-4 font-medium hover:underline transition-colors">
                                office@urokinetic.pl
                            </a>
                        </div>

                        {/* Address */}
                        <div className="bg-global-4 rounded-2xl p-6 text-center shadow-[0px_1px_2px_#0000000c] hover-lift hover-glow animate-fade-in-up animate-stagger-3">
                            <div className="w-12 h-12 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-3">
                                <img src="/images/img_vector_teal_200_16x16.svg" alt="location" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-2">Adres</h3>
                            <p className="text-global-3 text-sm mb-2">Odwiedź nas</p>
                            <p className="text-global-2 text-sm">
                                ul. Zielonecka 11/503<br />
                                05-091 Ząbki, Polska
                            </p>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-global-4 rounded-2xl p-6 text-center shadow-[0px_1px_2px_#0000000c] hover-lift hover-glow animate-fade-in-up animate-stagger-4">
                            <div className="w-12 h-12 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-stagger-4">
                                <img src="/images/img_vector_teal_200_16x20.svg" alt="hours" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-global-2 mb-2">Godziny pracy</h3>
                            <p className="text-global-3 text-sm mb-2">Jesteśmy dostępni</p>
                            <div className="text-global-2 text-sm">
                                <p>Pn-Pt: 8:00 - 18:00</p>
                                <p>Sb: 9:00 - 14:00</p>
                                <p>Nd: Zamknięte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <div className="animate-fade-in-left">
                            <h2 className="text-2xl sm:text-3xl font-bold text-global-2 mb-6 animate-fade-in-up">
                                Wyślij nam wiadomość
                            </h2>
                            <p className="text-global-3 mb-8 leading-relaxed animate-fade-in-up animate-stagger-1">
                                Wypełnij formularz poniżej, a nasz zespół ekspertów skontaktuje się z Tobą
                                w ciągu 24 godzin. Odpowiemy na wszystkie Twoje pytania dotyczące naszych produktów.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up animate-stagger-2">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-global-2">
                                            Imię i nazwisko *
                                        </label>
                                        <EditText
                                            value={formData.name}
                                            onChange={(value) => handleInputChange('name', value)}
                                            placeholder="Wprowadź imię i nazwisko"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-global-2">
                                            Adres email *
                                        </label>
                                        <EditText
                                            type="email"
                                            value={formData.email}
                                            onChange={(value) => handleInputChange('email', value)}
                                            placeholder="Wprowadź adres email"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone and Company Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-global-2">
                                            Telefon
                                        </label>
                                        <EditText
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(value) => handleInputChange('phone', value)}
                                            placeholder="Wprowadź numer telefonu"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-global-2">
                                            Firma/Placówka
                                        </label>
                                        <EditText
                                            value={formData.company}
                                            onChange={(value) => handleInputChange('company', value)}
                                            placeholder="Nazwa firmy lub placówki"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-global-2">
                                        Temat *
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => handleInputChange('subject', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-global-4 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Wybierz temat</option>
                                        <option value="general">Ogólne zapytanie</option>
                                        <option value="products">Pytanie o produkty</option>
                                        <option value="pricing">Wycena produktów</option>
                                        <option value="support">Wsparcie techniczne</option>
                                        <option value="training">Szkolenia</option>
                                        <option value="partnership">Współpraca</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-global-2">
                                        Wiadomość *
                                    </label>
                                    <TextArea
                                        value={formData.message}
                                        onChange={(value) => handleInputChange('message', value)}
                                        placeholder="Opisz szczegółowo swoje zapytanie..."
                                        rows={6}
                                        required
                                    />
                                </div>

                                {/* Privacy Checkbox */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        checked={formData.agreeToPrivacy}
                                        onChange={(e) => handleInputChange('agreeToPrivacy', e.target.checked)}
                                        className="w-4 h-4 mt-1 border border-gray-300 rounded text-global-4 focus:ring-global-4"
                                        required
                                    />
                                    <label htmlFor="privacy" className="text-sm text-global-3">
                                        Zgadzam się z{' '}
                                        <a href="#" className="text-global-4 hover:underline">Polityką Prywatności</a>
                                        {' '}i wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie. *
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    fullWidth
                                    className="py-4"
                                >
                                    Wyślij wiadomość
                                </Button>
                            </form>
                        </div>

                        {/* Map and Additional Info */}
                        <div className="space-y-8">
                            {/* Map Placeholder */}
                            <div>
                                <h3 className="text-xl font-semibold text-global-2 mb-4">
                                    Lokalizacja naszego biura
                                </h3>
                                <div className="bg-global-3 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-global-1 to-global-4 opacity-20"></div>
                                    <div className="relative z-10 text-center">
                                        <img src="/images/img_vector_teal_200_16x16.svg" alt="map" className="w-12 h-12 mx-auto mb-4" />
                                        <p className="text-global-2 font-medium">Mapa Google</p>
                                        <p className="text-sm text-global-3 mt-2">
                                            ul. Zielonecka 11/503<br />
                                            05-091 Ząbki, Polska
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="bg-global-3 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold text-global-2 mb-4">
                                    Pilne zapytanie?
                                </h3>
                                <p className="text-global-3 mb-6 text-sm leading-relaxed">
                                    W przypadku pilnych zapytań medycznych lub technicznych,
                                    prosimy o bezpośredni kontakt telefoniczny. Nasz zespół
                                    dysponuje linią wsparcia dostępną 24/7.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="/images/img_vector.svg" alt="phone" className="w-5 h-5" />
                                        <div>
                                            <p className="font-medium text-global-2">Linia wsparcia 24/7</p>
                                            <a href="tel:+48501717989" className="text-global-4 hover:underline">
                                                +48 501 717 989
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <img src="/images/img_vector_teal_200.svg" alt="email" className="w-5 h-5" />
                                        <div>
                                            <p className="font-medium text-global-2">Email wsparcia</p>
                                            <a href="mailto:support@urokinetic.pl" className="text-global-4 hover:underline">
                                                support@urokinetic.pl
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-global-4 border border-gray-100 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold text-global-2 mb-4">
                                    Dlaczego warto z nami współpracować?
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <img src="/images/img_vector_teal_200.svg" alt="check" className="w-4 h-4 mt-1" />
                                        <div>
                                            <p className="font-medium text-global-2 text-sm">Szybka odpowiedź</p>
                                            <p className="text-xs text-global-3">Odpowiadamy w ciągu 24 godzin</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <img src="/images/img_vector_teal_200_16x16.svg" alt="check" className="w-4 h-4 mt-1" />
                                        <div>
                                            <p className="font-medium text-global-2 text-sm">Profesjonalne doradztwo</p>
                                            <p className="text-xs text-global-3">Zespół ekspertów medycznych</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <img src="/images/img_vector_teal_200_16x20.svg" alt="check" className="w-4 h-4 mt-1" />
                                        <div>
                                            <p className="font-medium text-global-2 text-sm">Indywidualne podejście</p>
                                            <p className="text-xs text-global-3">Rozwiązania szyte na miarę</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage; 