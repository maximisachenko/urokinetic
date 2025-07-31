import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';
import MotionWrapper from '../../components/common/MotionWrapper';
import StaggerContainer from '../../components/common/StaggerContainer';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreeToPrivacy: boolean;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
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
            <section className="w-full bg-[linear-gradient(90deg,#f9fafb_0%,_#ffffff_100%)] py-12 sm:py-16 md:py-20 lg:py-24 mt-16 sm:mt-20">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionWrapper variant="fadeInUp">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#334155' }}>
                            Skontaktuj się z nami
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper variant="fadeInUp" delay={0.2}>
                        <p className="text-base sm:text-lg lg:text-xl text-global-3 max-w-3xl mx-auto leading-relaxed px-4">
                            Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania dotyczące naszych produktów,
                            współpracy i usług medycznych. Skontaktuj się z nami już dziś.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="w-full relative overflow-hidden py-12 sm:py-16" style={{ backgroundColor: '#f9fafb' }}>
                {/* Light texture overlay */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(125, 179, 201, 0.08) 0%, transparent 60%),
                                   radial-gradient(circle at 75% 75%, rgba(155, 196, 212, 0.06) 0%, transparent 55%),
                                   radial-gradient(circle at 50% 10%, rgba(138, 187, 208, 0.05) 0%, transparent 65%),
                                   radial-gradient(circle at 10% 80%, rgba(184, 212, 224, 0.07) 0%, transparent 58%)`
                }}></div>

                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.15}>
                        {/* Phone */}
                        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-full flex flex-col">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>
                            <div
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>
                            <div
                                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full opacity-25 group-hover:opacity-50 transition-all duration-700 group-hover:scale-200"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>

                            {/* Content */}
                            <div className="relative flex-1 flex flex-col justify-center">
                                <div
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #9bc4d4 0%, #8abbd0 100%)' }}
                                >
                                    <img src="/images/img_vector.svg" alt="phone" className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300" style={{ color: '#334155' }}>Telefon</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors duration-300">Zadzwoń do nas</p>
                                <a href="tel:+48501717989" className="text-sm sm:text-base font-medium hover:underline transition-colors" style={{ color: '#334155' }}>
                                    +48 501 717 989
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-full flex flex-col">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                                style={{ backgroundColor: '#6ba3b9' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-8 left-8 w-4 h-4 rounded-full opacity-25 group-hover:opacity-50 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>
                            <div
                                className="absolute bottom-8 right-8 w-2 h-2 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>
                            <div
                                className="absolute top-5 right-5 w-1 h-1 rounded-full opacity-20 group-hover:opacity-45 transition-all duration-750 group-hover:scale-250"
                                style={{ backgroundColor: '#6ba3b9' }}
                            ></div>

                            {/* Content */}
                            <div className="relative flex-1 flex flex-col justify-center">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #6ba3b9 0%, #7db3c9 100%)' }}
                                >
                                    <img src="/images/img_vector.svg" alt="email" className="w-8 h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>Email</h3>
                                <p className="text-gray-600 text-sm mb-3 group-hover:text-gray-700 transition-colors duration-300">Napisz do nas</p>
                                <a href="mailto:kontakt@urokinetic.pl" className="font-medium hover:underline transition-colors" style={{ color: '#334155' }}>
                                    kontakt@urokinetic.pl
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-full flex flex-col">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                                style={{ backgroundColor: '#8abbd0' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-5 right-5 w-3 h-3 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>
                            <div
                                className="absolute bottom-5 left-5 w-4 h-4 rounded-full opacity-25 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#8abbd0' }}
                            ></div>
                            <div
                                className="absolute top-7 left-7 w-1 h-1 rounded-full opacity-25 group-hover:opacity-50 transition-all duration-700 group-hover:scale-280"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>

                            {/* Content */}
                            <div className="relative flex-1 flex flex-col justify-center">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #8abbd0 0%, #9bc4d4 100%)' }}
                                >
                                    <img src="/images/img_vector.svg" alt="location" className="w-8 h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>Adres</h3>
                                <p className="text-gray-600 text-sm mb-3 group-hover:text-gray-700 transition-colors duration-300">Odwiedź nas</p>
                                <p className="font-medium" style={{ color: '#334155' }}>
                                    ul. Nowy Świat 57/59 lok. 12<br />
                                    00-042 Warszawa
                                </p>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100/50 h-full flex flex-col">
                            {/* Top gradient accent */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>

                            {/* Decorative floating elements */}
                            <div
                                className="absolute top-7 left-7 w-5 h-5 rounded-full opacity-15 group-hover:opacity-35 transition-all duration-500 group-hover:scale-125"
                                style={{ backgroundColor: '#7db3c9' }}
                            ></div>
                            <div
                                className="absolute bottom-7 right-7 w-2 h-2 rounded-full opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-150"
                                style={{ backgroundColor: '#9bc4d4' }}
                            ></div>
                            <div
                                className="absolute top-4 right-4 w-1 h-1 rounded-full opacity-24 group-hover:opacity-48 transition-all duration-720 group-hover:scale-260"
                                style={{ backgroundColor: '#8abbd0' }}
                            ></div>

                            {/* Content */}
                            <div className="relative flex-1 flex flex-col justify-center">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, #9bc4d4 0%, #8abbd0 100%)' }}
                                >
                                    <img src="/images/img_vector.svg" alt="time" className="w-8 h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#334155' }}>Godziny pracy</h3>
                                <p className="text-gray-600 text-sm mb-3 group-hover:text-gray-700 transition-colors duration-300">Jesteśmy dostępni</p>
                                <p className="font-medium" style={{ color: '#334155' }}>
                                    Pon-Pt: 8:00-18:00<br />
                                    Sob: 9:00-14:00
                                </p>
                            </div>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <MotionWrapper variant="fadeInLeft" className="">
                            <MotionWrapper variant="fadeInUp">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#334155' }}>
                                    Wyślij nam wiadomość
                                </h2>
                            </MotionWrapper>
                            <MotionWrapper variant="fadeInUp" delay={0.1}>
                                <p className="text-global-3 mb-8 leading-relaxed">
                                    Wypełnij formularz poniżej, a nasz zespół ekspertów skontaktuje się z Tobą
                                    w ciągu 24 godzin. Odpowiemy na wszystkie Twoje pytania dotyczące naszych produktów.
                                </p>
                            </MotionWrapper>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <StaggerContainer className="space-y-6" staggerDelay={0.1}>
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

                                    {/* Phone */}
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

                                    {/* Message */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-global-2">
                                            Wiadomość *
                                        </label>
                                        <TextArea
                                            value={formData.message}
                                            onChange={(value) => handleInputChange('message', value)}
                                            placeholder="Opisz swoje potrzeby lub zadaj pytanie..."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    {/* Privacy Agreement */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            checked={formData.agreeToPrivacy}
                                            onChange={(e) => handleInputChange('agreeToPrivacy', e.target.checked)}
                                            className="mt-1 w-4 h-4 text-global-4 border-gray-300 rounded focus:ring-global-4"
                                            required
                                        />
                                        <label htmlFor="privacy" className="text-sm text-global-3">
                                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
                                            <a href="#" className="text-global-4 hover:underline"> polityką prywatności</a>. *
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="large"
                                        className="w-full py-4 text-lg"
                                    >
                                        Wyślij wiadomość
                                    </Button>
                                </StaggerContainer>
                            </form>
                        </MotionWrapper>

                        {/* Contact Info & Map */}
                        <MotionWrapper variant="fadeInRight" delay={0.2} className="space-y-8">
                            <MotionWrapper variant="fadeInUp">
                                <div className="bg-global-3 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold mb-6" style={{ color: '#334155' }}>Informacje kontaktowe</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-global-1 rounded-full flex items-center justify-center">
                                                <img src="/images/img_vector.svg" alt="phone" className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-global-2">Telefon</p>
                                                <p className="text-global-3">+48 501 717 989</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-global-1 rounded-full flex items-center justify-center">
                                                <img src="/images/img_vector.svg" alt="email" className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-global-2">Email</p>
                                                <p className="text-global-3">kontakt@urokinetic.pl</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-global-1 rounded-full flex items-center justify-center">
                                                <img src="/images/img_vector.svg" alt="location" className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-global-2">Adres</p>
                                                <p className="text-global-3">ul. Nowy Świat 57/59 lok. 12, 00-042 Warszawa</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MotionWrapper>

                            <MotionWrapper variant="fadeInUp" delay={0.1}>
                                <div className="relative bg-white rounded-2xl h-64 sm:h-80 overflow-hidden shadow-lg group">
                                    {/* Google Maps iframe */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.2776!2d21.024578!3d52.2296756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd1f761b96e7%3A0x14e5e4d0b87ff46e!2sNowy%20%C5%9Awiat%2057%2F59%2C%2000-042%20Warszawa%2C%20Poland!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, pointerEvents: 'none' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="UROKINETIC - ul. Nowy Świat 57/59 lok. 12, Warszawa"
                                        className="transition-all duration-300"
                                    ></iframe>

                                    {/* Interactive overlay for mobile comfort */}
                                    <div
                                        className="absolute inset-0 bg-transparent cursor-pointer flex items-center justify-center group-hover:bg-black/5 transition-all duration-300"
                                        onClick={(e) => {
                                            const iframe = e.currentTarget.previousElementSibling as HTMLIFrameElement;
                                            const resetButton = document.getElementById('map-reset-button') as HTMLDivElement;
                                            if (iframe && resetButton) {
                                                iframe.style.pointerEvents = 'auto';
                                                e.currentTarget.style.display = 'none';
                                                resetButton.classList.remove('hidden');
                                                resetButton.classList.add('opacity-100');
                                            }
                                        }}
                                    >
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Kliknij aby aktywować mapę
                                            </p>
                                        </div>
                                    </div>

                                    {/* Reset overlay when clicked outside */}
                                    <div
                                        className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 hidden"
                                        id="map-reset-button"
                                    >
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const iframe = e.currentTarget.parentElement?.parentElement?.querySelector('iframe') as HTMLIFrameElement;
                                                const overlay = e.currentTarget.parentElement?.parentElement?.querySelector('.absolute.inset-0') as HTMLDivElement;
                                                const resetButton = e.currentTarget.parentElement as HTMLDivElement;
                                                if (iframe && overlay && resetButton) {
                                                    iframe.style.pointerEvents = 'none';
                                                    overlay.style.display = 'flex';
                                                    resetButton.classList.add('hidden');
                                                    resetButton.classList.remove('opacity-100');
                                                }
                                            }}
                                            className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors duration-200"
                                            title="Deaktywuj mapę"
                                        >
                                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </MotionWrapper>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage; 