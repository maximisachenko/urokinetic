# Urokinetic - Strona firmowa

Aplikacja webowa dla firmy Urokinetic specjalizującej się w innowacyjnych rozwiązaniach medycznych dla seniorów i zwierząt.

## 🚀 Funkcjonalności

### 🏠 Strona główna

- Sekcja hero z prezentacją firmy
- Informacje o firmie i doświadczeniu
- Przegląd usług medycznych
- Formularz kontaktowy
- Opinie klientów

### 📋 Strona "O nas" (`/o-nas`)

- **Sekcja 1**: Hero z motywacyjnym hasłem i zdjęciem budującym zaufanie
- **Sekcja 2**: Informacje o firmie - kim jesteśmy, co robimy, dla kogo
- **Sekcja 3**: Blok z przewagami (powielenie z głównej strony)
- **Sekcja 4**: Historia i wartości firmy ze zdjęciami zespołu
- **Sekcja 5**: Wyjaśnienie logo i pochodzenia nazwy UROKINETIC

### 💰 Strona "Ceny" (`/ceny`)

- Przejrzyste kategorie produktów: Medycyna ludzka, Weterynaria, Akcesoria
- Interaktywne przełączanie między kategoriami
- Karty produktów z cenami i funkcjami
- Informacje o gwarancji i wsparciu
- Sekcja CTA dla indywidualnych wycen

### 📞 Strona "Kontakty" (`/kontakt`)

- Karty z informacjami kontaktowymi (telefon, email, adres, godziny pracy)
- Rozbudowany formularz kontaktowy z walidacją
- Mapa lokalizacji (placeholder)
- Sekcja pilnego wsparcia 24/7
- Informacje o korzyściach współpracy

## ✅ Poprawki i ulepszenia

### Naprawione problemy z adaptywnością

- Usunięte nieprawidłowe klasy Tailwind CSS (`mb-17`, `mt-26`)
- Poprawiona responsywność dla wszystkich urządzeń
- Ulepszony layout dla mobile i tablet

### Usunięte "lишние чёрточки"

- Połączony tekst w opiniach klientów
- Usprawnionych opis usług bez zbędnych podziałów linii
- Lepszy flow czytania tekstów

### Funkcjonalna nawigacja

- Działające linki w Header i Footer
- React Router z właściwymi ścieżkami
- Sprawne przejścia między stronami
- Mobile menu z funkcjonalnymi linkami

## 🛠️ Technologie

- **React 18** z TypeScript
- **Vite** - szybki bundler i dev server
- **Tailwind CSS** - utility-first CSS framework
- **React Router** - routing po stronie klienta
- **Responsive Design** - optymalizacja dla wszystkich urządzeń

## 📋 Wymagania

- Node.js (v14.x lub wyższa)
- npm lub yarn

## 🚀 Uruchamianie projektu

```bash
# Instalacja dependencji
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu
npm run preview
```

## 📁 Struktura projektu

```
src/
├── pages/
│   ├── Home/         # Strona główna
│   ├── About/        # Strona "O nas"
│   ├── Pricing/      # Strona "Ceny"
│   └── Contact/      # Strona "Kontakty"
├── components/
│   ├── common/       # Header, Footer
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/           # Komponenty UI
│       ├── Button.tsx
│       ├── EditText.tsx
│       ├── TextArea.tsx
│       └── RatingBar.tsx
├── styles/           # Style CSS i konfiguracja
│   ├── index.css
│   └── tailwind.css
├── App.tsx          # Główny komponent
├── main.tsx         # Punkt wejścia
└── Routes.tsx       # Konfiguracja tras
```

## 🎨 System kolorów

Projekt wykorzystuje spójny system kolorów zdefiniowany w CSS variables:

```css
--global-bg-1: #7db3c919; /* Jasny turkusowy tło */
--global-bg-2: #7db3c933; /* Średni turkusowy tło */
--global-bg-3: #f9fafb; /* Bardzo jasny szary */
--global-bg-4: #ffffff; /* Biały */
--global-text-1: #000000; /* Czarny tekst */
--global-text-2: #1a1a1a; /* Ciemny szary */
--global-text-3: #4b5563; /* Średni szary */
--global-text-4: #7db3c9; /* Turkusowy akcent */
--global-text-5: #ffffff; /* Biały tekst */
```

## 🌐 Dostępne strony

- `/` - Strona główna
- `/o-nas` - Informacje o firmie
- `/ceny` - Cennik produktów
- `/kontakt` - Formularz kontaktowy

## 🚀 Deployment

Projekt może być wdrożony na dowolnej platformie obsługującej statyczne pliki:

```bash
# Build produkcyjny
npm run build

# Pliki produkcyjne znajdują się w folderze dist/
```

Zalecane platformy:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📱 Responsywność

Projekt jest w pełni responsywny i optymalizowany dla:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Dalszy rozwój

Aplikacja jest gotowa do dalszego rozwoju i może być łatwo rozszerzona o:

- System CMS do zarządzania treścią
- Integrację z systemami płatności
- Zaawansowaną mapę Google Maps
- System zarządzania produktami
- Blog firmowy
- Panel administracyjny
- Wielojęzyczność (i18n)
- SEO optymalizację

## 📞 Wsparcie

W przypadku pytań lub problemów z projektem, prosimy o kontakt:

- Email: office@urokinetic.pl
- Telefon: +48 501 717 989

---

Built with ❤️ for Urokinetic - innowacyjne rozwiązania medyczne
