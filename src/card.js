import React from 'react';
import useFadeIn from './components/useFadeIn';

const Card = ({ title, type, image, link, openInNewTab = true, locked, onRequestLockPopup, password }) => {
  useFadeIn();

  const handleCardClick = () => {
    if (locked) {
      onRequestLockPopup(link, password); // Pass password to the popup request
    } else {
      window.open(link, openInNewTab ? "_blank" : "_self");
    }
  };

  return (
    <div>
      <div
        className="main-card fade-in cursor-link"
        style={{ backgroundImage: `url(${image})` }}
        onClick={handleCardClick}
      >
        <div className="sub-card">
          <div className="card-content">
            <div className="main-heading">{title}</div>
            <div className="heading-type">{type}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
