import React, { useState, useEffect } from 'react';
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
    // Optional: Custom element position reference
    elementPosition = 'middle' // 'top' | 'middle' | 'bottom'
}) => {
    const [animationPhase, setAnimationPhase] = useState('hidden');
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 674);

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

    return (
        <AnimatePresence>
            {isMounted && (
                <motion.div
                    className={`bubble-button ${className}`}
                    initial={false}
                    animate={{
                        width:
                            animationPhase === 'small' ? size.small :
                                animationPhase === 'expanding' || animationPhase === 'visible' ? size.large.width :
                                    animationPhase === 'hiding' ? size.small : size.small,
                        height:
                            animationPhase === 'small' ? size.small :
                                animationPhase === 'expanding' || animationPhase === 'visible' ? size.large.height :
                                    animationPhase === 'hiding' ? size.small : size.small,
                        borderRadius:
                            animationPhase === 'small' || animationPhase === 'hiding' ? '50%' : '24px',
                        opacity:
                            animationPhase === 'hidden' ? 0 : 1
                    }}
                    transition={{
                        duration: 0.5,
                        ease: animationPhase === 'expanding' ? [0.175, 0.885, 0.32, 1.275] :
                            animationPhase === 'hiding' ? 'easeIn' : 'easeOut'
                    }}
                    exit={{
                        width: size.small,
                        height: size.small,
                        borderRadius: '50%',
                        opacity: 0,
                        transition: {
                            duration: 0.3,
                            ease: 'easeIn'
                        }
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
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BubbleButton;