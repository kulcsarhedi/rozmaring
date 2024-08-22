// src/components/Home.js

import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import bedpic from '../pictures/2kislampa_agy.jpeg';
import './HomePage.scss';
import galleryImage1 from '../pictures/konyha.jpeg'; // Adjust the path according to your directory structure
import galleryImage2 from '../pictures/4konyhapult_tanulas.jpeg'; // Adjust the path according to your directory structure
import galleryImage3 from '../pictures/furdo_zuhany.jpeg'; // Adjust the path according to your directory structure
import galleryImage4 from '../pictures/szoba.jpeg'; // Adjust the path according to your directory structure

import { useTranslation } from 'react-i18next';

import Navbar from '../components/navbar.js';





const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            
{/* Hero section */}
<section id="homehero">
<Navbar />

<div  className="container ">


    <div className="row align-items-center">
        <section id="hero" className=" py-3 text-center">
        <div id="text" className=" container align-items-center ">
        <p className="mx-5 my-3 mt-5">{t('Home.welcome')}</p>
            <h1 className=" fw-bold">Rozmaring</h1>
            <p className="mx-5 my-3 mt-3">{t('Home.goodbye')}</p>
            <div className="d-flex flex-column align-items-center">
            <Link to="/Booking">
                <button id="newbtn" class="mx-5 my-5 mt-5">{t('Button.book')}</button>
            </Link>  
            </div>
            </div>
        </section>
        
    </div>
</div>
</section>

{/* Header try */}
<section id="headertry" >
<div  className="container mt-5 py-5">
    <div className="row align-items-center">
        <section id="hero" className=" container col-lg-5 py-3 text-center ">
            <h1 className="fw-bold">{t('Home.Headertry.h1')}</h1>
            <p className="mx-5 my-3 mt-5">{t('Home.Headertry.p')}</p>
        </section>

        <div className="col-lg-6 mx-4">
            <img src={bedpic} className="img-fluid rounded-3 shadow-lg mb-4  " alt="Example image" loading="lazy"></img>
        </div>
    </div>
</div>
</section>

{/* Home gallery section */}
<section id="homegallery" className="  px-5 py-5">
<h1 className="text-center py-5 mb-5 fw-bold">{t('Home.Gallery.h1')}</h1>
        <p className="text-center mb-5">{t('Home.Gallery.p')}</p>
        <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="img-fluid card shadow-sm">
              <img src={galleryImage4} className="card-img-top" alt="Bedroom" />
              <div className="card-body">
                <h2 className="card-title">{t('Home.Gallery.bedroomtitle')}</h2>
                <p className="card-text">{t('Home.Gallery.bedroomtext')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="img-fluid card shadow-sm">
              <img src={galleryImage2} className="card-img-top" alt="Bedroom" />
              <div className="card-body">
                <h2 className="card-title">{t('Home.Gallery.kitchentitle')}</h2>
                <p className="card-text">{t('Home.Gallery.kitchentext')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="img-fluid card shadow-sm">
              <img src={galleryImage3} className="card-img-top" alt="Garden" />
              <div className="card-body">
                <h2 className="card-title">{t('Home.Gallery.bathtitle')}</h2>
                <p className="card-text">{t('Home.Gallery.bathtext')}.</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="d-flex flex-column align-items-center">
        <Link to="/Gallery">
                <button id="newbtnHome" className="btn mt-5 mb-3 mx-3 px-4 " src="/Gallery">{t('Button.more')}</button>
        </Link>
        </div>          
</section>

            

           

            {/* Services section */}
            <section id="Services" className="container-fluid py-5 text-center mb-5">
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

            {/* Form section 
            <div className="container">
                <form id="form" className="mx-auto w-50 text-center p-4 text-dark border rounded mb-5">
                    <h2 className="text-center mb-5 fw-bold">Contact us! </h2>

                    <div className="mb-2">
                        <label className="form-label">E-mail address</label>
                        <input type="email" className="mb-2 form-control" />
                    </div>

                    <div className="mb-2">
                        <label className="form-label">Your name</label>
                        <input type="text" className="mb-2 form-control" />
                    </div>

                    <div className="mb-2">
                        <label className="form-label">Message</label>
                        <input type="text" className="mb-2 form-control" />
                    </div>

                    <button className="btn btn-light mt-3">Send</button>
                </form>
            </div>*/}








            {/* Bootstrap JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        </div>
    );
}

export default Home;
