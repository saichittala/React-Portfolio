import React from 'react';
import Card from './card';
import Header from './components/header';
import Footer from './components/footer';
import useFadeIn from './components/useFadeIn';
import useScrollEffect from './components/useScrollEffect';

const Home = () => {
  useFadeIn();
  useScrollEffect();
  const cardsData = [
    { title: "MyDeziner", type: "Product Design", image: "img/projects/mydeziner.webp", link: "#/mydeziner", openInNewTab: true, locked: false },
    { title: "CustomFurnish", type: "UX Design", image: "img/projects/customfurnish.webp", link: "#/customfurnish", openInNewTab: true, locked: false },
    { title: "HomeGymr", type: "UX Design", image: "img/projects/homegymr.webp", link: "https://www.homegymr.in/checkout?id=1&quantity=1", openInNewTab: true, locked: false },
    { title: "Petzy", type: "Case Study", image: "img/projects/petzy.webp", link: "https://medium.com/@sai.chittala/case-study-petzy-petcare-application-aafe32d42117", openInNewTab: true },
    { title: "Yalla Gai", type: "UX Design", image: "img/projects/yallagai.webp", link: "https://www.figma.com/design/c5Yd43Xo4ipF1FKnInr7Vv/Yalla-Gai?node-id=0-1&t=QdQPmGsy97stJ8cE-1", openInNewTab: true, locked: false },
    { title: "Temple Address", type: "UX Design", image: "img/projects/templeaddress.webp", link: "https://www.figma.com/design/oerkBSCwxTmg7fMqVmoplQ/Temple-Address?node-id=0-1&t=LHGxQF1KPRmfWLC2-1", openInNewTab: true, locked: false },
    { title: "Shruh", type: "UX Design", image: "img/projects/shruh.webp", link: "https://www.figma.com/design/rD9xg05vO3epMZ8RAoapWc/Shruh?node-id=0-1&t=4pvPTSg8AhOHQU6P-1", openInNewTab: true, locked: true, password: "surya@123" },
    { title: "Muzicon", type: "UX Design", image: "img/projects/muzicon.webp", link: "https://www.figma.com/design/am0L5WJY9SNoQGUFZQcSkK/Muzicon?node-id=0-1&t=2yzxTpLJFMqdoBGX-1", openInNewTab: true, locked: false },
  ];



  return (
    <div className="content cursor" id="content">
      <Header />
      <main>
        <section className="fade-in">
          <div className="full-bg">
            <div className="bg-main">
              <div className="intro-section-main">
                <div className="intro-section">
                  <div className="intro-content">
                    <p className="intro-white-text fade-in translate-text-down">
                      Sai Chittala <br />
                      <span className="intro-white-text">Product Designer at </span>
                      <a className="company-text" href="https://www.customfurnish.com/home" target="_blank" rel="noopener noreferrer">
                        CustomFurnish
                      </a>
                      <br />
                      <a href="mailto:sai.chittala@gmail.com" target="_blank" className="intro-grey-text intro-link" rel="noopener noreferrer">
                        Email
                      </a>
                      <a href="https://www.linkedin.com/in/saichittala/" target="_blank" className="intro-grey-text intro-link" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <a href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf" target="_blank" className="intro-grey-text intro-link" rel="noopener noreferrer">
                        Upwork
                      </a>
                    </p>

                    <div className="cards-container" id="cards-container">
                      {cardsData.map((card, index) => (
                        <Card key={index} {...card} />
                      ))}
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
