import React from 'react';
import banner from "../assets/images/background/banner-gsa.jpg"

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-content">
                <h1>Travail, Disciplines, pour mieux Servir.</h1>
                <p>Bienvenue chez les Scouts du Groupe Alpha</p>
                <a href="#contact" className="btn-primary">Vivre l'aventure avec nous</a>
            </div>
            <div className="hero-curve">

            </div>
        </section>
    );
};

export default Hero;
