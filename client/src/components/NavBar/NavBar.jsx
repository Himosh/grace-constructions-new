import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to="/">
                    <img src="/assets/gc 1.png" alt="logo" />
                </Link>
            </div>
            <ul className='nav-links'>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/about" className='about'>
                    <li>About</li>
                </Link>
                <Link to="/career" className='career'>
                    <li>Career</li>
                </Link>
            </ul>
            <div className="navbar-button">
                <Link to="/contact">
                    <button>Reach out</button>
                </Link>
            </div>
            <div className="navbar-image">
                <Link to="/contact">
                    <img src="/assets/mobile -home.png" alt="contact icon" width="19px" height="auto"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
