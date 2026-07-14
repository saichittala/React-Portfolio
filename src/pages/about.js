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
                                    <div className='flex-col-g16-mt24' style={{ gap: '20px', marginTop: 0 }}>
                                        <p className='width-100' style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', margin: 0 }}>
                                            I'm a Senior Product Designer with 4+ years of experience designing enterprise SaaS, AI-powered, and B2B products that solve complex business challenges through intuitive, scalable user experiences.
                                        </p>
                                        <p className='width-100' style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', margin: 0 }}>
                                            Currently at <a className='cursor-link' href='https://www.groundhogapps.com/' target='blank'>GroundHog Apps</a>, I design mission-critical mining automation products used in industrial operations, simplifying complex workflows, improving operational efficiency, and helping teams make faster, data-driven decisions. Previously, I've designed AI-powered interior design platforms, real estate experiences, and digital products across startups and freelance engagements.
                                        </p>
                                        <p className='width-100' style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', margin: 0 }}>
                                            I specialize in transforming ambiguity into clear product strategies by combining user research, systems thinking, interaction design, rapid prototyping, usability testing, and scalable design systems. I work closely with product managers, engineers, and business stakeholders to deliver solutions that balance user needs, technical feasibility, and business goals.
                                        </p>
                                        <p className='width-100' style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', margin: 0 }}>
                                            My work has contributed to measurable outcomes, including reducing user interactions by 30%, improving task completion by 60%, increasing lead conversions by 38%, and reducing development rework by 50% through scalable design systems.
                                        </p>
                                        <p className='width-100' style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', margin: 0 }}>
                                            I believe exceptional products aren't defined by beautiful interfaces—they're defined by how effortlessly users achieve their goals. Every decision I make is driven by clarity, usability, accessibility, and measurable business impact.
                                        </p>
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
                            <div className="about-experience-section fade-inn" style={{ marginTop: '80px', width: '100%' }}>
                                <div className="project-details padding-top-unset">
                                    <div className="project-breif-heading width-800 fade-inn">
                                        <span>05</span>
                                        <span>Experience</span>
                                    </div>
                                    <div className="content-div-main fade-inn width-800" style={{ paddingBottom: 0 }}>
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