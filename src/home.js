import React, { useState, useEffect } from 'react';
import Card from './card';
import LockPopup from './components/lockpopup';
import { useRef } from "react";
import { motion } from "framer-motion";
import BubbleButton from './components/BubbleButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { CardSwipe } from './components/CardSwipe';
import TestimonialsCard from './components/TestimonialsCard';



const images = [
  { src: "img/projects/cf.webp", alt: "Image 1" },
  { src: "img/projects/mydeziner.webp", alt: "Image 2" },
  { src: "img/projects/homegymr.png", alt: "Image 3" },
]

const Home = () => {
  const cardsContainerRef = useRef(null);

  // Manage popup state
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentLink, setCurrentLink] = useState('');
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false); // Track incorrect password
  const [showAll, setShowAll] = useState(false); // 🔹 For View More/Less toggle
  const RESUME_PASSWORD = "surya@123"; // set your desired password







  const cardsData = [
    { title: "Turning Website Traffic into Qualified Leads", type: "Customfurnish", year: "Professional 2024-2025", image: "img/projects/cf.webp", link: "#/customfurnish", openInNewTab: true, locked: false },
    { title: "Reducing Workflow Friction in Interior Design SaaS", type: "Mydeziner", year: "Professional 2024-2025", image: "img/projects/mydeziner.png", link: "#/mydeziner", openInNewTab: true, locked: true, password: "surya@123" },
    // { title: "Designing efficiency for interior designers", type: "Mydeziner", year: "Professional 2024-2025", image: "img/projects/mydeziner.webp", link: "#/mydeziner", openInNewTab: true, locked: true, confidential: true, password: "surya@123" },
    // { title: "Optimizing Checkout, Maximizing Conversions", type: "Homegymr", year: "Professional 2024-2025", image: "img/projects/homegymr.webp", link: "https://www.homegymr.in/checkout?id=1&quantity=1", openInNewTab: true, locked: false },
    { title: "Crafting Unified Ride Booking Experience", type: "Yalla Gai", year: "Professional 2022-2023", image: "img/projects/yallagai.webp", link: "https://www.figma.com/design/c5Yd43Xo4ipF1FKnInr7Vv/Yalla-Gai?node-id=0-1&t=QdQPmGsy97stJ8cE-1", openInNewTab: true, locked: false, password: "surya@123" },
    { title: "Reimagining Pet Care Experience", type: "Petzy", year: "Case Study 2023-2024", image: "img/projects/petzy.webp", link: "https://medium.com/@sai.chittala/case-study-petzy-petcare-application-aafe32d42117", openInNewTab: true, locked: false },
    // { title: "Implemented the better Shopping Experience", type: "Shruh", year: "Professional 2022-2023", image: "img/projects/shruh.webp", link: "https://www.figma.com/design/rD9xg05vO3epMZ8RAoapWc/Shruh?node-id=0-1&t=4pvPTSg8AhOHQU6P-1", openInNewTab: true, locked: false },
    // { title: "Modernizing Devotion Through Design", type: "Temple Address", year: "Professional 2022-2023", image: "img/projects/templeaddress.webp", link: "https://www.figma.com/design/oerkBSCwxTmg7fMqVmoplQ/Temple-Address?node-id=0-1&t=LHGxQF1KPRmfWLC2-1", openInNewTab: true, locked: true, password: "1" },
    // { title: "Crafting Connected Listening Journeys", type: "Muzicon", year: "Personal 2021-2022", image: "img/projects/muzicon.webp", link: "https://www.figma.com/design/am0L5WJY9SNoQGUFZQcSkK/Muzicon?node-id=0-1&t=2yzxTpLJFMqdoBGX-1", openInNewTab: true, locked: false },
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
              large: { width: 195, height: 48 }
            }}
            className="custom-bubble-class"
          >
            <img src="img/open-web.svg" alt="Arrow" />
          </BubbleButton>
        </a>

        <section className="fade-in">
          <div className="full-bg bg-black">
            <div className="bg-main height-100 home-main-container fd-c display-flex alc h-100 ">
              <div className='df-g8 gap-36 mobile-home-container fd-rr'>
                <div className='df-g8 width-fc display-none'>
                  <div className='profile-img'>
                    <img
                      style={{ width: '150px', borderRadius: '24px' }}
                      src={'img/profile-2test.jpeg'}
                      alt="profile-img"
                    />
                  </div>
                </div>
                <div className='df-g8 fd-c width-100  jc-c'>
                  <div className='home-main-text df-g8 gap-20 fd-c width-320px jc-c al-c'>
                    <div className='df-g8 al-c jc-c'>
                      {/* <img
                        style={{ width: '150px', height: '150px', borderRadius: '999px', objectFit: 'cover' }}
                        src={'img/profile-2test.jpeg'}
                        alt="profile-img"
                      /> */}

                    </div>
                        

                        <span>
                      Hey, I'm Sai Chittala
                          </span>
                    
                    <span>
                      I take products from <white>idea to scale</white> - strategically.
                    </span>
                    {/* <span>
                      
                      Recently, I’ve helped teams design SaaS tools, dashboards, and design systems that cut wasted time and boost clarity. Recently, I designed MyDeziner <white>(10x faster workflows for interior designers) </white> and redesigned CustomFurnish <white>(38% higher lead conversions and 29% reduced dropouts).</white>
                    </span> */}
                    {/* <div className='df-g8'>
                      <a href="https://www.linkedin.com/in/saichittala/" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <a href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf" target="_blank" className="intro-grey-text intro-link " rel="noopener noreferrer">
                        Upwork
                      </a>
                      <a
                        className="intro-grey-text intro-link"
                        onClick={() => handleRequestLockPopup("SaiChittala-Product-Designer-Resume.pdf", RESUME_PASSWORD)}
                      >
                        Resume
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className='df-g8 fd-c gap-36 width-100 '>
                <a className="fade-in content-div-main-heading-2 translate-text-up  margin-unset"> Shipped Products
                </a>
                <motion.div
                  layout
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="cards-container home-cards-container "
                  id="cards-container"
                  ref={cardsContainerRef}
                >
                  {(showAll ? cardsData : cardsData.slice(0, 4)).map((card, index) => (
                    <Card
                      key={index}
                      {...card}
                      onRequestLockPopup={handleRequestLockPopup}
                      password={card.password}
                    />
                  ))}
                </motion.div>
                


                {cardsData.length > 4 && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button
                      className="btn-1"
                      onClick={() => {
                        setShowAll(!showAll);
                        if (showAll) {

                          cardsContainerRef.current?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {showAll ? "View Less" : "View More"}
                    </button>
                  </div>
                )}
              </div>
              <div className='df-g8 fd-c al-c work-in-progress-container'>
                <white>Work in progress. Stay tuned.</white>
              </div>





              {/* <div className='df-g8 fd-c gap-36 display-none'>
                <a className="fade-in content-div-main-heading-2 translate-text-up width-450"> Selected Works
                </a>
                <div className='width-450 width-slider '>
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
                    onRequestLockPopup={handleRequestLockPopup}
                  />
                </div>
                <div className='width-450 '>
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
                    onRequestLockPopup={handleRequestLockPopup}
                  />
                </div>
              </div> */}
              <TestimonialsCard />
              {/* <div className='df-g8 fd-c gap-36 width-450'>
                <a className="fade-in content-div-main-heading-2 translate-text-up margin-unset">
                  Experience
                </a>

                <div className='df-g8 fd-c' style={{ gap: '0px', paddingLeft: '8px' }}>
                  {[
                    { company: "Groundhog Apps", role: "Product Designer", dates: "Oct 2025 – Present", current: true },
                    { company: "Customfurnish", role: "UI/UX Designer", dates: "Jan 2024 – Jul 2025" },
                    { company: "FirstRicoz", role: "UI/UX Designer", dates: "Jan 2023 – Dec 2023" },
                    { company: "YallaGai", role: "Freelance Product Designer", dates: "Feb 2022 – Dec 2022" },
                  ].map((exp, index, arr) => (
                    <div key={index} className='df-g8' style={{ gap: '16px', alignItems: 'stretch' }}>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '16px' }}>
                        <div style={{
                          width: exp.current ? '12px' : '8px',
                          height: exp.current ? '12px' : '8px',
                          borderRadius: '50%',
                          backgroundColor: exp.current ? 'var(--white-color)' : 'rgba(0,0,0,0.3)',
                          boxShadow: exp.current ? '0 0 0 5px rgba(0,0,0,0.10)' : 'none',
                          flexShrink: 0,
                          marginTop: '4px',
                          transition: 'all 0.3s ease',
                        }} />
                        {index < arr.length - 1 && (
                          <div style={{
                            width: '1px',
                            flex: 1,
                            minHeight: '40px',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.04))',
                            margin: '6px 0',
                          }} />
                        )}
                      </div>

                      <div className='df-g8' style={{
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flex: 1,
                        paddingBottom: index < arr.length - 1 ? '28px' : '0px',
                      }}>
                        <div className='df-g8 fd-c' style={{ gap: '4px' }}>
                          <span style={{ color: 'var(--white-color)', fontWeight: '500', fontSize: '18px' }}>
                            {exp.company}
                          </span>
                          <span style={{ color: 'var(--white-color)', fontSize: '16px', opacity: '0.6' }}>
                            {exp.role}
                          </span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                          <span style={{ color: 'var(--white-color)', fontSize: '14px', opacity: '0.4', whiteSpace: 'nowrap', fontWeight: '300' }}>
                            {exp.dates}
                          </span>
                          {exp.current && (
                            <span style={{
                              fontSize: '12px',
                              fontWeight: '400',
                              padding: '2px 8px',
                              borderRadius: '20px',
                              background: 'rgba(0,0,0,0.06)',
                              color: 'var(--white-color)',
                              opacity: '1',
                            }}>
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div> */}
              <div className='df-g8 fd-c gap-36 width-450'>

                <div className="experience-container">
                  <a className="fade-in content-div-main-heading-2 translate-text-up margin-unset">
                    Experience
                  </a>
                  <div className="timeline">
                    {[
                      {
                        company: "Groundhog Apps",
                        role: "Product Designer",
                        dates: "Oct 2025 – Present",
                        logo: "/img/logos/gh.png",
                        current: true,
                      },
                      {
                        company: "Customfurnish",
                        role: "UI/UX Designer",
                        dates: "Jan 2024 – Jul 2025",
                        logo: "/img/logos/customfurnish.png",
                      },
                      {
                        company: "FirstRicoz",
                        role: "UI/UX Designer",
                        dates: "Jan 2023 – Dec 2023",
                        logo: "/img/logos/firstricoz.png",
                      },
                      {
                        company: "YallaGai",
                        role: "Freelance Product Designer",
                        dates: "Feb 2022 – Dec 2022",
                        logo: "/img/logos/yallagai.png",
                      },
                    ].map((exp, index, arr) => (
                      <div key={index} className="timeline-row">

                        {/* LEFT: Logo + Line */}
                        <div className="timeline-left">
                          <div className="logo-wrapper">
                            <img src={exp.logo} alt={exp.company} />
                          </div>

                          {index < arr.length - 1 && <div className="timeline-line" />}
                        </div>

                        {/* RIGHT: Content */}
                        <div className="timeline-content">
                          <div className="timeline-top">
                            <div className="company-block">
                              <span className="company-name">{exp.company}</span>
                              <span className="role">{exp.role}</span>
                            </div>

                            <div className="date-block">
                              <span className="dates">{exp.dates}</span>
                              {exp.current && <span className="current-badge">Current</span>}
                            </div>
                          </div>

                          {/* Divider like reference */}
                          {index < arr.length - 1 && <div className="row-divider" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className='df-g8 fd-c gap-36 '>
                <a className="fade-in content-div-main-heading-2 translate-text-up width-450"> Selected Works
                </a>
              </div> */}

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

    </div >
  );
};

export default Home;
