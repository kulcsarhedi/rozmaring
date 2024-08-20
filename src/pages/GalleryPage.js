import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Link } from 'react-router-dom';
import galleryImage1 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage2 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage3 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure

import images from '../components/images.js';

import Navbar from '../components/navbar.js';

import './GalleryPage.scss';

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div id="gallery">
     <div id='navbarrrr'> <Navbar /></div>
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

      {/* Services section */}
      <section id="Services2" className="container-fluid py-5 text-center mb-5">
                <div className="container py-5 text-center">
                    <h2 className="fw-bold">{t('Home.Connect.h1')}</h2>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmark-heart mb-4" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                            </svg>
                            <h3 className="mb-5">{t('Home.Connect.card1title')}</h3>
                            <p className="mb-2">{t('Home.Connect.card1text')}</p>
                            <Link to="/Contact">
                <button id="newbtn" class="mx-5 my-5 mt-5">{t('Button.contact')}</button>
            </Link>  
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calendar-check mb-4" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            <h3 className="mb-5">{t('Home.Connect.card2title')}</h3>
                            <p className="mb-2">{t('Home.Connect.card2text')}</p>
                            <Link to="/Booking#">
                              <button id="newbtn" class="mx-5 my-5 mt-5">{t('Button.book')}</button>
                            </Link>  
                        </div>
                    </div>
                </div>
            </section>

    </div>
  );
};

export default LightboxGallery;
