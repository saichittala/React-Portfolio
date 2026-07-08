import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
  memo,
} from 'react';

import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

/* ========================================
 * Components Imports FIRST
 * ======================================== */

import Header from './components/header.jsx';
import PageTransition from './components/PageTransition.jsx';
import RecruiterModal from './components/RecruiterModal.jsx';
import {
  HomeSkeleton,
  WorksSkeleton,
  AboutSkeleton,
  ContactSkeleton,
  ProjectSkeleton
} from './components/Skeletons.jsx';

/* ========================================
 * Lazy Loaded Pages
 * ======================================== */

const Home = lazy(() => import('./home.js'));

const MyDeziner = lazy(() =>
  import('./pages/mydeziner.js')
);

const CustomFurnish = lazy(() =>
  import('./pages/customfurnish.js')
);

const About = lazy(() =>
  import('./pages/about.js')
);

const Contact = lazy(() =>
  import('./pages/contact.js')
);

const Uggh = lazy(() =>
  import('./pages/ug-gh.js')
);

const Opgh = lazy(() =>
  import('./pages/op-gh.js')
);

const Lmsgh = lazy(() =>
  import('./pages/lms-gh.js')
);

const Works = lazy(() =>
  import('./pages/works.js')
);

const Dd = lazy(() =>
  import('./pages/dd.js')
);

/* ========================================
 * Loading Screen
 * ======================================== */

const PageLoader = () => {
  return (
    <div className="page-loader-wrapper">
      <div className="page-loader"></div>
    </div>
  );
};

/* ========================================
 * Theme Route Handler
 * ======================================== */
function ThemeRouteHandler({ setActiveTheme }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const lightThemePaths = ['/customfurnish', '/mydeziner', '/lms-gh'];
    const isLight = lightThemePaths.some(p => path === p || path === `${p}/`);
    setActiveTheme(isLight ? 'light' : 'dark');
  }, [location, setActiveTheme]);

  return null;
}


/* ========================================
 * Main App
 * ======================================== */

