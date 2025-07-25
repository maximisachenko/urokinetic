import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from './LenisContext';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        // Немедленно прокручиваем без анимации
        const scrollToTopImmediate = () => {
            // Метод 1: Через Lenis если доступен
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            }

            // Метод 2: Через глобальный lenis
            const globalLenis = (window as any).lenis;
            if (globalLenis && typeof globalLenis.scrollTo === 'function') {
                globalLenis.scrollTo(0, { immediate: true });
            }

            // Метод 3: Принудительная установка через DOM
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            // Метод 4: window.scrollTo как финальный фолбэк
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
            });
        };

        // Выполняем немедленно
        scrollToTopImmediate();

        // И еще раз с небольшой задержкой для надежности
        const timer = setTimeout(scrollToTopImmediate, 10);

        return () => clearTimeout(timer);
    }, [pathname, lenis]);

    return null;
};

export default ScrollToTop; 