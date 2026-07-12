import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const BubbleButton = ({
    text = "Let's Connect",
    activationRef,
    showDelay = 500,
    hideDelay = 500,
    size = { small: 48, large: { width: 140, height: 48 } },
    className = '',
    onClick, // Accept onClick prop
    isStatic = false, // Accept isStatic prop

    // New props for custom activation points
    activateAt = 0.67,    // 5% of viewport from top (0-1)
    deactivateAt = 0.98,  // 95% of viewport from top (0-1)
    children, // <-- Accept children

    // Optional: Custom element position reference
    elementPosition = 'middle' // 'top' | 'middle' | 'bottom'

}) => {
    const [animationPhase, setAnimationPhase] = useState(isStatic ? 'visible' : 'hidden');
    const [isMounted, setIsMounted] = useState(isStatic);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 674);
    const textRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(size.large.width);

    useEffect(() => {
        if (isStatic) return;
        if (!activationRef?.current) return;

        const handleScroll = () => {
            if (!activationRef.current) return;
            const rect = activationRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
 
            const activationStart = viewportHeight * activateAt;
            const activationEnd = viewportHeight * deactivateAt;
 
            const isActive = rect.top <= activationStart && rect.bottom >= activationEnd;
 
            if (isActive) {
                setIsMounted(true);
                setAnimationPhase('visible');
            } else {
                setAnimationPhase('hiding');
            }
        };
 
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
 
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activationRef, activationRef?.current, activateAt, deactivateAt, elementPosition]);
 
    useEffect(() => {
        if (animationPhase === 'hiding') {
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

    const buttonElement = (
        <AnimatePresence>
            {isMounted && (
                <motion.div
                    className={`bubble-button ${className}`}
                    onClick={onClick}
                    initial={{
                        width: size.small,
                        height: size.small,
                        opacity: 0
                    }}
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
                        ref={textRef}
                        initial={false}
                        animate={{
                            opacity: animationPhase === 'visible' ? 1 : 0,
                            scale: animationPhase === 'visible' ? 1 : 0.6
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
                                scale: animationPhase === 'visible' ? 1 : 1
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

    if (isStatic) {
        return buttonElement;
    }

    if (typeof document !== 'undefined') {
        return createPortal(buttonElement, document.body);
    }

    return buttonElement;
};

export default React.memo(BubbleButton);