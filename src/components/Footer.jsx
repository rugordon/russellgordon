import React from 'react';
import { FaEnvelope, FaTwitter, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="contact-section">
            <div className="container mx-auto px-4">

                <div className="contact-cards">
                    <div className="contact-card">
                        <FaEnvelope className="card-icon" />
                        <h4 className="card-title">Email</h4>
                        <div className="card-content">
                            <a href="mailto:me@russellgordon.co.uk" className="card-link">me@russellgordon.co.uk</a>
                        </div>
                    </div>

                    <div className="contact-card">
                        <FaEnvelope className="card-icon" />
                        <h4 className="card-title">Subscribe</h4>
                        <div className="card-content">
                            <a href="https://forms.gle/RzeDa7gtg85yBeRUA" target="_blank" rel="noopener noreferrer" className="card-link">
                                Subscription Form
                            </a>
                        </div>
                    </div>
                </div>

                <div className="social-links">
                    <a href="https://twitter.com/russellgordon" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter />
                    </a>
                    <a href="http://fb.me/russellgordonauthor" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebookF />
                    </a>
                </div>

                <div className="footer-copyright">
                    Copyright © Russell Gordon {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
