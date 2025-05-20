import React, { useEffect } from 'react';
import HeaderNonSticky from '../components/header-non-sticky';
import Footer from '../components/footer';
import FullScrollFadeIn from '../components/FullScrollFadeIn';
import useScrollEffect from '../components/useScrollEffect';
import ZoomOnScroll from '../components/ZoomonScrollscale';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BubbleButton from '../components/BubbleButton';


const CustomFurnish = () => {

  FullScrollFadeIn();
  useScrollEffect();
  ZoomOnScroll();
  const customfurnishRef = React.useRef(null);

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

      <HeaderNonSticky />

      <main>
        <section ref={customfurnishRef}>
          <a href="https://www.customfurnish.com" target="_blank" rel="noopener noreferrer">
          <BubbleButton
            activationRef={customfurnishRef}
            text="Open Live Website"
            showDelay={300} // Text appears after 300ms
            hideDelay={500} // Disappears after 500ms of being small
            size={{
              small: 12,
              large: { width: 216.65, height: 52 }
            }}
            activateAt={-1.2}
            className="custom-bubble-class" // Optional
          >
              <img src="img/open-web.svg" alt="Arrow" />
          </BubbleButton>
        </a>
          <div className="full-bg">
            <div className=" p-img-1 main-image object-fit">
              <img src="img/projects/customfurnish/showcase.png" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" loading="lazy" className='fade-in' />
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
                      <div className="   pd-content-main">
                        <ReactBeforeSliderComponent className='fade-in'
                          firstImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-new.png' }}  // Passing the first image
                          secondImage={{ "imageUrl": 'img/projects/customfurnish/customfurnish-old.png' }}  // Passing the first image
                        />
                        <int className="fade-in">
                          <p className=''> Customfurnish’s redesign transformed its interior design services platform by <int>increasing qualified leads by 25%, boosting user engagement by 40%, and improving retention by 10%</int>. By deeply understanding user pain points and business goals, I led a user-centered, data-driven design process that balanced visual appeal with seamless, trust-building interactions — driving measurable growth and business confidence. <int>creativity and functionality.</int></p></int>
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
