import React, { useRef, useState, useEffect } from 'react';

const LockPopup = ({ isVisible, onClose, onUnlock, password, isPasswordIncorrect }) => {
  const passwordInputRef = useRef(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isVisible && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
    if (isVisible) {
      setErrorMessage(''); 
    }
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

  return (
    <div id="passwordPopup" className="popup" style={{ display: 'flex', zIndex: 1001 }}>
      <div className="popup-content">
        <div className="popup-header">
          <img className="popup-lock-img" src="img/lock.svg" alt="lock" />
          <img
            className="close-button cursor-link"
            src="img/close-popup.svg"
            alt="close-popup"
            onClick={onClose}
          />
        </div>
        <div className="popup-body">
          <p>Enter password to continue</p>
          <input
            className="cursor-text"
            ref={passwordInputRef}
            type="password"
            value={enteredPassword}
            placeholder="Enter password"
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
          />
          {/* Display error message */}
          {isPasswordIncorrect && 
            <p className="error-message" style={{ color: 'red', marginBottom: '0px', fontsize: '12px' }}>
              {errorMessage}
              Incorrect password. Please try again.</p>
          }
        </div>
        <div className="unlock-projects cursor-link" onClick={handlePasswordSubmit}>
          <img src="img/unlock.svg" alt="unlock" />
          <a>Unlock</a>
        </div>
      </div>
    </div>
  );
};

export default LockPopup;
