import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecruiterToggle from "./RecruiterToggle";

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

  // 3. The onClick handler for scrolling is no longer needed.
  // React Router's <Link> component will handle navigation.

  useEffect(() => {
    if (!scrolled) return;

    const navEl = document.querySelector('.nav-scrolled');
    if (!navEl) return;

    const updateFilter = () => {
      const rect = navEl.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const radius = 36; // border-radius of nav-scrolled is 36px
      const borderScale = 0.07;
      const border = Math.min(width, height) * (borderScale * 0.5);

      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
          <defs>
            <linearGradient id="red-grad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#000"/>
              <stop offset="100%" stop-color="red"/>
            </linearGradient>
            <linearGradient id="blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#000"/>
              <stop offset="100%" stop-color="blue"/>
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="${width}" height="${height}" fill="black"></rect>
          <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#red-grad)" />
          <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#blue-grad)" style="mix-blend-mode: difference" />
          <rect x="${border}" y="${border}" width="${width - border * 2}" height="${height - border * 2}" rx="${radius}" fill="hsl(0 0% 50% / 0.93)" style="filter:blur(11px)" />
        </svg>
      `;

      const encoded = encodeURIComponent(svgString.trim());
      const dataUri = `data:image/svg+xml,${encoded}`;

      const feImage = document.querySelector('#filter feImage');
      if (feImage) {
        feImage.setAttribute('href', dataUri);
      }
    };

    // Small delay to let CSS transitions stabilize layout dimensions
    const timeoutId = setTimeout(updateFilter, 150);

    window.addEventListener('resize', updateFilter);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateFilter);
    };
  }, [scrolled]);

  return (
    <div>
      <nav
        className={`
    nav-bar
    ${scrolled ? 'nav-scrolled' : ''}
    ${showNavbar ? 'nav-visible' : 'nav-hidden'}
  `}
      >

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
      <svg className="filter" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter id="filter" colorInterpolationFilters="sRGB">
            {/* the input displacement image */}
            <feImage
              x="0"
              y="0"
              width="100%"
              height="100%"
              result="map"
            />
            {/* the chromatic aberration for the people */}
            {/* RED channel with strongest displacement */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              xChannelSelector="R"
              yChannelSelector="B"
              result="dispRed"
              scale="-180"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />
            {/* GREEN channel (reference / least displaced) */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              xChannelSelector="R"
              yChannelSelector="B"
              result="dispGreen"
              scale="-170"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />
            {/* BLUE channel with medium displacement */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              xChannelSelector="R"
              yChannelSelector="B"
              result="dispBlue"
              scale="-160"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />
            {/* Blend channels back together */}
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            {/* output blend */}
            <feGaussianBlur in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Header;

