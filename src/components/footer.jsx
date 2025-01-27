import React from 'react'

function footer() {
    return (
        <footer>
            <section className="fade-in">
                <div className="full-bg">
                    <div className="bg-footer">
                        <div className="footer-main">
                            {/* Personal Details */}
                            <div className="footer-content">
                                <a className="footer-white cursor-text">Sai Chittala</a>
                                <a className="footer-grey cursor-text">Product Designer</a>
                            </div>

                            {/* Social Links */}
                            <div className="footer-content">
                                <a
                                    href="https://www.linkedin.com/in/saichittala/"
                                    className="footer-white cursor-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf/"
                                    className="footer-white cursor-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Upwork
                                </a>
                            </div>

                            {/* Additional Links */}
                            <div className="footer-content">
                                <a href='/#about' className="footer-white cursor-link">About</a>
                                <a href="Resume.pdf" className="footer-white cursor-link">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
export default footer
