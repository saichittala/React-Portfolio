import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LockPopup from './lockpopup';

function ProjectNavigation({ figmaLink, linkLabel = "here is the figma link", previousLink, nextLink }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

  const handleLinkClick = (e) => {
    const isFigma = figmaLink && figmaLink.includes('figma.com');
    if (isFigma) {
      e.preventDefault();
      setPopupVisible(true);
      setIsPasswordIncorrect(false);
    }
  };

  const handleUnlock = (enteredPassword) => {
    if (enteredPassword === "figma@123") {
      window.open(figmaLink, "_blank");
      setPopupVisible(false);
    } else {
      setIsPasswordIncorrect(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
    setIsPasswordIncorrect(false);
  };

  return (
    <div className="bg-full bg-white margin-unset">
      <div className="bg-main padding-unset">
        <div className="project-details">
          <div className="thankyou-footer-container fade-inn">
            
            {/* Left side: Thank you & link */}
            <div className="thankyou-left">
              <span className="thankyou-title">Thank you for viewing.</span>
              <a 
                href={figmaLink} 
                onClick={handleLinkClick}
                className="thankyou-figma-link"
              >
                {linkLabel}
              </a>
            </div>

            {/* Right side: Navigation links */}
            <div className="thankyou-right-nav">
              <div className="thankyou-nav-list">
                {previousLink ? (
                  <Link to={previousLink} className="thankyou-nav-item">
                    <span>Previous Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </Link>
                ) : (
                  <div className="thankyou-nav-item thankyou-nav-item-disabled">
                    <span>Previous Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </div>
                )}

                {nextLink ? (
                  <Link to={nextLink} className="thankyou-nav-item">
                    <span>Next Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </Link>
                ) : (
                  <div className="thankyou-nav-item thankyou-nav-item-disabled">
                    <span>Next Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </div>
                )}

                <Link to="/contact" className="thankyou-nav-item">
                  <span>Contact</span>
                  <span className="thankyou-nav-arrow">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <LockPopup
        isVisible={isPopupVisible}
        onClose={closePopup}
        onUnlock={handleUnlock}
        password="figma@123"
        isPasswordIncorrect={isPasswordIncorrect}
      />
    </div>
  );
}

export default ProjectNavigation;

