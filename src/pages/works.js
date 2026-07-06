import Header from '../components/header';
import useFadeIn from '../components/useFadeIn';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../card';
import LockPopup from '../components/lockpopup'; // Import LockPopup component
// import DesignText from './components/designtext';
import { useRef } from "react";
// import LuxurySmoothScroll from './components/smoothscroll';
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

function Works() {
  const navigate = useNavigate();
  useFadeIn();
  const cardsContainerRef = useRef(null);

  // Manage popup state
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentLink, setCurrentLink] = useState('');
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false); // Track incorrect password
  const AnimatedComponent = motion.div;

  const cardsData = [
    { title: "Building Faster Workflows for Underground Operators", type: "Groundhog Apps", year: "Professional 2026-2027", image: "img/projects/gh_ug/cover.webp", link: "#/Uggh", openInNewTab: true, locked: false },
    { title: "Designing Autonomous Haul Truck Operations", type: "Groundhog Apps", year: "Professional 2025-2026", image: "img/projects/gh-op/cover.webp", link: "#/Opgh", openInNewTab: true, locked: false },
    { title: "Reducing Friction in LMS Onboarding", type: "Groundhog Apps", year: "Professional 2025-2026", image: "img/projects/lms-gh.webp", link: "#/lms-gh", openInNewTab: true, locked: false },
    { title: "Real-time Fleet Monitoring for Open-Pit Mining Operations", type: "Groundhog Apps", year: "Professional 2025-2026", image: "img/projects/dd/cover.webp", link: "#/dd", openInNewTab: true, locked: false },
    { title: "Scaling Brands through Cinematic Short-Form Video", type: "Reelscale", year: "Professional 2026-2027", image: "img/projects/reelscale/main.webp", link: "https://reelscale.in", openInNewTab: true, locked: false },
    { title: "Turning Website Traffic into Qualified Leads", type: "Customfurnish", year: "Professional 2024-2025", image: "img/projects/cf.webp", link: "#/customfurnish", openInNewTab: true, locked: false },
    { title: "Reducing Workflow Friction in Interior Design SaaS", type: "Mydeziner", year: "Professional 2024-2025", image: "img/projects/mydeziner.webp", link: "#/mydeziner", openInNewTab: true, locked: true, password: "surya@123" },
    { title: "Crafting Unified Ride Booking Experience", type: "Yalla Gai", year: "Professional 2022-2023", image: "img/projects/yallagai.webp", link: "https://www.figma.com/design/c5Yd43Xo4ipF1FKnInr7Vv/Yalla-Gai?node-id=0-1&t=QdQPmGsy97stJ8cE-1", openInNewTab: true, locked: false, password: "surya@123" },
    { title: "Reimagining Pet Care Experience", type: "Petzy", year: "Case Study 2023-2024", image: "img/projects/petzy.webp", link: "https://medium.com/@sai.chittala/case-study-petzy-petcare-application-aafe32d42117", openInNewTab: true, locked: false },
    { title: "Implemented the better Shopping Experience", type: "Shruh", year: "Professional 2022-2023", image: "img/projects/shruh.webp", link: "https://www.figma.com/design/rD9xg05vO3epMZ8RAoapWc/Shruh?node-id=0-1&t=4pvPTSg8AhOHQU6P-1", openInNewTab: true, locked: false },
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

  // Close the popup
  const closePopup = () => {
    setPopupVisible(false);
    setCurrentPassword('');
    setCurrentLink('');
    setIsPasswordIncorrect(false); // Reset password check state
  };
  return (
    <div className="content cursor" id="content">
      <main>
        <section className="fade-in">
          <div className="full-bg">
            <div className="bg-main projects-width pt-175">
              <div className="cards-container" id="cards-container" ref={cardsContainerRef}>
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    {...card}
                    onRequestLockPopup={handleRequestLockPopup} // Pass handleRequestLockPopup function
                    password={card.password} // Pass password prop for locked cards
                  />
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>

      <LockPopup
        isVisible={isPopupVisible}
        onClose={closePopup}
        onUnlock={handleUnlock}
        password={currentPassword} // Pass password to LockPopup
        isPasswordIncorrect={isPasswordIncorrect} // Pass incorrect password flag
      />
    </div>
  )
}

export default Works;