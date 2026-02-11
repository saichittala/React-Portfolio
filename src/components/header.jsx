import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ toggleTheme, theme }) {
  const [menuActive, setMenuActive] = useState(false);
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

  // 3. The onClick handler for scrolling is no longer needed.
  // React Router's <Link> component will handle navigation.

  return (
    <div>
      <nav className="nav-bar width-nav">

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