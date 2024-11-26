import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import useFadeIn from '../components/useFadeIn';

function About() {
    useFadeIn();

    return (
        <div className="content cursor" id="content">
            <Header />
            <main>
                <section className="fade-in">
                    <div className="full-bg">
                        <div className="bg-main">
                        <div className='about-main'>
                            <img src="img/sample3.jpg" alt="" className="fade-in" loading="lazy" />
                            <p>Sai Chittala is a designer at customfurnish</p>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About;