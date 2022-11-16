import React from 'react';
import Ping from '../../images/8544713_pin_navigation_location_map_gps_icon.png';
import Phone from '../../images/211830_telephone_icon.png';
import Gmail from '../../images/4202011_email_gmail_mail_logo_social_icon.png';

export default function Contact() {

    function checkForm() {
        const nameEl = document.querySelector('#name');
        const emailEl = document.querySelector('#email');
        const messageEl = document.querySelector('#message');
        const statusMessageEl = document.querySelector('.status-message'); 

        if (!nameEl.value.trim()) {
            nameEl.nextElementSibling.nextElementSibling.textContent = "* required";
            statusMessageEl.textContent = 'Please fill out indicated field(s).';
        }
        if (!emailEl.value.trim()) {
            emailEl.nextElementSibling.nextElementSibling.textContent = "* required";
            statusMessageEl.textContent = 'Please fill out indicated field(s).';
        }
        if (!messageEl.value.trim()) {
            messageEl.nextElementSibling.nextElementSibling.textContent = "* required";
            statusMessageEl.textContent = 'Please fill out indicated field(s).';
        }

        // with all necessary fields filled out, empty input values to illuminate a form submit
        if (nameEl.value.trim() && emailEl.value.trim() && messageEl.value.trim()) {
            nameEl.value = "";
            emailEl.value = "";
            messageEl.value = "";
            document.querySelector('#subject').value = "";
        }
    };

    function formChange() {
        const nameEl = document.querySelector('#name');
        const emailEl = document.querySelector('#email');
        const messageEl = document.querySelector('#message');
        if (nameEl.value.trim()) {
            nameEl.nextElementSibling.nextElementSibling.textContent = "*"
        }
        if (emailEl.value.trim()) {
            emailEl.nextElementSibling.nextElementSibling.textContent = "*"
        }
        if (messageEl.value.trim()) {
            messageEl.nextElementSibling.nextElementSibling.textContent = "*"
        }
        if (nameEl.value.trim() && emailEl.value.trim() && messageEl.value.trim()) {
            document.querySelector('.status-message').textContent = "";
        }
    };

    return (
        <div className="mid-div">
            <section className="contact-form mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" onChange={() => formChange()}></input>
                                        <label htmlFor="name" className="">Your name</label>
                                        {' '}
                                        <span className="status">*</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" onChange={() => formChange()}></input>
                                        <label htmlFor="email" className="">Your email</label>
                                        {' '}
                                        <span className="status">*</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" onChange={() => formChange()}></input>
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" onChange={() => formChange()}></textarea>
                                        <label htmlFor="message">Your message</label>
                                        {' '}
                                        <span className="status">*</span>
                                    </div>

                                </div>
                            </div>
                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" onClick={() => {checkForm()}}>Send</a>
                        </div>
                        <span className="status status-message"></span>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><a target="_blank" href="http://maps.google.com/?q=New Braunfels, TX, USA"><img className="fas fa-2x contact-img" src={Ping}></img></a>
                                <p>New Braunfels, TX 78130, USA</p>
                            </li>

                            <li><a href="tel:+1(830)822-1234"><img className="fas fa-2x contact-img" src={Phone}></img></a>
                                <p>+1 (830)822-1234</p>
                            </li>

                            <li>
                                <a className="personal-email" href="mailto:juaninnb4096@gmail.com"><img className="fas contact-img fa-2x" src={Gmail}></img></a>
                                <p>juaninnb4096@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}