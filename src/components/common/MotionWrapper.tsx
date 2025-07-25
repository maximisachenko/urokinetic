import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
    delay?: number;
    duration?: number;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
    children,
    className = '',
    variant = 'fadeInUp',
    delay = 0,
    duration = 0.6
}) => {
    // Определяем варианты анимаций
    const variants = {
        fadeInUp: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        },
        fadeInLeft: {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
        },
        fadeInRight: {
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94] // Плавная кривая как в лучших сайтах
            }}
            variants={variants[variant]}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper; 