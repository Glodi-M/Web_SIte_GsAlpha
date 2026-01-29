import React from 'react';
import banner from "../assets/images/background/banner-gsa.jpg"

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content fadeInUp">
                <h1>Travail, Disciplines, pour mieux Servir.</h1>
                <p className="hero-subtitle">Bienvenue chez les Scouts du Groupe Alpha</p>
                <div className="hero-buttons">
                    <a href="/Contact" className="btn-primary">Vivre l'aventure avec nous</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
