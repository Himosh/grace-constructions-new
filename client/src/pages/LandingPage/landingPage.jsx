import React, { useState, useEffect } from 'react';
import './landingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const images = [
        '/assets/showcase-buildingg1.jpg',
        '/assets/showcase-buildingg2.jpg',
        '/assets/showcase-buildingg3.jpg',
        '/assets/showcase-buildingg4.jpg',
        '/assets/showcase-buildingg5.jpg',
        '/assets/showcase-buildingg6.jpg',
        '/assets/showcase-buildingg7.jpg',
        '/assets/showcase-buildingg8.jpg',
        '/assets/showcase-buildingg9.jpg'
        // '/assets/heroImg.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesPerSlide, setImagesPerSlide] = useState(3);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - imagesPerSlide, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + imagesPerSlide, images.length - imagesPerSlide)
        );
    };

    const updateImagesPerSlide = () => {
        if (window.innerWidth <= 768) {
            setImagesPerSlide(1);
        } else {
            setImagesPerSlide(3);
        }
    };

    useEffect(() => {
        updateImagesPerSlide();
        window.addEventListener('resize', updateImagesPerSlide);
        return () => window.removeEventListener('resize', updateImagesPerSlide);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + imagesPerSlide >= images.length
                    ? 0
                    : prevIndex + imagesPerSlide
            );
        }, 3000); // Change the image every 3 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, [imagesPerSlide, images.length]);

    return (
        <div className='landing-page'>
            <div className="hero-section">
                <div className="hero-section-left">
                    <div className="hero-section-head">
                        Building Dreams,<br /> Creating Realities!
                    </div>
                    <div className="hero-section-para">
                        At Grace Building Construction, we turn your dreams into reality with precision, integrity, and excellence. Our dedicated team ensures every project is crafted to perfection, one brick at a time.
                    </div>
                    <div className="hero-section-para-mobile">
                        At Grace Building Construction, we turn your dreams into reality with precision, integrity, and excellence, crafting every project to perfection.
                    </div>

                    <div className="hero-button">
                        <Link to="contact">
                            <button className="get-button">Get a quote</button>
                        </Link>
                    </div>
                </div>

                <div className="hero-section-right">
                    <div className="hero-section-img">
                        <img src="/assets/heroImg.jpg" alt="Hero" />
                    </div>
                </div>
            </div>

            <div className="service-section">
                <div className="service-section-head">
                    <div className="desktop-only">
                        What Services, We Give You!
                    </div>
                    <div className="mobile-only">
                        What Services, <br /> We Give You!
                    </div>
                </div>
                <div className="service-box-section">
                    <div className="service-box">
                        <div className="service-box-icon">
                            <img src="/assets/new-building-img.png" alt="New Building" />
                        </div>
                        <div className="service-box-head">
                            New Building Construction
                        </div>
                        <div className="service-box-para">
                            Bring your dream to life. We specialize in constructing high-quality residential, commercial, and industrial spaces.
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-box-icon">
                            <img src="/assets/design-build-img.png" alt="Design and Build" />
                        </div>
                        <div className="service-box-head">
                            Design and Building
                        </div>
                        <div className="service-box-para">
                            We provide Design and Building services, combining innovative design with expert construction to deliver quality results.
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-box-icon">
                            <img src="/assets/renovation-img.png" alt="Renovation" />
                        </div>
                        <div className="service-box-head">
                            Renovation & Remodeling
                        </div>
                        <div className="service-box-para">
                            Revitalize your space with our expert renovation services. We transform your interiors to reflect your vision and style.
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-showcase">
                <div className="work-showcase-head">
                   <div className="desktop-only">
                         Showcase of Our Work
                   </div>

                   <div className="mobile-only">
                        Showcase of <br /> Our Work
                   </div>
                </div>
                <div className="work-showcase-para">
                    <div className="desktop-only">
                    Take a visual tour through our gallery and witness the craftsmanship and dedication that define Grace Building Construction. From stunning residential spaces to impressive commercial projects, see firsthand the quality and attention to detail we bring to every project.
                    </div>
                    <div className="mobile-only">
                    At Grace Building Construction, we turn your dreams into reality with precision, integrity, and excellence, crafting every project to perfection.
                    </div>
                </div>
                <div className="slider-container">
                    <button className="slider-button slider-button-left" onClick={handlePrev}>
                        &lt;
                    </button>
                    <div className="building-images">
                        {images.slice(currentIndex, currentIndex + imagesPerSlide).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Showcase ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button className="slider-button slider-button-right" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>

            <div className="explore-section">
                <div className="explore-section-head">
                    <div className="desktop-only">
                        Explore Our Projects & Opportunities
                    </div>

                    <div className="mobile-only">
                        Explore Our <br /> Projects & Opportunities
                    </div>
                </div>
                <div className="explore-box-section">
                    <div className="explore-box">
                        <div className="explore-box-detail">
                            <div className="explore-count">
                                13+
                            </div>
                            <div className="explore-content">
                                <div className="explore-head">
                                    Ongoing Projects
                                </div>
                                <div className="explore-para">
                                    Explore Our Evolving Ongoing Projects Portfolio
                                </div>
                            </div>
                        </div>
                        <Link to="ongoing-projects" className='link'>
                            <button className="explore-button">
                                View Openings
                            </button>
                        </Link>
                    </div>

                    <div className="explore-box">
                        <div className="explore-box-detail">
                            <div className="explore-count">
                                550+
                            </div>
                            <div className="explore-content">
                                <div className="explore-head">
                                    Completed Projects
                                </div>
                                <div className="explore-para">
                                    Explore Our Accomplished Projects Portfolio.
                                </div>
                            </div>
                        </div>
                        <Link to="completed-projects" className='link'>
                            <button className="explore-button">
                                View Openings
                            </button>
                        </Link>
                    </div>

                    <div className="explore-box">
                        <div className="explore-box-detail">
                            <div className="explore-count">
                                27+
                            </div>
                            <div className="explore-content">
                                <div className="explore-head">
                                    Staff Members
                                </div>
                                <div className="explore-para">
                                    Highlighting the Skilled Team at Grace Construction
                                </div>
                            </div>
                        </div>
                        <Link to="/staff" className='link'>
                            <button className="explore-button">
                                View Openings
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
