import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Eye, EyeOff } from 'lucide-react';

const LockPopup = ({ isVisible, onClose, onUnlock, password, isPasswordIncorrect }) => {
  const passwordInputRef = useRef(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isVisible && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
    if (isVisible) {
      setErrorMessage('');
    }
  }, [isVisible]);

  // Prevent background scrolling when popup is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [isVisible]);

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    onUnlock(enteredPassword.trim())
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  if (!isVisible) return null;

  const popupElement = (
    <div id="passwordPopup" className="popup lock-popup-override">
      <div className="popup-content lock-popup-content">
        <div className="popup-header">
          <div className='df-g8 popup-lock-img '>
            <img className="icon-theme" src="img/lock-1.svg" alt="lock" />
          </div>
          <img
            className="close-button cursor-link"
            src="img/close-popup.svg"
            alt="close-popup"
            onClick={onClose}
          />
        </div>
        <div className="popup-body">
          <p className="popup-label">Enter password to continue</p>
          <div className="popup-input-container" style={{ position: 'relative', width: '100%' }}>
            <input
              className="cursor-text"
              ref={passwordInputRef}
              type={showPassword ? "text" : "password"}
              value={enteredPassword}
              placeholder="Enter password"
              onChange={handlePasswordChange}
              onKeyDown={handleKeyPress}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {/* Display error message */}
          {isPasswordIncorrect &&
            <p className="error-message error-message-style">
              {errorMessage}
              Incorrect password. Please try again.</p>
          }

          
        </div>
        <div>
        <div className="unlock-projects cursor-link" onClick={handlePasswordSubmit}>
          {/* <img src="img/unlock.svg" alt="unlock" /> */}
          <a>Unlock</a>
        </div>
        <p className="popup-info-text df-g8 gap-8">
            <img src="img/info.svg" alt="lock" />
            <div>
              {"Protected. Available upon "}
              <a
                href="mailto:sai.chittala@gmail.com"
                className="popup-contact-link"
              >
                request</a>
            </div>

          </p>

        </div>

        
      </div>
    </div>
  );

  return createPortal(popupElement, document.body);
};

export default LockPopup;
