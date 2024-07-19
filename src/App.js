import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import React, { useRef, useEffect } from 'react';
import BookingPage from './pages/BookingPage';
import './App.css';
//import './pages/style.css';
import './pages/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './pages/logo3.png';
import { Collapse } from 'bootstrap'; // Ensure Bootstrap is correctly imported

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
    <Router>
      {/* Navbar */}
      <nav id="navbar" className="navbar navbar-expand-lg">
        <div className="ms-5">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="340" height="140" />
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



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>

  {/* Footer */}
  <footer id="footer" className="py-4 mt-5">

  <div class="container my-5">
    <div class="row align-items-left">
      <section id="foot" class="container  row py-3">
        <div class="col-lg-3 col-md-12">
          <h1 class="fw-bold">Your final impact statement goes here. Make it memorable!</h1>
        </div>
        <div class="col-lg-3 col-md-12">
          <p class="footer-text">Add your location
            123 Anywhere St.,
            Any City, ST 12345
            123-456-7890
          </p>
        </div>
        <div class="col-lg-3 col-md-12">
          <p class="footer-text">hello@reallygreatsite.com</p>
        </div>
      </section>
    </div>
  </div>
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
            <li className="nav-item"><Link to="/Gallery" className="nav-link px-2 text-body-secondary">Gallery</Link></li>
            <li className="nav-item"><Link to="/Booking" className="nav-link px-2 text-body-secondary">Booking</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">Contact</Link></li>
            
            <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-twitter" style={{ fontSize: '24px' }}></i></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-instagram" style={{ fontSize: '24px' }}></i></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-facebook" style={{ fontSize: '24px' }}></i></a></li>
          </ul>
          

          <p className="text-center text-body-secondary">© 2024 Rozmaring Apartman, Inc</p>

  
          
    </footer>

    </Router>


  );
};

export default Navbar;
