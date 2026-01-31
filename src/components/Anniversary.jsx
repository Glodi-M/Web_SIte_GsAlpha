import React from 'react';
import './Anniversary.css';
import alpha from '../assets/images/logo/alpha40.jpg';

const Anniversary = () => {
    return (
        <section className="anniversary-section">
            <div className="anniversary-container">
                <div className="anniversary-media">
                    <img src={alpha} alt="Alpha" />
                </div>
                <div className="anniversary-content">
                    <span className="anniversary-years">1986 – 2026</span>
                    <h2 className="anniversary-title">Le Groupe Scout Alpha fête son 40ème anniversaire</h2>
                </div>
            </div>
        </section>
    );
};

export default Anniversary;
