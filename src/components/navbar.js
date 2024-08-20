import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../pages/logo3-removebg-preview.png';
import logo2 from '../pages/singlelogo-removebg-preview.png'; // New logo import
import '../App.css'; // Assuming you have some global styles
import '../pages/style.scss'; // Assuming you have some SCSS styles
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close the menu when a link is clicked
    }
  };

  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg">
      <div id="logos" className=" ms-5">
        <a className="navbar-brand" href="/#">
          <img className="logo" src={logo} alt="Logo" width="300" height="110" />
          <img className="logo2" src={logo2} alt="L" width="60" height="60 " />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
        style={{ borderColor: 'white', marginRight: '10px' }}
        onClick={toggleNavbar} // Toggle the menu on button click
      >
        <span className="navbar-toggler-icon" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-list' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M3 12.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zM2.5 8a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-1-3.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z'/%3E%3C/svg%3E")` }}
        ></span>
      </button>
      <div className={`collapse navbar-collapse justify-content-end ms-auto ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/" onClick={handleLinkClick}>{t('Nav.home')}</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/Gallery" onClick={handleLinkClick}>{t('Nav.gallery')}</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/Booking" onClick={handleLinkClick}>{t('Nav.booking')}</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/Contact" onClick={handleLinkClick}>{t('Nav.contact')}</Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
