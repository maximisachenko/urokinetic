import React, { useEffect, useState } from 'react';

const ScrollIndicator: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(scrollPercent);
        };

        // Обновляем прогресс при скролле
        window.addEventListener('scroll', updateScrollProgress, { passive: true });

        // Инициализируем прогресс
        updateScrollProgress();

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return (
        <div
            className="scroll-indicator"
            style={{
                transform: `scaleX(${scrollProgress / 100})`
            }}
        />
    );
};

export default ScrollIndicator; 