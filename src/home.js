import React, { useState, useEffect } from 'react';
import Card from './card';
// import useFadeIn from './components/useFadeIn';
// import useScrollEffect from './components/useScrollEffect';
import LockPopup from './components/lockpopup'; // Import LockPopup component
import { useRef } from "react";
import { motion } from "framer-motion";
import BubbleButton from './components/BubbleButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardSwipe } from './components/CardSwipe';
// import SmoothScrollProvider from './components/Scrollsmooth';

const images = [
  { src: "img/projects/cf.webp", alt: "Image 1" },
  { src: "img/projects/mydeziner.webp", alt: "Image 2" },
  { src: "img/projects/homegymr.png", alt: "Image 3" },
]

const Home = () => {
  // useFadeIn();
  // useScrollEffect();
  const cardsContainerRef = useRef(null);

  // Manage popup state
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentLink, setCurrentLink] = useState('');
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false); // Track incorrect password





  const cardsData = [
    { title: "Boosting Conversions with Smart Interior UX", type: "Customfurnish", year: "Professional 2024-2025", image: "img/projects/cf.webp", link: "#/customfurnish", openInNewTab: true, locked: false },
    { title: "Designing efficiency for interior designers", type: "Mydeziner", year: "Professional 2024-2025", image: "img/projects/mydeziner.webp", link: "#/mydeziner", openInNewTab: true, locked: false },
    // { title: "Optimizing Checkout, Maximizing Conversions", type: "Homegymr", year: "Professional 2024-2025", image: "img/projects/homegymr.png", link: "https://www.homegymr.in/checkout?id=1&quantity=1", openInNewTab: true, locked: false },
    { title: "Reimagining Pet Care Experience", type: "Petzy", year: "Case Study 2023-2024", image: "img/projects/petzy.jpeg", link: "https://medium.com/@sai.chittala/case-study-petzy-petcare-application-aafe32d42117", openInNewTab: true, locked: false },
    { title: "Crafting Unified Ride Booking Experience", type: "Yalla Gai", year: "Professional 2022-2023", image: "img/projects/yallagai.webp", link: "https://www.figma.com/design/c5Yd43Xo4ipF1FKnInr7Vv/Yalla-Gai?node-id=0-1&t=QdQPmGsy97stJ8cE-1", openInNewTab: true, locked: false, password: "surya@123" },
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
        className="sticky-toast"
      />
      {/* <LuxurySmoothScroll scrollSpeed={1.0}> */}
      {/* <SmoothScrollProvider duration={1.2}> */}

        <main className='z-index-11 '>
          <a href="#/customfurnish" target="_blank" rel="noopener noreferrer">
            <BubbleButton
              activationRef={cardsContainerRef}
              text="View Recent Work"
              showDelay={300}
              hideDelay={500}
              size={{
                small: 12,
                large: { width: 199, height: 48 } //48
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
            <div className="full-bg bg-black">

              <div className="bg-main height-100 home-main-container fd-c display-flex alc h-100 ">
                <div className='df-g8 gap-36 mobile-home-container fd-c width-450'>
                  <div className='df-g8 fd-c width-100 display-none'>
                    <div className='btn-4 btn-4-hn'>
                      <a href='/'>
                        <img
                          src={'img/sai.svg'}
                          alt="menu-icon"
                        />
                      </a>
                    </div>
                    <div className='df-g8 display-none' >
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
                        src={'img/profile-2test.jpeg'}
                        alt="profile-img"
                      />
                    </div>
                  </div>
                  <div className='df-g8 fd-c width-100'>
                    <div className='home-main-text df-g8 gap-20 fd-c'>
                      <span>
                        I’m <white>Sai Chittala</white> - <white>a digital product designer based in India.</white> turning complex workflows into seamless, high-performing experiences. I craft products that boost efficiency, clarity, and growth.
                      </span>
                      <span>
                        Recently, I’ve helped teams design SaaS tools, dashboards, and design systems that cut wasted time and boost clarity. Recently, I designed MyDeziner <white>(10x faster workflows for interior designers) </white> and redesigned CustomFurnish <white>(38% higher lead conversions and 29% reduced dropouts).</white>
                      </span>
                      <div className='df-g8 fd-c gap-12 display-none'>
                        <white>
                          Some things I’ve worked on:
                        </white>
                        <div className='df-g8 fd-c gap-16'>
                          <span>
                            • MyDeziner – SaaS tool that cut design workflow time by 40%
                          </span>
                          <span>
                            • CustomFurnish – redesigned flows that boosted conversions by 30%
                          </span>
                        </div>
                      </div>
                      {/* <span>
                        I love figuring out messy problems, but my goal is always to make things simple. Always open to talk about design, systems, AI, or the future of products.                    </span> */}
                      <div className='df-g8'>
                        {/* <a href="mailto:sai.chittala@gmail.com" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                        Email
                      </a> */}
                        <a href="https://www.linkedin.com/in/saichittala/" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                          LinkedIn
                        </a>
                        <a href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                          Upwork
                        </a>
                        <a href="Resume.pdf" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                          Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards-container home-cards-container width-450 display-none" id="cards-container" ref={cardsContainerRef}>
                  {cardsData.map((card, index) => (
                    <Card
                      key={index}
                      {...card}
                      onRequestLockPopup={handleRequestLockPopup} // Pass handleRequestLockPopup function
                      password={card.password} // Pass password prop for locked cards
                    />
                  ))}
                </div>

                <div className='df-g8 fd-c gap-36'>
                <a className="fade-in content-div-main-heading-2 translate-text-up width-450"> Selected Works
                </a>
                <div className='width-450 width-slider'>
                  <CardSwipe
                    images={cardsData.map(card => ({
                      src: card.image,
                      alt: card.title,
                      title: card.title,
                      year: card.year,
                      link: card.link,
                      locked: card.locked,
                      password: card.password
                    }))}
                    autoplayDelay={100000}
                    slideShadows={true}
                    onRequestLockPopup={handleRequestLockPopup} // Pass the popup handler
                  />

                </div>
              </div>
              </div>
            </div>
          </section>
        </main>
      {/* </SmoothScrollProvider> */}

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
