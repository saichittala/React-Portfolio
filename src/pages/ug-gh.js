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
                            <p className='fade-inn'>The UG Operator App is an operational workflow platform designed for underground mining operators to manage and complete daily mining activities more efficiently in challenging underground environments. The product redesign focused on simplifying complex workflows, reducing interaction effort, and improving operational usability through a minimal, high-clarity interface optimized for faster task completion and better on-ground efficiency.
                            </p>
                          </div>
                        </div>

                        <div className="content-div-main fade-inn ">
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
                        </div>
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
                <ConfidentialGate
                >
                
                  <div className="bg-full margin-unset">
                    <div className="bg-main  padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-breif-heading width-800 fade-inn">
                          <span className=''>02</span>
                          <span className=''>Design Process</span>
                        </div>
                        <div className="content-div-main fade-inn width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Discover</a>
                          <p className='fade-inn'>Research focused on understanding why users were leaving without contacting the company.</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div className='pd-content' style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px', marginTop: '36px', fontStyle: 'Italic' }}>
                              <ch className="fade-inn translate-text-up">Qualitative Research Questions</ch>
                            </div>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li>What stops users from booking a consultation?</li>
                              <li>What information do users look for before trusting an interior design company?</li>
                              <li>What concerns do users have before committing?</li>
                              <li>What does “confidence” mean in this context?</li>
                            </ul>

                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div className='pd-content' style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px', marginTop: '36px', fontStyle: 'Italic' }}>
                              <ch className="fade-inn translate-text-up">Quantative Research Questions</ch>
                            </div>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li>Where do users drop off most frequently?</li>
                              <li>Which pages have the highest bounce rates?</li>
                              <li>How much time do users spend before exiting?</li>
                              <li>Are users interacting with key CTAs?</li>
                            </ul>
                            <p className='fade-inn'>Google Analytics and Microsoft Clarity were used to analyze heatmaps, rage clicks, dead clicks, scroll behavior, and engagement data.</p>

                          </div>
                        </div>
                        <div className="content-div-main fade-inn width-800" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Define</a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up">User Persona 1</ch>
                              <img src="img/projects/Uggh/userpersona-1.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                            </div>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up">User Persona 2</ch>
                              <img src="img/projects/Uggh/userpersona-2.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up  width-800">Empathy Map</ch>
                              <img src="img/projects/Uggh/empathymap.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                              <p className='fade-inn'>Key insight: Users needed reassurance and process clarity more than more content.</p>

                            </div>
                          </div>
                        </div>
                        <div className="content-div-main fade-inn width-800" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Ideate</a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up">User Flow</ch>
                              <img src="img/projects/Uggh/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                            </div>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up">Information Architecture</ch>
                              <img src="img/projects/Uggh/information-architecture.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                            </div>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up">Components</ch>
                              <img src="img/projects/Uggh/Components.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                              <p className='fade-inn'>Each step reduced cognitive load and guided users forward.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-full margin-unset">
                    <div className="bg-main  padding-unset">
                      <div className="project-details padding-top-unset">
                        <div className="project-details-internal">
                          <div className="project-breif-heading width-800 fade-inn">
                            <span className=''>03</span>
                            <span className=''>Outcome</span>
                          </div>
                          <div className="content-div-main fade-inn ">
                            <img src="img/projects/Uggh/Uggh-new.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer Uggh" className='fade-inn' loading="lazy" />
                            <p style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '24px' }} className='fade-inn width-800'>
                              The redesigned website became a clear, trust-first platform that guided users toward consultation booking. Instead of overwhelming users with too much information, the experience focused on clarity, confidence, and structured decision-making.</p>
                            <div >

                              {/* <p className='fade-inn'>5 interviews with existing clients</p>
                            <p className='fade-inn'>Clarity session replays, Heatmaps, scroll maps</p>
                            <p className='fade-inn'>Usability testing on key pages</p>
                            <p className='fade-inn'>Google Analytics + funnel tracking</p>
                            <p className='fade-inn'>Journey Mapping & Persona Workshops</p> */}
                            </div>
                          </div>
                          {/* <a className="fade-inn content-div-main-heading-2 width-800 translate-text-up">Ok guyss! Let's dive into the project deeply
                        </a> */}
                          {/* <div className='width-800 project-details-subinternal'>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up">User Insights</ch>
                            <img src="img/projects/Uggh/userinsights.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                          </div>
                          <p className='width-800'><int>We went beyond the surface with interviews, analytics, and heatmaps. The data revealed where users got stuck—and why they left.</int></p>

                        </div>
                        <div className='width-800 project-details-subinternal'>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up  width-800">Competitve Analysis</ch>
                            <img src="img/projects/Uggh/companalysis.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                          </div>
                          <p className='width-800'><int>We studied key players in the interior design space—what made them trustworthy, where they lost users, and how Uggh could stand out with clarity, speed, and immersive features. The goal? Spot the gaps and design to fill them.</int></p>
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
                          <span className=''>Impact</span>
                        </div>
                        <div className="content-div-main fade-inn width-800">
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn' style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>Beyond metrics, the redesign built confidence among users and internal stakeholders.</p>
                            <img src="img/projects/Uggh/successmetrics.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-800" loading="lazy" />
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div className="bg-full bg-white margin-unset">
                    <div className="bg-main  padding-unset">
                      <div className="project-details">
                        <div className="thankyou-content-heading fade-inn cursor-text">
                          Thank you for viewing. <a
                            href="https://www.Uggh.com" rel="noopener noreferrer"
                            target="_blank">Have a look at live website</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </ConfidentialGate>
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
