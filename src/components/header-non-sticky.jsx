import React, { useState, useEffect } from 'react';

function HeaderNonSticky() {
  const [menuActive, setMenuActive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  

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
            <a href="." className="about-button header-text">Work</a>
            <a href="/#about" className="about-button header-text">Info</a>
            <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" className="header-text">Resume</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNonSticky;
