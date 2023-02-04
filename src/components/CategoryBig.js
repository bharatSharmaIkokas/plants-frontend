import React from "react";
import { Link } from "react-router-dom";

const CategoryBig = () => {
    return (
        <div className="category-big-wrapp">
            <div className="row">
                <div className="col-md-4">
                    <div className="category-big-block position-relative">
                        <Link to="/our-products">
                            <img src="img/category-big-1.jpg" alt="" className="shake-animation" />
                        </Link>
                        <div className="category-big-cnt text-center">
                            <Link to="/our-products" className="btn-v white with-white-bg lg within-section">Pots &amp; Accessories</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="category-big-block position-relative">
                        <Link to="/our-products">
                            <img src="img/category-big-2.jpg" alt="" className="shake-animation" />
                        </Link>
                        <div className="category-big-cnt text-center">
                            <Link to="/our-products" className="btn-v white with-white-bg lg within-section">Gift Green</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="category-big-block position-relative">
                        <Link to="/our-products">
                            <img src="img/category-big-3.jpg" alt="" className="shake-animation" />
                        </Link>
                        <div className="category-big-cnt text-center">
                            <Link to="/our-products" className="btn-v white with-white-bg lg within-section">Home Grown</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryBig;