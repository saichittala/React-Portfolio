import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) {
            toast.error('🚨 Form not loaded properly!');
            return;
        }

        const formData = new FormData(form.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Validate email format
        if (!isValidEmail(email)) {
            toast.error('❌ Invalid email format. Please enter a valid email.');
            return;
        }

        setIsSending(true);

        // Send email using EmailJS send method with template params
        emailjs.send(
            'service_y2x8hll',       // Replace with your service ID
            'template_nps3254',      // Replace with your template ID
            {
                name,
                email,
                message,
                time: new Date().toLocaleString(),
            },
            '2QhHTr_WSYSZdSM7p'     // Replace with your public key
        ).then(
            (result) => {
                toast.success('Message sent successfully!');
                form.current.reset();
                console.log('Email sent successfully:', result.text);
            },
            (error) => {
                toast.error('🚨 Something went wrong. Please try again later.');
                console.error('FAILED to send email:', error);
            }
        ).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="lux-form-wrapper max-w-md mx-auto p-6 space-y-4max-w-md mx-auto p-6 space-y-4 bg-white shadow-md rounded-2xl"
            >
                <h2 className="pd-main-heading-2">Contact Me</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    disabled={isSending}
                    className={`bg-blue-600 text-white px-6 py-3 rounded-lg transition-all w-full font-medium ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                        }`}
                >
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </>
    );
};

export default ContactForm;
