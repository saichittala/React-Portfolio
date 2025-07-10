import React, { useState } from 'react';
import MagnetWrapper from './MagneticCursor';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-main">
          {/* Logo */}
          <a href="." className='logo animation'>
            <img src="img/logo.svg" alt="logo" />
          </a>

          {/* Menu Icon */}
          <img
            className={`menu-icon ${menuActive ? 'clicked' : ''}`}
            src={menuActive ? 'img/close.svg' : 'img/menu.svg'}
            alt="menu-icon"
            onClick={toggleMenu}
          />

          {/* Mobile Menu Container */}
          <div className={`menu-container ${menuActive ? 'active' : ''}`} id="menu-container">
            <div className="mob-nav-btns">
              <a href="." className="about-button btn-1 mob-btn-1">Work</a>
              <a href="/#about" className="about-button btn-1 mob-btn-1 ">Info</a>
              {/* <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-1 mob-btn-1">Resume</a> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-btns">
            <a href="." className="about-button header-text ">Work</a>
            <a href="/#about" className="about-button header-text ">Info</a>
            {/* <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" className="header-text ">Resume</a> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
