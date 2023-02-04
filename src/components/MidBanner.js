import React from "react";
import { Link } from "react-router-dom";

const MidBanner = () => {
    return (
        <div className="mid-banner position-relative">
            <img src="img/mid-banner.jpg" alt="" />
            <div className="mid-banner-cnt text-white text-center">
                <h2 className="text-white mb-4">Discover Our Favorites</h2>
                <p>Seed some happiness with our top picks for smart grow lights,
                    gardening kits, accessories and more.</p>
                <Link to="/our-products" className="btn-v white gap-top-sm">Explore</Link>
            </div>
        </div>
    )
}

export default MidBanner;