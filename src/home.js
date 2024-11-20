import React, { useState, useEffect, useRef } from 'react';
import Card from './card';
import Header from './components/header';
import Footer from './components/footer';
import useFadeIn from './components/useFadeIn';
import useScrollEffect from './components/useScrollEffect';

const Home = () => {
  useFadeIn(); 
  useScrollEffect(); 


  const [isPopupVisible, setPopupVisible] = useState(false); // State to control popup visibility
  const passwordInputRef = useRef(null); // Ref for password input

  const handleCardClick = () => {
    setPopupVisible(true); // Show the popup if needed
  };

  // Handle password submission
  const handlePasswordSubmit = () => {
    const passwordInput = passwordInputRef.current.value;
    if (passwordInput === "surya@123") {
      setPopupVisible(false); // Close the popup after successful password entry
      passwordInputRef.current.value = ''; // Clear the password input
    } else {
      alert('Incorrect password. Please try again.');
    }
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

  const cardsData = [
    { title: "MyDeziner", type: "Product Design 🔒", image: "img/projects/mydeziner.png", link: "./mydeziner", openInNewTab: true, locked: true, password: "surya@123" },
    { title: "CustomFurnish", type: "UX Design", image: "img/projects/customfurnish.png", link: "https://customfurnish.com", openInNewTab: true, locked: false },
    { title: "HomeGymr", type: "UX Design", image: "img/projects/homegymr.png", link: "https://www.homegymr.in/checkout?id=1&quantity=1", openInNewTab: true, locked: false },
    { title: "Petzy", type: "Casestudy", image: "img/projects/petzy.png", link: "https://medium.com/@sai.chittala/case-study-petzy-petcare-application-aafe32d42117", openInNewTab: true },
    { title: "Yalla Gai", type: "UX Design 🔒", image: "img/projects/yallagai.png", link: "https://www.figma.com/design/c5Yd43Xo4ipF1FKnInr7Vv/Yalla-Gai?node-id=0-1&t=QdQPmGsy97stJ8cE-1", openInNewTab: true, locked: true, password: "surya@123" },
    { title: "Temple Address", type: "UX Design", image: "img/projects/templeaddress.png", link: "https://www.figma.com/design/oerkBSCwxTmg7fMqVmoplQ/Temple-Address?node-id=0-1&t=LHGxQF1KPRmfWLC2-1", openInNewTab: true, locked: false },
    { title: "Shruh", type: "UX Design 🔒", image: "img/projects/shruh.png", link: "https://www.figma.com/design/rD9xg05vO3epMZ8RAoapWc/Shruh?node-id=0-1&t=4pvPTSg8AhOHQU6P-1", openInNewTab: true, locked: true, password: "chandra@123" },
    { title: "Muzicon", type: "UX Design", image: "img/projects/muzicon.png", link: "https://www.figma.com/design/am0L5WJY9SNoQGUFZQcSkK/Muzicon?node-id=0-1&t=2yzxTpLJFMqdoBGX-1", openInNewTab: true, locked: false },
  ];

  return (
    <div className="content" id="content">
      {/* Password Popup above the Header */}
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
                  onClick={() => setPopupVisible(false)} // Close the popup
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

      <Header />
      <main>
        <section className="fade-in">
          <div className="full-bg">
            <div className="bg-main">
              <div className="intro-section-main">
                <div className="intro-section">
                  <div className="intro-content">
                    <div>
                      <p className="intro-white-text fade-in translate-text-down">
                        Sai Chittala <br />
                        <span className="intro-white-text">Product Designer at </span>
                        <a
                          className="company-text"
                          href="https://www.customfurnish.com/home"
                          target="_blank"
                        >
                          CustomFurnish
                        </a>
                        <br />
                        <a
                          href="mailto:sai.chittala@gmail.com"
                          target="_blank"
                          className="intro-grey-text intro-link"
                        >
                          Email
                        </a>
                        <a
                          href="https://www.linkedin.com/in/saichittala/"
                          target="_blank"
                          className="intro-grey-text intro-link"
                        >
                          Linkedin
                        </a>
                        <a
                          href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf"
                          target="_blank"
                          className="intro-grey-text intro-link"
                        >
                          Upwork
                        </a>
                      </p>
                    </div>

                    <div className="cards-container" id="cards-container">
                      {cardsData.map((card, index) => (
                        <Card
                          key={index}
                          title={card.title}
                          type={card.type}
                          image={card.image}
                          link={card.link}
                          openInNewTab={card.openInNewTab}
                          locked={card.locked}
                          password={card.password}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
