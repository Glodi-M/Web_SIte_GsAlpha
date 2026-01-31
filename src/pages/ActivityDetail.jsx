import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { activitesAvenir } from '../data/activitesAvenir';
import { activitesPasse } from '../data/activitesPasse';
import './ActivityDetail.css';

const ActivityDetail = () => {
    const { id } = useParams();
    const allActivities = [...activitesAvenir, ...activitesPasse];
    const activity = allActivities.find(a => a.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!activity) {
        return (
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2>Activité non trouvée</h2>
                <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Retour à l'accueil</Link>
            </div>
        );
    }

    // Default details if missing in data (backward compatibility)
    const details = activity.details || {
        organizer: "Groupe Scout Alpha",
        category: "Événement",
        participants: "Ouvert à tous"
    };

    return (
        <div className="activity-detail-page">
            <div
                className="activity-hero"
                style={{ backgroundImage: `url(${activity.image})` }}
            >
                <div className="activity-hero-overlay"></div>

                <div className="container activity-hero-content">
                    <Link to="/" className="back-link">
                        <span>←</span> Retour
                    </Link>

                    <h1 className="activity-title">{activity.title}</h1>

                    <div className="activity-meta-hero">
                        <div className="meta-item">
                            <span>📅</span> {activity.day} {activity.month} 2026
                        </div>
                        <div className="meta-item">
                            <span>📍</span> {activity.location}
                        </div>
                    </div>
                </div>
            </div>

            <main className="container activity-main-content">
                <div className="activity-content-grid">
                    <div className="content-left">
                        <h2>À propos de l'événement</h2>
                        <p>{activity.fullDescription || activity.description}</p>

                        <h3>Au programme</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <aside className="content-right">
                        <div className="details-card">
                            <h3>Détails</h3>

                            <div className="detail-row">
                                <span className="label">Heure</span>
                                <span className="value">{activity.time}</span>
                            </div>

                            <div className="detail-row">
                                <span className="label">Organisateur</span>
                                <span className="value">{details.organizer}</span>
                            </div>

                            <div className="detail-row">
                                <span className="label">Catégorie</span>
                                <span className="value">{details.category}</span>
                            </div>

                            <div className="detail-row">
                                <span className="label">Participants</span>
                                <span className="value">{details.participants}</span>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Gallery Section */}
                {activity.gallery && activity.gallery.length > 0 && (
                    <div className="activity-gallery-section">
                        <h3>Galerie Photos</h3>
                        <div className="gallery-grid">
                            {activity.gallery.map((img, index) => (
                                <div
                                    key={index}
                                    className="gallery-item"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img src={img} alt={`Souvenir ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* Lightbox Overlay */}
                {selectedImage && (
                    <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                                &times;
                            </button>
                            <img src={selectedImage} alt="Agrandissement" />
                        </div>
                    </div>
                )}
            </main >
        </div >
    );
};

export default ActivityDetail;
