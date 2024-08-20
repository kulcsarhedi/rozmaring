import './ContactPage.scss';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar.js';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        from_mail: '',
        name: '',
        message: ''
    });

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_znbxcgo', 'template_3cf0x3s', formData, '96inaNyY8G0ORZKUC')
            .then((response) => {
                setModalMessage(t('Modal.success'));
                setShowModal(true);
                setFormData({ from_mail: '', name: '', message: '' });
            }, (error) => {
                setModalMessage(t('Modal.fail'));
                setShowModal(true);
            });
    };

    return (
        <div>
            <Navbar />
            <section id="contactsection" className="container text-center mb-5">
                <div className="container py-4">
                    <div id="contactinfocard" className="card">
                        <h2 className="fw-bold text-center mb-5">{t('Contact.Card1.title')}</h2>
                        <p className="text-center">
                            {t('Contact.Card1.text1')}<br />
                            {t('Contact.Card1.text2')}<br /><br />
                            {t('Contact.Card1.text3')}<br />
                            +36305145927<br /><br />
                            E-mail:<br />
                            apartmanrozmaring@gmail.com
                        </p>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div className="col-md-6 pb-4">
                            <div id="formcarddiv" className="card h-100">
                                <form id="formcard" className="text-center p-4" onSubmit={handleSubmit}>
                                    <h2 className="text-center mb-5">{t('Contact.Card2.title')}</h2>
                                    <div className="mb-2">
                                        <label className="form-label">{t('Contact.Card2.text1')}</label>
                                        <input
                                            type="email"
                                            name="from_mail"
                                            value={formData.from_mail}
                                            onChange={handleChange}
                                            className="mb-2 form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">{t('Contact.Card2.text2')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="mb-2 form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">{t('Contact.Card2.text3')}</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control"
                                            rows="7"
                                            required
                                        ></textarea>
                                    </div>
                                    <button id="newbtn" className="btn btn-light mt-3" type="submit">
                                        {t('Button.send')}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 pb-4">
                            <div id="gettintherecard" className="card h-100">
                                <h2 className="text-centered mb-5">{t('Contact.Card3.title')}</h2>
                                <p>
                                    {t('Contact.Card3.text1')}<br />
                                    {t('Contact.Card3.text2')}<br /><br />
                                    {t('Contact.Card3.text3')}<br />
                                    {t('Contact.Card3.text4')}<br /><br />
                                    {t('Contact.Card3.text5')}<br />
                                    {t('Contact.Card3.text6')}<br /><br />
                                    {t('Contact.Card3.text7')}
                                </p>
                                <div className="col-md-12 mt-3 text-center">
                                    <a id="newbtn" className="btn" href="https://maps.app.goo.gl/mTx1nNUn7ipUh6nm7">
                                        {t('Button.map')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-container pb-5">
                        <div className="container">
                            <iframe
                                className="map-frame"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.77178929514!2d18.746901399999995!3d47.8052594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a61f0900e3e2b%3A0x6590fe8bbeaac2ba!2sEsztergom%2C%20Rozetti%20L%C3%A1z%C3%A1r%20di%C3%A1k%20u.%202%2C%202500%20Hungary!5e0!3m2!1sen!2sat!4v1723942878623!5m2!1sen!2sat"
                                allowFullScreen=""
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Modal.title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {t('Button.close')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Contact;
