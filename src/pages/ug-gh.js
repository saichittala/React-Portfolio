import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import 'img-comparison-slider';
import 'img-comparison-slider/dist/styles.css';
import BubbleButton from '../components/BubbleButton';
import { use } from 'react';
import LazyImage from '../components/LazyImage';
import ConfidentialGate from '../components/ConfidentialGate';
import useScrollReveal from '../components/useScrollReveal';
import ProjectNavigation from '../components/ProjectNavigation';
import ProjectImpact from '../components/ProjectImpact';


const Uggh = () => {
  useScrollReveal();

  // FullScrollFadeIn();
  // useFadeIn();
  // useScrollEffect();
  // ZoomOnScroll();
  const UgghRef = React.useRef(null);
  const [isMobile] = useState(window.innerWidth <= 674);
  const [isSummaryPopupVisible, setIsSummaryPopupVisible] = useState(false);
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
          <BubbleButton
            activationRef={UgghRef}
            text="Quick Summary"
            showDelay={300}
            hideDelay={500}
            size={{
              small: 12,
              large: { width: 178, height: 52 }
            }}
            activateAt={isMobile ? -3.8 : -0.5}
            deactivateAt={0.98}
            className="custom-bubble-class"
            onClick={() => setIsSummaryPopupVisible(true)}
          >
            <span className="summary-panel-icon-sparkle">✦</span>
          </BubbleButton>
          <div className="full-bg">
            <div
              className="p-img-1 main-image bg-black df-flex-center"
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
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">About</h2>
                          <p className='fade-inn'>The UG Operator App is a mission-critical tablet application that enables underground mining operators to manage and complete daily operational activities. Unlike traditional enterprise software, it is used in low-light, high-risk environments where operators work inside moving equipment while wearing protective gloves.</p>
                          <p className='fade-inn'>Designing for these conditions requires more than a functional interface—it demands workflows that are fast, intuitive, and reliable, allowing operators to stay focused on the job rather than the technology.</p>
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
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">The Challenge</h2>
                          <p className='fade-inn'>As the product evolved, new capabilities were introduced to support a growing range of operational workflows. While the functionality expanded, the overall experience became more complex. Operators had to navigate through multiple screens, interact with small touch targets, and process dense interfaces while working in demanding underground conditions.</p>
                          <p className='fade-inn'>Tasks that should have taken seconds often required unnecessary effort, increasing cognitive load during time-critical operations. The challenge wasn't to add more functionality—it was to simplify the experience by redesigning the product around the operator, not the system.</p>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <ConfidentialGate
                >

                  <div className="bg-full margin-unset">
                    <div className="bg-main  padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>02</span>
                          <span className=''>Empathize</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Understanding the Operator's Reality</h2>
                          <p className='fade-inn'>Before proposing solutions, we needed to understand the environment in which the product was used. Unlike traditional enterprise applications used in offices, the UG Operator App supports operators working in underground mines—where low visibility, constant machine vibration, heavy protective gloves, and time-critical decisions are part of everyday operations.</p>
                          <p className='fade-inn'>In this context, every interaction carries a cost. Extra taps, unclear information, or small touch targets don't just slow users down—they interrupt operational workflows.</p>
                          <p className='fade-inn'>Rather than starting with the interface, we focused on understanding the people, the environment, and the operational constraints that shaped their experience.</p>
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
                            {/* <img src="img/projects/gh_ug/research-environment.webp" alt="Research Environment" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/operator-observation.webp" alt="Operator Observation" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/stakeholder-workshop.webp" alt="Stakeholder Workshop" className="fade-inn" loading="lazy" /> */}
                          </div>

                          <span className="fade-inn section-subtitle-italic translate-text-up">Research Activities</span>
                          <ul className='fade-inn medium-list'>
                            <li>Stakeholder workshops</li>
                            <li>Workflow analysis</li>
                            <li>Existing product audit</li>
                            <li>Contextual observation</li>
                            <li>User interviews with mining operators</li>
                            <li>Review of operational tasks and edge cases</li>
                          </ul>
                          <h3 className="fade-inn section-heading translate-text-up">Research That Shaped Every Design Decision</h3>
                          <div className="image-group">
                            <div>
                              <span>Stakeholder Workshops</span>
                              <p className="fade-inn" style={{ marginTop: '-4px', marginBottom: '16px', color: 'var(--text-color)', opacity: 0.8, fontSize: 'var(--font-size-xs)' }}>
                                Interviewed operators and cross-functional stakeholders to uncover workflow bottlenecks, operational challenges, and opportunities for improving the underground operator experience.
                              </p>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/stakeholder-input.webp" alt="Stakeholder Workshops" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Empathy Map</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/empathy_map.webp" alt="Empathy Map" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>User Persona</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/user_persona.webp" alt="User Persona" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Research Insights</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/research_insights.webp" alt="Research Insights" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Quick Discussions</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/team-meeting.webp" alt="Research Insights" loading="lazy" />
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-full margin-unset">
                    <div className="bg-main  padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>03</span>
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
                          {/* <div className="image-group">
                          <img src="img/projects/gh_ug/affinity-mapping.webp" alt="Affinity Mapping" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/problem-statement.webp" alt="Problem Statement Diagram" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/userflow.webp" alt="Journey Map" className="fade-inn" loading="lazy" />
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-full margin-unset">
                    <div className="bg-main  padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>04</span>
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
                            <div>
                              <span>Early Sketches</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/sketches.webp" alt="Early Sketches" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>User Flow</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/userflow.webp" alt="User Flow" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Information Architecture</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/ia.webp" alt="Information Architecture" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            {/* <img src="img/projects/gh_ug/wireframes.webp" alt="Wireframes" className="fade-inn" loading="lazy" /> */}
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
                        </div>

                        {/* Figma Prototype Embed */}
                        <div className="figma-prototype-wrapper fade-inn">
                          <div className="figma-prototype-container">
                            <iframe
                              title="UG App Figma Prototype"
                              src="https://embed.figma.com/proto/rxHo1Cf9CKCVGfmZhSMdKt/UG-App---Ideation-phase--2-?node-id=1672-184751&viewport=4920%2C-2140%2C0.16&t=2z5PEcLVrtjiaBD6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1672%3A184744&show-proto-sidebar=0&page-id=1447%3A11497&embed-host=share&hide-ui=1"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>

                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <div className="image-group">
                            <div>
                              <span>Interactive Prototype Flow</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/prototype-flow.webp" alt="Prototype Iterations" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Design System</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/design_system.webp" alt="Design System" loading="lazy" style={{ border: 'none' }} />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Typographic Scale</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/ts.webp" alt="Design System" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Color Tokens</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/cs.webp" alt="Design System" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>UI Component Library</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/cl.webp" alt="Component Library" loading="lazy" />
                                </div>
                              </div>
                            </div>
                            {/* <img src="img/projects/gh_ug/high-fidelity-ui.webp" alt="High Fidelity UI" className="fade-inn" loading="lazy" /> */}
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
                            <div>
                              <span>Before & After Redesign</span>
                              <div className="slider-container-relative">
                                <div className="slider-badge before-badge">Before</div>
                                <div className="slider-badge after-badge">After</div>
                                <img-comparison-slider class="fade-inn" hover="true">
                                  <img slot="first" src="img/projects/gh_ug/old-screen.webp" alt="Before redesign" />
                                  <img slot="second" src="img/projects/gh_ug/new-screen.webp" alt="After redesign" />
                                  <div slot="handle" className="custom-slider-handle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-left-right">
                                      <path d="m9 7-5 5 5 5" />
                                      <path d="m15 7 5 5-5 5" />
                                    </svg>
                                  </div>
                                </img-comparison-slider>
                              </div>
                            </div>
                            {/* <img src="img/projects/gh_ug/iteration-1.webp" alt="Iteration 1" className="fade-inn" loading="lazy" />
                          <img src="img/projects/gh_ug/iteration-2.webp" alt="Iteration 2" className="fade-inn" loading="lazy" /> */}
                            {/* <img src="img/projects/gh_ug/feedback-session.webp" alt="Feedback Session" className="fade-inn" loading="lazy" /> */}
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
                          <span className=''>Outcome</span>
                        </div>
                        <div className="content-div-main fade-inn width-800 medium-case-study">
                          <h2 className="fade-inn section-heading translate-text-up">Operational Redesign Success</h2>
                          <p className='fade-inn'>The redesign transformed the UG Operator App into a faster, more intuitive operational tool tailored for the realities of underground mining. By simplifying workflows, improving accessibility, and reducing cognitive load, the experience enabled operators to complete critical tasks with greater speed and confidence while maintaining consistency across the product ecosystem.</p>

                          <span className="fade-inn section-subtitle-italic translate-text-up">Impact</span>
                          <ul className='fade-inn medium-list'>
                            <li>Reduced user interactions across core workflows by ~30%, enabling faster task completion.</li>
                            <li>Simplified navigation by removing unnecessary steps and reducing workflow complexity.</li>
                            <li>Increased touch target sizes to improve usability while wearing industrial gloves.</li>
                            <li>Established a scalable design system with reusable components for consistent experiences across mining products.</li>
                            <li>Improved information hierarchy, allowing operators to identify critical actions more quickly in low-visibility environments.</li>
                            <li>Designed an interface optimized for underground conditions, including dark environments, vibration, and time-critical operations.</li>
                            <li>Delivered a more intuitive and reliable workflow that reduced operator effort and improved overall usability.</li>
                          </ul>

                          <div className="image-group">
                            {/* <img src="img/projects/gh_ug/final-dashboard.webp" alt="Final Dashboard" className="fade-inn" loading="lazy" />
                           <img src="img/projects/gh_ug/final-workflow.webp" alt="Final Workflow" className="fade-inn" loading="lazy" /> */}
                            <div>
                              <span>Final Solution Overview</span>
                              <div className="reveal">
                                <div className="image-wrap">
                                  <img src="img/projects/gh_ug/final_screens.webp" alt="Final Screens" loading="lazy" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ProjectImpact
                    sectionNumber="08"
                    metrics={[
                      { number: "30%", unit: "reduction", description: "fewer core operator interactions" },
                      { number: "44px", unit: "minimum", description: "targets optimized for gloves" },
                      { number: "2x", unit: "faster", description: "retrieval in low visibility" }
                    ]}
                  />

                  <ProjectNavigation
                    figmaLink="https://www.figma.com/design/rxHo1Cf9CKCVGfmZhSMdKt/UG-App---Ideation-phase--2-?node-id=1447-11497&t=rE24klPvI0AfONWk-1"
                    previousLink={null}
                    nextLink="/Opgh"
                  />
                </ConfidentialGate>
              </div>
            </div>
          </div>
        </section>

        {isSummaryPopupVisible && (
          <div className="popup">
            <div className="popup-content summary-popup-content">
              <div className="popup-header">
                <div className="popup-title-div">
                  <span className="summary-panel-icon-sparkle">✦</span>
                  <span className="summary-popup-title">Quick Summary</span>
                </div>
                <img
                  className="close-button cursor-link"
                  src="img/close-popup.svg"
                  alt="close-popup"
                  onClick={() => setIsSummaryPopupVisible(false)}
                />
              </div>
              <div className="popup-body summary-popup-body">
                <div className="summary-panel-content summary-panel-padding">

                  <div className="summary-col problem">
                    <div className="summary-col-header">
                      <span>The Problem</span>
                    </div>
                    <p className="summary-col-body">
                      Operators were spending too much time navigating between screens while working in hazardous underground conditions.
                    </p>
                  </div>

                  <div className="summary-col solution">
                    <div className="summary-col-header">
                      <span>The Solution</span>
                    </div>
                    <p className="summary-col-body">
                      Redesigned the entire workflow around operator goals, simplifying navigation and improving usability.
                    </p>
                  </div>

                  <div className="summary-col result">
                    <div className="summary-col-header">
                      <span>Result</span>
                    </div>
                    <ul className="summary-result-list">
                      <li className="summary-result-item">
                        <span className="summary-result-bullet">✦</span>
                        <span>30% reduction in interactions</span>
                      </li>
                      <li className="summary-result-item">
                        <span className="summary-result-bullet">✦</span>
                        <span>Reusable Design System</span>
                      </li>
                      <li className="summary-result-item">
                        <span className="summary-result-bullet">✦</span>
                        <span>Improved operational efficiency</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      {/* </SmoothScrollProvider> */}
      <Footer />
    </div>
  );
}

export default Uggh;
