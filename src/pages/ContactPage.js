
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bedpic from './bedpic.jpg';
import './HomePage.scss';
import galleryImage1 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage2 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure
import galleryImage3 from './pexels-dmitry-zvolskiy-2082087.jpg'; // Adjust the path according to your directory structure



const Contact = () => {
    return (
        <div>
            
            {/* Services section */}
            <section id="Services" className="container-fluid py-5 text-center mb-5">
                <div className="container py-5 text-center">
                    <h2 className="fw-bold">Contacts</h2>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmark-heart mb-4" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                            </svg>
                            <h3 className="mb-5">Getting there and parking</h3>
                            <p className="mb-2">Don't lose track of your dream weekend home in Esztergom! Save or bookmark this page for future reference and plan your escape.</p>
                            <button className="btn mt-3 btn-dark">Save</button>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 my-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calendar-check mb-4" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            <h3 className="mb-5">Google maps</h3>
                            <p className="mb-2">Ready to experience Esztergom's charm? Secure your stay at our weekend home near the Bazilika. Your unforgettable getaway is just a click away.</p>
                            <button className="btn hover mt-3 btn-dark">Book</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form section */}
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
            </div>





            {/* Bootstrap JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        </div>
    );
}

export default Contact;
