import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import useFadeIn from '../components/useFadeIn';
import ContactForm from '../components/ContactForm';

function Contact() {
    useFadeIn();
    return (
        <div className="content cursor" id="content">
            <main>
                <section className="fade-in">
                    <div className="full-bg">
                        <div className="bg-main">
                            <ContactForm />

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact;