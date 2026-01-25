import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <main>
            <section className="contact-hero">
                <h1>Contactez nous</h1>
            </section>

            <section className="contact-container container">
                <p className="contact-intro">Nous serons heureux de répondre à vos questions.</p>

                <div className="contact-content">
                    {/* Form Section */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" name="name" />

                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" />

                            <label htmlFor="subject">Sujet</label>
                            <input type="text" id="subject" name="subject" />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5"></textarea>

                            <button type="submit" className="btn-submit">Envoyer</button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="contact-info-wrapper">
                        <h2>Coordonnées</h2>
                        <ul className="info-list">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>519, LUKAYA, Quartier 5/ N'djili Kinshasa</span>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <span>+243 82 44 87 690</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>gsalpha001@gmail.com</span>
                            </li>
                            <li>
                                <i className="far fa-clock"></i>
                                <span>Samedi 15h00 à 17h00 - Dimanche 10h à 12h00</span>
                            </li>
                        </ul>

                        <div className="map-placeholder">
                            {/* Placeholder for map - using an image or iframe */}
                            <img src="https://placehold.co/400x250/e0e0e0/333333?text=Carte+Kinshasa" alt="Carte" />
                        </div>
                    </div>
                </div>

                <div className="contact-qr-section">
                    <p>Rejoignez notre grande famille scoute Alpha</p>
                    <div className="qr-code">
                        <img src="https://placehold.co/100x100/000000/FFFFFF?text=QR" alt="QR Code" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
