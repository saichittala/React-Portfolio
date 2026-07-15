import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFadeIn from './components/useFadeIn';
import GlassSurface from './components/GlassSurface';

const Card = ({
  title,
  type,
  year,
  image,
  link,
  openInNewTab = true,
  locked,
  confidential,
  onRequestLockPopup,
  password,
  onSummaryClick
}) => {
  useFadeIn();
  const navigate = useNavigate();
  const hasSummary = link === '#/Uggh' || link === '#/Opgh' || link === '#/lms-gh';

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
      { rootMargin: '0px 0px 200px 0px' } // start loading just before entering
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
      const isInternal = link.startsWith('#') || link.startsWith('/');
      if (isInternal) {
        let path = link;
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
        window.open(link, openInNewTab ? "_blank" : "_self");
      }
    }
  };

  const handleSummaryClick = (e) => {
    e.stopPropagation();
    if (onSummaryClick) {
      onSummaryClick({
        title,
        type,
        year,
        image,
        link,
        openInNewTab,
        locked,
        confidential,
        password
      });
    }
  };

  return (
    <div className='card-container' onClick={handleCardClick}>
      <div
        ref={cardRef}
        className="main-card fade-in cursor-link"
        style={{
          backgroundImage: isVisible ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Quick Summary Button (Liquid Glass) */}
        {hasSummary && (
          <button className="card-quick-summary-btn cursor-link" onClick={handleSummaryClick}>
            <GlassSurface
              width="auto"
              height="auto"
              borderRadius={100}
              distortionScale={-180}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              yChannel="B"
              className="quick-summary-btn-glass"
              contentStyle={{ padding: 0 }}
            >
              <div className="quick-summary-btn-inner">
                <span className="quick-summary-sparkle">✦</span>
                <span>Snapshot</span>
              </div>
            </GlassSurface>
          </button>
        )}

        {confidential && (
          <div
            className="confidential-badge"
            title="This project is under NDA. Happy to discuss it during the interview."
          >
            <img
              src="img/lock-1.svg"
              alt="lock"
              className="confidential-icon"
            />
            <span className="confidential-text">Confidential</span>
          </div>
        )}

        <div className="sub-card">
          <div className="card-content"></div>
        </div>
      </div>

      <div className='card-info df-g8'>
        <div className="card-title">{title}</div>
        <div className="card-year">{year}</div>
      </div>
    </div>
  );
};

export default React.memo(Card);
