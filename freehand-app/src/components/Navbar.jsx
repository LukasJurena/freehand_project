import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container"> {/* Tento div je obal pro obsah navbaru */}
        <div className="logo">
          <a><Link to="/" className="logo-link">Ing. René Kafka</Link></a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>
        {/* Odkazy pro mobilní zařízení */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul className="menu-links">
            <li>
              <Link to="/o-mne" className="menu-link" onClick={toggleMenu}>
                o mně
              </Link>
            </li>
            <li>
              <Link to="/sluzby" className="menu-link" onClick={toggleMenu}>
                služby
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="menu-link" onClick={toggleMenu}>
                kontakt
              </Link>
            </li>
          </ul>
        </div>
        {/* Odkazy pro desktop */}
        <ul className="desktop-links">
          <li>
            <Link to="/o-mne" className="menu-link">
              o mně
            </Link>
          </li>
          <li>
            <Link to="/sluzby" className="menu-link">
              služby
            </Link>
          </li>
          <li>
            <Link to="/kontakt" className="menu-link">
              kontakt
            </Link>
          </li>
        </ul>
      </div> {/* Konec navbar-container */}
    </nav>
  );
};

export default Navbar;
