import React from 'react';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard.jsx';
import FirstEmployeeCard from '../../components/FirstEmloyeeCard/FirstEmployeeCard.jsx';
import './staffPage.css'; // Import CSS for layout styling
import { Directors, Heads, Architects, EngineeringTrainees, TechnicalOfficers, Supervisors, NDT, HNDE, Surveyers, Accountant } from '../../data/staff.js';


const StaffPage = () => {
    return (
        <div className='staff-page'>
            <div className='top'>
                <h3>Meet the Masters of Grace</h3>
                <p className='desktop-only'>Welcome to the heart of Grace Construction's triumph! Here, we invite you to discover the architects of our success - from the strategic guidance of our visionary Managing Director to the collective brilliance of our talented team members. Each individual brings their unique expertise to the table, propelling our projects to new heights and shaping the landscape of construction excellence.</p>
                <p className='mobile-only'>Discover Grace Construction's success through our visionary Managing Director and talented team, driving projects to new heights of excellence.</p>

            </div>
            <div className='adjust'>
                    <div className='work'>
                        <h2>10+</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className='work'>
                        <h2>550+</h2>
                        <p>Completed Projects</p>
                    </div>
                    <div className='work'>
                        <h2>27+</h2>
                        <p>Skilled Staffs</p>
                    </div>
                    <div className='work'>
                        <h2>300+</h2>
                        <p>Working Employees</p>
                    </div>
                </div>
            <div className='head'>
                <div className="employee-container-1">
                    {Directors.map(employee => (
                        <FirstEmployeeCard
                            image={employee.image}
                            key={employee.name}
                            name={employee.name}
                            role={employee.role}
                            degree={employee.degree}

                        />
                    ))}
                </div>
            </div>
            <hr/>
            <div className="employee-container">
                {Heads.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {EngineeringTrainees.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {Architects.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {TechnicalOfficers.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {Surveyers.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {NDT.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {HNDE.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {Supervisors.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <hr/>
            <div className="employee-container">
                {Accountant.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
        </div>

    );
}


export default StaffPage;
