import React, { useEffect } from 'react';

const ScrollAnimations: React.FC = () => {
    useEffect(() => {
        // Создаем Intersection Observer для отслеживания видимости элементов
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Добавляем класс 'visible' когда элемент становится видимым
                        entry.target.classList.add('visible');
                    } else {
                        // Убираем класс 'visible' когда элемент выходит из зоны видимости
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                // Настройки наблюдателя
                threshold: 0.1, // Элемент считается видимым когда видно 10% от него
                rootMargin: '0px 0px -100px 0px', // Более консервативный отступ
            }
        );

        // Функция для инициализации наблюдения за элементами
        const initScrollAnimations = () => {
            // Селекторы только для базовых анимаций
            const animatedElements = document.querySelectorAll([
                '.animate-fade-in-up',
                '.animate-fade-in-left',
                '.animate-fade-in-right',
                '.animate-fade-in',
                '.animate-scale-in',
                '.fade-in'
            ].join(', '));

            // Начинаем наблюдение за каждым элементом
            animatedElements.forEach((element) => {
                observer.observe(element);
            });
        };

        // Небольшая задержка для обеспечения полной загрузки DOM
        const timeoutId = setTimeout(initScrollAnimations, 100);

        // Cleanup функция
        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);

    // Этот компонент не рендерит ничего визуального
    return null;
};

export default ScrollAnimations; 