import React from 'react';
import { Link } from 'react-router-dom';

function ProjectNavigation({ figmaLink, linkLabel = "here is the figma link", previousLink, nextLink }) {
  return (
    <div className="bg-full bg-white margin-unset">
      <div className="bg-main padding-unset">
        <div className="project-details">
          <div className="thankyou-footer-container fade-inn">
            
            {/* Left side: Thank you & link */}
            <div className="thankyou-left">
              <span className="thankyou-title">Thank you for viewing.</span>
              <a 
                href={figmaLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="thankyou-figma-link"
              >
                {linkLabel}
              </a>
            </div>

            {/* Right side: Navigation links */}
            <div className="thankyou-right-nav">
              <div className="thankyou-nav-list">
                {previousLink ? (
                  <Link to={previousLink} className="thankyou-nav-item">
                    <span>Previous Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </Link>
                ) : (
                  <div className="thankyou-nav-item thankyou-nav-item-disabled">
                    <span>Previous Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </div>
                )}

                {nextLink ? (
                  <Link to={nextLink} className="thankyou-nav-item">
                    <span>Next Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </Link>
                ) : (
                  <div className="thankyou-nav-item thankyou-nav-item-disabled">
                    <span>Next Project</span>
                    <span className="thankyou-nav-arrow">→</span>
                  </div>
                )}

                <Link to="/contact" className="thankyou-nav-item">
                  <span>Contact</span>
                  <span className="thankyou-nav-arrow">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectNavigation;
