import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
    delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = false,
        delay = 0
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => setIsVisible(true), delay);
                    } else {
                        setIsVisible(true);
                    }

                    if (triggerOnce) {
                        observer.unobserve(entry.target);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce, delay]);

    return { elementRef, isVisible };
};

// Хук для параллакс эффекта
export const useParallax = (speed: number = 0.5) => {
    const [offset, setOffset] = useState(0);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const scrolled = window.pageYOffset;
                const parallax = scrolled * speed;
                setOffset(parallax);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { elementRef, offset };
};

// Хук для создания волнового эффекта загрузки элементов
export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Анимируем элементы с задержкой
                    for (let i = 0; i < itemCount; i++) {
                        setTimeout(() => {
                            setVisibleItems(prev => {
                                const newState = [...prev];
                                newState[i] = true;
                                return newState;
                            });
                        }, i * baseDelay);
                    }
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentContainer = containerRef.current;
        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
            observer.disconnect();
        };
    }, [itemCount, baseDelay]);

    return { containerRef, visibleItems };
}; 