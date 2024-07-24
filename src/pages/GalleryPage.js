import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import galleryImage1 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage2 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage3 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure

import images from '../components/images.js';

import Navbar from '../components/navbar.js';

import './GalleryPage.scss';

const LightboxGallery = () => {
  // Function to chunk the images array into groups of 3
  const chunkImages = (images) => {
    const chunkedImages = [];
    const keys = Object.keys(images);
    for (let i = 0; i < keys.length; i += 3) {
      chunkedImages.push(keys.slice(i, i + 3));
    }
    return chunkedImages;
  };

  const chunkedImages = chunkImages(images);

  return (
    <div id="gallery">
      <Navbar />
      <section className="py-4 px-4">
        {chunkedImages.map((chunk, index) => (
          <div key={index} className="row py-4 px-4">
            {chunk.map((key) => (
              <a
                key={key}
                href={images[key]}
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-sm-4  py-4"
              >
                <img src={images[key]} className="img-fluid" alt="Gallery" />
              </a>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default LightboxGallery;
