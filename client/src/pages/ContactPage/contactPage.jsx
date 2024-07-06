import React, { useState } from 'react';
import './contactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you can handle form submission, like sending data to an API
    };

    return (
        <div className="contact">
            <h2>Get in Touch with Us</h2>
            <p className='desktop-only'>
                We'd love to hear from you! Whether you have a question about our services, need assistance with a product, have some feedback to share, or just want to say hello, our team is here to help. Please use the form below to get in touch with us, and we will respond as soon as possible. Your input is valuable to us, and we strive to provide the best support for your needs. Thank you for reaching out!
            </p>

            <p className='mobile-only'>Have a question, need assistance, or want to share feedback? Use the form below to get in touch, and we'll respond promptly. Your input is valuable to us. Thank you for reaching out!</p>


            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
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
                            placeholder='07. . . . . . . .'
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Message</label>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='I want to know about...'
                        />
                    </div>
                </form>
            </div>
            <button type="submit">Submit</button>
        </div>
    );
};

export default ContactPage;
