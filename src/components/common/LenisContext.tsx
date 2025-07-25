import React, { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

interface LenisContextType {
    lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => {
    const context = useContext(LenisContext);
    return context.lenis;
};

interface LenisProviderProps {
    children: ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Проверяем предпочтения пользователя
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return; // Не применяем плавный скролл если пользователь предпочитает уменьшенную анимацию
        }

        // Создаем экземпляр Lenis с базовыми настройками
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Сохраняем в глобальной области для обратной совместимости
        (window as any).lenis = lenisRef.current;

        // Функция анимации
        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Обработка якорных ссылок
        const handleAnchorClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === 'A' && target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element && element instanceof HTMLElement) {
                    lenisRef.current?.scrollTo(element, { duration: 1.5 });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenisRef.current?.destroy();
            delete (window as any).lenis;
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return (
        <LenisContext.Provider value={{ lenis: lenisRef.current }}>
            {children}
        </LenisContext.Provider>
    );
}; 