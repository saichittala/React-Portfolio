import React, { useEffect} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import useFadeIn from './components/useFadeIn';
import useScrollEffect from './components/useScrollEffect';



const MyDeziner = () => {
  useFadeIn();
  useScrollEffect();

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

    // Clean up effect when component is unmounted
    return () => {
      // No observer to clean up anymore
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
        <section>
          <div className="full-bg">
            <div className=" p-img-1 main-image">
              <img src="img/projects/mydeziner.webp" alt="mydeziner" loading="lazy" />
            </div>
            <div className="bg-main width-unset mobile-bg-main">
              <div className="project-details-main">
                <div className="project-details padding-top-unset">

                  <div className="pd-main">
                    <div className="fade-in pd-heading-div">
                      <a className="fade-in pd-main-heading translate-text-up">MyDeziner</a>
                    </div>
                    <p className="pd-content"> </p>
                  </div>

                  <div className="project-breif-section">
                    <div className="project-breif-heading">
                      <span className="fade-in">01</span>
                      <span className="fade-in">Project Overview</span>
                    </div>
                    <div className="project-breif-main fade-in">
                      <div className="pd-heading-sub-div">
                        <a className="fade-in pd-main-heading-2 translate-text-up"> Project Type
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Product
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
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Tulasiram Kadiyala </a>
                      </div>
                      <div className="pd-heading-div-main">
                        <a className="fade-in pd-main-heading-2 translate-text-up">My Contribution</a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down">Visual Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down">Service Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Interface Design
                        </a>
                        <a className="fade-in pd-sub-heading-2 translate-text-down"> Interaction Design </a>
                      </div>
                    </div>
                    <div className="pd-main">
                      <div className="   pd-content-main">
                        <video className="fade-in" loading="lazy" preload="metadata" controls>
                          <source src="img/projects/mydeziner/main.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <p className="fade-in">MyDeziner is a comprehensive interior design software
                          tailored for design
                          professionals and businesses. It offers a centralized dashboard with
                          tools
                          to manage projects, inventory, material uploads/downloads, and pricing.
                          Users can create custom material combinations, set preferences, and
                          control
                          margins for products. The platform supports seamless staff management
                          and
                          efficient organization of loose goods and services. Designed for
                          flexibility, it empowers users to streamline workflows and elevate
                          interior
                          design projects.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span>02</span>
                        <span>Challenges</span>
                      </div>
                      <div className="challenges-main">
                        <div className="challenges-sub">
                          <div className="challenge-active-card fade-in">
                            <span className="challenge-heading">01</span>
                            <span className="challenge-content">User Experience Optimization for Diverse
                              Design Styles</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading">02</span>
                            <span className="challenge-content">Integration of Real-Time Collaboration
                              Features</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading">03</span>
                            <span className="challenge-content">Scalability and Performance in Complex
                              Designs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="challenges-content-heading fade-in">
                        Imagine a design tool that adapts to every style, blending creativity and
                        functionality seamlessly.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-full bg-darkgrey">
                  <div className="project-details">
                    <div className="pd-challenges-main ">
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className=" fade-in pd-main-heading-2"> 02-01 </a>
                        </div>
                        <div className="pd-content">
                          <ch>Design Flexibility</ch>
                          <p className='fade-in'>One of the key challenges in developing MyDeziner was creating a
                            platform that could effortlessly accommodate every design style. From
                            minimalist to vintage, interior designers needed a tool that balanced
                            flexibility with simplicity. The goal was to provide customizable
                            features—like drag-and-drop elements and adaptive layouts—without
                            overwhelming users. With continuous iteration and user feedback,
                            MyDeziner
                            became a versatile yet intuitive solution, empowering designers to bring
                            their creative visions to life with ease and precision.</p>
                          <img src="img/projects/mydeziner/02/02-01.png" alt="" className="fade-in" />
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="  pd-main-heading-2"> 02-02 </a>
                        </div>
                        <div className="pd-content">
                          <ch>Creative Freedom</ch>
                          <p className='fade-in'>MyDeziner unlocks endless possibilities, allowing designers to
                            effortlessly switch between modern minimalism and timeless classics.
                            Every
                            feature is designed to enhance creativity without overwhelming users,
                            providing a seamless experience. With intuitive tools and adaptive
                            layouts,
                            MyDeziner empowers designers to transform their vision into reality, one
                            click at a time.
                          </p>
                          <img src="img/projects/customfurnish.webp" alt="" className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="  pd-main-heading-2"> 02-03 </a>
                        </div>
                        <div className="pd-content">
                          <ch>Seamless Innovation</ch>
                          <p className='fade-in'>MyDeziner redefines how interior designers interact with their
                            projects, offering a perfect blend of flexibility and user-friendliness.
                            With customizable textures, drag-and-drop elements, and real-time
                            adjustments, it’s an experience built for modern creativity. Design
                            effortlessly and make every space come to life with innovation at your
                            fingertips.
                          </p>
                          <img src="img/projects/customfurnish.webp" alt="" className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span>02</span>
                        <span>Challenges</span>
                      </div>
                      <div className="challenges-main">
                        <div className="challenges-sub">
                          <div className="challenge-inactive-card fade-in">
                            <span className="challenge-heading">01</span>
                            <span className="challenge-content">User Experience Optimization for Diverse
                              Design Styles</span>
                          </div>
                          <div className="challenge-active-card fade-in ">
                            <span className="challenge-heading">02</span>
                            <span className="challenge-content">Integration of Real-Time Collaboration
                              Features</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading">03</span>
                            <span className="challenge-content">Scalability and Performance in Complex
                              Designs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="challenges-content-heading fade-in">
                        A seamless collaboration tool built for real-time Creativity and Teamwork.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-darkgrey">
                  <div className="project-details">
                    <div className="pd-challenges-main ">
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className=" fade-in pd-main-heading-2"> 02-01 </a>
                        </div>
                        <div className="pd-content">
                          <ch>Heading</ch>
                          <p fade-in> This project involved collaborating with a health and
                            wellness company
                            to revamp their
                            brand image and appeal to a younger, more modern audience. The focus was
                            on
                            creating
                            a
                            clean, minimalist visual aesthetic that conveyed the company's
                            commitment to
                            natural,
                            healthy living.</p>
                          <img src="img/projects/customfurnish.webp" alt="" className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="  pd-main-heading-2"> 02-02 </a>
                        </div>
                        <div className="pd-content">
                          <ch>Heading</ch>
                          <p className='fade-in'> This project involved collaborating with a health and
                            wellness company
                            to revamp their
                            brand image and appeal to a younger, more modern audience. The focus was
                            on
                            creating
                            a
                            clean, minimalist visual aesthetic that conveyed the company's
                            commitment to
                            natural,
                            healthy living.</p>
                          <img src="img/projects/customfurnish.webp" alt="" className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="bg-full bg-grey">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span>02</span>
                        <span>Challenges</span>
                      </div>
                      <div className="challenges-main">
                        <div className="challenges-sub">
                          <div className="challenge-inactive-card fade-in">
                            <span className="challenge-heading">01</span>
                            <span className="challenge-content">User Experience Optimization for Diverse
                              Design Styles</span>
                          </div>
                          <div className="challenge-inactive-card fade-in ">
                            <span className="challenge-heading">02</span>
                            <span className="challenge-content">Integration of Real-Time Collaboration
                              Features</span>
                          </div>
                          <div className="challenge-active-card fade-in ">
                            <span className="challenge-heading">03</span>
                            <span className="challenge-content">Scalability and Performance in Complex
                              Designs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="challenges-content-heading fade-in">
                        Imagine having your concentrated,
                        limitless workspace with you
                        wherever you go.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-darkgrey">
                  <div className="project-details">
                    <div className="pd-challenges-main ">
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className=" fade-in pd-main-heading-2"> 02-01 </a>
                        </div>
                        <div className="pd-content">
                          <ch>Heading</ch>
                          <p className='fade-in'> This project involved collaborating with a health and
                            wellness company
                            to revamp their
                            brand image and appeal to a younger, more modern audience. The focus was
                            on
                            creating
                            a
                            clean, minimalist visual aesthetic that conveyed the company's
                            commitment to
                            natural,
                            healthy living.</p>
                          <img src="img/projects/customfurnish.webp" alt="" className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                      <div className="challenges-content-flow">
                        <div className="pd-heading-div">
                          <a className="  pd-main-heading-2"> 02-02 </a>
                        </div>
                        <div className="pd-content">
                          <ch>Heading</ch>
                          <p className='fade-in'> This project involved collaborating with a health and
                            wellness company
                            to revamp their
                            brand image and appeal to a younger, more modern audience. The focus was
                            on
                            creating
                            a
                            clean, minimalist visual aesthetic that conveyed the company's
                            commitment to
                            natural,
                            healthy living.</p>
                          <img src="img/projects/customfurnish.webp" alt="" className="fade-in"
                            loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="bg-full bg-white">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="project-breif-heading fade-in">
                        <span>03</span>
                        <span>Brand Design</span>
                      </div>
                      <img src="img/projects/customfurnish.webp" alt="" className="fade-in" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <div className="p-main-imgs">
                    <div className="p-2imgs-2">
                      <img src="img/projects/petzy.webp" alt="" className="fade-in" loading="lazy" />
                      <img src="img/projects/shruh.webp" alt="" className="fade-in" loading="lazy" />
                    </div>
                    <img src="img/sample4.jpg" alt="" className="fade-in" loading="lazy" />
                  </div>
                </div>

                <div className="project-details padding-top-unset">
                  <div className="project-breif-section">
                    <div className="project-breif-heading">
                      <span className="fade-in">04</span>
                      <span className="fade-in">Result</span>
                    </div>
                    <img src="img/sample3.jpg" alt="" className="fade-in" loading="lazy" />
                  </div>
                </div>

                <div className="project-details padding-top-unset">
                  <div className="project-final-section">
                    <div className="project-breif-heading">
                      <span className="fade-in">05</span>
                      <span className="fade-in">Conclusion</span>
                    </div>
                    <div className="pd-content">
                      <img src="img/projects/customfurnish.webp" alt="" className="fade-in" loading="lazy"/>
                        <p className='fade-in'> This project involved collaborating with a health and
                          wellness company
                          to revamp their
                          brand image and appeal to a younger, more modern audience. The focus was on
                          creating
                          a
                          clean, minimalist visual aesthetic that conveyed the company's commitment to
                          natural,
                          healthy living.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-full bg-white margin-unset">
                  <div className="bg-main  padding-unset">
                    <div className="project-details">
                      <div className="thankyou-content-heading fade-in">
                        Thank you for viewing. <a
                          href="https://www.figma.com/proto/m3zYF0txidC2O6T98toUB5/MyDeziner-(-WEB-)?page-id=312%3A33670&node-id=312-33671&node-type=frame&viewport=1718%2C1395%2C0.19&t=7dLVBbJUJP2Uvd5V-1&scaling=scale-down&content-scaling=fixed"
                          target="_blank">Have a look</a>
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

export default MyDeziner;
