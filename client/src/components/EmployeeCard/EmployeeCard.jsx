import React from 'react';
import './EmployeeCard.css'; // Import the CSS for styling

const EmployeeCard = ({ name, role, degree,  image }) => {
  return (
    <div className="employee-card">
      <img src={image} alt={name} className="employee-image"/>
      <div className="employee-info">
        <h3>{name}</h3>
        <p className='role'>{role}</p>
        <p className='degree'>{degree}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
