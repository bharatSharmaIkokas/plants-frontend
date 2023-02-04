import React from "react";
import IpBanner from "./IpBanner";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ContactUs = () => {
    let name = "Contact Us"
    return (
        <div className="contact-wrapp">
            <IpBanner name={name} />
            <div className="container-fluid gap-top gap-bottom">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="mb-5 text-start">Contact <span>Details</span></h2>
                        <div className="contact-cnt-block">
                            <h3>Address</h3>
                            <div className="f-md">Ward no. 12, Naya Bass <br /> Sardarshahar, Rajsthan <br /> 331403</div>
                        </div>
                        <div className="contact-cnt-block">
                            <h3>Phone</h3>
                            <div className="f-md"><Link to="tel:9784758659" className="gray-text">9784758659</Link ></div>
                        </div>
                        <div className="contact-cnt-block">
                            <h3>Email</h3>
                            <div className="f-md"><Link to="mailto:ask@junglegrooming.in" className="gray-text">ask@junglegrooming.in</Link >
                            </div>
                        </div>
                        <div className="contact-cnt-block">
                            <h3>Opening Time</h3>
                            <div className="f-md">8:00Am – 10:00Pm, Sunday Close</div>
                        </div>
                        <div className="contact-cnt-block">
                            <h3>Follow Us On</h3>
                            <div className="shares-block"><Link to="/"><i className="fa-brands fa-facebook"></i></Link ><Link to="/"><i
                                className="fa-brands fa-instagram"></i></Link ><Link to="/"><i
                                    className="fa-brands fa-twitter"></i></Link ><Link to="/"><i className="fa-brands fa-youtube"></i></Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14033.191307339059!2d74.48495022354753!3d28.44043713800409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914f6a6785c7779%3A0xad5bb85018bacb0b!2sSardarshahar%2C%20Rajasthan%20331403!5e0!3m2!1sen!2sin!4v1666327892557!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <section className="c-form sy-gap">
                <div className="container">
                    <div className="col-md-12">
                        <div className="text-center gap-bottom-sm">
                            <h2>Send Us Your <span>Questions!</span></h2>
                            <div>We'll get back to you within two days.</div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-md-8 mx-auto">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Full Name <span className="red-text">*</span></label>
                                                <input type="text" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email <span className="red-text">*</span></label>
                                                <input type="email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Your Message</label>
                                                <textarea></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="submit" className="btn-v">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default ContactUs;