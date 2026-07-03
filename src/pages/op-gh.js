import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import BubbleButton from '../components/BubbleButton';

const Opgh = () => {
  const OpghRef = React.useRef(null);
  const [isMobile] = useState(window.innerWidth <= 674);

  useEffect(() => {
    const heading = document.querySelector('.pd-main-heading, .pd-main-heading-2');
    if (!heading) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollY / maxScroll, 1);
      const intensity = scrollPercent * 100;

      heading.style.textShadow = `
        rgba(0, 0, 0, 0.25) 0px 4px 4px,
        rgba(255, 255, 255, ${0.2 + scrollPercent * 0.8}) 0px 4px ${100 + intensity}px,
        rgba(255, 255, 255, ${0.2 + scrollPercent * 0.8}) 0px 4px ${40 + intensity * 0.5}px,
        rgba(255, 255, 255, ${0.2 + scrollPercent * 0.8}) 0px 4px ${26 + intensity * 0.3}px,
        rgba(255, 255, 255, ${0.2 + scrollPercent * 0.8}) 0px 0px ${10 + intensity * 0.2}px
      `;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='cursor overflow-x-h'>
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/img/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="Sai's Portfolio" content="/" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/img/logo.svg" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Level 5 Haul Truck Operator App | Sai Chittala Portfolio</title>
      </head>

      <main>
        <section ref={OpghRef}>
          <div className="full-bg">
            <div
              className="p-img-1 main-image bg-black"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="img/projects/gh-op/cover.png" alt="Level 5 Haul Truck Operator App Cover" loading="lazy" className='fade-inn' />
            </div>

            <div className="bg-main width-unset mobile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="pd-heading-div p-head-arrow">
                      <a className="pd-main-heading">Haul Truck Operator App</a>
                      <img src="img/arrow-down.svg" alt="arrow-down" />
                    </div>
                  </div>

                  <div className="project-breif-section">
                    <div className="project-breif-heading fade-inn">
                      <span className=''>01</span>
                      <span>Project Overview</span>
                    </div>

                    <div className="project-breif-main fade-inn">
                      <div className="pd-heading-sub-div">
                        <a className="fade-inn pd-main-heading-2 translate-text-up">Project Type</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Product Design</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2 translate-text-up">Timeline</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">2025-2026</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2 translate-text-up">Contributors</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Sai Chittala</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Monika Singh</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Gowtham Balthu</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2 translate-text-up">My Contribution</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">UX Research</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Product Strategy</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Information Architecture</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Visual Design</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Design Systems</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Prototyping & Testing</a>
                      </div>
                    </div>

                    <div className="pd-main">
                      <div className="pd-content-main gap-72 margin-100">
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">About</h2>
                          <p className='fade-inn'>The Level 5 Haul Truck Operator App is a tablet application designed for operators supervising autonomous haul truck operations in open-pit mines. The redesign focused on improving operational awareness, simplifying complex workflows, and helping operators quickly understand the current state of each truck throughout the haul cycle.</p>
                        </div>

                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Current Problems Identified</h2>
                          <p className='fade-inn'>The existing experience presented large amounts of operational data without clear prioritization, making it difficult for operators to quickly understand truck status and respond efficiently. Navigation required multiple interactions, and the haul cycle lacked a clear visual representation, increasing cognitive effort during monitoring.</p>

                          <div className="image-group">
                            <img src="img/projects/gh_ug/problem-overview.webp" alt="Current Problems Overview" className="fade-inn" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>02</span>
                        <span className=''>Empathize</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Understanding the Haul Cycle</h2>
                        <p className='fade-inn'>Before redesigning the interface, we mapped the complete autonomous haul cycle to understand what information operators need at every stage. This helped us identify opportunities to improve visibility, reduce cognitive load, and create a more intuitive monitoring experience.</p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/haul-cycle.webp" alt="Haul Cycle Map" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/operator-environment.webp" alt="Operator Environment" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>03</span>
                        <span className=''>Define</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Key Challenges</h2>
                        <ul className='fade-inn medium-list'>
                          <li>Truck status wasn't immediately visible.</li>
                          <li>Critical operational information lacked hierarchy.</li>
                          <li>Navigation interrupted monitoring workflows.</li>
                          <li>Operators had to interpret system data instead of operational status.</li>
                        </ul>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Problem Statement</span>
                        <p className="fade-inn problem-blockquote">
                          How might we design a tablet experience that enables operators to monitor autonomous haul trucks, understand operational states instantly, and respond confidently throughout the haul cycle?
                        </p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/problem-statement.webp" alt="Problem Statement" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>04</span>
                        <span className=''>Ideate</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Designing Around the Haul Cycle</h2>
                        <p className='fade-inn'>Instead of organizing the interface around system functions, the redesign followed the truck's operational journey—from Traveling to Trip Completion. Information was prioritized based on operator needs, reducing unnecessary interactions and improving situational awareness.</p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/user-flow.webp" alt="User Flow" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/wireframes.webp" alt="Wireframes" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>05</span>
                        <span className=''>Prototype</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Validation Through Prototyping</h2>
                        <p className='fade-inn'>Interactive prototypes were created to validate workflow efficiency, improve information hierarchy, and ensure operators could quickly identify truck status under real operational conditions.</p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/prototype.webp" alt="Interactive Prototype" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/design-system.webp" alt="Design System Components" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>06</span>
                        <span className=''>Test & Iterate</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Refining Through Stakeholder Reviews</h2>
                        <p className='fade-inn'>Feedback from product stakeholders and iterative reviews helped refine navigation, improve visual hierarchy, simplify operational states, and increase overall usability before development.</p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/before-after.webp" alt="Before and After Comparison" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/iterations.webp" alt="Iterative Improvements" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>07</span>
                        <span className=''>Outcome</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Redesign Summary</h2>
                        <p className='fade-inn'>The redesigned Level 5 Haul Truck Operator App provides operators with a clearer understanding of autonomous haul operations through simplified workflows, improved visibility of truck states, and a more intuitive tablet experience optimized for open-pit mining environments.</p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/final-dashboard.webp" alt="Final Dashboard Redesign" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/final-screens.webp" alt="Final Screens Overview" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main padding-unset">
                    <div className="project-details">
                      <div className="thankyou-content-heading fade-inn cursor-text">
                        Thank you for viewing.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Opgh;
