import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import BubbleButton from '../components/BubbleButton';
import ConfidentialGate from '../components/ConfidentialGate';
import useScrollReveal from '../components/useScrollReveal';
import ProjectNavigation from '../components/ProjectNavigation';

const Dd = () => {
  useScrollReveal();
  const DdRef = React.useRef(null);
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
        <title>Dynamic Dispatch | Sai Chittala Portfolio</title>
      </head>

      <main>
        <section ref={DdRef}>
          <div className="full-bg">
            <div
              className="p-img-1 main-image bg-black"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="img/projects/dd/cover.webp" alt="Dynamic Dispatch Cover" loading="lazy" className='fade-inn' />
            </div>

            <div className="bg-main width-unset mobile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="pd-heading-div p-head-arrow">
                      <a className="pd-main-heading">Dynamic Dispatch</a>
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
                        <a className="fade-inn pd-main-heading-2 translate-text-up">Platform</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Web Dashboard</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2 translate-text-up">Timeline</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">2025-2026</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2 translate-text-up">Contributors</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Sai Chittala</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2 translate-text-up">My Contribution</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Senior Product Designer</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">UX Research & Strategy</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Information Architecture</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Visual Design</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Design Systems & Prototyping</a>
                      </div>
                    </div>

                    <div className="pd-main">
                      <div className="pd-content-main gap-72 margin-100">
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Overview</h2>
                          <p className='fade-inn'>Dynamic Dispatch is a centralized operations dashboard that helps mine dispatchers monitor loading sites, dump sites, truck queues, and production throughput in real time. The interface provides a complete view of the hauling circuit, enabling faster operational decisions and improving fleet coordination.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ConfidentialGate>
                  <div className="bg-full margin-unset">
                    <div className="bg-main padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>02</span>
                          <span className=''>The Problem</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Fragmented Operations</h2>
                          <p className='fade-inn'>Dispatchers relied on fragmented operational data, making it difficult to quickly identify queue build-up, equipment imbalance, and production bottlenecks. Monitoring multiple loading and dumping locations simultaneously increased cognitive load and slowed decision-making.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-full margin-unset">
                    <div className="bg-main padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>03</span>
                          <span className=''>My Goal</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Dispatcher Enablement</h2>
                          <p className='fade-inn'>Design a single dashboard that enables dispatchers to execute daily tasks without friction, focus on critical priorities, and keep operations running continuously.</p>
                          <ul className='fade-inn medium-list'>
                            <li>Monitor the complete hauling circuit in one view.</li>
                            <li>Track truck queues and loader utilization.</li>
                            <li>Visualize production throughput.</li>
                            <li>Identify operational bottlenecks instantly.</li>
                            <li>Support faster dispatch decisions.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-full margin-unset">
                    <div className="bg-main padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>04</span>
                          <span className=''>What I Designed</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Centralized Hauling Dashboard</h2>
                          <p className='fade-inn'>Every feature was designed to minimize clicks and maximize situational awareness. The dashboard integrates real-time telemetry, queue status, and performance analytics into a unified display.</p>

                          <span className="fade-inn section-subtitle-italic translate-text-up">Unified Operations Dashboard</span>
                          <p className='fade-inn'>Instead of navigating across multiple screens, dispatchers can monitor the entire hauling operation from a single interface.</p>
                          <div className="image-group">
                             <div>
                               <span>Initial Concept Sketches</span>
                               <div className="reveal">
                                 <div className="image-wrap">
                                   <img src="img/projects/dd/sketches.webp" alt="Production Insights and Status Indicators" loading="lazy" />
                                 </div>
                               </div>
                             </div>
                           </div>

                          <span className="fade-inn section-subtitle-italic translate-text-up">Real-Time Queue Monitoring</span>
                          <p className='fade-inn'>Visual truck queues help identify congestion at loading and dumping sites, allowing dispatchers to rebalance fleet allocation quickly.</p>
                          {/* <div className="image-group">
                            <img src="img/projects/dd/queues.webp" alt="Real-Time Queue Monitoring" className="fade-inn" loading="lazy" />
                          </div> */}

                          <span className="fade-inn section-subtitle-italic translate-text-up">Production Insights & Status Indicators</span>
                          <p className='fade-inn'>Integrated TPH (Tons Per Hour) and Load Mix charts provide live production metrics without leaving the dashboard, while color-coded load states (Ideal, Underload, Overload) enable operators to detect issues at a glance and respond proactively.</p>
                          <div className="image-group">
                             <div>
                               <span>Unified Dashboard UI</span>
                               <div className="reveal">
                                 <div className="image-wrap">
                                   <img src="img/projects/dd/dashboard.webp" alt="Unified Operations Dashboard" loading="lazy" />
                                 </div>
                               </div>
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
                          <span className=''>05</span>
                          <span className=''>Design Highlights</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Optimized Dashboard Features</h2>
                          <ul className='fade-inn medium-list'>
                            <li>Single-screen operational overview</li>
                            <li>Clear visual hierarchy for rapid scanning</li>
                            <li>Side-by-side comparison of multiple circuits</li>
                            <li>Color-coded operational status</li>
                            <li>Compact charts for production monitoring</li>
                            <li>Optimized for high-frequency decision making</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-full margin-unset">
                    <div className="bg-main padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>06</span>
                          <span className=''>Outcome</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Centralization Success</h2>
                          <p className='fade-inn'>The redesigned dashboard simplifies fleet monitoring by consolidating critical operational data into one workspace. It enables dispatchers to detect bottlenecks faster, monitor production more effectively, and make informed dispatch decisions with minimal navigation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ProjectNavigation 
                    figmaLink="https://www.figma.com/design/ypimiOonZc3MIqO7osLZOE/Dynamic-Dispatch?node-id=816-83&t=BMJCOKxUpDfmhFX7-1"
                    previousLink="/lms-gh"
                    nextLink="/customfurnish"
                  />
                </ConfidentialGate>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dd;
