import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color } from 'framer-motion';

const ContactForm = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const inputEl = inputRef.current;
        if (!inputEl) return;

        const updateFilter = () => {
            const rect = inputEl.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const radius = 12; // Matches var(--border-radius-4)
            const borderScale = 0.07;
            const border = Math.min(width, height) * (borderScale * 0.5);

            const svgString = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
                  <defs>
                    <linearGradient id="input-red-grad" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stop-color="#000"/>
                      <stop offset="100%" stop-color="red"/>
                    </linearGradient>
                    <linearGradient id="input-blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#000"/>
                      <stop offset="100%" stop-color="blue"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="${width}" height="${height}" fill="black"></rect>
                  <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#input-red-grad)" />
                  <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#input-blue-grad)" style="mix-blend-mode: difference" />
                  <rect x="${border}" y="${border}" width="${width - border * 2}" height="${height - border * 2}" rx="${radius}" fill="hsl(0 0% 50% / 0.93)" style="filter:blur(11px)" />
                </svg>
            `;

            const encoded = encodeURIComponent(svgString.trim());
            const dataUri = `data:image/svg+xml,${encoded}`;

            const feImage = document.querySelector('#input-filter feImage');
            if (feImage) {
                feImage.setAttribute('href', dataUri);
            }
        };

        const timeoutId = setTimeout(updateFilter, 150);
        window.addEventListener('resize', updateFilter);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updateFilter);
        };
    }, []);

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
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className="sticky-toast"  // 👈 your custom class
            />
            <form
                ref={form}
                onSubmit={sendEmail}
                className="lux-form-wrapper max-w-md mx-auto p-6 space-y-4max-w-md mx-auto p-6 space-y-4 bg-white shadow-md rounded-2xl"
            >
                <h2 className="pd-main-heading-2">Get in touch</h2>
                <div className='df-g8 fd-c gap-8'>
                    <span style={{ color: '#808080', fontSize: '14px', lineHeight: '1.6' }}>Name</span>
                    <div className="confidential-input-wrapper" ref={inputRef}>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="confidential-input"
                        />
                    </div>
                </div>
                <div className='df-g8 fd-c gap-8'>
                    <span style={{ color: '#808080', fontSize: '14px', lineHeight: '1.6' }}>Email</span>
                    <div className="confidential-input-wrapper">
                        <input
                            type="email"
                            name="email"
                            placeholder="demo@gmail.com"
                            required
                            className="confidential-input"
                        />
                    </div>
                </div>
                <div className='df-g8 fd-c gap-8'>
                    <span style={{ color: '#808080', fontSize: '14px', lineHeight: '1.6' }}>Message</span>
                    <div className="confidential-input-wrapper">
                        <textarea
                            name="message"
                            placeholder="Hello, I would like to..."
                            required
                            cols="100"
                            className="confidential-input message-textarea"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isSending}
                    className={`bg-blue-600 text-white px-6 py-3 rounded-lg transition-all w-full font-medium ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                        }`}
                >
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <svg className="filter" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <defs>
                    <filter id="input-filter" colorInterpolationFilters="sRGB">
                        <feImage
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            result="map"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="map"
                            id="input-redchannel"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="dispRed"
                            scale="-40"
                        />
                        <feColorMatrix
                            in="dispRed"
                            type="matrix"
                            values="1 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0"
                            result="red"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="map"
                            id="input-greenchannel"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="dispGreen"
                            scale="-35"
                        />
                        <feColorMatrix
                            in="dispGreen"
                            type="matrix"
                            values="0 0 0 0 0
                                    0 1 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0"
                            result="green"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="map"
                            id="input-bluechannel"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="dispBlue"
                            scale="-30"
                        />
                        <feColorMatrix
                            in="dispBlue"
                            type="matrix"
                            values="0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 1 0 0
                                    0 0 0 1 0"
                            result="blue"
                        />
                        <feBlend in="red" in2="green" mode="screen" result="rg" />
                        <feBlend in="rg" in2="blue" mode="screen" result="output" />
                        <feGaussianBlur in="output" stdDeviation="0.7" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default ContactForm;
