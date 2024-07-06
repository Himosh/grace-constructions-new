import React from 'react';
import './about.css';
import Image1 from "../../Images/about-firstImg.jpg";
import Image2 from "../../Images/content-img-1.jpg";
import Image3 from "../../Images/content-img-2.jpg";
import Image4 from "../../Images/last-image.jpg";
import Logo from "../../Images/Mask group.png";

function About() {
    return (
        <>
            <div className='about-page'>

                {/*Header-text*/}
                <div className='about-header'>
                    <h2>Grace Construction,<br></br>
                        A Legacy of Excellence</h2>
                </div>

                {/*First-Image*/}
                <div className='about-firstImage'>
                    <div className='image-container'>
                        <img src={Image1} alt="about-firstImg" width="1240px" height="auto" />
                        <img src={Logo} alt="logo-1" className='logo-overlay' />
                        <div className='hover-overlay'>
                            <div className='hover-overlay-text'>
                                <h3>A Promise of Excellence</h3>
                                <p className='desktop-only'>Our team of skilled professionals is dedicated to turning your vision into reality. We take pride in our
                                    meticulous attention to detail and our ability to seamlessly manage each phase of the construction process.
                                    From initial planning to final completion, we guarantee a smooth and efficient experience,
                                    ensuring that your project is built to last.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="small-img-container">
                    {/*image with text 01*/}
                <div className='about-content-section-1'>
                    <div className='text-content-1'>
                        <p className='desktop-only'>
                            Grace Construction has been a beacon of quality and reliability in the construction industry.
                            Our extensive portfolio boasts numerous successfully completed projects, all delivered on time
                            and with impeccable precision. Our unwavering commitment to excellence ensures that every project,
                            regardless of size or complexity, meets the highest standards of craftsmanship and innovation.
                        </p>
                        <p className='mobile-only'>Grace Construction is known for quality and reliability. We complete projects on time with high standards of craftsmanship and innovation.</p>
                    </div>
        
                    <div className='img-content-1'>
                        <div className='image-container'>
                            <div className="desktop-only">
                                 <img src={Image2} alt="img-1" width="362px" height="368px" />
                            </div>

                            <div className="mobile-only">
                                <img src={Image2} alt="img-1" width="166.5px" height="170px" />
                            </div>
                            
                            <img src={Logo} alt="logo-1" className='logo-overlay1' />
                            <div className='hover-overlay'>
                                <div className='hover-overlay-text'>
                                    <h2>Discover<br /> the Excellence</h2>
                                    <p className='desktop-only'>
                                        Experience the difference that true dedication and expertise can make, and let us bring your vision to life
                                        with precision, integrity, and unmatched craftsmanship.
                                    </p>
                                    <p className='mobile-only'>Grace Construction is known for quality and reliability. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*image with text 02*/}
                <div className='about-content-section-2'>
                    <div className='img-content-2'>
                        <div className='image-container'>
                            <div className="desktop-only">
                                <img src={Image3} alt="img-2" width="362px" height="368px" />
                            </div>
                            <div className="mobile-only">
                                <img src={Image3} alt="img-2" width="166.5px" height="169.26px" />
                            </div>
                            <img src={Logo} alt="logo-1" className='logo-overlay2' />
                            <div className='hover-overlay'>
                                <div className='hover-overlay-text'>
                                    <h2>Experience<br /> the Excellence</h2>
                                    <p className='desktop-only'>Experience the excellence of our construction services, where quality, innovation, and
                                        customer satisfaction are our top priorities.
                                    </p>
                                    <p className='mobile-only'>Grace Construction is known for quality and reliability. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-content-2'>
                        <p className='desktop-only'>
                            We believe in building more than just structures; we build relationships. Our clients trust us to
                            deliver exceptional results, and we take that trust seriously. We prioritize open communication and collaboration,
                            ensuring that your needs and expectations are not only met but exceeded. Our commitment to customer satisfaction
                            is at the heart of everything we do, driving us to constantly innovate and improve.
                        </p>
                        <p className='mobile-only'>We build relationships, not just structures. Clients trust us for exceptional results. We prioritize communication and customer satisfaction.</p>
                    </div>
                </div>
                </div>

                

                {/*last-image*/}
                <div className='last-image'>
                    <div className='image-container'>
                        <img src={Image4} alt="last-img" width="1440px" height="auto" />
                        <img src={Logo} alt="logo-1" className='logo-overlay3' />
                        <div className='hover-overlay'>
                            <div className='hover-overlay-text'>
                                <h3>A History of Excellence.</h3>
                                <p className='desktop-only'>
                                    At our Grace construction, we pride ourselves on a history of excellence. For years, we have been committed
                                    to delivering top-notch service, innovative designs, and superior craftsmanship in every project.
                                    Our dedicated team of professionals ensures that every detail is meticulously handled, from initial planning
                                    to final execution.
                                </p>
                                <br />
                                <p className='desktop-only'>
                                    We prioritize quality, safety, and sustainability, consistently exceeding client expectations.
                                    Our reputation is built on trust, reliability, and a steadfast commitment to excellence.
                                    Whether it's residential, commercial, or industrial construction, we bring our best to every endeavor, creating structures that stand the test of time and relationships that last even longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;
