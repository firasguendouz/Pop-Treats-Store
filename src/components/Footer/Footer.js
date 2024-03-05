import './footer.css'; // Make sure to import the CSS file for styling

import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Pop Treats Store. All rights reserved.</p>
                <p>Follow us on social media!</p>
                <div className="social-links">
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
