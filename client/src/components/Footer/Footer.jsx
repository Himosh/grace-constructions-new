import React from 'react';
import './Footer.css';

const Footer = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "9c6fd212-b674-46c9-8856-f4eb775c2ba2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };
    return (
        <footer className="footer">
            <div className="send-message">
                <h2>Send Message</h2>
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email Address" required />
                    <input type="tel" name="phone" placeholder="Phone no" required />
                    <textarea type="text" name="message" placeholder='Message'/>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className='footer-right'>
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <p className='contact-content'>Need a quote or have questions? Contact Grace Building Construction today. We're here to help build your dreams.</p>
                    <address className='contact-content-address'>
                        No 03, 5th Lane<br />
                        Manayaweli, Trincomalee,<br />
                        Sri Lanka.<br />
                    </address>
                    <div className='contact-content-link'>
                        Email: <a href="mailto:graceconst001@gmail.com">graceconst001@gmail.com</a><br />
                        Phone: <a href="tel:+94762142332">+94 76 214 2332</a> / <a href="tel:+94761031242">+94 76 103 1242</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright &copy; 2024 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
