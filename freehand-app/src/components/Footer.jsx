import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Levý sloupec s odkazy */}
        <div className="footer-links">
          <h4>Odkazy</h4>
          <ul>
            <li><Link to="/o-mne">O mně</Link></li>
            <li><Link to="/sluzby">Služby</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        
        {/* Pravý sloupec s kontaktními informacemi */}
        <div className="footer-contact">
          <h4>Kontakt</h4>
          <p><a href="tel:+420727941697">Telefon: +420 727 941 697</a></p>
          <p><a href="mailto:kafka@roeders.cz">Email: kafka@roeders.cz</a></p>
          <p><a href="https://mesitroeders.cz/cs" target="_blank" rel="noopener noreferrer">Home Page: www.mesitroeders.cz</a></p>
        </div>
      </div>
      
      {/* Dolní část s copyrightem */}
      <div className="footer-bottom">
        <p>Lukáš Juřena &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
