import { useEffect } from 'react';

const ParallaxHero: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallaxElement = document.querySelector('.hero-parallax') as HTMLElement;

            if (parallaxElement) {
                const speed = 0.5; // Скорость parallax (чем меньше, тем медленнее движется)
                const yPos = -(scrolled * speed);

                // Применяем transform для parallax эффекта
                parallaxElement.style.transform = `translateY(${yPos}px)`;

                // Постепенное исчезновение при скролле
                const opacity = Math.max(0, 1 - scrolled / window.innerHeight);
                parallaxElement.style.opacity = opacity.toString();
            }
        };

        // Добавляем обработчик скролла
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Вызываем один раз для инициализации
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null;
};

export default ParallaxHero; 