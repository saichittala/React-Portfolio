import React from 'react';

function ProjectImpact({ sectionNumber = "08", metrics = [] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="bg-full margin-unset">
      <div className="bg-main padding-unset">
        <div className="project-details padding-top-unset">
          <div className="project-breif-heading width-800 fade-inn">
            <span>{sectionNumber}</span>
            <span>Impact</span>
          </div>
          <div className="content-div-main fade-inn width-800 medium-case-study" style={{ paddingBottom: 0 }}>
            <div className="impact-container">
              {metrics.map((metric, index) => (
                <div key={index} className="impact-item">
                  <div className="impact-number-row">
                    <span className="impact-number">{metric.number}</span>
                    <span className="impact-unit">{metric.unit}</span>
                  </div>
                  <div className="impact-description">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectImpact;
