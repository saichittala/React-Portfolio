import { useEffect } from 'react';
import Footer from '../components/footer';
import FullScrollFadeIn from '../components/FullScrollFadeIn';
import useScrollEffect from '../components/useScrollEffect';
import ZoomOnScroll from '../components/ZoomOnScroll';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const MyDeziner = () => {

  FullScrollFadeIn();
  useScrollEffect();
  ZoomOnScroll();
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
    const video = document.getElementById('myVideo');

    // Add an event listener to pause the video once manually paused
    video.addEventListener('pause', () => {
      // Stop the video when paused by the user
      video.currentTime = 0;
    });

    // Clean up effect when component is unmounted
    return () => {
      // No observer to clean up anymore
    };
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


      <main>

        <section>

          <div className="full-bg">
            <div className=" p-img-1 main-image">
              <img src="img/projects/mydeziner.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience mydeziner" loading="lazy" className='fade-in' />
            </div>
            <div className="bg-main width-unset mobile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="pd-heading-div p-head-arrow">
                      <a className=" pd-main-heading ">MyDeziner</a>
                      <img src="img/arrow-down.svg" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer arrow-down" />
                    </div>
                  </div>

                  <div className="project-breif-section">
                    <div className="project-breif-heading fade-in">
                      <span className=''>01</span>
                      <span className=''>Project Overview</span>
                    </div>
                    <div className="project-breif-main fade-in">
                      <div className="pd-heading-sub-div">
                        <a className="fade-in pd-main-heading-2 translate-text-up "> Project Type
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down "> Product
                          Design</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up ">Timeline</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down "> 2023-2024
                        </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up ">Contributors</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down "> Sai Chittala
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down "> Tulasiram Kadiyala </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up ">My Contribution</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down ">Visual Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down ">Service Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down "> Interface Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down "> Interaction Design </a>
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
                            <p className='fade-in'>MyDeziner is a powerful interior design software that enables designers to draw, configure, and render hyper-realistic interiors—all in one place. From layout creation to photorealistic renders, it simplifies complex workflows and brings unmatched control to interior professionals.
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
                            <p className='fade-in'>Interior designers were stuck in repetitive, frustrating loops—applying the same materials, properties, and styles over and over for each object. No global controls. No smart search. No way to copy styles quickly. This made designing slow, inconsistent, and honestly... painful.
                            </p>
                          </div>
                        </div>
                        <img src="img/projects/mydeziner/mydeziner-old.png" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" className='fade-in' loading="lazy" />
                        <div></div>
                        <div className="content-div-main fade-in  width-800">
                          <a className="fade-in content-div-main-heading-2 translate-text-up ">The Solution
                          </a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-in'>We introduced a multi-scope property manager, lightning-fast property search, and copy-paste styling tools that let designers work at 10x speed. Now they can define preferences at the object, room, or project level—and reuse them instantly.
                            </p>
                          </div>
                        </div>
                        <img src="img/projects/mydeziner/mydeziner-new.png" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" className='fade-in' loading="lazy" />

                      </div>
                    </div>
                  </div>
                </div>


                <div className="bg-full margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details padding-top-unset">
                      <div className="project-breif-heading width-800 fade-in">
                        <span className=''>02</span>
                        <span className=''>Research</span>
                      </div>
                      <div className="project-details-internal">
                        {/* <div className="width-800 fade-in">
                          <p><int>Here's my design process :</int></p>
                        </div> */}
                        <div className="content-div-main fade-in width-800">
                          <a className="fade-in content-div-main-heading-2 translate-text-up ">Design Process</a>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <p className='fade-in'>User Research – Interviews + task shadowing</p>
                            <p className='fade-in'>Defined Core UX Problems – Found 60%+ time wasted on repetition</p>
                            <p className='fade-in'>Wireframes & Prototypes – Tested ideas fast with Figma + live mockups</p>
                            <p className='fade-in'>Usability Testing – 3 rounds, 6 designers</p>
                            <p className='fade-in'>Behavior Analysis – Clarity + click heatmaps</p>
                          </div>
                        </div>
                        <img src="img/projects/mydeziner/mydeziner-new.png" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" className='fade-in' loading="lazy" />
                      </div>
                      <div className='width-800 project-details-subinternal'>
                        <div className="pd-content width-800 fade-in">
                          <ch className="fade-in translate-text-up">User Insights</ch>
                          {/* <img src="img/projects/customfurnish/userinsights.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" /> */}
                        </div>
                        <p className='width-800'><int>We didn’t stop at assumptions—we spoke to 6 interior designers and observed them using MyDeziner and competitor tools.</int></p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <p className='fade-in'>Users repeatedly applied the same materials to multiple objects (and got annoyed doing it one by one).

                          </p>
                          <p className='fade-in'>Long property lists overwhelmed users—they forgot what they were looking for halfway through scrolling.</p>
                          <p className='fade-in'>Users struggled to maintain visual consistency across objects and rooms.

                          </p>
                        </div>


                      </div>
                      <div className='width-800 project-details-subinternal'>
                        <p className='width-800'><int>We explored major players like Foyr, SketchUp, and Homestyler to understand what made them work—and where they failed:
                        </int></p>
                        <div className="pd-content width-800 fade-in">
                          <ch className="fade-in translate-text-up  width-800">Competitve Analysis</ch>
                          <img src="img/projects/mydeziner/companalysis.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in width-100" loading="lazy" />
                        </div>
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



                      {/* <div className="thankyou-content-heading fade-in">
                        Thank you for viewing. <a
                          href="https://www.figma.com/proto/m3zYF0txidC2O6T98toUB5/MyDeziner-(-WEB-)?page-id=312%3A33670&node-id=312-33671&node-type=frame&viewport=1718%2C1395%2C0.19&t=7dLVBbJUJP2Uvd5V-1&scaling=scale-down&content-scaling=fixed"
                          target="_blank">Have a look</a>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="challenges-content-heading  fade-in">
                        How do you create a tool that performs flawlessly, no matter the device?
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-darkgrey">
                  <div className="project-details">
                    <div className="pd-challenges-main">
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className=" fade-in pd-main-heading-2 "> 02-10 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up ">Cross-Device Compatibility</ch>
                          <p className='fade-in '>Provides a seamless experience whether on mobile, tablet, or desktop.</p>
                          <img src="img/projects/mydeziner/02/02-10.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                      <div className="challenges-content-flow video-content-vr">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 "> 02-11 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up ">VR Experience</ch>
                          <p className='fade-in '>Users can experience real-time VR and immerse themselves in the world of interior design, exploring and choosing beautiful interiors that bring their vision to life in a single platform.</p>
                          <video
                            className="fade-in"
                            loading="lazy"
                            preload="metadata"
                            disablePictureInPicture
                            id="myVideo"
                            loop
                            muted
                            autoPlay
                            playsInline>
                            <source src="img/projects/mydeziner/mydeziner-vr.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>





                {/* <div className="project-details">
                  <div className="p-main-imgs padding-bottom-unset">
                    <div className="p-2imgs-2">
                      <img src="img/projects/petzy.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                      <img src="img/projects/shruh.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                    </div>
                    <div >
                      <img src="img/projects/shruh.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                    </div>
                  </div>
                </div> */}

                {/* <div className="project-details padding-top-unset">
                  <div className="project-final-section">
                    <div className="project-breif-heading fade-in">
                      <span>05</span>
                      <span>Conclusion</span>
                    </div>
                    <div className="pd-content">
                      <img src="img/projects/customfurnish.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                      <p className='fade-in'>MyDeziner redefines what interior design tools can do, empowering users to turn their creative visions into reality.</p>
                      <p className='fade-in'>This project demonstrates my ability to:</p>
                      <p className='fade-in'>	•	Build user-centered tools from scratch that address real-world needs.
                      </p>
                      <p className='fade-in'>	•	Simplify complex features without sacrificing depth or precision.
                      </p>
                      <p className='fade-in'>	•	Ensure high-performance scalability across all platforms.
                      </p>
                      <p className='fade-in'>	•	Craft a cohesive brand identity that resonates with users.
                      </p>
                      <p className='fade-in'>With MyDeziner, I’ve proven my expertise in product design and innovation, making this case study a testament to my ability to deliver solutions worthy of global leaders like Google, Apple, and Microsoft.
                      </p>
                    </div>
                  </div>
                </div> */}

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="thankyou-content-heading fade-in cursor-text">
                        Thank you for viewing. <a className=''
                          href="https://www.figma.com/proto/m3zYF0txidC2O6T98toUB5/MyDeziner-(-WEB-)?page-id=312%3A33670&node-id=312-33671&node-type=frame&viewport=1718%2C1395%2C0.19&t=7dLVBbJUJP2Uvd5V-1&scaling=scale-down&content-scaling=fixed"
                          target="_blank">Have a look</a>
                      </div>
                      {/* <div className="thankyou-content-heading fade-in">
                        Thank you for viewing. <a
                          href="https://www.figma.com/proto/m3zYF0txidC2O6T98toUB5/MyDeziner-(-WEB-)?page-id=312%3A33670&node-id=312-33671&node-type=frame&viewport=1718%2C1395%2C0.19&t=7dLVBbJUJP2Uvd5V-1&scaling=scale-down&content-scaling=fixed"
                          target="_blank">Have a look</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='grain' ></div>
      </main>
      <Footer />
      {/* </LuxurySmoothScroll> */}

    </div>
  );
}

export default MyDeziner;