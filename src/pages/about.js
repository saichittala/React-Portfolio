import useFadeIn from '../components/useFadeIn';
import SmoothScrollProvider from '../components/Scrollsmooth';

function About() {
    useFadeIn();
    return (
        <div className="content cursor" id="content">
            <SmoothScrollProvider duration={1.3}>
            <main>
                <section className="fade-in">
                    <div className="full-bg">
                        <div className="bg-main">
                            <div className='about-main'>
                                <img src="img/profile-png.webp" alt="" className="fade-in" loading="lazy" />
                                <div className='df-g8 gap-36 fd-c width-100'>
                                    <p className='width-100'><a className='cursor-link width-100' href='https://www.upwork.com/freelancers/~01762e36a0d1eb9abf/' target='blank'>Sai Chittala</a> is a Product Designer at <a className='cursor-link' href='https://www.customfurnish.com/' target='blank'>CustomFurnish</a>, with a total of 3+ years of hands-on experience, where I've meticulously crafted visually stunning and inituitive interfaces entirely through my creative touch, utilizing industry-standard tools to consistently set new design standards. Past: <a className='cursor-link' href='https://www.upwork.com' >Upwork</a>, <a className='cursor-link' href='https://www.ricoz.com' target='blank'>Ricoz</a></p>
                                    <p className='width-100'>Currently at <a className='cursor-link' href='https://www.customfurnish.com/' target='blank'>CustomFurnish</a>, Sai leads the end-to-end design of next-gen tools like MyDeziner, a SaaS platform built to streamline the interior design process using intuitive drag-and-drop canvases, 3D visualizations, and real-time collaboration. From ideation to pixel-perfect execution, every screen reflects a commitment to innovation, clarity, and visual storytelling.
                                    </p>
                                    {/* <p className='width-100'>Beyond clean UI and crisp visuals, I specialize in designing experiences that drive real impact—whether it’s increasing conversions, simplifying workflows, or creating emotional moments of delight. At CustomFurnish, I led the design of MyDeziner, a powerful SaaS tool for interior designers that reimagines the design process through drag-and-drop canvases, real-time collaboration, and immersive 3D previews. Every product I touch is rooted in strategy, shaped by research, and polished to pixel-perfection.
                                    </p> */}
                                    {/* <p className='width-100'>I'm passionate about creating user-centric designs that not only look great but also provide a seamless user experience. My expertise lies in understanding user needs and translating them into intuitive interfaces that enhance usability and engagement.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </SmoothScrollProvider>
            {/* <Footer /> */}
        </div>
    )
}

export default About;