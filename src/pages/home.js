import React, { useEffect } from 'react';
import Card from './card';
import Header from './components/header';
import Footer from './components/footer';
import useFadeIn from './components/useFadeIn';
import useScrollEffect from './components/useScrollEffect';

const Home = () => {
  useFadeIn(); // Call the custom hook to trigger fade-in effect
  useScrollEffect(); // Call the custom hook to trigger fade-in effect



  return (
    <div className="content" id="content">
      <Header />
      <main>
        <section className="fade-in">
          <div className="full-bg">
            <div className="bg-main">
              <div className="intro-section-main">
                <div className="intro-section">
                  <div className="intro-content">
                    <div>
                      <p className="intro-white-text fade-in translate-text-down">
                        Sai Chittala <br />
                        <span className="intro-white-text">Product Designer at </span>
                        <a
                          className="company-text"
                          href="https://www.customfurnish.com/home"
                          target="_blank"
                        >
                          CustomFurnish
                        </a>
                        <br />
                        <a
                          href="mailto:sai.chittala@gmail.com"
                          target="_blank"
                          className="intro-grey-text intro-link"
                        >
                          Email
                        </a>
                        <a
                          href="https://www.linkedin.com/in/saichittala/"
                          target="_blank"
                          className="intro-grey-text intro-link"
                        >
                          Linkedin
                        </a>
                        <a
                          href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf"
                          target="_blank"
                          className="intro-grey-text intro-link"
                        >
                          Upwork
                        </a>
                      </p>
                    </div>

                    <div className="cards-container" id="cards-container">
                      <Card />
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
};
export default Home;
