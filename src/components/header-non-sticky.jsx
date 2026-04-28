import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecruiterToggle from "./RecruiterToggle";


function HeaderNonSticky() {
  const [menuActive, setMenuActive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();


  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowHeader(true);
      }
      else if (Math.abs(currentScrollY - lastScrollY) < 5) {
        return;
      }
      else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    }
  };


  useEffect(() => {
    controlHeader(); // handle scroll position on first load

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);


  return (
    <div>
      <nav className={`nav-bar ${showHeader ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="nav-main">
          {/* Logo */}
          {/* <a href="." className='logo animation'>
            <img src="img/logo.svg" alt="logo" />
          </a> */}

          {/* Menu Icon */}
          <img
            className={`menu-icon ${menuActive ? 'clicked' : ''}`}
            src={menuActive ? 'img/close.svg' : 'img/menu.svg'}
            alt="menu-icon"
            onClick={toggleMenu}
          />

          {/* Mobile Menu */}
          <div className={`menu-container ${menuActive ? 'active' : ''}`}>
            <div className="mob-nav-btns">
              <a href="." className="about-button btn-1 mob-btn-1">Work</a>
              <a href="/#about" className="about-button btn-1 mob-btn-1">Info</a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-1 mob-btn-1">Resume</a>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="nav-btns">
            {/* The 'Home' link is active if the path is exactly "/" */}
            <Link to="/" className={`about-button header-text ${location.pathname === '/' ? 'header-text-active' : ''}`}>
              <img src="img/home-nav.svg" alt="logo" />
              <span>Home</span>
            </Link>

            {/* The 'Works' link is active if the path is "/works" */}
            <Link to="/works" className={`about-button header-text ${location.pathname === '/works' ? 'header-text-active' : ''}`}>
              <img src="img/works-nav.svg" alt="logo" />
              <span>Works</span>
            </Link>

            {/* The 'About' link is active if the path is "/about" */}
            <Link to="/about" className={`about-button header-text ${location.pathname === '/about' ? 'header-text-active' : ''}`}>
              <img src="img/profile-nav.svg" alt="logo" />
              <span>About</span>
            </Link>

            {/* The 'Contact' link is active if the path is "/contact" */}
            <Link to="/contact" className={`about-button header-text ${location.pathname === '/contact' ? 'header-text-active' : ''}`}>
              <img src="img/contact-nav.svg" alt="logo" />
              <span>Contact</span>
            </Link>
            {/* <RecruiterToggle
              recruiterMode={recruiterMode}
              setRecruiterMode={setRecruiterMode}
            /> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNonSticky;
