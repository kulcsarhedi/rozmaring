import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 
import './BookingPage.scss'; 

import Navbar from '../components/navbar.js';

import galleryImage1 from '../pictures/konyha.jpeg';
import galleryImage2 from '../pictures/zurdo_minden.jpeg';
import galleryImage4 from '../pictures/agy_fektetett.jpeg';

import { useTranslation } from 'react-i18next';

const BookingPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="content">
      <div id='navbarrr'><Navbar /></div>
      
      {/* Home gallery section */}
      <section id="bookingsection" className="px-5 py-5">
        <div id='jumbo' className="jumbotron p-4 p-5 rounded">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">{t('Booking.h1')}</h1>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-8 col-lg-8">
            <div id='bookingcard1' className=" row mt-5 mx-3 rounded no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <div className='galleryContainer'>
                  <div className="gallery">
                    <div className="topImage">
                      <img src={galleryImage4} alt="Top Image" />
                    </div>
                    <div className="bottomImages">
                      <img src={galleryImage1} alt="Bottom Image 1" />
                      <img src={galleryImage2} alt="Bottom Image 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div id='bookingcard2' className="row mt-5 mx-3 rounded no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 p">
              <div className="col p-4 d-flex flex-column position-static ">
                <strong className="d-inline-block mb-2 ">{t('Booking.Card1.title')}</strong>
                <hr />
                <div className="mb-2 ">{t('Booking.Card1.from')}</div>
                <h3 className="mb-3">{t('Booking.Card1.price')}</h3>
                
                <p className="mb-4">{t('Booking.Card1.text')}</p>
                <a id="newbtn" className="btn " href="https://www.booking.com/hotel/hu/rozmaring-apartman-esztergom13.hu.html?aid=356980&label=gog235jc-1DCAsoZ0Iecm96bWFyaW5nLWFwYXJ0bWFuLWVzenRlcmdvbTEzSAdYA2gOiAEBmAERuAEHyAEM2AED6AEBiAIBqAIDuAKbuYO2BsACAdICJGY1NWRjNDFlLTBhYjItNGY0MS1hNmUxLWE0ZDMyNDdiOGFhYdgCBOACAQ&sid=3824b15c825b65a1b81c72297983d1d5&dist=0&keep_landing=1&sb_price_type=total&type=total&"  >{t('Button.book')}</a>
              </div>
            </div>
          </div>
        </div>

        <div id='bookingcard3' className="p-4 mt-5 mx-3 rounded ">
          <h4 className="font-italic">{t('Booking.Card2.title')}</h4>
          <p className="mb-0">{t('Booking.Card2.text')}</p>
        </div>

        <div className="my-4">
          <hr />
        </div>

        <div  className="service-1 ">
          <div className="container ">
            <div className="row">
              <div   className="col-md-4 wrap-service1-box ">
                <div id="smallcards" className=" card border-0 card-shadow mb-4">
                  <div  className=" card-body text-center">
                  <div  className=" my-3 ">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class=" bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
</div>
                    <h6 className="font-weight-medium">{t('Booking.Card3.title1')}</h6>
                  
                    <p className="mt-3">{t('Booking.Card3.text1')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 wrap-service1-box">
                <div id="smallcards" className="card border-0 card-shadow mb-4">
                  <div className="card-body text-center">
                  <div  className="my-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
  <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982"/>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
</div>
 <h6 className="font-weight-medium">{t('Booking.Card3.title2')}</h6>
                    <p className="mt-3">{t('Booking.Card3.text2')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 wrap-service1-box">
                <div id="smallcards" className="card border-0 card-shadow mb-4">
                  <div className="card-body text-center">
                  <div  className="my-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-lamp" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.04.303A.5.5 0 0 1 5.5 0h5c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.363.687h-.002q-.225.044-.45.081a33 33 0 0 1-4.645.425V13.5a.5.5 0 1 1-1 0V8.495a33 33 0 0 1-4.645-.425q-.225-.036-.45-.08h-.003a.5.5 0 0 1-.362-.688l3-7ZM3.21 7.116A31 31 0 0 0 8 7.5a31 31 0 0 0 4.791-.384L10.171 1H5.83z"/>
  <path d="M6.493 12.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.052.075l-.001.004-.004.01V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
</svg>
</div> <h6 className="font-weight-medium">{t('Booking.Card3.title3')}</h6>
                    <p className="mt-3">{t('Booking.Card3.text3')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-3 text-center">
              <a id="newbtn" className="btn " href="https://www.booking.com/hotel/hu/rozmaring-apartman-esztergom13.hu.html?aid=356980&label=gog235jc-1DCAsoZ0Iecm96bWFyaW5nLWFwYXJ0bWFuLWVzenRlcmdvbTEzSAdYA2gOiAEBmAERuAEHyAEM2AED6AEBiAIBqAIDuAKbuYO2BsACAdICJGY1NWRjNDFlLTBhYjItNGY0MS1hNmUxLWE0ZDMyNDdiOGFhYdgCBOACAQ&sid=3824b15c825b65a1b81c72297983d1d5&dist=0&keep_landing=1&sb_price_type=total&type=total&"  >{t('Button.book')}</a>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
