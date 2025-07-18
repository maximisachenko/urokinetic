import React, { useState } from 'react';

interface RatingBarProps {
  rating?: number;
  maxRating?: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const RatingBar: React.FC<RatingBarProps> = ({
  rating = 0,
  maxRating = 5,
  onRatingChange,
  readonly = false,
  size = 'medium',
  className = ''
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const handleClick = (value: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleMouseEnter = (value: number) => {
    if (!readonly) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div className={`flex gap-1 ${className}`} role="radiogroup" aria-label="Rating">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoverRating || rating);
        
        return (
          <button
            key={index}
            type="button"
            className={`${sizes[size]} ${readonly ? 'cursor-default' : 'cursor-pointer'} transition-colors duration-200`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
            role="radio"
            aria-checked={starValue <= rating}
            aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
          >
            <svg
              className={`w-full h-full ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default RatingBar;