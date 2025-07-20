import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import useFadeIn from '../components/useFadeIn';
import ContactForm from '../components/ContactForm';

function About() {
    useFadeIn();
    return (
        <div className="content cursor" id="content">
            <main>
                <section className="fade-in">
                    <div className="full-bg">
                        <div className="bg-main">
                            <div className='about-main'>
                                <img src="img/profile-test.jpg" alt="" className="fade-in" loading="lazy" />
                                <div className='df-g8 gap-72 fd-c width-100'>
                                    <p className='width-100'><a className='cursor-link width-100' href='https://www.upwork.com/freelancers/~01762e36a0d1eb9abf/' target='blank'>Sai Chittala</a> is a Product Designer at <a className='cursor-link' href='https://www.customfurnish.com/' target='blank'>CustomFurnish</a>, with a total of 3+ years of hands-on experience, where I've meticulously crafted visually stunning and inituitive interfaces entirely through my creative touch, utilizing industry-standard tools to consistently set new design standards. Past: <a className='cursor-link' href='https://www.upwork.com' >Upwork</a>, <a className='cursor-link' href='https://www.ricoz.com' target='blank'>Ricoz</a></p>
                                    {/* <p className='width-100'>I'm passionate about creating user-centric designs that not only look great but also provide a seamless user experience. My expertise lies in understanding user needs and translating them into intuitive interfaces that enhance usability and engagement.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default About;