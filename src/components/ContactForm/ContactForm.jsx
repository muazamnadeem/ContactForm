import React from 'react';
import Button from '../Button/Button';
import { BiSolidPhone } from 'react-icons/bi';
import { IoIosSend } from 'react-icons/io';
import styles from './ContactForm.module.css'; // Import the CSS module

function ContactForm() {
    return (
        <section className='container'>
            <div className="d-flex mb-3">
                <Button className="mr-2" text="VIA Support Form" icon={<BiSolidPhone />} />
                <Button text="VIA Support Form" icon={<BiSolidPhone />} />
            </div>

            <div className="row mb-3 d-flex align-items-center"> {/* Wrap this div with the class 'row' */}
                <div className="col-lg-6">
                    <h2 className='text-center'>Get in Touch</h2>
                    <form >
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="name" className={styles['form-label']}>Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="col">
                                <label htmlFor="email" className={styles['form-label']}>Your Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="row mb-3"> {/* Use the 'row' class here for the two columns */}
                            <div className="col">
                                <label htmlFor="subject" className={styles['form-label']}>Subject</label>
                                <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                            </div>
                            <div className="col">
                                <label htmlFor="phone" className={styles['form-label']}>Phone</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className={styles['form-label']}>Your Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button className=" text-center" text="Send Message" icon={<IoIosSend />} />
                        </div>
                    </form>
                </div>
                <div className="col-lg-6">
                    <div className={`contactform__img ${styles.contactform__img}`}>
                        <img
                            className={`img-fluid ${styles.myImage}`}
                            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
