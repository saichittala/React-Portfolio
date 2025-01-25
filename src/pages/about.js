import React from 'react'
import CustomCursor from '../components/customcursor';
import Header from '../components/header';
import Footer from '../components/footer';
import useFadeIn from '../components/useFadeIn';

function About() {
    useFadeIn();
    return (
        <div className="content cursor light-theme" id="content">
            <CustomCursor />
            <Header />
            <main>
                <section className="fade-in">
                    <div className="full-bg">
                        <div className="bg-main">
                            <div className='about-main'>
                                <img src="img/profile-test.jpg" alt="" className="fade-in" loading="lazy" />
                                <p><a href='https://www.upwork.com/freelancers/~01762e36a0d1eb9abf/' target='blank'>Sai Chittala</a> is a Product Designer at <a href='https://www.customfurnish.com/' target='blank'>CustomFurnish</a>, with a total of 3+ years of hands-on experience, where I've meticulously crafted visually stunning and auitive aerfaces entirely through my creative touch, utilizing industry-standard tools to consistently set new design standards. Past: <a href='https://www.upwork.com' >Upwork</a>, <a href='https://www.ricoz.com' target='blank'>Ricoz</a></p>
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