function App() {

  /* ========================================
   * Detect System Theme
   * ======================================== */

  const getSystemTheme = () =>
    window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'light';

  /* ========================================
   * States
   * ======================================== */

  const [mode, setMode] = useState(
    localStorage.getItem('mode') || 'system'
  );

  const [theme, setTheme] = useState(
    mode === 'system'
      ? getSystemTheme()
      : mode
  );

  const [activeTheme, setActiveTheme] = useState('dark');

  const [recruiterMode, setRecruiterMode] =
    useState(false);

  const [showRecruiterModal, setShowRecruiterModal] =
    useState(false);

  const [animating, setAnimating] =
    useState(false);

  /* ========================================
   * Recruiter Modal
   * ======================================== */

  useEffect(() => {

    let timer;

    if (recruiterMode) {

      timer = setTimeout(() => {
        setShowRecruiterModal(true);
      }, 300);

    } else {

      setShowRecruiterModal(false);

    }

    return () => clearTimeout(timer);

  }, [recruiterMode]);

  /* ========================================
   * Theme Toggle
   * ======================================== */

  const toggleTheme = () => {

    setAnimating(true);

    const nextTheme =
      theme === 'light'
        ? 'dark'
        : 'light';

    setMode(nextTheme);
    setTheme(nextTheme);

    requestAnimationFrame(() => {

      setTimeout(() => {
        setAnimating(false);
      }, 500);

    });

  };

  /* ========================================
   * Apply Theme
   * ======================================== */

  // Route theme is now handled inside HashRouter context via ThemeRouteHandler

  useEffect(() => {

    document.body.classList.remove(
      'light-theme',
      'dark-theme'
    );

    document.body.classList.add(
      `${activeTheme}-theme`
    );

  }, [activeTheme]);

  /* ========================================
   * Save Theme
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

        setTheme(
          media.matches
            ? 'dark'
            : 'light'
        );

      }

    };

    media.addEventListener(
      'change',
      handleChange
    );

    return () => {

      media.removeEventListener(
        'change',
        handleChange
      );

    };

  }, [mode]);

  /* ========================================
   * Global Performance Optimization
   * ======================================== */

  useEffect(() => {

    document.body.style.webkitFontSmoothing =
      'antialiased';

    document.body.style.mozOsxFontSmoothing =
      'grayscale';

    document.documentElement.style.scrollBehavior =
      'smooth';

    document.body.style.overflowX = 'hidden';

  }, []);

  return (

    <HashRouter>
      <ThemeRouteHandler setActiveTheme={setActiveTheme} />

      {/* ========================================
         Global Styles
      ======================================== */}

      <style>
        {`

          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          body {
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }

          img,
          video {
            max-width: 100%;
            height: auto;
            display: block;

            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .fade-inn {
            will-change: transform, opacity;
            transform: translateZ(0);
          }

          .page-loader-wrapper {
            width: 100%;
            height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #fff;
          }

          .page-loader {

            width: 48px;
            height: 48px;

            border-radius: 50%;

            border: 3px solid #e6e6e6;
            border-top-color: #111;

            animation: spin 0.7s linear infinite;

          }

          @keyframes spin {

            to {
              transform: rotate(360deg);
            }

          }

          .theme-transition-overlay {

            position: fixed;
            inset: 0;

            z-index: 9999;

            pointer-events: none;

            backdrop-filter: blur(10px);

            animation: fadeOverlay 0.5s ease forwards;

          }

          @keyframes fadeOverlay {

            from {
              opacity: 1;
            }

            to {
              opacity: 0;
            }

          }

        `}
      </style>

      {/* ========================================
         Theme Transition
      ======================================== */}

      {animating && (
        <div className="theme-transition-overlay"></div>
      )}

      {/* ========================================
         Header
      ======================================== */}

      <Header
        toggleTheme={toggleTheme}
        theme={activeTheme}
        mode={mode}
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
      />

      {/* ========================================
         Recruiter Modal
      ======================================== */}

      <RecruiterModal
        show={showRecruiterModal}
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
      />

      {/* ========================================
         Routes
      ======================================== */}

      <Suspense fallback={<PageLoader />}>

        <PageTransition>

          {(location) => (

            <Routes location={location}>

              <Route
                path="/"
                element={
                  <Suspense fallback={<HomeSkeleton />}>
                    <Home
                      recruiterMode={
                        recruiterMode
                      }
                    />
                  </Suspense>
                }
              />

              <Route
                path="/mydeziner"
                element={
                  <Suspense fallback={<ProjectSkeleton />}>
                    <MyDeziner />
                  </Suspense>
                }
              />

              <Route
                path="/customfurnish"
                element={
                  <Suspense fallback={<ProjectSkeleton />}>
                    <CustomFurnish />
                  </Suspense>
                }
              />

              <Route
                path="/about"
                element={
                  <Suspense fallback={<AboutSkeleton />}>
                    <About />
                  </Suspense>
                }
              />

              <Route
                path="/works"
                element={
                  <Suspense fallback={<WorksSkeleton />}>
                    <Works />
                  </Suspense>
                }
              />

              <Route
                path="/contact"
                element={
                  <Suspense fallback={<ContactSkeleton />}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="/Uggh"
                element={
                  <Suspense fallback={<ProjectSkeleton />}>
                    <Uggh />
                  </Suspense>
                }
              />
              <Route
                path="/Opgh"
                element={
                  <Suspense fallback={<ProjectSkeleton />}>
                    <Opgh />
                  </Suspense>
                }
              />
              <Route
                path="/lms-gh"
                element={
                  <Suspense fallback={<ProjectSkeleton />}>
                    <Lmsgh />
                  </Suspense>
                }
              />
              <Route
                path="/dd"
                element={
                  <Suspense fallback={<ProjectSkeleton />}>
                    <Dd />
                  </Suspense>
                }
              />

            </Routes>

          )}

        </PageTransition>

      </Suspense>

    </HashRouter>
  );
}

export default memo(App);