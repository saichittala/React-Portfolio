import useFadeIn from '../components/useFadeIn';
import SmoothScrollProvider from '../components/Scrollsmooth';
import ProjectImpact from '../components/ProjectImpact';
import useScrollReveal from '../components/useScrollReveal';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

function About() {
    useFadeIn();
    useScrollReveal();
    return (
        <div className="content cursor" id="content">
            {/* <SmoothScrollProvider duration={1.3}> */}
            <main>
                <section className="fade-inn">
                    <div className="full-bg">
                        <div className="bg-main">
                            <div className='about-main'>
                                <img src="img/profile-new.webp" alt="" className="fade-inn" loading="lazy" />
                                <div className='df-g8 gap-36 fd-c width-100'>
                                    <p className='width-100'><a className='cursor-link width-100' href='https://www.upwork.com/freelancers/~01762e36a0d1eb9abf/' target='blank'>Sai Chittala</a> is a Senior Product Designer at <a className='cursor-link' href='https://www.groundhogapps.com/' target='blank'>GroundHogApps</a>, with a total of 4+ years of hands-on experience, where I've meticulously crafted visually stunning and inituitive interfaces entirely through my creative touch, utilizing industry-standard tools to consistently set new design standards. Past: <a className='cursor-link' href='https://www.customfurnish.com/' target='blank'>CustomFurnish</a>, <a className='cursor-link' href='https://www.ricoz.in' target='blank'>Ricoz</a>, <a className='cursor-link' href='https://www.upwork.com' >Upwork</a> </p>

                                    <div className="experience-container">
                                        <h3 className="fade-in content-div-main-heading-2 margin-unset">
                                            Experience
                                        </h3>
                                        <div className="timeline fade-in">
                                            {[
                                                {
                                                    company: "Groundhog Apps",
                                                    role: "Senior Product Designer",
                                                    dates: "Oct 2025 – Present",
                                                    logo: "img/logos/gh.webp",
                                                    current: true,
                                                },
                                                {
                                                    company: "Customfurnish",
                                                    role: "UI/UX Designer",
                                                    dates: "Jan 2024 – Jul 2025",
                                                    logo: "img/logos/customfurnish.webp",
                                                },
                                                {
                                                    company: "FirstRicoz",
                                                    role: "UI/UX Designer",
                                                    dates: "Jan 2023 – Dec 2023",
                                                    logo: "img/logos/firstricoz.webp",
                                                },
                                                {
                                                    company: "YallaGai",
                                                    role: "Freelance Product Designer",
                                                    dates: "Feb 2022 – Dec 2022",
                                                    logo: "img/logos/yallagai.webp",
                                                },
                                            ].map((exp, index, arr) => (
                                                <div key={index} className="timeline-row">
                                                    <div className="timeline-left">
                                                        <div className="logo-wrapper">
                                                            <img src={exp.logo} alt={exp.company} />
                                                        </div>
                                                        {index < arr.length - 1 && <div className="timeline-line" />}
                                                    </div>
                                                    <div className="timeline-content">
                                                        <div className="timeline-top">
                                                            <div className="company-block">
                                                                <span className="company-name">{exp.company}</span>
                                                                <span className="role">{exp.role}</span>
                                                            </div>
                                                            <div className="date-block">
                                                                <span className="dates">{exp.dates}</span>
                                                                {exp.current && <span className="current-badge">Current</span>}
                                                            </div>
                                                        </div>
                                                        {index < arr.length - 1 && <div className="row-divider" />}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-metrics-section fade-inn">
                                <ProjectImpact
                                    sectionNumber=""
                                    title="Key Impact Metrics"
                                    metrics={[
                                        { number: "30%", unit: "reduction", description: "in core operator interactions across underground systems" },
                                        { number: "40%", unit: "fewer", description: "clicks required to resolve haul truck dispatch conflicts" },
                                        { number: "50%", unit: "faster", description: "onboarding setup and course completion time" },
                                        { number: "15s", unit: "reduction", description: "in operator response latency to critical dispatch alerts" }
                                    ]}
                                />
                            </div>
                        </div>
                        {/* Hero CTA Section */}
                        <div className="hero-cta-section fade-in">
                            <div className="bg-main hero-cta-container fadeup">
                                <h2 className="hero-cta-heading">
                                    Ready to build something <span>people love?</span>
                                </h2>
                                <div className="hero-cta-button-wrapper">
                                    <div className="hero-cta-avatar">
                                        <img src="img/profile-new.webp" alt="Sai Chittala" />
                                    </div>
                                    <Link to="/contact" className="hero-cta-button">
                                        <span>Let's Talk</span>
                                        <div className="hero-cta-arrow">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* </SmoothScrollProvider> */}
            <Footer />
        </div>
    )
}

export default About;