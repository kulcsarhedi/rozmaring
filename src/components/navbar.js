// src/components/Navbar.js

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Collapse } from 'bootstrap'; // Ensure Bootstrap is correctly imported
import logo from '../pages/logo3-removebg-preview.png';
import '../App.css'; // Assuming you have some global styles
import '../pages/style.scss'; // Assuming you have some SCSS styles

const Navbar = () => {
  const navbarRef = useRef(null);

  const handleLinkClick = () => {
    const navbarCollapse = navbarRef.current;
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarCollapse = navbarRef.current;
      if (navbarCollapse && !navbarCollapse.contains(event.target)) {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav  className="navbar navbar-expand-lg">
      <div className="ms-5">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="320" height="130" />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ borderColor: 'white', marginRight: '10px' }}
      >
        <span className="navbar-toggler-icon" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-list' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M3 12.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zM2.5 8a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-1-3.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z'/%3E%3C/svg%3E")` }}
        ></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end ms-auto" id="navbarNav" ref={navbarRef}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/Gallery" onClick={handleLinkClick}>Gallery</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/Booking" onClick={handleLinkClick}>Booking</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" to="/Contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
