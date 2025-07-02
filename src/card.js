import React, { useRef, useEffect, useState } from 'react';
import useFadeIn from './components/useFadeIn';

const Card = ({
  title,
  type,
  year,
  image,
  link,
  openInNewTab = true,
  locked,
  onRequestLockPopup,
  password
}) => {
  useFadeIn();

  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // we only need it once
        }
      },
      { rootMargin: '100px' } // start loading just before entering
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = () => {
    if (locked) {
      onRequestLockPopup(link, password);
    } else {
      window.open(link, openInNewTab ? "_blank" : "_self");
    }
  };

  return (
    <div>
      <div
        ref={cardRef}
        className="main-card fade-in cursor-link"
        style={{
          backgroundImage: isVisible ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={handleCardClick}
      >
        <div className="sub-card">
          <div className="card-content">
            <div className="main-heading-type">
              <div className="main-heading">{title}</div>
            </div>
            <div className="sub-heading-type">
              <div className="heading-type">{type}</div>
              <div className="heading-year">{year}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
