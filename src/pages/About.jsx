import React, { useState, useEffect, useRef } from 'react';
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
import paroisse from '../assets/images/logo-partenaires/paroisse-cec.png';
import alphaeuro from '../assets/images/logo-unites/alphaeuro.jpeg';
import cora from '../assets/images/logo-unites/cora.jpg';

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const node = countRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    let start = 0;
                    const increment = end / (duration / 16); // 60fps

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.ceil(start));
                        }
                    }, 16);

                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [end, duration]);

    return <span ref={countRef}>{count}</span>;
};


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

            {/* Notre Projet Éducatif */}
            <section className="container project-educatif-section">
                <h2 className="section-title fadeInUp">Notre projet éducatif</h2>
                <div className="project-content">
                    <div className="project-text fadeInLeft">
                        <p>
                            Le scoutisme est une école de vie. Notre projet éducatif vise à former des jeunes
                            responsables, autonomes et engagés dans la société. À travers nos activités, nous
                            développons :
                        </p>
                        <ul className="project-list">
                            <li><i className="fas fa-check-circle"></i> Le sens des responsabilités et du leadership</li>
                            <li><i className="fas fa-check-circle"></i> L'esprit d'équipe et la solidarité</li>
                            <li><i className="fas fa-check-circle"></i> Le respect de la nature et de l'environnement</li>
                            <li><i className="fas fa-check-circle"></i> La débrouillardise et l'autonomie</li>
                            <li><i className="fas fa-check-circle"></i> Les valeurs chrétiennes et morales</li>
                        </ul>
                    </div>
                    <div className="project-image fadeInRight">
                        <img src="https://placehold.co/400x350/e0e0e0/333333?text=Projet+Educatif" alt="Projet éducatif" />
                    </div>
                </div>
            </section>

            {/* Ce que nous faisons */}
            <section className="container what-we-do-section fadeInUp">
                <h2 className="section-title-center unit-top">Ce que nous faisons</h2>
                <div className="text-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <p>
                        Le Groupe Scout Alpha propose une méthode éducative complète basées sur les valeurs du scoutisme.
                        À travers le jeu, la vie en plein air et la prise de responsabilité, nous aidons les jeunes à
                        devenir des citoyens actifs, heureux et utiles.
                    </p>
                    <p>
                        Nos activités incluent des camps, des services communautaires, des formations techniques
                        et des moments de partage spirituel, adaptés à chaque tranche d'âge.
                    </p>
                </div>
            </section>

            {/* Où nous sommes */}
            <section className="container location-section">
                <div className="image-content fadeInLeft">
                    <img src={paroisse} alt="Notre Localisation" />
                </div>
                <div className="text-content fadeInRight">
                    <h2 className="section-title-left">Où nous sommes</h2>
                    <p>
                        Le Groupe Scout Alpha est ancré au cœur de notre communauté. Nous sommes situés
                        dans un cadre verdoyant et accessible, idéal pour les activités de plein air.
                    </p>
                    <p>
                        Notre local se trouve dans l'enceinte de la paroisse, offrant un espace sécurisé
                        et convivial pour nos réunions hebdomadaires et nos grands rassemblements.
                    </p>
                </div>
            </section>

            {/* Nos Couleurs */}
            <section className="container colors-section">
                <div className="colors-content fadeInUp">
                    <h2 className="section-title-center">Nos couleurs</h2>
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

            {/* Création et Évolution */}
            <section className="container history-section">
                <div className="text-content fadeInLeft">
                    <h2 className="section-title-left">Notre Fondation</h2>
                    <p>
                        Le Groupe Scout Alpha a été fondé par Monsieur <strong>Bayonzimina Tortue</strong>,
                        alors enseignant à l'école de la paroisse. À l'origine, le groupe était destiné
                        exclusivement aux élèves de cette école. Avec le temps, il s'est ouvert à toute
                        la communauté paroissiale, accueillant de plus en plus de jeunes.
                    </p>
                    <p>
                        Au fil des années, le groupe a connu une croissance remarquable : de quelques
                        pionniers, nous sommes passés à plus de <strong>130 membres actifs</strong> répartis
                        dans nos différentes unités. Cette expansion témoigne de la vitalité et de
                        l'engagement de notre communauté scoute.
                    </p>
                    <p>
                        En 2026, le Groupe Scout Alpha célèbre fièrement ses <strong>40 ans d'existence</strong>.
                        Quatre décennies de service, de fraternité et d'aventure qui ont marqué des
                        générations de jeunes et d'adultes dans notre communauté.
                    </p>
                    <p>
                        Depuis sa création, environ <strong>8 chefs de groupe</strong> se sont succédé à la tête
                        de notre unité, chacun transmettant le flambeau et l'esprit de service aux générations
                        suivantes. Aujourd'hui, le groupe est dirigé par <strong>Gédeon MATONDO KIMBANGI</strong>,
                        qui poursuit cette noble mission avec dévouement.
                    </p>
                </div>
                <div className="image-content fadeInRight">
                    <img src="https://placehold.co/500x400/e0e0e0/333333?text=Fondateur+et+Evolution" alt="Fondation du groupe" />
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

            {/* Notre Hymne */}
            <section className="hymn-section fadeInUp">
                <div className="container">
                    <h2 className="section-title-center">Notre Hymne</h2>
                    <div className="hymn-content">
                        <div className="hymn-icon">
                            <i className="fas fa-music"></i>
                        </div>
                        <div className="hymn-lyrics">
                            <p className="hymn-verse">
                                <em>« Sous un ciel sans etoile Alpha, unis dans la paix<br />
                                    Devant notre emblème qui monte et qui flotte plus haut<br />
                                    Saluons le de tous coeurs,c'est ce symbole d'amour<br />
                                    le bleu,le blanc et le jaune,nos couleurs sacrées<br />
                                    dans l'unité, avec courtoisie, hoo dans l'espoir confiant nous à l'éternel<br />
                                    dans la joie, dans la foi, main dans la main, pour mieux servir<br />
                                    en travaillant, persévérant, dans la discipline, ohh oui engageons nous <br />
                                    dans l'unité, la courtoise
                                    »</em>
                            </p>
                            <p className="hymn-placeholder">
                                <small>Sous un ciel</small>
                            </p>
                        </div>
                        <div className="hymn-author">
                            <span>Composé par</span>
                            <strong>Cize NZUNGU Nkosi</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Unités */}
            <section className="container units-section fadeInUp">
                <h2 className="section-title-center unit-top">Nos unités</h2>
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
                            <span className="stat-number"><CountUp end={45} /></span>
                            <span className="stat-label">Meute</span>
                        </div>
                        <div className="stat-item delay-2">
                            <span className="stat-number"><CountUp end={32} /></span>
                            <span className="stat-label">Troupe</span>
                        </div>
                        <div className="stat-item delay-3">
                            <span className="stat-number"><CountUp end={28} /></span>
                            <span className="stat-label">Compagnie</span>
                        </div>
                        <div className="stat-item delay-4">
                            <span className="stat-number"><CountUp end={15} /></span>
                            <span className="stat-label">Clan</span>
                        </div>
                        <div className="stat-item delay-5">
                            <span className="stat-number"><CountUp end={12} /></span>
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
                        <div className="family-item">
                            <img src={cora} alt="Communauté des Routiers Alpha" />
                            <span className="family-legend">Communauté des Routiers Alpha</span>
                        </div>
                        <div className="family-item">
                            <img src={alphaeuro} alt="Alpha Euro" />
                            <span className="family-legend">Alpha Euro</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
