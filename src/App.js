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
import logo from './pages/logo3-removebg-preview.png';
import { Collapse } from 'bootstrap'; // Ensure Bootstrap is correctly imported


const App = () => {
 
  return (
    <Router>
      {/* Navbar */}
      
      <div>
     

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      </div>

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

export default App;
