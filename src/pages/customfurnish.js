import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import FullScrollFadeIn from '../components/FullScrollFadeIn';
import useScrollEffect from '../components/useScrollEffect';
import ZoomOnScroll from '../components/ZoomOnScroll';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BubbleButton from '../components/BubbleButton';
import { use } from 'react';


const CustomFurnish = () => {

  FullScrollFadeIn();
  useScrollEffect();
  ZoomOnScroll();
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

  // useEffect(() => {
  //   const loader = document.getElementById("loader");
  //   const circleLoader = document.getElementById("circleloading");
  //   const loadingText = document.getElementById("loading-text");


  //   // Set initial opacity of the loader (circle and text)
  //   circleLoader.style.opacity = 0;
  //   loadingText.style.opacity = 0;
  //   loader.style.opacity = 1;

  //   // Set a static loading text
  //   loadingText.textContent = "Just a minute";

  //   // Fade in the loader (circles and text)
  //   setTimeout(() => {
  //     circleLoader.style.transition = 'opacity 1s';
  //     loadingText.style.transition = 'opacity 1s';
  //     circleLoader.style.opacity = 1;
  //     loadingText.style.opacity = 1;

  //     // Fade out loader (text and circles) after content is fully loaded
  //     setTimeout(() => {
  //       loadingText.style.opacity = 0;
  //       circleLoader.style.opacity = 0;

  //       setTimeout(() => {
  //         loader.style.opacity = '0';
  //         setTimeout(() => {
  //           loader.style.display = 'none';
  //         }, 500);
  //       }, 500);
  //     }, 2500);
  //   }, 500);

  // }, []);


  return (
    <div className='cursor overflow-x-h'>
      {/* <div className="loader-styling" id="loader">
        <div id="circleloading" className="circle-loader">
          <div className="circle-input"></div>
          <div className="circle-input"></div>
          <div className="circle-input"></div>
        </div>
        <div id="loading-text">Just a minute</div>
      </div> */}

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
                large: { width: 221, height: 52 }
              }}
              activateAt={isMobile ? -3.8 : -0.5}
              className="custom-bubble-class" >
              <img src="img/open-web.svg" alt="Arrow" />
            </BubbleButton>
          </a>
          <div className="full-bg">
            <div className=" p-img-1 main-image object-fit width-height-100">
              <img src="img/projects/cf.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" loading="lazy" className='fade-in' />
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
                    <div className="project-breif-heading fade-in">
                      <span className=''>01</span>
                      <span>Project Overview</span>
                    </div>
                    <div className="project-breif-main fade-in">
                      <div className="pd-heading-sub-div">
                        <a className="fade-in pd-main-heading-2 translate-text-up"> Project Type
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> UX
                          Design</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up">Timeline</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> 2024-2025
                        </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up">Contributors</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Sai Chittala
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Boyapati Ravi Kumar </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up">My Contribution</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down">UX Research
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Product Strategy
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down">Information Architecture
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down">Visual Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Design Systems
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Prototyping & Testing
                        </a>
                      </div>
                    </div>
                    <div className="pd-main" >
                      <div className="   pd-content-main gap-72 margin-100">
                        {/* <ReactBeforeSliderComponent className='fade-in '
                          firstImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-new.webp' }}  // Passing the first image
                          secondImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-old.webp' }}  // Passing the first image
                        /> */}
                        <div className="content-div-main fade-in width-800">
                          <a className="fade-in content-div-main-heading-2 translate-text-up ">About
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-in'>At CustomFurnish, a full-service interior design brand, I redesigned the website to turn passive visitors into high-intent leads. Without relying on upfront pricing or 3D visuals, I crafted a trust-first, conversion-focused experience that simplified the user journey, built credibility, and increased consultation bookings - showcasing my ability to drive business results through strategic UX.

                            </p>
                          </div>
                        </div>
                        {/* <div>
                          <int className="fade-in">
                            <p className=''>I led the end-to-end redesign of Customfurnish’s web experience to turn <int>uncertain browsers into confident buyers</int> - real-time consultation, and elegant UX that built trust and drove a <int>25% increase in lead conversions.</int></p></int>
                        </div> */}
                        <div></div>
                        <div className="content-div-main fade-in width-800">
                          <a className="fade-in content-div-main-heading-2 translate-text-up ">The Problem
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-in'>CustomFurnish was losing high-intent users because the website didn’t build trust or guide them to take action. There was no clarity about the process, no emotional connection, and no compelling reason to book a consultation.
                            </p>
                          </div>
                        </div>
                        <img src="img/projects/customfurnish/customfurnish-old.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer customfurnish" className='fade-in' loading="lazy" />

                        <div></div>
                        <div className="content-div-main fade-in  width-800">
                          <a className="fade-in content-div-main-heading-2 translate-text-up ">The Solution
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-in'>I redesigned the experience to drive one clear action: lead capture. By showcasing real projects, simplifying the journey, and embedding trust signals throughout, I turned passive visitors into engaged leads. The goal wasn’t to explain everything - it was to spark just enough interest and confidence for users to reach out. Once they did, our team took over with personalized 3D visuals and pricing.
                            </p>
                          </div>
                        </div>
                        <img src="img/projects/customfurnish/customfurnish-new.webp" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer customfurnish" className='fade-in' loading="lazy" />

                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span className=''>02</span>
                        <span className=''>Challenges</span>
                      </div>
                      <div className="challenges-main fade-in">
                        <div className="challenges-sub fade-in">
                          <div className="challenge-active-card fade-in">
                            <span className="challenge-heading  fade-in">01</span>
                            <span className="challenge-content  fade-in">Designing MyDeziner Where Innovation Meets Imagination</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading  fade-in">02</span>
                            <span className="challenge-content  fade-in">Simplifying Advanced Features Without Losing Depth</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading  fade-in">03</span>
                            <span className="challenge-content  fade-in">Scaling for Seamless Performance Across Devices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-in">
                        <span className=''>02</span>
                        <span className=''>Challenges</span>
                      </div>
                      <div className="project-details-internal">
                        <div className="width-800 fade-in">
                          <p><int>Customfurnish was struggling to convert site visitors into paying clients despite strong service offerings and a broad product catalog. Their digital platform lacked clarity, trust-building elements, and modern interactive features.</int></p>
                        </div>
                        <div className="content-div-main fade-in width-800">
                          <a className="fade-in content-div-main-heading-2 translate-text-up ">Key Challenges</a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-in'>Low Conversion rate</p>
                            <p className='fade-in'>Users overwhelmed by navigation and service ambiguity</p>
                            <p className='fade-in'>High bounce rates on landing and inquiry pages</p>
                            <p className='fade-in'>Lack of trust signals — testimonials, certifications, or design proof</p>
                          </div>
                        </div>

                      </div>



                      {/* <div className="thankyou-content-heading fade-in">
                        Thank you for viewing. <a
                          href="https://www.figma.com/proto/m3zYF0txidC2O6T98toUB5/MyDeziner-(-WEB-)?page-id=312%3A33670&node-id=312-33671&node-type=frame&viewport=1718%2C1395%2C0.19&t=7dLVBbJUJP2Uvd5V-1&scaling=scale-down&content-scaling=fixed"
                          target="_blank">Have a look</a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                    <div className="thankyou-content-heading fade-in cursor-text">
                      Pssst... The magic’s still brewing. Meanwhile, sneak a peek at this <a className=''
                        href="https://www.customfurnish.com" rel="noopener noreferrer"
                        target="_blank">live project</a>
                    </div>
                    </div>
                  </div>
                </div> */}
                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-details-internal">
                        <div className="project-breif-heading width-800 fade-in">
                          <span className=''>03</span>
                          <span className=''>Research</span>
                        </div>
                        <div className="content-div-main fade-in width-800">
                          <a className="fade-in content-div-main-heading-2 translate-text-up">Research Methods
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='' >
                              15 interviews with prospective leads</p>
                            <p className='fade-in'>5 interviews with existing clients</p>
                            <p className='fade-in'>Clarity session replays, Heatmaps, scroll maps</p>
                            <p className='fade-in'>Usability testing on key pages</p>
                            <p className='fade-in'>Google Analytics + funnel tracking</p>
                            <p className='fade-in'>Journey Mapping & Persona Workshops</p>
                          </div>
                        </div>
                        <a className="fade-in content-div-main-heading-2 width-800 translate-text-up">Ok guyss! Let's dive into the project deeply
                        </a>
                        <div className='width-800 project-details-subinternal'>
                          <div className="pd-content width-800 fade-in">
                            <ch className="fade-in translate-text-up">User Insights</ch>
                            <img src="img/projects/customfurnish/userinsights.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                          </div>
                          <p className='width-800'><int>We went beyond the surface with interviews, analytics, and heatmaps. The data revealed where users got stuck—and why they left.</int></p>

                        </div>
                        <div className='width-800 project-details-subinternal'>
                          <div className="pd-content width-800 fade-in">
                            <ch className="fade-in translate-text-up  width-800">Competitve Analysis</ch>
                            <img src="img/projects/customfurnish/companalysis.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                          </div>
                          <p className='width-800'><int>We studied key players in the interior design space—what made them trustworthy, where they lost users, and how Customfurnish could stand out with clarity, speed, and immersive features. The goal? Spot the gaps and design to fill them.</int></p>
                        </div>

                        <div className='width-800 project-details-subinternal'>
                          <div className='width-800 project-details-internal'>
                            <div className="pd-content width-800 fade-in">
                              <ch className="fade-in translate-text-up">User Persona 1</ch>
                              <img src="img/projects/customfurnish/userpersona-1.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                            </div>
                            <div className="pd-content width-800 fade-in">
                              <ch className="fade-in translate-text-up">User Persona 2</ch>
                              <img src="img/projects/customfurnish/userpersona-2.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                            </div>
                          </div>
                          <p className='width-800'><int>These personas reflect the hopes and headaches of our most common users—helping us empathize, prioritize, and humanize every interaction.</int></p>
                        </div>

                        <div className='width-800 project-details-subinternal'>
                          <div className="pd-content width-800 fade-in">
                            <ch className="fade-in translate-text-up  width-800">Empathy Map</ch>
                            <img src="img/projects/customfurnish/empathymap.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                          </div>
                          <p className='width-800'><int>This map helped us understand Sushmitha's internal dialogue—why she feels overwhelmed and what would help her feel confident and in control.</int></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-in">
                        <span className=''>04</span>
                        <span className=''>Define</span>
                      </div>
                      <div className="content-div-main fade-in width-800">
                        <a className="fade-in content-div-main-heading-2 translate-text-up ">Design Goals</a>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <p className='fade-in'>Simplify paths from landingpage → consultation</p>
                          <p className='fade-in'>Reduce form drop-offs and boost consultations</p>
                          <p className='fade-in'>Mobile-first, intuitive design system</p>
                          <p className='fade-in'>Enable instant decision-making with real-time previews</p>
                        </div>
                      </div>
                      {/* <div className="pd-content width-100 fade-in">
                          <ch className="fade-in translate-text-up  width-800">Information Architecture</ch>
                          <img src="img/projects/customfurnish/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                        </div> */}
                      <div className="pd-content width-100">
                        <ch className="fade-in translate-text-up  width-800">Information Architecture</ch>
                        <img src="img/projects/customfurnish/information-architecture.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                      </div>

                      <div className="pd-content width-800 fade-in">
                        <ch className="fade-in translate-text-up  width-800">Leads User Flow</ch>
                        <img src="img/projects/customfurnish/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                      </div>
                      {/* <div className="width-800 fade-in">
                        <p><int>Let's Dive into the Design !!</int></p> 
                      </div> */}
                      {/* <div className="pd-content width-100 fade-in">
                        <ch className="fade-in translate-text-up  width-800">Low Fedility Wireframes</ch>
                        <img src="img/projects/customfurnish/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                      </div>
                      <div className="pd-content width-100 fade-in">
                        <ch className="fade-in translate-text-up  width-800">High Fedility Wireframes</ch>
                        <img src="img/projects/customfurnish/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                      </div> */}
                      <div className="pd-content width-100">
                        <ch className="fade-in translate-text-up  width-800">Design System</ch>
                        <img src="img/projects/customfurnish/designsystem.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                      </div>
                      <div className="pd-content width-100">
                        <ch className="fade-in translate-text-up  width-800">Components</ch>
                        <img src="img/projects/customfurnish/Components.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />
                      </div>
                      <div className="pd-content width-100">
                        <ch className="fade-in translate-text-up  width-800">Wireframes</ch>
                        <img src="img/projects/customfurnish/wireframes.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="width-100" loading="lazy" />

                      </div>
                      <div className="pd-content width-100">
                        <ch className="fade-in translate-text-up  width-800">Prototype</ch>
                        <iframe
                          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', aspectRatio: '1.33', height: '100%' }}
                          width="800"
                          height="450"
                          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/XG1Pa7Mt1XnI4bfxgWB6bG/CF--Changes?page-id=3462%3A1184&node-id=3462-2737&scaling=scale-down&hide-ui=1"
                          allowFullScreen
                        ></iframe>
                      </div>

                    </div>
                  </div>
                </div>
                {/* <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-in">
                        <span className=''>05</span>
                        <span className=''>Prototype</span>
                      </div>
                      <div className='project-details-internal'>
                        <div className="width-800 fade-in">
                          <p><int>Here's the prototype of the final design!</int></p>
                        </div>
                        <div className="pd-content width-100 fade-in">
                          <ch className="fade-in translate-text-up  width-800">Prototype</ch>
                          <img src="img/projects/customfurnish/userflow.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-in">
                        <span className=''>05</span>
                        <span className=''>Results</span>
                      </div>
                      <div className='project-details-internal'>
                        <div className="pd-content width-100 fade-in">
                          <p className='width-800 fade-in'><int>Beyond metrics, we earned emotional buy-in from customers and stakeholders alike. The design felt trustworthy and that changed everything.

                          </int></p>
                          <img src="img/projects/customfurnish/successmetrics.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-800" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="thankyou-content-heading fade-in cursor-text">
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
      <Footer />
    </div>
  );
}

export default CustomFurnish;
