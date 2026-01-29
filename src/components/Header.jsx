import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/images/logo/gsa2025.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="logo-container">
                <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="Logo Groupe Scout Alpha" className="logo" />
                </Link>
                <div className="header-right">
                    <Link to="/" onClick={closeMenu}>
                        <span className="logo-text">Groupe Scout Alpha</span>
                    </Link>
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
            <nav className={isMenuOpen ? "nav-open" : ""}>
                <ul>
                    <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
                    <li><NavLink to="/about" onClick={closeMenu}>À propos</NavLink></li>
                    <li><NavLink to="/activities" onClick={closeMenu}>Nos activités</NavLink></li>
                    <li><NavLink to="/gallery" onClick={closeMenu}>Galerie</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
