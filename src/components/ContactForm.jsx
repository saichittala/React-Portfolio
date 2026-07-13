import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlassSurface from './GlassSurface';

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
                    <GlassSurface
                        width="100%"
                        height="auto"
                        borderRadius={12}
                        distortionScale={-40}
                        redOffset={0}
                        greenOffset={5}
                        blueOffset={10}
                        yChannel="B"
                        className="confidential-input-glass-wrapper"
                        contentStyle={{ padding: 0 }}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="confidential-input"
                        />
                    </GlassSurface>
                </div>
                <div className='df-g8 fd-c gap-8'>
                    <span style={{ color: '#808080', fontSize: '14px', lineHeight: '1.6' }}>Email</span>
                    <GlassSurface
                        width="100%"
                        height="auto"
                        borderRadius={12}
                        distortionScale={-40}
                        redOffset={0}
                        greenOffset={5}
                        blueOffset={10}
                        yChannel="B"
                        className="confidential-input-glass-wrapper"
                        contentStyle={{ padding: 0 }}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="demo@gmail.com"
                            required
                            className="confidential-input"
                        />
                    </GlassSurface>
                </div>
                <div className='df-g8 fd-c gap-8'>
                    <span style={{ color: '#808080', fontSize: '14px', lineHeight: '1.6' }}>Message</span>
                    <GlassSurface
                        width="100%"
                        height="auto"
                        borderRadius={12}
                        distortionScale={-40}
                        redOffset={0}
                        greenOffset={5}
                        blueOffset={10}
                        yChannel="B"
                        className="confidential-input-glass-wrapper"
                        contentStyle={{ padding: 0 }}
                    >
                        <textarea
                            name="message"
                            placeholder="Hello, I would like to..."
                            required
                            cols="100"
                            className="confidential-input message-textarea"
                        />
                    </GlassSurface>
                </div>
                <button
                    type="submit"
                    disabled={isSending}
                >
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </>
    );
};

export default ContactForm;
