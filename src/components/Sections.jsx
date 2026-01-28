import React from 'react';
import { Link } from 'react-router-dom';
import { listeActivites } from '../data/activites';

export const ProjectEducatif = () => {
    return (
        <section class="project-educatif container">
            <h2 class="section-title">Notre projet éducatif</h2>
            <div class="project-content">
                <div class="project-image">
                    <img src="https://placehold.co/400x300/e0e0e0/333333?text=Scouts+Alpha" alt="Activités scouts" />
                </div>
                <div class="project-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus suscipit est, ac eleifend ex.
                        Sed malesuada elementum pretium. Nulla id diam ac arcu finibus rhoncus ut ut libero.
                        Integer tristique mauris et orci varius, nec rutrum odio condimentum.
                        Maecenas venenatis mattis tortor eget sagittis. In vitae nisi at orci mattis sollicitudin
                        ac quis purus. Ut hendrerit ut enim vel rutrum.
                        <br /><br />
                        <strong>lire la suite...</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export const News = () => {
    return (
        <section class="news container">
            <div class="news-header">
                <div>
                    <h2 class="section-title" style={{ marginBottom: '10px', textAlign: 'left', marginTop: 0 }}>Nos prochaines activités</h2>
                    <p class="news-subtitle">Découvrez les nouveautés dans notre entreprise !</p>
                </div>
                <Link to="/activities" class="view-all-link">Voir tout →</Link>
            </div>

            <div class="news-grid">
                {listeActivites.map((item) => (
                    <Link to={`/activity/${item.id}`} class="news-card" key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div class="news-card-image">
                            <img src={item.image} alt="Activity" />
                            <div class="date-badge">
                                <span class="month">{item.month}</span>
                                <span class="day">{item.day}</span>
                            </div>
                        </div>
                        <div class="news-card-content">
                            <div class="news-time">{item.time} (Africa/Kinshasa)</div>
                            <h3 class="news-card-title">{item.title}</h3>
                            <p class="news-card-desc">{item.description}</p>
                            <div class="news-location">{item.location}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export const Activities = () => {
    return (
        <section class="activities container">
            <h2 class="section-title">Nos dernières activités</h2>
            <p class="subtitle">Les activités du groupe scouts alpha</p>

            <div class="activities-list">
                <div class="activity-card">
                    <div class="activity-image"></div>
                    <div class="activity-info">
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>text...</p>
                        <a href="#" class="read-more">lire la suite</a>
                    </div>
                </div>

                <div class="activity-card">
                    <div class="activity-image"></div>
                    <div class="activity-info">
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>text...</p>
                        <a href="#" class="read-more">lire la suite</a>
                    </div>

                </div>
                <div class="activity-card">
                    <div class="activity-image"></div>
                    <div class="activity-info">
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>text...</p>
                        <a href="#" class="read-more">lire la suite</a>
                    </div>
                </div>
                <div class="activity-card">
                    <div class="activity-image"></div>
                    <div class="activity-info">
                        <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        <p>text...</p>
                        <a href="#" class="read-more">lire la suite</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export const Founder = () => {
    return (
        <section class="founder">
            <div class="container founder-content">
                <div class="founder-text">
                    <h2>Monsieur BAYONZIMINA</h2>
                    <p>Fondateur du Groupe Scout Alpha</p>
                </div>
                <div class="founder-image">
                    <img src="https://placehold.co/300x300/e0e0e0/333333?text=Fondateur" alt="Monsieur BAYONZIMINA" />
                </div>
            </div>
        </section>
    );
};

export const GroupAlpha = () => {
    return (
        <section class="group-alpha container">
            <h2 class="section-title">Le Groupe Scout Alpha</h2>
            <div class="main-group-photo">
                <img src="https://placehold.co/1200x400/e0e0e0/333333?text=Photo+de+Groupe" alt="Groupe Scout Alpha" />
            </div>
            <div class="grid-gallery">
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
            </div>
        </section>
    );
};
