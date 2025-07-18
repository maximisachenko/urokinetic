import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';
import RatingBar from '../../components/ui/RatingBar';
import Carousel from '../../components/ui/Carousel';

interface FormData {
  name: string;
  email: string;
  message: string;
  agreeToPrivacy: boolean;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    agreeToPrivacy: false
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full bg-global-4">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9fafb_0%,_#ffffff_100%)]"></div>

        {/* Background image - hide on mobile for better readability */}
        <div className="hidden md:block absolute top-0 right-0 w-[50%] lg:w-[40%] xl:w-[38%] h-full">
          <img
            src="/images/img_36885291_7726_4.png"
            alt="Medical professional"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
            {/* Left content */}
            <div className="w-full lg:w-[55%] flex flex-col items-start gap-6 sm:gap-8 text-center lg:text-left animate-fade-in-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-global-2 leading-tight animate-fade-in-up">
                Innowacyjne rozwiązania medyczne dla seniorów
              </h1>

              <p className="text-lg sm:text-xl text-global-3 leading-relaxed max-w-2xl animate-fade-in-up animate-stagger-1">
                Oferujemy najwyższej jakości implanty i rozwiązania medyczne, które poprawiają jakość życia pacjentów w podeszłym wieku oraz zwierząt.
              </p>

              <Button
                variant="primary"
                size="large"
                className="px-8 py-4 text-lg animate-fade-in-up animate-stagger-2"
              >
                Dowiedz się więcej
              </Button>
            </div>

            {/* Right image stack - visible only on desktop when no background image */}
            <div className="w-full lg:w-[45%] relative h-[300px] sm:h-[360px] lg:h-[400px] md:hidden lg:block animate-fade-in-right">
              {/* Decorative circles */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-global-1 rounded-full animate-pulse-soft"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-global-2 rounded-full animate-float"></div>

              {/* Main image */}
              <div className="absolute top-4 left-6 right-6 bottom-12 animate-scale-in animate-stagger-2">
                <img
                  src="/images/img_img.png"
                  alt="Medical consultation"
                  className="w-full h-full object-cover rounded-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left content */}
            <div className="w-full lg:w-[50%] flex flex-col items-start gap-8 text-center lg:text-left animate-fade-in-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-global-2 animate-fade-in-up">
                O nas
              </h2>

              <p className="text-lg sm:text-xl text-global-3 leading-relaxed max-w-2xl animate-fade-in-up animate-stagger-1">
                Jesteśmy wiodącą firmą w dziedzinie innowacyjnych rozwiązań medycznych. Nasze produkty są wykorzystywane przez tysiące specjalistów na całym świecie.
              </p>

              {/* Features list */}
              <div className="flex flex-col gap-4 w-full animate-fade-in-up animate-stagger-2">
                <div className="flex items-center gap-3 hover-scale animate-fade-in-up animate-stagger-1">
                  <img
                    src="/images/img_vector.svg"
                    alt="checkmark"
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-base text-global-1">
                    Ponad 10 lat doświadczenia
                  </span>
                </div>

                <div className="flex items-center gap-3 hover-scale animate-fade-in-up animate-stagger-2">
                  <img
                    src="/images/img_vector.svg"
                    alt="checkmark"
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-base text-global-1">
                    Certyfikat ISO 13485
                  </span>
                </div>

                <div className="flex items-center gap-3 hover-scale animate-fade-in-up animate-stagger-3">
                  <img
                    src="/images/img_vector.svg"
                    alt="checkmark"
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-base text-global-1">
                    Ponad 50,000 zadowolonych pacjentów
                  </span>
                </div>
              </div>

              <Button
                variant="primary"
                size="medium"
                className="px-8 py-3 mt-4"
                onClick={() => navigate('/o-nas')}
              >
                Dowiedz się więcej o nas
              </Button>
            </div>

            {/* Right images grid */}
            <div className="w-full lg:w-[50%] flex justify-center animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4 max-w-md lg:max-w-none">
                <div className="space-y-4">
                  <img
                    src="/images/img_img_192x284.png"
                    alt="Medical equipment"
                    className="w-full h-auto rounded-lg shadow-md hover-lift animate-fade-in-up animate-stagger-1"
                  />
                  <img
                    src="/images/img_img_1.png"
                    alt="Medical procedure"
                    className="w-full h-auto rounded-lg shadow-md hover-lift animate-fade-in-up animate-stagger-3"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/images/img_img_2.png"
                    alt="Medical consultation"
                    className="w-full h-auto rounded-lg shadow-md hover-lift animate-fade-in-up animate-stagger-2"
                  />
                  <img
                    src="/images/img_img_3.png"
                    alt="Medical technology"
                    className="w-full h-auto rounded-lg shadow-md hover-lift animate-fade-in-up animate-stagger-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-global-3 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-global-2 mb-2">
              Usługi
            </h2>
            <p className="text-lg sm:text-xl text-global-4 mb-6">
              Innowacyjne rozwiązania dla seniorów i zwierząt
            </p>
            <p className="text-base text-global-3 max-w-4xl mx-auto">
              Wszystkie produkty są wykonane z materiałów biokompatybilnych zgodnych z ISO 13485, z uwzględnieniem bezpieczeństwa, trwałości i indywidualnego dopasowania do potrzeb pacjenta.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-global-4 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-1">
              <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-in animate-stagger-1">
                <img
                  src="/images/img_div.svg"
                  alt="Security icon"
                  className="w-8 h-8"
                  style={{ stroke: 'none', fill: 'currentColor' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-global-2 mb-3">
                Bezpieczeństwo
              </h3>
              <div className="text-sm text-global-3 leading-relaxed">
                <p>Najwyższe standardy bezpieczeństwa zgodne z międzynarodowymi normami medycznymi.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-global-4 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-2">
              <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-in animate-stagger-2">
                <img
                  src="/images/img_div_teal_200.svg"
                  alt="Individual care icon"
                  className="w-8 h-8"
                  style={{ stroke: 'none', fill: 'currentColor' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-global-2 mb-3">
                Indywidualne dopasowanie
              </h3>
              <div className="text-sm text-global-3 leading-relaxed">
                <p>Każdy produkt dostosowany do unikalnych potrzeb pacjenta.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-global-4 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-3">
              <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-in animate-stagger-3">
                <img
                  src="/images/img_div_teal_200_64x64.svg"
                  alt="Fast recovery icon"
                  className="w-8 h-8"
                  style={{ stroke: 'none', fill: 'currentColor' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-global-2 mb-3">
                Szybka rekonwalescencja
              </h3>
              <div className="text-sm text-global-3 leading-relaxed">
                <p>Innowacyjne rozwiązania przyspieszające proces zdrowienia.</p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-global-4 rounded-xl p-6 shadow-[0px_1px_2px_#0000000c] text-center hover-lift hover-glow animate-fade-in-up animate-stagger-4">
              <div className="w-16 h-16 bg-global-1 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-in animate-stagger-4">
                <img
                  src="/images/img_div_64x64.svg"
                  alt="Quality icon"
                  className="w-8 h-8"
                  style={{ stroke: 'none', fill: 'currentColor' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-global-2 mb-3">
                Najwyższa jakość
              </h3>
              <div className="text-sm text-global-3 leading-relaxed">
                <p>Produkty wykonane z najlepszych materiałów biokompatybilnych.</p>
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
              Sprawdź cennik
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
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left content */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-global-2 leading-tight">
                Dowiedz się więcej o naszych produktach
              </h2>

              <p className="text-base text-global-3 leading-relaxed">
                Chętnie odpowiemy na Państwa pytania dotyczące naszych implantów, metod chirurgicznych i współpracy. Skontaktuj się z nami – jesteśmy tutaj, aby pomóc.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/img_vector_teal_200.svg"
                    alt="checkmark"
                    className="w-4 h-4 mt-2 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-global-2 mb-1">
                      Certyfikowane produkty
                    </h4>
                    <p className="text-sm text-global-3">
                      Wszystkie nasze produkty posiadają certyfikaty ISO 13485
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="/images/img_vector_teal_200_16x16.svg"
                    alt="support"
                    className="w-4 h-4 mt-2 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-global-2 mb-1">
                      Wsparcie 24/7
                    </h4>
                    <p className="text-sm text-global-3">
                      Nasz zespół ekspertów dostępny przez całą dobę
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="/images/img_vector_teal_200_16x20.svg"
                    alt="delivery"
                    className="w-4 h-5 mt-2 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-global-2 mb-1">
                      Szybka dostawa
                    </h4>
                    <p className="text-sm text-global-3">
                      Ekspresowa dostawa na terenie całego kraju
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="w-full lg:w-[45%]">
              <form onSubmit={handleSubmit} className="bg-global-3 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-global-2">
                      Imię i nazwisko
                    </label>
                    <EditText
                      value={formData.name}
                      onChange={(value) => handleInputChange('name', value)}
                      placeholder="Wprowadź imię i nazwisko"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-global-2">
                      Adres email
                    </label>
                    <EditText
                      type="email"
                      value={formData.email}
                      onChange={(value) => handleInputChange('email', value)}
                      placeholder="Wprowadź adres email"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-global-2">
                      Wiadomość
                    </label>
                    <TextArea
                      value={formData.message}
                      onChange={(value) => handleInputChange('message', value)}
                      placeholder="Wprowadź wiadomość"
                      rows={4}
                    />
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.agreeToPrivacy}
                      onChange={(e) => handleInputChange('agreeToPrivacy', e.target.checked)}
                      className="w-3 h-3 mt-1 border border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="text-sm text-global-3">
                      Zgadzam się z{' '}
                      <span className="text-global-4">Polityką Prywatności</span>
                    </label>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="medium"
                    fullWidth
                    className="py-3"
                  >
                    Wyślij wiadomość
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-global-4 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-global-2">
              Opinie naszych klientów
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift fade-in stagger-1">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/img_img_48x48.png"
                  alt="Dr. Anna Kowalska"
                  className="w-16 h-16 rounded-full hover-scale"
                />
                <div>
                  <h4 className="text-lg font-semibold text-global-2">
                    Dr. Anna Kowalska
                  </h4>
                  <p className="text-sm text-global-3">Ortopeda</p>
                </div>
              </div>

              <RatingBar rating={5} readonly />

              <blockquote className="text-global-2 mt-4 leading-relaxed">
                "Produkty najwyższej jakości. Moi pacjenci są bardzo zadowoleni z rezultatów. Polecam każdemu specjaliście."
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift fade-in stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/img_img_4.png"
                  alt="Dr. Piotr Nowak"
                  className="w-16 h-16 rounded-full hover-scale"
                />
                <div>
                  <h4 className="text-lg font-semibold text-global-2">
                    Dr. Piotr Nowak
                  </h4>
                  <p className="text-sm text-global-3">Weterynarz</p>
                </div>
              </div>

              <RatingBar rating={5} readonly />

              <blockquote className="text-global-2 mt-4 leading-relaxed">
                "Współpraca z firmą przebiega bezproblemowo. Produkty doskonale sprawdzają się w praktyce weterynaryjnej."
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift fade-in stagger-3">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/img_img_5.png"
                  alt="Maria Wiśniewska"
                  className="w-16 h-16 rounded-full hover-scale"
                />
                <div>
                  <h4 className="text-lg font-semibold text-global-2">
                    Maria Wiśniewska
                  </h4>
                  <p className="text-sm text-global-3">Pacjentka</p>
                </div>
              </div>

              <RatingBar rating={5} readonly />

              <blockquote className="text-global-2 mt-4 leading-relaxed">
                "Dzięki implantowi mogę ponownie cieszyć się aktywnością. Jakość życia znacznie się poprawiła."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;