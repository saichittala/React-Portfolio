import React, { useState, useEffect, useRef } from 'react';
// 1. Import Link and useLocation from react-router-dom
import { Link, useLocation } from 'react-router-dom';

// I'm assuming MagnetWrapper is a component you have.
// import MagnetWrapper from './MagneticCursor';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  // 2. Get the current location object
  const location = useLocation();
  const iconRef = useRef(null);


  const toggleMenu = () => {
    setMenuActive(!menuActive);
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
      <nav className="nav-bar">
        <div className="nav-main">
          {/* Menu Icon */}
          {/* <img
            className={`menu-icon ${menuActive ? 'clicked' : ''}`}
            src={menuActive ? 'img/close.svg' : 'img/menu.svg'}
            alt="menu-icon"
            onClick={toggleMenu}
          /> */}

          {/* Mobile Menu Container - Updated to use Link */}
          {/* <div className={`menu-container ${menuActive ? 'active' : ''}`} id="menu-container">
            <div className="mob-nav-btns">
              <Link to="/works" className="about-button btn-1 mob-btn-1">Work</Link>
              <Link to="/about" className="about-button btn-1 mob-btn-1 ">Info</Link>
            </div>
          </div> */}

          {/* Desktop Navigation - Updated to use Link and dynamic classes */}
          <div className="nav-btns">
            {/* The 'Home' link is active if the path is exactly "/" */}
            <Link to="/" className={`about-button header-text ${location.pathname === '/' ? 'header-text-active' : ''}`}>
              {/* <lord-icon
                ref={iconRef}
                src="https://cdn.lordicon.com/szzviyeh.json"
                trigger="hover"
                style={{ width: "28px", height: "28px" }}
                className="home-icon"
              ></lord-icon> */}
              <img src="img/home-nav.svg" alt="logo" />

              <span>Home</span>
            </Link>

            {/* The 'Works' link is active if the path is "/works" */}
            <Link to="/works" className={`about-button header-text ${location.pathname === '/works' ? 'header-text-active' : ''}`}>
              {/* <lord-icon
                ref={iconRef}
                src="https://cdn.lordicon.com/rrfthkgx.json"
                trigger="hover"
                style={{ width: "28px", height: "28px" }}
                className="home-icon"
                colors="primary:#737373,secondary:#08a88a"

              ></lord-icon> */}
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;