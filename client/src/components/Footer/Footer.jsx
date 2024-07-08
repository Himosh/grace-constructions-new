import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterImg from '../../assets/images/FooterImg.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="logo-container">
                    <img src={FooterImg} alt="Footer Logo" />
                    <h1>Grace Construction.</h1>
                    <p>Building your dreams with care.</p>
                </div>

                <div className="footer-detail">
                    <div className="footer-section">
                        <div className="footer-heading">Locate us</div>
                        <div className="footer-content">
                            No. 156/43, Dockyard
                            Road, Trincomalee
                        </div>
                    </div>

                    <div className="footer-section">
                        <div className="footer-heading">Useful links</div>
                        <div className="footer-content">
                        <div className="footer-content">
                            <Link className="footer-link" to="/about">About us</Link> 
                            <Link className="footer-link" to="/contact">Contact us</Link> 
                            <Link className="footer-link" to="/career">Career</Link> 
                            <Link className="footer-link" to="/ongoing-projects">Ongoing</Link> 
                            <Link className="footer-link" to="/completed-projects">Completed</Link> 
                        </div>

                        </div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-heading">Follow us</div>
                        <div className="icon-content">
                            <a href="https://www.facebook.com/share/vP5cfxesDuLUHC4r/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/fb.png" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/grac_econstruction?igsh=ZHNvYXlxbDZqYW9z" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/insta.png" alt="Instagram" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/twitter.png" alt="Twitter" />
                            </a>
                        </div>
                        </div>
                </div>
            </div>

            <div className="footer-social">
                <div className="copyright">
                    Made with ❤️ from grace constructions.
                </div>
            </div>
        </div>
    );
};

export default Footer;
