import React from 'react';
import xrplLogo from '../assets/xrpl.png'; // Vous devrez ajouter ce logo
import crossmarkLogo from '../assets/crossmark.png'; // Vous devrez ajouter ce logo

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <a href="https://xrpl.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={xrplLogo} alt="XRPL" className="footer-logo" />
        </a>
        <a href="https://crossmark.io/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={crossmarkLogo} alt="Crossmark" className="footer-logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
