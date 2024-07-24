import './ContactPage.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar.js';

const Contact = () => {
    return (
        <div>
           <Navbar />
            <section id="contactsection" className="container text-center mb-5">
                <div className="container py-4">
                    <div id="contactinfocard" className="card">
                        <h1 className="display-5 fw-bold text-center mb-5">Contact info</h1>
                        <p className="fs-4 text-center">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <button className="btn btn-lg btn" type="button">Example button</button>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div id="formcarddiv" className="col-md-6">
                            <div className="card">
                                <form id="formcard" className="text-center p-4">
                                    <h2 className="text-center mb-5">Write us a message!</h2>

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
                                        <textarea className="form-control" rows="5" id="message"></textarea>
                                    </div>

                                    <button className="btn btn-light mt-3">Send</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div id="gettintherecard" className="card h-100">
                                <h2 className="text-center mb-5">Getting there</h2>
                                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                                <button id="newbtn" className="btn btn-outline-secondary" type="button">Example button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map-container pb-5">
                <div className="container">
                    <iframe className="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101257.12284776446!2d-77.56330202084071!3d37.52477641775529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C+VA%2C+USA!5e0!3m2!1sen!2sin!4v1488891294599" allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
