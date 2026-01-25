import React from 'react';
import banner from "../assets/images/background/banner-gsa.jpg"

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-content">
                <h1>Découvrez le Groupe <br /> Scout Alpha</h1>
                <a href="#" className="btn-primary">rejoignez-nous</a>
            </div>
            <div className="hero-curve">

            </div>
        </section>
    );
};

export default Hero;
