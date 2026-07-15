import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import GlassSurface from './GlassSurface';
import { projectSummaries } from '../utils/projectSummaries';
import { X } from 'lucide-react';
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
            <h2 className="summary-project-title">{project.title}</h2>
            
            <div className="project-summary-header-right">
              {/* See Full Case Study button (Liquid Glass style) */}
              <button 
                className="btn-case-study-glass cursor-link"
                onClick={() => onOpenCaseStudy(project)}
              >
                <GlassSurface
                  width="auto"
                  height="auto"
                  borderRadius={100}
                  className="btn-case-study-glass-inner"
                  contentStyle={{ padding: '10px 22px', display: 'flex', gap: '8px', alignItems: 'center' }}
                >
                  <span className="case-study-btn-text">See Full Case Study</span>
                </GlassSurface>
              </button>

              <button className="summary-close-btn cursor-link" onClick={onClose}>
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="project-summary-body">
            
            {/* Top Section: Image & Metrics Side-by-Side */}
            <div className="summary-top-section">
              <div className="summary-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="summary-project-img" 
                />
              </div>

              {/* Vertical Metrics Column */}
              <div className="summary-metrics-col">
                {summary.metrics && summary.metrics.length > 0 ? (
                  summary.metrics.map((metric, i) => (
                    <div key={i} className="summary-metric-item">
                      <div className="summary-metric-value-row">
                        <span className="summary-metric-number">{metric.number}</span>
                        <span className="summary-metric-unit">{metric.unit}</span>
                      </div>
                      <p className="summary-metric-desc">{metric.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="summary-section-text">Metrics details are confidential or pending release.</p>
                )}
              </div>
            </div>

            {/* Bottom Section: Cards */}
            <div className="summary-bottom-section">
              {/* About the Project Card (Full Width) */}
              <div className="summary-card about-card">
                <h3 className="summary-card-title">About the Project</h3>
                <p className="summary-card-text">{summary.about}</p>
              </div>

              {/* Problem & Solution Cards (Side-by-Side) */}
              <div className="summary-cards-row">
                <div className="summary-card half-card">
                  <h3 className="summary-card-title">The Problem</h3>
                  <p className="summary-card-text">{summary.problem}</p>
                </div>
                
                <div className="summary-card half-card">
                  <h3 className="summary-card-title">The Solution</h3>
                  <p className="summary-card-text">{summary.solution}</p>
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
