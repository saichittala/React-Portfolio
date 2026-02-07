import React, { useEffect, useState, useRef } from 'react';
import Footer from '../components/footer';
import FullScrollFadeIn from '../components/FullScrollFadeIn';
import useFadeIn from '../components/useFadeIn';

import useScrollEffect from '../components/useScrollEffect';
import ZoomOnScroll from '../components/ZoomOnScroll';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BubbleButton from '../components/BubbleButton';
// import SmoothScrollProvider from '../components/Scrollsmooth';


const MyDeziner = () => {

  // FullScrollFadeIn();
  useFadeIn();
  useScrollEffect();
  ZoomOnScroll();
  const customfurnishRef = React.useRef(null);
  const [isMobile] = useState(window.innerWidth <= 674);
  useEffect(() => {




    // const loader = document.getElementById("loader");
    // const circleLoader = document.getElementById("circleloading");
    // const loadingText = document.getElementById("loading-text");


    // // Set initial opacity of the loader (circle and text)
    // circleLoader.style.opacity = 0;
    // loadingText.style.opacity = 0;
    // loader.style.opacity = 1;

    // // Set a static loading text
    // loadingText.textContent = "Just a minute";

    // // Fade in the loader (circles and text)
    // setTimeout(() => {
    //   circleLoader.style.transition = 'opacity 1s';
    //   loadingText.style.transition = 'opacity 1s';
    //   circleLoader.style.opacity = 1;
    //   loadingText.style.opacity = 1;

    //   // Fade out loader (text and circles) after content is fully loaded
    //   setTimeout(() => {
    //     loadingText.style.opacity = 0;
    //     circleLoader.style.opacity = 0;

    //     setTimeout(() => {
    //       loader.style.opacity = '0';
    //       setTimeout(() => {
    //         loader.style.display = 'none';
    //       }, 500);
    //     }, 500);
    //   }, 2500);
    // }, 500);

    // Video Autoplay
  }, []);


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
      {/* <LuxurySmoothScroll scrollSpeed={1.0}> */}

      {/* <SmoothScrollProvider duration={1.1}> */}

      <main>

        <section>
          <a href="https://www.figma.com/design/IHX8O0ZQrwEwOcPHjjZUFH/Customfurnish?node-id=0-1&t=tfbAj8cpIn9eWmee-1" target="_blank" rel="noopener noreferrer">
            <BubbleButton
              activationRef={customfurnishRef}
              text="Open Figma Design"
              showDelay={300}
              hideDelay={500}
              size={{
                small: 12,
                large: { width: 220.65, height: 52 }
              }}
              activateAt={isMobile ? -3.8 : -0.5}
              className="custom-bubble-class" >
              <img src="img/open-web.svg" alt="Arrow" />
            </BubbleButton>
          </a>

          <div className="full-bg">
            <div className=" p-img-1 main-image">
              <img src="img/projects/mydeziner.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience mydeziner" loading="lazy" className='fade-inn' />
            </div>
            <div className="bg-main width-unset mobile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="pd-heading-div p-head-arrow">
                      <a className=" pd-main-heading ">GroundHog</a>
                      <img src="img/arrow-down.svg" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer arrow-down" />
                    </div>
                  </div>

                  <div className="project-breif-section">
                    <div className="project-breif-heading fade-inn">
                      <span className=''>01</span>
                      <span className=''>Project Overview</span>
                    </div>
                    <div className="project-breif-main fade-inn">
                      <div className="pd-heading-sub-div">
                        <a className="fade-inn pd-main-heading-2   translate-text-up "> Project Type
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down "> Product
                          Design</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2   translate-text-up ">Timeline</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down "> 2024-2025
                        </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2   translate-text-up ">Contributors</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down "> Sai Chittala
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down "> Tulasiram Kadiyala </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down "> Boyapati Ravi Kumar </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-inn pd-main-heading-2   translate-text-up ">My Contribution</a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down ">Experience Design
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down ">Interface Design
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down ">Product Design
                        </a>
                        <a className="fade-inn pd-sub-heading-2 translate-text-down ">Interaction Design</a>
                      </div>
                    </div>
                    <div className="pd-main" >
                      <div className="   pd-content-main gap-72 margin-100">
                        {/* <ReactBeforeSliderComponent className='fade-inn '
                          firstImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-new.webp' }}  // Passing the first image
                          secondImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-old.webp' }}  // Passing the first image
                        /> */}
                        <div className="content-div-main fade-inn width-800">
                          <a className=" content-div-main-heading-2 translate-text-up ">About
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p>MyDeziner is a B2B SaaS platform powerful interior design software that enables designers to draw, configure, and render hyper-realistic interiors - all in one place. From layout creation to photorealistic renders, it simplifies complex workflows and brings unmatched control to interior professionals.
                            </p>
                          </div>
                        </div>
                        {/* <div>
                          <int className="fade-inn">
                            <p className=''>I led the end-to-end redesign of Customfurnish’s web experience to turn <int>uncertain browsers into confident buyers</int> - real-time consultation, and elegant UX that built trust and drove a <int>25% increase in lead conversions.</int></p></int>
                        </div> */}
                        <div className="content-div-main fade-inn width-800">
                          <a className=" content-div-main-heading-2 translate-text-up ">The Problem
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p >CustomFurnish is a premium interior design company helping homeowners transform their spaces with tailor-made interiors. To deliver these experiences, their designers rely on MyDeziner, a B2B SaaS tool that converts architectural drawings into hyper-realistic interior renders - making it easier to visualize and quote designs for clients.
                            </p>
                            <p>But while the output was stunning, the workflow wasn’t. Designers were losing precious hours on repetitive tasks like material swapping, property search, and render updates. These inefficiencies slowed down project delivery, frustrated designers, and ultimately risked losing clients to faster-moving competitors.
                            </p>
                            <p>My role was to reimagine the MyDeziner experience - making it faster, smarter, and more intuitive for designers, so CustomFurnish could scale without sacrificing quality or client trust.
                            </p>
                            {/* <ul>
                              <li>Repetitive tasks: Designers often find themselves repeating the same actions for different elements, leading to inefficiencies.</li>
                              <li>Inadequate tools: Existing software solutions fall short in providing the necessary features for modern design workflows.</li>
                            </ul> */}

                          </div>
                        </div>
                        <img src="img/projects/mydeziner/mydeziner-old.png" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" className='fade-inn' loading="lazy" />
                        <div></div>
                        <div className="content-div-main fade-inn  width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">The Challenge
                          </a>
                          <div className='fade-inn' style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p>Interior design is a game of speed and imagination. When a customer comes to CustomFurnish, they expect to see options and quotes quickly. The problem was that MyDeziner’s workflow wasn’t optimized for efficiency:
                            </p>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li>Designers were spending too much time swapping materials manually in renders.</li>
                              <li>The properties lacked a smart search system, making it painful to find the right textures, furniture, or finishes.</li>
                              <li>Copying materials across multiple design properties was time-consuming and repetitive, dragging down overall productivity.</li>
                            </ul>
                            <p >This slowdown wasn’t just inconvenient - it was impacting revenue. In the competitive interior design industry, delays mean losing clients. If one company takes too long to visualize and quote, customers quickly move to a competitor.
                            </p>
                            <p>The challenge was clear: <int>speed up the workflow, without compromising on quality.</int>
                            </p>
                          </div>
                        </div>
                        <div className="content-div-main fade-inn  width-800">
                          <a className="fade-inn content-div-main-heading-2 translate-text-up ">The Solution
                          </a>
                          <div className='fade-inn' style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p >To address these bottlenecks, I redesigned MyDeziner as an intelligent design companion for interior designers at CustomFurnish. The core improvements revolved around three pillars:
                            </p>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li>Developed MyDeziner, a B2B SaaS tool that transforms interior design drawings into realistic renders, speeding up client delivery.</li>
                              <li>Implemented Smart Property Management, enabling designers to store, organize, and reuse frequently used materials and furniture for consistency and efficiency.</li>
                              <li>Introduced Copy & Apply Material, allowing designers to replicate finishes across different elements in seconds instead of repeating manual steps.</li>
                              <li>Added Advanced Property Search, making it effortless to locate any property or material within the system, reducing time wasted in browsing.</li>
                              <li>Streamlined the Workflow into Draw → Apply Render Settings → Generate Gallery, ensuring faster iteration, quicker approvals, and improved client satisfaction.</li>
                            </ul>

                          </div>
                        </div>
                        {/* <div className='tll-video' style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                          <iframe
                            src="https://www.tella.tv/video/cmefkw96o00320cl2fm0w3opk/embed?b=1&title=0&a=1&loop=0&autoPlay=true&t=0&muted=1&wt=0"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              border: 0,
                            }}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowTransparency={true}
                            allowFullScreen
                            title="Tella Video"
                          />
                        </div>      */}
                        <div className='df-g8 fd-c gap-24 margin-unset'>
                          <a className="fade-inn content-div-main-heading-2 translate-text-up width-800">Solution 1 : From Clutter to Clarity: The New Way to Manage Properties
                          </a>
                          <div className='df-g8 fd-c gap-16 width-800'>
                            <a className="fade-inn content-div-main-heading-4   translate-text-up width-800 margin-unset">How I Approached the Problem
                            </a>
                            <p className='fs-italic'>I began by sitting with the people who live this challenge every day - interior design managers. Across 5 interviews, one pattern stood out:
                            </p>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li><int>Material changes ate hours.</int> A single project stretched over 2 days.</li>
                              <li><int>Repetition was the villain.</int> The same clicks, over and over.</li>
                              <li><int>Delays cost business.</int> Clients slipped to faster competitors like Livspace.</li>
                            </ul>
                            <div className='df-g8 fd-c gap-36 margin-unset'>
                              <p>The insight was clear: designers didn’t need more effort, they needed smarter scope.
                              </p>
                            </div>
                          </div>
                          <div className="tll-video fade-inn">
                            <iframe
                              src="https://www.tella.tv/video/cmeh5z6rd001a0bl1eo2a2cyo/embed?b=0&title=0&a=0&loop=0&autoPlay=true&t=0&muted=1&wt=0"
                              allowFullScreen
                              allowTransparency
                              title='Property management'
                            ></iframe>
                          </div>
                          <div className='df-g8 fd-c gap-16 width-800'>
                            <a className="fade-inn content-div-main-heading-4   translate-text-up width-800 margin-unset">The Breakthrough
                            </a>
                            <p>Now, what once took 30–40 minutes happens in 2–3 minutes.
                            </p>
                            <ul className='df-g8 fd-c gap-12 width-800'>
                              <li>Update one handle? It updates across every room.</li>
                              <li>Swap a material? The system ensures instant consistency everywhere.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='df-g8 fd-c gap-24 margin-unset'>
                          <a className="fade-inn content-div-main-heading-2 translate-text-up width-800">Solution 2: Stop Hunting, Start Finding – Smarter Property Search
                          </a>
                          <div className='df-g8 fd-c gap-16 width-800'>
                            <a className="fade-inn content-div-main-heading-4   translate-text-up width-800 margin-unset">How I Approached the Problem
                            </a>
                            <p className='fs-italic'>Designers told me the same pain over and over:
                            </p>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li><int>Too many hidden drawers.</int> Properties like transform, hardware, construction were buried deep.</li>
                              <li>Every time they needed to tweak a detail, they had to click… and click… and click.</li>
                              <li><int>Memory fatigue was real.</int> Clients slipped away to faster competitors like Livspace.</li>
                            </ul>
                            <div className='df-g8 fd-c gap-36 margin-unset'>
                              <p>The insight was clear: designers didn’t need more tools, they needed smarter scope.
                              </p>
                            </div>
                          </div>

                          <div className="tll-video fade-inn">
                            <iframe
                              src="https://www.tella.tv/video/cmeh77dok00000bk1h2r3bjpl/embed?b=0&title=0&a=0&loop=1&autoPlay=true&t=0&muted=1&wt=0"
                              allowFullScreen
                              allowTransparency
                              title='Property Search'
                            ></iframe>
                          </div>
                          <div className='df-g8 fd-c gap-16 width-800'>
                            <a className="fade-inn content-div-main-heading-4   translate-text-up width-800 margin-unset">The Breakthrough
                            </a>
                            <p>Instead of making them remember, I made the system do the remembering.
                            </p>
                            <ul className='df-g8 fd-c gap-12 width-800'>
                              <li>Now, type what you need—“handle,” “transform,” “construction”—and it’s right there.</li>
                              <li>No endless expansion, no hunting through panels, no brain drain.</li>
                              <li>With Property Search, designers don’t need to remember where something lives. They just type “handle” or “hinge” and land on the exact property instantly.</li>
                            </ul>
                          </div>
                        </div>

                        <div className='df-g8 fd-c gap-24 margin-unset'>
                          <a className="fade-inn content-div-main-heading-2 translate-text-up width-800">Solution 3 : Copy Once, Apply Everywhere – Smarter Material Duplication
                          </a>
                          <div className='df-g8 fd-c gap-16 width-800'>
                            <a className="fade-inn content-div-main-heading-4   translate-text-up width-800 margin-unset">How I Approached the Problem
                            </a>
                            <p className='fs-italic'>Through shadowing 4 senior designers, one friction point kept resurfacing:
                            </p>
                            <ul className='df-g8 fd-c gap-12 margin-unset'>
                              <li>Copying materials wasn’t copy-paste simple. It was tedious.</li>
                              <li>Designers recreated the same wardrobe finishes 5–6 times for different rooms.</li>
                              <li>Precious hours were lost to redundancy, instead of refining design.</li>
                            </ul>
                            <div className='df-g8 fd-c gap-36 margin-unset'>
                              <p>The realization? Designers didn’t need a longer workflow. They needed a smarter shortcut.
                              </p>
                            </div>
                          </div>
                          <div className="tll-video fade-inn">
                            <iframe
                              src="https://www.tella.tv/video/cmeh5yeqf00140bie36vu05se/embed?b=0&title=0&a=0&loop=1&autoPlay=true&t=0&muted=1&wt=0"
                              allowFullScreen
                              allowTransparency
                              title='Copy Materials'
                            ></iframe>
                          </div>
                          <div className='df-g8 fd-c gap-16 margin-unset'>
                            <a className="fade-inn content-div-main-heading-4   translate-text-up width-800 mb-unset">The Breakthrough
                            </a>
                            <p className='width-800'>Now, what took 20+ manual steps can be done in just 2 clicks.
                            </p>
                            <ul className='df-g8 fd-c gap-12 width-800'>
                              <li>Copy a material once, apply it anywhere.</li>
                              <li>No rework. No missed details.</li>
                              <li>A consistent look across every project, delivered in seconds.</li>
                            </ul>
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
                                  <p className='width-800 fade-inn'>Beyond measurable gains, MyDeziner shifted perception.
                                    What once felt complex and time-consuming became a reliable, everyday design companion.

                                  </p>
                                  <img src="img/projects/mydeziner/successmetrics.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn width-800" loading="lazy" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>







                {/* <div className="project-details">
                  <div className="p-main-imgs padding-bottom-unset">
                    <div className="p-2imgs-2">
                      <img src="img/projects/petzy.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                      <img src="img/projects/shruh.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                    </div>
                    <div >
                      <img src="img/projects/shruh.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                    </div>
                  </div>
                </div> */}

                {/* <div className="project-details padding-top-unset">
                  <div className="project-final-section">
                    <div className="project-breif-heading fade-inn">
                      <span>05</span>
                      <span>Conclusion</span>
                    </div>
                    <div className="pd-content">
                      <img src="img/projects/customfurnish.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-inn" loading="lazy" />
                      <p>MyDeziner redefines what interior design tools can do, empowering users to turn their creative visions into reality.</p>
                      <p>This project demonstrates my ability to:</p>
                      <p>	•	Build user-centered tools from scratch that address real-world needs.
                      </p>
                      <p>	•	Simplify complex features without sacrificing depth or precision.
                      </p>
                      <p>	•	Ensure high-performance scalability across all platforms.
                      </p>
                      <p>	•	Craft a cohesive brand identity that resonates with users.
                      </p>
                      <p>With MyDeziner, I’ve proven my expertise in product design and innovation, making this case study a testament to my ability to deliver solutions worthy of global leaders like Google, Apple, and Microsoft.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* <div className="bg-full bg-white margin-unset">
                    <div className="bg-main  padding-unset">
                      <div className="project-details">
                        <div className="thankyou-content-heading fade-inn cursor-text">
                          Thank you for viewing. <a className=''
                            href="https://www.figma.com/proto/m3zYF0txidC2O6T98toUB5/MyDeziner-(-WEB-)?page-id=312%3A33670&node-id=312-33671&node-type=frame&viewport=1718%2C1395%2C0.19&t=7dLVBbJUJP2Uvd5V-1&scaling=scale-down&content-scaling=fixed"
                            target="_blank">Have a look</a>
                        </div>
                        <div className="thankyou-content-heading fade-inn">
                        Thank you for viewing. <a
                          href="https://www.figma.com/proto/m3zYF0txidC2O6T98toUB5/MyDeziner-(-WEB-)?page-id=312%3A33670&node-id=312-33671&node-type=frame&viewport=1718%2C1395%2C0.19&t=7dLVBbJUJP2Uvd5V-1&scaling=scale-down&content-scaling=fixed"
                          target="_blank">Have a look</a>
                      </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </section>
        <div className='grain' ></div>
      </main>
      {/* </SmoothScrollProvider> */}
      <Footer />

    </div>
  );
}

export default MyDeziner;