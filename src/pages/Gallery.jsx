import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('Tout');

    const filters = [
        "Camp",
        "Activités sportives",
        "Sortie nature",
        "Cérémonie & événement",
        "Conseil de groupe",
        "Réunion & Atelier",
        "Autres"
    ];

    // Placeholder data - in a real app, this would be an array of objects with categories
    const galleryItems = Array(12).fill(null);

    return (
        <main className="gallery-container container">
            <h1 className="gallery-title">Notre Galerie</h1>
            <p className="gallery-subtitle">Revivez nos meilleurs moments en images</p>

            <div className="gallery-filters">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {galleryItems.map((_, index) => (
                    <div key={index} className="gallery-item">
                        <img
                            src={`https://placehold.co/400x400/e0e0e0/ffffff?text=Image+${index + 1}`}
                            alt={`Gallery item ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Gallery;
