import React from 'react';

export default function Contact() {
    return (
        <div class="mid-div">
            <section class="contact-form mb-4">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"></input>
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"></input>
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"></input>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><a target="_blank" href="http://maps.google.com/?q=New Braunfels, TX, USA"><img class="fas fa-2x contact-img" src="images/8544713_pin_navigation_location_map_gps_icon.png"></img></a>
                                <p>New Braunfels, TX 78130, USA</p>
                            </li>

                            <li><a href="tel:+1(830)822-1234"><img class="fas fa-2x contact-img" src="images/211830_telephone_icon.png"></img></a>
                                <p>+1 (830)822-1234</p>
                            </li>

                            <li>
                                <a class="personal-email" href="mailto:juaninnb4096@gmail.com"><img class="fas contact-img fa-2x" src="images/4202011_email_gmail_mail_logo_social_icon.png"></img></a>
                                <p>juaninnb4096@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}