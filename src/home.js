import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useScrollReveal from './components/useScrollReveal';
import Card from './card';
import LockPopup from './components/lockpopup';
import { useRef } from "react";
import { motion } from "framer-motion";
import BubbleButton from './components/BubbleButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { CardSwipe } from './components/CardSwipe';
import TestimonialsCard from './components/TestimonialsCard';
import Footer from './components/footer';



const images = [
  { src: "img/projects/cf.webp", alt: "Image 1" },
  { src: "img/projects/mydeziner.webp", alt: "Image 2" },
  { src: "img/projects/homegymr.webp", alt: "Image 3" },
]

const Home = ({ recruiterMode, setActiveTheme }) => {
  const navigate = useNavigate();
  const cardsContainerRef = useRef(null);
  useScrollReveal();

  // Manage popup state
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentLink, setCurrentLink] = useState('');
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false); // Track incorrect password
  const [showAll, setShowAll] = useState(false); // 🔹 For View More/Less toggle
  const RESUME_PASSWORD = "surya@123"; // set your desired password
  const [heroTag, setHeroTag] = useState("Now reaching you ✦");






  const cardsData = [
    { title: "Building Faster Workflows for Underground Operators", type: "Groundhog Apps", year: "Professional 2026-2027", image: "img/projects/gh_ug/cover.webp", link: "#/Uggh", openInNewTab: true, locked: false },
    { title: "Designing Autonomous Haul Truck Operations", type: "Groundhog Apps", year: "Professional 2025-2026", image: "img/projects/gh-op/cover.webp", link: "#/Opgh", openInNewTab: true, locked: false },
    { title: "Reducing Friction in LMS Onboarding", type: "Groundhog Apps", year: "Professional 2025-2026", image: "img/projects/lms-gh.webp", link: "#/lms-gh", openInNewTab: true, locked: false },
    // { title: "Real-time Fleet Monitoring for Open-Pit Mining Operations", type: "Groundhog Apps", year: "Professional 2025-2026", image: "img/projects/dd/cover.webp", link: "#/dd", openInNewTab: true, locked: false },
    { title: "Scaling Brands through Cinematic Short-Form Video", type: "Reelscale", year: "Professional 2026-2027", image: "img/projects/reelscale/main.webp", link: "https://reelscale.in", openInNewTab: true, locked: false },
    { title: "Turning Website Traffic into Qualified Leads", type: "Customfurnish", year: "Professional 2024-2025", image: "img/projects/cf.webp", link: "#/customfurnish", openInNewTab: true, locked: false },
    { title: "Reducing Workflow Friction in Interior Design SaaS", type: "Mydeziner", year: "Professional 2024-2025", image: "img/projects/mydeziner.webp", link: "#/mydeziner", openInNewTab: true, locked: true, password: "surya@123" },
    // { title: "Designing efficiency for interior designers", type: "Mydeziner", year: "Professional 2024-2025", image: "img/projects/mydeziner.webp", link: "#/mydeziner", openInNewTab: true, locked: true, confidential: true, password: "surya@123" },
    // { title: "Optimizing Checkout, Maximizing Conversions", type: "Homegymr", year: "Professional 2024-2025", image: "img/projects/homegymr.webp", link: "https://www.homegymr.in/checkout?id=1&quantity=1", openInNewTab: true, locked: false },
    { title: "Crafting Unified Ride Booking Experience", type: "Yalla Gai", year: "Professional 2022-2023", image: "img/projects/yallagai.webp", link: "https://www.figma.com/design/c5Yd43Xo4ipF1FKnInr7Vv/Yalla-Gai?node-id=0-1&t=QdQPmGsy97stJ8cE-1", openInNewTab: true, locked: true, password: "figma@123" },
    { title: "Reimagining Pet Care Experience", type: "Petzy", year: "Case Study 2023-2024", image: "img/projects/petzy.webp", link: "https://medium.com/@sai.chittala/case-study-petzy-petcare-application-aafe32d42117", openInNewTab: true, locked: false },
    { title: "Implemented the better Shopping Experience", type: "Shruh", year: "Professional 2022-2023", image: "img/projects/shruh.webp", link: "https://www.figma.com/design/rD9xg05vO3epMZ8RAoapWc/Shruh?node-id=0-1&t=4pvPTSg8AhOHQU6P-1", openInNewTab: true, locked: true, password: "figma@123" },
    // { title: "Modernizing Devotion Through Design", type: "Temple Address", year: "Professional 2022-2023", image: "img/projects/templeaddress.webp", link: "https://www.figma.com/design/oerkBSCwxTmg7fMqVmoplQ/Temple-Address?node-id=0-1&t=LHGxQF1KPRmfWLC2-1", openInNewTab: true, locked: true, password: "1" },
    // { title: "Crafting Connected Listening Journeys", type: "Muzicon", year: "Personal 2021-2022", image: "img/projects/muzicon.webp", link: "https://www.figma.com/design/am0L5WJY9SNoQGUFZQcSkK/Muzicon?node-id=0-1&t=2yzxTpLJFMqdoBGX-1", openInNewTab: true, locked: true, password: "figma@123" },
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
      const isInternal = currentLink.startsWith('#') || currentLink.startsWith('/');
      if (isInternal) {
        let path = currentLink;
        if (path.startsWith('#/')) {
          path = path.substring(2);
        } else if (path.startsWith('#')) {
          path = path.substring(1);
        }
        if (!path.startsWith('/')) {
          path = '/' + path;
        }
        navigate(path);
      } else {
        window.open(currentLink, "_blank");
      }
      setPopupVisible(false); // Close popup on success
    } else {
      setIsPasswordIncorrect(true); // Set incorrect flag if password is wrong
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const cached = sessionStorage.getItem('user_location');
        if (cached) {
          setHeroTag(`Hello to ${cached}`);
          return;
        }
        const response = await fetch("https://ipinfo.io/json");
        if (!response.ok) throw new Error("ipinfo request failed");
        const locationData = await response.json();

        console.log("LOCATION:", locationData);

        const state = locationData.region || "";
        const country = locationData.country || "";

        const location = `${state}, ${country}`;
        sessionStorage.setItem('user_location', location);

        setHeroTag(`Hello to ${location}`);

      } catch (error) {
        console.error(error);

        setHeroTag("A quiet hello ✦");
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    if (!setActiveTheme) return;

    const handleScrollTheme = () => {
      const container = cardsContainerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('.card-container');
      if (cards.length < 2) return;

      const secondCard = cards[1];
      const testimonials = document.querySelector('.testimonials-section');
      if (!testimonials) return;

      const secondCardRect = secondCard.getBoundingClientRect();
      const testimonialsRect = testimonials.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Trigger light theme when second card enters, and revert to dark theme when testimonials section reaches the middle of the screen
      const triggerStart = secondCardRect.top < viewportHeight * 0.7;
      const triggerEnd = testimonialsRect.top < viewportHeight * 0.5;

      if (triggerStart && !triggerEnd) {
        // setActiveTheme('light');
      } else {
        // setActiveTheme('dark');
      }
    };

    handleScrollTheme();
    window.addEventListener('scroll', handleScrollTheme, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollTheme);
      // setActiveTheme('dark');
    };
  }, [setActiveTheme, showAll]);

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
      <main className='z-index-11 '>
        <a href="#/customfurnish">
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
                      className="profile-img-home"
                      src={'img/profile-2test.webp'}
                      alt="profile-img"
                    />
                  </div>
                </div>
                <div className='df-g8 fd-c width-100  jc-c'>
                  <div className='home-main-text gap-20  df-g8 fd-c width-320px aic jc-c al-c'>
                    <div className='df-g8 al-c jc-c'>
                      {/* <img
                        style={{ width: '150px', height: '150px', borderRadius: '999px', objectFit: 'cover' }}
                        src={'img/profile-2test.webp'}
                        alt="profile-img"
                      /> */}

                    </div>
                    <div className='df-g8 fd-c al-c home-tag-container'>
                      <span>{heroTag}</span>                    </div>


                    <span>
                      Hey, I'm Sai Chittala
                    </span>

                    <span>
                      I take products from <white>idea to scale</white> - strategically.
                    </span>
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
                  {(showAll ? cardsData : cardsData.slice(0, 6)).map((card, index) => (
                    <Card
                      key={index}
                      {...card}
                      onRequestLockPopup={handleRequestLockPopup}
                      password={card.password}
                    />
                  ))}
                </motion.div>



                {cardsData.length > 6 && (
                  <div className="df-flex-center">
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
              {/* <div className='df-g8 fd-c al-c work-in-progress-container'>
                <white>Working on two case studies, stay tuned</white>
              </div> */}
              <TestimonialsCard />
              <div className='df-g8 fd-c gap-36 width-450'>

                <div className="experience-container">
                  <a className="fade-in content-div-main-heading-2 translate-text-up margin-unset">
                    Experience
                  </a>
                  <div className="timeline fade-in">
                    {[
                      {
                        company: "Groundhog Apps",
                        role: "Senior Product Designer",
                        dates: "Oct 2025 – Present",
                        logo: "/img/logos/gh.webp",
                        current: true,
                      },
                      {
                        company: "Customfurnish",
                        role: "UI/UX Designer",
                        dates: "Jan 2024 – Jul 2025",
                        logo: "/img/logos/customfurnish.webp",
                      },
                      {
                        company: "FirstRicoz",
                        role: "UI/UX Designer",
                        dates: "Jan 2023 – Dec 2023",
                        logo: "/img/logos/firstricoz.webp",
                      },
                      {
                        company: "YallaGai",
                        role: "Freelance Product Designer",
                        dates: "Feb 2022 – Dec 2022",
                        logo: "/img/logos/yallagai.webp",
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

            </div>

            {/* Hero CTA Section */}
            <div className="hero-cta-section fade-in">
              <div className="bg-main hero-cta-container fadeup">
                <h2 className="hero-cta-heading">
                  Ready to build something <span>people love?</span>
                </h2>
                <div className="hero-cta-button-wrapper">
                  <div className="hero-cta-avatar">
                    <img src="img/profile-new.webp" alt="Sai Chittala" />
                  </div>
                  <Link to="/contact" className="hero-cta-button">
                    <span>Let's Talk</span>
                    <div className="hero-cta-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />

      {/* LockPopup */}
      <LockPopup
        isVisible={isPopupVisible}
        onClose={closePopup}
        onUnlock={handleUnlock}
        password={currentPassword} // Pass password to LockPopup
        isPasswordIncorrect={isPasswordIncorrect} // Pass incorrect password flag
      />
    </div >
  );
};

export default Home;
