import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import useFadeIn from '../components/useFadeIn';

function About() {
    useFadeIn();

    return (
        <div className="content cursor light-theme" id="content">
            <Header />
            <main>
                <section className="fade-in">
                    <div className="full-bg">
                        <div className="bg-main">
                        <div className='about-main'>
                            <img src="img/profile.png" alt="" className="fade-in" loading="lazy" />
                            <p>Sai Chittala is a Product Designer at CustomFurnish, with a total of 3+ years of hands-on experience, where I've meticulously crafted visually stunning and intuitive interfaces entirely through my creative touch, utilizing industry-standard tools to consistently set new design standards.</p>
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