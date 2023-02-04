import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel2';
import { Link } from "react-router-dom";

const ProductSlider = (props) => {
    const prodcutSliderOptions = {
        items: 3,
        nav: false,
        autoplay: true,
        margin: 20,
        smartSpeed: 1500
    };
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProduct(result);
    }
    
    return (
        <div className="product-slider gap-top">
            <div className="row align-items-center">
                <div className="col-md-4 text-start">
                    <h2 className="text-start">{props.name} <span>{props.subname}</span></h2>
                    <div className="f-sm gap-bottom-sm mt-3">Meet our most lovable plants.</div>
                    <Link to="" className="btn-v">Explore More</Link>
                </div>
                <div className="col-md-8">
                
                <OwlCarousel options={prodcutSliderOptions}>
                    
                        {
                            
                            product.map((item) =>
                            
                                <div key={item._id} className="product-block position-relative">
                                    <Link to={"/product-detail/" + item._id}>
                                    <div className="product">
                                        <div className="p-label orange"></div>
                                        <div className="p-image-block">
                                            <img src="img/pc-1.jpg" alt="" />
                                        </div>
                                        <div className="p-cnt-block pt-5 f-md">
                                            <div className="pb-3">{item.name}</div>
                                            <div className="gray-text">&#8377; <span>{item.price}</span></div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                

                            )
                            
                        }
                        </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider;