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
                        <a className="fade-inn pd-sub-heading-2 translate-text-down"> UX
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
                        <div className="content-div-main fade-inn width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">The Problem
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn'>Initially, the website was not effective from a user or business point of view. The layout felt unstructured, there were no testimonials to build trust, and the project images did not clearly show the quality of work. There was also no clear “Consult Us” form to capture lead information, which caused many interested users to leave without contacting the company. As a result, the website failed to support lead generation and sales efforts.
                            </p>
                          </div>
                        </div>
                        <LazyImage src="img/projects/customfurnish/customfurnish-old.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer customfurnish" className='fade-inn' loading="lazy" />

                        <div></div>
                        <div className="content-div-main fade-inn  width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">The Solution
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn'>The website was redesigned with one clear focus: helping users book a consultation easily. The experience was simplified to guide users step by step. Trust was built using real project examples and clear explanations of the service process. Distractions were reduced, and a clear consultation form was added to capture lead details. Pricing and 3D designs were intentionally shared later by the sales team after users showed interest.
                            </p>
                          </div>
                        </div>
                        <img src="img/projects/customfurnish/customfurnish-new.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer customfurnish" className='fade-inn' loading="lazy" />

                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>02</span>
                        <span className=''>Challenges</span>
                      </div>
                      <div className="project-details-internal">
                        <div className="width-800 fade-inn">
                          <p><int>The main challenge was to build trust without showing pricing upfront while keeping the website simple and easy to use. The design needed to work well on mobile devices and support marketing and sales goals without confusing users. Every decision was carefully made to reduce hesitation and help users move forward confidently.</int></p>
                        </div>
                        <div className="content-div-main fade-inn width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">Key Challenges</a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-inn'>Low Conversion rate</p>
                            <p className='fade-inn'>Users overwhelmed by navigation and service ambiguity</p>
                            <p className='fade-inn'>High bounce rates on landing and inquiry pages</p>
                            <p className='fade-inn'>Lack of trust signals - testimonials, certifications, or design proof</p>
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
                          <span className=''>Research</span>
                        </div>
                        <div className="content-div-main fade-inn width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up">Research Methods
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='' >
                              Design decisions were based on real user data and behavior. Insights from Google Analytics and Microsoft Clarity were used to study user behavior such as rage clicks, dead clicks, heatmaps, scroll activity, and engagement patterns. This research clearly showed where users were getting confused, where they dropped off, and what prevented them from taking action. These insights helped guide improvements across layout, content, and user flow.</p>
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

                        <div className='width-800 project-details-subinternal'>
                          <div className='width-800 project-details-internal'>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up">User Persona 1</ch>
                              <img src="img/projects/customfurnish/userpersona-1.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                            </div>
                            <div className="pd-content width-800 fade-inn">
                              <ch className="fade-inn translate-text-up">User Persona 2</ch>
                              <img src="img/projects/customfurnish/userpersona-2.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                            </div>
                          </div>
                          <p className='width-800'><int>These personas reflect the hopes and headaches of our most common users—helping us empathize, prioritize, and humanize every interaction.</int></p>
                        </div>

                        <div className='width-800 project-details-subinternal'>
                          <div className="pd-content width-800 fade-inn">
                            <ch className="fade-inn translate-text-up  width-800">Empathy Map</ch>
                            <img src="img/projects/customfurnish/empathymap.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                          </div>
                          <p className='width-800'><int>This map helped us understand Sushmitha's internal dialogue - why she feels overwhelmed and what would help her feel confident and in control.</int></p>
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
                      <div className="content-div-main fade-inn width-800">
                        <a className="fade-inn content-div-main-heading-2 translate-text-up ">Design Goals</a>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <p className='fade-inn'>The redesign followed clear principles. The path to booking a consultation had to be simple and visible. Each page focused on one main action. The content was kept short and easy to understand, and the design was created with a mobile-first approach to reduce effort and confusion.</p>
                          {/* <p className='fade-inn'>Reduce form drop-offs and boost consultations</p>
                          <p className='fade-inn'>Mobile-first, intuitive design system</p>
                          <p className='fade-inn'>Enable instant decision-making with real-time previews</p> */}
                        </div>
                      </div>
                      <div className="pd-content width-100">
                        <ch className="fade-inn translate-text-up  width-800">Information Architecture</ch>
                        <img src="img/projects/customfurnish/information-architecture.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                      </div>

                      <div className="pd-content width-800 fade-inn">
                        <ch className="fade-inn translate-text-up  width-800">Leads User Flow</ch>
                        <img src="img/projects/customfurnish/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-100" loading="lazy" />
                      </div>
                      {/* <div className="pd-content width-100">
                        <ch className="fade-inn translate-text-up  width-800">Design System</ch>
             cle           <img src="img/projects/customfurnish/designsystem.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                      </div> */}
                      <div className="pd-content width-100">
                        <ch className="fade-inn translate-text-up  width-800">Components</ch>
                        <img src="img/projects/customfurnish/Components.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                      </div>
                      {/* <div className="pd-content width-100">
                        <ch className="fade-inn translate-text-up  width-800">Wireframes</ch>
                        <img src="img/projects/customfurnish/wireframes.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />

                      </div> */}
                      {/* <div className="pd-content width-100">
                        <ch className="fade-inn translate-text-up  width-800">Prototype</ch>
                        <iframe
                          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', aspectRatio: '1.33', height: '100%' }}
                          width="800"
                          height="450"
                          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/XG1Pa7Mt1XnI4bfxgWB6bG/CF--Changes?page-id=3462%3A1184&node-id=3462-2737&scaling=scale-down&hide-ui=1"
                          allowFullScreen
                        ></iframe>
                      </div> */}

                    </div>
                  </div>
                </div>
                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-inn">
                        <span className=''>05</span>
                        <span className=''>Results</span>
                      </div>
                      <div className='project-details-internal'>
                        <div className="pd-content width-100 fade-inn">
                          <p className='width-800 fade-inn'><int>Beyond metrics, we earned emotional buy-in from customers and stakeholders alike. The design felt trustworthy and that changed everything.

                          </int></p>
                          <img src="img/projects/customfurnish/successmetrics.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-800" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="thankyou-content-heading fade-inn cursor-text">
                        Thank you for viewing. <a
                          href="https://www.customfurnish.com" rel="noopener noreferrer"
                          target="_blank">Have a look at live website</a>
                      </div>
                    </div>
                  </div>
                </div> */}
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
