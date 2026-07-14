import React from 'react'

function Footer() {
    return (
        <footer>
            <section className="fade-inn">
                <div className="full-bg">
                    <div className="bg-footer">
                        <div className="footer-main">
                            {/* Personal Details */}
                            <div className="footer-content">
                                <a className="footer-white">Sai Chittala</a>
                                <a className="footer-grey ">Product Designer</a>
                            </div>

                            {/* Social Links */}
                            <div className="footer-content">
                                <a
                                    href="https://www.linkedin.com/in/saichittala/"
                                    className="footer-white footer-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.upwork.com/freelancers/~01762e36a0d1eb9abf/"
                                    className="footer-white footer-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Upwork
                                </a>
                            </div>

                            {/* Additional Links */}
                            <div className="footer-content">
                                <a href='/#about' className="footer-white footer-link ">About</a>
                                <a href="Resume.pdf" className="footer-white footer-link">Resume</a>
                            </div>
                        </div>

                        {/* Footer Bottom / Copyright */}
                        <div className="footer-bottom">
                            <span className="footer-copyright">
                                © 2026 Sai Chittala. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
export default Footer
