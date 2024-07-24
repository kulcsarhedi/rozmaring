import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 
import './BookingPage.scss'; 

import Navbar from '../components/navbar.js';

import bedpic from '../pictures/2kislampa_agy.jpeg';

import galleryImage1 from '../pictures/konyha.jpeg'; // Adjust the path according to your directory structure
import galleryImage2 from '../pictures/4konyhapult_tanulas.jpeg'; // Adjust the path according to your directory structure
import galleryImage3 from '../pictures/furdo_zuhany.jpeg'; // Adjust the path according to your directory structure


const BookingPage = () => {
  return (
  
  <div className="content">
     <div id='navbarrr'> <Navbar /></div>
      
     


{/* Home gallery section */}
<section id="bookingsection" className="  px-5 py-5">

<div id='jumbo'class="jumbotron p-4 p-5  rounded " bis_skin_checked="1">
    <div  class="col-md-6 px-0" bis_skin_checked="1">
      <h1 class="display-4 font-italic">We can not wait to welcome you home!</h1>
       </div>
  </div>



  <div class="row mb-2" bis_skin_checked="1">
    <div class="col-md-8  " bis_skin_checked="1">
      <div id='bookingcard1' class="row mt-5 mx-3  rounded no-gutters  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" bis_skin_checked="1">
        <div class="col p-4 d-flex flex-column position-static" bis_skin_checked="1">
          <div className='row'>
          <svg class="bd-placeholder-img mb-3"  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
          <div className='row'>
          <svg class="bd-placeholder-img"  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4" bis_skin_checked="1">
      <div  id='bookingcard2' class="row mt-5 mx-3  rounded no-gutters  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" bis_skin_checked="1">
        <div class="col p-4 d-flex flex-column position-static" bis_skin_checked="1">
          <strong class="d-inline-block mb-2 text-success">Whole Apartment</strong>
          <hr></hr>
          <h3 class="mb-0">99Euro /night</h3>
          <div class="mb-1 text-muted" bis_skin_checked="1">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>

         
        </div>
        
      </div>
    </div>
  </div>

  <div id='bookingcard3' class="p-4 mt-5 mx-3  rounded" bis_skin_checked="1">
        <h4 class="font-italic">About</h4>
        <p class="mb-0"> Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. </p>
      </div>
  
<div className=" my-4">
  <hr ></hr>
  </div>


  

      

      

        
        </section>
       

      <div class="  service-1">
  <div class="container">
 
    <div class="row">
     
      <div class="col-md-4 wrap-service1-box">
        <div class="card border-0 card-shadow mb-4">
          <div class="card-body text-center">
            <div class="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/market.png" alt="wrapkit" /></div>
            <h6 class="font-weight-medium">Retargeting Market</h6>
            <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 wrap-service1-box">
        <div class="card border-0 card-shadow mb-4">
          <div class="card-body text-center">
            <div class="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/fruit.png" alt="wrapkit" /></div>
            <h6 class="font-weight-medium">Fruitful Results</h6>
            <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 wrap-service1-box">
        <div class="card border-0 card-shadow mb-4">
          <div class="card-body text-center">
            <div class="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/instant.png" alt="wrapkit" /></div>
            <h6 class="font-weight-medium">Instant Solutions</h6>
            <p class="mt-3">You can relay on our amazing features list and also our customer services will be great experience.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-3 text-center">
        <a class="btn btn-success-gradiant text-white btn-md border-0" href="#f1"><span>View Details</span></a>
      </div>
    </div>
  </div>
</div>

    </div>

    

    


  );
};

export default BookingPage;
