// Footer.js

import './Footer.css';

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Pop'it</div>
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Pop'it - All rights reserved.</p>
          {/* Add any additional footer content here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
