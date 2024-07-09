import React, { useState } from 'react';
import './careerPage.css';

const CareerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        // Example: sending form data to an API
        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            body: formDataToSend
        })
            .then(response => response.json())
            .then(data => console.log('Form Data Submitted:', data))
            .catch(error => console.error('Error:', error));
    };

    const handleFileUpload = (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('resume');
        fileInput.click();
    };

    return (
        <div className="contact">
            <h2>Join Grace Construction</h2>
            <p className='desktop-only'>
                Welcome to Grace Construction! We are a leading name in the construction industry, renowned for our innovative designs, quality craftsmanship, and exceptional project management. Our team of over 20 skilled professionals includes Engineers, Architects, Draftsmen, Technical Officers, Quantity Surveyors, Accountants, Management Assistants, Work Supervisors, Engineering Trainees, and Architectural Designers. If you’re interested in joining our team, please fill out the form below and upload your resume.
            </p>
            <p className='mobile-only'>Have a question, need assistance, or want to share feedback? Use the form below to get in touch, and we'll respond promptly. Your input is valuable to us. Thank you for reaching out!</p>

            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='User Name'
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Gmail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='user@gmail.com'
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone no</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='+94 76 103 1242'
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="158/18b, Lower road, Orr's hill, Trincomalee"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="position">Position Applied For</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder='Architects/Draftsmen/Accountants/...etc'
                        />
                    </div>
                    <div className="resumeField">
                        <label htmlFor="resume">Upload your Resume</label>
                        <div className="upload-container">
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                style={{ display: 'none' }}
                                onChange={handleChange}
                                accept=".pdf,.jpg,.jpeg,.png"
                            />
                            <div className="upload-box">
                                <div className="desktop-only">
                                <input
                                    type="text"
                                    readOnly
                                    placeholder='PDF/JPG/JPEG/PNG only allowed'
                                    value={formData.resume ? formData.resume.name : ''}
                                />
                                </div>
                                <div className="mobile-only">
                                <input
                                    type="text"
                                    readOnly
                                    placeholder='PDF/JPG/JPEG/PNG '
                                    value={formData.resume ? formData.resume.name : ''}
                                />
                                </div>
                            </div>
                            <button className="upload-button" onClick={handleFileUpload}>Upload</button>
                        </div>
                    </div>

                </form>

            </div>
            <button type="submit" className="submit-button">Submit</button>
        </div>
    );
};

export default CareerPage;
