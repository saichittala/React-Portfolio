import React, { useEffect, useRef } from 'react';
import Header from './components/header';
import Footer from './components/footer';


const Ricoz = () => {
    const fadeInRefs = useRef([]); // Ref array to store all fade-in elements
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

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('fade-in'); // Replace 'old-class' with the class you want to remove
            entry.target.classList.add('fade-in-visible');          
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      // Observe each fade-in element
      fadeInRefs.current.forEach(fadeIn => observer.observe(fadeIn));
  
      // Clean up observer on component unmount
      return () => {
        fadeInRefs.current.forEach(fadeIn => observer.unobserve(fadeIn));
      };
  }, []);

  return (
    <div>
      <div className="loader-styling" id="loader">
        <div id="circleloading" className="circle-loader">
          <div className="circle-input"></div>
          <div className="circle-input"></div>
          <div className="circle-input"></div>
        </div>
        <div id="loading-text">Just a minute</div>
      </div>

      <Header />

      <main>
        <section className="fade-in"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
          <div className="full-bg">
            <div className="bg-main width-unset">
              <div className="project-details-main">
                <div className="project-details">
                  <div className="fade-in p-img-1" ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                    <img  src="/img/sample.jpg" alt="project sample" />
                  </div>
                  <div className="pd-main">
                    <div className="fade-in pd-heading-div"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                      <a className="fade-in pd-main-heading translate-text-up"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>Ricoz</a>
                      <a className="fade-in pd-sub-heading translate-text-down">Website Design</a>
                    </div>
                    <p className="pd-content">This project involved collaborating with a health and wellness company to revamp their brand image and appeal to a younger, more modern audience. The focus was on creating a clean, minimalist visual aesthetic that conveyed the company's commitment to natural, healthy living.</p>
                  </div>
                  <div className="pd-main">
                    <div className="pd-heading-main-div">
                      <div className="pd-heading-sub-div">
                        <a className="fade-in pd-main-heading-2 translate-text-up"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>Project Details</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>- Website Design</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>- Branding</a>
                      </div>
                      <div className="pd-heading-div">
                        <a className="fade-in pd-main-heading-2 translate-text-up"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>Timeline</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>2022-2023</a>
                      </div>
                    </div>
                    <div className="fade-in pd-content"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                      <p>This project involved collaborating with a health and wellness company to revamp their brand image and appeal to a younger, more modern audience. The focus was on creating a clean, minimalist visual aesthetic that conveyed the company's commitment to natural, healthy living.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-full">
                  <div className="p-main-imgs">
                    <div className="fade-in p-img-2"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                      <img  src="/img/sample.jpg" alt="img-content" />
                    </div>
                    <div className="p-2imgs-2">
                      <div className="fade-in p-img-2"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                        <img  src="/img/sample.jpg" alt="img-content" />
                      </div>
                      <div className="fade-in p-img-2"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                        <img  src="/img/sample.jpg" alt="img-content" />
                      </div>
                    </div>
                    <div className="fade-in p-img-2"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>
                      <img  src="/img/sample.jpg" alt="img-content" />
                    </div>
                  </div>
                </div>
                <div className="project-details">
                  <div className="pd-main">
                    <div className="pd-heading-div">
                      <a className="fade-in pd-main-heading-2"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>Conclusion</a>
                    </div>
                    <p className="fade-in pd-content"  ref={(el) => { if (el) fadeInRefs.current.push(el); }}>This project involved collaborating with a health and wellness company to revamp their brand image and appeal to a younger, more modern audience. The focus was on creating a clean, minimalist visual aesthetic that conveyed the company's commitment to natural, healthy living.</p>
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

export default Ricoz;
