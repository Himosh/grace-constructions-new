import './ongoingProjectPage.css';
import { useEffect, useState } from 'react';
import ongoingProject from '../../data/ongoingProjects';
import client from "../../assets/icons/client.png";
import completion from "../../assets/icons/completion.png";
import initiation from "../../assets/icons/initiation.png";
import projectValue from "../../assets/icons/projectValue.png";
import supervisor from "../../assets/icons/supervisor.png";
import Location from "../../assets/icons/Location.png";

const OngoingProjectPage = () => {
    const [ongoingProjectData, setOngoingProjectData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [showMore, setShowMore] = useState(null);

    useEffect(() => {
        setOngoingProjectData(ongoingProject);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = ongoingProjectData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleShowMore = (projectId) => {
        setShowMore(showMore === projectId ? null : projectId);
    };

    return (
        <div className='page-container'>
            <div className="page-container-top">
                <h1>Ongoing Projects at Grace Construction</h1>
                <p className='desktop-only'>
                    Embark on an extraordinary odyssey as we unveil the rich tapestry of our diverse and dynamic ongoing projects,
                    where each endeavor serves as a testament to our unwavering commitment to pushing the boundaries of creativity,
                    innovation, and craftsmanship. Join us on this immersive journey as we shape the landscape of tomorrow's construction
                    and development, pioneering new horizons and redefining industry standards along the way.
                </p>
                <p className="mobile-only">
                    Discover our innovative projects shaping the future of construction and development. Join us in redefining industry standards.
                </p>
            </div>
            <div className="page-container-bottom">
                {currentProjects.map(project => (
                    <div className="card-blog" key={project.id}>
                        <h2>{project.title}</h2>
                        <ul className='desktop-only'>
                            <li>
                                <img src={client} alt="Client Icon" className='svg' />
                                <h4>Client</h4>
                                <p>{project.work_place.client}</p>
                            </li>
                            <li>
                                <img src={projectValue} alt="ProjectValue Icon" className='svg' />
                                <h4>Project Value</h4>
                                <p>{project.work_place.projectValue}</p>
                            </li>
                            <li>
                                <img src={initiation} alt="Initiation Icon" className='svg' />
                                <h4>Initiation</h4>
                                <p>{project.work_place.initiation}</p>
                            </li>
                            <li>
                                <img src={completion} alt="Completion Icon" className='svg' />
                                <h4>Completion</h4>
                                <p>{project.work_place.completion}</p>
                            </li>
                            <li>
                                <img src={supervisor} alt="Supervisor Icon" className='svg' />
                                <h4>Supervisor</h4>
                                {project.work_place.supervisors.map((supervisor, index) => (
                                    <div key={index}>
                                        <p>{supervisor.name}<br />{supervisor.role}</p>
                                    </div>
                                ))}
                            </li>
                        </ul>

                        {project.images && project.images.length > 0 ? (
                            <Slideshow images={project.images} />
                        ) : (
                            <p>No images available</p>
                        )}

                        {showMore === project.id && (
                            <ul className='mobile-only'>
                                <li>
                                    <img src={client} alt="Client Icon" className='svg' />
                                    <h4>Client</h4>
                                    <p>{project.work_place.client}</p>
                                </li>
                                <li>
                                    <img src={projectValue} alt="ProjectValue Icon" className='svg' />
                                    <h4>Project Value</h4>
                                    <p>{project.work_place.projectValue}</p>
                                </li>
                                <li>
                                    <img src={initiation} alt="Initiation Icon" className='svg' />
                                    <h4>Initiation</h4>
                                    <p>{project.work_place.initiation}</p>
                                </li>
                                <li>
                                    <img src={completion} alt="Completion Icon" className='svg' />
                                    <h4>Completion</h4>
                                    <p>{project.work_place.completion}</p>
                                </li>
                                <li>
                                    <img src={supervisor} alt="Supervisor Icon" className='svg' />
                                    <h4>Supervisor</h4>
                                    {project.work_place.supervisors.map((supervisor, index) => (
                                        <div key={index}>
                                            <p>{supervisor.name}<br />{supervisor.role}</p>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        )}

                       

                        {showMore !== project.id && (
                            <div className="location-mobile-only">
                                <img src={Location} alt="Location Icon" />
                                <h6>{project.address}</h6>
                                <div className="more">
                                    <button onClick={() => toggleShowMore(project.id)} className="show-more-button">
                                        View More 
                                    </button>
                                    <span className='arrow'>▼</span>
                                </div>
                            </div>
                        )}

                        <div className="location">
                            <img src={Location} alt="Location Icon" />
                            <h6>{project.address}</h6>
                        </div>
                    </div>
                ))}
                <Pagination currentPage={currentPage} totalPages={Math.ceil(ongoingProjectData.length / itemsPerPage)} onPageChange={handlePageChange} />
            </div>
        </div>
    );
};

const Slideshow = ({ images }) => {
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



const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages === 1) return null;

    const maxVisiblePages = 3; // Number of pages to show at once

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Adjust startPage again if currentPage is in the middle and endPage doesn't reach totalPages
    if (currentPage > Math.floor(maxVisiblePages / 2) && totalPages - currentPage < Math.floor(maxVisiblePages / 2)) {
        startPage = Math.max(1, totalPages - maxVisiblePages + 1);
        endPage = totalPages;
    }

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                    Prev
                </button>
            </li>
            {startPage > 1 && (
                <>
                    <li className="page-item">
                        <button className="page-link" onClick={() => onPageChange(1)}>
                            1
                        </button>
                    </li>
                    {startPage > 2 && (
                        <li className="page-item disabled">
                            <span className="page-link">..</span>
                        </li>
                    )}
                </>
            )}
            {pageNumbers.map((page) => (
                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page)}>
                        {page}
                    </button>
                </li>
            ))}
            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && (
                        <li className="page-item disabled">
                            <span className="page-link">..</span>
                        </li>
                    )}
                    <li className="page-item">
                        <button className="page-link" onClick={() => onPageChange(totalPages)}>
                            {totalPages}
                        </button>
                    </li>
                </>
            )}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                    Next
                </button>
            </li>
        </ul>
    );
};



export default OngoingProjectPage;
