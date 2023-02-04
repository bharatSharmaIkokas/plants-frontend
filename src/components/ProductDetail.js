import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Footer from "./Footer";
import ProductSlider from "./ProductSlider";

const ProductDetail = () => {
    let productSliderName1 = "Most";
    let  productSliderNameSubname1 = "Popular";
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const params = useParams();

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setDescription(result.description);
    }
    return (
        <>
            <div className="product-detail-wrapp gap-top-sm gap-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-detail-img-block">
                                <img src="../img/pc-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-detail-cnt-block">
                                <div className="p-detail-title d-flex align-items-center justify-content-between">
                                    <h2 className="text-start">{name}</h2>
                                    <div className="p-detail-price">&#8377; <span>{price}</span></div>
                                </div>
                                <div className="p-category my-5">{category}</div>
                                <p>{description}</p>
                                <a className="btn-v mt-5" href="/">Inquiry Now</a>
                            </div>
                        </div>
                        <div className="p-detail-btm-slider-wrapp">
                            <ProductSlider name={productSliderName1} subname={productSliderNameSubname1} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail;
