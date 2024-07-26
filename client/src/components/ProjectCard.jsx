import React from 'react';
import client from "../assets/icons/client.png";
import completion from "../assets/icons/completion.png";
import initiation from "../assets/icons/initiation.png";
import projectValue from "../assets/icons/projectValue.png";
import supervisor from "../assets/icons/supervisor.png";
import Location from "../assets/icons/Location.png";
import Slideshows from "../components/Slideshows";

const ProjectCard = ({ project, showMore, toggleShowMore }) => (
    <div className="card-blog">
        <h2>{project.title}</h2>
        <ul className='desktop-only'>
            <li>
                <img src={client} alt="Client Icon" className="svg" />
                <h4>Client</h4>
                <p>{project.work_place.client}</p>
            </li>
            <li>
                <img src={projectValue} alt="ProjectValue Icon" className="svg" />
                <h4>Project Value</h4>
                <p>Rs: {project.work_place.projectValue} million</p>
            </li>
            <li>
                <img src={initiation} alt="Initiation Icon" className="svg" />
                <h4>Initiation</h4>
                <p>{project.work_place.initiation}</p>
            </li>
            <li>
                <img src={completion} alt="Completion Icon" className="svg" />
                <h4>Completion</h4>
                <p>{project.work_place.completion}</p>
            </li>
            <li>
                <img src={supervisor} alt="Supervisor Icon" className="svg" />
                <h4>Supervisor</h4>
                {project.work_place.supervisors.map((supervisor, index) => (
                    <div key={index}>
                        <p>{supervisor.name}<br />{supervisor.role}</p>
                    </div>
                ))}
            </li>
        </ul>

        {project.images && project.images.length > 0 ? (
            <Slideshows images={project.images} />
        ) : (
            <p>No images available</p>
        )}

        {showMore === project.id && (
            <ul className='mobile-only'>
                <li>
                    <img src={client} alt="Client Icon" className="svg" />
                    <h4>Client</h4>
                    <p>{project.work_place.client}</p>
                </li>
                <li>
                    <img src={projectValue} alt="ProjectValue Icon" className="svg" />
                    <h4>Project Value</h4>
                    <p>Rs: {project.work_place.projectValue} million</p>
                </li>
                <li>
                    <img src={initiation} alt="Initiation Icon" className="svg" />
                    <h4>Initiation</h4>
                    <p>{project.work_place.initiation}</p>
                </li>
                <li>
                    <img src={completion} alt="Completion Icon" className="svg" />
                    <h4>Completion</h4>
                    <p>{project.work_place.completion}</p>
                </li>
                <li>
                    <img src={supervisor} alt="Supervisor Icon" className="svg" />
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
            <h6> {project.address}</h6>
        </div>
    </div>
);

export default ProjectCard;
