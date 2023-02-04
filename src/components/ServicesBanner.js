import React from "react";

const ServicesBanner = () => {
    return (
        <div className="service-banner-wrapp gray-bg sy-gap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <i className="fa-solid fa-truck"></i>
                        <h3 className="mt-5">Free delivery</h3>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h3 className="mt-5">Secure payments</h3>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="fa-solid fa-headset"></i>
                        <h3 className="mt-5">Top-notch support</h3>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="fa-solid fa-rotate-left"></i>
                        <h3 className="mt-5">180 Days Return</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesBanner;