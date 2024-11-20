import React, { useState, useEffect, useRef } from 'react';
import useFadeIn from './components/useFadeIn';

const Card = ({ title, type, image, link, openInNewTab = true, locked, password }) => {
    useFadeIn(); // Call the custom hook to trigger fade-in effect

    const [isPopupVisible, setPopupVisible] = useState(false); // State to control popup visibility
    const passwordInputRef = useRef(null); // Ref for password input

    // Show the password popup when the card is locked
    const handleCardClick = () => {
        if (locked) {
            setPopupVisible(true); // Show the popup if the card is locked
        } else {
            window.open(link, openInNewTab ? "_blank" : "_self");
        }
    };

    // Handle password submission
    const handlePasswordSubmit = () => {
        const passwordInput = passwordInputRef.current.value;
        if (passwordInput === password) {
            window.open(link, openInNewTab ? "_blank" : "_self");
            setPopupVisible(false); // Close the popup after successful password entry
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    // Close the password popup
    const closePasswordPopup = () => {
        setPopupVisible(false); // Hide the popup
        passwordInputRef.current.value = ''; // Clear the password input
    };

    // Handle Enter key press to submit the password
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handlePasswordSubmit(); // Trigger password submission if Enter key is pressed
        }
    };

    // Focus on the password input when the popup is shown
    useEffect(() => {
        if (isPopupVisible && passwordInputRef.current) {
            passwordInputRef.current.focus(); // Focus the input field when popup is visible
        }
    }, [isPopupVisible]);

    return (
        <div>
            <div
                className="main-card fade-in"
                style={{ backgroundImage: `url(${image})` }}
                onClick={handleCardClick} // Trigger password popup if locked
            >
                <div className="sub-card">
                    <div className="card-content">
                        <div className="main-heading">{title}</div>
                        <div className="heading-type">{type}</div>
                    </div>
                </div>
            </div>

            {/* Password popup */}
            {isPopupVisible && (
                <div id="passwordPopup" className="popup" style={{ display: 'flex', zIndex: 1001 }}>
                    <div className="popup-content">
                        <div className="popup-main">
                            <div className="popup-header">
                                <img src="img/lock.svg" alt="lock" />
                                <img
                                    className="close-button"
                                    src="img/close-popup.svg"
                                    id="closePopup"
                                    alt="close-popup"
                                    onClick={closePasswordPopup}
                                />
                            </div>
                        </div>
                        <div>
                            <p>Enter password to continue</p>
                            <input
                                ref={passwordInputRef} // Attach the ref to the input element
                                type="password"
                                id="popupPassword"
                                placeholder="Enter password"
                                onKeyDown={handleKeyPress} // Trigger submit on Enter key press
                            />
                        </div>
                        <div className="unlock-projects" id="submitPassword" onClick={handlePasswordSubmit}>
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
