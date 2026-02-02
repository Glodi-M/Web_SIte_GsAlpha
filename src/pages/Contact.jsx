import React, { useState } from 'react';
import './Contact.css';

import banner from '../assets/images/background/banner-contact.jpg';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const encodedData = new URLSearchParams({
            'form-name': 'contact',
            ...formData
        }).toString();

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encodedData,
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });

                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            } else {
                throw new Error("Serveur injoignable");
            }
        } catch (err) {
            setError("Une erreur est survenue. Veuillez réessayer.");
            console.error('Form submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="contact-page">
            <section className="contact-hero" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content fadeInUp">
                    <h1>Contactez-nous</h1>
                    <p className="hero-subtitle">Une question ? Un projet ? Nous sommes là pour vous.</p>
                </div>
            </section>

            <section className="contact-container container">
                <div className="contact-header fadeInUp delay-1">
                    <p className="contact-intro">
                        Nous serons ravis d'échanger avec vous. Remplissez le formulaire ou utilisez nos coordonnées ci-dessous.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Form Section */}
                    <div className="contact-form-wrapper fadeInLeft delay-2">
                        <div className="form-header">
                            <h3>Envoyez-nous un message</h3>
                        </div>

                        {isSubmitted && (
                            <div className="success-message">
                                <i className="fas fa-check-circle"></i>
                                <span>Votre message a été envoyé avec succès !</span>
                            </div>
                        )}

                        {error && (
                            <div className="error-message">
                                <i className="fas fa-exclamation-circle"></i>
                                <span>{error}</span>
                            </div>
                        )}

                        <form
                            className="contact-form"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="form-group">
                                <label htmlFor="name">Nom complet <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Adresse E-mail <span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="votre@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Sujet <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Sujet de votre message"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message <span className="required">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-submit" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <span>Envoi en cours...</span>
                                        <i className="fas fa-spinner fa-spin"></i>
                                    </>
                                ) : (
                                    <>
                                        <span>Envoyer le message</span>
                                        <i className="fas fa-paper-plane"></i>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="contact-info-wrapper fadeInRight delay-2">
                        <div className="info-card">
                            <h2>Nos Coordonnées</h2>
                            <p className="info-subtitle">Retrouvez-nous facilement</p>

                            <ul className="info-list">
                                <li className="info-item">
                                    <div className="icon-box">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info-text">
                                        <strong>Adresse</strong>
                                        <span> Commune de N'djili, 519 avenue Lukaya, Kinshasa, Congo-Kinshasa</span>
                                    </div>
                                </li>
                                <li className="info-item">
                                    <div className="icon-box">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="info-text">
                                        <strong>Téléphone</strong>
                                        <span>+243 81 44 87 690</span>
                                    </div>
                                </li>
                                <li className="info-item">
                                    <div className="icon-box">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="info-text">
                                        <strong>E-mail</strong>
                                        <span>gsalpha001@gmail.com</span>
                                    </div>
                                </li>
                                <li className="info-item">
                                    <div className="icon-box">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="info-text">
                                        <strong>Heures d'ouverture</strong>
                                        <span>Samedi 15h00 - 17h00<br />Dimanche 10h00 - 12h00</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="Localisation GSA"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5462.871019201149!2d15.375997501416796!3d-4.415236840590015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a390045841ad5%3A0xe4ee4aaa9c912649!2sECC%2F23%C3%A8me%20CEC%20N&#39;DJILI%201!5e0!3m2!1sfr!2scd!4v1769724225713!5m2!1sfr!2scd"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className="contact-qr-section fadeInUp delay-3">
                    <div className="qr-card">
                        <div className="qr-content">
                            <h3>Rejoignez la famille Alpha</h3>
                            <p>Scannez pour plus d'informations et nous rejoindre sur WhatsApp</p>
                        </div>
                        <div className="qr-code">
                            <img src="https://placehold.co/150x150/002b5b/FFFFFF?text=QR+Code" alt="QR Code" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
