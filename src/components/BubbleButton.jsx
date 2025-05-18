import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BubbleButton = ({
    text = "Let's Connect",
    activationRef,
    showDelay = 500,
    hideDelay = 500,
    size = { small: 48, large: { width: 140, height: 48 } },
    className = '',

    // New props for custom activation points
    activateAt = 0.67,    // 5% of viewport from top (0-1)
    deactivateAt = 0.98,  // 95% of viewport from top (0-1)
    children, // <-- Accept children

    // Optional: Custom element position reference
    elementPosition = 'middle' // 'top' | 'middle' | 'bottom'

}) => {
    const [animationPhase, setAnimationPhase] = useState('hidden');
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 674);
    const textRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(size.large.width);

    useEffect(() => {
        if (!activationRef?.current) return;

        const handleScroll = () => {
            const rect = activationRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const activationStart = viewportHeight * (isMobile ? 0.5 : activateAt);
            const activationEnd = viewportHeight * (isMobile ? 1.05 : deactivateAt);

            const isActive = rect.top <= activationStart && rect.bottom >= activationEnd;

            setAnimationPhase(prev => {
                if (isActive && prev === 'hidden') {
                    setIsMounted(true);
                    return 'small';
                }
                if (isActive && prev === 'small') return 'expanding';
                if (isActive && prev === 'expanding') return 'visible';
                if (!isActive && prev === 'visible') return 'hiding';
                if (!isActive && prev === 'hiding') return 'small';
                return prev;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activationRef, activateAt, deactivateAt, elementPosition]);

    useEffect(() => {
        if (animationPhase === 'small') {
            const timer = setTimeout(() => {
                setAnimationPhase('hidden');
                setIsMounted(false);
            }, hideDelay);

            return () => clearTimeout(timer);
        }
    }, [animationPhase, hideDelay]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (textRef.current && (animationPhase === 'visible' || animationPhase === 'expanding')) {
            const width = textRef.current.offsetWidth + 40; // icon + padding + text
            setContentWidth(width);
        }
    }, [text, animationPhase]);

    return (
        <AnimatePresence>
            {isMounted && (
                <motion.div
                    className={`bubble-button ${className}`}
                    initial={false}
                    animate={{
                        width:
                            animationPhase === 'small' || animationPhase === 'hiding'
                                ? size.small
                                : animationPhase === 'expanding' || animationPhase === 'visible'
                                    ? contentWidth
                                    : size.small,
                        height:
                            animationPhase === 'small' || animationPhase === 'hiding'
                                ? size.small
                                : size.large.height,
                        borderRadius: '99px',
                        opacity: animationPhase === 'hidden' ? 0 : 1
                    }}
                    exit={{
                        width: 0,
                        height: 0,
                        opacity: 0,
                        borderRadius: '50%',
                        transition: {
                            duration: 0.4,
                            ease: [0.455, 0.030, 0.515, 0.955]
                        }
                    }}
                    transition={{
                        duration: 0.5,
                        ease:
                            animationPhase === 'expanding'
                                ? [0.175, 0.885, 0.32, 1.275]
                                : animationPhase === 'hiding'
                                    ? 'easeIn'
                                    : 'easeOut'
                    }}
                >
                    <motion.span
                        className="bubble-button__text"
                        initial={false}
                        animate={{
                            opacity: animationPhase === 'visible' ? 1 : 0,
                            scale: animationPhase === 'visible' ? 1 : 0.8
                        }}
                        transition={{
                            opacity: {
                                duration: 0.3,
                                delay: animationPhase === 'expanding' ? showDelay / 1000 : 0
                            },
                            scale: {
                                duration: 0.45,
                                ease: 'backOut'
                            }
                        }}
                    >
                        {text}
                    </motion.span>
                    {/* Render custom children like icons, divs, etc. */}
                    {children && (
                        <motion.div
                            className="bubble-button__icon"
                            initial={false}
                            animate={{
                                opacity: animationPhase === 'visible' ? 1 : 0,
                                scale: animationPhase === 'visible' ? 1 : 0.8
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.3,
                                    delay: animationPhase === 'expanding' ? showDelay / 1000 : 0
                                },
                                scale: {
                                    duration: 0.45,
                                    ease: 'backOut'
                                }
                            }}
                        >
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BubbleButton;