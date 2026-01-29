import React from 'react';
import { Link } from 'react-router-dom';
import { activitesAvenir } from '../data/activitesAvenir';
import { activitesPasse } from '../data/activitesPasse';

export const ProjectEducatif = () => {
    return (
        <section className="project-educatif container">
            <h2 className="section-title fadeInUp">Notre projet éducatif</h2>
            <div className="project-content">
                <div className="project-image fadeInLeft">
                    <img src="https://placehold.co/400x300/e0e0e0/333333?text=Scouts+Alpha" alt="Activités scouts" />
                </div>
                <div className="project-text fadeInRight">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus suscipit est, ac eleifend ex.
                        Sed malesuada elementum pretium. Nulla id diam ac arcu finibus rhoncus ut ut libero.
                        Integer tristique mauris et orci varius, nec rutrum odio condimentum.
                        Maecenas venenatis mattis tortor eget sagittis. In vitae nisi at orci mattis sollicitudin
                        ac quis purus. Ut hendrerit ut enim vel rutrum.
                        <br /><br />
                        <Link to="/about" className="read-more-link">lire la suite...</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export const News = () => {
    return (
        <section className="news container">
            <div className="news-header fadeInUp">
                <div>
                    <h2 className="section-title" style={{ marginBottom: '10px', textAlign: 'left', marginTop: 0 }}>Nos prochaines activités</h2>
                    <p className="news-subtitle">Découvrez les nouvelles activités du groupe scouts alpha!</p>
                </div>
                <Link to="/activities" className="view-all-link">Voir tout <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="news-grid">
                {activitesAvenir.map((item, index) => (
                    <Link to={`/activity/${item.id}`} className={`news-card fadeInUp delay-${index % 3 + 1}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="news-card-image">
                            <img src={item.image} alt="Activity" />
                            <div className="date-badge">
                                <span className="month">{item.month}</span>
                                <span className="day">{item.day}</span>
                            </div>
                        </div>
                        <div className="news-card-content">
                            <div className="news-time">{item.time} (Africa/Kinshasa)</div>
                            <h3 className="news-card-title">{item.title}</h3>
                            <p className="news-card-desc">{item.description}</p>
                            <div className="news-location"><i className="fas fa-map-marker-alt"></i> {item.location}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export const Activities = () => {
    // We can reverse the list to show "latest" if they were chronological, 
    // or just take the first few. For now, we map the existing list.
    const displayActivities = activitesPasse.slice(0, 4);

    return (
        <section className="activities container">
            <h2 className="section-title fadeInUp">Nos dernières activités</h2>
            <p className="subtitle fadeInUp delay-1">Les activités du groupe scouts alpha</p>

            <div className="activities-list">
                {displayActivities.map((activity, index) => (
                    <div className={`activity-card fadeInUp delay-${index % 3 + 1}`} key={activity.id}>
                        <div
                            className="activity-image"
                            style={{ backgroundImage: `url(${activity.image})` }}
                        ></div>
                        <div className="activity-info">
                            <h3>{activity.title}</h3>
                            <div className="activity-meta">
                                <span><i className="far fa-calendar-alt"></i> {activity.month} {activity.day}</span>
                            </div>
                            <p>{activity.description}</p>
                            <Link to={`/activity/${activity.id}`} className="read-more">
                                lire la suite
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export const Founder = () => {
    return (
        <section className="founder">
            <div className="container founder-content">
                <div className="founder-text fadeInLeft">
                    <h2>Monsieur BAYONZIMINA</h2>
                    <p className="founder-role">Initiateur du Groupe Scout Alpha</p>
                    <div className="founder-quote">
                        <i className="fas fa-quote-left"></i>
                        <p>Le scoutisme est une école de vie, un lieu où l'on apprend à servir.</p>
                    </div>
                </div>
                <div className="founder-image fadeInRight">
                    <img src="https://placehold.co/300x300/e0e0e0/333333?text=Fondateur" alt="Monsieur BAYONZIMINA" />
                </div>
            </div>
        </section>
    );
};

export const GroupAlpha = () => {
    return (
        <section className="group-alpha container">
            <h2 className="section-title fadeInUp">Le Groupe Scout Alpha</h2>
            <div className="main-group-photo fadeInUp delay-1">
                <img src="https://placehold.co/1200x400/e0e0e0/333333?text=Photo+de+Groupe" alt="Groupe Scout Alpha" />
            </div>
            <div className="grid-gallery">
                <div className="grid-item fadeInUp delay-2"></div>
                <div className="grid-item fadeInUp delay-2"></div>
                <div className="grid-item fadeInUp delay-3"></div>
                <div className="grid-item fadeInUp delay-3"></div>
            </div>
        </section>
    );
};
