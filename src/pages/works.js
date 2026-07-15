import useFadeIn from '../components/useFadeIn';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../card';
import LockPopup from '../components/lockpopup'; // Import LockPopup component
import ProjectSummaryModal from '../components/ProjectSummaryModal'; // Import ProjectSummaryModal
import { useRef } from "react";
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

  // Manage summary modal state
  const [isSummaryVisible, setSummaryVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
    // { title: "Implemented the better Shopping Experience", type: "Shruh", year: "Professional 2022-2023", image: "img/projects/shruh.webp", link: "https://www.figma.com/design/rD9xg05vO3epMZ8RAoapWc/Shruh?node-id=0-1&t=4pvPTSg8AhOHQU6P-1", openInNewTab: true, locked: false },
    { title: "Crafting Connected Listening Journeys", type: "Muzicon", year: "Personal 2021-2022", image: "img/projects/muzicon.webp", link: "https://www.figma.com/design/am0L5WJY9SNoQGUFZQcSkK/Muzicon?node-id=0-1&t=2yzxTpLJFMqdoBGX-1", openInNewTab: true, locked: false },
  ];

  // Handle card click to open summary modal
  const handleCardClick = (project) => {
    setSelectedProject(project);
    setSummaryVisible(true);
  };

  // Handle opening of full case study from modal
  const handleOpenCaseStudy = (project) => {
    setSummaryVisible(false);
    if (project.locked) {
      handleRequestLockPopup(project.link, project.password);
    } else {
      const isInternal = project.link.startsWith('#') || project.link.startsWith('/');
      if (isInternal) {
        let path = project.link;
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
        window.open(project.link, project.openInNewTab ? "_blank" : "_self");
      }
    }
  };

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
                    onCardClick={handleCardClick} // Intercept card click to show summary first
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

      <ProjectSummaryModal
        isVisible={isSummaryVisible}
        onClose={() => setSummaryVisible(false)}
        project={selectedProject}
        onOpenCaseStudy={handleOpenCaseStudy}
      />
    </div>
  )
}

export default Works;