import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import GlassSurface from './GlassSurface';
import { projectSummaries } from '../utils/projectSummaries';
import { X, ExternalLink } from 'lucide-react';
import './ProjectSummaryModal.css';

function ProjectSummaryModal({ isVisible, onClose, project, onOpenCaseStudy }) {
  // Prevent background scrolling when popup is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, [isVisible]);

  if (!isVisible || !project) return null;

  const summary = projectSummaries[project.title] || {
    about: "No summary details available for this project.",
    problem: "Details coming soon.",
    solution: "Details coming soon.",
    metrics: []
  };

  const modalElement = (
    <div className="project-summary-overlay">
      <GlassSurface
        className="project-summary-card"
        borderRadius={24}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        yChannel="B"
        width="90vw"
        height="85vh"
        contentStyle={{ padding: 0 }}
      >
        <div className="project-summary-container">
          {/* Header */}
          <div className="project-summary-header">
            <div className="project-summary-header-left">
              <span className="summary-project-type">{project.type}</span>
              <h2 className="summary-project-title">{project.title}</h2>
            </div>
            
            <div className="project-summary-header-right">
              {/* See Full Case Study button (Liquid Glass style) */}
              <button 
                className="btn-case-study-glass cursor-link"
                onClick={() => onOpenCaseStudy(project)}
              >
                <GlassSurface
                  width="auto"
                  height="auto"
                  borderRadius={12}
                  className="btn-case-study-glass-inner"
                  contentStyle={{ padding: '12px 20px', display: 'flex', gap: '8px', alignItems: 'center' }}
                >
                  <span className="case-study-btn-text">See Full Case Study</span>
                  <ExternalLink size={16} />
                </GlassSurface>
              </button>

              <button className="summary-close-btn cursor-link" onClick={onClose}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="project-summary-body">
            <div className="project-summary-columns">
              
              {/* Left Column - Details */}
              <div className="project-summary-details-col">
                <div className="summary-section">
                  <h3 className="summary-section-title">About the Project</h3>
                  <p className="summary-section-text">{summary.about}</p>
                </div>
                
                <div className="summary-section">
                  <h3 className="summary-section-title">The Problem</h3>
                  <p className="summary-section-text">{summary.problem}</p>
                </div>

                <div className="summary-section">
                  <h3 className="summary-section-title">The Solution</h3>
                  <p className="summary-section-text">{summary.solution}</p>
                </div>
              </div>

              {/* Right Column - Image & Impact */}
              <div className="project-summary-visual-col">
                <div className="summary-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="summary-project-img" 
                  />
                </div>

                <div className="summary-impact-section">
                  <h3 className="summary-section-title font-small">Impact</h3>
                  <div className="summary-impact-row">
                    {summary.metrics && summary.metrics.length > 0 ? (
                      summary.metrics.map((metric, i) => (
                        <div key={i} className="summary-impact-card">
                          <span className="summary-impact-num">{metric.number}</span>
                          <span className="summary-impact-unit">{metric.unit}</span>
                          <p className="summary-impact-desc">{metric.description}</p>
                        </div>
                      ))
                    ) : (
                      <p className="summary-section-text">Metrics details are confidential or pending release.</p>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </GlassSurface>
    </div>
  );

  return createPortal(modalElement, document.body);
}

export default ProjectSummaryModal;
