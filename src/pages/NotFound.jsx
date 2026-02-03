import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <main className="not-found-page">
            <div className="not-found-content">
                <div className="error-code">
                    <span className="four">4</span>
                    <span className="zero">
                        <i className="fas fa-compass"></i>
                    </span>
                    <span className="four">4</span>
                </div>

                <h1>Page introuvable</h1>
                <p>Oups ! Il semble que vous vous soyez égaré en forêt...</p>
                <p className="subtitle">La page que vous recherchez n'existe pas ou a été déplacée.</p>

                <div className="not-found-actions">
                    <Link to="/" className="btn-home">
                        <i className="fas fa-home"></i>
                        Retour à l'accueil
                    </Link>
                    <Link to="/contact" className="btn-contact">
                        <i className="fas fa-envelope"></i>
                        Nous contacter
                    </Link>
                </div>

                <div className="scout-message">
                    <i className="fas fa-campground"></i>
                    <span>« Un scout sait toujours retrouver son chemin »</span>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
