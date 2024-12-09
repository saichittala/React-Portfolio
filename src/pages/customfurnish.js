import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FullScrollFadeIn from '../components/FullScrollFadeIn';
import useScrollEffect from '../components/useScrollEffect';
import ZoomOnScroll from '../components/ZoomOnScroll';
import 'react-before-after-slider-component/dist/build.css';


const CustomFurnish = () => {

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

  }, []);


  return (
    <div className='cursor overflow-x-h light-theme'>
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
            <div className=" p-img-1 main-image object-fit">
              <img src="img/projects/customfurnish/showcase.jpg" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer mydeziner" loading="lazy" className='fade-in' />
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
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> 2023-2024
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
                        <a className="fade-in pd-sub-heading-2 translate-text-down">Visual Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down">Service Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Interface Design
                        </a>
                      </div>
                    </div>
                    <div className="pd-main">
                      <div className="   pd-content-main">
                        <img src="img/projects/customfurnish/main.jpg" alt="Sai Chittala UX Designer Portfolio - User Experience Product Designer interior-image-with-luxury-environment" />
                        <int className="fade-in">CustomFurnish is a user-friendly platform offering personalized interior design and furnishing solutions with a focus on style and functionality. Its seamless interface and clear navigation make it an ideal choice for homeowners and professionals alike.</int>
                        <a href='https://www.customfurnish.com' target='blank' className='project-link-btn'>Open Live Website</a>
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
