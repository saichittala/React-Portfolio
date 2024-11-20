import React from 'react'


function header() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-main">
          <a href="/"><img src="./img/logo.svg" alt="logo" /></a>
          <img className="menu-icon" src="../img/menu.svg" alt="menu-icon" id="menu-icon" />
          <div className="menu-container" id="menu-container">
            <div className="mob-nav-btns">
              <a href="/about-section" className="about-button btn-1 mob-btn-1">About</a>
              <a href="../Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-1 mob-btn-1">Resume</a>
            </div>
          </div>
          <div className="nav-btns">
            <a href="/" className="about-button header-text">About</a>
            <a href="../Resume.pdf" target="_blank" rel="noopener noreferrer" className="header-text">Resume</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default header
