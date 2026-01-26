import React from 'react';
import './Activities.css';

const Activities = () => {
    return (
        <main className="activities-page">
            <p className="activities-header">
                <h1 className="activities-title">Découvre nos activités</h1>
                <p className="activities-subtitle">Apprendre, servir et grandir ensemble dans la nature</p>
            </p>

            <div className="container">
                <div className="activities-grid">
                    {/* Card 1 */}
                    <div className="activity-card-large">
                        <img src="https://placehold.co/600x400/e0e0e0/ffffff?text=Randonnees" alt="Randonnées" className="activity-card-image" />
                        <div className="activity-card-content">
                            <h3 className="activity-card-title">
                                <i className="fas fa-tree activity-icon"></i>
                                Randonnées et Campements
                            </h3>
                            <p className="activity-card-desc">Exploration de la nature, bivouac</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="activity-card-large">
                        <img src="https://placehold.co/600x400/e0e0e0/ffffff?text=Ateliers" alt="Ateliers" className="activity-card-image" />
                        <div className="activity-card-content">
                            <h3 className="activity-card-title">
                                <i className="fas fa-tools activity-icon"></i>
                                Ateliers, Réunion Formation
                            </h3>
                            <p className="activity-card-desc">Bricolage, orientation, premier secours</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="activity-card-large">
                        <img src="https://placehold.co/600x400/e0e0e0/ffffff?text=Service" alt="Service" className="activity-card-image" />
                        <div className="activity-card-content">
                            <h3 className="activity-card-title">
                                <i className="fas fa-hands-helping activity-icon"></i>
                                Service à la communauté
                            </h3>
                            <p className="activity-card-desc">Exploration de la nature, bivouac</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="activity-card-large">
                        <img src="https://placehold.co/600x400/e0e0e0/ffffff?text=Jeux" alt="Jeux" className="activity-card-image" />
                        <div className="activity-card-content">
                            <h3 className="activity-card-title">
                                <i className="fas fa-gamepad activity-icon"></i>
                                Jeux, Expressions, Découvertes
                            </h3>
                            <p className="activity-card-desc">Activités ludiques, exploration, chants</p>
                        </div>
                    </div>
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
                        <img src="https://placehold.co/150x150/28a745/ffffff?text=BP" alt="Robert Baden-Powell" />
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
                    <div className="partner-logo"><i className="fas fa-fleur-de-lis"></i></div>
                    <div className="partner-logo"><i className="fas fa-globe-africa"></i></div>
                    <div className="partner-logo"><i className="fas fa-campground"></i></div>
                </div>
            </div>
        </main>
    );
};

export default Activities;
