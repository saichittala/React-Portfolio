import React, { useState, useEffect, useRef } from 'react';
import useFadeIn from './components/useFadeIn';

const Card = ({ title, type, image, link, openInNewTab = true, locked, password }) => {
  useFadeIn();

  const [isPopupVisible, setPopupVisible] = useState(false);
  const passwordInputRef = useRef(null);

  const handleCardClick = () => {
    if (locked) {
      setPopupVisible(true);
    } else {
      window.open(link, openInNewTab ? "_blank" : "_self");
    }
  };

  const handlePasswordSubmit = () => {
    const enteredPassword = passwordInputRef.current.value;
    if (enteredPassword === password) {
      window.open(link, openInNewTab ? "_blank" : "_self");
      setPopupVisible(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const closePasswordPopup = () => {
    setPopupVisible(false);
    passwordInputRef.current.value = '';
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  useEffect(() => {
    if (isPopupVisible && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, [isPopupVisible]);

  return (
    <div>
      <a href={link} target={openInNewTab ? "_blank" : "_self"} rel="noopener noreferrer">
        <div
          className="main-card fade-in"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="sub-card">
            <div className="card-content">
              <div className="main-heading">{title}</div>
              <div className="heading-type">{type}</div>
            </div>
          </div>
        </div>
      </a>

      {isPopupVisible && (
        <div id="passwordPopup" className="popup" style={{ display: 'flex', zIndex: 1001 }}>
          <div className="popup-content">
            <div className="popup-main">
              <div className="popup-header">
                <img src="img/lock.svg" alt="lock" />
                <img
                  className="close-button"
                  src="img/close-popup.svg"
                  alt="close-popup"
                  onClick={closePasswordPopup}
                />
              </div>
            </div>
            <div>
              <p>Enter password to continue</p>
              <input
                ref={passwordInputRef}
                type="password"
                placeholder="Enter password"
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className="unlock-projects" onClick={handlePasswordSubmit}>
              <img src="img/unlock.svg" alt="unlock" />
              <a>Unlock</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
