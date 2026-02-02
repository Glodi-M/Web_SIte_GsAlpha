import React from 'react';
import { Link } from 'react-router-dom';
import { activityTypes } from '../data/activityTypes';

import './Activities.css';
import robert from '../assets/images/logo/baden-powell.jpg';
import district from '../assets/images/logo/dske.jpg';
import ask from '../assets/images/logo/ask.jpg';
import fesco from '../assets/images/logo/fesco.jpg';
import worldscout from '../assets/images/logo-partenaires/World-Scouting-Logo-New.png';
import worldscout1 from '../assets/images/logo-partenaires/World-Scouting-Symbol.png';
import regionalBadge from '../assets/images/logo-partenaires/Regional_badge_of_African_Scout_Region.png';
import logocec from '../assets/images/logo-partenaires/logo-cec.webp';


const Activities = () => {
    return (
        <main className="activities-page">
            <div className="activities-header">
                <h1 className="activities-title">Découvre nos activités</h1>
                <p className="activities-subtitle">Apprendre, servir et grandir ensemble dans la nature</p>
            </div>

            <div className="container">


                <div className="activities-grid">
                    {activityTypes.map((activity) => (
                        <Link to={`/activity-type/${activity.id}`} key={activity.id} className="activity-card-link">
                            <div className="activity-card-large">
                                <img src={activity.image} alt={activity.title} className="activity-card-image" />
                                <div className="activity-card-content">
                                    <h3 className="activity-card-title">
                                        <i className={`${activity.icon} activity-icon`} style={{ color: activity.color }}></i>
                                        {activity.title}
                                    </h3>
                                    <p className="activity-card-desc">{activity.shortDescription}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <section className="why-participate">
                <div className="container">
                    <h2 className="section-title-why">Pourquoi participer ?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <i className="fas fa-book-reader benefit-icon"></i>
                            <span className="benefit-text">Apprendre</span>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-hands-helping benefit-icon"></i>
                            <span className="benefit-text">Esprit d'équipe</span>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-users benefit-icon"></i>
                            <span className="benefit-text">Amitié</span>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-suitcase benefit-icon"></i>
                            <span className="benefit-text">Responsabilité</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="quote-section">
                    <div className="quote-image">
                        <img src={robert} alt="Robert Baden-Powell" />
                    </div>
                    <div className="quote-content">
                        <p className="quote-text">
                            « Le Scoutisme est un médicament composé de divers ingrédients et, à moins qu'ils ne soient mélangés dans les bonnes proportions selon la prescription, les utilisateurs ne doivent pas blâmer le médecin si les effets sur le patient ne sont pas satisfaisants. »
                        </p>
                        <div className="quote-author">
                            <h4>Robert Baden-Powell</h4>
                            <span>Fondateur du Mouvement Scout</span>
                        </div>
                    </div>
                </div>

                <div className="partners-logos">
                    <div className="partner-logo"><img src={worldscout} alt="World Scout" /></div>
                    <div className="partner-logo"><img src={worldscout1} alt="World Scout" /></div>
                    <div className="partner-logo"><img src={regionalBadge} alt="Regional Badge" /></div>
                    <div className="partner-logo"><img src={fesco} alt="FESCO" /></div>
                    <div className="partner-logo"><img src={ask} alt="Association des Scouts de Kinshasa" /></div>
                    <div className="partner-logo"><img src={district} alt="District Scout Kin-Est" /></div>
                    <div className="partner-logo"><img src={logocec} alt="logo-cec" /></div>

                </div>
            </div>
        </main>
    );
};

export default Activities;
