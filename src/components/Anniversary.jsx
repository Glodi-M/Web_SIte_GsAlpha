import React from 'react';
import './Anniversary.css';
import alpha from '../assets/images/logo/alpha40.jpg';

const Anniversary = () => {
    return (
        <section className="anniversary-section">
            <div className="anniversary-overlay"></div>
            <div className="anniversary-container">
                <div className="anniversary-content">
                    <span className="anniversary-subtitle">Célébration Historique</span>
                    <h2 className="anniversary-title">
                        <span className="highlight">40 Ans</span> d'Excellence et de Service
                    </h2>
                    <p className="anniversary-description">
                        Depuis 1986, le Groupe Scout Alpha forme des jeunes leaders, cultive l'amitié et sert la communauté.
                        Rejoignez-nous pour célébrer quatre décennies d'aventure et de passion.
                    </p>
                    <div className="anniversary-dates">
                        <span className="date-year">1986</span>
                        <div className="date-separator"></div>
                        <span className="date-year text-gold">2026</span>
                    </div>
                </div>
                <div className="anniversary-media">
                    <div className="media-frame">
                        <img src={alpha} alt="40 ans Groupe Scout Alpha" />
                        <div className="badge-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Anniversary;
