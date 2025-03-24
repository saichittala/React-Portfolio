import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { gsap } from 'gsap';

const SmoothScroll = ({
    adminBarSelector = '#wpadminbar',
    absoluteElementsSelector = '[data-arts-scroll-absolute]',
    fixedElementsSelector = '[data-arts-scroll-fixed]',
    damping = 0.05, // 🔥 Adjust smoothness here (lower = smoother)
    thumbMinSize = 20, // 🔥 Adjust scrollbar thumb size
    continuousScrolling = true, // 🔥 Enable continuous scrolling
    children
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (
            typeof Scrollbar === 'undefined' ||
            !window.theme?.smoothScroll?.enabled ||
            !containerRef.current ||
            typeof window.elementor !== 'undefined' ||
            (window.Modernizr?.touchevents &&
                !containerRef.current.classList.contains('js-smooth-scroll_enable-mobile')) ||
            window.Modernizr?.touchevents
        ) {
            return;
        }

        // Destroy existing scrollbar
        if (window.SB) {
            window.SB.destroy();
        }

        containerRef.current.classList.add('smooth-scroll');

        // Initialize smooth-scrollbar with custom smoothness settings
        window.SB = Scrollbar.init(containerRef.current, {
            damping, // 🔥 Smoothness control
            thumbMinSize, // 🔥 Scrollbar thumb size
            continuousScrolling, // 🔥 Continuous scrolling
            alwaysShowTracks: false
        });

        // Emit native scroll events
        const scrollEvt = new CustomEvent('scroll');
        window.SB.addListener((e) => {
            window.pageYOffset = e.offset.y;
            window.pageXOffset = e.offset.x;
            window.dispatchEvent(scrollEvt);
        });

        // Handle WP Admin Bar
        const adminBar = document.querySelector(adminBarSelector);
        if (adminBar) {
            document.documentElement.style.overflow = 'hidden';
        }

        // Absolute Elements Handling
        const absoluteElements = document.querySelectorAll(absoluteElementsSelector);
        if (absoluteElements.length) {
            gsap.to(absoluteElements, { y: 0, duration: 0.3 });
            absoluteElements.forEach((el) => {
                window.SB.addListener((scrollbar) => {
                    gsap.set(el, { y: -scrollbar.offset.y + (adminBar ? adminBar.offsetHeight : 0) });
                });
            });
        }

        // Fixed Elements Handling
        const fixedElements = document.querySelectorAll(fixedElementsSelector);
        if (fixedElements.length) {
            gsap.to(fixedElements, { y: 0, duration: 0.3 });
            fixedElements.forEach((el) => {
                window.SB.addListener((scrollbar) => {
                    gsap.set(el, { y: scrollbar.offset.y + (adminBar ? adminBar.offsetHeight : 0) });
                });
            });
        }

        // Anchor Scrolling Handler
        const handleAnchorsScrolling = () => {
            const anchorSelectors = [
                '.page-wrapper__content a[href*="#"]:not([href="#"])',
                '#page-footer a[href*="#"]:not([href="#"])'
            ];
            const anchors = containerRef.current.querySelectorAll(anchorSelectors.join(', '));

            anchors.forEach((anchor) => {
                const url = anchor.getAttribute('href');
                const hashIndex = url.indexOf('#');
                const filteredUrl = url.substring(hashIndex);

                if (filteredUrl.length) {
                    const targetEl = document.querySelector(filteredUrl);
                    if (targetEl) {
                        anchor.addEventListener('click', (e) => {
                            e.preventDefault();
                            if (window.SB && typeof window.SB.scrollTo === 'function') {
                                window.SB.scrollTo(0, targetEl.offsetTop, 800);
                            } else {
                                window.scrollTo({ top: targetEl.offsetTop, behavior: 'smooth' });
                            }
                        });
                    }
                }
            });
        };

        try {
            handleAnchorsScrolling();
        } catch (error) {
            console.error(error);
        }

        // Cleanup
        return () => {
            if (window.SB) {
                window.SB.destroy();
            }
        };
    }, [adminBarSelector, absoluteElementsSelector, fixedElementsSelector, damping, thumbMinSize, continuousScrolling]);

    return <div className="js-smooth-scroll" ref={containerRef}>{children}</div>;
};

export default SmoothScroll;