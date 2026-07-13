import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecruiterToggle from "./RecruiterToggle";
import GlassSurface from './GlassSurface';

function Header({ toggleTheme, theme, recruiterMode, setRecruiterMode }) {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const iconRef = useRef(null);



  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleMobileNavClick = () => {
    setMenuActive(false);
  };


  useEffect(() => {
    if (iconRef.current) {
      const isActive = location.pathname === '/folder';
      iconRef.current.setAttribute(
        'colors',
        isActive
          ? 'primary:#000000,secondary:#000000'
          : 'primary:#737373,secondary:#737373'
      );
    }
  }, [location.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background blur/shadow after slight scroll
      setScrolled(currentScrollY > 20);

      // Prevent navbar flickering near top
      if (currentScrollY < 40) {
        setShowNavbar(true);
      }
      // Scrolling DOWN
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Scrolling UP
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 674);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <nav
        className={`
    nav-bar
    ${scrolled ? 'nav-scrolled' : ''}
    ${showNavbar ? 'nav-visible' : 'nav-hidden'}
  `}
      >
        <GlassSurface
          width="100%"
          height="100%"
          borderRadius={isMobile ? 0 : 36}
          brightness={theme === 'light' ? 100 : 50}
          opacity={theme === 'light' ? 0.6 : 0.93}
          blur={11}
          displace={0}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          yChannel="B"
          mixBlendMode={theme === 'light' ? 'normal' : 'difference'}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          contentStyle={{ padding: 0 }}
        />

        <div className={`menu-container ${menuActive ? 'active' : ''}`} id="menu-container">
          <div className="mob-nav-btns">
            <Link
              to="/works"
              className="about-button btn-1 mob-btn-1 border-none"
              onClick={handleMobileNavClick}
            >
              Work
            </Link>

            <Link
              to="/about"
              className="about-button btn-1 mob-btn-1 border-none"
              onClick={handleMobileNavClick}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="about-button btn-1 mob-btn-1 border-none"
              onClick={handleMobileNavClick}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className='df-g8 jc-sb'>
          <a href='/home' className='df-g8 alc logo'>
            <img src="img/logo-main.svg" alt="" className='logo' />
          </a>
          <div className="nav-main">
            <RecruiterToggle className={`about-button display-none menu-nav header-text-1 recruiter-toggle-mobile`}
              recruiterMode={recruiterMode}
              setRecruiterMode={setRecruiterMode}
            />
            {/* Menu Icon */}
            <img
              className={`menu-icon ${menuActive ? 'clicked' : ''}`}
              src={menuActive ? 'img/close.svg' : 'img/menu.svg'}
              alt="menu-icon"
              onClick={toggleMenu}
            />


            {/* Mobile Menu Container - Updated to use Link */}



            {/* Desktop Navigation - Updated to use Link and dynamic classes */}
            <div className="nav-btns">
              {/* The 'Home' link is active if the path is exactly "/" */}
              {/* <Link to="/" className={`about-button menu-nav header-text-1 ${location.pathname === '/' ? 'header-text-active' : ''}`}>
                <img src="img/home-nav.svg" alt="logo" />

                <span>Home</span>
              </Link> */}
              <div className="df-g8 aic">
                {/* Recruiter Mode */}
                {/* <RecruiterToggle className={`about-button display-none menu-nav header-text-1 recruiter-toggle-header`}
                  recruiterMode={recruiterMode}
                  setRecruiterMode={setRecruiterMode}
                /> */}
              </div>

              {/* The 'Works' link is active if the path is "/works" */}
              <Link to="/works" className={`about-button menu-nav header-text-1 ${location.pathname === '/works' ? 'header-text-active' : ''}`}>
                <img src="img/works-nav.svg" alt="logo" />
                <span>Works</span>
              </Link>

              {/* The 'About' link is active if the path is "/about" */}
              <Link to="/about" className={`about-button menu-nav header-text-1 ${location.pathname === '/about' ? 'header-text-active' : ''}`}>
                <img src="img/profile-nav.svg" alt="logo" />
                <span>About</span>
              </Link>

              {/* The 'Contact' link is active if the path is "/contact" */}
              <Link to="/contact" className={`about-button menu-nav header-text-1 ${location.pathname === '/contact' ? 'header-text-active' : ''}`}>
                <img src="img/contact-nav.svg" alt="logo" />
                <span>Contact</span>
              </Link>
              {/* <div className='df-g8 aic'>
                <div className="divider"></div>
              </div> */}
              {/* <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
              >
                {theme === "light" ?
                  <div className='header-text padding-4'>
                    <img src="img/dark-nav.svg" alt="Light Mode" />
                  </div>
                  : <div className='header-text padding-4'>
                    <img src="img/light-nav.svg" alt="Dark Mode" />
                  </div>}
              </button> */}
            </div>

          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;

