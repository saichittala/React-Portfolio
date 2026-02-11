import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
// import useFadeIn from '../components/useFadeIn';

// import FullScrollFadeIn from '../components/FullScrollFadeIn';
// import useScrollEffect from '../components/useScrollEffect';
// import ZoomOnScroll from '../components/ZoomOnScroll';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BubbleButton from '../components/BubbleButton';
import { use } from 'react';
// import SmoothScrollProvider from '../components/Scrollsmooth';
import LazyImage from '../components/LazyImage';


const CustomFurnish = () => {

  // FullScrollFadeIn();
  // useFadeIn();
  // useScrollEffect();
  // ZoomOnScroll();
  const customfurnishRef = React.useRef(null);
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
        <section ref={customfurnishRef}>
          <a href="https://www.figma.com/design/IHX8O0ZQrwEwOcPHjjZUFH/Customfurnish?node-id=0-1&t=tfbAj8cpIn9eWmee-1" target="_blank" rel="noopener noreferrer">
            <BubbleButton
              activationRef={customfurnishRef}
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
            <div className=" p-img-1 main-image bg-black">
              <img src="img/projects/cf.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" loading="lazy" className='fade-inn' />
            </div>
            <div className="bg-main width-unset mobile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="pd-heading-div p-head-arrow">
                      <a className=" pd-main-heading">CustomFurnish</a>
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
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> 2024-2025
                        </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2    translate-text-up">Contributors</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Sai Chittala
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> Boyapati Ravi Kumar </a>
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
                        {/* <ReactBeforeSliderComponent className='fade-inn '
                          firstImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-new.webp' }}  // Passing the first image
                          secondImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-old.webp' }}  // Passing the first image
                        /> */}
                        <div className="content-div-main fade-inn width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">About
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn'>CustomFurnish is a full-service interior design company with strong offline expertise. However, the website worked more like a display page than a lead-generation platform. The redesign focused on turning the website into a clear, simple, and trust-first experience that supports both users and the sales team.
                            </p>
                          </div>
                        </div>
                        {/* <div>
                          <int className="fade-inn">
                            <p className=''>I led the end-to-end redesign of Customfurnish’s web experience to turn <int>uncertain browsers into confident buyers</int> - real-time consultation, and elegant UX that built trust and drove a <int>25% increase in lead conversions.</int></p></int>
                        </div> */}
                        <div className="content-div-main fade-inn ">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up width-800 ">Understanding the Problem Statement
                          </a>
                          <LazyImage src="img/projects/customfurnish/customfurnish-old.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer customfurnish" className='fade-inn' loading="lazy" />
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '36px' }} className='width-800'>
                            <div className='pd-content'>
                              <ch className="fade-inn translate-text-up">Previous Scenario</ch>
                            </div>
                            <p className='fade-inn'>
                              Before the redesign, the website acted more like a portfolio gallery. Users could view projects, but the platform did not clearly guide them toward the next step. Important elements like testimonials, structured service explanations, and a strong consultation call-to-action were missing.
                            </p>
                            <p className='fade-inn'>
                              "Although traffic existed, conversion was weak."
                            </p>
                          </div>
                        </div>
                        <div className="content-div-main fade-inn  width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Current Problems Identified
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li>Low consultation conversion rate</li>
                              <li>High drop-offs before inquiry submission</li>
                              <li>Lack of trust signals (testimonials, proof, certifications)</li>
                              <li>Unstructured navigation and service ambiguity</li>
                              <li>No clear “Consult Us” form to capture lead data</li>
                            </ul>
                            <p className='fade-inn'>These issues led to lost high-intent users and limited support for the sales team.
                            </p>
                          </div>
                        </div>
                        <div className="content-div-main fade-inn  width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Clarifying Questions
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn'>To define scope and direction, I clarified four key areas:
                            </p>
                            <img src="img/projects/customfurnish/Cl-Questions-1.png" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer customfurnish" className='fade-inn' loading="lazy" style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }} />

                          </div>
                        </div>
                        <div className="content-div-main fade-inn  width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Problem Statement
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn'>How might we transform CustomFurnish’s website from a static design showcase into a trust-driven, conversion-focused platform that encourages high-intent users to book consultations?
                            </p>
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
                      <div className="content-div-main fade-inn width-800" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <a className="fade-inn content-div-main-heading-2 translate-text-up ">Define</a>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up">User Persona 1</ch>
                            <img src="img/projects/customfurnish/userpersona-1.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                          </div>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up">User Persona 2</ch>
                            <img src="img/projects/customfurnish/userpersona-2.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up  width-800">Empathy Map</ch>
                            <img src="img/projects/customfurnish/empathymap.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                            <p className='fade-inn'>Key insight: Users needed reassurance and process clarity more than more content.</p>

                          </div>
                        </div>
                      </div>
                      <div className="content-div-main fade-inn width-800" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <a className="fade-inn content-div-main-heading-2 translate-text-up ">Ideate</a>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up">User Flow</ch>
                            <img src="img/projects/customfurnish/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                          </div>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up">Information Architecture</ch>
                            <img src="img/projects/customfurnish/information-architecture.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                          </div>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up">Components</ch>
                            <img src="img/projects/customfurnish/Components.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
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
                          <img src="img/projects/customfurnish/customfurnish-new.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer customfurnish" className='fade-inn' loading="lazy" />
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
                            <img src="img/projects/customfurnish/userinsights.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                          </div>
                          <p className='width-800'><int>We went beyond the surface with interviews, analytics, and heatmaps. The data revealed where users got stuck—and why they left.</int></p>

                        </div>
                        <div className='width-800 project-details-subinternal'>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up  width-800">Competitve Analysis</ch>
                            <img src="img/projects/customfurnish/companalysis.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                          </div>
                          <p className='width-800'><int>We studied key players in the interior design space—what made them trustworthy, where they lost users, and how Customfurnish could stand out with clarity, speed, and immersive features. The goal? Spot the gaps and design to fill them.</int></p>
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
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px'}}>
                          <p className='fade-inn' style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>Beyond metrics, the redesign built confidence among users and internal stakeholders.</p>
                          <img src="img/projects/customfurnish/successmetrics.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-800" loading="lazy" />
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
                          href="https://www.customfurnish.com" rel="noopener noreferrer"
                          target="_blank">Have a look at live website</a>
                      </div>
                    </div>
                  </div>
                </div>
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

export default CustomFurnish;
