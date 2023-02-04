import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 f-links">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="f-lg mb-4">COMPANY</div>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Our Products</Link></li>
                                        <li><Link to="/">Conatct Us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="f-lg mb-4">SUPPORT</div>
                                    <ul>
                                        <li><Link to="/">Help + FAQs</Link></li>
                                        <li><Link to="/">Shipping</Link></li>
                                        <li><Link to="/">Returns</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 f-logo-description">
                            <div className="row h-100">
                                <div className="col-md-5 f-logo d-flex align-items-center justify-content-center border border-top-0 border-bottom-0">
                                    <div>
                                        <div className="footer-logo-block">
                                            <Link to="/">
                                                <img src="img/logo.svg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="shares-block">
                                            <Link to="/"><i className="fa-brands fa-facebook"></i></Link>
                                            <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
                                            <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
                                            <Link to="/"><i className="fa-brands fa-youtube"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 f-support-block">
                                    <div>
                                        <div className="f-lg mb-4">SUPPORT</div>
                                        <div className="f-md mb-3">Stay in the loop with special offers,plant-parenting tips, and more.</div>
                                        <Link to="mailto:ask@junglegrooming.com"><i className="fa-solid fa-envelope"></i>
                                            ask@junglegrooming.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-block f-sm">
                &#169; 2022 | All rights Reserved
            </div>
        </footer>
    )
}

export default Footer;