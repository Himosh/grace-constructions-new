import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterImg from '../../assets/images/FooterImg.svg';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    const handleClick = () => {
        scrollToTop();
    }


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
                            <a href="https://maps.app.goo.gl/7r3qxqea2JVCJBeL8?g_st=iw 
                            " target="_blank" rel="noopener noreferrer">
                                No. 156/43, Dockyard Road, <br/> Trincomalee
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <div className="footer-heading">Useful links</div>
                        <div className="footer-content">
                            <Link className="footer-link" to="/about" onClick={handleClick}>About us</Link>
                            <Link className="footer-link" to="/contact" onClick={handleClick}>Contact us</Link>
                            <Link className="footer-link" to="/career" onClick={handleClick}>Career</Link>
                            <Link className="footer-link" to="/ongoing-projects" onClick={handleClick}>Ongoing projects</Link>
                            <Link className="footer-link" to="/completed-projects" onClick={handleClick}>Completed projects</Link>
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
                Made with ❤️ from Grace Construction.
            </div>
        </div>
    );
};

export default Footer;
