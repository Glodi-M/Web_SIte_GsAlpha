
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { activityTypes } from '../data/activityTypes';
import './ActivityTypeDetail.css';

const ActivityTypeDetail = () => {
    const { id } = useParams();
    const activity = activityTypes.find(a => a.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!activity) {
        return (
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2>Type d'activité non trouvé</h2>
                <Link to="/activities" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Retour aux activités</Link>
            </div>
        );
    }

    return (
        <div className="activity-type-detail">
            {/* Hero Section */}
            <div className="type-hero" style={{ backgroundImage: `url(${activity.image})` }}>
                <div className="type-hero-overlay"></div>
                <div className="container type-hero-content">
                    <Link to="/activities" className="back-link-white">
                        <i className="fas fa-arrow-left"></i> Retour
                    </Link>
                    <div className="type-icon-wrapper" style={{ color: activity.color }}>
                        <i className={activity.icon}></i>
                    </div>
                    <h1>{activity.title}</h1>
                    <p className="type-hero-desc">{activity.description}</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container type-content-grid">
                <main className="type-main">
                    <section className="detail-block">
                        <h2 style={{ borderLeftColor: activity.color }}>Notre Méthode</h2>
                        <p>{activity.method}</p>
                    </section>

                    <section className="detail-block">
                        <h2 style={{ borderLeftColor: activity.color }}>Pourquoi cette activité ?</h2>
                        <p>{activity.why}</p>
                    </section>
                </main>

                <aside className="type-sidebar">
                    <div className="program-card">
                        <h3 style={{ color: activity.color }}>Au programme type</h3>
                        <ul>
                            {activity.program.map((item, index) => (
                                <li key={index}>
                                    <i className="fas fa-check" style={{ color: activity.color }}></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ActivityTypeDetail;
