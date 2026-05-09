import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// components
import Header from './components/header.jsx';
import Home from './home.js';
import MyDeziner from './pages/mydeziner.js';
import CustomFurnish from './pages/customfurnish.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Works from './pages/works.js';
import PageTransition from './components/PageTransition.jsx';
import RecruiterModal from './components/RecruiterModal.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {

  /* ========================================
   * Premium Smooth Scroll
   * ======================================== */
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.075,

      smoothWheel: true,
      smoothTouch: true,

      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,

      infinite: false,
      normalizeWheel: true,
    });

    function raf(time) {
      lenis.raf(time);

      ScrollTrigger.update();

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true })
          : lenis.scroll;
      },

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };

  }, []);

  /* ========================================
   * Theme System
   * ======================================== */
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  const [mode, setMode] = useState(
    localStorage.getItem('mode') || 'system'
  );

  const [theme, setTheme] = useState(
    mode === 'system' ? getSystemTheme() : mode
  );

  const [recruiterMode, setRecruiterMode] = useState(false);

  const [showRecruiterModal, setShowRecruiterModal] = useState(false);

  const [animating, setAnimating] = useState(false);

  /* ========================================
   * Recruiter Modal
   * ======================================== */
  useEffect(() => {

    if (recruiterMode) {

      const timer = setTimeout(() => {
        setShowRecruiterModal(true);
      }, 300);

      return () => clearTimeout(timer);

    } else {
      setShowRecruiterModal(false);
    }

  }, [recruiterMode]);

  /* ========================================
   * Theme Toggle
   * ======================================== */
  const toggleTheme = () => {

    setAnimating(true);

    const next = theme === 'light' ? 'dark' : 'light';

    setMode(next);
    setTheme(next);

    setTimeout(() => {
      setAnimating(false);
    }, 700);

  };

  /* ========================================
   * Apply Theme
   * ======================================== */
  useEffect(() => {

    document.body.classList.remove(
      'light-theme',
      'dark-theme'
    );

    document.body.classList.add(`${theme}-theme`);

  }, [theme]);

  /* ========================================
   * Save Mode
   * ======================================== */
  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  /* ========================================
   * System Theme Listener
   * ======================================== */
  useEffect(() => {

    const media = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const handleChange = () => {

      if (mode === 'system') {
        setTheme(media.matches ? 'dark' : 'light');
      }

    };

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };

  }, [mode]);

  return (
    <HashRouter>

      {animating && (
        <div className="theme-transition-overlay"></div>
      )}

      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        mode={mode}
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
      />

      <RecruiterModal
        show={showRecruiterModal}
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
      />

      <PageTransition
        animateRoutes={[
          '/mydeziner',
          '/customfurnish',
          '/works',
          '/about',
        ]}
      >
        {(location) => (
          <Routes location={location}>

            <Route
              path="/"
              element={
                <Home recruiterMode={recruiterMode} />
              }
            />

            <Route
              path="/mydeziner"
              element={<MyDeziner />}
            />

            <Route
              path="/customfurnish"
              element={<CustomFurnish />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/works"
              element={<Works />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>
        )}
      </PageTransition>

    </HashRouter>
  );
}

export default App;