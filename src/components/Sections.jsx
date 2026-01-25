import React from 'react';

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
            <h2 class="section-title">Les actualités</h2>
            <div class="news-placeholder"></div>
        </section>
    );
};

export const Activities = () => {
    return (
        <section class="activities container">
            <h2 class="section-title">Nos dernières activités</h2>
            <p class="subtitle">Les activités du groupe scouts alpha</p>

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
