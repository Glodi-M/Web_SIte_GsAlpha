import React, { useState, useEffect } from 'react';
import './Anniversary.css';
import alphaOuverture from '../assets/images/photo-alpha/gsa-ouverture.jpg';
import Confetti from './Confetti';

const Anniversary = () => {
    // Date de la célébration des 40 ans
    const celebrationDate = new Date('2026-06-15T10:00:00');

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = celebrationDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            expired: false
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Disable confetti after 10 seconds to save performance
        const confettiTimer = setTimeout(() => {
            setShowConfetti(false);
        }, 10000);

        return () => {
            clearInterval(timer);
            clearTimeout(confettiTimer);
        };
    }, []);

    return (
        <section className="anniversary-section" aria-label="Célébration des 40 ans du Groupe Scout Alpha">
            <Confetti active={showConfetti} />
            <div className="anniversary-overlay"></div>
            <div className="anniversary-container">
                <div className="anniversary-content">
                    <span className="anniversary-subtitle">🎉 Célébration Historique</span>
                    <h2 className="anniversary-title">
                        <span className="highlight">40 Ans</span>d'Excellence et de Service
                    </h2>
                    <p className="anniversary-description">
                        Depuis 1986, le Groupe Scout Alpha forme des jeunes leaders, cultive l'amitié et sert la communauté.
                        Rejoignez-nous pour célébrer quatre décennies d'aventure et de passion.
                    </p>

                    {/* Countdown Timer */}
                    {timeLeft.expired ? (
                        <div className="countdown-celebration">
                            <span>🎊 C'est le grand jour ! Joyeux 40ème anniversaire !</span>
                        </div>
                    ) : (
                        <div className="countdown-timer">
                            <div className="countdown-item">
                                <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
                                <span className="countdown-label">Jours</span>
                            </div>
                            <div className="countdown-separator">:</div>
                            <div className="countdown-item">
                                <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                                <span className="countdown-label">Heures</span>
                            </div>
                            <div className="countdown-separator">:</div>
                            <div className="countdown-item">
                                <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <span className="countdown-label">Min</span>
                            </div>
                            <div className="countdown-separator">:</div>
                            <div className="countdown-item">
                                <span className="countdown-value seconds">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <span className="countdown-label">Sec</span>
                            </div>
                        </div>
                    )}

                    <div className="anniversary-dates">
                        <span className="date-year">1986</span>
                        <div className="date-separator"></div>
                        <span className="date-year text-gold">2026</span>
                    </div>
                </div>
                <div className="anniversary-media">
                    <div className="media-frame">
                        <img src={alphaOuverture} alt="40 ans Groupe Scout Alpha" />
                        <div className="badge-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Anniversary;
