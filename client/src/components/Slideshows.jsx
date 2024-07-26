import React, { useState, useEffect } from 'react';

const Slideshows = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (!images || images.length === 0) {
        return <p>No images available</p>;
    }

    return (
        <div className="slideshow-container">
            <img src={images[currentImageIndex]} alt="Project Slide" className="slideshow-image" />
            <button onClick={goToPreviousImage} className="slideshow-button prev">❮</button>
            <button onClick={goToNextImage} className="slideshow-button next">❯</button>
        </div>
    );
};

export default Slideshows;
