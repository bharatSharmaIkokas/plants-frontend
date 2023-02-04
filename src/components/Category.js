import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="category-wrapp gap-top">
            <div className="category-item">
                <div className="category-content">
                    <Link to="">
                        <img src="img/category-img-1.jpg" alt="" className="shake-animation" />
                        <h3>Air Purifying</h3>
                    </Link>
                </div>
            </div>
            <div className="category-item">
                <div className="category-content">
                    <Link to="">
                        <img src="img/category-img-1.jpg" alt="" className="shake-animation" />
                        <h3>Air Purifying</h3>
                    </Link>
                </div>
            </div>
            <div className="category-item">
                <div className="category-content">
                    <Link to="">
                        <img src="img/category-img-1.jpg" alt="" className="shake-animation" />
                        <h3>Air Purifying</h3>
                    </Link>
                </div>
            </div>
            <div className="category-item">
                <div className="category-content">
                    <Link to="">
                        <img src="img/category-img-1.jpg" alt="" className="shake-animation" />
                        <h3>Air Purifying</h3>
                    </Link>
                </div>
            </div>
            <div className="category-item">
                <div className="category-content">
                    <Link to="">
                        <img src="img/category-img-1.jpg" alt="" className="shake-animation" />
                        <h3>Air Purifying</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category;