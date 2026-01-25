import React from 'react';

const Hero = () => {
    return (
        <section class="hero">
            <div class="hero-content">
                <h1>Découvrez le Groupe <br /> Scout Alpha</h1>
                <a href="#" class="btn-primary">rejoignez-nous</a>
            </div>
            <div class="hero-curve">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
