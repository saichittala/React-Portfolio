import React, { useState, useEffect } from 'react';
import Card from './card';
import Header from './components/header';
import Footer from './components/footer';
import useFadeIn from './components/useFadeIn';
import useScrollEffect from './components/useScrollEffect';
import LockPopup from './components/lockpopup'; // Import LockPopup component
// import DesignText from './components/designtext';
import { useRef } from "react";
// import LuxurySmoothScroll from './components/smoothscroll';
import { motion } from "framer-motion";
import BubbleButton from './components/BubbleButton';
import MagnetWrapper from './components/MagneticCursor';
import ContactForm from './components/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Home = () => {
  useFadeIn();
  useScrollEffect();
  const cardsContainerRef = useRef(null);

  // Manage popup state
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentLink, setCurrentLink] = useState('');
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false); // Track incorrect password
  const AnimatedComponent = motion.div;
  const [currentTime, setCurrentTime] = useState('');



  useEffect(() => {
    const timerId = setInterval(() => {
      // --- CHANGE IS HERE ---
      // Add `second: '2-digit'` to the options object.
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', // This line adds the seconds
        hour12: true,
      };
      const timeString = new Date().toLocaleTimeString('en-US', options);
      setCurrentTime(timeString);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const cardsData = [
    { title: "Boosting Conversions with Smart Interior UX", type: "Customfurnish", year: "Professional 2024-2025", image: "img/projects/cf.webp", link: "#/customfurnish", openInNewTab: true, locked: false },
    { title: "Streamlining Workflows For Design Teams", type: "Mydeziner", year: "Professional 2024-2025", image: "img/projects/mydeziner.webp", link: "#/mydeziner", openInNewTab: true, locked: false },
    { title: "Optimizing Checkout, Maximizing Conversions", type: "Homegymr", year: "Professional 2024-2025", image: "img/projects/homegymr.png", link: "https://www.homegymr.in/checkout?id=1&quantity=1", openInNewTab: true, locked: false },
    { title: "Reimagining Pet Care Experience", type: "Petzy", year: "Case Study 2023-2024", image: "img/projects/petzy.jpeg", link: "https://medium.com/@sai.chittala/case-study-petzy-petcare-application-aafe32d42117", openInNewTab: true, locked: false },
    { title: "Crafting Unified Ride Booking Experience", type: "Yalla Gai", year: "Professional 2022-2023", image: "img/projects/yallagai.webp", link: "https://www.figma.com/design/c5Yd43Xo4ipF1FKnInr7Vv/Yalla-Gai?node-id=0-1&t=QdQPmGsy97stJ8cE-1", openInNewTab: true, locked: true, password: "surya@123" },
    { title: "Implemented the better Shopping Experience", type: "Shruh", year: "Professional 2022-2023", image: "img/projects/shruh.png", link: "https://www.figma.com/design/rD9xg05vO3epMZ8RAoapWc/Shruh?node-id=0-1&t=4pvPTSg8AhOHQU6P-1", openInNewTab: true, locked: false },
    { title: "Modernizing Devotion Through Design", type: "Temple Address", year: "Professional 2022-2023", image: "img/projects/templeaddress.webp", link: "https://www.figma.com/design/oerkBSCwxTmg7fMqVmoplQ/Temple-Address?node-id=0-1&t=LHGxQF1KPRmfWLC2-1", openInNewTab: true, locked: true, password: "1" },
    { title: "Crafting Connected Listening Journeys", type: "Muzicon", year: "Personal 2021-2022", image: "img/projects/muzicon.webp", link: "https://www.figma.com/design/am0L5WJY9SNoQGUFZQcSkK/Muzicon?node-id=0-1&t=2yzxTpLJFMqdoBGX-1", openInNewTab: true, locked: false },
  ];



  // Handle the locked popup request
  const handleRequestLockPopup = (link, password) => {
    setPopupVisible(true);
    setCurrentPassword(password); // Store the password here
    setCurrentLink(link); // Store the link here
    setIsPasswordIncorrect(false); // Reset incorrect password flag
  };

  // Handle unlock logic
  const handleUnlock = (enteredPassword) => {
    if (enteredPassword === currentPassword) {
      window.open(currentLink, "_blank");
      setPopupVisible(false); // Close popup on success
    } else {
      setIsPasswordIncorrect(true); // Set incorrect flag if password is wrong
    }
  };

  // Close the popup
  const closePopup = () => {
    setPopupVisible(false);
    setCurrentPassword('');
    setCurrentLink('');
    setIsPasswordIncorrect(false); // Reset password check state
  };

  return (
    <div className="content bg-unset cursor scroll-smooth bg-v" id="content">
      {/* 🔥 Video Background */}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
        className="sticky-toast"
      />
      {/* <LuxurySmoothScroll scrollSpeed={1.0}> */}


      <main className='z-index-11 '>
        <a href="#/customfurnish" target="_blank" rel="noopener noreferrer">
          <BubbleButton
            activationRef={cardsContainerRef}
            text="View Recent Work"
            showDelay={300} // Text appears after 300ms
            hideDelay={500} // Disappears after 500ms of being small
            size={{
              small: 12,
              large: { width: 215, height: 48 } //48
            }}
            className="custom-bubble-class" // Optional
          >
            <img src="img/open-web.svg" alt="Arrow" />
          </BubbleButton>
        </a>

        <section className="fade-in">
          <div className="background-video-wrapper">
            <video autoPlay muted loop playsInline className="background-video">
              <source src="/img/bg-vvv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Header />
          <div className="full-bg height-100vh bg-op4">

            <div className="bg-main height-100vh home-main-container fd-c display-flex alc h-100 ">
              <div className='df-g8 width-100 mobile-home-container'>
                <div className='df-g8 fd-c width-100'>
                  <div className='btn-4 btn-4-hn'>
                    <a href='/'>
                      <img
                        src={'img/sai.svg'}
                        alt="menu-icon"
                      />
                    </a>

                  </div>
                  <div className='df-g8' >
                    <div className='btn-4 btn-4-hn cursor-text'>
                      UX
                    </div>
                    <div className='btn-4 btn-4-hn cursor-text'>
                      UI
                    </div>
                    <div className='btn-4 btn-4-hn cursor-text'>
                      Product
                    </div>
                  </div>

                </div>
                <div className='df-g8 width-fc'>
                  <div className='profile-img'>
                    <img
                      style={{ width: '150px', borderRadius: '24px' }}
                      src={'img/profile-test.webp'}
                      alt="profile-img"
                    />
                  </div>
                </div>
                <div className='df-g8 fd-c width-100'>
                  <div className='btn-4 btn-4-hn cursor-text'>
                    Product Designer helping Companies to build digital products.
                  </div>
                  <div className='df-g8'>
                    <a href='https://www.linkedin.com/in/saichittala/' target="_blank" rel="noopener noreferrer" className='btn-4'>
                      Linkedin
                    </a>
                    <a href='https://www.upwork.com/freelancers/~01762e36a0d1eb9abf' target="_blank" rel="noopener noreferrer" className='btn-4'>
                      Upwork
                    </a>
                  </div>
                </div>
                <div className='df-g8 fd-c width-100'>
                  <div className='btn-4 btn-4-hn cursor-text jc-sb'>

                    <div className='df-g8 fd-c'>
                      <span className='fs-14'>Based in</span>
                      <span className='fs-14'> India</span>
                    </div>
                    <div className='df-g8 fd-c'>
                      <span className='ta-r fs-14'>{currentTime || 'Loading...'}</span>
                      <span className='ta-r fs-14'>Hyderabad</span>
                    </div>
                  </div>
                  <a href='/#works' className='btn-4 blue-opacity-4 btn-4-hn'>
                    <span>Explore all works</span>
                    <img src='img/arrow-right.svg' alt="arrow" />
                  </a>
                </div>
              </div>
              {/* <div className="intro-section-main">
                <div className="intro-section">
                  <div className="intro-content">
                    <p className="intro-white-text fade-in translate-text-down ">
                      <a className=''>Sai Chittala</a> <br />
                      <span className="intro-white-text ">Product Designer at </span>
                      <a className="company-text " href="https://www.customfurnish.com/" target="_blank" rel="noopener noreferrer">
                        CustomFurnish
                      </a>
                      <br />
                      <a href="mailto:sai.chittala@gmail.com" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                        Email
                      </a>
                      <a href="https://www.linkedin.com/in/saichittala/" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <a href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                        Upwork
                      </a>
                      <div className='say-hi-btn cursor-playful'>
                      <img src="img/right-arrow.svg" alt="logo" />
                      <a>Say Hi</a></div>
                    </p>

                    


                    <DesignText />
                  </div>
                </div>
              </div>  */}
                {/* <div className="cards-container" id="cards-container" ref={cardsContainerRef}>
                  {cardsData.map((card, index) => (
                    <Card
                      key={index}
                      {...card}
                      onRequestLockPopup={handleRequestLockPopup} // Pass handleRequestLockPopup function
                      password={card.password} // Pass password prop for locked cards
                    />
                  ))}
                </div> */}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

      {/* LockPopup */}
      <LockPopup
        isVisible={isPopupVisible}
        onClose={closePopup}
        onUnlock={handleUnlock}
        password={currentPassword} // Pass password to LockPopup
        isPasswordIncorrect={isPasswordIncorrect} // Pass incorrect password flag
      />
      {/* </LuxurySmoothScroll> */}

    </div>
  );
};

export default Home;
