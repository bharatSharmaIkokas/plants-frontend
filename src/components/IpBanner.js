import React from "react";

const IpBanner = (props) => {
    return (
        <div className="ip-banner-wrapp">
            <img src="img/ip-banner.jpg" alt="" />
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default IpBanner;