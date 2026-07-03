import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BubbleButton from '../components/BubbleButton';
import { use } from 'react';
import LazyImage from '../components/LazyImage';
import ConfidentialGate from '../components/ConfidentialGate';


const Uggh = () => {

  // FullScrollFadeIn();
  // useFadeIn();
  // useScrollEffect();
  // ZoomOnScroll();
  const UgghRef = React.useRef(null);
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

  useEffect(() => {
    const section = document.getElementById('scroll-story-section');

    const videos = [
      document.querySelector('.scroll-video-1'),
      document.querySelector('.scroll-video-2'),
      document.querySelector('.scroll-video-3'),
      document.querySelector('.scroll-video-4'),
    ];

    const heading = document.getElementById('scroll-heading');
    const desc = document.getElementById('scroll-desc');

    const content = [
      {
        title: 'Low-light underground conditions.',
        desc: 'Operators rely on quick visibility in environments built entirely with artificial lighting.',
      },
      {
        title: 'Constant equipment vibration.',
        desc: 'Every interaction happens while machines are actively moving underground.',
      },
      {
        title: 'Heavy gloves. Limited precision.',
        desc: 'Touch interactions must work effortlessly under physically demanding conditions.',
      },
      {
        title: 'Designed for high-pressure decisions.',
        desc: 'Operators need clarity, speed, and confidence in every interaction.',
      },
    ];

    let currentScene = 0;
    let accumulatedScroll = 0;
    let locked = false;
    let completed = false;

    const SCROLL_PER_SCENE = 600;

    const updateScene = () => {
      videos.forEach((video, index) => {
        if (!video) return;

        video.style.opacity = index === currentScene ? '1' : '0';

        video.style.transform =
          index === currentScene
            ? 'scale(1)'
            : 'scale(1.08)';
      });

      if (heading && desc) {
        heading.innerText = content[currentScene].title;
        desc.innerText = content[currentScene].desc;
      }
    };

    const handleWheel = (e) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();

      const sectionActive =
        rect.top <= 0 &&
        rect.bottom > window.innerHeight;

      /*
        ACTIVATE LOCK
      */

      if ((sectionActive || locked) && !completed) {
        e.preventDefault();

        locked = true;

        accumulatedScroll += e.deltaY;

        /*
          NEXT SCENE
        */

        if (accumulatedScroll > SCROLL_PER_SCENE) {
          if (currentScene < 3) {
            currentScene += 1;
            updateScene();
          }

          accumulatedScroll = 0;
        }

        /*
          PREVIOUS SCENE
        */

        if (accumulatedScroll < -SCROLL_PER_SCENE) {
          if (currentScene > 0) {
            currentScene -= 1;
            updateScene();
          }

          accumulatedScroll = 0;
        }

        /*
          FINAL RELEASE
        */

        if (currentScene === 3 && e.deltaY > 0) {
          locked = false;
          completed = true;

          /*
            SMOOTH RELEASE
          */

          section.style.transition = 'height 0.8s ease';

          section.style.height = '100vh';
        }

        /*
          RELEASE TOP
        */

        if (currentScene === 0 && e.deltaY < 0) {
          locked = false;
        }
      }
    };

    updateScene();

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='cursor overflow-x-h'>

      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/img/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="Sai's Portfolio"
          content="/"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/img/logo.svg" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Sai Chittala Portfolio</title>
      </head>
      {/* <SmoothScrollProvider duration={1.2}> */}

      <main>
        <section ref={UgghRef}>
          <a href="https://www.figma.com/design/IHX8O0ZQrwEwOcPHjjZUFH/Uggh?node-id=0-1&t=tfbAj8cpIn9eWmee-1" target="_blank" rel="noopener noreferrer">
            <BubbleButton
              activationRef={UgghRef}
              text="Open Figma Design"
              showDelay={300}
              hideDelay={500}
              size={{
                small: 12,
                large: { width: 204, height: 52 }
              }}
              activateAt={isMobile ? -3.8 : -0.5}
              className="custom-bubble-class" >
              <img src="img/open-web.svg" alt="Arrow" />
            </BubbleButton>
          </a>
          <div className="full-bg">
            <div
              className="p-img-1 main-image bg-black"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="img/projects/gh_ug/cover.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" loading="lazy" className='fade-inn' />
              {/* <video
                autoPlay
                loop
                muted
                playsInline
                className="fade-inn"
                style={{ width: '100%', height: '100%' }}
              >
                <source src="img/projects/cf-promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>             */}
            </div>
            <div className="bg-main width-unset mobile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="pd-heading-div p-head-arrow">
                      <a className=" pd-main-heading">UG Operator App</a>
                      <img src="img/arrow-down.svg" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer arrow-down" />
                    </div>
                  </div>

                  <div className="project-breif-section">
                    <div className="project-breif-heading fade-inn">
                      <span className=''>01</span>
                      <span>Project Overview</span>
                    </div>
                    <div className="project-breif-main fade-inn">
                      <div className="pd-heading-sub-div">
                        <a className="fade-inn pd-main-heading-2    translate-text-up"> Project Type
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Product
                          Design</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2    translate-text-up">Timeline</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> 2026-2027
                        </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2    translate-text-up">Contributors</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Sai Chittala
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Monika Singh </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Gowtham Balthu </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2    translate-text-up">My Contribution</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">UX Research
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Product Strategy
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Information Architecture
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down">Visual Design
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Design Systems
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Prototyping & Testing
                        </a>
                      </div>
                    </div>
                    <div className="pd-main" >
                      <div className="   pd-content-main gap-72 margin-100">
                        <div className="content-div-main fade-inn width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">About
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn'>The UG Operator App is an operational workflow designed for underground mining operators to manage and complete daily mining activities more efficiently in challenging underground environments. The product redesign focused on simplifying complex workflows, reducing interaction effort, and improving operational usability through a minimal, high-clarity interface optimized for faster task completion and better on-ground efficiency.
                            </p>
                          </div>
                        </div>

                        {/* <div className="content-div-main fade-inn ">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up width-800 ">Before diving into the project, let’s step into the operator’s environment.
                          </a>
                          <p className='fade-inn width-800'>
                            From constant equipment vibration to low-light underground conditions, every interaction happens in motion. To better understand the challenges behind the redesign, here’s a glimpse into the real-world environment operators work in every day.
                          </p>
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="fade-inn"
                            style={{ width: '100%', height: '100%' }}
                          >
                            <source src="img/projects/gh_ug/end-userr.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div> */}
                        <div className="content-div-main fade-inn  width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Current Problems Identified
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>

                            <p className='fade-inn'>The existing tablet experience was not optimized for underground operational conditions. Smaller touch targets, dense interfaces, multi-step workflows, and limited visual hierarchy made interactions difficult inside constantly moving equipment. Operators were required to spend more time navigating the system, increasing workflow friction during critical operational tasks.
                            </p>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                {/* <ConfidentialGate
                > */}

                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>03</span>
                        <span className=''>Empathize</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Understanding the Operator's Reality</h2>
                        <p className='fade-inn'>Before proposing solutions, we needed to understand the environment in which the product was used. Unlike traditional enterprise applications used in offices, the UG Operator App supports operators working in underground mines—where low visibility, constant machine vibration, heavy protective gloves, and time-critical decisions are part of everyday operations.</p>
                        <p className='fade-inn'>In this context, every interaction carries a cost. Extra taps, unclear information, or small touch targets don't just slow users down—they interrupt operational workflows.</p>
                        <p className='fade-inn'>Rather than starting with the interface, we focused on understanding the people, the environment, and the operational constraints that shaped their experience.</p>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Research Activities</span>
                        <ul className='fade-inn medium-list'>
                          <li>Stakeholder workshops</li>
                          <li>Workflow analysis</li>
                          <li>Existing product audit</li>
                          <li>Contextual observation</li>
                          <li>User interviews with mining operators</li>
                          <li>Review of operational tasks and edge cases</li>
                        </ul>

                        <div className="image-group">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="fade-inn"
                          >
                            <source src="img/projects/gh_ug/end-userr.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <img src="img/projects/gh_ug/research-environment.webp" alt="Research Environment" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/operator-observation.webp" alt="Operator Observation" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/stakeholder-workshop.webp" alt="Stakeholder Workshop" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>04</span>
                        <span className=''>Define</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Identifying the Core Problems</h2>
                        <p className='fade-inn'>Research revealed that the challenge wasn't a lack of functionality—it was the growing complexity of the experience. As the product evolved, workflows became fragmented, interfaces accumulated unnecessary information, and navigation required more effort than the tasks themselves.</p>
                        <p className='fade-inn'>The opportunity was to redesign the experience around how operators actually work, rather than how the system was organized.</p>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Key Insights</span>
                        <ul className='fade-inn medium-list'>
                          <li>Operators struggled to locate primary actions quickly.</li>
                          <li>Navigation required unnecessary back-and-forth between screens.</li>
                          <li>Small touch targets reduced interaction confidence while wearing gloves.</li>
                          <li>Information hierarchy made critical actions difficult to identify.</li>
                          <li>Workflows prioritized system structure instead of operator goals.</li>
                        </ul>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Problem Statement</span>
                        <p className="fade-inn problem-blockquote">
                          How might we redesign the underground operator experience to reduce cognitive load, simplify navigation, and enable faster task completion in demanding mining environments?
                        </p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/affinity-mapping.webp" alt="Affinity Mapping" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/problem-statement.webp" alt="Problem Statement Diagram" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/journey-map.webp" alt="Journey Map" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>05</span>
                        <span className=''>Ideate</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Exploring Better Ways to Work</h2>
                        <p className='fade-inn'>Instead of redesigning individual screens, we reimagined the complete workflow. Every interaction was evaluated to determine whether it genuinely supported the operator's task or introduced unnecessary friction.</p>
                        <p className='fade-inn'>Multiple concepts were explored, compared, and refined before converging on a simplified interaction model.</p>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Design Principles</span>
                        <ul className='fade-inn medium-list'>
                          <li>Design for glanceability</li>
                          <li>Prioritize one primary action per screen</li>
                          <li>Reduce navigation depth</li>
                          <li>Increase touch accessibility</li>
                          <li>Surface only the most relevant information</li>
                          <li>Maintain consistency across workflows</li>
                        </ul>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Exploration</span>
                        <p className='fade-inn'>Includes early sketches, user flows, information architecture, wireframes, and navigation concepts.</p>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/early-sketches.webp" alt="Early Sketches" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/user-flow.webp" alt="User Flow" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/information-architecture.webp" alt="Information Architecture" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/wireframes.webp" alt="Wireframes" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>06</span>
                        <span className=''>Prototype</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Bringing the Experience to Life</h2>
                        <p className='fade-inn'>Low-fidelity concepts quickly evolved into interactive prototypes that simulated real operational workflows. The objective wasn't simply to validate screens—it was to validate the speed, clarity, and efficiency of completing everyday mining tasks.</p>
                        <p className='fade-inn'>Components were standardized through a shared design system to ensure consistency across the product ecosystem.</p>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Focus Areas</span>
                        <ul className='fade-inn medium-list'>
                          <li>Large touch targets</li>
                          <li>Simplified layouts</li>
                          <li>Progressive disclosure</li>
                          <li>Consistent component behavior</li>
                          <li>Dark interface optimized for underground conditions</li>
                        </ul>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/prototype-iterations.webp" alt="Prototype Iterations" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/design-system.webp" alt="Design System" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/component-library.webp" alt="Component Library" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/high-fidelity-ui.webp" alt="High Fidelity UI" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>07</span>
                        <span className=''>Test & Iterate</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Refining Through Feedback</h2>
                        <p className='fade-inn'>Interactive prototypes were reviewed with stakeholders and internal product teams to evaluate workflow efficiency, usability, and information clarity. Feedback from each review informed iterative improvements, allowing the experience to evolve before implementation.</p>
                        <p className='fade-inn'>Rather than validating aesthetics, each iteration focused on reducing friction and improving operator confidence during task execution.</p>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Improvements Across Iterations</span>

                        <div className="fade-inn table-container">
                          <table className="medium-table">
                            <thead>
                              <tr>
                                <th>Challenge</th>
                                <th>Improvement</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Small touch targets</td>
                                <td>Larger buttons with better spacing</td>
                              </tr>
                              <tr>
                                <td>Complex navigation</td>
                                <td>Fewer steps and clearer pathways</td>
                              </tr>
                              <tr>
                                <td>Dense interfaces</td>
                                <td>Cleaner layouts with improved hierarchy</td>
                              </tr>
                              <tr>
                                <td>Inconsistent patterns</td>
                                <td>Standardized UI components</td>
                              </tr>
                              <tr>
                                <td>Information overload</td>
                                <td>Progressive disclosure</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="image-group">
                          <ReactBeforeSliderComponent className='fade-inn'
                            firstImage={{ "imageUrl": 'img/projects/gh_ug/before-after-slider-before.webp' }}
                            secondImage={{ "imageUrl": 'img/projects/gh_ug/before-after-slider-after.webp' }}
                          />
                          <img src="img/projects/gh_ug/iteration-1.webp" alt="Iteration 1" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/iteration-2.webp" alt="Iteration 2" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/feedback-session.webp" alt="Feedback Session" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>08</span>
                        <span className=''>Final Outcome</span>
                      </div>
                      <div className="content-div-main fade-inn width-800 medium-case-study">
                        <h2 className="fade-inn section-heading translate-text-up">Operational Redesign Success</h2>
                        <p className='fade-inn'>The redesign transformed the UG Operator App into a more focused and intuitive operational tool. By simplifying workflows, improving accessibility, and reducing unnecessary cognitive effort, the product better supports operators working in complex underground environments.</p>
                        <p className='fade-inn'>Rather than adding new features, the redesign concentrated on making existing tasks faster, clearer, and more reliable.</p>

                        <span className="fade-inn section-subtitle-italic translate-text-up">Outcomes</span>
                        <ul className='fade-inn medium-list'>
                          <li>Streamlined task completion</li>
                          <li>Reduced navigation complexity</li>
                          <li>Improved touch accessibility</li>
                          <li>Better visual hierarchy</li>
                          <li>Consistent design language</li>
                          <li>More intuitive workflows</li>
                        </ul>

                        <div className="image-group">
                          <img src="img/projects/gh_ug/final-dashboard.webp" alt="Final Dashboard" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/final-workflow.webp" alt="Final Workflow" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/final-screens.webp" alt="Final Screens" className="fade-inn" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="thankyou-content-heading fade-inn cursor-text">
                        Thank you for viewing.
                      </div>
                    </div>
                  </div>
                </div>
                {/* </ConfidentialGate> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* </SmoothScrollProvider> */}
      <Footer />
    </div>
  );
}

export default Uggh;
