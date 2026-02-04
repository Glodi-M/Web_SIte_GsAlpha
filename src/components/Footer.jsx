import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-socials">
                    <a
                        href="https://www.facebook.com/share/17mJhzCk4i/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Suivez-nous sur Facebook"
                    >
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/groupescoutalpha"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Suivez-nous sur Instagram"
                    >
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                        href="https://www.tiktok.com/@groupescoutalpha"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Suivez-nous sur TikTok"
                    >
                        <i className="fab fa-tiktok" aria-hidden="true"></i>
                    </a>
                    <a
                        href="https://wa.me/243814487690"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactez-nous sur WhatsApp"
                    >
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                    </a>
                </div>

                <p className="copyright">
                    © {currentYear} Groupe Scout Alpha | Tous droits réservés
                </p>
                <p className="developer-credit">
                    By <span className="heart"></span> {' '}
                    <a
                        href="https://github.com/Glodi-M"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Glodi Mietete
                    </a>
                    | version build
                </p>
            </div>
        </footer>
    );
};

export default Footer;
