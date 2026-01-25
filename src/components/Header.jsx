import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src="https://placehold.co/50x50/FFCC00/003366?text=GSA" alt="Logo Groupe Scout Alpha" className="logo" />
                </Link>
                <Link to="/">
                    <span className="logo-text">Groupe Scout Alpha</span>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>accueil</NavLink></li>
                    <li><NavLink to="/about">à propos</NavLink></li>
                    <li><NavLink to="/activities">nos activités</NavLink></li>
                    <li><NavLink to="/gallery">galerie</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
