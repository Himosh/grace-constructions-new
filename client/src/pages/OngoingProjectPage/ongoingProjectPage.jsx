import React, { useEffect, useState } from 'react';
import ongoingProject from '../../data/ongoingProjects';
import Pagination from '../../components/Pagination'; 
import ProjectCard from '../../components/ProjectCard';
import "./ongoingProjectPage.css";

const OngoingProjectPage = () => {
    const [ongoingProjectData, setOngoingProjectData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [showMore, setShowMore] = useState(null);

    useEffect(() => {
        // Sort projects by projectValue in descending order
        const sortedProjects = ongoingProject.sort((a, b) => b.work_place.projectValue - a.work_place.projectValue);
        setOngoingProjectData(sortedProjects);
    }, []);

    useEffect(() => {
        // Scroll to the top when currentPage changes
        scrollToTop();
    }, [currentPage]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = ongoingProjectData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
            <PageTop />
            <PageBottom
                currentProjects={currentProjects}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                ongoingProjectData={ongoingProjectData}
                handlePageChange={handlePageChange}
                toggleShowMore={toggleShowMore}
                showMore={showMore}
            />
        </div>
    );
};

const PageTop = () => (
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
);

const PageBottom = ({
    currentProjects,
    currentPage,
    itemsPerPage,
    ongoingProjectData,
    handlePageChange,
    toggleShowMore,
    showMore,
}) => (
    <div className="page-container-bottom">
        {currentProjects.map(project => (
            <ProjectCard
                key={project.id}
                project={project}
                showMore={showMore}
                toggleShowMore={toggleShowMore}
            />
        ))}
        <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(ongoingProjectData.length / itemsPerPage)}
            onPageChange={handlePageChange}
        />
    </div>
);

export default OngoingProjectPage;
