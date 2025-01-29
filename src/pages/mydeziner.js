import React, { useEffect } from 'react';
import CustomCursor from '../components/customcursor';
import Header from '../components/header';
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

    const loader = document.getElementById("loader");
    const circleLoader = document.getElementById("circleloading");
    const loadingText = document.getElementById("loading-text");


    // Set initial opacity of the loader (circle and text)
    circleLoader.style.opacity = 0;
    loadingText.style.opacity = 0;
    loader.style.opacity = 1;

    // Set a static loading text
    loadingText.textContent = "Just a minute";

    // Fade in the loader (circles and text)
    setTimeout(() => {
      circleLoader.style.transition = 'opacity 1s';
      loadingText.style.transition = 'opacity 1s';
      circleLoader.style.opacity = 1;
      loadingText.style.opacity = 1;

      // Fade out loader (text and circles) after content is fully loaded
      setTimeout(() => {
        loadingText.style.opacity = 0;
        circleLoader.style.opacity = 0;

        setTimeout(() => {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500);
        }, 500);
      }, 2500);
    }, 500);

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
      <CustomCursor />
      <div className="loader-styling" id="loader">
        <div id="circleloading" className="circle-loader">
          <div className="circle-input"></div>
          <div className="circle-input"></div>
          <div className="circle-input"></div>
        </div>
        <div id="loading-text">Just a minute</div>
      </div>

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

      <Header />

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
                      <a className=" pd-main-heading cursor-textt">MyDeziner</a>
                      <img src="img/arrow-down.svg" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer arrow-down" />
                    </div>
                  </div>

                  <div className="project-breif-section">
                    <div className="project-breif-heading fade-in">
                      <span className='cursor-textt'>01</span>
                      <span className='cursor-textt'>Project Overview</span>
                    </div>
                    <div className="project-breif-main fade-in">
                      <div className="pd-heading-sub-div">
                        <a className="fade-in pd-main-heading-2 translate-text-up cursor-textt"> Project Type
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt"> Product
                          Design</a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up cursor-textt">Timeline</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt"> 2023-2024
                        </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up cursor-textt">Contributors</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt"> Sai Chittala
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt"> Tulasiram Kadiyala </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up cursor-textt">My Contribution</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt">Visual Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt">Service Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt"> Interface Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down cursor-textt"> Interaction Design </a>
                      </div>
                    </div>
                    <div className="pd-main">
                      <div className="   pd-content-main">
                        <ReactBeforeSliderComponent className='fade-in'
                          firstImage={{ "imageUrl": 'img/projects/mydeziner/mydeziner-new.png' }}  // Passing the first image
                          secondImage={{ "imageUrl": 'img/projects/mydeziner/mydeziner-old.png' }}  // Passing the first image
                        />
                        {/* <video 
                          className="fade-in"
                          loading="lazy"
                          preload="metadata"
                          id="myVideo"
                          loop
                          muted
                          autoPlay
                          playsInline
                          disablePictureInPicture>
                          <source src="img/projects/mydeziner/main.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video> */}
                        <int className="fade-in">
                          <p className='cursor-textt'><int>MyDeziner is a game-changing tool</int> for interior designers, crafted from scratch to empower both professionals and everyday users. From designing spaces effortlessly to delivering high-quality renders, it bridges the gap between <int>creativity and functionality.</int></p></int>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span className='cursor-textt'>02</span>
                        <span className='cursor-textt'>Challenges</span>
                      </div>
                      <div className="challenges-main fade-in">
                        <div className="challenges-sub fade-in">
                          <div className="challenge-active-card fade-in">
                            <span className="challenge-heading cursor-textt fade-in">01</span>
                            <span className="challenge-content cursor-textt fade-in">Designing MyDeziner Where Innovation Meets Imagination</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading cursor-textt fade-in">02</span>
                            <span className="challenge-content cursor-textt fade-in">Simplifying Advanced Features Without Losing Depth</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading cursor-textt fade-in">03</span>
                            <span className="challenge-content cursor-textt fade-in">Scaling for Seamless Performance Across Devices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="challenges-content-heading fade-in cursor-textt">
                        Imagine a design tool empowering everyone, balancing simplicity and functionality.                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-full bg-darkgrey">
                  <div className="project-details">
                    <div className="pd-challenges-main ">
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-01 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt"> User-Driven Design</ch>
                          <p className='fade-in cursor-textt'>Every interface was created based on input from professional designers to ensure usability and precision.
                          </p>
                          <img src="img/projects/mydeziner/02/02-01.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" />
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-02 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">Effortless Navigation</ch>
                          <p className='fade-in cursor-textt'>A perfect blend of simplicity and power ensures users can create, modify, and render projects with ease.
                          </p>
                          <video 
                          className="fade-in"
                          loading="lazy"
                          preload="metadata"
                          id="myVideo"
                          loop
                          muted
                          autoPlay
                          playsInline
                          disablePictureInPicture>
                          <source src="img/projects/mydeziner/main.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span className='cursor-textt fade-in'>02</span>
                        <span className='cursor-textt fade-in'>Challenges</span>
                      </div>
                      <div className="challenges-main fade-in">
                        <div className="challenges-sub fade-in">
                          <div className="challenge-inactive-card fade-in">
                            <span className="challenge-heading cursor-textt fade-in">01</span>
                            <span className="challenge-content cursor-textt fade-in">Designing MyDeziner Where Innovation Meets Imagination</span>
                          </div>
                          <div className="challenge-active-card fade-in ">
                            <span className="challenge-heading cursor-textt fade-in">02</span>
                            <span className="challenge-content cursor-textt fade-in">Simplifying Advanced Features Without Losing Depth</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading cursor-textt fade-in">03</span>
                            <span className="challenge-content cursor-textt fade-in">Scaling for Seamless Performance Across Devices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="challenges-content-heading cursor-textt fade-in">
                        What if complex design features felt intuitive and effortless to use?
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-darkgrey">
                  <div className="project-details">
                    <div className="pd-challenges-main ">
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className=" fade-in pd-main-heading-2 cursor-textt"> 02-03 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">Custom Material Uploading</ch>
                          <p className='fade-in cursor-textt'>Upload your own materials in various formats to make each design uniquely yours.</p>
                          <img src="img/projects/mydeziner/02/02-03.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-04 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">Effortless Material Swapping</ch>
                          <p className='fade-in cursor-textt'>Redefine customization with the ability to swap materials instantly, ensuring that every design reflects the user’s unique style.</p>
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
                            <source src="img/projects/mydeziner/02/02-04.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-05 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">IES Lighting Integration</ch>
                          <p className='fade-in cursor-textt'>Improved render quality with customizable lighting for more realistic outputs.</p>
                          <ReactBeforeSliderComponent className='fade-in'
                            firstImage={{ "imageUrl": 'img/projects/mydeziner/02/02-03-before.png' }}  // Passing the first image
                            secondImage={{ "imageUrl": 'img/projects/mydeziner/02/02-03-after.png' }}  // Passing the first image
                          />
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-06 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">Material Copying Made Simple</ch>
                          <p className='fade-in cursor-textt'>Streamline design workflows by copying and pasting materials across multiple objects, ensuring consistency and efficiency in projects.</p>
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
                            <source src="img/projects/mydeziner/02/02-06.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-07 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">Material Favorites for Quick Access</ch>
                          <p className='fade-in cursor-textt'>Users can save their go-to materials and access them instantly for smoother workflows.</p>
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
                            <source src="img/projects/mydeziner/02/02-07.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-08 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">Multi-Level Property Control</ch>
                          <p className='fade-in cursor-textt'>Revolutionize project customization with intuitive property manipulation and room switching, enabling tailored adjustments across spaces.</p>
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
                            <source src="img/projects/mydeziner/02/02-08.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-09 </a>
                        </div>
                        <div className="pd-content cursor-textt">
                          <ch className="fade-in translate-text-up cursor-textt">Custom Model Uploading</ch>
                          <p className='fade-in'>Seamlessly integrates user-created 3D models for full creative control.</p>
                          {/* <img src="img/projects/customfurnish.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in"
                            loading="lazy" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span className='cursor-textt'>02</span>
                        <span className='cursor-textt'>Challenges</span>
                      </div>
                      <div className="challenges-main fade-in">
                        <div className="challenges-sub fade-in">
                          <div className="challenge-inactive-card fade-in">
                            <span className="challenge-heading cursor-textt fade-in">01</span>
                            <span className="challenge-content cursor-textt fade-in">Designing MyDeziner Where Innovation Meets Imagination</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading cursor-textt fade-in">02</span>
                            <span className="challenge-content cursor-textt fade-in">Simplifying Advanced Features Without Losing Depth</span>
                          </div>
                          <div className="challenge-active-card fade-in ">
                            <span className="challenge-heading cursor-textt">03</span>
                            <span className="challenge-content cursor-textt">Scaling for Seamless Performance Across Devices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="challenges-content-heading cursor-textt fade-in">
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
                          <a className=" fade-in pd-main-heading-2 cursor-textt"> 02-10 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">Cross-Device Compatibility</ch>
                          <p className='fade-in cursor-textt'>Provides a seamless experience whether on mobile, tablet, or desktop.</p>
                          <img src="img/projects/mydeziner/02/02-10.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                      <div className="challenges-content-flow video-content-vr">
                        <div className="pd-heading-div">
                          <a className="fade-in pd-main-heading-2 cursor-textt"> 02-11 </a>
                        </div>
                        <div className="pd-content">
                          <ch className="fade-in translate-text-up cursor-textt">VR Experience</ch>
                          <p className='fade-in cursor-textt'>Users can experience real-time VR and immerse themselves in the world of interior design, exploring and choosing beautiful interiors that bring their vision to life in a single platform.</p>
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


                <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset width-unset">
                    <div className="project-details width-unset">
                      <div className="project-breif-heading fade-in">
                        <span className='cursor-textt'>03</span>
                        <span className='cursor-textt'>Process</span>
                      </div>
                      <div className='pd-challenges-main'>
                        <div className="pd-content width-100">
                          <div className='process-card-main fade-in'>
                            <a className='process-card-heading fade-in'><pcard className='cursor-text'>01 Discovery</pcard></a>
                            <div className='process-card-sub'>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>User Interviews</pcard></div>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>Problem Identification</pcard></div>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>Competitor Analysis</pcard></div>
                            </div>
                          </div>
                          <div className='process-card-main fade-in'>
                            <a className='process-card-heading fade-in'><pcard className='cursor-text'>02 Ideation</pcard></a>
                            <div className='process-card-sub'>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>Low Fedility Wireframes</pcard></div>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>User Feedback Loop</pcard></div>
                            </div>
                          </div>
                          <div className='process-card-main fade-in'>
                            <a className='process-card-heading'><pcard className='cursor-text'>03 Design</pcard></a>
                            <div className='process-card-sub fade-in'>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>Moodboards</pcard></div>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>High-Fidelity Wireframes</pcard></div>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>Interactive Prototypes</pcard></div>
                              
                            </div>
                          </div>
                          <div className='process-card-main fade-in'>
                            <a className='process-card-heading fade-in'><pcard className='cursor-text'>04 Development Collaboration</pcard></a>
                            <div className='process-card-sub'>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>Design System</pcard></div>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>Handoff to Developers</pcard></div>
                              <div className='process-card-info fade-in'><pcard className='cursor-text'>QA & Iterations</pcard></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-full bg-white">
                  <div className="bg-main  padding-unset width-unset">
                    <div className="project-details width-unset">
                      <div className="project-breif-heading fade-in">
                        <span className='cursor-textt'>04</span>
                        <span className='cursor-textt'>Brand Design</span>
                      </div>
                      <div className='pd-challenges-main'>
                        <div className="pd-content width-100">
                          <ch className="fade-in translate-text-up light-theme bg-main padding-unset cursor-textt">Colors used</ch>
                          <div className='zoom-image df'>
                            <img src="img/projects/mydeziner/03/brand.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="zoom-in" loading="lazy" />
                          </div>
                        </div>
                        <div className="p-2imgs-2 padding-unset bg-main light-theme">
                          <div className="pd-content width-100">
                            <ch className="fade-in translate-text-up light-theme cursor-textt">Typography</ch>
                            <img src="img/projects/mydeziner/03/typeface.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                          </div>
                          <div className="pd-content width-100">
                            <ch className="fade-in translate-text-up light-theme cursor-textt">Logo</ch>
                            <img src="img/projects/mydeziner/03/logo.png" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" />
                          </div>
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

                <div className="project-details ">
                  <div className="project-breif-section">
                    <div className="project-breif-heading fade-in">
                      <span className='cursor-textt'>05</span>
                      <span className='cursor-textt'>Result</span>
                    </div>
                    <div className="pd-content width-100">
                      {/* <img src="img/projects/customfurnish.webp" alt="Sai Chittala UX Designer Product Designer Visual Designer Interaction Designer Portfolio - User Experience " className="fade-in" loading="lazy" /> */}
                      <p className='fade-in cursor-textt'><ch >Good Website Structure</ch> and <ch >clear navigation.</ch>
                      </p>
                      <p className='fade-in cursor-textt'><ch >50% Faster Workflows</ch> streamlined tools accelerate project completion.
                      </p>
                      <p className='fade-in cursor-textt'>Users praise the tool for its balance of simplicity and power rated <ch>9.4/10 User Satisfaction</ch>
                      </p>
                      <p className='fade-in cursor-textt'><ch>Flawless Multi-Device Experience</ch> Optimized performance on mobile, tablet, and desktop ensures every user can work efficiently.
                      </p>
                    </div>
                  </div>
                </div>

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
                        Thank you for viewing. <a className='cursor-link'
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
      </main>
      <Footer />
    </div>
  );
}

export default MyDeziner;
