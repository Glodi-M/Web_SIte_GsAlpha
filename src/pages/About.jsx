import React from 'react';
import './About.css';
import Foulard from '../assets/images/logo/imagefoulard.jpg';
import district from '../assets/images/logo/dske.jpg';
import ask from '../assets/images/logo/ask.jpg';
import fesco from '../assets/images/logo/fesco.jpg';
import minigsa from '../assets/images/logo/gsa2025.png';

import meute from '../assets/images/logo-unites/meute.jpg';
import lion from '../assets/images/logo-unites/lion.jpg';
import panthere from '../assets/images/logo-unites/panthere.jpg';
import ouragan from '../assets/images/logo-unites/ouragan.jpg';

const About = () => {
    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-background" style={{ backgroundImage: `url('https://placehold.co/1200x800/e0e0e0/333333?text=Groupe+Scout+Alpha')` }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-content fadeInUp">
                    <h1>Groupe Scout Alpha</h1>
                    <p>Toujours Prêts à Servir</p>
                </div>
            </section>

            {/* Notre Histoire */}
            <section className="container history-section">
                <div className="text-content fadeInLeft">
                    <h2 className="section-title-left">Qui sommes-nous ?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus suscipit est, ac eleifend ex.
                        Sed malesuada elementum pretium. Nulla id diam ac arcu finibus rhoncus ut ut libero.
                        Integer tristique mauris et orci varius, nec rutrum odio condimentum.
                        Maecenas venenatis mattis tortor eget sagittis. In vitae nisi at orci mattis sollicitudin
                        ac quis purus. Ut hendrerit ut enim vel rutrum.
                    </p>
                </div>
                <div className="image-content fadeInRight">
                    <img src="https://placehold.co/500x300/e0e0e0/333333?text=Reunion" alt="Notre histoire" />
                </div>
            </section>

            {/* Nos Valeurs */}
            <section className="values-section">
                <div className="container values-grid">
                    <div className="value-item fadeInUp delay-1">
                        <div className="value-icon"><i className="fas fa-hands-helping"></i></div>
                        <span>Solidarité</span>
                    </div>
                    <div className="value-item fadeInUp delay-2">
                        <div className="value-icon"><i className="fas fa-users"></i></div>
                        <span>Fraternité</span>
                    </div>
                    <div className="value-item fadeInUp delay-3">
                        <div className="value-icon"><i className="fas fa-tree"></i></div>
                        <span>Respect de la nature</span>
                    </div>
                    <div className="value-item fadeInUp delay-4">
                        <div className="value-icon"><i className="fas fa-heart"></i></div>
                        <span>Service</span>
                    </div>
                </div>
            </section>

            {/* Notre Mission */}
            <section className="container mission-section">
                <div className="image-content fadeInLeft">
                    <img src="https://placehold.co/500x300/e0e0e0/333333?text=Mission" alt="Notre mission" style={{ borderRadius: '50px 0 50px 0' }} />
                </div>
                <div className="text-content fadeInRight">
                    <h2 className="section-title-left">Notre mission</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus suscipit est, ac eleifend ex.
                        Sed malesuada elementum pretium. Nulla id diam ac arcu finibus rhoncus ut ut libero.
                        Integer tristique mauris et orci varius, nec rutrum odio condimentum.
                        Maecenas venenatis mattis tortor eget sagittis. In vitae nisi at orci mattis sollicitudin
                        ac quis purus. Ut hendrerit ut enim vel rutrum.
                    </p>
                </div>
            </section>

            {/* Nos Couleurs */}
            <section className="container colors-section">
                <div className="colors-image fadeInLeft">
                    <img src={Foulard} alt="Foulard Scout" />
                </div>
                <div className="colors-content fadeInRight">
                    <h2 className="section-title-left">Nos couleurs</h2>
                    <div className="color-circles">
                        <div className="color-item">
                            <div className="circle blue"></div>
                            <span>Bleu</span>
                        </div>
                        <div className="color-item">
                            <div className="circle white"></div>
                            <span>Blanc</span>
                        </div>
                        <div className="color-item">
                            <div className="circle yellow"></div>
                            <span>Jaune</span>
                        </div>
                    </div>
                    <p className="colors-text">Nos couleurs sacrées</p>
                </div>
            </section>

            {/* Notre Devise */}
            <section className="devise-section fadeInUp">
                <div className="container">
                    <h2 className="section-title-center">Notre devise</h2>
                    <div className="devise-cards">
                        <div className="devise-card">
                            <i className="fas fa-tools"></i>
                            <h3>Travail</h3>
                        </div>
                        <div className="devise-card">
                            <i className="fas fa-heart"></i>
                            <h3>Discipline</h3>
                        </div>
                        <div className="devise-card">
                            <i className="fas fa-hands"></i>
                            <h3>Persévérance<br /><small>Pour mieux servir</small></h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Unités */}
            <section className="container units-section fadeInUp">
                <h2 className="section-title-left">Nos unités</h2>
                <div className="units-grid">
                    <div className="unit-item delay-1">
                        <img src={meute} alt="Meute Espoir" className="unit-logo" />
                        <span>Meute - Espoir</span>
                    </div>
                    <div className="unit-item delay-2">
                        <img src={lion} alt="Troupe des lions" className="unit-logo" />
                        <span>Troupe des lions</span>
                    </div>
                    <div className="unit-item delay-3">
                        <img src={panthere} alt="Troupe des panthères" className="unit-logo" />
                        <span>Troupe des panthères</span>
                    </div>
                    <div className="unit-item delay-4">
                        <img src={ouragan} alt="Compagnie ouragan" className="unit-logo" />
                        <span>Compagnie ouragan</span>
                    </div>
                    <div className="unit-item delay-5">
                        <img src="https://placehold.co/150x150/002b5b/ffffff?text=Clan" alt="Clan" className="unit-logo" />
                        <span>Clan lumière ardente</span>
                    </div>
                </div>
            </section>

            {/* Nos Effectifs */}
            <section className="statistics-section fadeInUp">
                <div className="container">
                    <h2 className="section-title-center">Nos effectifs en chiffres</h2>
                    <div className="stats-grid">
                        <div className="stat-item delay-1">
                            <span className="stat-number">45</span>
                            <span className="stat-label">Meute</span>
                        </div>
                        <div className="stat-item delay-2">
                            <span className="stat-number">32</span>
                            <span className="stat-label">Troupe</span>
                        </div>
                        <div className="stat-item delay-3">
                            <span className="stat-number">28</span>
                            <span className="stat-label">Compagnie</span>
                        </div>
                        <div className="stat-item delay-4">
                            <span className="stat-number">15</span>
                            <span className="stat-label">Clan</span>
                        </div>
                        <div className="stat-item delay-5">
                            <span className="stat-number">12</span>
                            <span className="stat-label">Adultes</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Affiliations */}
            <section className="affiliation-section fadeInUp">
                <div className="container">
                    <h2 className="section-title-center">Nos Affiliations</h2>
                    <div className="affiliation-grid">
                        <div className="affiliation-card delay-1">
                            <div className="affiliation-icon">
                                <img src={district} alt="Logo District Scout Kin-Est" />
                            </div>
                            <h3>District Scout Kin-Est</h3>
                            <p>Membre actif du district, participant au développement du scoutisme local.</p>
                        </div>
                        <div className="affiliation-card delay-2">
                            <div className="affiliation-icon">
                                <img src={ask} alt="Logo Association des Scouts de Kinshasa" />
                            </div>
                            <h3>Association des Scouts de Kinshasa</h3>
                            <p>Affilié à l'ASK, contribuant à l'éducation des jeunes dans la capitale.</p>
                        </div>
                        <div className="affiliation-card delay-3">
                            <div className="affiliation-icon">
                                <img src={fesco} alt="Logo FESCO" />
                            </div>
                            <h3>Fédération des Scouts de la RDC</h3>
                            <p>Fier membre de la FESCO, portant haut les valeurs du scoutisme congolais.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Une grande famille */}
            <section className="family-section">
                <div className="container family-container">
                    <div className="family-title fadeInLeft">
                        <h2>Alpha <img src={minigsa} alt="Logo GSA" className='minilogo' /></h2>
                        <h3>Une grande famille</h3>
                    </div>
                    <div className="family-images fadeInRight">
                        <img src="https://placehold.co/300x200/e0e0e0/333333?text=Famille+1" alt="Famille Alpha 1" />
                        <img src="https://placehold.co/300x200/e0e0e0/333333?text=Famille+2" alt="Famille Alpha 2" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
