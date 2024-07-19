import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import galleryImage1 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage2 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage3 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure

const GalleryPage = () => {
  return (
    <div>
      <section id="gallery" className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Gallery</h2>
        <p className="text-center mb-5">Discover our beautiful gallery showcasing the charm of our weekend home and its surroundings.</p>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm">
              <img src={galleryImage1} className="card-img-top" alt="Living Room" />
              <div className="card-body">
                <h5 className="card-title">Living Room</h5>
                <p className="card-text">Cozy living room with a beautiful view.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm">
              <img src={galleryImage2} className="card-img-top" alt="Bedroom" />
              <div className="card-body">
                <h5 className="card-title">Bedroom</h5>
                <p className="card-text">Comfortable bedroom for a restful night.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm">
              <img src={galleryImage3} className="card-img-top" alt="Garden" />
              <div className="card-body">
                <h5 className="card-title">Garden</h5>
                <p className="card-text">Lush garden perfect for relaxation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
