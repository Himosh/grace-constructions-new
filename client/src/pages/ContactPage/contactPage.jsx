import React, { useState } from 'react';
import './contactPage.css';
import emailjs from '@emailjs/browser'; // Import EmailJS SDK

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSending, setIsSending] = useState(false); // To handle submission state
    const [emailSent, setEmailSent] = useState(false); // To handle success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset the success message and submission state
        setEmailSent(false);
        setIsSending(true);

        // Define the EmailJS service parameters
        const serviceID = 'service_dir800i';
        const templateID = 'template_58p36wj';
        const userID = 'GUdObcS3xb-HzmRbQ';

        // Send the email using EmailJS
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                setEmailSent(true);
                setIsSending(false); // Reset the sending state
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Failed to send the email. Error:', error);
                setIsSending(false); // Reset the sending state
            });
    };

    return (
        <div className="contact">
            <h2>Get in Touch with Us</h2>
            <p className='desktop-only'>
                We'd love to hear from you! Whether you have a question about our services, need assistance with a product, have some feedback to share, or just want to say hello, our team is here to help. Please use the form below to get in touch with us, and we will respond as soon as possible. Your input is valuable to us, and we strive to provide the best support for your needs. Thank you for reaching out!
            </p>

            <p className='mobile-only'>
                Have a question, need assistance, or want to share feedback? Use the form below to get in touch, and we'll respond promptly. Your input is valuable to us. Thank you for reaching out!
            </p>

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
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='user@gmail.com'
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='07. . . . . . . .'
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='I want to know about...'
                            required
                        />
                    </div>
                    <button type="submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Submit'}
                    </button>
                </form>
                {emailSent && <p className="success-message">Your message has been sent successfully!</p>}
            </div>
        </div>
    );
};

export default ContactPage;
