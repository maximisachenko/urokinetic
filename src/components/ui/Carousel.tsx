import React, { useState, useEffect } from 'react';

interface CarouselProps {
    children: React.ReactNode[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showDots?: boolean;
    showArrows?: boolean;
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    children,
    autoPlay = true,
    autoPlayInterval = 5000,
    showDots = true,
    showArrows = true,
    className = ''
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    // Auto play functionality
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === children.length - 1 ? 0 : prevIndex + 1
            );
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isPlaying, currentIndex, children.length, autoPlayInterval]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? children.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === children.length - 1 ? 0 : currentIndex + 1);
    };

    const handleMouseEnter = () => {
        setIsPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsPlaying(autoPlay);
    };

    return (
        <div
            className={`relative w-full ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Slides Container */}
            <div className="relative overflow-hidden rounded-2xl">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children.map((child, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            {showArrows && children.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-global-4 hover:bg-global-2 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-white/20"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-global-4 hover:bg-global-2 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-white/20"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {showDots && children.length > 1 && (
                <div className="flex justify-center space-x-3 mt-10">
                    {children.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-global-4 w-10 shadow-lg'
                                : 'bg-gray-300 hover:bg-gray-400 w-3 hover:w-6'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel; 