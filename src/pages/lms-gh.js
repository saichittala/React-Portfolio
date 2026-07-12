import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import BubbleButton from '../components/BubbleButton';
import ConfidentialGate from '../components/ConfidentialGate';
import 'img-comparison-slider';
import 'img-comparison-slider/dist/styles.css';
import useScrollReveal from '../components/useScrollReveal';
import ProjectNavigation from '../components/ProjectNavigation';
import ProjectImpact from '../components/ProjectImpact';

const Lmsgh = () => {
  useScrollReveal();
  const lmsghRef = React.useRef(null);
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
        <title>GroundHog LMS | Sai Chittala Portfolio</title>
      </head>

      <main>
        <section ref={lmsghRef}>
          <div className="full-bg">
            <div
              className="p-img-1 main-image bg-black"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="img/projects/gh-lms/cover.webp" alt="GroundHog LMS Cover" loading="lazy" className='fade-inn' />
            </div>

            <div className="bg-main width-unset mo  bile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="pd-heading-div p-head-arrow">
                      <a className="pd-main-heading">GroundHog LMS</a>
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
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Boyapati Ravi Kumar</a>
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
                          <p className='fade-inn'>GroundHog LMS is a learning platform that helps mining operators, supervisors, and industry professionals build the knowledge required to work safely and efficiently in mining environments.</p>
                          <p className='fade-inn'>The platform provides structured learning paths, safety training, assessments, certifications, and progress tracking to help learners develop operational skills before entering real mining sites.</p>
                          <p className='fade-inn'>As the platform evolved from an enterprise solution into a commercial SaaS product, the experience needed to support self-service onboarding, free trials, subscription management, and a simplified learning journey for new users.</p>

                          <div className="image-group">
                            {/* <img src="img/projects/lmsgh/overview.webp" alt="LMS Overview" className="fade-inn" loading="lazy" /> */}
                            <div>
                              <span>Dashboard Overview</span>
                              <img src="img/projects/gh-lms/dashboard.webp" alt="Dashboard Overview" className="fade-inn" loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ConfidentialGate>

                  <div className="bg-full margin-unset">
                    <div className="bg-main padding-unset">
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>02</span>
                          <span className=''>Challenges</span>
                        </div>
                        <span className="fade-inn section-subtitle-italic translate-text-up">From Enterprise to Self-Serve</span>
                        <p className='fade-inn'>The existing LMS was designed for enterprise customers where administrators manually created user accounts and managed access internally.</p>
                        <p className='fade-inn'>To launch the platform commercially, users needed to discover the product, create an account independently, start a free trial, explore available courses, and subscribe without assistance.</p>
                        <p className='fade-inn'>The challenge was to design an onboarding experience that reduced friction while encouraging users to experience the value of the platform before purchasing.</p>

                        <div className="image-group">
                          <div>
                            <span>Existing Onboarding</span>
                            <div className="reveal">
                              <div className="image-wrap">
                                <img src="img/projects/gh-lms/onboarding.webp" alt="Onboarding Challenge" loading="lazy" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <span>Existing Flow Map</span>
                            <div className="reveal">
                              <div className="image-wrap">
                                <img src="img/projects/gh-lms/existing-uf.webp" alt="Existing Flow Map" loading="lazy" />
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
                          <span className=''>03</span>
                          <span className=''>Empathize</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Understanding New Learners</h2>
                          <p className='fade-inn'>Unlike enterprise users who received training through their organization, self-serve users were completely new to the platform.</p>
                          <p className='fade-inn'>They needed confidence that the platform would help them learn mining fundamentals, complete certifications, and prepare for real operational environments.</p>

                          <span className="fade-inn section-subtitle-italic translate-text-up">Research Focus</span>
                          <ul className='fade-inn medium-list'>
                            <li>First-time onboarding</li>
                            <li>Learning motivation</li>
                            <li>Course discovery</li>
                            <li>Subscription decision</li>
                            <li>Certification journey</li>
                            <li>Dashboard usability</li>
                          </ul>

                          <div className="image-group">
                            <div>
                              <span>User Persona</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh-lms/user-persona.webp" alt="User Persona" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            {/* <div>
                            <span>Learner Journey Map</span>
                            <img src="img/projects/gh-lms/learner-journey-map.webp" alt="Learner Journey Map" className="fade-inn" loading="lazy" />
                          </div> */}
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
                          <span className=''>Define</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Key Challenges</h2>
                          <ul className='fade-inn medium-list'>
                            <li>Complex onboarding</li>
                            <li>No clear product value before signup</li>
                            <li>Limited visibility into learning progress</li>
                            <li>Subscription journey wasn't integrated</li>
                            <li>Dashboard overwhelmed new users</li>
                          </ul>

                          <span className="fade-inn section-subtitle-italic translate-text-up">Problem Statement</span>
                          <p className="fade-inn problem-blockquote">
                            How might we design a self-serve learning platform that helps new users quickly understand the value of mining education while creating a seamless journey from signup to paid subscription?
                          </p>

                          <div className="image-group">
                            {/* <div>
                              <span>Problem Statement Diagram</span>
                              <img src="img/projects/lmsgh/problem-statement.webp" alt="Problem Statement Diagram" className="fade-inn" loading="lazy" />
                            </div> */}
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
                          <span className=''>Ideate</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Designing a Frictionless Learning Journey</h2>
                          <p className='fade-inn'>Instead of treating onboarding, learning, and purchasing as separate experiences, the redesign connected them into one continuous journey.</p>
                          <p className='fade-inn'>The new experience guides users from account creation to course enrollment, certification progress, and subscription upgrades without interrupting their learning flow.</p>

                          <span className="fade-inn section-subtitle-italic translate-text-up">New User Journey</span>
                          <ul className='fade-inn medium-list'>
                            <li>Landing Page</li>
                            <li>Sign Up</li>
                            <li>Create Password</li>
                            <li>7-Day Trial</li>
                            <li>Dashboard</li>
                            <li>Browse Courses</li>
                            <li>Start Learning</li>
                            <li>Earn Certificates</li>
                            <li>Upgrade Plan</li>
                          </ul>

                          <div className="image-group">
                            <div>
                              <span>Proposed User Flow</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh-lms/user-flow.webp" alt="User Flow Journey" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            {/* <div>
                            <span>Wireframe Sketches</span>
                            <img src="img/projects/lmsgh/wireframes.webp" alt="Wireframes" className="fade-inn" loading="lazy" />
                          </div> */}
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
                          <span className=''>Prototype</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Bringing Concepts to Life</h2>
                          <p className='fade-inn'>Interactive prototypes explored different onboarding patterns, dashboard layouts, pricing models, and course discovery experiences.</p>
                          <p className='fade-inn'>Special attention was given to reducing signup friction while making premium features easy to understand during the free trial.</p>
                        </div>

                        {/* Figma Prototype Embed */}


                        <div className="content-div-main fade-inn width-800 medium-case-study" style={{ marginTop: '48px' }}>
                          <div className="image-group">
                            <div>
                              <span>Signup Flow Prototype</span>
                              <div className="figma-prototype-wrapper fade-inn">
                                <div className="figma-prototype-container">
                                  <iframe
                                    title="LMS Signup Flow Figma Prototype"
                                    src="https://embed.figma.com/proto/Ux8vi0Menw1kiedzrgJnTl/LMS-Web?node-id=349-10334&viewport=1152%2C-1001%2C0.25&scaling=scale-down&content-scaling=fixed&starting-point-node-id=349%3A10334&page-id=227%3A5554&embed-host=share&show-proto-sidebar=0&hide-ui=1"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Signin Flow Prototype</span>
                              <div className="figma-prototype-wrapper fade-inn">
                                <div className="figma-prototype-container">
                                  <iframe
                                    title="LMS Signin Flow Figma Prototype"
                                    src="https://embed.figma.com/proto/Ux8vi0Menw1kiedzrgJnTl/LMS-Web?node-id=302-13788&viewport=1152%2C-1001%2C0.25&scaling=scale-down&content-scaling=fixed&starting-point-node-id=302%3A13788&page-id=227%3A5554&embed-host=share&show-proto-sidebar=0&hide-ui=1"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                            {/* <div>
                            <span>Pricing Model Prototype</span>
                            <img src="img/projects/lmsgh/pricing.webp" alt="Pricing Model Prototype" className="fade-inn" loading="lazy" />
                          </div> */}
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
                          <span className=''>Test & Iterate</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Simplifying Workflows</h2>
                          <p className='fade-inn'>Through multiple design iterations, the onboarding flow was simplified, the dashboard reorganized, and pricing made easier to understand.</p>
                          <p className='fade-inn'>The final experience reduced unnecessary decisions and helped users reach their first learning activity much faster.</p>

                          <div className="image-group">
                            <div>
                              <span>Before & After Comparison</span>
                              <div className="slider-container-relative">
                                <div className="slider-badge before-badge">Before</div>
                                <div className="slider-badge after-badge">After</div>
                                <img-comparison-slider class="fade-inn" hover="true">
                                  <img slot="first" src="img/projects/gh-lms/before-lms.webp" alt="Before redesign" />
                                  <img slot="second" src="img/projects/gh-lms/after-lms.webp" alt="After redesign" />
                                  <div slot="handle" className="custom-slider-handle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-left-right">
                                      <path d="m9 7-5 5 5 5" />
                                      <path d="m15 7 5 5-5 5" />
                                    </svg>
                                  </div>
                                </img-comparison-slider>
                              </div>
                            </div>
                            {/* <div>
                            <span>Iterative Screen Revisions</span>
                            <img src="img/projects/lmsgh/iterations.webp" alt="Iterative Screen Revisions" className="fade-inn" loading="lazy" />
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-full margin-unset">
                    <div className="bg-main padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>08</span>
                          <span className=''>Final Outcome</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Self-Service Experience Launched</h2>
                          <p className='fade-inn'>The redesigned LMS delivers a modern self-service learning experience that supports learners from their first visit through certification.</p>
                          <p className='fade-inn'>The platform now provides a structured onboarding journey, simplified navigation, integrated subscription flow, and a dashboard focused on helping users continue learning with confidence.</p>

                          <div className="image-group">
                            <div>
                              <span>Final Dashboard Design</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh-lms/final-screens.webp" alt="Final Dashboard View" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            {/* <div>
                              <span>Course Library View</span>
                              <img src="img/projects/lmsgh/course-library.webp" alt="Course Library view" className="fade-inn" loading="lazy" />
                            </div>
                            <div>
                              <span>Safety Certificate View</span>
                              <img src="img/projects/lmsgh/certificate.webp" alt="Mining Safety Certificate View" className="fade-inn" loading="lazy" />
                            </div>
                            <div>
                              <span>SaaS Pricing Page View</span>
                              <img src="img/projects/lmsgh/pricing-page.webp" alt="SaaS Pricing Page View" className="fade-inn" loading="lazy" />
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ProjectImpact 
                    sectionNumber="09"
                    metrics={[
                      { number: "3x", unit: "increase", description: "safety course registration growth" },
                      { number: "50%", unit: "faster", description: "onboarding setup completion time" },
                      { number: "98%", unit: "completion", description: "compliance certification course rate" }
                    ]}
                  />

                  <ProjectNavigation 
                    figmaLink="https://www.figma.com/design/Ux8vi0Menw1kiedzrgJnTl/LMS-Web?node-id=227-5554&t=gOpLmKvhNfBSrPQa-1"
                    previousLink="/Opgh"
                    nextLink="/dd"
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
}

export default Lmsgh;
