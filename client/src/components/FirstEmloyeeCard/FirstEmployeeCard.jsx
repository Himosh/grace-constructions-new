import React from 'react'
import './FirstEmployeeCard.css'

const FirstEmployeeCard = ({ name, role, degree,  image }) => {
  return (
    <div className="first-employee-card">
      <img src={image} alt={name} className="first-employee-image"/>
      <div className="first-employee-info">
        <h3>{name}</h3>
        <p className='first-role'>{role}</p>
        <p className='first-degree'>{degree}</p>
      </div>
    </div>
  )
}

export default FirstEmployeeCard