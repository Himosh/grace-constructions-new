import React, { useEffect, useState } from 'react';
import completedProject from '../../data/completedProjects';
import Pagination from '../../components/Pagination'; 
import ProjectCard from '../../components/ProjectCard';
import "./completedProjectPage.css";

const CompletedProjectPage = () => {
    const [completedProjectData, setCompletedProjectData] = useState([]);
    const [currentPage, setCurrentPage] = useState('Government');
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [itemsPerPage] = useState(5);
    const [showMore, setShowMore] = useState(null);

    useEffect(() => {
        // Sort projects by projectValue in descending order
        const sortedProjects = completedProject.sort((a, b) => b.work_place.projectValue - a.work_place.projectValue);
        setCompletedProjectData(sortedProjects);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when currentPage or currentPageNumber changes
    }, [currentPage, currentPageNumber]);

    const indexOfLastItem = currentPageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    const filteredProjects = completedProjectData.filter(project => project.category === currentPage);
    const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPageNumber(pageNumber);
    };

    const setCurrentPageAndResetPageNumber = (page) => {
        setCurrentPage(page);
        setCurrentPageNumber(1); 
    };

    const toggleShowMore = (projectId) => {
        setShowMore(showMore === projectId ? null : projectId);
    };

    const renderProjects = () => (
        <div className="page-container-bottom">
            {currentProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    showMore={showMore}
                    toggleShowMore={toggleShowMore}
                />
            ))}
            <Pagination currentPage={currentPageNumber} totalPages={Math.ceil(filteredProjects.length / itemsPerPage)} onPageChange={handlePageChange} />
        </div>
    );

    return (
        <div className="page-container">
            <div className="page-container-top">
                <h1>Grace Construction's Finished Endeavors</h1>
                <p className='desktop-only'>
                    Explore Grace Construction's diverse portfolio, where each milestone reflects our commitment to creativity, innovation, 
                    and craftsmanship. From our Signature Completed Projects and School Projects to Subcontracted Projects, 
                    experience the remarkable transformations we've accomplished. Each project stands as a testament to our 
                    dedication to redefining industry standards, pioneering new horizons, and delivering exceptional results
                    in the construction industry.
                </p>
                <p className="mobile-only">
                    Discover our innovative projects shaping the future of construction and development. Join us in redefining industry standards.
                </p>
                <div className="button-group">
                    <button onClick={() => setCurrentPageAndResetPageNumber('Government')} className={currentPage === 'Government' ? 'active' : ''}><p>Government</p></button>
                    <button onClick={() => setCurrentPageAndResetPageNumber('Private')} className={currentPage === 'Private' ? 'active' : ''}><p>Private</p></button>
                    <button onClick={() => setCurrentPageAndResetPageNumber('Subcontract')} className={currentPage === 'Subcontract' ? 'active' : ''}><p>Subcontract</p></button>
                </div>
            </div>
            {renderProjects()}
        </div>
    );
};

export default CompletedProjectPage;
